import { 
  collection, 
  addDoc, 
  serverTimestamp, 
  query, 
  orderBy, 
  limit,
  getDocs 
} from 'firebase/firestore';
import { db } from './firebase';

// Tipos para el formulario de contacto
export interface ContactFormData {
  nombre: string;
  email: string;
  telefono?: string;
  empresa?: string;
  tipo?: string;
  presupuesto?: string;
  mensaje: string;
  fechaEnvio: any; // serverTimestamp
  ip?: string;
  userAgent?: string;
}

export interface ContactSubmission extends ContactFormData {
  id: string;
  fechaEnvio: Date;
}

// Función para obtener la IP del usuario (aproximada)
const getUserIP = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.warn('No se pudo obtener la IP del usuario:', error);
    return 'unknown';
  }
};

// Función para enviar formulario de contacto a Firestore
export const submitContactForm = async (formData: Omit<ContactFormData, 'fechaEnvio' | 'ip' | 'userAgent'>): Promise<string> => {
  try {
    console.log('🚀 Iniciando envío a Firebase...');
    console.log('📝 Datos recibidos:', formData);

    // Verificar que Firebase esté inicializado
    if (!db) {
      throw new Error('Firebase no está inicializado correctamente');
    }

    // Obtener información adicional (no crítico si falla)
    console.log('🌐 Obteniendo IP del usuario...');
    let ip = 'unknown';
    try {
      ip = await getUserIP();
      console.log('📍 IP obtenida:', ip);
    } catch (ipError) {
      console.warn('⚠️ No se pudo obtener IP, continuando sin ella:', ipError);
    }
    
    const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown';

    // Preparar datos para enviar
    const contactData: ContactFormData = {
      ...formData,
      fechaEnvio: serverTimestamp(),
      ip,
      userAgent
    };

    console.log('📦 Datos preparados para Firebase:', contactData);

    // Verificar que la colección existe
    console.log('🗄️ Accediendo a la colección "contactos"...');
    const contactosRef = collection(db, 'contactos');
    console.log('✅ Referencia a colección creada');

    // Enviar a Firestore
    console.log('📤 Enviando documento a Firestore...');
    const docRef = await addDoc(contactosRef, contactData);
    
    console.log('✅ Formulario enviado exitosamente con ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('❌ Error detallado al enviar formulario:', error);
    console.error('🔍 Tipo de error:', typeof error);
    console.error('🔍 Error completo:', JSON.stringify(error, null, 2));
    
    // Proporcionar mensajes de error más específicos
    if (error instanceof Error) {
      console.error('📋 Mensaje de error:', error.message);
      console.error('📋 Stack trace:', error.stack);
      
      if (error.message.includes('permission-denied')) {
        throw new Error('Error de permisos en la base de datos. Las reglas de Firestore no permiten escritura. Contacta al administrador.');
      } else if (error.message.includes('network') || error.message.includes('fetch')) {
        throw new Error('Error de conexión. Verifica tu internet e inténtalo de nuevo.');
      } else if (error.message.includes('quota')) {
        throw new Error('Límite de base de datos alcanzado. Inténtalo más tarde.');
      } else if (error.message.includes('Firebase')) {
        throw new Error('Error de configuración de Firebase. Verifica la configuración.');
      }
    }
    
    throw new Error(`Error al enviar el formulario: ${error instanceof Error ? error.message : 'Error desconocido'}`);
  }
};

// Función para obtener las últimas solicitudes (para administración)
export const getRecentContacts = async (limitCount: number = 50): Promise<ContactSubmission[]> => {
  try {
    const contactsRef = collection(db, 'contactos');
    const q = query(contactsRef, orderBy('fechaEnvio', 'desc'), limit(limitCount));
    
    const querySnapshot = await getDocs(q);
    const contacts: ContactSubmission[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data() as ContactFormData;
      contacts.push({
        id: doc.id,
        ...data,
        fechaEnvio: data.fechaEnvio?.toDate() || new Date()
      });
    });
    
    return contacts;
  } catch (error) {
    console.error('Error al obtener contactos:', error);
    throw new Error('No se pudieron cargar los contactos.');
  }
};

// Función para validar email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Función para validar teléfono (formato español)
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

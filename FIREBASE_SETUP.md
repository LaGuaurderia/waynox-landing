# 🔥 Configuración de Firebase para WAYNOX Landing Page

## 📋 **Pasos para configurar Firebase:**

### 1. **Crear proyecto en Firebase Console:**
1. Ve a [console.firebase.google.com](https://console.firebase.google.com)
2. Haz clic en "Crear un proyecto"
3. Nombre del proyecto: `waynox-landing`
4. Puedes deshabilitar Google Analytics por ahora
5. Haz clic en "Crear proyecto"

### 2. **Habilitar Firestore Database:**
1. En el panel izquierdo, haz clic en "Firestore Database"
2. Haz clic en "Crear base de datos"
3. Selecciona "Comenzar en modo de prueba" (para desarrollo)
4. Selecciona la ubicación más cercana (ej: europe-west3)
5. Haz clic en "Habilitar"

### 3. **Configurar reglas de Firestore:**
1. En Firestore Database, ve a la pestaña "Reglas"
2. Reemplaza las reglas con:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contactos/{document} {
      allow write: if true;  // Permite escribir contactos
      allow read: if false;  // No permite leer (por seguridad)
    }
  }
}
```
3. Haz clic en "Publicar"

### 4. **Obtener configuración de la app web:**
1. En el panel izquierdo, haz clic en el ícono de engranaje ⚙️
2. Selecciona "Configuración del proyecto"
3. Ve a la pestaña "General"
4. Desplázate hacia abajo hasta "Tus apps"
5. Haz clic en el ícono de web `</>`
6. Nombre de la app: `waynox-landing-web`
7. Haz clic en "Registrar app"
8. **IMPORTANTE:** Copia la configuración que aparece

### 5. **Actualizar firebase-config.js:**
Reemplaza `TU_API_KEY`, etc. con los valores reales:
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyC...", // Tu API key real
    authDomain: "waynox-landing.firebaseapp.com",
    projectId: "waynox-landing",
    storageBucket: "waynox-landing.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123"
};
```

### 6. **Probar el formulario:**
1. Abre la página en localhost
2. Llena el formulario de contacto
3. Envía el mensaje
4. Verifica en Firebase Console > Firestore que aparezca el documento

## 🚨 **Notas importantes:**

- **Modo de prueba:** Firestore está en modo de prueba (permite escrituras sin autenticación)
- **Seguridad:** Para producción, deberías implementar autenticación
- **Límites:** Firestore tiene límites gratuitos generosos para empezar
- **Backup:** Los datos se guardan automáticamente en la nube de Google

## 🔧 **Solución de problemas:**

### **Error: "Firebase: Error (auth/unauthorized-domain)":**
- Ve a Firebase Console > Authentication > Settings > Authorized domains
- Agrega tu dominio (localhost para desarrollo, waynox.es para producción)

### **Error: "Firebase: Error (firestore/permission-denied)":**
- Verifica las reglas de Firestore
- Asegúrate de que estén publicadas

### **Error: "Firebase: Error (app/no-app)":**
- Verifica que firebase-config.js esté cargado antes que contact-form.js
- Verifica que la configuración sea correcta

## 📱 **Funcionalidades implementadas:**

- ✅ Validación en tiempo real
- ✅ Mensajes de éxito/error
- ✅ Estado de carga
- ✅ Almacenamiento en Firestore
- ✅ Timestamp automático
- ✅ Manejo de errores robusto

## 🌐 **Para producción:**

1. **Configurar dominio autorizado:** Agregar waynox.es en Firebase
2. **Reglas de seguridad:** Implementar autenticación si es necesario
3. **Monitoreo:** Habilitar Firebase Analytics
4. **Backup:** Configurar exportaciones automáticas

¿Necesitas ayuda con algún paso específico?

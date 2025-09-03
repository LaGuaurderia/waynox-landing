# Configuración de Firebase para el Formulario de Contacto

## 🔧 Pasos para configurar Firebase

### 1. Acceder a la Consola de Firebase
1. Ve a [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Selecciona tu proyecto `waynox-landing`

### 2. Configurar Firestore Database
1. En el menú lateral, ve a **"Firestore Database"**
2. Si no está creada, haz clic en **"Crear base de datos"**
3. Selecciona **"Comenzar en modo de prueba"** (temporalmente)
4. Elige una ubicación (recomendado: `europe-west1` para España)

### 3. Configurar las Reglas de Firestore
1. Ve a la pestaña **"Reglas"** en Firestore Database
2. Reemplaza las reglas existentes con el contenido del archivo `firestore.rules`:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir lectura y escritura en la colección 'contactos' sin autenticación
    match /contactos/{document} {
      allow read, write: if true;
    }
    
    // Reglas más restrictivas para otras colecciones
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

3. Haz clic en **"Publicar"**

### 4. Verificar la Configuración
1. Ve a la pestaña **"Datos"** en Firestore Database
2. Deberías ver una colección vacía llamada `contactos`
3. Cuando alguien envíe el formulario, aparecerán documentos aquí

## 🚨 Importante: Seguridad

**⚠️ ADVERTENCIA**: Las reglas actuales permiten escritura sin autenticación. Esto es necesario para el formulario de contacto, pero considera:

1. **Monitorear el uso**: Revisa regularmente los datos en Firestore
2. **Implementar rate limiting**: Considera añadir límites de envío por IP
3. **Validación del lado del servidor**: Los datos se validan en el frontend, pero podrías añadir validación adicional

## 🔍 Solución de Problemas

### Error: "permission-denied"
- Verifica que las reglas de Firestore estén configuradas correctamente
- Asegúrate de que la colección `contactos` tenga permisos de escritura

### Error: "network" o "connection"
- Verifica tu conexión a internet
- Comprueba que el proyecto Firebase esté activo

### Error: "quota"
- Has alcanzado el límite gratuito de Firebase
- Considera actualizar a un plan de pago

## 📊 Monitoreo

### Ver las solicitudes recibidas:
1. Ve a `/admin` en tu sitio web
2. O directamente en la consola de Firebase → Firestore Database → Datos

### Estructura de los datos:
```javascript
{
  nombre: "Juan Pérez",
  email: "juan@ejemplo.com",
  telefono: "+34600000000",
  empresa: "Mi Empresa",
  presupuesto: "2500-5500",
  mensaje: "Necesito una app móvil...",
  fechaEnvio: "2024-12-19T10:30:00Z",
  ip: "192.168.1.1",
  userAgent: "Mozilla/5.0..."
}
```

## 🎯 Próximos Pasos

1. **Configurar notificaciones**: Añadir webhooks para recibir notificaciones de nuevos contactos
2. **Integrar con CRM**: Conectar Firebase con tu sistema de gestión de clientes
3. **Analytics**: Añadir métricas de conversión del formulario
4. **Backup**: Configurar copias de seguridad automáticas

---

**¿Necesitas ayuda?** Revisa los logs del navegador (F12 → Console) para ver errores específicos.

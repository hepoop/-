# Guía de Diagnóstico para la API de OpenRouter

## Problema actual
Error 401: {"error":{"message":"User not found.","code":401}}

Este error indica que la clave API no es válida o ha sido desactivada.

## Pasos para diagnosticar y solucionar

### 1. Verificar la clave API

Ejecuta el script de prueba:
```bash
cd api
npm install node-fetch
node test-api.js
```

Si obtienes el mismo error 401, la clave API no es válida.

### 2. Obtener una nueva clave API

1. Ve a https://openrouter.ai/keys
2. Inicia sesión con tu cuenta
3. Genera una nueva clave API
4. Copia la clave nueva

### 3. Actualizar la clave API

#### En el backend (recomendado)
Configura la variable de entorno en tu servicio de hosting:
```
OPENROUTER_API_KEY="tu-nueva-clave-api"
```

#### Para pruebas locales
Actualiza el archivo test-api.js:
```javascript
const API_KEY = "tu-nueva-clave-api";
```

### 4. Probar la nueva clave

Vuelve a ejecutar el script de prueba:
```bash
node test-api.js
```

Si funciona, verás una respuesta de la API con el mensaje "API funcionando correctamente".

### 5. Actualizar el backend

Si estás usando variables de entorno (recomendado), no necesitas cambiar el código.
Si no, actualiza la constante en api/index.js:
```javascript
const API_KEY = "tu-nueva-clave-api";
```

### 6. Reiniciar el servicio

Después de actualizar la clave, reinicia tu servicio:
- En Netlify: se reinicia automáticamente con cada deploy
- En Render/Railway: se reinicia automáticamente con cada cambio
- Localmente: `npm start`

## Problemas comunes

### Clave API expuesta
Si tu clave API fue expuesta públicamente (ej. en GitHub), OpenRouter la desactiva automáticamente.
- Solución: genera una nueva clave y nunca la subas al repositorio

### Formato incorrecto
Asegúrate de incluir el prefijo "sk-or-v1-" en la clave API.

### Límites de uso
Si has alcanzado los límites de uso, la clave puede ser temporalmente desactivada.
- Solución: espera a que se renueve el límite o mejora tu plan

## Medidas de seguridad adicionales

1. **Nunca exponer la clave API en el frontend**
2. **Usar variables de entorno en el backend**
3. **Implementar rate limiting**
4. **Rotar la clave API periódicamente**
5. **Monitorear el uso de la API**

## Script de diagnóstico

El archivo `api/test-api.js` incluye un script para probar la conexión con OpenRouter.
Modifícalo con tu clave API actual y ejecútalo para verificar el estado de la conexión.

Si después de seguir estos pasos sigues teniendo problemas, contacta con el soporte de OpenRouter o revisa el estado del servicio en https://status.openrouter.ai/
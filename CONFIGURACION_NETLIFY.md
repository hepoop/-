# Guía de Configuración para Netlify

## Configuración de Variables de Entorno

1. Ve a tu sitio en Netlify
2. Haz clic en "Site settings" > "Build & deploy" > "Environment"
3. Añade las siguientes variables:

### Variable 1: OPENROUTER_API_KEY
- Key: `OPENROUTER_API_KEY`
- Value: `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`
- Status: Checked (disponible durante el build y en el runtime)

### Variable 2: FRONTEND_TOKEN
- Key: `FRONTEND_TOKEN`
- Value: Genera un token seguro (ej: `openssl rand -hex 32` o usa un generador online)
- Status: Checked (disponible durante el build y en el runtime)

## Despliegue del Backend

1. Asegúrate de tener la carpeta `netlify/functions` en tu repositorio
2. El archivo `netlify.toml` debe estar en la raíz del repositorio
3. Sube los cambios a tu repositorio

## Actualización del Frontend

1. Abre el archivo `SolucionaAi.html`
2. Actualiza la URL del API:
   ```javascript
   const API_URL = "https://tu-sitio.netlify.app/api/ai";
   ```
3. Actualiza el token:
   ```javascript
   const API_TOKEN = "el-mismo-token-que-configuraste-en-netlify";
   ```
4. Sube los cambios

## Verificación

1. Una vez desplegado, visita tu sitio
2. Abre la consola del navegador (F12)
3. Intenta usar una función de IA
4. Revisa que no aparezcan errores 401

## Solución de Problemas

### Si sigues recibiendo el error 401:

1. Verifica que la variable `OPENROUTER_API_KEY` esté correctamente configurada en Netlify
2. Asegúrate de que el valor incluya el prefijo `sk-or-v1-`
3. Verifica que la clave API esté activa en https://openrouter.ai/keys

### Si hay errores de CORS:

1. Verifica que la configuración en `netlify.toml` sea correcta
2. Asegúrate de que el dominio en `Access-Control-Allow-Origin` coincida con tu sitio

### Si las funciones no se ejecutan:

1. Verifica los logs de Netlify Functions en el panel de Netlify
2. Asegúrate de que el archivo `netlify/functions/api.js` esté en el lugar correcto

## Configuración Avanzada

### Para añadir rate limiting:

1. Crea un archivo `netlify/functions/rate-limiter.js`
2. Implementa un middleware de rate limiting
3. Importa y usa en `netlify/functions/api.js`

### Para añadir logging avanzado:

1. Configura un servicio de logging (ej. Logtail, Datadog)
2. Añade logs personalizados en `netlify/functions/api.js`
3. Configura las variables de entorno necesarias

## Recomendaciones de Seguridad

1. Nunca exponer la clave API en el frontend
2. Usar siempre variables de entorno para datos sensibles
3. Implementar rate limiting para prevenir abusos
4. Monitorear el uso de la API regularmente
5. Rotar las claves API periódicamente

Con esta configuración, tu aplicación debería funcionar correctamente en Netlify sin errores 401.
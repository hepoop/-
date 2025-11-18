# Guía para Configurar la Clave API en Netlify

## Paso 1: Acceder a la configuración de variables de entorno

1. Inicia sesión en tu cuenta de Netlify
2. Selecciona tu sitio
3. Haz clic en "Site settings" en el menú superior
4. En el menú lateral, haz clic en "Build & deploy"
5. Desplázate hacia abajo y haz clic en "Environment"

## Paso 2: Configurar la variable de entorno para la clave API

1. Haz clic en "Edit variables"
2. Añade una nueva variable:
   - Key: `OPENROUTER_API_KEY`
   - Value: `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`
   - Status: Marca la casilla "Available during builds"

## Paso 3: Configurar la variable de entorno para el token de frontend

1. Añade otra variable:
   - Key: `FRONTEND_TOKEN`
   - Value: Genera un token seguro con `node scripts/generate-token.js`
   - Status: Marca la casilla "Available during builds"

## Paso 4: Actualizar el código para usar variables de entorno

1. Abre el archivo `netlify/functions/api.js`
2. Reemplaza la línea:
   ```javascript
   "Authorization": `Bearer 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`,
   ```
   Por:
   ```javascript
   "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
   ```

## Paso 5: Desplegar los cambios

1. Sube los cambios a tu repositorio
2. Espera a que Netlify complete el despliegue
3. Prueba la aplicación

## Verificación

Para verificar que la configuración es correcta:

1. Abre la aplicación en el navegador
2. Intenta usar una función de IA
3. Si funciona correctamente, la configuración es correcta
4. Si recibes un error 401, revisa los siguientes puntos:
   - La clave API está correctamente configurada
   - El token de frontend está configurado
   - El código está usando las variables de entorno

## Solución de problemas

### Error 401: User not found

1. Verifica que la clave API sea correcta
2. Asegúrate de que la clave no haya sido revocada
3. Confirma que la cuenta de OpenRouter esté activa

### Error 401: Unauthorized

1. Verifica que el token de frontend esté configurado
2. Asegúrate de que el token en el frontend coincida con el configurado en Netlify
3. Confirma que el token se está enviando en la cabecera `X-API-Token`

## Recomendaciones de seguridad

1. Nunca expongas la clave API en el código fuente
2. Usa siempre variables de entorno para datos sensibles
3. Genera un token seguro y aleatorio para el frontend
4. Cambia las claves periódicamente
5. Monitorea el uso de la API regularmente

Con esta configuración, tu aplicación debería funcionar correctamente en Netlify sin errores 401.
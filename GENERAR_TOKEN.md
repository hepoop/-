# Generar y Configurar Token de Frontend

## Generar un token seguro

1. Ejecuta el script para generar un token:
   ```bash
   node scripts/generate-token.js
   ```

2. Copia el token generado (ej: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`)

## Configurar el token en Netlify

1. Ve a tu sitio en Netlify
2. Haz clic en "Site settings" > "Build & deploy" > "Environment"
3. Añade una nueva variable:
   - Key: `FRONTEND_TOKEN`
   - Value: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6` (el token que generaste)
   - Status: Checked (disponible durante el build y en el runtime)

## Configurar el token en el frontend

1. Abre el archivo `SolucionaAi.html`
2. Busca la línea:
   ```javascript
   const API_TOKEN = "token-seguro-aleatorio";
   ```
3. Reemplaza con tu token:
   ```javascript
   const API_TOKEN = "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6";
   ```

## Probar la configuración

1. Sube los cambios a tu repositorio
2. Espera a que Netlify complete el despliegue
3. Ejecuta el script de prueba:
   ```bash
   node scripts/test-netlify-api.js
   ```
4. Si todo está configurado correctamente, verás una respuesta de la API

## Solución de problemas

### Error 401 Unauthorized
- Verifica que el token en el frontend coincida con el configurado en Netlify
- Asegúrate de que la variable `FRONTEND_TOKEN` esté configurada correctamente en Netlify

### Error 401 User not found
- Verifica que la clave API de OpenRouter esté configurada correctamente
- Asegúrate de que la clave API sea válida y no haya sido revocada

## Recomendaciones de seguridad

1. Usa un token largo y aleatorio (mínimo 32 caracteres)
2. No expongas el token en el repositorio
3. Cambia el token periódicamente
4. Monitorea el uso de la API para detectar actividades sospechosas

Con estos pasos, tu aplicación debería funcionar correctamente con un token seguro.
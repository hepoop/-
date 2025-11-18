# Guía Completa de Solución de Errores

## Errores Comunes y Soluciones

### 1. Error 401: User not found
**Causa:** Clave API inválida, revocada o suspendida
**Solución:**
- Genera una nueva clave en https://openrouter.ai/keys
- Configúrala como variable de entorno en Netlify
- Verifica que la cuenta no esté suspendida

### 2. Error 401: Unauthorized
**Causa:** Token de frontend inválido o no configurado
**Solución:**
- Genera un token seguro con `node scripts/generate-token.js`
- Configúrala como variable de entorno FRONTEND_TOKEN en Netlify
- Actualiza el token en el frontend (SolucionaAi.html)

### 3. Error 403: Forbidden
**Causa:** Problemas de CORS o configuración de seguridad
**Solución:**
- Verifica la configuración en netlify.toml
- Asegúrate de que los headers CORS estén configurados correctamente
- Revisa que el dominio esté permitido en la configuración

### 4. Error 404: Not Found
**Causa:** URL del API incorrecta o función no desplegada
**Solución:**
- Verifica que la URL en el frontend sea correcta
- Asegúrate de que la función esté en la carpeta netlify/functions
- Revisa el archivo netlify.toml para las redirecciones

### 5. Error 429: Too Many Requests
**Causa:** Límite de velocidad excedido
**Solución:**
- Implementa rate limiting en el frontend
- Añade un debounce a las llamadas a la API
- Considera un plan superior en OpenRouter

### 6. Error 500: Internal Server Error
**Causa:** Error en el servidor de Netlify o en la función
**Solución:**
- Revisa los logs de Netlify Functions
- Verifica que el código no tenga errores de sintaxis
- Asegúrate de que todas las dependencias estén instaladas

### 7. Error de conexión: fetch failed
**Causa:** Problemas de red o configuración incorrecta
**Solución:**
- Verifica que la URL del API sea correcta
- Asegúrate de que el token esté configurado correctamente
- Revisa la configuración de CORS

## Herramientas de Diagnóstico

### 1. Prueba directa a OpenRouter
```bash
curl -i -X POST "https://openrouter.ai/api/v1/chat/completions"   -H "Authorization: Bearer TU_CLAVE_API"   -H "Content-Type: application/json"   -d '{"model":"mistralai/mistral-7b-instruct:free","messages":[{"role":"user","content":"test"}]}'
```

### 2. Prueba a la API de Netlify
```bash
node scripts/test-netlify-api.js
```

### 3. Verificación de variables de entorno
```bash
# En Netlify
netlify env:list

# Localmente
echo $OPENROUTER_API_KEY
echo $FRONTEND_TOKEN
```

## Checklist Antes del Despliegue

- [ ] Clave API de OpenRouter configurada en Netlify
- [ ] Token de frontend generado y configurado
- [ ] URL del API actualizada en el frontend
- [ ] Archivos netlify/functions/api.js y netlify.toml configurados
- [ ] Dependencias instaladas (package.json actualizado)
- [ ] Pruebas locales exitosas

## Solución de Problemas Avanzada

### 1. Logs de Netlify Functions
1. Ve a tu sitio en Netlify
2. Haz clic en "Functions" en el menú lateral
3. Selecciona tu función
4. Revisa los logs para identificar errores

### 2. Depuración en el Frontend
1. Abre la aplicación en el navegador
2. Presiona F12 para abrir las herramientas de desarrollador
3. Ve a la pestaña "Console"
4. Revisa los errores que aparecen

### 3. Pruebas de conectividad
1. Usa herramientas como Postman o Insomnia
2. Configura los headers correctamente
3. Prueba diferentes payloads para identificar el problema

## Recomendaciones Adicionales

1. **Monitoreo**: Configura alertas para errores frecuentes
2. **Versionado**: Mantén un registro de los cambios en la configuración
3. **Documentación**: Documenta cualquier problema y solución encontrados
4. **Pruebas**: Implementa pruebas automáticas para detectar problemas temprano

## Contacto de Soporte

Si después de seguir estos pasos sigues teniendo problemas:
- Soporte de OpenRouter: https://openrouter.ai/support
- Soporte de Netlify: https://www.netlify.com/support/
- Comunidad: https://community.netlify.com/

Con esta guía, deberías poder identificar y solucionar la mayoría de los problemas que puedan surgir.
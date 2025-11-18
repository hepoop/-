# Solución Rápida para Error 401 de OpenRouter

## Problema
Error 401: {"error":{"message":"User not found.","code":401}}

## Solución inmediata

### Paso 1: Genera una nueva clave API
1. Ve a https://openrouter.ai/keys
2. Inicia sesión
3. Crea una nueva clave API
4. Copia la clave (empieza con "sk-or-v1-")

### Paso 2: Actualiza la clave en tu servicio de hosting

#### Si usas Netlify:
1. Ve a Site settings > Build & deploy > Environment
2. Edita la variable `OPENROUTER_API_KEY`
3. Pega la nueva clave
4. Guarda los cambios
5. Dispara un nuevo deploy

#### Si usas Render:
1. Ve a tu servicio > Environment
2. Edita la variable `OPENROUTER_API_KEY`
3. Pega la nueva clave
4. Guarda los cambios
5. Reinicia el servicio

#### Si usas Railway:
1. Ve a tu servicio > Variables
2. Edita la variable `OPENROUTER_API_KEY`
3. Pega la nueva clave
4. Guarda los cambios
5. Redespliega

### Paso 3: Verifica la solución
1. Visita tu aplicación
2. Intenta usar una función de IA
3. Debería funcionar correctamente

## ¿Por qué ocurrió este error?
- La clave API fue expuesta públicamente (ej. en GitHub)
- OpenRouter desactiva automáticamente las claves expuestas
- La clave puede haber caducado o alcanzado su límite de uso

## Para evitar futuros problemas
- Nunca exponer claves API en el código del frontend
- Usar siempre variables de entorno para las claves
- Implementar medidas de seguridad adicionales (ver SEGURIDAD.md)

## Si el problema persiste
1. Ejecuta el script de diagnóstico:
   ```bash
   cd api
   npm install node-fetch
   node test-api.js
   ```
2. Contacta con el soporte de OpenRouter
3. Revisa el estado del servicio en https://status.openrouter.ai/

¡Con estos pasos tu aplicación debería volver a funcionar normalmente!
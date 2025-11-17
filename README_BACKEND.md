# Backend Seguro para SolucionaTodo AI

Este backend serverless protege tu clave API de OpenRouter al exponerla en el frontend.

## Pasos para desplegar en Vercel

1. **Instalar Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Clonar o crear el proyecto**
   - Copia la carpeta `api` en tu proyecto
   - O clona este repositorio

3. **Configurar variable de entorno**
   - Inicia sesión en Vercel: `vercel login`
   - Despliega el proyecto: `vercel --prod`
   - En el panel de Vercel, ve a Settings > Environment Variables
   - Añade la variable: `OPENROUTER_API_KEY` con el valor `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`

4. **Actualizar el frontend**
   - En SolucionaAi.html, reemplaza `https://tu-proyecto.vercel.app/api/ai` con tu URL real de Vercel

## Arquitectura

- El frontend llama a `/api/ai` en tu dominio de Vercel
- El backend añade la clave API desde variables de entorno y llama a OpenRouter
- La respuesta se devuelve al frontend de forma segura

## Ventajas

- ✅ La clave API nunca se expone en el código del frontend
- ✅ Puedes rotar la clave sin actualizar el frontend
- ✅ Mayor control sobre el uso y límites
- ✅ Posibilidad de añadir caché, logs y análisis

## Notas

- El backend está implementado como función serverless en Node.js
- Se usa Vercel por simplicidad, pero funciona en cualquier plataforma serverless
- Se incluye configuración CORS para permitir llamadas desde cualquier origen
# Backend Seguro para SolucionaTodo AI con GitHub Pages

Este backend protege tu clave API de OpenRouter al exponerla en el frontend usando GitHub Pages.

## Opciones para despliegue con GitHub Pages

### Opción 1: Usar Netlify Functions (Recomendado)

1. **Prepara el backend**
   - Sube la carpeta `api` a tu repositorio
   - Asegúrate que el `package.json` esté configurado

2. **Conecta con Netlify**
   - Crea una cuenta en Netlify
   - Conecta tu repositorio de GitHub
   - En Settings > Build & deploy > Environment
   - Añade la variable: `OPENROUTER_API_KEY` con el valor `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`

3. **Despliega**
   - Netlify detectará automáticamente las funciones en `api/`
   - Obtendrás una URL como: `https://tu-proyecto.netlify.app/api/ai`

4. **Actualiza el frontend**
   - En SolucionaAi.html, reemplaza `https://tu-proyecto.vercel.app/api/ai` con tu URL de Netlify

### Opción 2: Usar Render.com

1. **Crea un servicio web en Render**
   - Regístrate en Render
   - Crea un "Web Service" con el código de `api/index.js`
   - En Environment, añade `OPENROUTER_API_KEY`

2. **Configura para despliegue automático**
   - Conecta tu repositorio de GitHub
   - Render desplegará cada vez que hagas push

3. **Actualiza el frontend**
   - Usa la URL que te proporcione Render

### Opción 3: Usar Railway.app

1. **Crea un proyecto en Railway**
   - Regístrate en Railway
   - Importa el repositorio o despliega desde GitHub
   - Añade la variable de entorno `OPENROUTER_API_KEY`

2. **Obtén la URL**
   - Railway te dará una URL pública para tu API
   - Actualiza esta URL en el frontend

## Arquitectura

```
Frontend (GitHub Pages) → API Backend (Netlify/Render/Railway) → OpenRouter
```

## Ventajas

- ✅ La clave API nunca se expone en el código del frontend
- ✅ GitHub Pages es gratis para el frontend
- ✅ Puedes usar cualquier servicio serverless para el backend
- ✅ Separación clara entre frontend y backend

## Notas

- GitHub Pages solo sirve contenido estático, por eso necesitas un backend externo
- Netlify Functions es la opción más simple si ya usas GitHub
- Render y Railway son excelentes alternativas gratuitas
# Guía de Seguridad para SolucionaTodo AI

Implementación segura con GitHub Pages y backend protegido.

## 🔐 Medidas de seguridad implementadas

### 1. Protección de clave API
- ✅ Clave API guardada en variables de entorno del backend
- ✅ Nunca expuesta en el código del frontend
- ✅ Posibilidad de rotación sin actualizar frontend

### 2. Autenticación entre frontend y backend
- ✅ Token único para validar peticiones
- ✅ El backend rechaza peticiones sin token válido
- ✅ El token se configura como variable de entorno segura

### 3. Rate limiting
- ✅ Límite de 100 peticiones por IP cada 15 minutos
- ✅ Protección contra abusos y ataques de fuerza bruta
- ✅ Respuesta automática con mensaje de límite excedido

### 4. Validación de entrada
- ✅ Límite de tamaño de payload (10kb)
- ✅ Lista blanca de modelos permitidos
- ✅ Validación de parámetros requeridos

### 5. Logs y monitoreo
- ✅ Registro de todas las peticiones con IP y timestamp
- ✅ Logs de errores de la API de OpenRouter
- ✅ Detección de patrones de uso anómalos

## 🚀 Implementación paso a paso

### 1. Configurar el backend
```bash
# Instalar dependencias
npm install express cors node-fetch express-rate-limit crypto

# Configurar variables de entorno
export OPENROUTER_API_KEY="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"
export FRONTEND_TOKEN="token-seguro-aleatorio"

# Iniciar servidor
npm start
```

### 2. Desplegar en Netlify (recomendado)
1. Conectar repositorio a Netlify
2. Configurar variables de entorno en el panel de Netlify
3. Despliegue automático con cada push

### 3. Configurar el frontend
1. Actualizar URL del backend en SolucionaAi.html
2. Configurar token de autenticación
3. Desplegar en GitHub Pages

## 🔄 Rotación de claves

### Cuando rotar la clave API
1. Generar nueva clave en OpenRouter
2. Actualizar variable de entorno en el backend
3. Reiniciar servidor (automático en la mayoría de plataformas)

### Cuando rotar el token de frontend
1. Generar nuevo token aleatorio
2. Actualizar variable de entorno FRONTEND_TOKEN
3. Actualizar constante API_TOKEN en el frontend

## 🛡️ Recomendaciones adicionales

### En producción
- Eliminar endpoint /api/token después de configuración inicial
- Configurar CORS solo para tu dominio específico
- Implementar sistema de alertas para detección de anomalías
- Considerar usar Web Application Firewall (WAF)

### Monitoreo
- Revisar logs regularmente
- Configurar alertas para picos de uso
- Establecer cuotas diarias/semanales
- Implementar dashboard de uso

## 📋 Checklist de seguridad

- [ ] Clave API en variables de entorno
- [ ] Token de frontend configurado
- [ ] Rate limiting activado
- [ ] Logs funcionando
- [ ] CORS configurado para dominio específico
- [ ] Validación de entrada activa
- [ ] Endpoint de desarrollo eliminado en producción
- [ ] Sistema de monitoreo configurado

## 🚨 Respuesta a incidentes

### Si detectas uso no autorizado
1. Revisa logs para identificar patrones
2. Considera rotar claves inmediatamente
3. Implementa bloqueo de IPs maliciosas
4. Notifica a usuarios sobre posibles riesgos

### Si hay exposición de clave
1. Revoca inmediatamente la clave expuesta
2. Genera nueva clave
3. Actualiza variables de entorno
4. Monitorea uso de la clave antigua
5. Investiga cómo ocurrió la exposición

Con estas medidas, tu aplicación estará protegida contra los riesgos más comunes de seguridad web.
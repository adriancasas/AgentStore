# 🤖 AI Agent Store - Streamlit Dashboard

Dashboard moderno para explorar y gestionar agentes de IA, construido con Streamlit y replicando el diseño de Lovable.

## 🌟 Características

- **Diseño moderno y responsive**: Interfaz limpia inspirada en Lovable
- **Cards de agentes**: Vista en grid de 2 columnas con información destacada
- **Detalles expandibles**: Modales/expanders con información completa de cada agente
- **Sección 'Hace perfect team con'**: Sugerencias de agentes complementarios
- **CSS personalizado**: Estilos modernos sin librerías externas
- **Datos JSON**: Base de datos flexible de agentes

## 📦 Estructura del Proyecto

```
AgentStore/
├── app.py                 # Aplicación principal de Streamlit
├── agents_data.json       # Base de datos de agentes
├── requirements.txt       # Dependencias de Python
└── README.md              # Este archivo
```

## 🚀 Instalación y Uso

### Requisitos Previos

- Python 3.8 o superior
- pip (gestor de paquetes de Python)

### Instalación Local

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/adriancasas/AgentStore.git
   cd AgentStore
   ```

2. **Instalar dependencias**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Ejecutar la aplicación**:
   ```bash
   streamlit run app.py
   ```

4. **Abrir en el navegador**:
   La aplicación se abrirá automáticamente en `http://localhost:8501`

### Despliegue en VPS

1. **Conectar al VPS**:
   ```bash
   ssh usuario@tu-dominio.cloud
   ```

2. **Clonar y configurar**:
   ```bash
   cd /var/www
   git clone https://github.com/adriancasas/AgentStore.git
   cd AgentStore
   pip install -r requirements.txt
   ```

3. **Ejecutar con systemd** (recomendado para producción):
   ```bash
   # Crear archivo /etc/systemd/system/agentstore.service
   [Unit]
   Description=AgentStore Streamlit App
   After=network.target

   [Service]
   User=tu-usuario
   WorkingDirectory=/var/www/AgentStore
   ExecStart=/usr/bin/streamlit run app.py --server.port 8501
   Restart=always

   [Install]
   WantedBy=multi-user.target
   ```

4. **Activar y arrancar el servicio**:
   ```bash
   sudo systemctl daemon-reload
   sudo systemctl enable agentstore
   sudo systemctl start agentstore
   ```

5. **Configurar nginx** (reverse proxy):
   ```nginx
   server {
       listen 80;
       server_name agents.tudominio.cloud;

       location / {
           proxy_pass http://localhost:8501;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection "upgrade";
           proxy_set_header Host $host;
       }
   }
   ```

## 🎯 Agentes Disponibles

La aplicación incluye 4 agentes de ejemplo:

1. **Content Creator Pro** 🖊️ (Featured)
   - Creación de contenido profesional
   - Blog posts, redes sociales, marketing

2. **Data Analyst AI** 📈
   - Análisis de datos avanzado
   - Dashboards y reportes automáticos

3. **Code Assistant** 💻
   - Asistente de programación
   - Autocompletado y debugging

4. **Customer Support Bot** 💬
   - Atención al cliente 24/7
   - Procesamiento de lenguaje natural

## 🛠️ Personalización

### Añadir Nuevos Agentes

Edita el archivo `agents_data.json`:

```json
{
  "agents": [
    {
      "id": "tu-agente",
      "name": "Tu Agente",
      "emoji": "🚀",
      "short_description": "Descripción breve",
      "long_description": "Descripción detallada",
      "featured": false,
      "features": [
        "Funcionalidad 1",
        "Funcionalidad 2"
      ],
      "team_with": [
        {"name": "Otro Agente", "emoji": "✨"}
      ]
    }
  ]
}
```

### Modificar Estilos

Los estilos CSS están definidos en `app.py` dentro del bloque `st.markdown("""<style>...</style>""")`. Puedes personalizar:

- Colores principales
- Tamaños de fuente
- Espaciados y márgenes
- Efectos hover
- Animaciones

## 📝 Tecnologías Utilizadas

- **Streamlit** - Framework de aplicaciones web en Python
- **Python 3.8+** - Lenguaje de programación
- **JSON** - Almacenamiento de datos
- **CSS3** - Estilos personalizados

## 👍 Roadmap

- [ ] Sistema de búsqueda y filtros
- [ ] Integración con base de datos real
- [ ] Sistema de autenticación de usuarios
- [ ] Marketplace funcional
- [ ] API REST para gestión de agentes
- [ ] Modo oscuro/claro
- [ ] Internacionalización (i18n)

## 👤 Autor

**Adrian Casas**
- GitHub: [@adriancasas](https://github.com/adriancasas)

## 📜 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

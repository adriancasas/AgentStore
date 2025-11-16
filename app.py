import streamlit as st
import json
from pathlib import Path

# Page config
st.set_page_config(
    page_title="AI Agent Store",
    page_icon="🤖",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom CSS to replicate Lovable design
st.markdown("""
<style>
    /* Global styles */
    [data-testid="stAppViewContainer"] {
        background: linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%);
    }
    
    /* Hide Streamlit branding */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
    
    /* Header */
    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background: white;
        border-bottom: 1px solid #e0e0e0;
        margin: -1rem -1rem 2rem -1rem;
    }
    
    .logo {
        font-size: 1.5rem;
        font-weight: 700;
        color: #2563eb;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    /* Hero section */
    .hero {
        text-align: center;
        padding: 3rem 2rem;
        margin-bottom: 3rem;
    }
    
    .hero h1 {
        font-size: 3rem;
        font-weight: 800;
        margin-bottom: 1rem;
        color: #1f2937;
    }
    
    .hero .ai-text {
        color: #2563eb;
    }
    
    .hero p {
        font-size: 1.25rem;
        color: #6b7280;
        max-width: 800px;
        margin: 0 auto 2rem;
    }
    
    /* Agent cards */
    .agent-card {
        background: white;
        border-radius: 12px;
        padding: 2rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        transition: transform 0.2s, box-shadow 0.2s;
        cursor: pointer;
    }
    
    .agent-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    .agent-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        margin: 0 auto 1rem;
    }
    
    .agent-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1f2937;
        text-align: center;
        margin-bottom: 0.5rem;
    }
    
    .agent-description {
        color: #6b7280;
        text-align: center;
        margin-bottom: 1.5rem;
    }
    
    /* Buttons */
    .stButton>button {
        width: 100%;
        background: #2563eb;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1rem;
    }
    
    .stButton>button:hover {
        background: #1d4ed8;
    }
    
    /* Badge */
    .badge {
        display: inline-block;
        background: #10b981;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.875rem;
        font-weight: 600;
        margin-left: 0.5rem;
    }
    
    /* Feature list */
    .feature-item {
        display: flex;
        align-items: start;
        gap: 0.75rem;
        padding: 0.5rem 0;
    }
    
    .feature-check {
        color: #10b981;
        font-size: 1.25rem;
    }
    
    /* Team agents */
    .team-agent-card {
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .team-avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
    }
</style>
""", unsafe_allow_html=True)

# Load agents data
@st.cache_data
def load_agents():
    try:
        with open('agents_data.json', 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        # Fallback data if file doesn't exist
        return {
            "agents": [
                {
                    "id": "content-creator",
                    "name": "Content Creator Pro",
                    "emoji": "🖊️",
                    "short_description": "Crea contenido profesional en segundos",
                    "long_description": "Generate high-quality blog posts, social media content, and marketing copy with advanced AI algorithms.",
                    "featured": True,
                    "features": [
                        "Procesamiento en tiempo real con IA avanzada",
                        "Integración simple con tus herramientas",
                        "Soporte 24/7 en español",
                        "Actualizaciones automáticas constantes",
                        "Seguridad y privacidad garantizada",
                        "Resultados verificados por expertos"
                    ],
                    "team_with": [
                        {"name": "SEO Optimizer", "emoji": "🐝"},
                        {"name": "Social Media Manager", "emoji": "📢"}
                    ]
                },
                {
                    "id": "data-analyst",
                    "name": "Data Analyst AI",
                    "emoji": "📈",
                    "short_description": "Convierte datos en decisiones inteligentes",
                    "long_description": "Transform raw data into actionable insights with powerful AI-driven analytics and visualization tools.",
                    "featured": False,
                    "features": [
                        "Análisis predictivo avanzado",
                        "Dashboards interactivos",
                        "Integración con múltiples fuentes de datos",
                        "Reportes automáticos",
                        "Machine Learning integrado"
                    ],
                    "team_with": [
                        {"name": "Business Intelligence", "emoji": "🎯"},
                        {"name": "Report Generator", "emoji": "📄"}
                    ]
                },
                {
                    "id": "code-assistant",
                    "name": "Code Assistant",
                    "emoji": "💻",
                    "short_description": "Tu copiloto para programar más rápido",
                    "long_description": "Accelerate your development workflow with intelligent code suggestions, debugging, and documentation.",
                    "featured": False,
                    "features": [
                        "Autocompletado inteligente",
                        "Detección de bugs en tiempo real",
                        "Generación de documentación",
                        "Refactoring automático",
                        "Soporte para múltiples lenguajes"
                    ],
                    "team_with": [
                        {"name": "Testing Assistant", "emoji": "🧪"},
                        {"name": "DevOps Helper", "emoji": "⚙️"}
                    ]
                },
                {
                    "id": "customer-support",
                    "name": "Customer Support Bot",
                    "emoji": "💬",
                    "short_description": "Atiende a tus clientes 24/7",
                    "long_description": "Provide instant, intelligent customer support with natural language processing and multi-language capabilities.",
                    "featured": False,
                    "features": [
                        "Respuestas instantáneas",
                        "Aprendizaje continuo",
                        "Multiidioma",
                        "Integración con CRM",
                        "Análisis de sentimiento"
                    ],
                    "team_with": [
                        {"name": "Ticket Manager", "emoji": "🎫"},
                        {"name": "Feedback Analyzer", "emoji": "📊"}
                    ]
                }
            ]
        }

agents_data = load_agents()

# Header
st.markdown("""
<div class="header-container">
    <div class="logo">🤖 AI Agent Store</div>
    <button style="background: #2563eb; color: white; border: none; padding: 0.5rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Sign In</button>
</div>
""", unsafe_allow_html=True)

# Hero Section
st.markdown("""
<div class="hero">
    <div style="display: inline-block; background: #dbeafe; color: #2563eb; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600; margin-bottom: 2rem;">
        ✨ Discover AI Agents
    </div>
    <h1>Transform Your Work with <span class="ai-text">AI Agents</span></h1>
    <p>Explore our curated collection of intelligent AI agents designed to automate tasks, boost productivity, and unlock new possibilities for your business.</p>
    <div style="display: flex; gap: 1rem; justify-content: center;">
        <button style="background: #2563eb; color: white; border: none; padding: 0.75rem 2rem; border-radius: 8px; font-weight: 600; font-size: 1rem; cursor: pointer;">Browse Agents →</button>
        <button style="background: white; color: #2563eb; border: 2px solid #2563eb; padding: 0.75rem 2rem; border-radius: 8px; font-weight: 600; font-size: 1rem; cursor: pointer;">Learn More</button>
    </div>
</div>
""", unsafe_allow_html=True)

# Featured AI Agents Section
st.markdown("<h2 style='text-align: center; font-size: 2.5rem; font-weight: 800; margin: 3rem 0 1rem;'>Featured AI Agents</h2>", unsafe_allow_html=True)
st.markdown("<p style='text-align: center; color: #6b7280; font-size: 1.125rem; margin-bottom: 3rem;'>Discover powerful AI agents tailored to your needs. From content creation to data analysis, find the perfect solution for your workflow.</p>", unsafe_allow_html=True)

# Agent Cards Grid
col1, col2 = st.columns(2)

for idx, agent in enumerate(agents_data['agents']):
    with col1 if idx % 2 == 0 else col2:
        with st.container():
            # Card HTML
            badge_html = '<span class="badge">Featured</span>' if agent.get('featured', False) else ''
            
            st.markdown(f"""
            <div class="agent-card">
                <div class="agent-avatar">{agent['emoji']}</div>
                <div class="agent-title">{agent['name']}</div>
                <div class="agent-description">{agent['short_description']}</div>
            </div>
            """, unsafe_allow_html=True)
            
            # Button to show details
            if st.button(f"Seleccionar →", key=f"btn_{agent['id']}", use_container_width=True):
                st.session_state[f"show_{agent['id']}"] = True
            
            # Show details in expander
            if st.session_state.get(f"show_{agent['id']}", False):
                with st.expander("📋 Ver Detalles Completos", expanded=True):
                    st.markdown(f"### {agent['name']} {badge_html}", unsafe_allow_html=True)
                    st.markdown(f"**Descripción completa:** {agent['long_description']}")
                    
                    st.markdown("#### Funcionalidades principales")
                    for feature in agent['features']:
                        st.markdown(f"<div class='feature-item'><span class='feature-check'>✅</span><span>{feature}</span></div>", unsafe_allow_html=True)
                    
                    if agent.get('team_with'):
                        st.markdown("#### 👥 Hace perfect team con")
                        team_cols = st.columns(len(agent['team_with']))
                        for idx, team_agent in enumerate(agent['team_with']):
                            with team_cols[idx]:
                                st.markdown(f"""
                                <div class="team-agent-card">
                                    <div class="team-avatar">{team_agent['emoji']}</div>
                                    <div style="font-weight: 600;">{team_agent['name']}</div>
                                </div>
                                """, unsafe_allow_html=True)
                        
                        st.info("Combina estos agentes para obtener resultados aún más potentes y automatizar flujos de trabajo completos.")
                    
                    col_btn1, col_btn2 = st.columns(2)
                    with col_btn1:
                        st.button("🚀 Comenzar Prueba Gratuita", key=f"start_{agent['id']}", use_container_width=True)
                    with col_btn2:
                        st.button("🎥 Ver Demo", key=f"demo_{agent['id']}", use_container_width=True, type="secondary")
                    
                    if st.button("✖️ Cerrar", key=f"close_{agent['id']}"):
                        st.session_state[f"show_{agent['id']}"] = False
                        st.rerun()

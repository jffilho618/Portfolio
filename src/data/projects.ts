import type { Projects } from "../types/project";

export const projects: Projects[] = [
    {
        name: "LegislaNet - Gestão de Câmaras Municipais",
        description: "Sistema completo para gestão de câmaras municipais com módulo web administrativo e aplicativo mobile. Permite gerenciamento de vereadores, sessões e pautas em tempo real. O aplicativo Flutter possibilita votações remotas pelos vereadores. Inclui portal público para acompanhamento de transmissões ao vivo, votações em tempo real, agenda de sessões, estatísticas dos vereadores e histórico de votações. Sistema multiplataforma (Web + APK) com comunicação em tempo real.",
        imageurl: [
            '/projects/landingPage-LegislaNet.png',
            '/projects/PortalPublico-LegislaNet.png',
            '/projects/PortalPublico-LegislaNet2.png',
            '/projects/DashboardPautas-LegislaNet.png',
            '/projects/Sessoes-LegislaNet.png',
            '/projects/Vereadores-LegislaNet.png',
            '/projects/VotaçõesApk-LegislaNet.png'
        ],
        role: "Desenvolvedor Fullstack & Mobile",
        technologies: "Node.js, HTML, CSS, JavaScript, Flutter, Supabase",
        deploy: "",
        github: "https://github.com/jffilho618/LegislaNet"
    },
    {
        name: "AppCred - Sistema de Gestão de Empréstimos",
        description: "Sistema web completo desenvolvido em Flask para gerenciamento de empréstimos. Permite registro e controle total de empréstimos, visualização de lucros e despesas, dashboard financeiro interativo, relatórios detalhados e gestão completa de clientes. Projeto freelancer com ciclo completo de desenvolvimento.",
        imageurl: [
            '/projects/landingPage-Appcred.png',
            '/projects/DashboardFinanceiro-AppCred.png'
        ],
        role: "Desenvolvedor Fullstack",
        technologies: "Flask, Python, HTML, CSS, JavaScript, PostgreSQL",
        deploy: "https://app-cred.vercel.app/",
        github: ""
    },
    {
        name: "Rotas Nordestinas - Plataforma de Turismo",
        description: "Plataforma web para promover e compartilhar rotas turísticas no Nordeste brasileiro. Sistema completo com autenticação de usuários, exploração de cidades e estados, compartilhamento de experiências e avaliações de destinos. Permite sugerir novas rotas turísticas, favoritar atividades e pontos turísticos. Inclui sistema de moderação com denúncias e penalidades. Área administrativa para revisão de conteúdo denunciado, aprovação de rotas sugeridas e gerenciamento de usuários. Projeto open-source focado em promover o turismo nordestino através de uma plataforma interativa para viajantes e entusiastas do turismo local.",
        imageurl: [
            '/projects/Landing-RotasNordentinas.png',
            '/projects/Dashboar-RotasNordestinas.png',
            '/projects/Cidade-RotasNordestinas.png',
            '/projects/Rota-RotasNordestinas.png',
            '/projects/Pontos turísticos.png'
        ],
        role: "Desenvolvedor Fullstack",
        technologies: "Flask, SQLite, SQLAlchemy, HTML, CSS, JavaScript, Werkzeug",
        deploy: "",
        github: "https://github.com/jffilho618/Rotas_Nordestinas"
    },
    {
        name: "Lumina - Catálogo de Livros",
        description: "Aplicativo web completo para gerenciamento de biblioteca pessoal com sistema de autenticação de usuários. Permite adicionar, visualizar, editar e excluir livros do catálogo. Arquitetura fullstack moderna com separação entre frontend e backend, API REST desenvolvida com Express e comunicação com Supabase para persistência de dados. Implementação de segurança com proteção de chaves de serviço, autenticação de usuários e validação de requisições. Projeto demonstra integração eficiente entre tecnologias frontend, backend e serviços em nuvem.",
        imageurl: '/projects/CatálogoLumina.png',
        role: "Desenvolvedor Fullstack",
        technologies: "Vue.js, Vite, Node.js, Express, Supabase, Axios",
        deploy: "",
        github: "https://github.com/jffilho618/catalogo-livros-supabase"
    },
    {
        name: "Análise de Dados - Dataset Titanic",
        description: "Projeto completo de análise exploratória de dados do dataset Titanic. Pipeline profissional incluindo tratamento de valores ausentes com estratégia por grupo, detecção e tratamento de outliers com método IQR, feature engineering (extração de títulos, tamanho da família), encoding de variáveis categóricas e normalização Min-Max. Dashboard interativo com 6 visualizações explorando correlações positivas, negativas e ausentes entre variáveis. Demonstra domínio de técnicas de ciência de dados e storytelling com visualizações.",
        imageurl: '/projects/Figure_1.png',
        role: "Analista de Dados",
        technologies: "Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Scipy",
        deploy: "",
        github: ""
    },
]
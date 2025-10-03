import { FaCode, FaPager, FaChartLine, FaServer } from "react-icons/fa";
import type { CooperationItem } from "../types/cooperation";

export const cooperationItems: CooperationItem[] = [
    {
        id: '1',
        icon: <FaPager className="text-white text-xl" />,
        title: 'Desenvolvimento Web Fullstack',
        description: 'Criação de aplicações web completas com $0, $0 no backend e $0 no frontend, garantindo interfaces responsivas e sistemas robustos.',
        highlights: [
            { text: 'Node.js, Express, Flask' },
            { text: 'Vue.js' },
            { text: 'HTML, CSS, JavaScript' }
        ]
    },
    {
        id: '2',
        icon: <FaServer className="text-white text-xl" />,
        title: 'Gerenciamento de Banco de Dados',
        description: 'Modelagem, otimização e gerenciamento de bancos de dados relacionais como $0 e $0, incluindo migração de dados com e sem $0.',
        highlights: [
            { text: 'PostgreSQL' },
            { text: 'MySQL' },
            { text: 'Docker' }
        ]
    },
    {
        id: '3',
        icon: <FaChartLine className="text-white text-xl" />,
        title: 'Análise de Dados',
        description: 'Análise e visualização de dados utilizando $0, $0 e $0, gerando insights valiosos para tomada de decisão estratégica.',
        highlights: [
            { text: 'Python' },
            { text: 'Pandas' },
            { text: 'Matplotlib' }
        ]
    },
    {
        id: '4',
        icon: <FaCode className="text-white text-xl" />,
        title: 'Desenvolvimento de APIs',
        description: 'Criação e integração de $0 para comunicação eficiente entre sistemas, utilizando $0 e $0.',
        highlights: [
            { text: 'APIs RESTful' },
            { text: 'Node.js' },
            { text: 'Flask' }
        ]
    }
];
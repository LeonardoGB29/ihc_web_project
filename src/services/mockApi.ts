// Mock API service for the portfolio app
import projectAcademic from "@/assets/hero-bg.jpg";
import projectIot from "@/assets/hero-bg.jpg";
import projectEcommerce from "@/assets/hero-bg.jpg";
import avatarLeo from "@/assets/perfil1.png";
import avatarGiomar from "@/assets/perfil2.jpeg";
import avatarJoselyn from "@/assets/perfil3.jpg";
import avatarKristopher from "@/assets/perfil4.jpg";

export interface ProcessMedia {
  type: 'image' | 'youtube' | 'pdf' | 'gif';
  src: string;
  alt?: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  media: ProcessMedia[];
  summary: string;
  links: Array<{
    title: string;
    url: string;
  }>;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  stages: ProcessStep[];
  links: {
    demo?: string;
    repo: string;
  };
}

export interface Process {
  steps: ProcessStep[];
}

export interface Repository {
  id: string;
  title: string;
  codeGif: string;
  resultGif: string;
  repoUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  skills: string[];
  links: {
    github?: string;
    mail?: string;
  };
}

// New interfaces for About/Company section
export interface CompanyItem {
  id: number;
  title: string;
  description: string;
  image?: string;
  details?: string[];
}

export interface CompanySection {
  id: string;
  title: string;
  description: string;
  items: CompanyItem[];
}

// Mock data
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Videojuego VR - Warren House',
    description: 'Experiencia de terror en realidad virtual ambientada en la misteriosa mansión Warren.',
    tags: ['Unity', 'VR', 'C#', 'Horror'],
    stages: [
      {
        id: 1,
        title: 'Propuesta inicial',
        summary: 'Documento de propuesta inicial del proyecto Warren House, incluyendo conceptualización, objetivos y alcance del videojuego de terror en VR.',
        media: [
          { 
            type: 'pdf', 
            src: 'https://drive.google.com/file/d/1NNFOFcSFLDV00SN5O8FN673S_p0sTojd/view?usp=sharing', 
            alt: 'Propuesta Inicial - Warren House' 
          }
        ],
        links: []
      },
      {
        id: 2,
        title: 'Boceto',
        summary: 'Bocetos y diseños conceptuales iniciales del proyecto, incluyendo el mapa del departamento y las mecánicas principales del juego.',
        media: [
          { 
            type: 'pdf', 
            src: 'https://drive.google.com/file/d/1OgHrZMvAJ1FZPfgEbd1psfvie6t5vJxe/view?usp=sharing', 
            alt: 'Boceto - Warren House' 
          }
        ],
        links: []
      },
      {
        id: 3,
        title: 'Maqueta',
        summary: 'Maqueta física a escala del entorno de juego para validar el diseño espacial y la navegación del jugador.',
        media: [
          { 
            type: 'pdf', 
            src: 'https://drive.google.com/file/d/1DKnz0bCUsOvLm-h3NLrHOWydVCm3FKBQ/view?usp=sharing', 
            alt: 'Maqueta - Warren House' 
          }
        ],
        links: []
      },
      {
        id: 4,
        title: 'Escenificación',
        summary: 'Documentación del proceso de escenificación y pruebas físicas con objetos reales para validar las mecánicas del juego.',
        media: [
          { 
            type: 'pdf', 
            src: 'https://drive.google.com/file/d/1S2TJ1dPvIcrqDHMZjNNaY9SbvklYAqOn/view?usp=sharing', 
            alt: 'Escenificación - Warren House' 
          }
        ],
        links: []
      },
      {
        id: 5,
        title: 'Producto final',
        summary: 'Demostración completa del videojuego Warren House en realidad virtual, mostrando todas las mecánicas implementadas y la experiencia de juego final.',
        media: [
          { 
            type: 'youtube', 
            src: 'https://youtu.be/aBeVzBqAhAw', 
            alt: 'Warren House - Producto Final' 
          }
        ],
        links: []
      }
    ],
    links: {
      demo: 'https://demo.warren-house.com',
      repo: 'https://github.com/example/warren-house-vr'
    }
  },
  {
    id: '2',
    title: 'Videojuego Colaborativo - Blandy',
    description: 'Juego colaborativo multijugador con mecánicas de cooperación y resolución de puzzles.',
    tags: ['Roblox', 'Multiplayer', 'Networking'],
    stages: [
      {
        id: 1,
        title: 'Propuesta inicial',
        summary: 'Documento de propuesta inicial del proyecto Blandy, definiendo el concepto del juego colaborativo, mecánicas principales y objetivos del proyecto.',
        media: [
          { 
            type: 'pdf', 
            src: 'https://drive.google.com/file/d/1EvSqAHVynWvcbTCquyBCzQvqLhVUs-p5/view?usp=sharing', 
            alt: 'Propuesta Inicial - Blandy' 
          }
        ],
        links: []
      },
      {
        id: 2,
        title: 'Boceto',
        summary: 'Bocetos conceptuales del juego, incluyendo diseño de personajes, niveles y mecánicas de colaboración entre jugadores.',
        media: [
          { 
            type: 'pdf', 
            src: 'https://drive.google.com/file/d/1DdnXupcha84BhZ03yH14VjSPsnSHwPAV/view?usp=sharing', 
            alt: 'Boceto - Blandy' 
          }
        ],
        links: []
      },
      {
        id: 3,
        title: 'Personas',
        summary: 'Definición de personas y perfiles de usuarios objetivo para el juego, incluyendo sus necesidades, motivaciones y comportamientos esperados.',
        media: [
          { 
            type: 'pdf', 
            src: 'https://drive.google.com/file/d/1vTBpDgTWWLqvClOY6SRvp_fW7TNgyMHK/view?usp=sharing', 
            alt: 'Personas - Blandy' 
          }
        ],
        links: []
      },
      {
        id: 4,
        title: 'Tareas',
        summary: 'Análisis de tareas y flujos de juego, documentando las acciones principales que los jugadores realizan y cómo interactúan entre sí.',
        media: [
          { 
            type: 'pdf', 
            src: 'https://drive.google.com/file/d/1Xxnczp67R7DeETowkRQYL736pvWBCpqS/view?usp=sharing', 
            alt: 'Tareas - Blandy' 
          }
        ],
        links: []
      },
      {
        id: 5,
        title: 'Eval. Usuarios',
        summary: 'Video documentando las pruebas de usuario y evaluación de la experiencia de juego, incluyendo feedback y observaciones de jugadores reales.',
        media: [
          { 
            type: 'youtube', 
            src: 'https://youtu.be/Jzv9_W2zVuI', 
            alt: 'Evaluación de Usuarios - Blandy' 
          }
        ],
        links: []
      },
      {
        id: 6,
        title: 'Producto final',
        summary: 'Demostración completa del videojuego Blandy, mostrando las mecánicas colaborativas, el sistema multijugador y la experiencia de juego final.',
        media: [
          { 
            type: 'youtube', 
            src: 'https://youtu.be/AiKOlDta7Dc', 
            alt: 'Blandy - Producto Final' 
          }
        ],
        links: []
      }
    ],
    links: {
      demo: 'https://demo.blandy.com',
      repo: 'https://github.com/example/blandy-game'
    }
  }
];

const mockProcess: Process = {
  steps: [
    {
      id: 1,
      title: 'Bosquejos (low-fi)',
      summary: 'Bocetos en papel, mapa del departamento y reglas básicas del juego.',
      media: [
        { type: 'image', src: '/process/bocetos.jpg' },
        { type: 'image', src: '/process/bocetos2.jpeg' },
        { type: 'image', src: '/process/bocetos3.jpeg' },
        { type: 'image', src: '/process/bocetos4.jpeg' },
        { type: 'image', src: '/process/bocetos5.jpeg' }
      ],
      links: []
    },
    {
      id: 2,
      title: 'Escenificación (role-play)',
      summary: 'Ensayo con objetos reales (linterna, crucifijo y biblia) para validar mecánicas base.',
      media: [
        { type: 'image', src: '/process/escena2.jpeg' },
        { type: 'image', src: '/process/escena.jpg' },
        { type: 'image', src: '/process/escena3.jpeg' },
        { type: 'image', src: '/process/escena4.jpeg' },
        { type: 'image', src: '/process/escena5.jpeg' }
      ],
      links: []
    },
    {
      id: 3,
      title: 'Maqueta interactiva',
      summary: 'Prototipo a escala: control del personaje y navegación por todo el entorno.',
      media: [
        { type: 'image', src: '/process/maqueta.jpg' },
        { type: 'image', src: '/process/maqueta2.jpeg' }
      ],
      links: []
    }
  ]
};

// Company sections data
const mockCompanySections: CompanySection[] = [
  {
    id: '1',
    title: 'Objetivos',
    description: 'Las metas principales que buscamos alcanzar como organización.',
    items: [
      {
        id: 1,
        title: 'Innovación Constante',
        description: 'Desarrollar soluciones tecnológicas innovadoras que transformen la industria del gaming y la realidad virtual, manteniéndonos siempre a la vanguardia de las nuevas tecnologías.',
        image: '/process/escena2.jpeg',
        details: [
          'Implementar las últimas tecnologías en VR y AR',
          'Crear experiencias inmersivas únicas',
          'Investigación y desarrollo continuo'
        ]
      },
      {
        id: 2,
        title: 'Excelencia en Desarrollo',
        description: 'Crear productos de alta calidad que superen las expectativas de nuestros usuarios, enfocándonos en la optimización, rendimiento y experiencia de usuario.',
        image: '/process/escena.jpg',
        details: [
          'Código limpio y mantenible',
          'Testing exhaustivo',
          'Optimización de rendimiento',
          'Mejora continua de procesos'
        ]
      },
      {
        id: 3,
        title: 'Impacto Social',
        description: 'Generar un impacto positivo en la comunidad a través de nuestros proyectos, promoviendo la educación tecnológica y el acceso a experiencias de realidad virtual.',
        image: '/process/escena.jpg',
        details: [
          'Programas educativos de VR',
          'Accesibilidad en tecnología',
          'Colaboración con instituciones educativas'
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Meta',
    description: 'Nuestra visión a largo plazo y lo que aspiramos ser.',
    items: [
      {
        id: 1,
        title: 'Liderazgo en VR',
        description: 'Convertirnos en líderes reconocidos en el desarrollo de experiencias de realidad virtual en América Latina, estableciendo nuevos estándares de calidad e innovación.',
        image: '/process/escena.jpg',
        details: [
          'Presencia en mercados internacionales',
          'Reconocimiento por innovación',
          'Portafolio diversificado de productos VR'
        ]
      },
      {
        id: 2,
        title: 'Expansión Tecnológica',
        description: 'Ampliar nuestras capacidades tecnológicas hacia nuevas plataformas y dispositivos, explorando las posibilidades de la realidad aumentada, mixta y otras tecnologías emergentes.',
        image: '/process/escena.jpg',
        details: [
          'Desarrollo multiplataforma',
          'Integración con dispositivos IoT',
          'Exploración de metaverso'
        ]
      },
      {
        id: 3,
        title: 'Equipo de Clase Mundial',
        description: 'Construir y mantener un equipo de profesionales altamente capacitados y apasionados, creando un ambiente de trabajo que fomente la creatividad y el crecimiento profesional.',
        image: '/process/escena.jpg',
        details: [
          'Programa de capacitación continua',
          'Cultura de innovación',
          'Ambiente colaborativo',
          'Desarrollo de talento interno'
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Valores',
    description: 'Los principios fundamentales que guían nuestras acciones y decisiones.',
    items: [
      {
        id: 1,
        title: 'Integridad',
        description: 'Actuamos con honestidad y transparencia en todas nuestras interacciones, manteniendo los más altos estándares éticos en cada proyecto y decisión que tomamos.',
        image: '/process/escena.jpg',
        details: [
          'Transparencia en comunicación',
          'Cumplimiento de compromisos',
          'Ética profesional',
          'Responsabilidad en decisiones'
        ]
      },
      {
        id: 2,
        title: 'Innovación',
        description: 'Fomentamos la creatividad y el pensamiento disruptivo, buscando constantemente nuevas formas de resolver problemas y mejorar nuestros productos y procesos.',
        image: '/process/escena.jpg',
        details: [
          'Experimentación continua',
          'Apertura a nuevas ideas',
          'Cultura de aprendizaje',
          'Adaptación al cambio'
        ]
      },
      {
        id: 3,
        title: 'Colaboración',
        description: 'Creemos en el poder del trabajo en equipo y la sinergia entre diferentes disciplinas, promoviendo un ambiente donde todos los miembros contribuyen al éxito común.',
        image: '/process/escena.jpg',
        details: [
          'Trabajo interdisciplinario',
          'Comunicación abierta',
          'Respeto mutuo',
          'Compartir conocimientos'
        ]
      },
      {
        id: 4,
        title: 'Excelencia',
        description: 'Nos comprometemos a entregar productos y servicios de la más alta calidad, superando expectativas y estableciendo nuevos estándares en la industria.',
        image: '/process/escena.jpg',
        details: [
          'Atención al detalle',
          'Mejora continua',
          'Superación de expectativas',
          'Calidad sobre cantidad'
        ]
      },
      {
        id: 5,
        title: 'Pasión',
        description: 'Amamos lo que hacemos y ponemos corazón en cada proyecto, manteniendo el entusiasmo y la dedicación que nos impulsa a crear experiencias extraordinarias.',
        image: '/process/escena.jpg',
        details: [
          'Compromiso con proyectos',
          'Entusiasmo contagioso',
          'Dedicación extra',
          'Orgullo por el trabajo'
        ]
      }
    ]
  }
];

const mockRepos: Repository[] = [
  {
    id: '1',
    title: 'React Dashboard',
    codeGif: '/placeholder.svg',
    resultGif: '/placeholder.svg',
    repoUrl: 'https://github.com/example/react-dashboard'
  },
  {
    id: '2',
    title: 'API REST Node.js',
    codeGif: '/placeholder.svg',
    resultGif: '/placeholder.svg',
    repoUrl: 'https://github.com/example/nodejs-api'
  },
  {
    id: '3',
    title: 'Mobile App Flutter',
    codeGif: '/placeholder.svg',
    resultGif: '/placeholder.svg',
    repoUrl: 'https://github.com/example/flutter-app'
  },
  {
    id: '4',
    title: 'ML Data Pipeline',
    codeGif: '/placeholder.svg',
    resultGif: '/placeholder.svg',
    repoUrl: 'https://github.com/example/ml-pipeline'
  }
];

const mockTeam: TeamMember[] = [
  {
    name: 'Leonardo Gaona Briceño',
    role: 'Game Developer',
    avatar: avatarLeo,
    skills: ['C#', 'Unity', 'C++'],
    links: {
      github: 'https://github.com/LeonardoGB29',
      mail: 'mailto:lgaonab@unsa.edu.pe'
    }
  },
  {
    name: 'Giomar Muñoz Curi',
    role: 'Full Stack Developer',
    avatar: avatarGiomar,
    skills: ['React', 'Unity', 'TypeScript'],
    links: {
      github: 'https://github.com/GiomarMC',
      mail: 'mailto:gmunozcu@unsa.edu.pe'
    }
  },
  {
    name: 'Joselyn Quispe Huanca',
    role: 'QA & Testing',
    avatar: avatarJoselyn,
    skills: ['React', 'TypeScript', 'CSS'],
    links: {
      github: 'https://github.com/SabinaPia',
      mail: 'mailto:joquispehua@unsa.edu.pe'
    }
  },
  {
    name: 'Kristopher Rospigliosi Gonzales',
    role: 'Interactive Developer',
    avatar: avatarKristopher,
    skills: ['TypeScript', 'C#', 'C++'],
    links: {
      github: 'https://github.com/krospigliosig',
      mail: 'mailto:krospigliosig@unsa.edu.pe'
    }
  }
];

// Mock API functions
export const api = {
  getProjects: (): Promise<Project[]> => 
    new Promise(resolve => setTimeout(() => resolve(mockProjects), 300)),
    
  getProcess: (): Promise<Process> => 
    new Promise(resolve => setTimeout(() => resolve(mockProcess), 600)),
    
  getRepositories: (): Promise<Repository[]> => 
    new Promise(resolve => setTimeout(() => resolve(mockRepos), 700)),
    
  getTeam: (): Promise<TeamMember[]> => 
    new Promise(resolve => setTimeout(() => resolve(mockTeam), 500)),
    
  getCompanySections: (): Promise<CompanySection[]> => 
    new Promise(resolve => setTimeout(() => resolve(mockCompanySections), 400)),

};

import mc from '../assets/svg/projects/mc.png'
import cj from '../assets/svg/projects/caminemosjuntas.png'
import ecommerce from '../assets/svg/projects/ecommerce.png'
import salubot from '../assets/svg/projects/three.svg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Plataforma Movimiento Ciudadano',
        projectDesc: 'Plataforma cívica desarrollada para interacción a gran escala con usuarios. Participé en el desarrollo fullstack utilizando React, Tailwind, .NET Core y PostgreSQL. Implementé arquitectura de componentes reutilizables, dashboards para distintos roles y optimización de rendimiento mediante lazy loading y code splitting.',
        tags: ['React', 'Tailwind', '.NET Core', 'PostgreSQL'],
        code: '',
        demo: 'https://public.ciudadanosenmovimiento.org/',
        image: mc
    },
    {
        id: 2,
        projectName: 'Caminemos Juntas',
        projectDesc: 'Plataforma con enfoque social para apoyar a mujeres víctimas de violencia, integrando geolocalización de centros de justicia, herramientas educativas como violentómetro y asistencia inteligente para orientación y recursos.',
        tags: ['React', 'Node JS', 'PostgreSQL', 'AI'],
        code: 'https://github.com/ceciliabh/caminemos-juntas',
        demo: 'https://www.caminemosjuntas.com/',
        image: cj
    },
    {
        id: 3,
        projectName: 'E-commerce con Next.js',
        projectDesc: 'Plataforma de comercio electrónico desarrollada con Next.js utilizando SSR y SSG para optimización SEO. Implementa rutas dinámicas, manejo global de carrito y arquitectura escalable preparada para integración con backend.',
        tags: ['Next.js', 'TypeScript', 'SSR', 'SEO'],
        code: 'https://github.com/ceciliabh/nextjs-ecommerce',
        demo: 'https://nextjs-ecommerce-lac-pi.vercel.app/',
        image: ecommerce
    },
    {
        id: 4,
        projectName: 'Salubot Asistente IA',
        projectDesc: 'Chatbot basado en inteligencia artificial diseñado para asistir a usuarios en hábitos de vida saludable. Incluye lógica conversacional, flujo de interacción en lenguaje natural y documentación técnica publicada en entorno académico.',
        tags: ['AI', 'Chatbot', 'NLP'],
        code: '',
        demo: '',
        image: salubot
    }
]
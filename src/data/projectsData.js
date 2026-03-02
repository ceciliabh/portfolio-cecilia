import cj from '../assets/svg/projects/caminemosjuntas.png'
import ecommerce from '../assets/svg/projects/ecommerce.png'
import salubot from '../assets/svg/projects/three.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Caminemos Juntas',
        projectDesc: 'AI-powered platform designed to support women victims of violence, integrating geolocation of justice centers, educational tools such as a violentómetro, and intelligent assistance for guidance and resources.',
        tags: ['React', 'Node JS', 'PostgreSQL', 'AI'],
        code: 'https://github.com/ceciliabh/caminemos-juntas',
        demo: 'https://www.caminemosjuntas.com/',
        image: cj
    },
    {
        id: 2,
        projectName: 'Next.js Ecommerce',
        projectDesc:
        'Modern ecommerce platform using Next.js with SSR & SSG for SEO optimization. Dynamic routing, global cart state management, API Routes simulation, and scalable architecture ready for backend integration.',
        tags: ['Next.js', 'TypeScript', 'SSR', 'SEO'],
        code: 'https://github.com/ceciliabh/nextjs-ecommerce',
        demo: 'https://nextjs-ecommerce-lac-pi.vercel.app/',
        image: ecommerce
    },
    {
        id: 3,
        projectName: 'Salubot AI Assistant',
        projectDesc:
        'AI-powered chatbot designed to assist users with healthy lifestyle habits. Built conversational logic, natural language interaction flow, and technical documentation published in scientific literature.',
        tags: ['AI', 'Chatbot', 'NLP'],
        code: '',
        demo: '',
        image: salubot
    }

]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
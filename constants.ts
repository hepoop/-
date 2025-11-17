import { Category, FaqItem, Testimonial, AIModule, ModuleCategory } from './types';
import { 
    TshirtIcon, PlantIcon, WrenchScrewdriverIcon, ChefHatIcon, PawIcon, HammerIcon, 
    SofaIcon, GiftIcon, BroomIcon, RecycleIcon, CodeIcon, CalendarIcon 
} from './components/icons';

export const CATEGORIES: Category[] = [
  'Manchas',
  'Mascotas',
  'Plantas',
  'Tecnología',
  'Cocina',
  'Salud',
  'Reparaciones',
  'Otro',
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ana García',
    role: 'Madre y blogger',
    avatarUrl: 'https://picsum.photos/id/1011/100/100',
    text: '¡Increíble! Me salvó de una mancha de vino tinto justo antes de una cena importante. Las instrucciones fueron claras y efectivas. ¡Totalmente recomendado!',
  },
  {
    name: 'Carlos Pérez',
    role: 'Entusiasta del DIY',
    avatarUrl: 'https://picsum.photos/id/1005/100/100',
    text: 'Usé la app para arreglar mi cafetera. Me dio los pasos exactos y ahora funciona perfectamente. Ahorré tiempo y dinero. Es mi nueva herramienta favorita.',
  },
  {
    name: 'Laura Fernández',
    role: 'Amante de las plantas',
    avatarUrl: 'https://picsum.photos/id/1012/100/100',
    text: 'Mis plantas estaban muriendo y no sabía por qué. Subí una foto y SolucionaTodo AI diagnosticó el problema al instante. ¡Mis orquídeas han vuelto a florecer!',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: '¿Cómo funciona SolucionaTodo AI?',
    answer: 'Simplemente describe tu problema en la barra de búsqueda o usa uno de nuestros módulos interactivos. Nuestra IA analiza tu consulta y te proporciona una guía paso a paso, clara y concisa, para resolverlo.',
  },
  {
    question: '¿Es seguro seguir las soluciones de la IA?',
    answer: 'Nuestra IA se basa en una amplia base de datos de fuentes confiables. Sin embargo, siempre recomendamos usar el sentido común, especialmente con reparaciones o productos químicos. La seguridad es lo primero.',
  },
  {
    question: '¿Tengo que pagar para usar la aplicación?',
    answer: 'Nuestra herramienta IA es gratis y ofrece un número generoso de soluciones cada mes. Para usuarios avanzados que necesitan acceso ilimitado, ofreceremos un plan PRO en el futuro.',
  },
  {
    question: '¿Qué tipo de problemas puedo resolver?',
    answer: 'Puedes resolver una amplia gama de problemas cotidianos: desde tareas del hogar como limpiar manchas difíciles, hasta reparar fácil problemas tecnológicos básicos, obtener soluciones caseras para el cuidado de mascotas y plantas, o generar recetas de cocina.',
  },
  {
    question: '¿Puedo subir una imagen para un mejor diagnóstico?',
    answer: '¡Sí! Varios de nuestros módulos, como el Detector de Manchas o el Doctor de Plantas, utilizan imágenes para darte una solución mucho más precisa y personalizada. Busca el ícono de la cámara.',
  },
];


export const PRESETS: Record<Category, string[]> = {
    Manchas: ['Mancha de aceite en ropa', 'Quitar sangre seca', 'Vino tinto en alfombra'],
    Mascotas: ['Mi perro come muy rápido', 'Cómo bañar a un gato', 'Quitar olor a orina'],
    Plantas: ['Hojas amarillas en ficus', 'Cochinilla en suculentas', 'Mi orquídea no florece'],
    Tecnología: ['Mi WiFi va muy lento', 'El móvil no carga', 'Limpiar teclado de portátil'],
    Cocina: ['Cómo hacer masa de pizza', 'Receta de lentejas rápidas', 'Guardar aguacate sin que se oxide'],
    Salud: ['Remedio para dolor de garganta', 'Cómo dormir mejor', 'Aliviar picadura de mosquito'],
    Reparaciones: ['Arreglar cisterna que pierde agua', 'Cambiar un enchufe', 'Tapar agujero en la pared'],
    Otro: ['Cómo ser más productivo', 'Ideas para regalo de aniversario', 'Destinos para viajar barato'],
};

export const SUGGESTIONS_DATA: Record<string, string[]> = {
    Manchas: [
        'cómo quitar manchas de grasa de la ropa de color',
        'eliminar manchas de tinta de bolígrafo de una camisa',
        'limpiar manchas de café en un sofá de tela',
        'quitar manchas amarillas de sudor en ropa blanca',
        'cómo sacar chicle pegado en un pantalón',
        'remedio casero para manchas de moho en la pared del baño',
    ],
    Mascotas: [
        'qué hacer si mi perro tiene pulgas',
        'cómo enseñar a un cachorro a hacer sus necesidades fuera',
        'comida casera para gatos con problemas renales',
        'mi gato maúlla mucho por la noche',
        'cómo cortar las uñas a un conejo',
        'juguetes caseros para entretener a un periquito',
    ],
    Plantas: ['cuidado de la planta monstera deliciosa', 'por qué se caen las hojas de mi limonero', 'cómo revivir una suculenta ahogada', 'plaga de pulgón en rosal', 'qué le pasa a mi cactus'],
    Tecnología: ['mi ordenador se sobrecalienta mucho', 'cómo mejorar la señal del router wifi', 'formatear un ordenador con windows 10', 'la impresora no imprime', 'el altavoz bluetooth no se conecta'],
    Cocina: ['receta de bizcocho de yogur esponjoso', 'cómo hacer mayonesa casera que no se corte', 'tiempo de cocción de un huevo duro perfecto', 'ideas de cenas ligeras y rápidas', 'receta de gazpacho andaluz'],
    Salud: ['ejercicios para aliviar el dolor de espalda baja', 'qué tomar para el ardor de estómago', 'cómo bajar la fiebre en adultos sin medicamentos', 'remedios para la tos seca', 'cómo reducir la ansiedad'],
    Reparaciones: ['cómo desatascar el fregadero de la cocina', 'mi lavadora no desagua', 'reparar un grifo que gotea', 'la persiana no sube', 'sellar juntas de la bañera'],
    Otro: [],
};


// New Constants for AI Modules Section
export const MODULE_CATEGORIES: ModuleCategory[] = ['Hogar y Limpieza', 'Tecnología y Gadgets', 'Cocina y Alimentos', 'Plantas y Bricolaje', 'Creatividad y Utilidades'];

export const CATEGORY_DESCRIPTIONS: Record<ModuleCategory, string> = {
    'Hogar y Limpieza': 'Soluciones rápidas IA para manchas, olores, superficies difíciles y organización del hogar.',
    'Tecnología y Gadgets': 'Diagnósticos inteligentes para celulares, PC lenta, tablets, audífonos y más problemas tecnológicos.',
    'Cocina y Alimentos': 'Recetas instantáneas con lo que tienes, sustituciones de ingredientes y técnicas de cocina fáciles.',
    'Plantas y Bricolaje': 'Detecta problemas en hojas, riego, y plagas. Obtén guías de IA para reparaciones y proyectos DIY.',
    'Creatividad y Utilidades': 'Desde encontrar el regalo perfecto hasta recibir consejos de decoración o generar ideas creativas con IA.',
};

export const AI_MODULES: AIModule[] = [
    {
        id: 'stain-eraser',
        name: 'StainEraser',
        title: 'Detector de Manchas',
        description: 'Usa nuestra IA para limpiar manchas. Sube una foto y obtén una solución paso a paso para eliminarla.',
        icon: TshirtIcon,
        category: 'Hogar y Limpieza',
        isImplemented: true,
        acceptsImage: true,
        placeholder: "Ej: 'Esta mancha apareció en mi camisa de algodón después de cenar...'",
    },
    {
        id: 'plant-id',
        name: 'Plant-ID',
        title: 'Doctor de Plantas',
        description: 'Nuestra IA para plantas ofrece un diagnóstico instantáneo. Sube una foto de tu planta y te daremos la guía rápida para salvarla.',
        icon: PlantIcon,
        category: 'Plantas y Bricolaje',
        isImplemented: true,
        acceptsImage: true,
        placeholder: "Ej: 'Las hojas de mi ficus se están cayendo y no sé por qué...'",
    },
    {
        id: 'fixbot',
        name: 'FixBot',
        title: 'Asistente de Gadgets',
        description: 'Arregla gadgets con IA. Obtén un diagnóstico instantáneo y soluciones caseras para problemas comunes en tus dispositivos.',
        icon: WrenchScrewdriverIcon,
        category: 'Tecnología y Gadgets',
        isImplemented: true,
        acceptsImage: false,
        placeholder: "Ej: 'Mi portátil se sobrecalienta cuando juego...'",
    },
    {
        id: 'chef-ai',
        name: 'ChefAI',
        title: 'Generador de Recetas',
        description: 'IA para cocina que crea recetas con los ingredientes que tienes. Recibe una guía paso a paso para preparar platos deliciosos.',
        icon: ChefHatIcon,
        category: 'Cocina y Alimentos',
        isImplemented: true,
        acceptsImage: false,
        placeholder: "Tengo pollo, arroz, pimientos y cebolla. ¿Qué puedo cocinar?",
    },
    {
        id: 'pet-guide',
        name: 'PetVet Guide',
        title: 'Guía para Mascotas',
        description: 'Consejos rápidos sobre comportamiento, nutrición y cuidados básicos. Una alternativa fácil para dueños de mascotas.',
        icon: PawIcon,
        category: 'Hogar y Limpieza',
        isImplemented: true,
        acceptsImage: false,
        placeholder: "Mi cachorro muerde los muebles, ¿qué hago?",
    },
    {
        id: 'diy-helper',
        name: 'DIY Helper',
        title: 'Asistente Bricolaje',
        description: 'Guías paso a paso para pequeñas reparaciones y proyectos de bricolaje en casa. Una herramienta IA gratis para tus proyectos.',
        icon: HammerIcon,
        category: 'Plantas y Bricolaje',
        isImplemented: true,
        acceptsImage: false,
        placeholder: "Cómo cambiar un enchufe de pared de forma segura.",
    },
    {
        id: 'decor-ai',
        name: 'DecorAI',
        title: 'Asesor de Interiores',
        description: 'Sube una foto de un espacio y recibe sugerencias de decoración. Optimiza tu hogar con este asistente inteligente.',
        icon: SofaIcon,
        category: 'Creatividad y Utilidades',
        isImplemented: true,
        acceptsImage: true,
        placeholder: "Quiero un estilo minimalista para mi salón. Esta es una foto del espacio actual.",
    },
    {
        id: 'gift-finder',
        name: 'GiftFinder',
        title: 'Buscador de Regalos',
        description: 'Encuentra el regalo perfecto con IA. Basado en intereses y personalidad para dar una sorpresa inolvidable.',
        icon: GiftIcon,
        category: 'Creatividad y Utilidades',
        isImplemented: true,
        acceptsImage: false,
        placeholder: "Busco un regalo para mi padre, le gusta la jardinería y la lectura.",
    },
    {
        id: 'clear-clutter',
        name: 'ClearClutter',
        title: 'Organizador de Espacios',
        description: 'Obtén un plan personalizado para ordenar tu casa. Soluciones caseras para la organización de cualquier habitación.',
        icon: BroomIcon,
        category: 'Hogar y Limpieza',
        isImplemented: true,
        acceptsImage: true,
        placeholder: "Mi garaje es un caos, necesito un plan para organizarlo. Aquí hay una foto.",
    },
    {
        id: 'eco-scan',
        name: 'EcoScan',
        title: 'Analizador de Reciclaje',
        description: '¿No sabes dónde va algo? Sube una foto y nuestra IA te dará una guía rápida de reciclaje.',
        icon: RecycleIcon,
        category: 'Hogar y Limpieza',
        isImplemented: true,
        acceptsImage: true,
        placeholder: "No sé si este envase de plástico se puede reciclar.",
    },
    {
        id: 'code-helper',
        name: 'CodeHelper',
        title: 'Asistente de Código',
        description: 'Resuelve dudas de programación o depura fragmentos de código. Una herramienta IA gratis para desarrolladores.',
        icon: CodeIcon,
        category: 'Tecnología y Gadgets',
        isImplemented: true,
        acceptsImage: false,
        placeholder: "Escribe una función de Python para invertir una cadena de texto.",
    },
    {
        id: 'menu-planner',
        name: 'MenuPlanner',
        title: 'Planificador de Menús',
        description: 'Crea planes de comidas semanales con IA. Basado en tus preferencias y necesidades dietéticas.',
        icon: CalendarIcon,
        category: 'Cocina y Alimentos',
        isImplemented: true,
        acceptsImage: false,
        placeholder: "Necesito un plan de comidas vegetariano para una semana, bajo en carbohidratos.",
    },
];
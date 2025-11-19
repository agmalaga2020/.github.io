export const projects = [
  {
    id: 'policyspace2-spain',
    slug: 'policyspace2-spain',
    featured: true,
    published: true,
    date: '2024-07-15',
    category: 'agent-based-modeling',
    thumbnail: '/assets/policyspace-thumb.jpg',
    technologies: ['Python', 'GeoPandas', 'XGBoost', 'SQLite', 'Mesa'],
    github: [
      {
        name: 'Main Repository',
        url: 'https://github.com/agmalaga2020/PolicySpace2_Spain_new_ETL'
      },
      {
        name: 'Predictive Model',
        url: 'https://github.com/agmalaga2020/proyecto_modelo_1'
      },
      {
        name: 'Data Warehouse',
        url: 'https://github.com/agmalaga2020/PolicySpace2_Spanish_data'
      }
    ],
    demo: 'https://agmalaga2020.github.io/proyecto_modelo_1/web/',
    paper: '/proyecto_entrega.pdf',
    metrics: [
      { label: 'municipalities', value: '8,132' },
      { label: 'accuracy', value: '0.92' },
      { label: 'dataSources', value: 'INE + Catastro' },
      { label: 'tech', value: 'Python + GeoPandas' }
    ]
  },
  {
    id: 'financial-analysis',
    slug: 'financial-analysis-dashboard',
    featured: true,
    published: false,
    date: '2025-01-15',
    category: 'financial-modeling',
    thumbnail: '/assets/financial-thumb.jpg',
    technologies: ['React', 'Python', 'FastAPI', 'TensorFlow', 'PostgreSQL'],
    github: [],
    demo: null,
    paper: null,
    metrics: []
  }
];

export const getProjectBySlug = (slug) => {
  return projects.find(p => p.slug === slug);
};

export const getFeaturedProjects = () => {
  return projects.filter(p => p.featured && p.published);
};

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ChevronLeft,
  GraduationCap,
  Github,
  FileText,
  Download,
  Award,
  BookOpen,
  Zap,
  ArrowRight,
  Brain,
  BarChart3,
  Database,
  Code
} from 'lucide-react';

const Education = ({ onBack }) => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 'fundamentals',
      nameEs: 'Fundamentos',
      nameEn: 'Fundamentals',
      icon: BookOpen,
      color: 'blue',
      courses: [
        {
          code: 'PAC1-PAC4',
          nameEs: 'Programación I (Python)',
          nameEn: 'Programming I (Python)',
          grade: 9.5,
          description: 'Fundamentos de programación con Python, estructuras de datos, algoritmos y buenas prácticas.'
        },
        {
          code: 'PAC1-PAC4',
          nameEs: 'Lógica y Sistemas Informáticos',
          nameEn: 'Logic and Computer Systems',
          grade: 8.5,
          description: 'Lógica proposicional, álgebra booleana, arquitectura de computadores.'
        },
        {
          code: 'PAC1-PAC4',
          nameEs: 'Estadística',
          nameEn: 'Statistics',
          grade: 9.2,
          description: 'Probabilidad, inferencia estadística, análisis de distribuciones.'
        }
      ]
    },
    {
      id: 'ml',
      nameEs: 'Machine Learning',
      nameEn: 'Machine Learning',
      icon: Brain,
      color: 'purple',
      courses: [
        {
          code: 'PAC1-PAC4',
          nameEs: 'Introducción a ML',
          nameEn: 'Introduction to ML',
          grade: 9.1,
          description: 'Conceptos de aprendizaje supervisado y no supervisado, validación de modelos.'
        },
        {
          code: 'PAC1-PAC4',
          nameEs: 'Aprendizaje Automático Avanzado',
          nameEn: 'Advanced Machine Learning',
          grade: 8.8,
          description: 'Redes neuronales, deep learning, optimización de hiperparámetros, ensemble methods.'
        },
        {
          code: 'PAC1-PAC4',
          nameEs: 'Procesamiento de Lenguaje Natural',
          nameEn: 'Natural Language Processing',
          grade: 8.6,
          description: 'NLP, vectorización de texto, análisis de sentimientos, modelos lingüísticos.'
        }
      ]
    },
    {
      id: 'data',
      nameEs: 'Ciencia de Datos',
      nameEn: 'Data Science',
      icon: Database,
      color: 'green',
      courses: [
        {
          code: 'PAC1-PAC4',
          nameEs: 'Bases de Datos',
          nameEn: 'Databases',
          grade: 9.3,
          description: 'SQL, diseño relacional, optimización de consultas, PostgreSQL.'
        },
        {
          code: 'PAC1-PAC4',
          nameEs: 'Minería de Datos',
          nameEn: 'Data Mining',
          grade: 8.9,
          description: 'Técnicas de clustering, clasificación, análisis de patrones, big data.'
        },
        {
          code: 'PAC1-PAC4',
          nameEs: 'Visualización de Datos',
          nameEn: 'Data Visualization',
          grade: 9.0,
          description: 'Diseño de dashboards, comunicación visual de datos, herramientas BI.'
        }
      ]
    },
    {
      id: 'professional',
      nameEs: 'Profesional & TFG',
      nameEn: 'Professional & Thesis',
      icon: Award,
      color: 'orange',
      courses: [
        {
          code: 'TFG',
          nameEs: 'Trabajo Final de Grado',
          nameEn: 'Bachelor Thesis',
          grade: 9.1,
          description: 'PolicySpace2 Spain: Simulación basada en agentes del mercado inmobiliario español con ETL masivo de datos oficiales.'
        },
        {
          code: 'PAC1-PAC4',
          nameEs: 'Proyecto Integrado',
          nameEn: 'Integrated Project',
          grade: 9.0,
          description: 'Aplicación integral de técnicas de DS en un proyecto real con stakeholders.'
        },
        {
          code: 'PAC1-PAC4',
          nameEs: 'Ética y Sostenibilidad en DS',
          nameEn: 'Ethics and Sustainability in DS',
          grade: 8.7,
          description: 'Responsabilidad AI, sesgo algorítmico, privacidad, gobernanza de datos.'
        }
      ]
    }
  ];

  const stats = [
    {
      metric: '48',
      label: i18n.language === 'es' ? 'Asignaturas' : 'Courses',
      sublabel: i18n.language === 'es' ? 'Completadas' : 'Completed'
    },
    {
      metric: '9.1',
      label: i18n.language === 'es' ? 'Promedio' : 'GPA',
      sublabel: i18n.language === 'es' ? 'Grado en DS' : 'Data Science Degree'
    },
    {
      metric: '240',
      label: 'ECTS',
      sublabel: i18n.language === 'es' ? 'Créditos' : 'Credits'
    },
    {
      metric: '4',
      label: i18n.language === 'es' ? 'Años' : 'Years',
      sublabel: i18n.language === 'es' ? 'Dedicación' : 'Duration'
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700',
      border: 'border-blue-100 dark:border-slate-600',
      icon: 'bg-blue-600',
      badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
    },
    purple: {
      bg: 'from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700',
      border: 'border-purple-100 dark:border-slate-600',
      icon: 'bg-purple-600',
      badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
    },
    green: {
      bg: 'from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700',
      border: 'border-green-100 dark:border-slate-600',
      icon: 'bg-green-600',
      badge: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
    },
    orange: {
      bg: 'from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-700',
      border: 'border-orange-100 dark:border-slate-600',
      icon: 'bg-orange-600',
      badge: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
    }
  };

  const getGradeColor = (grade) => {
    if (grade >= 9) return 'text-green-600 dark:text-green-400';
    if (grade >= 8.5) return 'text-blue-600 dark:text-blue-400';
    if (grade >= 8) return 'text-orange-600 dark:text-orange-400';
    return 'text-slate-600 dark:text-slate-400';
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 animate-fade-in">
      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50 backdrop-blur-sm bg-white/90 dark:bg-slate-800/90">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
          >
            <ChevronLeft className="w-5 h-5" />
            {i18n.language === 'es' ? 'Volver al Portafolio' : 'Back to Portfolio'}
          </button>
          <div className="font-bold text-xl text-blue-600 dark:text-blue-400 flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            <span className="hidden sm:inline">{i18n.language === 'es' ? 'Educación' : 'Education'}</span>
          </div>
          <a
            href="/Certificado académico personal.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 dark:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-700 transition flex items-center gap-2 shadow-sm"
          >
            <Download className="w-4 h-4" />
            {i18n.language === 'es' ? 'Certificado' : 'Certificate'}
          </a>
        </div>
      </nav>

      <main>
        {/* HERO BANNER */}
        <section className="pt-20 pb-24 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-8 border border-blue-200 dark:border-blue-800">
              <Zap className="w-4 h-4" />
              {i18n.language === 'es' ? 'Grado en Ciencia de Datos Aplicada' : 'Bachelor Degree in Applied Data Science'}
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              {i18n.language === 'es' ? (
                <>Educación & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Formación</span></>
              ) : (
                <>Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Training</span></>
              )}
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              {i18n.language === 'es'
                ? 'Universidad Oberta de Catalunya (UOC) - Programa Online de Excelencia'
                : 'Universitat Oberta de Catalunya (UOC) - Excellence Online Program'}
            </p>

            <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
              {i18n.language === 'es'
                ? '240 ECTS completados en 4 años. Enfoque en Machine Learning, análisis de datos y aplicaciones reales para resolver problemas socioeconómicos.'
                : '240 ECTS completed in 4 years. Focus on Machine Learning, data analysis and real-world applications to solve socioeconomic problems.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/Certificado académico personal.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition shadow-lg shadow-blue-500/50 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                {i18n.language === 'es' ? 'Descargar Certificado' : 'Download Certificate'}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.uoc.edu"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-600 transition shadow-sm flex items-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                {i18n.language === 'es' ? 'Programa UOC' : 'UOC Program'}
              </a>
            </div>
          </div>
        </section>

        {/* KEY STATS */}
        <section className="py-16 px-4 bg-white dark:bg-slate-800 border-y border-slate-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-6 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600">
                  <div className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORIES SECTION */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {i18n.language === 'es' ? 'Asignaturas por Área' : 'Courses by Area'}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {i18n.language === 'es'
                ? 'Formación estructurada en 4 áreas temáticas complementarias'
                : 'Structured training in 4 complementary thematic areas'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {categories.map((category) => {
              const colors = colorClasses[category.color];
              const IconComponent = category.icon;
              const name = i18n.language === 'es' ? category.nameEs : category.nameEn;
              const isSelected = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(isSelected ? null : category.id)}
                  className={`group p-6 rounded-xl border-2 transition-all ${
                    isSelected
                      ? `${colors.badge} border-current shadow-lg`
                      : `border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md`
                  }`}
                >
                  <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center mb-4 text-white`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white text-left">
                    {name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 text-left mt-2">
                    {category.courses.length} {i18n.language === 'es' ? 'asignaturas' : 'courses'}
                  </p>
                </button>
              );
            })}
          </div>

          {/* COURSES DISPLAY */}
          {selectedCategory && (
            <div className="space-y-4">
              {categories
                .filter((cat) => cat.id === selectedCategory)
                .map((category) => (
                  <div key={category.id}>
                    {category.courses.map((course, idx) => {
                      const colors = colorClasses[category.color];
                      return (
                        <div
                          key={idx}
                          className={`bg-gradient-to-br ${colors.bg} p-6 rounded-xl border ${colors.border} hover:shadow-lg transition-shadow`}
                        >
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className={`${colors.badge} px-3 py-1 rounded-full text-xs font-bold`}>
                                  {course.code}
                                </span>
                              </div>
                              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                {i18n.language === 'es' ? course.nameEs : course.nameEn}
                              </h3>
                              <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                                {course.description}
                              </p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <div className={`text-4xl font-extrabold ${getGradeColor(course.grade)}`}>
                                {course.grade}
                              </div>
                              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                                {i18n.language === 'es' ? 'Calificación' : 'Grade'} / 10
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
            </div>
          )}

          {!selectedCategory && (
            <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                {i18n.language === 'es'
                  ? 'Selecciona una categoría para ver las asignaturas'
                  : 'Select a category to view courses'}
              </p>
            </div>
          )}
        </section>

        {/* HIGHLIGHTS SECTION */}
        <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {i18n.language === 'es' ? 'Destacados' : 'Highlights'}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {i18n.language === 'es' ? 'Excelencia' : 'Excellence'}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {i18n.language === 'es'
                    ? 'Promedio de 9.1 en todas las asignaturas. Reconocimiento académico de rigor y dedicación.'
                    : 'Average of 9.1 in all subjects. Academic recognition of rigor and dedication.'}
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                  <Code className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {i18n.language === 'es' ? 'Aplicación Práctica' : 'Practical Application'}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {i18n.language === 'es'
                    ? 'Todos los conocimientos aplicados en proyectos reales: PolicySpace2, análisis financiero, competiciones.'
                    : 'All knowledge applied in real projects: PolicySpace2, financial analysis, competitions.'}
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {i18n.language === 'es' ? 'Formación Continua' : 'Continuous Learning'}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {i18n.language === 'es'
                    ? 'Actualmente cursando MBA. Commitment con el aprendizaje permanente y especialización.'
                    : 'Currently pursuing MBA. Commitment to lifelong learning and specialization.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FUTURE PROJECTS */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-12 md:p-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-8">
              <Zap className="w-4 h-4" />
              {i18n.language === 'es' ? 'Próximos Pasos' : 'Next Steps'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {i18n.language === 'es'
                ? 'Trabajos Finales de Asignaturas'
                : 'Course Capstone Projects'}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              {i18n.language === 'es'
                ? 'Los trabajos finales de las asignaturas serán vinculados aquí cuando estén disponibles en GitHub. Aplicación práctica de cada área de especialización.'
                : 'Capstone projects for each course will be linked here when available on GitHub. Practical application of each specialization area.'}
            </p>
            <a
              href="https://github.com/agmalaga2020"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition"
            >
              <Github className="w-5 h-5" />
              {i18n.language === 'es' ? 'Ver Repositorios' : 'View Repositories'}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 py-12 text-center border-t border-slate-200 dark:border-slate-800">
        <p className="text-sm mb-2 font-medium">
          {i18n.language === 'es'
            ? 'Grado en Ciencia de Datos Aplicada - UOC'
            : 'Bachelor Degree in Applied Data Science - UOC'}
        </p>
        <p className="text-xs">
          {i18n.language === 'es'
            ? 'Parte del Portafolio de Alberto Giménez Mut.'
            : 'Part of Alberto Giménez Mut\'s Portfolio.'}
        </p>
      </footer>
    </div>
  );
};

export default Education;

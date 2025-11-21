import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ChevronLeft,
  Globe,
  Github,
  FileText,
  MonitorPlay,
  Layout,
  ExternalLink,
  Brain,
  Database,
  Map,
  BarChart3,
  Cpu,
  Building2,
  Layers,
  TrendingUp,
  Users,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Zap,
  Target
} from 'lucide-react';
import PDFModal from '../components/PDFModal';

const ProjectPolicySpace = ({ onBack }) => {
  const { t, i18n } = useTranslation();
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

  const etlProcesses = [
    {
      icon: Users,
      title: i18n.language === 'es' ? 'Población Municipal' : 'Municipal Population',
      desc: i18n.language === 'es'
        ? '+8,000 municipios, 30 años, 0% NaN tras limpieza. Interpolación y pivoteo para series completas.'
        : '+8,000 municipalities, 30 years, 0% NaN after cleaning. Interpolation and pivoting for complete series.',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: i18n.language === 'es' ? 'Mortalidad por CCAA' : 'Mortality by Region',
      desc: i18n.language === 'es'
        ? '38 archivos finales (hombres/mujeres x comunidad), tasas adaptadas a formato PolicySpace2.'
        : '38 final files (men/women x region), rates adapted to PolicySpace2 format.',
      color: 'purple'
    },
    {
      icon: Building2,
      title: i18n.language === 'es' ? 'Empresas por Municipio' : 'Companies by Municipality',
      desc: i18n.language === 'es'
        ? 'Imputación dual, cruce con población, series históricas sin NaN.'
        : 'Dual imputation, population cross-reference, historical series without NaN.',
      color: 'green'
    },
    {
      icon: Map,
      title: i18n.language === 'es' ? 'Distribución Urbana' : 'Urban Distribution',
      desc: i18n.language === 'es'
        ? 'Modelo proxy calibrado y validado con datos reales del INE.'
        : 'Proxy model calibrated and validated with real INE data.',
      color: 'orange'
    },
    {
      icon: Calendar,
      title: i18n.language === 'es' ? 'Fecundidad e Intereses' : 'Fertility & Interest Rates',
      desc: i18n.language === 'es'
        ? 'Interpolación por edad, series del BCE/Banco de España con imputación completa.'
        : 'Age interpolation, ECB/Bank of Spain series with complete imputation.',
      color: 'pink'
    },
    {
      icon: Database,
      title: i18n.language === 'es' ? 'Finanzas Municipales (PIE)' : 'Municipal Finances (PIE)',
      desc: i18n.language === 'es'
        ? 'Liquidaciones municipales procesadas para análisis fiscal.'
        : 'Municipal liquidations processed for fiscal analysis.',
      color: 'indigo'
    }
  ];

  const dataSources = [
    { name: 'INE', desc: i18n.language === 'es' ? 'Población, mortalidad, fecundidad, hogares' : 'Population, mortality, fertility, households' },
    { name: 'Banco de España / BCE', desc: i18n.language === 'es' ? 'Tasas de interés nominales y reales' : 'Nominal and real interest rates' },
    { name: 'Eurostat', desc: 'HICP (Inflación)' },
    { name: i18n.language === 'es' ? 'Ministerio de Hacienda' : 'Ministry of Finance', desc: i18n.language === 'es' ? 'Finanzas municipales' : 'Municipal finances' },
    { name: i18n.language === 'es' ? 'Portales Autonómicos' : 'Regional Portals', desc: i18n.language === 'es' ? 'Educación, indicadores locales' : 'Education, local indicators' }
  ];

  const techStack = [
    { name: 'Python', use: i18n.language === 'es' ? 'Procesamiento ETL y análisis' : 'ETL processing and analysis' },
    { name: 'Jupyter Notebook', use: i18n.language === 'es' ? 'Documentación reproducible' : 'Reproducible documentation' },
    { name: 'Pandas/GeoPandas', use: i18n.language === 'es' ? 'Manipulación de datos espaciales' : 'Spatial data manipulation' },
    { name: 'XGBoost', use: i18n.language === 'es' ? 'Modelo predictivo de precios' : 'Price prediction model' },
    { name: 'SQLite/PostgreSQL', use: i18n.language === 'es' ? 'Data Warehouse espacial' : 'Spatial Data Warehouse' }
  ];

  const keyResults = [
    {
      metric: '8,132',
      label: i18n.language === 'es' ? 'Municipios' : 'Municipalities',
      sublabel: i18n.language === 'es' ? 'Datos procesados' : 'Processed data'
    },
    {
      metric: '30',
      label: i18n.language === 'es' ? 'Años' : 'Years',
      sublabel: i18n.language === 'es' ? 'Series temporales' : 'Time series'
    },
    {
      metric: '0%',
      label: 'NaN',
      sublabel: i18n.language === 'es' ? 'Datos limpios' : 'Clean data'
    },
    {
      metric: '304 MB',
      label: i18n.language === 'es' ? 'Repositorio' : 'Repository',
      sublabel: i18n.language === 'es' ? 'Datasets finales' : 'Final datasets'
    }
  ];

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
            <Globe className="w-6 h-6" />
            <span className="hidden sm:inline">PolicySpace2 Spain</span>
          </div>
          <a
            href="https://github.com/agmalaga2020/PolicySpace2_Spanish_data"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 dark:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 dark:hover:bg-blue-700 transition flex items-center gap-2 shadow-sm"
          >
            <Github className="w-4 h-4" />
            {i18n.language === 'es' ? 'Ver Repositorio' : 'View Repository'}
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
              {i18n.language === 'es' ? 'TFG - Grado en Data Science (UOC) - Calificación: 8.25' : 'Bachelor Thesis - Data Science Degree (UOC) - Grade: 8.25'}
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              {i18n.language === 'es' ? (
                <>PolicySpace2 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">España</span></>
              ) : (
                <>PolicySpace2 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Spain</span></>
              )}
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              {i18n.language === 'es'
                ? 'Adaptación exhaustiva del modelo PolicySpace2 al contexto español. Simulación basada en agentes para analizar políticas públicas con datos oficiales.'
                : 'Comprehensive adaptation of the PolicySpace2 model to the Spanish context. Agent-based simulation to analyze public policies with official data.'}
            </p>

            <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
              {i18n.language === 'es'
                ? 'ETL masivo de datos demográficos, socioeconómicos y geoespaciales. Procesos reproducibles, datasets limpios y simulación lista para investigación.'
                : 'Massive ETL of demographic, socioeconomic and geospatial data. Reproducible processes, clean datasets and simulation ready for research.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/agmalaga2020/PolicySpace2_Spanish_data"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition shadow-lg shadow-blue-500/50 flex items-center gap-2"
              >
                <Database className="w-5 h-5" />
                {i18n.language === 'es' ? 'Explorar Datos' : 'Explore Data'}
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsPDFModalOpen(true)}
                className="px-8 py-4 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-600 transition shadow-sm flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                {i18n.language === 'es' ? 'Leer Paper' : 'Read Paper'}
              </button>
            </div>
          </div>
        </section>

        {/* KEY RESULTS */}
        <section className="py-16 px-4 bg-white dark:bg-slate-800 border-y border-slate-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {keyResults.map((result, idx) => (
                <div key={idx} className="text-center p-6 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600">
                  <div className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
                    {result.metric}
                  </div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {result.label}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {result.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT OVERVIEW */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {i18n.language === 'es' ? '¿Qué es este proyecto?' : 'What is this project?'}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {i18n.language === 'es'
                ? 'Una adaptación exhaustiva de PolicySpace2 (modelo brasileño de simulación basada en agentes) para España, reconstruyendo todos los datasets clave usando fuentes oficiales.'
                : 'A comprehensive adaptation of PolicySpace2 (Brazilian agent-based simulation model) for Spain, reconstructing all key datasets using official sources.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-100 dark:border-slate-600">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {i18n.language === 'es' ? 'Objetivo' : 'Objective'}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {i18n.language === 'es'
                  ? 'Simular y analizar el impacto de políticas públicas en España: vivienda, natalidad, educación, empleo y urbanismo con datos reales.'
                  : 'Simulate and analyze the impact of public policies in Spain: housing, fertility, education, employment and urban planning with real data.'}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-purple-100 dark:border-slate-600">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {i18n.language === 'es' ? 'Datos' : 'Data'}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {i18n.language === 'es'
                  ? 'ETL completo de datos demográficos, socioeconómicos, geográficos y financieros de fuentes oficiales (INE, BCE, Eurostat, ministerios).'
                  : 'Complete ETL of demographic, socioeconomic, geographic and financial data from official sources (INE, ECB, Eurostat, ministries).'}
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-green-100 dark:border-slate-600">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {i18n.language === 'es' ? 'Resultado' : 'Result'}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {i18n.language === 'es'
                  ? 'Base robusta para investigación, docencia y análisis de políticas. Todos los procesos son reproducibles y documentados.'
                  : 'Robust foundation for research, teaching and policy analysis. All processes are reproducible and documented.'}
              </p>
            </div>
          </div>
        </section>

        {/* ETL PROCESSES */}
        <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Layers className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                  {i18n.language === 'es' ? 'Procesos ETL Implementados' : 'Implemented ETL Processes'}
                </h2>
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {i18n.language === 'es'
                  ? 'Cada dataset fue procesado con flujos reproducibles documentados en notebooks Jupyter.'
                  : 'Each dataset was processed with reproducible flows documented in Jupyter notebooks.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {etlProcesses.map((process, idx) => {
                const colorClasses = {
                  blue: 'from-blue-500 to-blue-600',
                  purple: 'from-purple-500 to-purple-600',
                  green: 'from-green-500 to-green-600',
                  orange: 'from-orange-500 to-orange-600',
                  pink: 'from-pink-500 to-pink-600',
                  indigo: 'from-indigo-500 to-indigo-600'
                };

                return (
                  <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                    <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[process.color]} rounded-lg flex items-center justify-center mb-4`}>
                      <process.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {process.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {process.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DATA SOURCES */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {i18n.language === 'es' ? 'Fuentes de Datos Oficiales' : 'Official Data Sources'}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {i18n.language === 'es'
                ? 'Todos los datos provienen de fuentes oficiales y verificables.'
                : 'All data comes from official and verifiable sources.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataSources.map((source, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">{source.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{source.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-20 px-4 bg-slate-900 dark:bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                {i18n.language === 'es' ? 'Stack Tecnológico' : 'Technology Stack'}
              </h2>
              <p className="text-xl text-slate-400">
                {i18n.language === 'es'
                  ? 'Herramientas de código abierto para procesamiento de datos a escala.'
                  : 'Open-source tools for data processing at scale.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((tech, idx) => (
                <div key={idx} className="bg-slate-800 dark:bg-slate-900 p-6 rounded-xl border border-slate-700 dark:border-slate-800">
                  <div className="flex items-start gap-3">
                    <Cpu className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">{tech.name}</h3>
                      <p className="text-sm text-slate-400">{tech.use}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REPOS & RESOURCES */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {i18n.language === 'es' ? 'Repositorios & Recursos' : 'Repositories & Resources'}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {i18n.language === 'es'
                ? 'Explora el código, datasets y documentación completa.'
                : 'Explore the code, datasets and complete documentation.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://github.com/agmalaga2020/PolicySpace2_Spanish_data"
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-xl border-2 border-purple-200 dark:border-purple-900 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-xl transition bg-gradient-to-br from-purple-50 to-white dark:from-slate-800 dark:to-slate-700"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">
                {i18n.language === 'es' ? 'Datasets & ETL' : 'Datasets & ETL'}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-3">
                {i18n.language === 'es'
                  ? 'Repositorio principal con todos los procesos ETL, notebooks y datasets finales (304 MB).'
                  : 'Main repository with all ETL processes, notebooks and final datasets (304 MB).'}
              </p>
              <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 font-medium">
                {i18n.language === 'es' ? 'Ver código' : 'View code'}
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            <a
              href="https://github.com/agmalaga2020/proyecto_modelo_1"
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-xl border-2 border-green-200 dark:border-green-900 hover:border-green-400 dark:hover:border-green-600 hover:shadow-xl transition bg-gradient-to-br from-green-50 to-white dark:from-slate-800 dark:to-slate-700"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-green-600 rounded-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-green-600 dark:group-hover:text-green-400" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">
                {i18n.language === 'es' ? 'Modelo ML' : 'ML Model'}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-3">
                {i18n.language === 'es'
                  ? 'Notebooks con entrenamiento de XGBoost y Random Forest para predicción de precios.'
                  : 'Notebooks with XGBoost and Random Forest training for price prediction.'}
              </p>
              <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium">
                {i18n.language === 'es' ? 'Ver modelo' : 'View model'}
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            <a
              href="https://agmalaga2020.github.io/proyecto_modelo_1/web/"
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-xl border-2 border-blue-200 dark:border-blue-900 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-700"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Layout className="w-6 h-6 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">
                {i18n.language === 'es' ? 'Demo Interactiva' : 'Interactive Demo'}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-3">
                {i18n.language === 'es'
                  ? 'Visualización interactiva de resultados y análisis de variables del modelo.'
                  : 'Interactive visualization of results and analysis of model variables.'}
              </p>
              <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium">
                {i18n.language === 'es' ? 'Abrir demo' : 'Open demo'}
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </section>

        {/* USE CASE EXAMPLE */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-8">
              <Zap className="w-4 h-4" />
              {i18n.language === 'es' ? 'Ejemplo de Uso Real' : 'Real Use Case Example'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {i18n.language === 'es'
                ? 'Simulación de Políticas Monetarias'
                : 'Monetary Policy Simulation'}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {i18n.language === 'es'
                ? 'Analiza cómo una subida de tipos de interés del BCE afecta al acceso a vivienda y natalidad en municipios rurales vs. urbanos. Combina datos de tasas de interés, población, fecundidad y urbanismo para simular escenarios y visualizar impactos diferenciados por territorio.'
                : 'Analyze how an ECB interest rate hike affects housing access and fertility in rural vs. urban municipalities. Combine interest rate, population, fertility and urban planning data to simulate scenarios and visualize differentiated impacts by territory.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                {i18n.language === 'es' ? '📊 Datos reales' : '📊 Real data'}
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                {i18n.language === 'es' ? '🎯 Simulación basada en agentes' : '🎯 Agent-based simulation'}
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                {i18n.language === 'es' ? '📈 Resultados reproducibles' : '📈 Reproducible results'}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 py-12 text-center border-t border-slate-200 dark:border-slate-800">
        <p className="text-sm mb-2 font-medium">
          {i18n.language === 'es'
            ? 'Trabajo Final de Grado - Data Science (UOC) - Calificación: 8.25'
            : 'Bachelor Thesis - Data Science (UOC) - Grade: 8.25'}
        </p>
        <p className="text-xs">
          {i18n.language === 'es'
            ? 'Parte del Portafolio de Alberto Giménez Mut.'
            : 'Part of Alberto Giménez Mut\'s Portfolio.'}
        </p>
      </footer>

      {/* PDF Modal */}
      <PDFModal
        isOpen={isPDFModalOpen}
        onClose={() => setIsPDFModalOpen(false)}
        pdfUrl="https://raw.githubusercontent.com/agmalaga2020/PolicySpace2_Spanish_data/main/Papers/policyspace2_v1.pdf"
        title={i18n.language === 'es' ? 'PolicySpace2 - Paper Completo' : 'PolicySpace2 - Full Paper'}
      />
    </div>
  );
};

export default ProjectPolicySpace;

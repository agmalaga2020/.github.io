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
  Layers
} from 'lucide-react';

const ProjectPolicySpace = ({ onBack }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 animate-fade-in">
      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
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
            href="https://github.com/agmalaga2020/PolicySpace2_Spain_new_ETL"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 dark:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 dark:hover:bg-blue-700 transition flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            {i18n.language === 'es' ? 'Repo Principal' : 'Main Repo'}
          </a>
        </div>
      </nav>

      <main>
        {/* HERO BANNER */}
        <section className="pt-16 pb-20 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-6 border border-blue-100 dark:border-blue-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Data Science & Agent-Based Modeling
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              {i18n.language === 'es' ? (
                <>Simulación del Mercado Inmobiliario con <span className="text-blue-600 dark:text-blue-400">Agentes IA</span></>
              ) : (
                <>Real Estate Market Simulation with <span className="text-blue-600 dark:text-blue-400">AI Agents</span></>
              )}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {i18n.language === 'es'
                ? 'Adaptación del modelo PolicySpace2 para España. Un sistema integral que combina ETL masivo de datos públicos, predicción de precios con XGBoost y simulación de políticas públicas.'
                : 'Adaptation of the PolicySpace2 model for Spain. A comprehensive system combining massive public data ETL, price prediction with XGBoost, and public policy simulation.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/proyecto_entrega.pdf"
                target="_blank"
                className="px-6 py-3 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-600 transition flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-5 h-5" />
                {i18n.language === 'es' ? 'Leer Paper Completo' : 'Read Full Paper'}
              </a>
            </div>
          </div>
        </section>

        {/* RECURSOS Y DEMOS */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <MonitorPlay className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              {i18n.language === 'es' ? 'Recursos Interactivos & Código' : 'Interactive Resources & Code'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Demo Web Modelo */}
              <a
                href="https://agmalaga2020.github.io/proyecto_modelo_1/web/"
                target="_blank"
                rel="noreferrer"
                className="group p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition bg-slate-50 dark:bg-slate-700/50"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition">
                    <Layout className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                  {i18n.language === 'es' ? 'Demo: Modelo Predictivo' : 'Demo: Predictive Model'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {i18n.language === 'es'
                    ? 'Web interactiva para visualizar resultados del modelo de precios y análisis de variables.'
                    : 'Interactive web to visualize price model results and variable analysis.'}
                </p>
              </a>

              {/* Repo Modelo Predictivo */}
              <a
                href="https://github.com/agmalaga2020/proyecto_modelo_1"
                target="_blank"
                rel="noreferrer"
                className="group p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-md transition bg-slate-50 dark:bg-slate-700/50"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition">
                    <Brain className="w-5 h-5" />
                  </div>
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-green-500" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                  {i18n.language === 'es' ? 'Código: Modelo ML' : 'Code: ML Model'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {i18n.language === 'es'
                    ? 'Repositorio con los notebooks de entrenamiento (XGBoost, Random Forest) y validación.'
                    : 'Repository with training notebooks (XGBoost, Random Forest) and validation.'}
                </p>
              </a>

              {/* Repo Datos & ETL */}
              <a
                href="https://github.com/agmalaga2020/PolicySpace2_Spanish_data"
                target="_blank"
                rel="noreferrer"
                className="group p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-md transition bg-slate-50 dark:bg-slate-700/50"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition">
                    <Database className="w-5 h-5" />
                  </div>
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-purple-500" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Data Warehouse</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {i18n.language === 'es'
                    ? 'ETL Pipeline y datasets procesados (INE, Catastro) listos para la simulación.'
                    : 'ETL Pipeline and processed datasets (INE, Catastro) ready for simulation.'}
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* KEY METRICS */}
        <section className="py-10 bg-white dark:bg-slate-800 border-y border-slate-100 dark:border-slate-700">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: i18n.language === 'es' ? 'Municipios Procesados' : 'Processed Municipalities', value: '8,132', icon: Map },
              { label: i18n.language === 'es' ? 'Precisión Modelo (R²)' : 'Model Accuracy (R²)', value: '0.92', icon: BarChart3 },
              { label: i18n.language === 'es' ? 'Fuentes de Datos' : 'Data Sources', value: 'INE + Catastro', icon: Database },
              { label: i18n.language === 'es' ? 'Tecnología' : 'Technology', value: 'Python + GeoPandas', icon: Cpu },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-3 text-blue-500 dark:text-blue-400">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE & ETL */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                <Layers className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                {i18n.language === 'es' ? 'Pipeline de Ingeniería de Datos' : 'Data Engineering Pipeline'}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">
                {i18n.language === 'es'
                  ? 'El corazón del proyecto es una infraestructura de datos robusta. Se desarrolló un proceso ETL complejo para unificar fuentes heterogéneas y preparar el "mundo virtual" de la simulación.'
                  : 'The heart of the project is a robust data infrastructure. A complex ETL process was developed to unify heterogeneous sources and prepare the simulation\'s "virtual world".'}
              </p>
              <ul className="space-y-4">
                {(i18n.language === 'es'
                  ? [
                      'Ingesta de datos demográficos (INE) y geoespaciales (Catastro).',
                      'Limpieza y transformación de series temporales (2014-2022).',
                      'Generación sintética de viviendas mediante triangulación de polígonos.',
                      'Consolidación en base de datos SQLite/PostgreSQL espacial.',
                    ]
                  : [
                      'Ingestion of demographic (INE) and geospatial (Cadastre) data.',
                      'Cleaning and transformation of time series (2014-2022).',
                      'Synthetic housing generation via polygon triangulation.',
                      'Consolidation in SQLite/PostgreSQL spatial database.',
                    ]
                ).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-6 shadow-2xl text-slate-300 font-mono text-sm leading-loose relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Database className="w-24 h-24" />
              </div>
              <div className="text-blue-400 font-bold mb-2"># ETL Process Workflow</div>
              <div className="pl-4 border-l-2 border-slate-700">
                <p>
                  <span className="text-purple-400">def</span> <span className="text-yellow-300">etl_pipeline</span>():
                </p>
                <p className="pl-4">
                  raw_data = <span className="text-blue-300">extract</span>([INE, Catastro, BCE])
                </p>
                <p className="pl-4">
                  clean_data = <span className="text-blue-300">transform</span>(raw_data)
                </p>
                <p className="pl-4">
                  <span className="text-gray-500"># Spatial Joins & Cleaning</span>
                </p>
                <p className="pl-4">
                  db.<span className="text-blue-300">load</span>(clean_data)
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">return</span> <span className="text-green-400">"Datawarehouse Ready"</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ML MODEL SECTION */}
        <section className="py-20 bg-slate-900 dark:bg-slate-950 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {i18n.language === 'es' ? 'Predicción de Precios con IA' : 'Price Prediction with AI'}
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                {i18n.language === 'es'
                  ? 'Se entrenaron y compararon múltiples modelos para predecir el precio de la vivienda, integrando variables socioeconómicas municipales.'
                  : 'Multiple models were trained and compared to predict housing prices, integrating municipal socioeconomic variables.'}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800 dark:bg-slate-900 p-8 rounded-2xl border border-slate-700 dark:border-slate-800">
                <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {i18n.language === 'es' ? 'XGBoost Superior' : 'XGBoost Superior'}
                </h3>
                <p className="text-slate-400 mb-4">
                  {i18n.language === 'es'
                    ? 'El modelo XGBoost logró un '
                    : 'The XGBoost model achieved an '}
                  <span className="text-white font-bold">R² {i18n.language === 'es' ? 'de ' : 'of '}0.9235</span>
                  {i18n.language === 'es'
                    ? ' al incluir variables de contexto municipal.'
                    : ' by including municipal context variables.'}
                </p>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[92%]"></div>
                </div>
              </div>
              <div className="bg-slate-800 dark:bg-slate-900 p-8 rounded-2xl border border-slate-700 dark:border-slate-800">
                <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6 text-purple-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {i18n.language === 'es' ? 'Variables Clave' : 'Key Variables'}
                </h3>
                <p className="text-slate-400">
                  {i18n.language === 'es'
                    ? 'El análisis reveló que el '
                    : 'Analysis revealed that '}
                  <strong>{i18n.language === 'es' ? 'IDH Municipal' : 'Municipal HDI'}</strong>
                  {i18n.language === 'es' ? ' y la ' : ' and '}
                  <strong>{i18n.language === 'es' ? 'Población Total' : 'Total Population'}</strong>
                  {i18n.language === 'es' ? ' son predictores críticos.' : ' are critical predictors.'}
                </p>
              </div>
              <div className="bg-slate-800 dark:bg-slate-900 p-8 rounded-2xl border border-slate-700 dark:border-slate-800">
                <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center mb-6 text-green-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {i18n.language === 'es' ? 'Integración' : 'Integration'}
                </h3>
                <p className="text-slate-400">
                  {i18n.language === 'es'
                    ? 'El modelo predictivo se integra en la simulación para ajustar dinámicamente los precios base.'
                    : 'The predictive model integrates into the simulation to dynamically adjust base prices.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 dark:bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-200 dark:border-slate-800">
        <p className="text-sm">
          {i18n.language === 'es'
            ? 'Parte del Portafolio de Data Science de Alberto Giménez Mut.'
            : 'Part of Alberto Giménez Mut\'s Data Science Portfolio.'}
        </p>
      </footer>
    </div>
  );
};

export default ProjectPolicySpace;

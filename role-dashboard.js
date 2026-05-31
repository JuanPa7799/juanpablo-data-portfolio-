const roleDashboards = {
  "data-analyst": {
    title: {
      es: "Data Analyst Jr",
      en: "Junior Data Analyst"
    },
    eyebrow: {
      es: "SQL | KPIs | Dashboards | Decision analytics",
      en: "SQL | KPIs | Dashboards | Decision analytics"
    },
    lead: {
      es: "Transformo datos en indicadores claros, dashboards y recomendaciones accionables. Esta ruta prioriza negocio, visualizacion, reporting y comunicacion ejecutiva.",
      en: "I turn data into clear indicators, dashboards, and actionable recommendations. This path emphasizes business analysis, visualization, reporting, and executive communication."
    },
    cv: {
      es: "../../assets/pdf/Portafolio_de_evidencias_V2.pdf",
      en: "../../assets/pdf/Portafolio_de_evidencias_V2.pdf",
      plannedEs: "cv-data-analyst-es.pdf",
      plannedEn: "cv-data-analyst-en.pdf"
    },
    workflow: {
      es: ["Consulta", "KPI", "Dashboard", "Decision"],
      en: ["Query", "KPI", "Dashboard", "Decision"]
    },
    kpis: [
      ["Business cases", "4"],
      ["Riesgo minimo", "1.5%"],
      ["Mejor AUC", "0.8963"],
      ["Foco", "KPIs"]
    ],
    stack: ["SQL", "Python", "Pandas", "Excel", "Power BI", "Storytelling"],
    projects: [
      {
        title: "Riesgo y rentabilidad petrolera",
        slug: "oilygiant-risk-profit",
        metric: "Riesgo 1.5%",
        score: 98,
        summary: {
          es: "Decision de negocio para seleccionar region con beneficio esperado de 4.52M USD y riesgo controlado.",
          en: "Business decision case to select a region with 4.52M USD expected profit and controlled risk."
        },
        tags: ["Bootstrap", "Riesgo", "Beneficio"]
      },
      {
        title: "Prediccion de churn Interconnect",
        slug: "interconnect-churn",
        metric: "AUC-ROC 0.8963",
        score: 90,
        summary: {
          es: "Caso de retencion para priorizar clientes con mayor probabilidad de cancelacion.",
          en: "Retention case to prioritize customers with higher cancellation probability."
        },
        tags: ["Clientes", "Retencion", "Segmentacion"]
      },
      {
        title: "Precio de autos usados",
        slug: "rusty-bargain-car-pricing",
        metric: "RMSE 1776.60",
        score: 82,
        summary: {
          es: "Comparacion de modelos para decidir entre calidad predictiva y velocidad de respuesta.",
          en: "Model comparison to decide between predictive quality and response speed."
        },
        tags: ["Pricing", "Producto", "Trade-off"]
      },
      {
        title: "Recomendacion de planes moviles",
        slug: "megaline-plan-recommendation",
        metric: "Accuracy 0.8149",
        score: 81,
        summary: {
          es: "Recomendacion de producto basada en comportamiento de usuarios.",
          en: "Product recommendation based on user behavior."
        },
        tags: ["Usuarios", "Producto", "Accuracy"]
      }
    ],
    strengths: [
      {
        es: "Lectura de KPIs, riesgo y rentabilidad con criterios de negocio.",
        en: "KPI, risk, and profitability analysis with business criteria."
      },
      {
        es: "Integracion, limpieza y validacion de datos con Python, SQL y pandas.",
        en: "Data integration, cleaning, and validation with Python, SQL, and pandas."
      },
      {
        es: "Comunicacion clara de hallazgos para apoyar decisiones ejecutivas.",
        en: "Clear communication of findings to support executive decisions."
      }
    ],
    accent: "Business analytics"
  },
  "data-scientist": {
    title: {
      es: "Data Scientist Jr",
      en: "Junior Data Scientist"
    },
    eyebrow: {
      es: "Python | Machine Learning | Estadistica | SQL",
      en: "Python | Machine Learning | Statistics | SQL"
    },
    lead: {
      es: "Construyo proyectos de ciencia de datos de punta a punta: problema, datos, EDA, features, modelos, validacion, metricas y comunicacion de resultados.",
      en: "I build end-to-end data science projects: problem framing, data, EDA, features, models, validation, metrics, and result communication."
    },
    cv: {
      es: "../../assets/pdf/Portafolio_de_evidencias_V2.pdf",
      en: "../../assets/pdf/Portafolio_de_evidencias_V2.pdf",
      plannedEs: "cv-data-scientist-es.pdf",
      plannedEn: "cv-data-scientist-en.pdf"
    },
    workflow: {
      es: ["Problema", "EDA", "Modelo", "Validacion"],
      en: ["Problem", "EDA", "Model", "Validation"]
    },
    kpis: [
      ["End-to-end", "5"],
      ["Mejor AUC", "0.8963"],
      ["F1 test", "0.6365"],
      ["sMAPE", "8.49%"]
    ],
    stack: ["Python", "Pandas", "Scikit-learn", "SQL", "Estadistica", "Feature engineering"],
    projects: [
      {
        title: "Prediccion de churn Interconnect",
        slug: "interconnect-churn",
        metric: "AUC-ROC 0.8963",
        score: 90,
        summary: {
          es: "Pipeline completo con 7043 filas integradas, comparacion de modelos y Gradient Boosting final.",
          en: "Complete pipeline with 7043 integrated rows, model comparison, and final Gradient Boosting."
        },
        tags: ["Churn", "Gradient Boosting", "AUC"]
      },
      {
        title: "Churn bancario balanceado",
        slug: "bank-churn-balanced",
        metric: "F1 0.6365",
        score: 86,
        summary: {
          es: "Clasificacion con clases desbalanceadas, balanceo y AUC-ROC como metrica de apoyo.",
          en: "Classification with imbalanced classes, balancing strategy, and AUC-ROC as supporting metric."
        },
        tags: ["F1", "AUC-ROC", "Balanceo"]
      },
      {
        title: "Recuperacion de oro Zyfra",
        slug: "gold-recovery-zyfra",
        metric: "sMAPE 8.49%",
        score: 92,
        summary: {
          es: "Regresion industrial con validacion de proceso y metrica especifica de negocio.",
          en: "Industrial regression with process validation and a business-specific metric."
        },
        tags: ["Regresion", "Industria", "sMAPE"]
      },
      {
        title: "Forecast de pedidos de taxi",
        slug: "sweet-lift-taxi-forecasting",
        metric: "RMSE 43.21",
        score: 90,
        summary: {
          es: "Forecasting supervisado con variables temporales y objetivo operacional cumplido.",
          en: "Supervised forecasting with temporal features and achieved operational target."
        },
        tags: ["Forecasting", "RMSE", "Series"]
      },
      {
        title: "Riesgo y rentabilidad petrolera",
        slug: "oilygiant-risk-profit",
        metric: "Beneficio 4.52M USD",
        score: 88,
        summary: {
          es: "Bootstrap y decision analytics para seleccionar region bajo incertidumbre.",
          en: "Bootstrap and decision analytics to select a region under uncertainty."
        },
        tags: ["Bootstrap", "Riesgo", "Decision"]
      }
    ],
    strengths: [
      {
        es: "Proyectos end-to-end con datos integrados, EDA, modelado y metricas verificables.",
        en: "End-to-end projects with integrated data, EDA, modeling, and verifiable metrics."
      },
      {
        es: "Clasificacion, regresion y forecasting con lectura critica de AUC-ROC, F1, RMSE y sMAPE.",
        en: "Classification, regression, and forecasting with critical use of ROC-AUC, F1, RMSE, and sMAPE."
      },
      {
        es: "Traduccion de resultados tecnicos a impacto de negocio y siguientes decisiones.",
        en: "Translation of technical results into business impact and next decisions."
      }
    ],
    accent: "Predictive modeling"
  },
  "machine-learning": {
    title: {
      es: "Machine Learning Jr",
      en: "Junior Machine Learning"
    },
    eyebrow: {
      es: "Senales | Vision | NLP | Pipelines | TensorFlow",
      en: "Signals | Vision | NLP | Pipelines | TensorFlow"
    },
    lead: {
      es: "Esta ruta muestra modelos aplicados y el camino hacia soluciones reutilizables: estructura, validacion, pipelines, APIs ligeras y despliegue progresivo.",
      en: "This path presents applied models and the path toward reusable solutions: structure, validation, pipelines, lightweight APIs, and progressive deployment."
    },
    cv: {
      es: "../../assets/pdf/Portafolio_de_evidencias_V2.pdf",
      en: "../../assets/pdf/Portafolio_de_evidencias_V2.pdf",
      plannedEs: "cv-machine-learning-es.pdf",
      plannedEn: "cv-machine-learning-en.pdf"
    },
    workflow: {
      es: ["Modelo", "Pipeline", "API", "Monitoreo"],
      en: ["Model", "Pipeline", "API", "Monitoring"]
    },
    kpis: [
      ["Proyecto estrella", "96%+"],
      ["Vision MAE", "7.03"],
      ["NLP meta", "F1 0.85+"],
      ["Dominios", "5"]
    ],
    stack: ["Python", "Scikit-learn", "TensorFlow", "Keras", "LightGBM", "Pipelines"],
    projects: [
      {
        title: "Clasificacion de perturbaciones electricas",
        slug: "calidad-energia",
        metric: "Precision 96%+",
        score: 96,
        summary: {
          es: "Proyecto estrella de ML aplicado a senales electricas con optimizacion aproximada del 80%.",
          en: "Flagship ML project applied to electrical signals with roughly 80% processing optimization."
        },
        tags: ["Senales", "TensorFlow", "Ingenieria"]
      },
      {
        title: "Estimacion de edad con vision",
        slug: "good-seed-age-vision",
        metric: "MAE 7.03",
        score: 87,
        summary: {
          es: "Computer vision con ResNet50 para estimar edad desde imagenes.",
          en: "Computer vision with ResNet50 to estimate age from images."
        },
        tags: ["Vision", "ResNet50", "Keras"]
      },
      {
        title: "Sentimiento en resenas IMDB",
        slug: "imdb-sentiment-nlp",
        metric: "F1 >= 0.85",
        score: 85,
        summary: {
          es: "NLP clasico con TF-IDF, regresion logistica, LightGBM y prueba BERT.",
          en: "Classic NLP with TF-IDF, logistic regression, LightGBM, and BERT test."
        },
        tags: ["NLP", "TF-IDF", "LightGBM"]
      },
      {
        title: "Precio de autos usados",
        slug: "rusty-bargain-car-pricing",
        metric: "LightGBM RMSE 1776.60",
        score: 82,
        summary: {
          es: "Trade-off entre calidad predictiva, tiempo de entrenamiento y respuesta.",
          en: "Trade-off between predictive quality, training time, and response speed."
        },
        tags: ["LightGBM", "RMSE", "Latencia"]
      },
      {
        title: "Forecast de pedidos de taxi",
        slug: "sweet-lift-taxi-forecasting",
        metric: "RMSE 43.21",
        score: 90,
        summary: {
          es: "Pipeline temporal con lags, medias moviles y validacion por tiempo.",
          en: "Temporal pipeline with lags, rolling means, and time-based validation."
        },
        tags: ["Forecasting", "Features", "Pipeline"]
      }
    ],
    strengths: [
      {
        es: "ML aplicado a senales, texto, imagenes, precios y series temporales.",
        en: "Applied ML across signals, text, images, pricing, and time series."
      },
      {
        es: "Uso practico de TensorFlow, Keras, LightGBM y scikit-learn para resolver problemas reales.",
        en: "Practical use of TensorFlow, Keras, LightGBM, and scikit-learn to solve real problems."
      },
      {
        es: "Criterio de reproducibilidad, validacion y comparacion de modelos antes de elegir una solucion.",
        en: "Reproducibility, validation, and model comparison before choosing a solution."
      }
    ],
    accent: "Applied ML"
  }
};

const publicLinks = {
  email: "mailto:juanpablogarciachavez7799@gmail.com",
  github: "https://github.com/JuanPa7799",
  linkedin: "https://www.linkedin.com/in/juan-pablo-garcia-chavez/",
  upwork: "https://www.upwork.com/freelancers/~01c64dd314ad35adc5"
};

const roleImages = {
  "data-analyst": "../../assets/img/data-analyst.png",
  "data-scientist": "../../assets/img/data-scientist.png",
  "machine-learning": "../../assets/img/machine-learning.png"
};

const languageLabels = {
  es: {
    cv: "Ver CV",
    pdf: "Descargar PDF",
    home: "Volver al dashboard principal",
    projects: "Casos destacados",
    stack: "Tecnologias principales",
    strengths: "Fortalezas de la ruta",
    viewProject: "Ver proyecto",
    metric: "Metrica",
    score: "Nivel",
    roleSwitch: "Cambiar ruta",
    email: "Enviar email",
    linkedin: "Ver LinkedIn",
    upwork: "Ver Upwork",
    github: "GitHub",
    note: "CV y proyectos alineados con esta ruta profesional.",
    flow: "Flujo de trabajo",
    cvStatus: "CV de esta ruta",
    currentCv: "Pagina web",
    plannedCv: "PDF descargable",
    otherPaths: "Otras rutas",
    dataAnalyst: "Data Analyst",
    dataScientist: "Data Scientist",
    machineLearning: "Machine Learning",
    navHome: "Inicio",
    navContact: "Contacto",
    profile: "Perfil profesional",
    roleDashboard: "Dashboard por rol"
  },
  en: {
    cv: "View CV",
    pdf: "Download PDF",
    home: "Back to main dashboard",
    projects: "Featured cases",
    stack: "Core technologies",
    strengths: "Path strengths",
    viewProject: "View project",
    metric: "Metric",
    score: "Visual score",
    roleSwitch: "Switch path",
    email: "Send email",
    linkedin: "View LinkedIn",
    upwork: "View Upwork",
    github: "GitHub",
    note: "CV and projects aligned with this professional path.",
    flow: "Workflow",
    cvStatus: "Role CV",
    currentCv: "Web page",
    plannedCv: "Downloadable PDF",
    otherPaths: "Other paths",
    dataAnalyst: "Data Analyst",
    dataScientist: "Data Scientist",
    machineLearning: "Machine Learning",
    navHome: "Home",
    navContact: "Contact",
    profile: "Professional profile",
    roleDashboard: "Role Dashboard"
  }
};

const roleRoutes = [
  ["data-analyst", "../data-analyst/"],
  ["data-scientist", "../data-scientist/"],
  ["machine-learning", "../machine-learning/"]
];

const kpiLabelMap = {
  "Business cases": { es: "Casos de negocio", en: "Business cases" },
  "Riesgo minimo": { es: "Riesgo minimo", en: "Minimum risk" },
  "Mejor AUC": { es: "Mejor AUC", en: "Best AUC" },
  "Foco": { es: "Foco", en: "Focus" },
  "End-to-end": { es: "End-to-end", en: "End-to-end" },
  "F1 test": { es: "F1 test", en: "Test F1" },
  "Proyecto estrella": { es: "Proyecto estrella", en: "Flagship project" },
  "Vision MAE": { es: "MAE vision", en: "Vision MAE" },
  "NLP meta": { es: "Meta NLP", en: "NLP target" },
  "Dominios": { es: "Dominios", en: "Domains" }
};

const tagMap = {
  "Riesgo": { es: "Riesgo", en: "Risk" },
  "Beneficio": { es: "Beneficio", en: "Profit" },
  "Clientes": { es: "Clientes", en: "Customers" },
  "Retencion": { es: "Retencion", en: "Retention" },
  "Segmentacion": { es: "Segmentacion", en: "Segmentation" },
  "Producto": { es: "Producto", en: "Product" },
  "Usuarios": { es: "Usuarios", en: "Users" },
  "Balanceo": { es: "Balanceo", en: "Balancing" },
  "Regresion": { es: "Regresion", en: "Regression" },
  "Industria": { es: "Industria", en: "Industry" },
  "Series": { es: "Series", en: "Time series" },
  "Decision": { es: "Decision", en: "Decision" },
  "Senales": { es: "Senales", en: "Signals" },
  "Ingenieria": { es: "Ingenieria", en: "Engineering" },
  "Vision": { es: "Vision", en: "Vision" },
  "Latencia": { es: "Latencia", en: "Latency" }
};

const metricMap = {
  "Riesgo 1.5%": { es: "Riesgo 1.5%", en: "Risk 1.5%" },
  "Beneficio 4.52M USD": { es: "Beneficio 4.52M USD", en: "Profit 4.52M USD" },
  "Precision 96%+": { es: "Precision 96%+", en: "Accuracy 96%+" },
  "LightGBM RMSE 1776.60": { es: "LightGBM RMSE 1776.60", en: "LightGBM RMSE 1776.60" },
  "AUC-ROC 0.8963": { es: "AUC-ROC 0.8963", en: "ROC-AUC 0.8963" }
};

const projectTitleMap = {
  "Riesgo y rentabilidad petrolera": { es: "Riesgo y rentabilidad petrolera", en: "Oil risk and profitability" },
  "Prediccion de churn Interconnect": { es: "Prediccion de churn Interconnect", en: "Interconnect churn prediction" },
  "Precio de autos usados": { es: "Precio de autos usados", en: "Used car pricing" },
  "Recomendacion de planes moviles": { es: "Recomendacion de planes moviles", en: "Mobile plan recommendation" },
  "Churn bancario balanceado": { es: "Churn bancario balanceado", en: "Balanced bank churn" },
  "Recuperacion de oro Zyfra": { es: "Recuperacion de oro Zyfra", en: "Zyfra gold recovery" },
  "Forecast de pedidos de taxi": { es: "Forecast de pedidos de taxi", en: "Taxi order forecasting" },
  "Clasificacion de perturbaciones electricas": { es: "Clasificacion de perturbaciones electricas", en: "Electrical disturbance classification" },
  "Estimacion de edad con vision": { es: "Estimacion de edad con vision", en: "Age estimation with computer vision" },
  "Sentimiento en resenas IMDB": { es: "Sentimiento en resenas IMDB", en: "IMDB review sentiment" }
};

const projectImageSlugs = new Set([
  "bank-churn-balanced",
  "calidad-energia",
  "good-seed-age-vision",
  "imdb-sentiment-nlp",
  "interconnect-churn",
  "megaline-plan-recommendation",
  "oilygiant-risk-profit",
  "rusty-bargain-car-pricing",
  "sure-tomorrow-insurance",
  "sweet-lift-taxi-forecasting"
]);

const projectImageFiles = {
  "calidad-energia": "notebook-visual.jpg",
  "good-seed-age-vision": "notebook-visual.jpg"
};

function localize(map, value, lang) {
  return map[value]?.[lang] || value;
}

function cvWebPath(roleKey, lang) {
  return `../../cv/${roleKey}/${lang}/`;
}

function cvPdfPath(roleKey, lang) {
  return `../../assets/pdf/cv-${roleKey}-${lang}.pdf`;
}

function projectImage(project) {
  const fileName = projectImageFiles[project.slug] || "notebook-visual.png";
  return `../../assets/img/projects/${project.slug}/${fileName}`;
}

function translatedTags(items, lang) {
  return items.map((item) => localize(tagMap, item, lang));
}

function getLanguage() {
  return localStorage.getItem("portfolio-language") || "es";
}

function setLanguage(language) {
  localStorage.setItem("portfolio-language", language);
  document.documentElement.lang = language;
}

function tags(items) {
  return items.map((item) => `<span>${item}</span>`).join("");
}

function bars(score) {
  const values = [Math.max(20, score - 26), Math.max(28, score - 14), score, Math.max(30, score - 8)];
  return values.map((value) => `<span class="chart-bar" style="height:${Math.min(100, value)}%"></span>`).join("");
}

function roleVisual(roleKey, score) {
  if (roleKey === "data-analyst") {
    return `
      <div class="role-card-visual kpi-tiles role-detail-visual">
        <span>KPI</span><span>SQL</span><span>BI</span>
      </div>
    `;
  }

  if (roleKey === "data-scientist") {
    return `
      <div class="role-card-visual model-curve role-detail-visual">
        <i style="width:${Math.max(42, score - 28)}%"></i>
        <i style="width:${Math.max(58, score - 10)}%"></i>
        <i style="width:${score}%"></i>
      </div>
    `;
  }

  return `
    <div class="role-card-visual pipeline-dots role-detail-visual">
      <span></span><span></span><span></span><span></span>
    </div>
  `;
}

function projectVisual(project, roleKey, score) {
  if (!projectImageSlugs.has(project.slug)) {
    return roleVisual(roleKey, score);
  }
  return `
    <div class="role-project-media">
      <img src="${projectImage(project)}" alt="" loading="lazy">
    </div>
  `;
}

function renderRoleDashboard() {
  const roleKey = document.body.dataset.role;
  const data = roleDashboards[roleKey];
  const root = document.querySelector("[data-role-root]");
  if (!data || !root) return;

  const lang = getLanguage();
  const copy = languageLabels[lang];
  setLanguage(lang);
  document.querySelectorAll("[data-nav-links] a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href === "../../index.html") link.textContent = copy.navHome;
    if (href.includes("#contacto")) link.textContent = copy.navContact;
  });
  const brandText = document.querySelector(".brand span:last-child");
  if (brandText) brandText.textContent = copy.roleDashboard;
  const footerRole = document.querySelector(".footer-inner span:last-child");
  if (footerRole) footerRole.textContent = `${data.title[lang]} Dashboard`;

  root.innerHTML = `
    <section class="role-hero section-pad">
      <div class="container role-hero-grid">
        <div>
          <span class="role-accent">${data.accent}</span>
          <p class="eyebrow">${data.eyebrow[lang]}</p>
          <h1>${data.title[lang]}</h1>
          <p class="hero-lead">${data.lead[lang]}</p>
          <div class="actions">
            <a class="btn primary" href="${cvWebPath(roleKey, lang)}">${copy.cv}</a>
            <a class="btn" href="${cvPdfPath(roleKey, lang)}" target="_blank" rel="noreferrer">${copy.pdf}</a>
            <a class="btn" href="../../index.html">${copy.home}</a>
            <a class="btn" href="${publicLinks.linkedin}" target="_blank" rel="noreferrer">${copy.linkedin}</a>
            <a class="btn" href="${publicLinks.upwork}" target="_blank" rel="noreferrer">${copy.upwork}</a>
            <a class="btn" href="${publicLinks.email}">${copy.email}</a>
          </div>
          <p class="role-note">${copy.note}</p>
        </div>
        <aside class="hero-panel role-profile-panel" aria-label="${copy.profile}">
          <div class="role-profile-top">
            <div class="role-portrait">
              <img src="../../assets/img/profile.jpg" alt="Juan Pablo Garcia Chavez" loading="eager">
            </div>
            <div>
              <span class="panel-label">${copy.profile}</span>
              <strong>Juan Pablo Garcia Chavez</strong>
              <small>${data.title[lang]}</small>
            </div>
          </div>
          <div class="role-hero-image">
            <img src="${roleImages[roleKey]}" alt="" loading="lazy">
          </div>
          <div class="kpi-row">
            ${data.kpis.map(([label, value]) => `
              <article>
                <span>${localize(kpiLabelMap, label, lang)}</span>
                <strong>${value}</strong>
              </article>
            `).join("")}
          </div>
          <div class="workflow-strip" aria-label="${copy.flow}">
            ${data.workflow[lang].map((step) => `<span>${step}</span>`).join("")}
          </div>
        </aside>
      </div>
    </section>

    <section class="section-pad section-band">
      <div class="container role-layout">
        <section class="content-block">
          <p class="eyebrow">${copy.projects}</p>
          <h2>${copy.projects}</h2>
          <div class="role-project-list">
            ${data.projects.map((project) => `
              <article class="role-project-card">
                ${projectVisual(project, roleKey, project.score)}
                <div>
                  <h3>${localize(projectTitleMap, project.title, lang)}</h3>
                  <p>${project.summary[lang]}</p>
                  <div class="project-meta">
                    <div>
                      <span>${copy.metric}</span>
                      <strong>${localize(metricMap, project.metric, lang)}</strong>
                    </div>
                    <div>
                      <span>${copy.score}</span>
                      <strong>${project.score}/100</strong>
                    </div>
                  </div>
                  <div class="tag-list">${tags(translatedTags(project.tags, lang))}</div>
                  <div class="card-actions">
                    <a href="../../projects/${project.slug}/?from=${roleKey}">${copy.viewProject}</a>
                  </div>
                </div>
              </article>
            `).join("")}
          </div>
        </section>

        <aside class="role-sidebar">
          <section class="content-block cv-status-card">
            <h2>${copy.cvStatus}</h2>
            <div class="cv-status-row">
              <span>${copy.currentCv}</span>
              <a href="${cvWebPath(roleKey, lang)}">${data.title[lang]}</a>
            </div>
            <div class="cv-status-row">
              <span>${copy.plannedCv}</span>
              <a href="${cvPdfPath(roleKey, lang)}" target="_blank" rel="noreferrer">${lang === "es" ? data.cv.plannedEs : data.cv.plannedEn}</a>
            </div>
          </section>
          <section class="content-block">
            <h2>${copy.stack}</h2>
            <div class="tag-list">${tags(data.stack)}</div>
          </section>
          <section class="content-block">
            <h2>${copy.strengths}</h2>
            <ul class="insight-list">
              ${data.strengths.map((item) => `<li>${item[lang]}</li>`).join("")}
            </ul>
          </section>
          <section class="content-block role-switch-card">
            <h2>${copy.otherPaths}</h2>
            <div class="role-switch-list">
              ${roleRoutes
                .filter(([key]) => key !== roleKey)
                .map(([key, href]) => `<a href="${href}">${roleDashboards[key].title[lang]}</a>`)
                .join("")}
            </div>
          </section>
        </aside>
      </div>
    </section>
  `;
}

function setupRoleNav() {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const languageToggle = document.querySelector("[data-language-toggle]");
  if (languageToggle) {
    const syncLabel = () => {
      const lang = getLanguage();
      languageToggle.textContent = lang === "es" ? "ES / EN" : "EN / ES";
    };
    syncLabel();
    languageToggle.addEventListener("click", () => {
      const next = getLanguage() === "es" ? "en" : "es";
      setLanguage(next);
      syncLabel();
      renderRoleDashboard();
    });
  }
}

setupRoleNav();
renderRoleDashboard();

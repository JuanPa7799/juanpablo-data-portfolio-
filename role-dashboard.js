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
    roadmap: [
      "Dashboard BI de KPIs comerciales",
      "Caso SQL con consultas avanzadas",
      "Reporte automatizado semanal con Python"
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
    roadmap: [
      "Interpretabilidad con permutation importance o SHAP",
      "Proyecto SQL + ML con datos publicos",
      "Caso de experimentacion o A/B testing"
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
    roadmap: [
      "API FastAPI para un modelo tabular",
      "Pipeline sklearn serializado con joblib",
      "Dockerfile y demo local",
      "Monitoreo simple con datos simulados"
    ],
    accent: "Applied ML"
  }
};

const languageLabels = {
  es: {
    cv: "Descargar CV ES",
    home: "Volver al dashboard principal",
    projects: "Proyectos seleccionados",
    stack: "Stack priorizado",
    roadmap: "Siguientes mejoras",
    viewProject: "Ver proyecto",
    metric: "Metrica",
    score: "Score visual",
    roleSwitch: "Cambiar ruta",
    contact: "Contacto",
    note: "Los CVs por rol ES/EN se enlazaran cuando esten aprobados. Por ahora se usa el PDF publico actual.",
    flow: "Flujo de trabajo",
    cvStatus: "Estado de CV",
    currentCv: "Fallback publico activo",
    plannedCv: "PDF final reservado",
    otherPaths: "Otras rutas",
    dataAnalyst: "Data Analyst",
    dataScientist: "Data Scientist",
    machineLearning: "Machine Learning"
  },
  en: {
    cv: "Download EN CV",
    home: "Back to main dashboard",
    projects: "Selected projects",
    stack: "Priority stack",
    roadmap: "Next improvements",
    viewProject: "View project",
    metric: "Metric",
    score: "Visual score",
    roleSwitch: "Switch path",
    contact: "Contact",
    note: "Role-specific ES/EN CVs will be linked once approved. For now, the current public PDF is used.",
    flow: "Workflow",
    cvStatus: "CV status",
    currentCv: "Active public fallback",
    plannedCv: "Reserved final PDF",
    otherPaths: "Other paths",
    dataAnalyst: "Data Analyst",
    dataScientist: "Data Scientist",
    machineLearning: "Machine Learning"
  }
};

const roleRoutes = [
  ["data-analyst", "../data-analyst/"],
  ["data-scientist", "../data-scientist/"],
  ["machine-learning", "../machine-learning/"]
];

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

function renderRoleDashboard() {
  const roleKey = document.body.dataset.role;
  const data = roleDashboards[roleKey];
  const root = document.querySelector("[data-role-root]");
  if (!data || !root) return;

  const lang = getLanguage();
  const copy = languageLabels[lang];
  setLanguage(lang);

  root.innerHTML = `
    <section class="role-hero section-pad">
      <div class="container role-hero-grid">
        <div>
          <span class="role-accent">${data.accent}</span>
          <p class="eyebrow">${data.eyebrow[lang]}</p>
          <h1>${data.title[lang]}</h1>
          <p class="hero-lead">${data.lead[lang]}</p>
          <div class="actions">
            <a class="btn primary" href="${data.cv[lang]}" target="_blank" rel="noreferrer">${copy.cv}</a>
            <a class="btn" href="../../index.html">${copy.home}</a>
            <a class="btn" href="mailto:juanpablogarciachavez7799@gmail.com">${copy.contact}</a>
          </div>
          <p class="role-note">${copy.note}</p>
        </div>
        <aside class="hero-panel role-scoreboard" aria-label="KPIs del rol">
          <div class="panel-top">
            <div>
              <span class="panel-label">${copy.roleSwitch}</span>
              <strong>${data.title[lang]}</strong>
            </div>
            <span class="status-pill">ES / EN</span>
          </div>
          <div class="kpi-row">
            ${data.kpis.map(([label, value]) => `
              <article>
                <span>${label}</span>
                <strong>${value}</strong>
              </article>
            `).join("")}
          </div>
          <div class="dashboard-chart role-main-chart" aria-hidden="true">
            ${data.projects.slice(0, 4).map((project) => `<span class="chart-bar" data-label="${project.metric.split(" ")[0]}" style="height:${project.score}%"></span>`).join("")}
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
                <div class="mini-chart">${bars(project.score)}</div>
                <div>
                  <h3>${project.title}</h3>
                  <p>${project.summary[lang]}</p>
                  <div class="project-meta">
                    <div>
                      <span>${copy.metric}</span>
                      <strong>${project.metric}</strong>
                    </div>
                    <div>
                      <span>${copy.score}</span>
                      <strong>${project.score}/100</strong>
                    </div>
                  </div>
                  <div class="tag-list">${tags(project.tags)}</div>
                  <div class="card-actions">
                    <a href="../../projects/${project.slug}/">${copy.viewProject}</a>
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
              <strong>Portafolio_de_evidencias_V2.pdf</strong>
            </div>
            <div class="cv-status-row">
              <span>${copy.plannedCv}</span>
              <strong>${lang === "es" ? data.cv.plannedEs : data.cv.plannedEn}</strong>
            </div>
          </section>
          <section class="content-block">
            <h2>${copy.stack}</h2>
            <div class="tag-list">${tags(data.stack)}</div>
          </section>
          <section class="content-block">
            <h2>${copy.roadmap}</h2>
            <ul class="insight-list">
              ${data.roadmap.map((item) => `<li>${item}</li>`).join("")}
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

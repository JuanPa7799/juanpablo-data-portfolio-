const contactoData = {
  github: "https://github.com/JuanPa7799",
  linkedin: "https://www.linkedin.com/in/juan-pablo-garcia-chavez/",
  email: "juanpablogarciachavez7799@gmail.com",
  cv: "assets/pdf/Portafolio_de_evidencias_V2.pdf"
};

const projectsData = [
  {
    title: "Clasificacion de perturbaciones electricas",
    slug: "calidad-energia",
    category: "Engineering",
    metricLabel: "Precision",
    metricValue: "96%+",
    metricScore: 96,
    summary: "Modelos de ML para clasificar perturbaciones en senales electricas y apoyar monitoreo energetico.",
    stack: ["Python", "TensorFlow", "Scikit-learn", "Senales"],
    difficulty: "Avanzado",
    featured: true,
    chartData: [42, 64, 58, 91, 73, 96]
  },
  {
    title: "Prediccion de churn | Interconnect",
    slug: "interconnect-churn",
    category: "ML",
    metricLabel: "AUC-ROC",
    metricValue: "0.8963",
    metricScore: 89.63,
    summary: "Pipeline end-to-end para detectar cancelacion de clientes con Gradient Boosting.",
    stack: ["Python", "Pandas", "Scikit-learn", "AUC"],
    difficulty: "Avanzado",
    featured: true,
    chartData: [50, 70, 82, 86, 89, 90]
  },
  {
    title: "Recomendacion de planes moviles",
    slug: "megaline-plan-recommendation",
    category: "ML",
    metricLabel: "Accuracy test",
    metricValue: "0.8149",
    metricScore: 81.49,
    summary: "Modelo para recomendar planes moviles Megaline a partir del comportamiento de usuarios.",
    stack: ["Python", "Random Forest", "EDA", "Accuracy"],
    difficulty: "Intermedio",
    featured: false,
    chartData: [73, 79, 81, 72, 69, 81]
  },
  {
    title: "Churn bancario con clases desbalanceadas",
    slug: "bank-churn-balanced",
    category: "Business",
    metricLabel: "F1 test",
    metricValue: "0.6365",
    metricScore: 63.65,
    summary: "Clasificacion de abandono bancario con balanceo, umbral optimizado y AUC-ROC de apoyo.",
    stack: ["Python", "Random Forest", "F1", "AUC-ROC"],
    difficulty: "Avanzado",
    featured: false,
    chartData: [0, 32, 51, 64, 69, 86]
  },
  {
    title: "Riesgo y rentabilidad petrolera",
    slug: "oilygiant-risk-profit",
    category: "Business",
    metricLabel: "Riesgo",
    metricValue: "1.5%",
    metricScore: 98.5,
    summary: "Seleccion de region para 200 pozos con regresion lineal, beneficio esperado y bootstrapping.",
    stack: ["Python", "Regresion", "Bootstrap", "Riesgo"],
    difficulty: "Avanzado",
    featured: false,
    chartData: [60, 98, 52, 75, 88, 92]
  },
  {
    title: "Recuperacion de oro | Zyfra",
    slug: "gold-recovery-zyfra",
    category: "Engineering",
    metricLabel: "sMAPE total",
    metricValue: "8.49%",
    metricScore: 91.51,
    summary: "Modelo industrial para predecir recuperacion de oro y validar consistencia de proceso.",
    stack: ["Python", "Regresion", "sMAPE", "Mineria"],
    difficulty: "Avanzado",
    featured: false,
    chartData: [70, 82, 88, 91, 83, 92]
  },
  {
    title: "Sure Tomorrow Insurance",
    slug: "sure-tomorrow-insurance",
    category: "ML",
    metricLabel: "Enfoque",
    metricValue: "4 tareas",
    metricScore: 74,
    summary: "Similitud de clientes, prediccion, regresion y ofuscacion de datos con algebra lineal.",
    stack: ["Python", "Algebra lineal", "KNN", "Privacidad"],
    difficulty: "Intermedio",
    featured: false,
    chartData: [48, 62, 74, 70, 80, 76]
  },
  {
    title: "Precio de autos usados",
    slug: "rusty-bargain-car-pricing",
    category: "ML",
    metricLabel: "LightGBM RMSE",
    metricValue: "1776.60",
    metricScore: 82,
    summary: "Comparacion de modelos para estimar precio de autos con foco en calidad y velocidad.",
    stack: ["Python", "LightGBM", "Random Forest", "RMSE"],
    difficulty: "Avanzado",
    featured: false,
    chartData: [32, 82, 80, 74, 90, 88]
  },
  {
    title: "Forecast de pedidos de taxi",
    slug: "sweet-lift-taxi-forecasting",
    category: "Forecasting",
    metricLabel: "RMSE test",
    metricValue: "43.21",
    metricScore: 90,
    summary: "Prediccion horaria de demanda de taxis con lags, medias moviles y modelos supervisados.",
    stack: ["Python", "Series temporales", "Random Forest", "RMSE"],
    difficulty: "Avanzado",
    featured: false,
    chartData: [45, 52, 64, 78, 86, 90]
  },
  {
    title: "Sentimiento en resenas IMDB",
    slug: "imdb-sentiment-nlp",
    category: "NLP",
    metricLabel: "Meta",
    metricValue: "F1 >= 0.85",
    metricScore: 85,
    summary: "Clasificacion de resenas negativas con TF-IDF, regresion logistica, LightGBM y prueba BERT.",
    stack: ["NLP", "TF-IDF", "LogReg", "LightGBM"],
    difficulty: "Avanzado",
    featured: false,
    chartData: [50, 78, 86, 88, 84, 85]
  },
  {
    title: "Estimacion de edad con vision",
    slug: "good-seed-age-vision",
    category: "Computer Vision",
    metricLabel: "MAE val",
    metricValue: "7.03",
    metricScore: 87,
    summary: "ResNet50 para estimar edad desde imagenes y apoyar control de venta de alcohol.",
    stack: ["TensorFlow", "ResNet50", "Keras", "Vision"],
    difficulty: "Avanzado",
    featured: false,
    chartData: [60, 71, 78, 84, 86, 87]
  }
];

const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-contact-link]").forEach((link) => {
  const type = link.dataset.contactLink;

  if (type === "email") {
    link.href = `mailto:${contactoData.email}`;
  }

  if (type === "github" || type === "linkedin" || type === "cv") {
    link.href = contactoData[type];
  }
});

function renderBars(container, values, labels = []) {
  if (!container) return;

  container.innerHTML = values.map((value, index) => {
    const safeValue = Math.max(8, Math.min(100, Number(value)));
    const label = labels[index] || "";
    return `<span class="chart-bar" data-label="${label}" style="height:${safeValue}%"></span>`;
  }).join("");
}

function createProjectCard(project) {
  const tags = project.stack.map((item) => `<span>${item}</span>`).join("");
  const bars = project.chartData.map((value) => {
    const safeValue = Math.max(8, Math.min(100, Number(value)));
    return `<span class="chart-bar" style="height:${safeValue}%"></span>`;
  }).join("");

  return `
    <article class="project-card ${project.featured ? "featured" : ""}" data-category="${project.category}">
      <div class="project-visual" aria-hidden="true">
        <div class="mini-chart">${bars}</div>
      </div>
      <div class="project-body">
        <p class="project-type">${project.category}</p>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="project-meta">
          <div>
            <span>${project.metricLabel}</span>
            <strong>${project.metricValue}</strong>
          </div>
          <div>
            <span>Dificultad</span>
            <strong>${project.difficulty}</strong>
          </div>
        </div>
        <div class="tag-list">${tags}</div>
        <div class="card-actions">
          <a href="projects/${project.slug}/">Ver proyecto</a>
        </div>
      </div>
    </article>
  `;
}

function renderProjects(category = "All") {
  const grid = document.querySelector("[data-project-grid]");
  if (!grid) return;

  const selectedProjects = category === "All"
    ? projectsData
    : projectsData.filter((project) => project.category === category);

  grid.innerHTML = selectedProjects.map(createProjectCard).join("");
}

function setupFilters() {
  const buttons = document.querySelectorAll("[data-filter]");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderProjects(button.dataset.filter);
    });
  });
}

function animateCounters() {
  const counters = document.querySelectorAll("[data-count]");

  counters.forEach((counter) => {
    const target = Number(counter.dataset.count);
    const decimals = Number(counter.dataset.decimals || 0);
    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = (target * eased).toFixed(decimals);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  });
}

renderProjects();
setupFilters();
animateCounters();
renderBars(
  document.querySelector("[data-hero-chart]"),
  [96, 89, 81, 63, 98, 91, 90, 87],
  ["PQ", "AUC", "Plan", "F1", "Risk", "Gold", "Taxi", "CV"]
);

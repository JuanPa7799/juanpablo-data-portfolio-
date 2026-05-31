const cvData = {
  "data-analyst": {
    es: {
      title: "CV Data Analyst Jr",
      headline: "SQL | Python | KPIs | Business Analytics",
      summary: "Data Analyst Jr con formacion en Ingenieria Mecatronica y Maestria en Ingenieria Electronica. Trabajo con Python, SQL, analisis exploratorio, KPIs y visualizacion para transformar datos en recomendaciones claras.",
      skills: ["Python", "SQL", "Pandas", "NumPy", "Excel", "KPIs", "Dashboards", "Storytelling"],
      projects: [
        ["Riesgo y rentabilidad petrolera", "Decision de inversion con beneficio promedio de 4.52M USD y riesgo de perdida de 1.5%."],
        ["Interconnect Churn", "Pipeline de retencion con AUC-ROC test de 0.8963 y accuracy de 0.8538."],
        ["Precio de autos usados", "Comparacion de modelos por RMSE, tiempo de entrenamiento y velocidad de respuesta."],
        ["Recomendacion de planes moviles", "Random Forest con accuracy test de 0.8149 frente a baseline 0.6967."]
      ],
      dashboard: "Dashboard Data Analyst",
      download: "Descargar PDF",
      portfolio: "Portafolio",
      contact: "Contacto"
    },
    en: {
      title: "Junior Data Analyst CV",
      headline: "SQL | Python | KPIs | Business Analytics",
      summary: "Junior Data Analyst with a background in Mechatronics Engineering and a Master's degree in Electronic Engineering. I work with Python, SQL, exploratory analysis, KPIs, and visualization to turn data into clear recommendations.",
      skills: ["Python", "SQL", "Pandas", "NumPy", "Excel", "KPIs", "Dashboards", "Storytelling"],
      projects: [
        ["Oil risk and profitability", "Investment decision case with 4.52M USD average profit and 1.5% loss risk."],
        ["Interconnect churn", "Retention pipeline with 0.8963 test ROC-AUC and 0.8538 accuracy."],
        ["Used car pricing", "Model comparison by RMSE, training time, and response speed."],
        ["Mobile plan recommendation", "Random Forest with 0.8149 test accuracy against 0.6967 baseline."]
      ],
      dashboard: "Data Analyst dashboard",
      download: "Download PDF",
      portfolio: "Portfolio",
      contact: "Contact"
    }
  },
  "data-scientist": {
    es: {
      title: "CV Data Scientist Jr",
      headline: "Python | Machine Learning | SQL | Modelado Predictivo",
      summary: "Data Scientist Jr con formacion en Ingenieria Mecatronica y Maestria en Ingenieria Electronica. Desarrollo proyectos end-to-end con Python, pandas, scikit-learn, feature engineering, validacion de modelos y comunicacion de resultados.",
      skills: ["Python", "Pandas", "Scikit-learn", "SQL", "AUC-ROC", "F1", "RMSE", "sMAPE"],
      projects: [
        ["Interconnect Churn", "GradientBoostingClassifier con AUC-ROC test de 0.8963."],
        ["Churn bancario", "Clasificacion desbalanceada con F1 test 0.6365 y AUC-ROC 0.865."],
        ["Recuperacion de oro Zyfra", "Regresion industrial con sMAPE total de 8.49%."],
        ["Forecast de taxi", "Random Forest con RMSE test 43.21 y objetivo operacional cumplido."]
      ],
      dashboard: "Dashboard Data Scientist",
      download: "Descargar PDF",
      portfolio: "Portafolio",
      contact: "Contacto"
    },
    en: {
      title: "Junior Data Scientist CV",
      headline: "Python | Machine Learning | SQL | Predictive Modeling",
      summary: "Junior Data Scientist with a background in Mechatronics Engineering and a Master's degree in Electronic Engineering. I build end-to-end projects with Python, pandas, scikit-learn, feature engineering, model validation, and clear communication.",
      skills: ["Python", "Pandas", "Scikit-learn", "SQL", "ROC-AUC", "F1", "RMSE", "sMAPE"],
      projects: [
        ["Interconnect churn", "GradientBoostingClassifier with 0.8963 test ROC-AUC."],
        ["Bank churn", "Imbalanced classification with 0.6365 test F1 and 0.865 ROC-AUC."],
        ["Zyfra gold recovery", "Industrial regression with 8.49% total sMAPE."],
        ["Taxi forecasting", "Random Forest with 43.21 test RMSE and operational target met."]
      ],
      dashboard: "Data Scientist dashboard",
      download: "Download PDF",
      portfolio: "Portfolio",
      contact: "Contact"
    }
  },
  "machine-learning": {
    es: {
      title: "CV Machine Learning Jr",
      headline: "Python | TensorFlow | Scikit-learn | Pipelines",
      summary: "Machine Learning Jr con base en Ingenieria Mecatronica y Maestria en Ingenieria Electronica. Trabajo con clasificacion, regresion, vision computacional, NLP, forecasting y senales, con enfoque en soluciones reproducibles.",
      skills: ["Python", "Scikit-learn", "TensorFlow", "Keras", "LightGBM", "Pipelines", "NLP", "Vision"],
      projects: [
        ["Clasificacion de perturbaciones electricas", "ML aplicado a senales con precision 96%+ y optimizacion aproximada del 80%."],
        ["Estimacion de edad con vision", "ResNet50 con MAE de validacion 7.03."],
        ["Sentimiento IMDB", "TF-IDF, regresion logistica, LightGBM y umbral F1 >= 0.85."],
        ["Forecast de taxi", "Pipeline temporal con lags y RMSE test 43.21."]
      ],
      dashboard: "Dashboard Machine Learning",
      download: "Descargar PDF",
      portfolio: "Portafolio",
      contact: "Contacto"
    },
    en: {
      title: "Junior Machine Learning CV",
      headline: "Python | TensorFlow | Scikit-learn | Pipelines",
      summary: "Junior Machine Learning practitioner with a background in Mechatronics Engineering and a Master's degree in Electronic Engineering. I work with classification, regression, computer vision, NLP, forecasting, and signal-focused projects with a reproducibility mindset.",
      skills: ["Python", "Scikit-learn", "TensorFlow", "Keras", "LightGBM", "Pipelines", "NLP", "Vision"],
      projects: [
        ["Electrical disturbance classification", "ML applied to signals with 96%+ accuracy and roughly 80% optimization."],
        ["Age estimation with vision", "ResNet50 with 7.03 validation MAE."],
        ["IMDB sentiment", "TF-IDF, logistic regression, LightGBM, and F1 >= 0.85 threshold."],
        ["Taxi forecasting", "Temporal pipeline with lags and 43.21 test RMSE."]
      ],
      dashboard: "Machine Learning dashboard",
      download: "Download PDF",
      portfolio: "Portfolio",
      contact: "Contact"
    }
  }
};

function renderCv() {
  const role = document.body.dataset.role;
  const lang = document.body.dataset.lang;
  const data = cvData[role]?.[lang];
  if (!data) return;

  document.documentElement.lang = lang;
  document.title = `${data.title} | Juan Pablo Garcia Chavez`;

  const root = document.querySelector("[data-cv-root]");
  const pdf = `../../../assets/pdf/cv-${role}-${lang}.pdf`;
  const dashboard = `../../../dashboards/${role}/`;
  root.innerHTML = `
    <section class="cv-hero section-pad">
      <div class="container cv-hero-grid">
        <div>
          <p class="eyebrow">${data.title}</p>
          <h1>Juan Pablo Garcia Chavez</h1>
          <p class="hero-lead">${data.headline}</p>
          <p>${data.summary}</p>
          <div class="actions">
            <a class="btn primary" href="${pdf}" target="_blank" rel="noreferrer">${data.download}</a>
            <a class="btn" href="${dashboard}">${data.dashboard}</a>
            <a class="btn" href="../../../index.html">${data.portfolio}</a>
          </div>
        </div>
        <aside class="profile-card cv-profile-card">
          <div class="profile-image-wrap">
            <img src="../../../assets/img/profile.jpg" alt="Juan Pablo Garcia Chavez" loading="eager">
          </div>
          <div class="profile-card-body">
            <a class="contact-row" href="mailto:juanpablogarciachavez7799@gmail.com"><span class="contact-icon">@</span><span><small>Email</small><strong>${data.contact}</strong></span></a>
            <a class="contact-row" href="https://github.com/JuanPa7799" target="_blank" rel="noreferrer"><span class="contact-icon">GH</span><span><small>GitHub</small><strong>JuanPa7799</strong></span></a>
            <a class="contact-row" href="https://www.linkedin.com/in/juan-pablo-garcia-chavez/" target="_blank" rel="noreferrer"><span class="contact-icon">in</span><span><small>LinkedIn</small><strong>${lang === "es" ? "Perfil publico" : "Public profile"}</strong></span></a>
          </div>
        </aside>
      </div>
    </section>
    <section class="section-pad section-band">
      <div class="container cv-content-grid">
        <section class="content-block">
          <h2>${lang === "es" ? "Habilidades" : "Skills"}</h2>
          <div class="tag-list">${data.skills.map((skill) => `<span>${skill}</span>`).join("")}</div>
        </section>
        <section class="content-block">
          <h2>${lang === "es" ? "Proyectos destacados" : "Selected projects"}</h2>
          <div class="cv-project-list">
            ${data.projects.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
          </div>
        </section>
      </div>
    </section>
  `;
}

renderCv();

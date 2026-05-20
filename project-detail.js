const projectDetails = {
  "calidad-energia": {
    title: "Clasificacion de perturbaciones electricas",
    eyebrow: "Proyecto estrella | Machine Learning aplicado a ingenieria",
    lead: "Sistema de clasificacion para senales electricas orientado a diagnostico de calidad de energia. Es el proyecto que mejor conecta mi perfil de ingenieria con ciencia de datos aplicada.",
    context: "Las perturbaciones electricas pueden afectar estabilidad, eficiencia y monitoreo de sistemas energeticos. El objetivo fue convertir senales complejas en informacion accionable mediante modelos de machine learning.",
    data: "Senales electricas y caracteristicas derivadas para distinguir eventos de calidad de energia. En esta version publica se muestra el resumen curado, no los datos completos.",
    stack: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Procesamiento de senales"],
    metrics: [
      ["Precision reportada", "96%+"],
      ["Optimizacion pipeline", "~80%"],
      ["Dominio", "Energia"]
    ],
    chartTitle: "Evolucion del flujo tecnico",
    chart: [
      ["Baseline", 42],
      ["Features", 64],
      ["Modelos", 82],
      ["Optimizacion", 96]
    ],
    methodology: [
      "Exploracion de senales y comportamiento de clases.",
      "Preprocesamiento, normalizacion y preparacion del dataset.",
      "Feature engineering para mejorar separabilidad de eventos.",
      "Entrenamiento y comparacion de modelos supervisados.",
      "Evaluacion con metricas de clasificacion e interpretacion tecnica."
    ],
    results: [
      "Precision superior al 96% reportada en validacion experimental.",
      "Reduccion aproximada del 80% en tiempo de procesamiento.",
      "Caso diferencial porque combina ML, senales e ingenieria electrica."
    ],
    insight: "El valor del proyecto no esta solo en la metrica: esta en demostrar que puedo traducir un fenomeno fisico en variables modelables y resultados utiles para diagnostico.",
    next: ["Agregar imagenes reales del pipeline.", "Publicar notebook curado cuando este libre de rutas locales.", "Conectar articulo o reporte tecnico publico."]
  },
  "interconnect-churn": {
    title: "Prediccion de churn para Interconnect",
    eyebrow: "Data Science end-to-end | Clasificacion",
    lead: "Pipeline completo para identificar clientes con riesgo de cancelacion, integrando multiples fuentes y seleccionando un modelo por AUC-ROC.",
    context: "Interconnect necesita anticipar cancelaciones para priorizar acciones de retencion. El proyecto conecta integracion de datos, modelado supervisado y comunicacion ejecutiva.",
    data: "7043 clientes integrados desde contract, personal, internet y phone usando customerID como llave.",
    stack: ["Python", "Pandas", "Scikit-learn", "Gradient Boosting", "AUC-ROC"],
    metrics: [
      ["Modelo final", "Gradient Boosting"],
      ["AUC-ROC test", "0.8963"],
      ["Accuracy test", "0.8538"]
    ],
    chartTitle: "Comparacion de modelos",
    chart: [
      ["LogReg", 82.61],
      ["Random Forest", 86.51],
      ["Gradient Boosting", 89.63]
    ],
    methodology: [
      "Integracion de cuatro fuentes en una tabla por cliente.",
      "Definicion de objetivo de churn desde la fecha de finalizacion.",
      "Imputacion, codificacion categorica y pipeline reproducible.",
      "Comparacion contra baseline y modelos supervisados.",
      "Evaluacion final en test con AUC-ROC y accuracy."
    ],
    results: [
      "El Gradient Boosting fue el mejor modelo por AUC-ROC.",
      "AUC-ROC test de 0.8963 y accuracy test de 0.8538.",
      "La solucion queda lista para segmentar clientes por riesgo."
    ],
    insight: "La parte fuerte del caso es el flujo completo: de datos dispersos a una recomendacion accionable para retencion.",
    next: ["Agregar curva ROC exportada.", "Crear tabla de variables clave.", "Publicar notebook limpio sin rutas locales."]
  },
  "megaline-plan-recommendation": {
    title: "Recomendacion de planes moviles",
    eyebrow: "ML | Clasificacion multicriterio",
    lead: "Modelo para recomendar el plan Smart o Ultra de Megaline a partir del comportamiento mensual de usuarios.",
    context: "La empresa quiere migrar usuarios a planes adecuados segun uso real. El foco fue entrenar un clasificador simple, confiable y validado contra una prueba de cordura.",
    data: "Comportamiento mensual de usuarios: llamadas, mensajes, internet y plan actual.",
    stack: ["Python", "Scikit-learn", "Decision Tree", "Random Forest", "Logistic Regression"],
    metrics: [
      ["Modelo final", "Random Forest"],
      ["Accuracy test", "0.8149"],
      ["Dummy baseline", "0.6967"]
    ],
    chartTitle: "Exactitud por modelo",
    chart: [
      ["Dummy", 69.67],
      ["LogReg", 72.01],
      ["Tree", 79.63],
      ["RF", 81.49]
    ],
    methodology: [
      "EDA para entender clases y variables de comportamiento.",
      "Division en entrenamiento, validacion y prueba.",
      "Ajuste de profundidad en arbol de decision.",
      "Ajuste de estimadores en Random Forest.",
      "Comparacion final contra regresion logistica y baseline."
    ],
    results: [
      "Random Forest obtuvo accuracy final de 0.8149.",
      "El modelo supero la prueba de cordura de 0.6967.",
      "El objetivo minimo de exactitud mayor a 0.75 fue cumplido."
    ],
    insight: "Es un buen caso de fundamentos: probar modelos, no confiar en una sola metrica aislada y validar que el modelo aprende algo real.",
    next: ["Agregar matriz de confusion.", "Explicar variables mas influyentes.", "Convertir notebook a version publica."]
  },
  "bank-churn-balanced": {
    title: "Churn bancario con clases desbalanceadas",
    eyebrow: "Business ML | Clasificacion desbalanceada",
    lead: "Modelo para detectar clientes bancarios con riesgo de abandono usando balanceo, ajuste de umbral y metricas adecuadas.",
    context: "El reto no era predecir la clase mayoritaria, sino detectar mejor a quienes abandonan. Por eso el proyecto se centro en F1, recall y AUC-ROC.",
    data: "Dataset bancario con 10000 registros y objetivo Exited, con clase positiva cercana al 20%.",
    stack: ["Python", "Scikit-learn", "Random Forest", "Class weight", "F1", "AUC-ROC"],
    metrics: [
      ["F1 test", "0.6365"],
      ["AUC-ROC test", "0.865"],
      ["Recall churn", "0.6904"]
    ],
    chartTitle: "Efecto del modelado",
    chart: [
      ["Dummy", 0],
      ["LogReg", 51],
      ["RF valid", 64.8],
      ["RF test", 63.65]
    ],
    methodology: [
      "Analisis de desbalance entre clientes que se quedan y clientes que se van.",
      "Particion estratificada en train, validacion y test.",
      "Comparacion de regresion logistica, Random Forest y estrategias de balanceo.",
      "Ajuste de umbral para maximizar F1 en validacion.",
      "Evaluacion final en test con reporte de clasificacion."
    ],
    results: [
      "F1 test de 0.6365, por encima del minimo requerido.",
      "AUC-ROC test de 0.865, indicando buena separabilidad.",
      "Recall de churn de 0.6904, util para priorizar retencion."
    ],
    insight: "Este proyecto muestra criterio: en churn desbalanceado, accuracy puede verse bien aunque el modelo falle justo donde importa.",
    next: ["Agregar ranking de variables.", "Mostrar curva precision-recall.", "Crear recomendaciones de negocio por segmento."]
  },
  "oilygiant-risk-profit": {
    title: "Riesgo y rentabilidad petrolera",
    eyebrow: "Decision Analytics | Riesgo y beneficio",
    lead: "Seleccion de region para abrir 200 pozos combinando regresion lineal, beneficio esperado y bootstrapping.",
    context: "La decision no depende solo del retorno maximo: el negocio exige riesgo de perdida menor al 2.5%. El modelo ayuda a elegir con incertidumbre controlada.",
    data: "Tres regiones con 100000 puntos cada una, caracteristicas anonimizadas y volumen de reservas.",
    stack: ["Python", "Regresion lineal", "Bootstrap", "Riesgo", "Business analytics"],
    metrics: [
      ["Region recomendada", "region_1"],
      ["Beneficio promedio", "4.52M USD"],
      ["Riesgo perdida", "1.5%"]
    ],
    chartTitle: "Riesgo de perdida por region",
    chart: [
      ["region_0", 60],
      ["region_1", 15],
      ["region_2", 80]
    ],
    methodology: [
      "Entrenamiento de regresion lineal por region.",
      "Calculo del volumen minimo para equilibrio financiero.",
      "Seleccion top-200 por prediccion.",
      "Bootstrapping de 1000 muestras para simular incertidumbre.",
      "Seleccion final segun beneficio promedio y restriccion de riesgo."
    ],
    results: [
      "region_1 fue la unica opcion elegible por riesgo inferior al 2.5%.",
      "Beneficio promedio estimado: 4.52M USD.",
      "La mayor ganancia puntual no coincidio con la mejor decision ajustada por riesgo."
    ],
    insight: "Este es un caso muy fuerte para negocio: muestra que se tomar decisiones con modelos, restricciones y riesgo, no solo con predicciones.",
    next: ["Agregar distribucion de bootstrap.", "Mostrar intervalo de confianza.", "Crear narrativa ejecutiva de inversion."]
  },
  "gold-recovery-zyfra": {
    title: "Recuperacion de oro | Zyfra",
    eyebrow: "ML industrial | Procesos mineros",
    lead: "Prediccion de recuperacion de oro en un proceso industrial, cuidando variables disponibles, consistencia de formula y sMAPE.",
    context: "El proyecto simula una tarea industrial donde algunas variables se conocen tarde y no pueden usarse para predecir. Evitar fuga de informacion fue central.",
    data: "Datos de proceso metalurgico con etapas rougher, limpieza primaria, limpieza secundaria y concentraciones de metales.",
    stack: ["Python", "Pandas", "Regresion", "sMAPE", "Procesos industriales"],
    metrics: [
      ["EAM formula", "0.0000"],
      ["sMAPE final", "8.12%"],
      ["sMAPE total", "8.49%"]
    ],
    chartTitle: "Calidad por etapa",
    chart: [
      ["rougher", 90.39],
      ["final", 91.88],
      ["total", 91.51]
    ],
    methodology: [
      "Apertura y comparacion de train, test y full.",
      "Verificacion del calculo oficial de recuperacion.",
      "Analisis de caracteristicas ausentes en test.",
      "Imputacion de faltantes y eliminacion de fuga de informacion.",
      "Evaluacion con sMAPE rougher, final y total."
    ],
    results: [
      "El calculo de recuperacion fue consistente con EAM 0.0000.",
      "sMAPE total de 8.49%.",
      "Se respeto la disponibilidad real de variables para modelado."
    ],
    insight: "El mayor valor aqui es el cuidado metodologico: en procesos industriales, usar una variable que no existe al momento de prediccion invalida el modelo.",
    next: ["Agregar graficas de concentracion por etapa.", "Mostrar variables descartadas.", "Publicar README tecnico del flujo."]
  },
  "sure-tomorrow-insurance": {
    title: "Sure Tomorrow Insurance",
    eyebrow: "Algebra lineal aplicada | ML y privacidad",
    lead: "Proyecto para encontrar clientes similares, predecir beneficios de seguro y proteger datos personales mediante transformacion matricial.",
    context: "La compania queria evaluar si ML podia apoyar marketing, prediccion de beneficios y privacidad sin romper la calidad del modelo.",
    data: "Datos de asegurados con sexo, edad, salario, familiares y beneficios recibidos.",
    stack: ["Python", "NumPy", "KNN", "Regresion lineal", "Algebra lineal", "Privacidad"],
    metrics: [
      ["Tareas resueltas", "4"],
      ["Foco", "Privacidad"],
      ["Dominio", "Seguros"]
    ],
    chartTitle: "Componentes tecnicos",
    chart: [
      ["Similitud", 85],
      ["Clasif.", 72],
      ["Regresion", 78],
      ["Ofuscacion", 92]
    ],
    methodology: [
      "Revision y escalado de variables.",
      "Busqueda de clientes similares con distancia.",
      "Prediccion de probabilidad de recibir beneficios.",
      "Regresion lineal para cantidad esperada de beneficios.",
      "Transformacion de datos para dificultar recuperacion de informacion personal."
    ],
    results: [
      "Se conectaron fundamentos de algebra lineal con tareas practicas de ML.",
      "El proyecto demuestra como proteger datos sin perder utilidad analitica.",
      "Es una pieza importante para mostrar criterio matematico y privacidad."
    ],
    insight: "No todo portafolio debe ser solo metricas altas. Este proyecto muestra base matematica y pensamiento de privacidad, dos cosas que pesan mucho en trabajos reales.",
    next: ["Agregar ejemplo visual de transformacion.", "Comparar modelo antes/despues de ofuscacion.", "Crear resumen de privacidad para reclutadores."]
  },
  "rusty-bargain-car-pricing": {
    title: "Precio de autos usados",
    eyebrow: "Regresion | Calidad vs velocidad",
    lead: "Modelo para estimar precio de autos usados comparando error, tiempo de entrenamiento y velocidad de prediccion.",
    context: "Rusty Bargain necesita una app que responda rapido. Por eso el mejor modelo no se elige solo por RMSE, sino por balance entre calidad y tiempos.",
    data: "Historial de autos usados con especificaciones, marca, modelo, kilometraje, ano, potencia y precio.",
    stack: ["Python", "LightGBM", "Random Forest", "Regresion lineal", "RMSE"],
    metrics: [
      ["RF RMSE", "1747.77"],
      ["LightGBM RMSE", "1776.60"],
      ["LightGBM train", "16.61s"]
    ],
    chartTitle: "Calidad relativa por modelo",
    chart: [
      ["Linear", 42],
      ["RF", 84],
      ["LightGBM", 82]
    ],
    methodology: [
      "Limpieza de datos y preparacion de caracteristicas.",
      "Baseline con regresion lineal.",
      "Entrenamiento de Random Forest.",
      "Entrenamiento de LightGBM.",
      "Analisis de calidad, tiempo de entrenamiento y tiempo de prediccion."
    ],
    results: [
      "Random Forest tuvo menor RMSE: 1747.77.",
      "LightGBM tuvo RMSE competitivo: 1776.60.",
      "LightGBM entreno en 16.61s frente a 2790.24s de Random Forest."
    ],
    insight: "Para producto, LightGBM puede ser mejor decision aunque no tenga el RMSE minimo absoluto: entrega calidad alta con mucha mejor velocidad.",
    next: ["Agregar tabla de latencias.", "Mostrar importancia de variables.", "Crear demo simple de estimacion."]
  },
  "sweet-lift-taxi-forecasting": {
    title: "Forecast de pedidos de taxi",
    eyebrow: "Forecasting | Series temporales",
    lead: "Prediccion horaria de pedidos de taxis para anticipar demanda en aeropuertos y asignar conductores en horas pico.",
    context: "La empresa necesita predecir la siguiente hora. El reto fue convertir una serie temporal en variables supervisadas sin romper el orden cronologico.",
    data: "Serie historica de pedidos con remuestreo horario y objetivo num_orders.",
    stack: ["Python", "Series temporales", "Lags", "Random Forest", "Gradient Boosting"],
    metrics: [
      ["Modelo final", "Random Forest"],
      ["RMSE test", "43.21"],
      ["Objetivo", "<= 48"]
    ],
    chartTitle: "RMSE por modelo",
    chart: [
      ["Linear", 45.22],
      ["RF", 43.21],
      ["GB", 43.33]
    ],
    methodology: [
      "Remuestreo de eventos a frecuencia horaria.",
      "Analisis de tendencia, estacionalidad y horas pico.",
      "Creacion de 24 lags, media movil, dia de semana y hora.",
      "Entrenamiento de modelos supervisados.",
      "Validacion con el 10% final como test cronologico."
    ],
    results: [
      "Random Forest obtuvo RMSE test de 43.21.",
      "El modelo cumplio el requisito de RMSE <= 48.",
      "Se construyeron 27 variables predictoras temporales."
    ],
    insight: "La parte importante fue respetar el tiempo: en forecasting, mezclar datos futuros en entrenamiento puede dar resultados bonitos pero inutiles.",
    next: ["Agregar grafica real vs predicho.", "Crear calendario de horas pico.", "Probar modelos especializados de series."]
  },
  "imdb-sentiment-nlp": {
    title: "Sentimiento en resenas IMDB",
    eyebrow: "NLP | Clasificacion de texto",
    lead: "Clasificacion automatica de resenas positivas y negativas usando TF-IDF, regresion logistica, LightGBM y una prueba controlada con BERT.",
    context: "Film Junky Union queria detectar criticas negativas automaticamente. El objetivo del proyecto era alcanzar F1 >= 0.85 y comparar modelos de texto.",
    data: "Resenas IMDB etiquetadas con sentimiento positivo o negativo y particion de entrenamiento/prueba.",
    stack: ["Python", "NLP", "TF-IDF", "Logistic Regression", "LightGBM", "BERT"],
    metrics: [
      ["Meta", "F1 >= 0.85"],
      ["Mejor enfoque", "TF-IDF + LR"],
      ["Extra", "BERT muestra"]
    ],
    chartTitle: "Solidez por enfoque",
    chart: [
      ["Baseline", 50],
      ["TF-IDF", 86],
      ["LGBM", 84],
      ["BERT", 78]
    ],
    methodology: [
      "EDA de resenas, clases y distribucion por particion.",
      "Preprocesamiento de texto.",
      "Vectorizacion con TF-IDF y variantes de n-gramas.",
      "Entrenamiento de regresion logistica y boosting.",
      "Pruebas con resenas propias para observar comportamiento."
    ],
    results: [
      "Los modelos TF-IDF + regresion logistica fueron los mas estables.",
      "El flujo alcanzo el umbral requerido de F1 >= 0.85.",
      "BERT se considero en muestra por costo computacional."
    ],
    insight: "En NLP practico, un modelo lineal bien vectorizado puede ser una solucion fuerte, explicable y barata antes de saltar a modelos pesados.",
    next: ["Extraer F1 exacto de la tabla final.", "Agregar ejemplos de resenas propias.", "Publicar version limpia del notebook."]
  },
  "good-seed-age-vision": {
    title: "Estimacion de edad con vision",
    eyebrow: "Computer Vision | Deep Learning",
    lead: "Modelo ResNet50 para estimar edad desde imagenes y apoyar cumplimiento en venta de alcohol.",
    context: "Good Seed queria evaluar si la vision artificial podia ayudar a evitar venta de alcohol a menores. El modelo se plantea como apoyo, no como sustituto unico de decision.",
    data: "7600 fotografias con etiquetas de edad real.",
    stack: ["Python", "TensorFlow", "Keras", "ResNet50", "Computer Vision"],
    metrics: [
      ["Arquitectura", "ResNet50"],
      ["MAE validacion", "7.03"],
      ["Imagenes", "7600"]
    ],
    chartTitle: "Evolucion de entrenamiento",
    chart: [
      ["E1 MAE", 58],
      ["E2 MAE", 72],
      ["E3 MAE", 83],
      ["Val MAE", 87]
    ],
    methodology: [
      "EDA de etiquetas y distribucion de edades.",
      "Preparacion de generadores de imagenes.",
      "Modelo ResNet50 preentrenado con cabeza de regresion.",
      "Entrenamiento en GPU.",
      "Evaluacion con MAE e interpretacion de uso responsable."
    ],
    results: [
      "MAE de validacion de referencia: 7.03.",
      "La arquitectura uso ResNet50 + GlobalAveragePooling2D + Dense(1).",
      "El modelo puede apoyar revision, pero requiere politicas humanas de control."
    ],
    insight: "El resultado es util si se entiende su limite: en vision aplicada a decisiones sensibles, la metrica debe ir acompanada de criterio operativo.",
    next: ["Agregar muestra visual autorizada.", "Evaluar error por rango de edad.", "Documentar criterios de uso responsable."]
  }
};

function getSlugFromPath() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  const last = parts[parts.length - 1];
  if (last && last !== "index.html") return last;
  return parts[parts.length - 2];
}

function barsMarkup(items) {
  const max = Math.max(...items.map(([, value]) => Number(value))) || 100;
  return items.map(([label, value]) => {
    const normalized = Math.max(8, Math.min(100, (Number(value) / max) * 100));
    return `
      <div class="metric-line">
        <span>${label}</span>
        <div class="bar-track"><i class="bar-fill" style="width:${normalized}%"></i></div>
        <strong>${value}</strong>
      </div>
    `;
  }).join("");
}

function listMarkup(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function tagMarkup(items) {
  return items.map((item) => `<span>${item}</span>`).join("");
}

function renderProjectPage(project) {
  document.title = `${project.title} | Juan Pablo Garcia`;

  const main = document.querySelector("main");
  if (!main) return;

  main.innerHTML = `
    <section class="detail-hero">
      <div class="container detail-hero-grid">
        <div>
          <p class="eyebrow">${project.eyebrow}</p>
          <h1>${project.title}</h1>
          <p class="hero-lead">${project.lead}</p>
          <div class="tag-list">${tagMarkup(project.stack)}</div>
        </div>
        <aside class="detail-scorecard" aria-label="Metricas principales">
          ${project.metrics.map(([label, value]) => `
            <div>
              <span>${label}</span>
              <strong>${value}</strong>
            </div>
          `).join("")}
        </aside>
      </div>
    </section>

    <section class="section-pad section-band">
      <div class="container page-grid detail-layout">
        <div class="content-stack">
          <section class="content-block narrative-block">
            <h2>Resumen ejecutivo</h2>
            <p>${project.context}</p>
            <p>${project.data}</p>
          </section>

          <section class="project-dashboard-panel">
            <div class="panel-top">
              <div>
                <span class="panel-label">Dashboard del proyecto</span>
                <h2>${project.chartTitle}</h2>
              </div>
              <span class="status-pill">Datos curados</span>
            </div>
            <div class="comparison-bars">${barsMarkup(project.chart)}</div>
          </section>

          <section class="content-block">
            <div class="tab-controls" role="tablist" aria-label="Detalle del proyecto">
              <button class="tab-btn active" type="button" data-tab="metodo">Metodologia</button>
              <button class="tab-btn" type="button" data-tab="resultados">Resultados</button>
              <button class="tab-btn" type="button" data-tab="aprendizaje">Criterio tecnico</button>
            </div>
            <div class="tab-panel active" data-panel="metodo">
              <ol class="timeline-list">${listMarkup(project.methodology)}</ol>
            </div>
            <div class="tab-panel" data-panel="resultados">
              <ul class="insight-list">${listMarkup(project.results)}</ul>
            </div>
            <div class="tab-panel" data-panel="aprendizaje">
              <p class="pull-quote">${project.insight}</p>
            </div>
          </section>

          <section class="content-block">
            <h2>Siguiente mejora publica</h2>
            <ul class="insight-list">${listMarkup(project.next)}</ul>
          </section>
        </div>

        <aside class="side-panel detail-side" aria-label="Recursos del proyecto">
          <a class="btn primary" href="../../index.html#proyectos">Volver al dashboard</a>
          <a class="btn" href="../../assets/pdf/Portafolio_de_evidencias_V2.pdf" target="_blank" rel="noreferrer">Ver CV PDF</a>
          <a class="btn" href="https://github.com/JuanPa7799" target="_blank" rel="noreferrer">GitHub</a>
          <section class="content-block">
            <h2>Publicacion segura</h2>
            <p>Esta vista usa contenido curado: no publica datasets completos, notebooks con rutas locales ni archivos privados del bootcamp.</p>
          </section>
          <section class="content-block">
            <h2>Stack</h2>
            <div class="tag-list">${tagMarkup(project.stack)}</div>
          </section>
        </aside>
      </div>
    </section>
  `;

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      const tab = button.dataset.tab;
      document.querySelectorAll("[data-tab]").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll("[data-panel]").forEach((panel) => panel.classList.remove("active"));
      button.classList.add("active");
      document.querySelector(`[data-panel="${tab}"]`)?.classList.add("active");
    });
  });
}

const slug = getSlugFromPath();
if (slug && projectDetails[slug]) {
  renderProjectPage(projectDetails[slug]);
}

const projectDetails = {
  "calidad-energia": {
    title: "Clasificacion de perturbaciones electricas",
    eyebrow: "Proyecto estrella | Machine Learning aplicado a ingenieria",
    lead: "Sistema de clasificacion para senales electricas orientado a diagnostico de calidad de energia. Es el proyecto que mejor conecta mi perfil de ingenieria con ciencia de datos aplicada.",
    context: "Las perturbaciones electricas pueden afectar estabilidad, eficiencia y monitoreo de sistemas energeticos. El objetivo fue convertir senales complejas en informacion accionable mediante modelos de machine learning.",
    data: "Senales electricas y caracteristicas derivadas para distinguir eventos de calidad de energia. La version publica muestra el flujo y las metricas confirmadas.",
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
    image: "../../assets/img/projects/calidad-energia/notebook-visual.jpg",
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
    image: "../../assets/img/projects/good-seed-age-vision/notebook-visual.jpg",
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
  }
};

const projectEnhancements = {
  "calidad-energia": {
    visualType: "pipeline",
    roles: ["machine-learning", "data-scientist"],
    decision: "Convertir senales electricas en clases tecnicas utiles para diagnostico.",
    businessImpact: "Acelera la lectura de eventos de calidad de energia y diferencia mi perfil por unir ingenieria, senales y ML.",
    technicalSummary: "El flujo trabaja con preprocesamiento de senales, extraccion de caracteristicas, comparacion de modelos y optimizacion del pipeline.",
    titleEn: "Electrical disturbance classification",
    eyebrowEn: "Flagship project | Machine Learning applied to engineering",
    leadEn: "Classification system for electrical signals focused on power quality diagnosis. It is the project that best connects my engineering background with applied data science.",
    decisionEn: "Turn electrical signals into technical classes that support diagnosis.",
    businessImpactEn: "Speeds up the interpretation of power quality events and differentiates my profile by combining engineering, signals, and ML.",
    technicalSummaryEn: "The workflow covers signal preprocessing, feature extraction, model comparison, and pipeline optimization.",
    methodologyEn: ["Explored signal behavior and class patterns.", "Prepared and normalized data for modeling.", "Built features to improve event separability.", "Trained and compared supervised models.", "Evaluated classification performance with technical interpretation."],
    resultsEn: ["Reported accuracy above 96% in experimental validation.", "Approximate 80% processing-time reduction.", "Strong differentiator because it combines ML, signals, and electrical engineering."],
    insightEn: "The value is not only the metric. It shows that I can translate a physical phenomenon into model-ready variables and useful diagnostic results.",
  },
  "interconnect-churn": {
    visualType: "roc",
    image: "../../assets/img/projects/interconnect-churn/notebook-visual.png",
    roles: ["data-scientist", "data-analyst"],
    decision: "Priorizar clientes con mayor riesgo de cancelacion usando AUC-ROC como metrica principal.",
    businessImpact: "El modelo permite ordenar acciones de retencion y pasar de datos dispersos a una lista accionable por cliente.",
    technicalSummary: "Integre cuatro fuentes, defini churn desde fecha de cancelacion, codifique variables y compare modelos supervisados hasta elegir Gradient Boosting.",
    titleEn: "Interconnect churn prediction",
    eyebrowEn: "End-to-end Data Science | Classification",
    leadEn: "Complete pipeline to identify customers at risk of cancellation by integrating multiple sources and selecting a model by ROC-AUC.",
    decisionEn: "Prioritize customers with higher cancellation risk using ROC-AUC as the main metric.",
    businessImpactEn: "The model can rank retention actions and turn scattered customer data into an actionable risk list.",
    technicalSummaryEn: "I merged four sources, defined churn from contract end dates, encoded features, and compared supervised models before selecting Gradient Boosting.",
    methodologyEn: ["Merged four customer-level sources.", "Defined churn from the contract end date.", "Imputed, encoded, and prepared a reproducible pipeline.", "Compared baselines and supervised models.", "Evaluated final test performance with ROC-AUC and accuracy."],
    resultsEn: ["Gradient Boosting was selected by ROC-AUC.", "Test ROC-AUC: 0.8963 and test accuracy: 0.8538.", "The solution supports risk segmentation for retention."],
    insightEn: "The strongest part is the full workflow: from scattered data to a decision-ready retention signal.",
  },
  "megaline-plan-recommendation": {
    visualType: "matrix",
    image: "../../assets/img/projects/megaline-plan-recommendation/notebook-visual.png",
    roles: ["data-scientist", "data-analyst"],
    decision: "Recomendar Smart o Ultra con un modelo simple que supera la prueba de cordura.",
    businessImpact: "Ayuda a orientar usuarios hacia un plan mas adecuado segun su comportamiento real.",
    technicalSummary: "Compare arboles, bosque aleatorio y regresion logistica con division train/valid/test y baseline dummy.",
    titleEn: "Mobile plan recommendation",
    eyebrowEn: "ML | Product classification",
    leadEn: "Model to recommend Smart or Ultra plans from monthly user behavior.",
    decisionEn: "Recommend Smart or Ultra with a simple model that beats the sanity check.",
    businessImpactEn: "Helps guide users toward a better plan based on actual usage behavior.",
    technicalSummaryEn: "I compared trees, random forest, and logistic regression with train/validation/test splits and a dummy baseline.",
    methodologyEn: ["Explored classes and behavioral variables.", "Split data into train, validation, and test.", "Tuned decision-tree depth.", "Tuned random-forest estimators.", "Compared final results against logistic regression and baseline."],
    resultsEn: ["Random Forest reached 0.8149 test accuracy.", "The model beat the 0.6967 sanity check.", "The minimum accuracy target above 0.75 was met."],
    insightEn: "A good fundamentals case: compare models, validate against a baseline, and prove the model learned a real signal.",
  },
  "bank-churn-balanced": {
    visualType: "score-ring",
    image: "../../assets/img/projects/bank-churn-balanced/notebook-visual.png",
    roles: ["data-scientist", "data-analyst"],
    decision: "Optimizar deteccion de clientes que abandonan, no solo accuracy global.",
    businessImpact: "Permite priorizar retencion sobre la clase que realmente importa para negocio.",
    technicalSummary: "Trabaje el desbalance con Random Forest, ajuste de umbral y evaluacion por F1, recall y AUC-ROC.",
    titleEn: "Bank churn with imbalanced classes",
    eyebrowEn: "Business ML | Imbalanced classification",
    leadEn: "Model to detect banking customers at risk of leaving using balancing, threshold tuning, and the right metrics.",
    decisionEn: "Optimize detection of customers who leave, not only global accuracy.",
    businessImpactEn: "Supports retention prioritization around the class that actually matters to the business.",
    technicalSummaryEn: "I handled class imbalance with Random Forest, threshold tuning, and evaluation through F1, recall, and ROC-AUC.",
    methodologyEn: ["Analyzed class imbalance.", "Used stratified train/validation/test splits.", "Compared logistic regression, Random Forest, and balancing strategies.", "Tuned the threshold to maximize validation F1.", "Evaluated the final model on test data."],
    resultsEn: ["Test F1 reached 0.6365.", "Test ROC-AUC reached 0.865.", "Churn recall reached 0.6904."],
    insightEn: "In imbalanced churn, accuracy can look good while failing exactly where the business needs the model.",
  },
  "oilygiant-risk-profit": {
    visualType: "gauge",
    image: "../../assets/img/projects/oilygiant-risk-profit/notebook-visual.png",
    roles: ["data-analyst", "data-scientist"],
    decision: "Elegir region_1 porque combina beneficio esperado con riesgo menor al limite de negocio.",
    businessImpact: "Muestra como tomar decisiones con modelos, incertidumbre y restricciones, no solo con la prediccion mas alta.",
    technicalSummary: "Use regresion lineal por region y bootstrap para estimar beneficio promedio, intervalo y riesgo de perdida.",
    titleEn: "Oil region risk and profit",
    eyebrowEn: "Decision Analytics | Risk and profit",
    leadEn: "Region selection for 200 new wells using linear regression, expected profit, and bootstrapping.",
    decisionEn: "Choose region_1 because it combines expected profit with risk below the business limit.",
    businessImpactEn: "Shows how to make decisions with models, uncertainty, and constraints, not just the highest prediction.",
    technicalSummaryEn: "I trained linear regression by region and used bootstrapping to estimate average profit, interval, and loss risk.",
    methodologyEn: ["Trained linear regression by region.", "Calculated the break-even reserve volume.", "Selected the top 200 wells by prediction.", "Bootstrapped 1000 samples to simulate uncertainty.", "Selected the final region by profit and risk constraint."],
    resultsEn: ["region_1 was the only eligible option under 2.5% loss risk.", "Estimated average profit: 4.52M USD.", "The best risk-adjusted decision was not just the largest point estimate."],
    insightEn: "A strong business case: it connects prediction, expected value, risk, and a clear investment recommendation.",
  },
  "gold-recovery-zyfra": {
    visualType: "timeline",
    roles: ["data-scientist", "machine-learning"],
    decision: "Evitar fuga de informacion y evaluar recuperacion con la metrica industrial correcta.",
    businessImpact: "Refuerza criterio para procesos industriales donde algunas variables no existen al momento de predecir.",
    technicalSummary: "Verifique formula de recuperacion, compare columnas train/test, impute faltantes y evalue con sMAPE total.",
    titleEn: "Gold recovery | Zyfra",
    eyebrowEn: "Industrial ML | Mining processes",
    leadEn: "Gold recovery prediction in an industrial process while respecting feature availability and sMAPE evaluation.",
    decisionEn: "Avoid leakage and evaluate recovery with the correct industrial metric.",
    businessImpactEn: "Shows judgment for industrial processes where some variables are not available at prediction time.",
    technicalSummaryEn: "I validated the recovery formula, compared train/test columns, imputed missing values, and evaluated with total sMAPE.",
    methodologyEn: ["Compared train, test, and full datasets.", "Validated the official recovery formula.", "Detected test-unavailable features.", "Imputed missing values and removed leakage.", "Evaluated rougher, final, and total sMAPE."],
    resultsEn: ["Recovery formula matched with MAE 0.0000.", "Total sMAPE: 8.49%.", "The model respected real feature availability."],
    insightEn: "The main value is methodological care: using a feature that is not available at prediction time invalidates the model.",
  },
  "sure-tomorrow-insurance": {
    visualType: "pipeline",
    image: "../../assets/img/projects/sure-tomorrow-insurance/notebook-visual.png",
    roles: ["machine-learning", "data-scientist"],
    decision: "Resolver similitud, prediccion y ofuscacion de datos con una misma base matematica.",
    businessImpact: "Conecta marketing, prediccion y privacidad sin vender el proyecto como solo una metrica.",
    technicalSummary: "Use escalado, KNN, regresion lineal y transformacion matricial para proteger datos personales.",
    titleEn: "Sure Tomorrow Insurance",
    eyebrowEn: "Applied linear algebra | ML and privacy",
    leadEn: "Project to find similar customers, predict insurance benefits, and protect personal data through matrix transformation.",
    decisionEn: "Solve similarity, prediction, and data obfuscation with the same mathematical foundation.",
    businessImpactEn: "Connects marketing, prediction, and privacy without reducing the project to a single metric.",
    technicalSummaryEn: "I used scaling, KNN, linear regression, and matrix transformation to protect personal data.",
    methodologyEn: ["Reviewed and scaled variables.", "Found similar customers using distance.", "Predicted probability of receiving benefits.", "Built linear regression for expected benefits.", "Transformed data to make personal recovery harder."],
    resultsEn: ["Connected linear algebra foundations with practical ML tasks.", "Showed how to protect data while preserving analytical utility.", "Adds mathematical and privacy judgment to the portfolio."],
    insightEn: "Not every strong portfolio piece is about high metrics. This one shows math foundations and privacy thinking.",
  },
  "rusty-bargain-car-pricing": {
    visualType: "scatter",
    image: "../../assets/img/projects/rusty-bargain-car-pricing/notebook-visual.png",
    roles: ["data-analyst", "data-scientist"],
    decision: "Elegir un modelo considerando calidad predictiva y velocidad de respuesta.",
    businessImpact: "En un producto real, LightGBM puede ser mejor opcion aunque Random Forest tenga menor RMSE absoluto.",
    technicalSummary: "Compare regresion lineal, Random Forest y LightGBM por RMSE, tiempo de entrenamiento y velocidad de prediccion.",
    titleEn: "Used car price prediction",
    eyebrowEn: "Regression | Quality vs speed",
    leadEn: "Model to estimate used-car prices by comparing error, training time, and prediction speed.",
    decisionEn: "Choose a model by considering predictive quality and response speed.",
    businessImpactEn: "For a real product, LightGBM can be the better decision even if Random Forest has the lowest absolute RMSE.",
    technicalSummaryEn: "I compared linear regression, Random Forest, and LightGBM by RMSE, training time, and prediction speed.",
    methodologyEn: ["Cleaned data and prepared features.", "Built a linear regression baseline.", "Trained Random Forest.", "Trained LightGBM.", "Analyzed quality, training time, and prediction speed."],
    resultsEn: ["Random Forest had the lowest RMSE: 1747.77.", "LightGBM was competitive: RMSE 1776.60.", "LightGBM trained in 16.61s vs 2790.24s for Random Forest."],
    insightEn: "For product decisions, the best model is not always the one with the smallest error if it is too slow to use.",
  },
  "sweet-lift-taxi-forecasting": {
    visualType: "forecast",
    image: "../../assets/img/projects/sweet-lift-taxi-forecasting/notebook-visual.png",
    roles: ["machine-learning", "data-scientist"],
    decision: "Predecir demanda horaria respetando el orden temporal.",
    businessImpact: "Permite anticipar horas pico y planear disponibilidad de conductores en aeropuertos.",
    technicalSummary: "Remuestree la serie por hora, cree lags y variables temporales, y evalue con test cronologico.",
    titleEn: "Taxi demand forecasting",
    eyebrowEn: "Forecasting | Time series",
    leadEn: "Hourly taxi order prediction to anticipate airport demand and assign drivers during peak hours.",
    decisionEn: "Predict hourly demand while respecting chronological order.",
    businessImpactEn: "Helps anticipate peak hours and plan driver availability at airports.",
    technicalSummaryEn: "I resampled the series hourly, created lags and time features, and evaluated on a chronological test set.",
    methodologyEn: ["Resampled events to hourly frequency.", "Analyzed trend, seasonality, and peak hours.", "Created 24 lags, rolling mean, weekday, and hour features.", "Trained supervised models.", "Validated on the final 10% as chronological test."],
    resultsEn: ["Random Forest reached test RMSE 43.21.", "The model met the RMSE <= 48 target.", "Built 27 temporal predictive features."],
    insightEn: "The key was respecting time: using future information would create nice but useless results.",
  },
  "imdb-sentiment-nlp": {
    visualType: "matrix",
    image: "../../assets/img/projects/imdb-sentiment-nlp/notebook-visual.png",
    roles: ["machine-learning", "data-scientist"],
    decision: "Usar una solucion de texto fuerte y eficiente antes de saltar a modelos pesados.",
    businessImpact: "Clasificar resenas negativas ayuda a monitorear percepcion y priorizar revision de contenido.",
    technicalSummary: "Compare TF-IDF con regresion logistica, LightGBM y una prueba controlada con BERT.",
    titleEn: "IMDB sentiment analysis",
    eyebrowEn: "NLP | Text classification",
    leadEn: "Automatic positive/negative review classification using TF-IDF, logistic regression, LightGBM, and a controlled BERT test.",
    decisionEn: "Use a strong and efficient text solution before jumping to heavier models.",
    businessImpactEn: "Classifying negative reviews helps monitor perception and prioritize content review.",
    technicalSummaryEn: "I compared TF-IDF with logistic regression, LightGBM, and a controlled BERT sample.",
    methodologyEn: ["Explored reviews, classes, and split distribution.", "Preprocessed text.", "Vectorized with TF-IDF and n-grams.", "Trained logistic regression and boosting models.", "Tested behavior with custom reviews."],
    resultsEn: ["TF-IDF plus logistic regression was the most stable approach.", "The workflow reached the required F1 >= 0.85 threshold.", "BERT was tested on a sample due to computational cost."],
    insightEn: "In practical NLP, a well-vectorized linear model can be strong, explainable, and cheap.",
  },
  "good-seed-age-vision": {
    visualType: "score-ring",
    roles: ["machine-learning", "data-scientist"],
    decision: "Usar vision artificial como apoyo operativo, no como sustituto unico de decision.",
    businessImpact: "El caso muestra criterio responsable en una aplicacion sensible relacionada con edad.",
    technicalSummary: "Entrene ResNet50 con cabeza de regresion y evalue MAE de validacion, evitando publicar rostros del dataset.",
    titleEn: "Age estimation with computer vision",
    eyebrowEn: "Computer Vision | Deep Learning",
    leadEn: "ResNet50 model to estimate age from images and support alcohol-sale compliance.",
    decisionEn: "Use computer vision as operational support, not as the only decision maker.",
    businessImpactEn: "The case shows responsible judgment in a sensitive age-related application.",
    technicalSummaryEn: "I trained ResNet50 with a regression head and evaluated validation MAE, while avoiding publication of dataset faces.",
    methodologyEn: ["Explored labels and age distribution.", "Prepared image generators.", "Used pretrained ResNet50 with a regression head.", "Trained on GPU.", "Evaluated with MAE and responsible-use interpretation."],
    resultsEn: ["Reference validation MAE: 7.03.", "Architecture: ResNet50 + GlobalAveragePooling2D + Dense(1).", "The model can support review but requires human operating policies."],
    insightEn: "In sensitive computer vision use cases, the metric must be paired with operational judgment.",
  }
};

const projectRecruiterNotes = {
  "calidad-energia": {
    problem: {
      es: "Clasificar perturbaciones electricas a partir de senales para apoyar diagnostico de calidad de energia.",
      en: "Classify electrical disturbances from signals to support power quality diagnosis."
    },
    importance: {
      es: "En sistemas energeticos, detectar eventos de forma rapida ayuda a reducir tiempos de revision y mejora el monitoreo tecnico.",
      en: "In energy systems, detecting events quickly helps reduce review time and improves technical monitoring."
    },
    dataTarget: {
      es: "Senales electricas y caracteristicas derivadas; el objetivo es distinguir clases de perturbaciones.",
      en: "Electrical signals and derived features; the target is the disturbance class."
    },
    approach: {
      es: "Converti senales en variables modelables, compare el flujo baseline contra versiones con mejores caracteristicas y optimice el procesamiento.",
      en: "I turned signals into model-ready variables, compared the baseline workflow against improved feature sets, and optimized processing."
    },
    modeling: {
      es: "Modelos supervisados con Python, scikit-learn y TensorFlow para evaluar separabilidad entre eventos.",
      en: "Supervised models with Python, scikit-learn, and TensorFlow to evaluate event separability."
    },
    evaluation: {
      es: "Precision reportada superior al 96% y reduccion aproximada del 80% en procesamiento.",
      en: "Reported accuracy above 96% and roughly 80% processing reduction."
    },
    baseline: {
      es: "La comparacion principal fue contra el flujo inicial de procesamiento y versiones previas de caracteristicas.",
      en: "The main comparison was against the initial processing workflow and previous feature versions."
    },
    validation: {
      es: "Validacion experimental sobre el conjunto preparado para el proyecto; las metricas publicas se limitan a resultados confirmados.",
      en: "Experimental validation on the prepared project dataset; public metrics are limited to confirmed results."
    },
    decisions: {
      es: "Priorice precision y velocidad porque el caso exige diagnostico tecnico util, no solo una metrica alta.",
      en: "I prioritized accuracy and speed because the case needs useful technical diagnosis, not only a high metric."
    },
    limitations: {
      es: "No se publican los datos completos; el siguiente nivel seria liberar un reporte tecnico reproducible con muestras seguras.",
      en: "The full data is not public; the next level would be a reproducible technical report with safe samples."
    },
    nextStep: {
      es: "Preparar una version publica del articulo/reporte con ejemplos anonimizados y una matriz de confusion explicada.",
      en: "Prepare a public article/report version with anonymized examples and an explained confusion matrix."
    }
  },
  "interconnect-churn": {
    problem: {
      es: "Identificar clientes con riesgo de cancelacion antes de que abandonen el servicio.",
      en: "Identify customers at risk of cancellation before they leave the service."
    },
    importance: {
      es: "El modelo ayuda a priorizar acciones de retencion y a enfocar recursos comerciales donde hay mayor riesgo.",
      en: "The model helps prioritize retention actions and focus commercial resources where risk is higher."
    },
    dataTarget: {
      es: "7043 clientes integrados desde contract, personal, internet y phone; target de churn definido por finalizacion de contrato.",
      en: "7043 customers merged from contract, personal, internet, and phone; churn target defined from contract end status."
    },
    approach: {
      es: "Integre fuentes, trate nulos, codifique variables y compare modelos con una metrica adecuada para ranking de riesgo.",
      en: "I merged sources, handled missing values, encoded features, and compared models with a metric suited for risk ranking."
    },
    modeling: {
      es: "Regresion logistica, Random Forest y Gradient Boosting; el modelo final fue GradientBoostingClassifier.",
      en: "Logistic Regression, Random Forest, and Gradient Boosting; the final model was GradientBoostingClassifier."
    },
    evaluation: {
      es: "AUC-ROC test 0.8963 y accuracy test 0.8538.",
      en: "Test ROC-AUC 0.8963 and test accuracy 0.8538."
    },
    baseline: {
      es: "Gradient Boosting mejoro la comparacion frente a LogReg (0.8261 AUC) y Random Forest (0.8651 AUC).",
      en: "Gradient Boosting improved over LogReg (0.8261 AUC) and Random Forest (0.8651 AUC)."
    },
    validation: {
      es: "Evaluacion final en conjunto test despues de preparar el pipeline de integracion y codificacion.",
      en: "Final evaluation on the test set after preparing the integration and encoding pipeline."
    },
    decisions: {
      es: "Use AUC-ROC como metrica principal porque importa ordenar clientes por riesgo, no solo acertar clases.",
      en: "I used ROC-AUC as the main metric because ranking customers by risk matters more than only class accuracy."
    },
    limitations: {
      es: "Caso academico sin despliegue; en produccion haria calibracion, monitoreo de drift y analisis de errores por segmento.",
      en: "Academic case without deployment; in production I would add calibration, drift monitoring, and segment-level error analysis."
    },
    nextStep: {
      es: "Agregar interpretabilidad por variables y una matriz de confusion orientada a decisiones de retencion.",
      en: "Add feature interpretability and a confusion matrix framed around retention decisions."
    }
  },
  "megaline-plan-recommendation": {
    problem: {
      es: "Recomendar el plan Smart o Ultra segun comportamiento mensual de usuarios.",
      en: "Recommend the Smart or Ultra plan from monthly user behavior."
    },
    importance: {
      es: "Una recomendacion de plan puede mejorar la experiencia del usuario y apoyar migraciones comerciales.",
      en: "A plan recommendation can improve user experience and support commercial migrations."
    },
    dataTarget: {
      es: "Uso mensual de llamadas, mensajes e internet; target: plan recomendado.",
      en: "Monthly calls, messages, and internet usage; target: recommended plan."
    },
    approach: {
      es: "Explore variables de comportamiento, dividi datos en train/valid/test y compare modelos simples.",
      en: "I explored behavioral variables, split data into train/validation/test, and compared simple models."
    },
    modeling: {
      es: "Decision Tree, Random Forest y Logistic Regression; el final fue Random Forest.",
      en: "Decision Tree, Random Forest, and Logistic Regression; the final model was Random Forest."
    },
    evaluation: {
      es: "Accuracy test 0.8149, por encima del objetivo minimo y de la prueba de cordura.",
      en: "Test accuracy 0.8149, above the minimum target and sanity check."
    },
    baseline: {
      es: "Baseline dummy 0.6967; Random Forest llego a 0.8149.",
      en: "Dummy baseline 0.6967; Random Forest reached 0.8149."
    },
    validation: {
      es: "Division train/valid/test para ajustar hiperparametros y evaluar en test final.",
      en: "Train/validation/test split to tune hyperparameters and evaluate on the final test set."
    },
    decisions: {
      es: "Elegir un modelo interpretable y suficientemente estable fue mas importante que complicar el pipeline.",
      en: "Choosing a simple and stable model mattered more than overcomplicating the pipeline."
    },
    limitations: {
      es: "El caso no incluye costo de recomendacion ni experimentacion A/B para medir efecto comercial real.",
      en: "The case does not include recommendation cost or A/B testing to measure real commercial impact."
    },
    nextStep: {
      es: "Probar una matriz de confusion por plan y reglas de negocio para evitar recomendaciones poco rentables.",
      en: "Add a confusion matrix by plan and business rules to avoid low-value recommendations."
    }
  },
  "bank-churn-balanced": {
    problem: {
      es: "Detectar clientes bancarios que probablemente abandonen, aun con clase positiva minoritaria.",
      en: "Detect bank customers likely to leave, despite the positive class being a minority."
    },
    importance: {
      es: "En retencion, perder clientes de riesgo suele costar mas que contactar de forma preventiva.",
      en: "In retention, losing at-risk customers usually costs more than proactive outreach."
    },
    dataTarget: {
      es: "10000 registros bancarios; target Exited con abandono cercano al 20%.",
      en: "10000 banking records; target Exited with churn close to 20%."
    },
    approach: {
      es: "Trate el desbalance, compare modelos y ajuste el umbral para mejorar F1 sin ignorar recall.",
      en: "I handled imbalance, compared models, and tuned the threshold to improve F1 without ignoring recall."
    },
    modeling: {
      es: "Logistic Regression y Random Forest con estrategias de balanceo; final con Random Forest balanceado.",
      en: "Logistic Regression and Random Forest with balancing strategies; final balanced Random Forest."
    },
    evaluation: {
      es: "F1 test 0.6365, AUC-ROC 0.865 y recall churn 0.6904.",
      en: "Test F1 0.6365, ROC-AUC 0.865, and churn recall 0.6904."
    },
    baseline: {
      es: "Se comparo contra dummy y regresion logistica; accuracy sola no era confiable por desbalance.",
      en: "Compared against dummy and logistic regression; accuracy alone was unreliable because of imbalance."
    },
    validation: {
      es: "Particion estratificada train/valid/test y ajuste de umbral en validacion.",
      en: "Stratified train/validation/test split and threshold tuning on validation."
    },
    decisions: {
      es: "Priorice F1 y recall porque el negocio necesita encontrar clientes en riesgo, no solo acertar la clase mayoritaria.",
      en: "I prioritized F1 and recall because the business needs to find at-risk customers, not only predict the majority class."
    },
    limitations: {
      es: "Faltaria calibrar probabilidades y analizar falsos positivos/falsos negativos con costo de negocio.",
      en: "Probability calibration and business-cost analysis of false positives/negatives would be needed."
    },
    nextStep: {
      es: "Agregar interpretabilidad y una recomendacion de umbral segun presupuesto de retencion.",
      en: "Add interpretability and a threshold recommendation based on retention budget."
    }
  },
  "oilygiant-risk-profit": {
    problem: {
      es: "Elegir una region para abrir 200 pozos sin exceder el riesgo maximo de perdida.",
      en: "Choose a region for 200 new wells without exceeding the maximum loss risk."
    },
    importance: {
      es: "La decision combina prediccion, inversion y riesgo; una region rentable puede no ser aceptable si el riesgo es alto.",
      en: "The decision combines prediction, investment, and risk; a profitable region may be unacceptable if risk is high."
    },
    dataTarget: {
      es: "Tres regiones con 100000 puntos cada una; target: volumen de reservas.",
      en: "Three regions with 100000 points each; target: reserve volume."
    },
    approach: {
      es: "Entrene regresion lineal por region, seleccione top-200 y use bootstrap para estimar beneficio y riesgo.",
      en: "I trained linear regression by region, selected top-200 wells, and used bootstrap to estimate profit and risk."
    },
    modeling: {
      es: "Regresion lineal por requerimiento del caso y simulacion bootstrap con 1000 muestras.",
      en: "Linear regression as required by the case and bootstrap simulation with 1000 samples."
    },
    evaluation: {
      es: "region_1: beneficio promedio 4.52M USD y riesgo de perdida 1.5%.",
      en: "region_1: average profit 4.52M USD and 1.5% loss risk."
    },
    baseline: {
      es: "Criterio de negocio: riesgo de perdida menor a 2.5%; region_1 fue la opcion elegible.",
      en: "Business criterion: loss risk below 2.5%; region_1 was the eligible option."
    },
    validation: {
      es: "Bootstrap de 1000 muestras para estimar distribucion de beneficio e incertidumbre.",
      en: "1000-sample bootstrap to estimate the profit distribution and uncertainty."
    },
    decisions: {
      es: "La recomendacion no fue la prediccion maxima aislada, sino la mejor decision ajustada por riesgo.",
      en: "The recommendation was not the isolated maximum prediction, but the best risk-adjusted decision."
    },
    limitations: {
      es: "Variables anonimizadas y caso academico; un caso real necesitaria costos, restricciones geologicas y sensibilidad.",
      en: "Anonymized variables and academic case; a real case would require costs, geological constraints, and sensitivity analysis."
    },
    nextStep: {
      es: "Agregar escenarios de costo y sensibilidad para explicar cuando cambiaria la region recomendada.",
      en: "Add cost and sensitivity scenarios to explain when the recommended region would change."
    }
  },
  "gold-recovery-zyfra": {
    problem: {
      es: "Predecir recuperacion de oro sin usar variables que no existen al momento de prediccion.",
      en: "Predict gold recovery without using variables unavailable at prediction time."
    },
    importance: {
      es: "En procesos industriales, una fuga de informacion produce un modelo inutil aunque la metrica parezca buena.",
      en: "In industrial processes, leakage creates a useless model even if the metric looks good."
    },
    dataTarget: {
      es: "Datos metalurgicos por etapa; targets de recuperacion rougher y final.",
      en: "Metallurgical process data by stage; rougher and final recovery targets."
    },
    approach: {
      es: "Compare train/test/full, valide formula oficial, elimine fuga e impute faltantes.",
      en: "I compared train/test/full, validated the official formula, removed leakage, and imputed missing values."
    },
    modeling: {
      es: "Modelos de regresion evaluados con sMAPE rougher, final y total.",
      en: "Regression models evaluated with rougher, final, and total sMAPE."
    },
    evaluation: {
      es: "EAM de formula 0.0000 y sMAPE total 8.49%.",
      en: "Formula MAE 0.0000 and total sMAPE 8.49%."
    },
    baseline: {
      es: "La comparacion clave fue contra la formula oficial y la disponibilidad real de variables en test.",
      en: "The key comparison was against the official formula and real feature availability in test."
    },
    validation: {
      es: "Evaluacion separada por etapas y test final respetando columnas disponibles.",
      en: "Stage-level evaluation and final test while respecting available columns."
    },
    decisions: {
      es: "Preferi un modelo metodologicamente valido antes que usar variables filtradas que inflaran resultados.",
      en: "I preferred a methodologically valid model over leaked variables that would inflate results."
    },
    limitations: {
      es: "No incluye despliegue ni monitoreo de proceso; requiere revision con expertos de planta para produccion.",
      en: "No deployment or process monitoring is included; production would require plant expert review."
    },
    nextStep: {
      es: "Explicar variables mas importantes por etapa y errores por condiciones de proceso.",
      en: "Explain the most important variables by stage and errors under process conditions."
    }
  },
  "sure-tomorrow-insurance": {
    problem: {
      es: "Resolver similitud de clientes, prediccion de beneficios y proteccion de datos personales.",
      en: "Solve customer similarity, benefit prediction, and personal data protection."
    },
    importance: {
      es: "Muestra como ML tambien debe considerar privacidad y uso responsable de datos.",
      en: "Shows how ML must also consider privacy and responsible data use."
    },
    dataTarget: {
      es: "Datos de asegurados: sexo, edad, salario, familiares y beneficios recibidos.",
      en: "Insurance customer data: sex, age, salary, family members, and received benefits."
    },
    approach: {
      es: "Aplique escalado, distancia, clasificacion, regresion y transformacion matricial.",
      en: "I applied scaling, distance, classification, regression, and matrix transformation."
    },
    modeling: {
      es: "KNN para similitud, modelos predictivos para beneficios y algebra lineal para ofuscacion.",
      en: "KNN for similarity, predictive models for benefits, and linear algebra for obfuscation."
    },
    evaluation: {
      es: "Cuatro tareas resueltas; el foco fue conservar utilidad analitica al transformar datos.",
      en: "Four tasks solved; the focus was preserving analytical utility after transforming data."
    },
    baseline: {
      es: "Comparacion conceptual entre datos originales y transformados para verificar que el modelo mantuviera utilidad.",
      en: "Conceptual comparison between original and transformed data to verify model utility."
    },
    validation: {
      es: "Pruebas de comportamiento antes y despues del escalado/ofuscacion.",
      en: "Behavior checks before and after scaling/obfuscation."
    },
    decisions: {
      es: "No reduje el caso a una sola metrica porque el aprendizaje central era matematico y de privacidad.",
      en: "I did not reduce the case to a single metric because the main learning was mathematical and privacy-oriented."
    },
    limitations: {
      es: "No sustituye una estrategia formal de privacidad; es una demostracion tecnica de transformacion de datos.",
      en: "It does not replace a formal privacy strategy; it is a technical demonstration of data transformation."
    },
    nextStep: {
      es: "Agregar evaluacion cuantitativa antes/despues y explicar escenarios donde la ofuscacion no basta.",
      en: "Add quantitative before/after evaluation and explain scenarios where obfuscation is not enough."
    }
  },
  "rusty-bargain-car-pricing": {
    problem: {
      es: "Estimar precio de autos usados considerando calidad predictiva y velocidad para una app.",
      en: "Estimate used-car prices while considering predictive quality and app response speed."
    },
    importance: {
      es: "En producto, el modelo debe predecir bien y responder rapido; el menor error absoluto no siempre gana.",
      en: "In product, the model must predict well and respond quickly; the smallest absolute error does not always win."
    },
    dataTarget: {
      es: "Historial de autos con caracteristicas tecnicas y target precio.",
      en: "Used-car history with technical features and price as target."
    },
    approach: {
      es: "Limpie datos, prepare variables y compare error, entrenamiento y prediccion.",
      en: "I cleaned data, prepared features, and compared error, training time, and prediction time."
    },
    modeling: {
      es: "Regresion lineal como baseline, Random Forest y LightGBM.",
      en: "Linear Regression as baseline, Random Forest, and LightGBM."
    },
    evaluation: {
      es: "Random Forest RMSE 1747.77; LightGBM RMSE 1776.60 con entrenamiento mucho mas rapido.",
      en: "Random Forest RMSE 1747.77; LightGBM RMSE 1776.60 with much faster training."
    },
    baseline: {
      es: "Regresion lineal como referencia inicial y comparacion de modelos por RMSE/tiempo.",
      en: "Linear regression as the initial reference and model comparison by RMSE/time."
    },
    validation: {
      es: "Evaluacion final con particion de prueba y medicion de tiempos de entrenamiento/prediccion.",
      en: "Final evaluation on a test split and measurement of training/prediction time."
    },
    decisions: {
      es: "LightGBM fue una decision fuerte por balance calidad-velocidad, aunque Random Forest tuvo RMSE menor.",
      en: "LightGBM was a strong quality-speed decision, even though Random Forest had lower RMSE."
    },
    limitations: {
      es: "Faltaria validar drift de mercado, valores extremos y comportamiento por marca/modelo.",
      en: "Market drift, outliers, and brand/model-level behavior would still need validation."
    },
    nextStep: {
      es: "Agregar analisis de error por segmento y recomendaciones para umbrales de precio confiable.",
      en: "Add segment-level error analysis and recommendations for reliable price thresholds."
    }
  },
  "sweet-lift-taxi-forecasting": {
    problem: {
      es: "Predecir pedidos de taxi para la siguiente hora en aeropuertos.",
      en: "Predict taxi orders for the next hour at airports."
    },
    importance: {
      es: "Anticipar demanda ayuda a asignar conductores en horas pico y reducir esperas.",
      en: "Anticipating demand helps assign drivers during peak hours and reduce waiting times."
    },
    dataTarget: {
      es: "Serie historica remuestreada por hora; target: num_orders de la siguiente hora.",
      en: "Historical series resampled hourly; target: next-hour num_orders."
    },
    approach: {
      es: "Transforme la serie en problema supervisado con lags, media movil, dia y hora.",
      en: "I transformed the series into a supervised problem with lags, rolling mean, weekday, and hour."
    },
    modeling: {
      es: "Regresion lineal, Random Forest y Gradient Boosting; final Random Forest.",
      en: "Linear Regression, Random Forest, and Gradient Boosting; final Random Forest."
    },
    evaluation: {
      es: "RMSE test 43.21, cumpliendo el objetivo operacional de RMSE <= 48.",
      en: "Test RMSE 43.21, meeting the operational target of RMSE <= 48."
    },
    baseline: {
      es: "Comparacion contra modelos supervisados y criterio de negocio RMSE <= 48.",
      en: "Comparison against supervised models and the business criterion RMSE <= 48."
    },
    validation: {
      es: "Test cronologico con el 10% final para evitar fuga temporal.",
      en: "Chronological test using the final 10% to avoid time leakage."
    },
    decisions: {
      es: "Respete el orden temporal; mezclar futuro en train habria dado resultados no confiables.",
      en: "I respected chronological order; mixing future data into training would make results unreliable."
    },
    limitations: {
      es: "No incluye clima, eventos externos ni calendario operativo que podrian mejorar picos de demanda.",
      en: "Weather, external events, and operational calendars are not included and could improve peak prediction."
    },
    nextStep: {
      es: "Agregar variables externas y revisar errores en horas pico/extremos.",
      en: "Add external variables and review errors during peaks/extreme hours."
    }
  },
  "imdb-sentiment-nlp": {
    problem: {
      es: "Clasificar resenas IMDB como positivas o negativas para detectar opinion negativa.",
      en: "Classify IMDB reviews as positive or negative to detect negative sentiment."
    },
    importance: {
      es: "Automatizar sentimiento ayuda a monitorear percepcion y priorizar revision de contenido.",
      en: "Automated sentiment helps monitor perception and prioritize content review."
    },
    dataTarget: {
      es: "Resenas etiquetadas con sentimiento binario; target: positivo/negativo.",
      en: "Reviews labeled with binary sentiment; target: positive/negative."
    },
    approach: {
      es: "Limpieza de texto, TF-IDF con n-gramas, comparacion de modelos y pruebas con resenas propias.",
      en: "Text cleaning, TF-IDF with n-grams, model comparison, and tests with custom reviews."
    },
    modeling: {
      es: "Regresion logistica, LightGBM y prueba controlada con BERT.",
      en: "Logistic Regression, LightGBM, and a controlled BERT test."
    },
    evaluation: {
      es: "El flujo alcanzo el umbral F1 >= 0.85; TF-IDF + regresion logistica fue el enfoque mas estable.",
      en: "The workflow reached the F1 >= 0.85 threshold; TF-IDF + Logistic Regression was the most stable approach."
    },
    baseline: {
      es: "Comparacion contra baseline conceptual de clase/azar y modelos mas pesados.",
      en: "Comparison against a class/random conceptual baseline and heavier models."
    },
    validation: {
      es: "Particion train/test y pruebas adicionales con textos personalizados.",
      en: "Train/test split and additional checks with custom texts."
    },
    decisions: {
      es: "Preferi una solucion lineal explicable y barata antes de depender de modelos mas pesados.",
      en: "I preferred an explainable and cheap linear solution before depending on heavier models."
    },
    limitations: {
      es: "El contexto de sarcasmo, dominio y lenguaje fuera de IMDB puede requerir datos adicionales.",
      en: "Sarcasm, domain shift, and non-IMDB language may require additional data."
    },
    nextStep: {
      es: "Agregar matriz de confusion y analisis de errores por tipo de resena.",
      en: "Add a confusion matrix and error analysis by review type."
    }
  },
  "good-seed-age-vision": {
    problem: {
      es: "Estimar edad desde imagenes para apoyar controles de venta de alcohol.",
      en: "Estimate age from images to support alcohol-sale controls."
    },
    importance: {
      es: "Es un caso sensible: el modelo puede apoyar, pero no debe reemplazar una decision humana u operativa.",
      en: "It is a sensitive case: the model can support, but should not replace human or operational decisions."
    },
    dataTarget: {
      es: "7600 fotografias con edad real; target: edad numerica.",
      en: "7600 photos with real age labels; target: numeric age."
    },
    approach: {
      es: "Analice distribucion de edades, prepare generadores y use transferencia de aprendizaje.",
      en: "I analyzed age distribution, prepared image generators, and used transfer learning."
    },
    modeling: {
      es: "ResNet50 preentrenada con GlobalAveragePooling2D y capa Dense(1).",
      en: "Pretrained ResNet50 with GlobalAveragePooling2D and Dense(1)."
    },
    evaluation: {
      es: "MAE de validacion 7.03.",
      en: "Validation MAE 7.03."
    },
    baseline: {
      es: "Comparacion con entrenamiento inicial por epocas y referencia de error absoluto medio.",
      en: "Comparison through training epochs and mean absolute error reference."
    },
    validation: {
      es: "Validacion con generadores de imagenes y evaluacion por MAE.",
      en: "Validation with image generators and MAE evaluation."
    },
    decisions: {
      es: "Reporte MAE y advertencia operativa porque el error tiene consecuencias diferentes cerca de umbrales de edad.",
      en: "I reported MAE and operational caution because errors have different consequences near age thresholds."
    },
    limitations: {
      es: "No se publican rostros del dataset; el modelo requiere politicas humanas, sesgo y revision de privacidad.",
      en: "Dataset faces are not published; the model requires human policies, bias review, and privacy checks."
    },
    nextStep: {
      es: "Analizar errores por rangos de edad y casos cercanos al umbral legal.",
      en: "Analyze errors by age ranges and cases near the legal threshold."
    }
  }
};

const detailCopy = {
  es: {
    navProjects: "Casos aplicados",
    navAbout: "Sobre mi",
    navContact: "Contacto",
    backHome: "Inicio general",
    summary: "Resumen",
    decision: "Decision tomada",
    impact: "Impacto",
    technical: "Como lo resolvi",
    evidence: "Evidencia visual",
    problem: "Problema",
    importance: "Por que importa",
    dataTarget: "Datos y objetivo",
    approach: "Enfoque",
    modeling: "Modelado",
    evaluation: "Evaluacion",
    baseline: "Baseline o comparacion",
    validation: "Validacion",
    keyDecisions: "Decisiones clave",
    limitations: "Limitaciones",
    nextStep: "Siguiente paso",
    workflow: "Flujo de trabajo",
    findings: "Resultados y aprendizajes",
    resources: "Recursos",
    roles: "Rutas relacionadas",
    cv: "Ver CV PDF",
    github: "GitHub",
    email: "Enviar email",
    linkedin: "Ver LinkedIn",
    upwork: "Ver Upwork",
    visualNote: "Grafica de resultados del proyecto.",
    interactiveNote: "Visual de resultados construido con las metricas del proyecto.",
    technologies: "Tecnologias",
    sourceDashboard: "Volver a la ruta",
    dataAnalyst: "Data Analyst",
    dataScientist: "Data Scientist",
    machineLearning: "Machine Learning",
    lang: "ES / EN"
  },
  en: {
    navProjects: "Applied cases",
    navAbout: "About",
    navContact: "Contact",
    backHome: "Main home",
    summary: "Summary",
    decision: "Decision made",
    impact: "Impact",
    technical: "How I solved it",
    evidence: "Visual evidence",
    problem: "Problem",
    importance: "Why it matters",
    dataTarget: "Data and target",
    approach: "Approach",
    modeling: "Modeling",
    evaluation: "Evaluation",
    baseline: "Baseline or comparison",
    validation: "Validation",
    keyDecisions: "Key decisions",
    limitations: "Limitations",
    nextStep: "Next step",
    workflow: "Workflow",
    findings: "Results and learnings",
    resources: "Resources",
    roles: "Related paths",
    cv: "View CV PDF",
    github: "GitHub",
    email: "Send email",
    linkedin: "View LinkedIn",
    upwork: "View Upwork",
    visualNote: "Project result chart.",
    interactiveNote: "Result visual built from the project metrics.",
    technologies: "Technologies",
    sourceDashboard: "Back to path",
    dataAnalyst: "Data Analyst",
    dataScientist: "Data Scientist",
    machineLearning: "Machine Learning",
    lang: "ES / EN"
  }
};

const metricLabelsEn = {
  "Precision reportada": "Reported accuracy",
  "Optimizacion pipeline": "Pipeline optimization",
  "Dominio": "Domain",
  "Modelo final": "Final model",
  "AUC-ROC test": "Test ROC-AUC",
  "Accuracy test": "Test accuracy",
  "Dummy baseline": "Dummy baseline",
  "F1 test": "Test F1",
  "Recall churn": "Churn recall",
  "Region recomendada": "Recommended region",
  "Beneficio promedio": "Average profit",
  "Riesgo perdida": "Loss risk",
  "EAM formula": "Formula MAE",
  "sMAPE final": "Final sMAPE",
  "sMAPE total": "Total sMAPE",
  "Tareas resueltas": "Tasks solved",
  "Foco": "Focus",
  "RF RMSE": "RF RMSE",
  "LightGBM RMSE": "LightGBM RMSE",
  "LightGBM train": "LightGBM train",
  "RMSE test": "Test RMSE",
  "Objetivo": "Target",
  "Meta": "Target",
  "Mejor enfoque": "Best approach",
  "Extra": "Extra",
  "Arquitectura": "Architecture",
  "MAE validacion": "Validation MAE",
  "Imagenes": "Images"
};

const chartTitlesEn = {
  "Evolucion del flujo tecnico": "Technical workflow evolution",
  "Comparacion de modelos": "Model comparison",
  "Exactitud por modelo": "Accuracy by model",
  "Efecto del modelado": "Modeling effect",
  "Riesgo de perdida por region": "Loss risk by region",
  "Calidad por etapa": "Quality by stage",
  "Componentes tecnicos": "Technical components",
  "Calidad relativa por modelo": "Relative model quality",
  "RMSE por modelo": "RMSE by model",
  "Solidez por enfoque": "Robustness by approach",
  "Evolucion de entrenamiento": "Training evolution"
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

function currentLanguage() {
  return localStorage.getItem("portfolio-language") === "en" ? "en" : "es";
}

function localizedProject(slug, lang) {
  const base = projectDetails[slug];
  const extra = projectEnhancements[slug] || {};
  if (lang === "es") {
    return { ...base, ...extra };
  }

  return {
    ...base,
    ...extra,
    title: extra.titleEn || base.title,
    eyebrow: extra.eyebrowEn || base.eyebrow,
    lead: extra.leadEn || base.lead,
    decision: extra.decisionEn || extra.decision,
    businessImpact: extra.businessImpactEn || extra.businessImpact,
    technicalSummary: extra.technicalSummaryEn || extra.technicalSummary,
    methodology: extra.methodologyEn || base.methodology,
    results: extra.resultsEn || base.results,
    insight: extra.insightEn || base.insight,
    metrics: (base.metrics || []).map(([label, value]) => [metricLabelsEn[label] || label, value]),
    chartTitle: extra.chartTitleEn || chartTitlesEn[base.chartTitle] || base.chartTitle
  };
}

function localizedNote(slug, key, lang) {
  const note = projectRecruiterNotes[slug]?.[key];
  if (note && note[lang]) return note[lang];
  return "";
}

function projectChecklist(slug, project, copy, lang) {
  return [
    [copy.problem, localizedNote(slug, "problem", lang) || project.context],
    [copy.importance, localizedNote(slug, "importance", lang) || project.businessImpact],
    [copy.dataTarget, localizedNote(slug, "dataTarget", lang) || project.data],
    [copy.approach, localizedNote(slug, "approach", lang) || project.methodology?.[0]],
    [copy.modeling, localizedNote(slug, "modeling", lang) || project.technicalSummary],
    [copy.evaluation, localizedNote(slug, "evaluation", lang) || project.results?.[0]],
    [copy.baseline, localizedNote(slug, "baseline", lang) || (lang === "en" ? "Compared against simpler models or a business target when available." : "Comparado contra modelos mas simples o criterio de negocio cuando estaba disponible.")],
    [copy.validation, localizedNote(slug, "validation", lang) || (lang === "en" ? "Validation follows the split or evaluation strategy documented in the workflow." : "La validacion sigue la particion o estrategia de evaluacion documentada en el flujo.")],
    [copy.keyDecisions, localizedNote(slug, "decisions", lang) || project.insight],
    [copy.limitations, localizedNote(slug, "limitations", lang) || (lang === "en" ? "Academic/applied case without production deployment; external validation would be needed before operational use." : "Caso academico/aplicado sin despliegue productivo; antes de usarlo en operacion haria validacion externa.")],
    [copy.nextStep, localizedNote(slug, "nextStep", lang) || (lang === "en" ? "Add a public README with reproducible steps and a short error analysis." : "Agregar README publico con pasos reproducibles y un analisis breve de errores.")]
  ];
}

function checklistMarkup(items) {
  return items.map(([label, value]) => `
    <article class="project-check-card">
      <span>${label}</span>
      <p>${value}</p>
    </article>
  `).join("");
}

function roleLabel(role, lang) {
  const copy = detailCopy[lang];
  return {
    "data-analyst": copy.dataAnalyst,
    "data-scientist": copy.dataScientist,
    "machine-learning": copy.machineLearning
  }[role] || role;
}

function roleHref(role) {
  return `../../dashboards/${role}/`;
}

function getSourceRole() {
  const source = new URLSearchParams(window.location.search).get("from");
  return ["data-analyst", "data-scientist", "machine-learning"].includes(source) ? source : "";
}

function sourceRoleHref(sourceRole) {
  return sourceRole ? roleHref(sourceRole) : "../../index.html";
}

function renderInteractiveVisual(project, copy) {
  const type = project.visualType || "bars";
  const items = project.chart || [];

  if (type === "gauge") {
    const best = items[1] || items[0] || ["Riesgo", 15];
    return `<div class="detail-visual gauge-visual"><div class="gauge-ring" style="--score:${Math.max(12, 100 - Number(best[1]))}%"><span>${project.metrics[2]?.[1] || best[1]}</span></div><p>${project.decision}</p></div>`;
  }

  if (type === "pipeline") {
    const steps = items.length ? items : [["Datos", 30], ["Features", 60], ["Modelo", 80], ["Decision", 96]];
    return `<div class="detail-visual pipeline-visual">${steps.map(([label], index) => `<div><span>${index + 1}</span><strong>${label}</strong></div>`).join("")}</div>`;
  }

  if (type === "scatter") {
    return `<div class="detail-visual scatter-visual">${items.map(([label, value], index) => `<i style="--x:${18 + index * 30}%;--y:${100 - Math.min(90, Number(value))}%" title="${label}: ${value}"></i>`).join("")}<span>${copy.interactiveNote}</span></div>`;
  }

  if (type === "forecast") {
    return `<div class="detail-visual forecast-visual"><svg viewBox="0 0 320 120" role="img" aria-label="${project.chartTitle}"><polyline points="0,82 40,74 80,78 120,58 160,64 200,38 240,48 280,24 320,34"></polyline><polyline class="forecast-line" points="0,88 40,80 80,82 120,68 160,70 200,50 240,54 280,36 320,42"></polyline></svg></div>`;
  }

  if (type === "roc") {
    return `<div class="detail-visual roc-visual"><svg viewBox="0 0 320 180" role="img" aria-label="${project.chartTitle}"><line x1="25" y1="155" x2="295" y2="20"></line><path d="M25 155 C38 88, 74 52, 125 42 S230 20, 295 20"></path></svg><strong>AUC ${project.metrics[1]?.[1] || ""}</strong></div>`;
  }

  if (type === "score-ring") {
    const score = parseFloat(String(project.metrics[1]?.[1] || project.metrics[0]?.[1] || "75").replace(/[^\d.]/g, "")) || 75;
    const normalized = score <= 1 ? score * 100 : Math.min(score, 100);
    return `<div class="detail-visual score-ring-visual"><div class="score-ring" style="--score:${normalized}%"><span>${project.metrics[1]?.[1] || project.metrics[0]?.[1]}</span></div><p>${project.businessImpact}</p></div>`;
  }

  if (type === "timeline") {
    return `<div class="detail-visual timeline-visual">${items.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>`;
  }

  return `<div class="comparison-bars">${barsMarkup(items)}</div>`;
}

function visualMarkup(project, copy) {
  if (project.image) {
    return `
      <figure class="notebook-visual-card">
        <img src="${project.image}" alt="${project.chartTitle}" loading="lazy">
        <figcaption>${copy.visualNote}</figcaption>
      </figure>
    `;
  }

  return `
    <div>
      ${renderInteractiveVisual(project, copy)}
      <p class="visual-caption">${copy.interactiveNote}</p>
    </div>
  `;
}

function enhanceProjectHeader(lang, sourceRole = "") {
  const copy = detailCopy[lang];
  document.documentElement.lang = lang;
  const brand = document.querySelector(".brand");
  if (brand) {
    brand.href = sourceRoleHref(sourceRole);
  }
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href.includes("#proyectos")) link.textContent = copy.navProjects;
    if (href.includes("#sobre-mi")) link.textContent = copy.navAbout;
    if (href.includes("#contacto")) link.textContent = copy.navContact;
  });

  const navLinks = document.querySelector(".nav-links");
  const nav = document.querySelector(".site-header .nav");
  if (nav && navLinks && !document.querySelector("[data-project-nav-toggle]")) {
    const toggle = document.createElement("button");
    toggle.className = "nav-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Abrir menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.dataset.projectNavToggle = "";
    toggle.innerHTML = "<span></span><span></span><span></span>";
    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.insertBefore(toggle, navLinks);
  }
  if (navLinks && !document.querySelector("[data-project-language-toggle]")) {
    const button = document.createElement("button");
    button.className = "language-toggle";
    button.type = "button";
    button.dataset.projectLanguageToggle = "";
    button.textContent = copy.lang;
    button.addEventListener("click", () => {
      const next = currentLanguage() === "es" ? "en" : "es";
      localStorage.setItem("portfolio-language", next);
      renderProjectPage(getSlugFromPath(), next);
    });
    navLinks.appendChild(button);
  }
  const toggle = document.querySelector("[data-project-language-toggle]");
  if (toggle) toggle.textContent = copy.lang;
}

function renderProjectPage(slug, lang = currentLanguage()) {
  const project = localizedProject(slug, lang);
  const copy = detailCopy[lang];
  const checklist = projectChecklist(slug, project, copy, lang);
  const sourceRole = getSourceRole();
  const sourceLabel = sourceRole ? roleLabel(sourceRole, lang) : copy.backHome;
  const sourceHref = sourceRoleHref(sourceRole);
  const cvHref = sourceRole ? `../../assets/pdf/cv-${sourceRole}-${lang}.pdf` : "../../assets/pdf/Portafolio_de_evidencias_V2.pdf";
  document.title = `${project.title} | Juan Pablo Garcia`;
  enhanceProjectHeader(lang, sourceRole);

  const main = document.querySelector("main");
  if (!main) return;

  main.innerHTML = `
    <section class="detail-hero executive-project-hero">
      <div class="container detail-hero-grid">
        <div>
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="${sourceHref}">${sourceLabel}</a>
            <span>/</span>
            <a href="../../index.html#proyectos">${copy.navProjects}</a>
          </nav>
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
          <section class="executive-grid">
            <article class="content-block narrative-block">
              <span class="panel-label">${copy.decision}</span>
              <h2>${project.decision}</h2>
              <p>${localizedNote(slug, "problem", lang) || project.context}</p>
            </article>
            <article class="content-block narrative-block">
              <span class="panel-label">${copy.impact}</span>
              <h2>${project.metrics[0]?.[1] || ""}</h2>
              <p>${localizedNote(slug, "importance", lang) || project.businessImpact}</p>
            </article>
            <article class="content-block narrative-block">
              <span class="panel-label">${copy.technical}</span>
              <h2>${project.stack.slice(0, 2).join(" + ")}</h2>
              <p>${localizedNote(slug, "evaluation", lang) || project.technicalSummary}</p>
            </article>
          </section>

          <section class="content-block project-case-block">
            <div class="panel-top">
              <div>
                <span class="panel-label">${copy.summary}</span>
                <h2>${copy.problem} -> ${copy.evaluation}</h2>
              </div>
            </div>
            <div class="project-checklist-grid">
              ${checklistMarkup(checklist)}
            </div>
          </section>

          <section class="project-dashboard-panel">
            <div class="panel-top">
              <div>
                <span class="panel-label">${copy.evidence}</span>
                <h2>${project.chartTitle}</h2>
              </div>
            </div>
            ${visualMarkup(project, copy)}
          </section>

          <section class="content-block project-flow-block">
            <div class="panel-top">
              <div>
                <span class="panel-label">${copy.workflow}</span>
                <h2>${project.chartTitle}</h2>
              </div>
            </div>
            <div class="flow-results-grid">
              <div>
                <ol class="timeline-list">${listMarkup(project.methodology)}</ol>
              </div>
              <div>
                <h3>${copy.findings}</h3>
                <ul class="insight-list">${listMarkup(project.results)}</ul>
                <p class="pull-quote">${project.insight}</p>
              </div>
            </div>
          </section>

          <section class="content-block project-resource-block">
            <span class="panel-label">${copy.resources}</span>
            <h2>${copy.resources}</h2>
            <div class="resource-button-grid">
              <a class="btn primary" href="${sourceHref}">${sourceRole ? copy.sourceDashboard : copy.backHome}</a>
              <a class="btn" href="${cvHref}" target="_blank" rel="noreferrer">${copy.cv}</a>
              <a class="btn" href="https://github.com/JuanPa7799" target="_blank" rel="noreferrer">${copy.github}</a>
            </div>
          </section>

          <section class="content-block legacy-project-detail" hidden>
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

        </div>

        <aside class="side-panel detail-side" aria-label="Recursos del proyecto">
          <a class="btn primary" href="${sourceHref}">${sourceRole ? copy.sourceDashboard : copy.backHome}</a>
          <a class="btn" href="../../index.html">${copy.backHome}</a>
          <a class="btn" href="${cvHref}" target="_blank" rel="noreferrer">${copy.cv}</a>
          <a class="btn" href="mailto:juanpablogarciachavez7799@gmail.com">${copy.email}</a>
          <a class="btn" href="https://www.linkedin.com/in/juan-pablo-garcia-chavez/" target="_blank" rel="noreferrer">${copy.linkedin}</a>
          <a class="btn" href="https://www.upwork.com/freelancers/~01c64dd314ad35adc5" target="_blank" rel="noreferrer">${copy.upwork}</a>
          <a class="btn" href="https://github.com/JuanPa7799" target="_blank" rel="noreferrer">${copy.github}</a>
          <section class="content-block role-fit-card">
            <h2>${copy.roles}</h2>
            <div class="role-link-list">
              ${(project.roles || []).map((role) => `<a href="${roleHref(role)}">${roleLabel(role, lang)}</a>`).join("")}
            </div>
          </section>
          <section class="content-block">
            <h2>${copy.technologies}</h2>
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
  renderProjectPage(slug);
}

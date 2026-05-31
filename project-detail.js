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
    tabsMethod: "Metodologia",
    tabsResults: "Resultados",
    tabsCriteria: "Criterio",
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
    tabsMethod: "Method",
    tabsResults: "Results",
    tabsCriteria: "Judgment",
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
              <span class="panel-label">${copy.summary}</span>
              <h2>${project.decision}</h2>
              <p>${project.context}</p>
            </article>
            <article class="content-block narrative-block">
              <span class="panel-label">${copy.impact}</span>
              <h2>${project.metrics[0]?.[1] || ""}</h2>
              <p>${project.businessImpact}</p>
            </article>
            <article class="content-block narrative-block">
              <span class="panel-label">${copy.technical}</span>
              <h2>${project.stack.slice(0, 2).join(" + ")}</h2>
              <p>${project.technicalSummary}</p>
            </article>
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

          <section class="content-block">
            <div class="tab-controls" role="tablist" aria-label="Detalle del proyecto">
              <button class="tab-btn active" type="button" data-tab="metodo">${copy.tabsMethod}</button>
              <button class="tab-btn" type="button" data-tab="resultados">${copy.tabsResults}</button>
              <button class="tab-btn" type="button" data-tab="aprendizaje">${copy.tabsCriteria}</button>
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

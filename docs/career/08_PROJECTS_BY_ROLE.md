# Mapa de proyectos por rol

Este documento define que proyectos se muestran en cada dashboard. Un mismo proyecto puede aparecer en mas de una ruta, pero con diferente narrativa.

## Resumen de proyectos disponibles

| Proyecto | Slug | Metrica principal | Estado |
|---|---|---|---|
| Clasificacion de perturbaciones electricas | `calidad-energia` | Precision 96%+ | Estrella |
| Prediccion de churn Interconnect | `interconnect-churn` | AUC-ROC 0.8963 | Fuerte |
| Recomendacion de planes moviles | `megaline-plan-recommendation` | Accuracy 0.8149 | Bueno |
| Churn bancario balanceado | `bank-churn-balanced` | F1 0.6365, AUC-ROC 0.865 | Fuerte |
| Riesgo y rentabilidad petrolera | `oilygiant-risk-profit` | Riesgo 1.5%, beneficio 4.52M USD | Fuerte |
| Recuperacion de oro Zyfra | `gold-recovery-zyfra` | sMAPE 8.49% | Fuerte |
| Sure Tomorrow Insurance | `sure-tomorrow-insurance` | 4 tareas ML/algebra lineal | Bueno |
| Rusty Bargain Car Pricing | `rusty-bargain-car-pricing` | LightGBM RMSE 1776.60 | Fuerte |
| Sweet Lift Taxi Forecasting | `sweet-lift-taxi-forecasting` | RMSE 43.21 | Fuerte |
| IMDB Sentiment NLP | `imdb-sentiment-nlp` | F1 >= 0.85 | Fuerte |
| Good Seed Age Vision | `good-seed-age-vision` | MAE 7.03 | Fuerte |

## Dashboard Data Analyst Jr

Narrativa: decision de negocio, KPIs, riesgo, clientes, pricing y comunicacion ejecutiva.

### Prioridad alta

1. `oilygiant-risk-profit`
   - Mensaje: seleccion de region con beneficio esperado y control de riesgo.
   - Visual: comparador de regiones, beneficio esperado, riesgo.
2. `interconnect-churn`
   - Mensaje: retencion de clientes y priorizacion comercial.
   - Visual: probabilidad de churn, segmentos y accion recomendada.
3. `rusty-bargain-car-pricing`
   - Mensaje: decision de producto entre calidad y velocidad.
   - Visual: tabla calidad/tiempo.
4. `megaline-plan-recommendation`
   - Mensaje: recomendacion de producto segun comportamiento.
   - Visual: accuracy vs baseline.

### Pendientes para reforzar

- Dashboard de KPIs comerciales con Power BI o HTML.
- Proyecto SQL puro con consultas avanzadas.
- Reporte automatizado recurrente.

## Dashboard Data Scientist Jr

Narrativa: modelado predictivo end-to-end, validacion, metricas y lectura tecnica.

### Prioridad alta

1. `interconnect-churn`
   - Mensaje: pipeline completo con datos integrados y modelo final.
   - Visual: ranking de modelos, AUC-ROC, accuracy.
2. `bank-churn-balanced`
   - Mensaje: clases desbalanceadas, F1 y AUC-ROC.
   - Visual: comparador antes/despues de balanceo.
3. `gold-recovery-zyfra`
   - Mensaje: regresion industrial con metrica de negocio.
   - Visual: sMAPE por etapa.
4. `sweet-lift-taxi-forecasting`
   - Mensaje: forecasting supervisado con objetivo cumplido.
   - Visual: RMSE vs limite.
5. `oilygiant-risk-profit`
   - Mensaje: bootstrap y decision bajo incertidumbre.
   - Visual: riesgo y beneficio.

### Pendientes para reforzar

- Interpretabilidad de modelos.
- A/B testing o experimentacion.
- SQL + ML en un mismo caso.

## Dashboard Machine Learning Jr

Narrativa: modelos aplicados, senales, NLP, vision, pipelines y camino hacia deployment.

### Prioridad alta

1. `calidad-energia`
   - Mensaje: ML aplicado a senales electricas, proyecto estrella.
   - Visual: precision, clases de perturbacion, reduccion de procesamiento.
2. `good-seed-age-vision`
   - Mensaje: computer vision con ResNet50.
   - Visual: MAE y arquitectura simplificada.
3. `imdb-sentiment-nlp`
   - Mensaje: NLP clasico con comparacion de modelos.
   - Visual: F1 objetivo alcanzado.
4. `rusty-bargain-car-pricing`
   - Mensaje: trade-off calidad vs velocidad.
   - Visual: matriz modelos/tiempo/RMSE.
5. `sweet-lift-taxi-forecasting`
   - Mensaje: pipeline temporal reproducible.
   - Visual: flujo de features temporales.

### Pendientes para reforzar

- API FastAPI de prediccion.
- Pipeline serializado con joblib.
- Dockerfile de demo local.
- Monitoreo simple con datos simulados.

## Reglas de narrativa

- No repetir exactamente el mismo texto de proyecto en todos los dashboards.
- En Data Analyst, explicar impacto de negocio.
- En Data Scientist, explicar validacion y metrica.
- En Machine Learning, explicar reproducibilidad y posibilidad de servir el modelo.
- Si no existe evidencia de una capacidad, ponerla como "siguiente mejora", no como logro.

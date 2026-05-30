# Plan maestro del portafolio

Este es el plan directo para construir el sistema completo que pediste: portafolio publico seguro, tres dashboards por rol, proyectos relevantes, CVs ES/EN y un panel privado diario para buscar trabajo sin exponer informacion sensible.

## Objetivo final

Crear un portafolio publico en GitHub Pages donde LinkedIn mande a una pagina principal y desde ahi se pueda entrar a:

1. Data Analyst Jr.
2. Data Scientist Jr.
3. Machine Learning Jr.

Cada ruta debe tener:

- dashboard propio;
- proyectos relevantes;
- CV en espanol;
- CV en ingles;
- links a GitHub, LinkedIn y email;
- selector visible ES/EN;
- contenido curado, sin datos privados.

Ademas, debe existir un sistema privado diario para organizar vacantes, CVs, pendientes, avances y proyectos nuevos.

## Regla principal

El repo publico solo debe contener material curado.

No se publica:

- `EXAMPLES/`;
- carpetas completas del bootcamp;
- datasets completos;
- notebooks crudos;
- rutas locales;
- llaves `.pem`;
- `.env`;
- credenciales JSON;
- feedback privado sin limpiar;
- telefono si no esta aprobado.

Si algo sirve como referencia pero no debe publicarse, se queda en `EXAMPLES/` o `private/`.

## Fase 1 - Base segura

Estado: avanzado.

Entregables:

- `.gitignore` protegiendo `EXAMPLES/`, `private/`, credenciales y secretos.
- Checklist de publicacion.
- Reglas de seguridad.
- Revision para evitar rutas locales y archivos sensibles.

Resultado esperado:

El repo puede crecer sin arrastrar archivos privados por accidente.

## Fase 2 - Planeacion por rol

Estado: avanzado.

Entregables:

- Roadmap Data Analyst Jr.
- Roadmap Data Scientist Jr.
- Roadmap Machine Learning Jr.
- CV base por rol en markdown.
- Job search por rol.
- Dashboard plan por rol.
- Mapa de proyectos por dashboard.

Resultado esperado:

Tener claro que mostrar segun el tipo de vacante.

## Fase 3 - Dashboard publico principal

Estado: version visual friendly creada y conectada a dashboards por rol.

Objetivo:

Que LinkedIn mande a una sola pagina principal:

```text
https://JuanPa7799.github.io/juanpablo-data-portfolio-/
```

Esa pagina debe tener:

- presentacion profesional;
- tres tarjetas grandes:
  - Data Analyst Jr;
  - Data Scientist Jr;
  - Machine Learning Jr;
- botones a cada dashboard;
- proyectos destacados;
- contacto;
- boton ES/EN visible;
- descarga del CV correcto cuando existan PDFs finales.

Pendiente:

- revisar visualmente en navegador;
- ajustar copy fino despues de ver la pagina renderizada;
- ajustar responsive visual si en celular algun bloque se siente pesado;
- reemplazar fallback de CV por PDFs finales.

## Fase 4 - Dashboards por rol

Estado: primera version creada con selector ES/EN, KPIs, proyectos, flujo visual, estado de CV, navegacion entre rutas e identidad visual diferenciada por rol.

### Data Analyst Jr

Enfoque:

- SQL;
- KPIs;
- dashboards;
- analisis de negocio;
- visualizacion;
- decision analytics.

Proyectos principales:

1. OilyGiant Risk & Profit.
2. Interconnect Churn.
3. Rusty Bargain Pricing.
4. Megaline Plan Recommendation.

Pendientes:

- agregar proyecto SQL fuerte;
- agregar dashboard BI o dashboard HTML de KPIs;
- crear CV Data Analyst ES/EN.

### Data Scientist Jr

Enfoque:

- Python;
- machine learning;
- estadistica;
- validacion;
- feature engineering;
- metricas.

Proyectos principales:

1. Interconnect Churn.
2. Bank Churn Balanced.
3. Gold Recovery Zyfra.
4. Sweet Lift Taxi Forecasting.
5. OilyGiant Risk & Profit.

Pendientes:

- agregar interpretabilidad;
- agregar SQL + ML;
- crear CV Data Scientist ES/EN.

### Machine Learning Jr

Enfoque:

- modelos aplicados;
- senales;
- vision computacional;
- NLP;
- pipelines;
- camino a deployment.

Proyectos principales:

1. Calidad de energia.
2. Good Seed Age Vision.
3. IMDB Sentiment NLP.
4. Rusty Bargain Pricing.
5. Sweet Lift Taxi Forecasting.

Pendientes:

- crear API FastAPI;
- crear pipeline serializado;
- crear Docker/demo local;
- crear CV Machine Learning ES/EN.

## Fase 5 - CVs y portafolios ES/EN

Estado: estructura preparada; PDFs finales pendientes.

Se necesitan seis CVs:

1. Data Analyst ES.
2. Data Analyst EN.
3. Data Scientist ES.
4. Data Scientist EN.
5. Machine Learning ES.
6. Machine Learning EN.

Correcciones obligatorias segun feedback:

- corregir caracteres raros;
- quitar bullets vacios;
- quitar tecnologias duplicadas;
- mover TripleTen a Educacion/Certificaciones;
- agregar links directos a portafolio y proyectos;
- adaptar resumen y proyectos segun rol;
- decidir si el telefono va publico o no.

Resultado esperado:

Cada dashboard debe descargar el CV correcto segun rol e idioma.

Mientras los PDFs finales no existan, los dashboards usan `Portafolio_de_evidencias_V2.pdf` como fallback seguro.

## Fase 6 - Proyectos publicos

Estado: hay paginas curadas y tarjetas publicas con visuales diferenciados; falta mejorar algunas paginas individuales.

Regla:

Cada proyecto publico debe tener:

- problema;
- datos usados de forma general;
- metodologia;
- metricas;
- resultado;
- limitaciones;
- siguientes pasos;
- link de regreso al dashboard;
- nada sensible.

Prioridad de mejora:

1. Calidad de energia.
2. Interconnect Churn.
3. OilyGiant Risk & Profit.
4. Sweet Lift Taxi Forecasting.
5. Good Seed Age Vision.

## Fase 7 - Sistema privado diario

Estado: planeado.

Debe vivir en:

```text
private/daily/
```

No se publica.

Archivos recomendados:

- `job-tracker.md`;
- `cv-versions.md`;
- `project-backlog.md`;
- `weekly-review.md`;
- `daily-home.md`.

Uso diario:

1. revisar vacantes;
2. elegir rol objetivo del dia;
3. adaptar CV;
4. aplicar;
5. registrar avance;
6. mejorar una evidencia del portafolio.

## Fase 8 - LinkedIn

Estado: pendiente.

Cambios:

- usar el link principal del portafolio;
- actualizar headline;
- mover TripleTen fuera de experiencia laboral;
- agregar proyectos destacados;
- agregar idiomas;
- mejorar Acerca de;
- usar links directos a dashboards/proyectos.

Headline recomendado:

```text
Data Scientist Jr | Machine Learning | Python | SQL | Modelado Predictivo | Ingenieria Mecatronica
```

## Fase 9 - Revision antes de publicar

Antes de activar GitHub Pages:

```powershell
git status --short
git ls-files | Select-String -Pattern '\.pem$|\.env$|\.csv$|\.ipynb$|EXAMPLES|private'
rg -n "C:\\Users|C:/Users|TOKEN|API_KEY|password|contrase|secret|private_key|OpenC1|gcloud" --glob '!EXAMPLES/**' .
```

Tambien probar:

- home;
- tres dashboards;
- paginas de proyectos;
- links a CV;
- links a GitHub;
- link a LinkedIn;
- mailto;
- responsive movil;
- selector ES/EN.

## Orden inmediato de trabajo

1. Revisar visualmente Home y dashboards por rol.
2. Ajustar copy fino si algo se siente generico.
3. Crear CVs por rol en markdown.
4. Convertir CVs a PDF.
5. Linkear PDFs correctos.
6. Mejorar paginas de proyectos prioritarios.
7. Crear sistema privado diario.
8. Publicar en GitHub Pages.

## Que necesito de ti

Para avanzar sin inventar:

1. Confirmar si puedo usar solo email publico o tambien telefono en CVs.
2. Confirmar si quieres CVs mas sobrios o mas visuales.
3. Pasarme material publico de `calidad-energia` si quieres mejorar esa pagina con mas detalle.
4. Decirme si prefieres que primero terminemos Data Scientist o que avancemos los tres dashboards en paralelo.

## Decision recomendada

Primero cerrar Data Scientist Jr porque es la ruta central.

Despues adaptar hacia:

- Data Analyst Jr para vacantes mas accesibles de entrada;
- Machine Learning Jr para roles mas tecnicos y proyectos de mayor diferenciacion.

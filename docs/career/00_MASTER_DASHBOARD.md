# Master Dashboard del Portafolio

Este archivo define la estructura de trabajo antes de seguir creando HTML. La idea es que LinkedIn apunte a una pagina principal publica y esa pagina redirija a tres rutas profesionales claras.

## Objetivo

Construir un sistema de portafolio publico, seguro y bilingue para tres roles:

1. Data Analyst Jr
2. Data Scientist Jr
3. Machine Learning Jr

Cada ruta debe tener:

- roadmap de habilidades y proyectos;
- plan de busqueda de empleo;
- CV enfocado al rol, en espanol e ingles;
- dashboard visual con proyectos relevantes;
- lista de proyectos actuales y proyectos faltantes;
- criterio de seguridad para publicar solo material curado.

## Arquitectura publica propuesta

```text
index.html
  -> dashboard principal publico
  -> selector de idioma ES/EN
  -> rutas por rol

dashboards/data-analyst/
dashboards/data-scientist/
dashboards/machine-learning/

projects/
  -> paginas individuales curadas
assets/pdf/
  -> CVs publicos finales por rol
docs/career/
  -> markdowns de planeacion editables
```

## Mapa de documentos actuales

- `docs/career/README.md`: indice de trabajo.
- `docs/career/data-analyst/`: CV, job search y dashboard del rol.
- `docs/career/data-scientist/`: CV, job search y dashboard del rol.
- `docs/career/machine-learning/`: CV, job search y dashboard del rol.
- `docs/career/06_LINKEDIN_MASTER_FLOW.md`: ruta desde LinkedIn.
- `docs/career/05_PRIVATE_DAILY_SYSTEM.md`: panel privado diario, no publico.

## Entrada recomendada desde LinkedIn

LinkedIn debe apuntar al dashboard principal:

```text
https://JuanPa7799.github.io/juanpablo-data-portfolio-/
```

Ese dashboard debe dejar claro en menos de 10 segundos:

- quien eres;
- que roles buscas;
- que proyectos prueban tu capacidad;
- como contactarte;
- como cambiar idioma.

## Prioridad de trabajo

1. Cerrar markdowns por rol.
2. Revisar seguridad de proyectos y archivos.
3. Definir contenido bilingue de CVs.
4. Disenar dashboards por rol en markdown.
5. Convertir markdowns aprobados a HTML.
6. Linkear proyectos y CVs.
7. Activar GitHub Pages cuando todo este revisado.

## Estado actual

- Home publica inicial: creada.
- Dashboard general de proyectos: creado.
- Paginas individuales de proyectos: creadas con contenido curado.
- Falta: dashboards por rol, idioma ES/EN, CVs por rol, roadmap visible y sistema privado de seguimiento diario.

## Regla de seguridad

No se publica ninguna carpeta completa de trabajo. Solo entra al repo publico:

- resumen curado;
- metricas verificadas;
- imagenes o graficas revisadas;
- notebooks limpios si no tienen rutas locales ni salidas sensibles;
- datos de muestra anonimos;
- CVs finales sin errores de formato.

No entra:

- `EXAMPLES/`;
- archivos `.pem`;
- credenciales JSON;
- datasets completos pesados;
- notebooks crudos;
- rutas locales;
- material con feedback privado sin curar.

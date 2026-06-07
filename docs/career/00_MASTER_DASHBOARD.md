# Master Dashboard del Portafolio

Este archivo resume la estructura actual del portafolio publico y la documentacion de carrera asociada.

## Objetivo

Mantener un portafolio publico, seguro y bilingue para tres rutas profesionales:

1. Data Analyst Jr.
2. Data Scientist Jr.
3. Machine Learning Jr.

Cada ruta tiene dashboard visual, CV web, PDF descargable, proyectos relevantes y documentos de busqueda laboral.

## Arquitectura publica

```text
index.html
dashboards/data-analyst/
dashboards/data-scientist/
dashboards/machine-learning/
projects/
cv/
assets/pdf/
docs/career/
```

## Entrada recomendada desde LinkedIn

```text
https://JuanPa7799.github.io/juanpablo-data-portfolio-/
```

Ese link permite elegir ruta por rol, revisar proyectos, descargar CVs y contactar por GitHub, LinkedIn, Upwork o email.

## Documentos actuales

- `docs/career/README.md`: indice de trabajo.
- `docs/career/data-analyst/`: CV, job search y dashboard del rol.
- `docs/career/data-scientist/`: CV, job search y dashboard del rol.
- `docs/career/machine-learning/`: CV, job search y dashboard del rol.
- `docs/career/06_LINKEDIN_MASTER_FLOW.md`: ruta desde LinkedIn.
- `docs/career/07_PUBLIC_SITE_SPEC.md`: especificacion de la experiencia web.
- `docs/career/08_PROJECTS_BY_ROLE.md`: asignacion de proyectos por dashboard.
- `docs/career/09_APPROVAL_BEFORE_HTML.md`: checklist de publicacion.
- `docs/career/05_DAILY_SYSTEM.md`: panel diario interno, no publicado como pagina del portafolio.

## Estado actual

- Home publica: creada.
- Dashboards por rol: creados.
- Paginas individuales de proyectos: creadas con contenido curado.
- Selector ES/EN: funcional en Home, dashboards, proyectos y CVs.
- CVs por rol ES/EN: creados en Markdown, web y PDF.
- Imagenes de proyectos: curadas y locales.
- Pendiente operativo: activar GitHub Pages desde `main` y `/(root)`.

## Regla de seguridad

Solo entra al repo publico material curado:

- resumenes profesionales;
- metricas verificadas;
- imagenes o graficas revisadas;
- paginas de proyecto limpias;
- CVs finales sin telefono;
- documentos de planeacion sin datos sensibles.

No entra:

- `EXAMPLES/`;
- `private/`;
- archivos `.pem`;
- `.env`;
- credenciales JSON;
- datasets completos;
- notebooks crudos;
- rutas locales;
- feedback privado sin curar.

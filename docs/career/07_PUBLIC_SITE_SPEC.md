# Especificacion del sitio publico

Este documento define la version web que se construira despues de aprobar los markdowns por rol. El sitio debe verse como un portafolio profesional, no como una lista de tareas ni como texto generado automaticamente.

## Objetivo del sitio

Crear una entrada publica unica para reclutadores, contactos de LinkedIn y equipos tecnicos.

La pagina principal debe responder rapido:

- quien es Juan Pablo Garcia Chavez;
- que roles busca;
- que evidencia tecnica tiene;
- que proyectos conviene revisar segun el rol;
- como descargar el CV correcto;
- como cambiar entre espanol e ingles.

## URL principal

```text
https://JuanPa7799.github.io/juanpablo-data-portfolio-/
```

## Arquitectura publica propuesta

```text
index.html
styles.css
script.js

dashboards/
  data-analyst/
    index.html
  data-scientist/
    index.html
  machine-learning/
    index.html

projects/
  [proyectos actuales]

assets/
  pdf/
    cv-data-analyst-es.pdf
    cv-data-analyst-en.pdf
    cv-data-scientist-es.pdf
    cv-data-scientist-en.pdf
    cv-machine-learning-es.pdf
    cv-machine-learning-en.pdf
```

## Navegacion principal

La navegacion debe tener:

- Inicio
- Data Analyst
- Data Scientist
- Machine Learning
- Proyectos
- CV
- Contacto
- Boton visible `ES / EN`

## Pantalla principal

### Hero

Mensaje base:

> Juan Pablo Garcia Chavez, Data Scientist Jr con formacion en Ingenieria Mecatronica y Maestria en Ingenieria Electronica. Construyo soluciones de datos, machine learning y analitica aplicada a negocio e ingenieria.

Debe incluir tres botones grandes:

- Ver ruta Data Analyst
- Ver ruta Data Scientist
- Ver ruta Machine Learning

Y acciones secundarias:

- GitHub
- LinkedIn
- Email
- Descargar CV recomendado

## Panel tipo dashboard

Debe incluir:

- 3 tarjetas de ruta profesional.
- KPIs de portafolio:
  - 11 proyectos curados;
  - 3 rutas profesionales;
  - mejores metricas visibles;
  - stack principal.
- Ranking de proyectos destacados.
- Mini-graficas CSS/JS.
- Estado de CVs ES/EN.

## Selector de idioma

El cambio de idioma debe ser visible desde la primera pantalla.

Regla de implementacion inicial:

- usar textos ES/EN definidos en JS;
- persistir idioma con `localStorage`;
- no duplicar paginas todavia si se puede resolver con data attributes;
- para CVs, si existen PDFs separados, mostrar el PDF correspondiente al idioma activo.

## Estilo visual

Direccion visual:

- azul profundo como fondo;
- azul rey como color de accion;
- acento morado solo para resaltar;
- cyan claro para metricas;
- tarjetas tipo dashboard con contraste alto;
- tipografia limpia;
- nada de bloques enormes de texto;
- cada seccion debe parecer util para decidir.

## Tono de copy

Debe sonar humano, directo y profesional:

- usar verbos concretos: construi, analice, compare, valide, optimice;
- evitar frases infladas como "revolucionar", "apasionado por transformar el mundo";
- mostrar metricas cuando existan;
- reconocer limites cuando aplique;
- escribir como candidato junior fuerte, no como senior inventado.

## Paginas por rol

Cada dashboard por rol debe tener:

- hero enfocado;
- KPIs del rol;
- proyectos relevantes;
- stack priorizado;
- plan de crecimiento;
- links a CV ES/EN;
- links a proyectos;
- link de regreso al home.

## No publicar

- panel privado diario;
- tracking de vacantes;
- documentos de feedback crudos;
- carpetas completas de bootcamp;
- llaves, credenciales o datasets pesados.

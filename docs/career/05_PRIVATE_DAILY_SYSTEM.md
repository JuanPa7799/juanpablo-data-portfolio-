# Sistema privado diario de carrera

Este documento define el tablero privado que NO debe publicarse en GitHub Pages. Su objetivo es funcionar como centro de mando personal para decidir que estudiar, que proyecto mejorar, a que vacantes aplicar y que evidencia actualizar.

## Principio

El portafolio publico muestra resultados curados. El sistema privado organiza el trabajo diario, feedback, vacantes, CVs, versiones y pendientes.

Ubicacion recomendada:

- `private/daily/README.md`
- `private/daily/job-tracker.md`
- `private/daily/cv-versions.md`
- `private/daily/project-backlog.md`
- `private/daily/weekly-review.md`

La carpeta `private/` queda ignorada por Git para evitar publicar informacion personal, telefonos, vacantes especificas, notas privadas, contactos, links sensibles o versiones incompletas.

## Vista diaria

Cada dia abrir:

1. `job-tracker.md`: revisar vacantes activas y siguiente accion.
2. `project-backlog.md`: escoger una mejora concreta de portafolio.
3. `cv-versions.md`: verificar si la vacante requiere CV Data Analyst, Data Scientist o Machine Learning.
4. `weekly-review.md`: registrar avances, bloqueos y aprendizaje.

## Plantilla job tracker

| Fecha | Empresa | Puesto | Ruta | Link | Estado | Siguiente accion |
|---|---|---|---|---|---|---|
| 2026-05-30 | Ejemplo | Data Analyst Jr | Analyst | URL privada | Pendiente | Adaptar CV y aplicar |

Estados sugeridos:

- Pendiente
- CV adaptado
- Aplicado
- Contacto enviado
- Entrevista
- Prueba tecnica
- Rechazado
- Cerrado

## Plantilla de backlog de proyectos

| Proyecto | Ruta objetivo | Mejora | Prioridad | Estado |
|---|---|---|---|---|
| Interconnect Churn | Data Scientist | Agregar grafica de umbral y matriz de confusion curada | Alta | Pendiente |
| Taxi Forecasting | Machine Learning | Explicar ventana temporal y baseline | Media | Pendiente |
| OilyGiant | Data Analyst | Crear resumen ejecutivo con decision de negocio | Alta | Pendiente |

## Reglas de seguridad

- No guardar llaves, tokens, credenciales ni certificados.
- No copiar datasets completos del bootcamp.
- No publicar telefonos ni notas personales sin revision.
- No mezclar `private/` con `docs/` ni con paginas publicas.
- Antes de publicar, ejecutar busqueda de rutas locales y secretos en todo lo que no este ignorado.

## Criterio de exito

El panel privado debe responder en menos de cinco minutos:

- Que ruta estoy priorizando hoy.
- A que vacantes voy a aplicar.
- Que CV corresponde.
- Que evidencia publica debo mejorar.
- Que esta listo para publicar y que sigue siendo privado.

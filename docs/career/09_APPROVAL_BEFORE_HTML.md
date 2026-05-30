# Checklist de aprobacion antes de HTML

Este checklist evita construir paginas bonitas sobre contenido que todavia no esta aprobado.

## Contenido

- [ ] Aprobar headline principal.
- [ ] Aprobar resumen profesional en espanol.
- [ ] Aprobar resumen profesional en ingles.
- [ ] Aprobar los tres enfoques:
  - Data Analyst Jr.
  - Data Scientist Jr.
  - Machine Learning Jr.
- [ ] Aprobar proyectos por rol.
- [ ] Aprobar metricas publicas.
- [ ] Confirmar si se publican notebooks limpios o solo paginas curadas.
- [ ] Confirmar si se publican CVs con email solamente o tambien telefono.

## Visual

- [ ] Aprobar paleta azul profundo, azul rey, morado y cyan.
- [ ] Aprobar estilo dashboard.
- [ ] Aprobar botones de idioma ES/EN.
- [ ] Aprobar navegacion principal.
- [ ] Aprobar que LinkedIn apunte al home principal.

## CVs

- [ ] CV Data Analyst ES.
- [ ] CV Data Analyst EN.
- [ ] CV Data Scientist ES.
- [ ] CV Data Scientist EN.
- [ ] CV Machine Learning ES.
- [ ] CV Machine Learning EN.
- [ ] Corregir caracteres raros.
- [ ] Quitar bullets vacios.
- [ ] Quitar tecnologias duplicadas.
- [ ] Mover TripleTen a Educacion/Certificaciones.
- [ ] Agregar links directos a portafolio/proyectos.

## Seguridad

- [ ] `EXAMPLES/` ignorado.
- [ ] `private/` ignorado.
- [ ] Sin `.pem`.
- [ ] Sin `.env`.
- [ ] Sin JSON de credenciales.
- [ ] Sin datasets completos.
- [ ] Sin rutas locales.
- [ ] Sin notebooks crudos.
- [ ] Sin documentos privados de feedback sin curar.

## Comandos de revision

```powershell
git status --short
git ls-files | Select-String -Pattern '\.pem$|\.env$|\.csv$|\.ipynb$|EXAMPLES|private'
rg -n "C:\\Users|C:/Users|TOKEN|API_KEY|password|contrase|secret|private_key|OpenC1|gcloud" --glob '!EXAMPLES/**' .
```

## Salida esperada

Cuando este checklist este aprobado, se puede pasar a:

1. crear `dashboards/data-analyst/index.html` - primera version creada;
2. crear `dashboards/data-scientist/index.html` - primera version creada;
3. crear `dashboards/machine-learning/index.html` - primera version creada;
4. implementar selector ES/EN - primera version creada en dashboards por rol;
5. enlazar CVs finales - pendiente;
6. probar localmente - pendiente de revision visual;
7. publicar en GitHub Pages - pendiente.

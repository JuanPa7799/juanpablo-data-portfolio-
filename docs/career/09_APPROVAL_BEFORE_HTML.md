# Checklist de publicacion

Este checklist se usa antes de activar o actualizar GitHub Pages.

## Contenido publico

- [x] Home principal creada.
- [x] Tres dashboards por rol creados.
- [x] Proyectos por rol definidos.
- [x] Metricas publicas verificadas.
- [x] Foto de perfil agregada.
- [x] Contacto publico: GitHub, LinkedIn, Upwork y email.
- [x] Sin telefono publico.

## CVs

- [x] CV Data Analyst ES.
- [x] CV Data Analyst EN.
- [x] CV Data Scientist ES.
- [x] CV Data Scientist EN.
- [x] CV Machine Learning ES.
- [x] CV Machine Learning EN.
- [x] Paginas web de CV por rol e idioma.
- [x] PDFs descargables por rol e idioma.
- [x] Proyectos redactados con contexto, tecnologias, resultado medible e impacto.

## Seguridad

- [x] `EXAMPLES/` ignorado.
- [x] `private/` ignorado.
- [x] Sin `.pem`.
- [x] Sin `.env`.
- [x] Sin JSON de credenciales.
- [x] Sin datasets completos.
- [x] Sin rutas locales.
- [x] Sin notebooks crudos.
- [x] Sin documentos privados de feedback sin curar.

## Comandos de revision

```powershell
git status --short --branch
node --check script.js
node --check role-dashboard.js
node --check project-detail.js
node --check cv/cv-page.js
git diff --check
git ls-files | Select-String -Pattern '\.pem$|\.env$|\.csv$|\.ipynb$|EXAMPLES|private'
rg -n "C:\\Users|C:/Users|TOKEN|API_KEY|password|contrase|secret|private_key|OpenC1|gcloud" --glob '!EXAMPLES/**' .
```

## Publicacion GitHub Pages

1. Abrir `https://github.com/JuanPa7799/juanpablo-data-portfolio-`.
2. Entrar a `Settings`.
3. Entrar a `Pages`.
4. Elegir `Deploy from a branch`.
5. Seleccionar branch `main`.
6. Seleccionar folder `/(root)`.
7. Guardar y esperar el build.
8. Revisar `https://JuanPa7799.github.io/juanpablo-data-portfolio-/`.

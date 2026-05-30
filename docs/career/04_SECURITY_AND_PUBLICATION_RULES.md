# Reglas de Seguridad para Publicar el Portafolio

Este archivo define que entra y que no entra al repositorio publico.

## Nunca publicar

- `EXAMPLES/`
- archivos `.pem`
- JSON de credenciales o Google Cloud
- `.env`
- tokens, API keys o passwords
- datasets completos privados o pesados
- notebooks crudos con rutas locales
- salidas de notebooks con informacion privada
- documentos de feedback sin curar
- CVs con errores de formato o informacion que no quieras hacer publica

## Publicar solo si esta curado

- HTML estatico del portafolio.
- Markdown de planeacion sin datos sensibles.
- PDFs finales aprobados.
- Imagenes o capturas revisadas.
- Notebooks limpios y renombrados profesionalmente.
- Datos de muestra anonimos.
- READMEs con problema, enfoque, resultados y limitaciones.

## Checklist antes de cada commit publico

```powershell
git status --short
git ls-files | Select-String -Pattern '\.pem$|\.env$|\.csv$|\.ipynb$'
rg -n "C:\\Users|C:/Users|TOKEN|API_KEY|password|contrase|secret|private_key" .
```

Si aparece algo sensible, no hacer commit.

## Politica para proyectos del bootcamp

Los proyectos del bootcamp se muestran como casos curados:

- resumen ejecutivo;
- metricas verificadas;
- metodologia;
- aprendizajes;
- proximos pasos;
- enlace a repo/notebook solo cuando este limpio.

No se suben carpetas completas del bootcamp al repo publico.

## Politica para CVs

Se crearan CVs separados:

- Data Analyst ES/EN;
- Data Scientist ES/EN;
- Machine Learning ES/EN.

Cada CV debe:

- estar alineado al rol;
- incluir links publicos;
- corregir caracteres raros;
- evitar duplicados;
- no listar TripleTen como experiencia laboral;
- tener version final revisada antes de PDF.

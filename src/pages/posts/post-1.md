---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Análisis en Tiempo Real del Suministro Eléctrico de Chile"
pubDate: 2022-07-01
description: "Un tutorial de cómo extraer datos con playwright, procesarlos con pandas y visualizar en Powerbi."
author: "Simon Gomez"
image:
  url: "https://docs.astro.build/assets/rose.webp"
  alt: "The Astro logo on a dark background with a pink glow."
tags: ["Powerbi", "Python", "Web Scraping"]
---

## Introducción

Hace poco descubrí la página de la Superintendecia de Electricidad y Combustibles (SEC). Me llamó la atención en particular su sección de métricas e información de los cortes de luz a nivel nacional, debido a que noté que hay un gran margen de mejora en su accesibilidad y visualización de los datos para el usuario.

## ¿Qué haremos?

1. **Preparar nuestro entorno**: primero, instalaremos las dependencias necesarias para el proyecto.

2. **Extracción de los datos**: aprenderemos a realizar web scraping con Playwright.

3. **Transformación de los datos**: necesitaremos limpiar y procesar los datos extraídos con Pandas.

4. **Visualización de los datos**: finalmente, visualizaremos los datos en Powerbi.

## Entorno de Desarrollo

Para este proyecto, necesitaremos instalar las siguientes dependencias: Playwright, Pandas y Powerbi.

Les recomiendo crear un entorno virtual para instalar las dependencias. Para ello, decidan un directorio donde quieran crear el entorno virtual y ejecuten el siguiente comando en la terminal:

```python

        python -m venv "nombre-del-entorno"-env


```

Una vez creado el entorno virtual, actívenlo con el siguiente comando:

```bash

        source "nombre-del-entorno"-env/bin/activate


```

```python

        print("Hola Mundo")

```

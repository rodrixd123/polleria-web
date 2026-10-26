# 🍗 Pollería El Sabor — Landing Web Oficial

Sitio web profesional, de alto rendimiento y completamente *responsive* diseñado para **Pollería El Sabor** (ubicada en Lurín, Lima). Desarrollado con **Astro** y **Tailwind CSS**, enfocado en la conversión directa para pedidos de recojo en tienda (*takeaway*) mediante integración continua con **WhatsApp**.

---

## 🚀 Características Principales

- **Carga Ultrarrápida:** Construido sobre Astro para ofrecer tiempos de carga inmediatos y excelente SEO local.
- **Diseño Responsive & Warm Dark Mode:** Interfaz adaptada a dispositivos móviles con una paleta de colores cálida y profesional inspirada en el concepto de brasero peruano.
- **Carta Virtual Dinámica:** Menú organizado por categorías reales de pollería (Combos Familiares, Mostritos, Platos Personales y Guarniciones/Bebidas).
- **Integración con WhatsApp:** Call-To-Action fijos y flotantes optimizados para enviar pedidos directos al chat del negocio con mensajes preconfigurados.
- **Geolocalización:** Integración directa con Google Maps para ubicar fácilmente el local en Lurín y revisar horarios de atención.

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** [Astro](https://astro.build/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Tipografías:** Google Fonts (`Outfit` & `Plus Jakarta Sans`)
- **Lenguaje:** TypeScript / JavaScript

---

## 💻 Desarrollo Local

Para ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/rodrixd123/polleria-web.git](https://github.com/rodrixd123/polleria-web.git)
   cd polleria-web
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:4321](http://localhost:4321) en tu navegador para ver el resultado.

---

## 📁 Estructura del Proyecto

```text
/
├── public/
│   └── images/          # Fotografías de platos y recursos estáticos
├── src/
│   ├── data/
│   │   └── menu.ts      # Estructura de datos de la carta y WhatsApp
│   ├── layouts/
│   │   └── Layout.astro # Estructura HTML base y tipografías
│   └── pages/
│       └── index.astro  # Landing page principal
├── package.json
└── astro.config.mjs
```

---

## ⚙️ Configuración para Producción

Para personalizar los datos antes del despliegue final:
- **Número de WhatsApp:** Modificar la variable `phoneWhatsApp` en `src/data/menu.ts`.
- **Platos y Precios:** Actualizar el arreglo `menuData` en `src/data/menu.ts`.
- **Imágenes:** Reemplazar o añadir los archivos dentro de la carpeta `public/images/`.

Link Pagina: https://polleria-web.vercel.app/#carta
---

© Pollería El Sabor — Todos los derechos reservados.

# Portfolio Personal

Este es mi portafolio personal, diseñado para ser rápido, accesible y fácil de mantener. Está construido utilizando **Astro** como framework principal y **Tailwind CSS** para los estilos.

## 🚀 Tecnologías

- **[Astro](https://astro.build/)**: Framework web enfocado en el contenido y el rendimiento.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS de utilidad primero para un diseño rápido y responsivo.
- **[Lucide Astro](https://lucide.dev/)**: Colección de iconos hermosos y consistentes.

## ✨ Características Principales

- **🌐 Internacionalización (i18n)**: Soporte completo para Español (`/es`) e Inglés (`/en`), con detección y enrutamiento configurado.
- **gama Modo Oscuro/Claro**: Tema dinámico que respeta la preferencia del sistema y permite el cambio manual por el usuario.
- **📱 Diseño Responsivo**: Adaptado perfectamente a dispositivos móviles, tablets y escritorio.
- **⚡ Alto Rendimiento**: Arquitectura de "Islas" de Astro para enviar el mínimo JavaScript necesario al cliente.

## 🛠️ Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clonar el repositorio**:
   ```bash
   git clone <tu-repositorio-url>
   cd portfolio
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:4321`.

## 📂 Estructura del Proyecto

```text
src/
├── layouts/        # Plantillas base (Layout principal)
├── locales/        # Archivos de traducción (JSON)
├── pages/          # Rutas y páginas del sitio
│   ├── es/         # Página de inicio y rutas en Español
│   ├── en/         # Página de inicio y rutas en Inglés
│   └── index.astro # Lógica de redirección o landing
├── styles/         # Estilos globales CSS
└── utils/          # Funciones de utilidad (ej. lógica i18n)
```

## 🧞 Comandos Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia un servidor de desarrollo local con recarga en caliente. |
| `npm run build` | Compila el sitio para producción en la carpeta `dist/`. |
| `npm run preview` | Sirve la versión compilada localmente para probar antes de desplegar. |

## 📄 Licencia

Este proyecto es de uso personal.
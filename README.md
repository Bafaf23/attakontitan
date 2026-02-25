# Attack on Titan ⚔️ - Character Wiki

**Attackontitan** es una plataforma interactiva diseñada para explorar el vasto universo de **Attack on Titan (Shingeki no Kyojin)**. Utilizando la [Attack on Titan API](https://api.attackontitanapi.com), esta aplicación permite a los usuarios consultar detalles profundos sobre personajes, sus linajes familiares, especies y roles dentro de la historia.

## 🚀 Características Principales

- **Exploración de Personajes**: Listado dinámico con filtros por especie y estado.
- **Perfiles Detallados**: Información completa incluyendo ocupación, grupos, roles y alias.
- **Sistema de Linajes**: Visualización inteligente de familiares que detecta automáticamente si un pariente tiene su propio perfil para navegar hacia él.
- **Interfaz Adaptativa**: Soporte completo para **Modo Oscuro** y **Modo Claro** mediante un sistema de temas personalizado.
- **Menú Full-Screen**: Navegación inmersiva para dispositivos móviles y escritorio.
- **Diseño Moderno**: Construido con un enfoque en la legibilidad y la estética inspirada en la serie.

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconografía**: [FontAwesome](https://fontawesome.com/)
- **Estado**: React Hooks (`useState`, `useEffect`, `useRef`)
- **API**: [Attack on Titan API](https://api.attackontitanapi.com)

## 📦 Instalación y Configuración

Sigue estos pasos para ejecutar **Attackontitan** localmente:

1.  **Clona el repositorio**:

    ```bash
    git clone [https://github.com/bafaf23/attakontitan.git](https://github.com/bafaf23/attakontitan.git)
    cd sigace
    ```

2.  **Instala las dependencias**:

    ```bash
    npm install
    ```

3.  **Configura el servidor de desarrollo**:

    ```bash
    npm run dev
    ```

4.  **Abre el navegador**:
    Visita `http://localhost:3000` para ver la aplicación en acción.

## 📁 Estructura del Proyecto

```text
src/
├── app/                # Rutas y páginas (Next.js App Router)
├── components/         # Componentes reutilizables
│   ├── atoms/          # Componentes básicos (Iconos, FamilyMember)
│
```

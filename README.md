# Muevete - Glute Program

🍑 **Aplicación web para gestión de ejercicios de glúteos con React + Vite + Supabase**

Una aplicación moderna y responsive para crear, gestionar y organizar rutinas de ejercicios enfocadas en el entrenamiento de glúteos.

## ✨ Características

- **CRUD Completo**: Crear, leer, actualizar y eliminar ejercicios
- **Interfaz Responsive**: Optimizada para desktop, tablet y móvil
- **Base de Datos en Tiempo Real**: Integración con Supabase
- **Diseño Moderno**: UI/UX intuitiva con cards expandibles
- **Layout Adaptativo**: Formulario (40%) y lista (60%) en desktop, layout vertical en móvil

## 🏗️ Tecnologías

- **Frontend**: React 18 + Vite
- **Base de Datos**: Supabase
- **Estilos**: CSS3 con Grid y Flexbox
- **Responsive**: Mobile-first design

## 📋 Esquema de Base de Datos

Tabla `ejercicios`:
```sql
- id (int, primary key, auto-increment)
- dia (text) - Día de la semana
- semana (text) - Semana del programa
- nombre (text) - Nombre del ejercicio
- series (int) - Número de series
- repeticiones (text) - Repeticiones por serie
- peso (text) - Peso utilizado
- descanso (text) - Tiempo de descanso
- tiempo_tempo (text) - Tempo de ejecución
- url_imagen (text) - URL de imagen del ejercicio
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 16+
- Cuenta en Supabase

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd muevete
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crea un archivo `.env` en la raíz del proyecto:
```env
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

4. **Crear tabla en Supabase**
Ejecuta este SQL en tu proyecto de Supabase:
```sql
CREATE TABLE ejercicios (
  id SERIAL PRIMARY KEY,
  dia TEXT,
  semana TEXT,
  nombre TEXT NOT NULL,
  series INTEGER,
  repeticiones TEXT,
  peso TEXT,
  descanso TEXT,
  tiempo_tempo TEXT,
  url_imagen TEXT
);
```

5. **Ejecutar la aplicación**
```bash
npm run dev
```

## 📱 Uso de la Aplicación

### Desktop
- **Formulario (40%)**: Panel izquierdo para crear/editar ejercicios
- **Lista (60%)**: Panel derecho con cards expandibles de ejercicios

### Móvil
- **Layout vertical**: Formulario arriba, lista de ejercicios debajo
- **Cards táctiles**: Optimizadas para interacción touch

### Funcionalidades

1. **Crear Ejercicio**: Completa el formulario y haz clic en "Crear Ejercicio"
2. **Ver Ejercicios**: Los ejercicios aparecen como cards expandibles
3. **Expandir Detalles**: Haz clic en cualquier card para ver todos los detalles
4. **Editar**: Botón verde en cada ejercicio para modificar
5. **Eliminar**: Botón rojo con confirmación para eliminar

## 🎨 Estructura del Proyecto

# Wanderlust Explorer — App Interactiva con React y Next.js

## Especificaciones

- Tailwind CSS.
- React 19.
- Next.js.
- Dataset será un array de 100 experiencias.
- La búsqueda y los filtros vivan en la URL para que los usuarios puedan compartir enlaces como /experiences?search=vela&category=adventure&destination=Croatia y aterrizar directamente en una vista prefiltrada.
- No usar ninguna librería externa de gestión de estado (Redux, Zustand, etc.). Todo el estado debe vivir en el useState nativo de React y pasarse mediante props o custom hooks.

### Páginas requeridas

#### Home

- Sección hero con un botón que navega a /experiences.

#### /experiences — Explorador

- Listado completo de tarjetas con barra de búsqueda.

- Al menos dos filtros (categoría y destino). 

- La búsqueda y los filtros activos deben reflejarse en la URL como query parameters y deben prerrellenar los inputs al cargar la página.

#### /experiences/[id] — Detalle

- Información completa de una experiencia, obtenida del dataset local por su ID.

#### /favorites — Favoritos

- Lista de experiencias que el usuario ha marcado como favoritas (guardadas en estado de componente por ahora).

#### /profile — Perfil

- Página estática con un perfil de usuario simulado y un resumen con el número de favoritos guardados.

### Comportamiento de la búsqueda

- La búsqueda debe filtrar las experiencias cuyo título coincida con el término buscado. 

- Usa una regex case-insensitive para esto: algo como /term/i. El filtro por categoría y destino debe funcionar de forma independiente y combinarse con la búsqueda.

### Dataset

- Genera un array de 100 objetos de experiencia. Cada objeto debe tener como mínimo: id, title, description, category (una de: Adventure, Culture, Food, Wellness, Nature), destination (ciudad + país), price, rating e imageUrl (cualquier placeholder). Guárdalo como un fichero TypeScript local.

### Favoritos

- Un icono de corazón en cada tarjeta debe activar o desactivar la experiencia en la lista de favoritos del usuario. 

- Los favoritos se guardan en un useState de nivel superior y se pasan hacia abajo como props donde sea necesario. No se requiere persistencia por ahora.
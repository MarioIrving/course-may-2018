# Polymer

Existen 4 pilares de los custom elements.

## 1. Custom elements

Restricciones:

* Las etiquetas deben tener un guión entre dos palabras.
* No se deben usar mayúsculas tampoco caracteres especiales.
* No deben ocupar palabras reservadas.

Se permite poner etiquetas como nombres.   

## 2. Shadow DOM
 * Ejemplos de atributos en html son: data , href, strict, etc.
 * Polymer utiliza propiedades que se podrían convertirse en atributos con una pequeña configuración "reflecttoAtribute"
 * Los atributos utilizan dash-case
 * Las propiedades usan camelCase por ser javascript.

## 3. html imports
 Podemos meter el html en el link import

## 4. template
 Aquí definidmos la infraestructura del componente.

```Polymer
 properties:{
   dataModel
 }
```
### data binding
La comunicación entre los componentes es en dos vías:

1.  one way data binding [[]]
2.  two way data binding {{}}

La primera vía envía la información en un solo sentido. La segunda vía lo hace bidireccionalmente esto puede ser algo inseguro, pero la comunicación de las rutas es two way binding.

Se procura que la mayoría de los desarrollos sean one way.

La comunicación la realizamos a través de eventos.

* [[prop]]
* {{prop}}

## ¿Cómo se comunuican los componentes?

#### A través de custom events.

```Polymer
this.dispatchEvents (
  new CustomEvent'' => {
    composed:true; //queremos o no cruzar el DOM. Es como un primer nivel de salida del componente
    bubbles: true; // permite ir subiendo a otros nodos del DOM. Sube del shadow DOM a la raiz del documento.
    detail:{ // Es la información que queremos subir
    }
  })
```

En Javascript tendríamos:

```Javascript
document.addEventListener('', (event)=> {
   event.detail;
   })
```
Pero si agregamos un listener lo debemos quitar.

EL shadow DOM encapsula los estilos a través de:

```Polymer
.container{
    border: ipx solid #fff;
    //lo que debemos hacer es declarar una variable como: var(--my-component-border: 1px solid $fff)
    //De este modo se puede customizar desde afuera
}   

my-component{
  --my-component -border: 2px; //aquí estoy modificando el elemento a través de la variable
}
```
Los Mixings te permiten sobreescribir lo que tenga el container a través de

```Polymer
@ apply --my-component-mixing
```

Notas:
* el documento se le llama light DOM
* el html se puede quedar abierto

### instalar Polymer  
* npm i bower -g
* npm i polymer-cli -g
* polymer init
  * después que haya instalado debes elegir qué tipo de customización necesitas:
    * polymer 2.0 template
    * starter kit, etc.
* polymer serve --open
 * sirve para borrar el navegador una vez que se cargen los recursos para que te abra la demo.

Notas:
* En Polymer se mete todo en la etiqueta template. No se configura el shadow DOM. Eso lo realiza Polymer.
* Polyfill webcomponents.js es un script que utilizan los navegadores a manera de 'plugins' para aceptar los webComponents
* Polymer Aplication
 * shop maneja progressive web app
 * starter kit maneja el tema

## Archivos Polymer

### polymer.json:
Son las reglas de servir y construir

### index.html:
No hace nada

### bower.json:
Es igual a un package de JSON.

#### Dependencies
La depedencia importante es "polymer":

#### Diferencia entre dependencies y devdependencies
* Las dependencies para se necesitan para funcionar como polymer. Tiene que estar instaladas.
* Las devDependencies se necesitan para el desarrollo.

#### resolutions
Se usa cuando tenemos un conflicto de dependencias entre dependencias y subdependencias. Si hay conflicto "resolutions" determina que versión se debe ocupar.Esto es complicado (crear componentes que sean
compatibles con versiones).

#### devDependencies  
web-component-tester carga todas las suites de innerHTML

### Demo
* index.html
Importa los polyfills en un component loader (link). Se importan los demo-snippet lo único que hace es que se vea bonito.
---
Notas:
Cells es un framework que implementa Polymer
* trapila
* combina
* separa elementos
* los combina

Las tecnologías de moda son:
1.Polymer
2.react
3.Vu

Phyton y shell para hackers
blockstop add para google
webcomponents-loader son los polyfills
---

Polymer gestiona de manera interna un host virtual mete el componente en una carpeta llamada "components" donde están todas las dependencias, esta pensado asi para que en el futuro lo utlicen otros componentes. ../../iron-demo

El nombre del componente (one-component por ejemplo) es mi directorio. Cuando se instala:
bower install [nombre componente]
Polymer es un componente estático.

### my-app.html

#### DOM_module
Tiene un atributo id el cual tiene que coincidir con el componente que hagamos.

El formato general es:

return one-component (por ejemplo)
empaqueta todo
* template
 * style
* html
* script:javascript

#### Javascript

##### get is()
Regresa un string del componente (one component)

##### get properties()
Mínimo debe tener:

```polymer
return {
  page: {
    type: String,
    value: '',
    reflectToAttribute: true,
    observer: '_pageChanged',
  },
  routeData: Object,
  subroute: Object,
  // Polymer.Element#rootPath
  rootPath: String,
};
}
```

* Se recomienda que el valor se inicialize vacio.

connectedCallback va a ser nuestro constructor. Se manda llamar cuando el documento "append"

```polymer
connectedCallback{
  super.connectedCallback();
  //muy importante para inicializar.

  this.title='';
  // this. (contexto del componente donde accedes a los métodos de polymer
  //si hacemos un cambio aquí, polymer no se entera del cambio.
  //la forma de notificar los cambios es con el metodo set();

  this.set(´title', 'hola curso');
}
```

* webcomponents.org
* (la tiendita para Anuar)

Es recomendable utilizar los componentes que genera Polymer
* paper-element
* paper
* paper-input

Una vez seleccionado el elemento nos vamos al aside, pulsamos el signo '+' seleccionamos copiamos a la terminal. Con --save se guarda en la dependencia y se guarda en la carpeta.

* link rel
 * orden importación:
  * importaciones core polymer generara espacio
  * importación Polymer
  * importación creado por mi

cuando veamos un {} en la documentación de polymer podemos sobreescribir el método. Se trata de un mixing.

* behaviour
son commportamientos para distintos elementos pro ejemplo validación
una funcionalidad reutilizable

Alfonso Rios creó un paper-dynamic-forms

***"on-" listener de eventos***

primera vez que cambie el value como está en vacio manda algo cambio

someChange.

Si queremos instalar componenetes que dedenden de otros componenetes, solo se instalan las dependencias que se necesitan.En devdependencies no se instalan. El component nunca va a estar en lightDOM.

Regularmente si queremos comunicarnos entre componentes hermanos forzozamente tenemos que tener un nodo padre. En Cells no existe esta cuestión.Para ello la comunidad lo soluciona con "redox" te crea un arbol secundario. Haces que los componentes se conecten a redox

***this.$*** es un querySelector y solamente es por ID
Notas:
tipos compoenentes
componentes "ui"
lógica (peticiones http vía (iron-ajax) )

Tarea entender como funciona iron-ajax (entrar la documentación, pruebas unitarias, demos)
y rehacer la práctica uno, la del lenguaje.

eskeleton de una aplicación Polymer

Práctica final es una aplicación que ya existe. web-mobile-specialist.firebaseapp para inscribirte es a través de github.

* trabajar offline; manejo de sesiones.
* hacer un codelabs databindig expecs migración Polymer 1 a 2

gulp para automaizar tareas
firebase
eslintrc se estipulan las reglas
jsdoc para documentar
eslint

base href=/ concatena por default

### manifest json
Es un docuemnto estándar ES5 son reglas para el navagador.
Las progressive aps son "display standalone"
La plataforma PS4 es un standalone

#### Progressive Web Apps
Intenta reemplazar una aplicación nativa que no sea {Córdoba o ionic}. Se pueden realizar tareas como trabajar offline, push notifications, y otras. El manifest Json es parte importante de la aplicación. El index también es parte importante para que funcione a través de los "metas"

#### serviceWorker
* Tiene la función de proxy (middleware o  precacheo) entre el front o post patrón de optimizaciones
* configura para cargar ciertas cosas cuando está en ral dispatchEvents
* scaffolding =  maquetación

#### PRPL pattern
para trabajar en offline puede cachear losrecursos descargados
lazyload carga por partes
manejo de rutas

Notas:
* La recomendación es que partan con la starter kit, no todos los navegadores son compatibles con serviceWorker.
* En la etiqueta noscript podemos crear una página dinámica para los usuarios que no tengan javascript.
* polymer json es esencial para que se creen las demas dependencias
* shell contiene la estructura es decir la etiquet my-app
* fragments lo que se cachea en el tel por ejemplo
* bundled todo el archivo comprimido
* unbundled tiene identación, etc

Para la práctica:
Para crear el componente:
1. En src crear un nuevo archivo html my-component
2. my-view poner el código
3. comportamiento de traduccion que hicimos ayer en clase
4. lenguajes varios por ejemplo lorem
5. creamos una carpeta data y dentro tendremos un JSon
6. my-componente cambiará el idioma
7. event al terminar el ajax se va a hacer un custom ajax
8. hacer un dropdown
9. caso del cubo de lenguaje(adicional)
 * gestures listeners con un array de idiomas global un index drag transición puede ser con flechita

10. El componente dispara una petición iron-ajax para cambiar el idioma y a través de custom elements se bindean los datos en los distintos elementos.

#### app layout
Nos permite estructurar el menu y la vista de la plataforma y contienen subcomponenetes
swipe open : narrow drawer se extiende o se repliega

#### app route
```html
<app-route
    route="{{route}}"
    pattern="[[rootPath]]:page"
    data="{{routeData}}"
    tail="{{subroute}}">
</app-route>
```
* route es diferente a application
* pattern genera una propiedad pages
* data es un object
* por cada subruta se necesita un route como tail
* las propiedades en verde son de nosotros no podemos modificar los atributos en azul

#### app location
Sólo una por app. Se dedica a ver la url. La proporciona route se necesitan los dos para funcionar

iron-pages
fallback selection que pasas si no encontré nada
role facilita la navegación

iron selector
selected y att-for selected van juntos
selected selecciona el string

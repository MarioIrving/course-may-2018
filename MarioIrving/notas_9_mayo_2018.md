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

//por ejemplo de javascript

```Javascript
document.addEventListener('', (event)=> {
   event.detail;
   })
```
Si agregamos un listener lo debemos quitar.

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

notas:
el documento se le llama light DOM
el html se puede quedar abierto

### instalar Polymer  
* npm i bower -g
* npm i polymer-cli -g
* polymer init
  * después que haya instalado debes elegir qué tipo de customización necesitas:
    * polymer 2.0 template
    * starter kit, etc.


## 3. html imports
Podemos meter el html en el link import

## 4. template
Aquí definidmos la infraestructura del componente.

En Polymer se mete todo en la etiqueta template. No se configura el shadow DOM. Eso lo realiza Polymer.
* Polyfill webcomponents.js es un script que utilizan los navegadores a manera de 'plugins' para aceptar los webComponents

polymer apliaction
shop maneja progressive web app
starter kit maeja el tema de tuas

polymer.json
reglas de servir y construir
index.html no hace nada
bower,json es igaula un package json la depedencia importante es "polymer": ...

difrencias entre devdependencies
dependencies para funcionar como polymer
dev depencies lo que necesitas para el desarrollo

por ejemplo
lo neecista para funcionar
paperinput
paperbutton

}resolutions se usa cuando tenemos un clionflictr de deoendicas entre depoendeicas y subdependeicias
si hay confilcito en resolutions determina que version se debe ocupar y esto es compliaado (crear compinentes que sean
  compatibles con versiones)

WCT web componente tester. carga todas las suites de innerHTML
carpeta demo+
importa los polufills en eb component loadres
se importan demo-snippet y luego yel de nosotros
lo único  que hace es que se vea bonito

polymer serve --open //sirve para aborr el navegador una vez que se carqhen los recursos para que te abra la demo.

Cells es un framework que implementa Polymer
* trapila
* combina
* separa elementos
* los combina

phyton, shell para hackers
blockstop add para google

webcomponents-loader son los polyfilss

polymer gestiona de manera interna se genera un host virtual mete el component en una carpeta components donde estan todas las depencias, esta poendsado asi para que en el futuro lo utlicen otros componenetes. ../../iron-demo

one-component es mi directorio
cuando los instalamdos bower install nombrecomponente
polymer es un componenye estatico

las tecnlogías de moda son:
1.Polymer
2.react
3.Vu

import permite imiortar html completos

dom_module
titne un atributo importa tne que es id tiene que coicidir con elcompoenente que hagamos
return one-component (por ejemplo)
empaqueta todo
template y
html y css
script
javascript

formato:
template
style
thml del maquetado

get is regresa un string one component

ger properties tiene que venir obligaotriamente proque lo busca polumer

el objerto minimo dos coasas
tipo de datos
y el valor
se recomentida que se incilaize vacio

return {
    title:{
      type: String
    }
}

conecetd CAllback va a ser nuestro constructor, Se manda llamr cuando el docmuemtne "append"

connectedCallback{
  super.connectedCallback(); //muy importante para inicializar.
  this. (contexto del compoenente accedes a los metodos de polymer)
  this.title=''; //hay una desventaja pulic sub no se va a enterar polymer de que el valor cambio.
  la forma de notificar los cambios con el metodo set();
    this.set(´title', 'hola curso');

}

dos html
el del componente y el del demo

get Title

webcomponents.org (la tiendita para Anuar)

recomendabnle los componenetes que genera Polymer
paper elements
  paper
    paperinput

nos vamos al aside signo de mas seleccionadmos copiadmos a la terminal
--save se guarda en la depencecia y se guarda en la carpeta


orden importación:

importanciones core polymer generara espacio

importacion Polymer
importacion creado por mi

link rel

cuando veamos un {} en la documentación podemos sobreescribir metodo es un mixin

paper input      

behaviour commportamientos para distintoselementos pro ejemplo valdiación
una funcionalidad reutilizable

paper dynamic forms alfonsoRios

"on-" listener de eventos

primera vez que cambie el value como está en vacio manda algo cambio

someChange.

si queremos instalar componenetes que dedenden de otros componenetes

solo se instalan las dependencias que se necesitan en devdependencies
en devdependencies no se instalan
el component nunca va a estar en lightDOM

si queremos comunicarse entre componentes hermanos forzoamente tenemos que tener un nodo padre
En Cells no existe esta cuestión.

la comunidad lo soluciona con redox te crea un arbol secundario. haces que los componentes se conecten a redox
Redox usario

this.$ es un querySelector ty solamente es por ID

tipos compoenentes
ui compoenentes
lógica (peticios http (iron-ajax) )

tarea entender como funciona iron-ajax (entrar a la documentación, pruebas unitarias, demos)
y rehacer la práctica uno. y la del lenguaje.

eskeleton de una aplicación Polymer

práctica final es una aplicación que ya existe. web-mobile-specialist.firebaseapp
para inscribirte sea a través de github.

* trabajar offline; manejo de sesiones.
* hacer un codelabs databindig expecs migración Polymer 1 a 2

i18n-app
inicializarle con

gulp para automaizar tareas
firebase

eslintrc se estipulan las reglas
jsdoc para documentar
eslint

base href=/ concatena por default

manifest json
docuemnto estadnar es5 son las reglas para el navagador.
display standalone porque las progressive son
la plataforma ps4 es un standalone

progressive Web Apps
intenta reemplzar una aplicación nativa que no sea {Córdoba o ionic}
trabajar offline, push notifications, el manifest JSon es parte importante de la aplicación
el index también es parte importante para que funcione a través de los metas

serviceWorker
proxy (middleware o  precacheo) entre el front o post patrón de optimizaciones
polymer serve --open
configura para cargar ciertas cosas cuando está en ral dispatchEvents
scaffolding =  maquetación

PRPL pattern
para trabajar en offline puede cachear losrecursos descargados
lazyload carga por partes
manejo de rutas

la recomendación es que partan con la starter kit
no todos los navegadores son compatiblescon serviceWorker

en la etiqueta noscript podemo crear una página dinámica para los usuarios que no tengan javascript

polymer json es esencail para que se crean las demas dependeincias

shell contiene la estructura es decir la etiquet my-app
fragments lo que se cahcea en el tel por ejemplo

bundled todo el archivo comprimido
unbunfled con identación etc

npm install

en src crear un nuevo archivo html my-component
my-view poner el código

comportamiento de traduccion que hicimos ayer en clase
lenguaje por ejemplo lorem

creamos una carpeta data y dentro tendremos un JSon
my-componente swithceo el idioma
que idioma es
event al terminar el ajax se va a hacer un custom ajax
hacer un dropdown
caso del cubo de lenguaje

gestures listeners con un array de idiomas global un index drag transición puede ser con flechita
i18n-feature llamar branch

el componente dispara una petición iron-ajax para cambiar el idioma y a través de customelements se va a bindear a los demás distintoselementos

app layout
nos permite estructurar el menu y la vista de la plataforma y contienen subcomponenetes

app route
route es diferencte a aploaction
/;pafe se genera una rpoeedad pages
propiedades en verde son de nosotros no pdemos modificar los atributos en azul

route data es un object
por cada subniegl necesita un route para sirve tail

app location
solo una por app. se dedica a ver la url la proporciona route
se necesitan los dos para funcionar

swipe open : narrow drawer se extiende o se repliega

iron pages
fallback selection que pasas si no encontré nada
role facilita la navegación

iron selector
selected y att-for selected van juntos
selected selecciona el string



requisito a las 4pm  

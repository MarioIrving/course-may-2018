# Repaso ECMA6

Una arrow function es una función lamda que es una blockscope

```javascript
const myFunction = () =>{

};

const myFunction = (boo = true) =>{

};
```
Las principales diferencias

* El scoope es diferente.
 * runtime scoope en ecma5
 * blockscope en ecma 6
* Las clases anter eran prototipos
* promesas (Promises)
 * sincronía, tiempos de ejecución
* for-in for-of
 * for of y for in están optimizados para el rendimeinto es por eso que podemos usar const
* se agregan funciones
* módulos (todavía se utiliza Babel)

<!--
```javascript
export {};
import * from 'module;
import {object} from module;
import {FileWrite as fileWrite} from 'fs';
import
``` -->
para que funciones los módules es necesario tener Babel para que transpile el código
proque los módulos todavía no son nativos

* Strict equals ( === | !== )
 * hace un type coercion (==)
 * compara el valor y el tipo de dato (===)




en runtime las lineas se ejecutan de distintas maneras. por ejemplo los callbacks

el var se hacía global
variables iguales tomaba la variable más cercana al prototipo


Crear una nueva branchde
git checkout -b Promises

git stash los cambios los mete en un pila para quitarlos git stash pop

cuando creemos una aplicación hay que utilizar referencias absolutas
dentro de los componentes referencias relativas

debuggear

sources > arhcivo > breakpoints > refresh página
Template iterator ()

Estructura de idiomas

{
  "en":[
    {"key": "title", "value": "my first page"}
  ],
  "es":[
    {"key": "titulo", "value": "mi primera pagina"}
  ]

}

un iife crea las variables encapsuladas

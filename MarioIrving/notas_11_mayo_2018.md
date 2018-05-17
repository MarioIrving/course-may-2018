Investigar y hacer la tablita en MD para bower y npm
component #^x.y.z se trae más grande de x y z

* El 40% de los casos cuando falla algo es por la versión de la dependencias

Colocar los símbolos ('^', '~') provoca que se actualizen las versiones. Esto está bien pero para un ambiende de desarrollo. Para producción se una mala práctica porque puedes ser que cambie radicalmente el componente y genera errores en la aplicación. Para congelarla es necesario quitar los símbolos. Después viene el mantenimiento para buscar que las nuevas versiones no colapsen por las versiones.

Cuando se utilizen imagenes se recomienda que se use el formato svg o png
para símbolos.

Tips
* Las dependencias van con los componentes
* El usar innerText es pesado para la aplicación tambien los addEventListener. En su lugar se debe usar "on-".

Debounce
En un minuto de ejecución no permite que se ejecuten ciertas veces las instrucciones. Se manejan en segundos no milisegundos.

Los custom elements son los que tienen los addEventListener (on-value-changef)

computed
cuando necesitamos de otra propeidad de polymer para ser visto. Se computa y lo lanza
nombre y apellido y queremos el fullmname. No se recomienda usarlo.  Si tienes caracteres vacios
va a calcular el vacio cuando se llama la variable computada.

***poner ejemplo del slack***

Observer
esto sí se ocupa. Cada vez que cambie un valor cambia el valor relacionado.

En caso de que no quiera instalar el bower, cambiar el bower registerty de aritfactories privados.

Los Object's de arreglos son más ligero que array.

Si se utiliza el local storage no lo haces desde el componente si no desde quien lo solicita

los componenetes deben ser lo más genérico posible y lo menos acoplados posible.

git fetch para sincronizar las branches
git fetch gmaciel(remote) [branch]
git checkout  gmaciel/branch

git pull gmaciel branch

cuanto se utilizan iron ajax quitarle el auto y mandar la petución
de manera manual
i18-n es un estadnar
a18y

i18n standars
ajax si no ecneutta se v a a un on-error
dom-repeat es un for de polymer

componente visual footer de tarea
ojo traer
el icono y el texto en horiznatl y en vertical en forma de columna

requisito a las 4pm

El martes 15 se deja la práctica y el viernes 18 se entrega la práctica. Se preguntará si el 23 de mayo

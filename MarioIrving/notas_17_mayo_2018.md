# Testing

comparación de un estado con un estado final
search me dice si algo se cumple.

* manual: más presente en QA y requieren de más tiempo
* automática

lo complicado es hacer los casos
hacer testing no eliminará los bugs pero los reduce en buena medida.

3 escenarios (entornos del test)
* development
* staging
* producción

## Unit Test
* pieza de código que prueba código de la aplicación.
 * hay que seguir dos guías para la arquitectura
  * alta cohesión: el código sólo debe hacer una sola cosa en específico
  * bajo acoplamiento: el código en cierta manera debe evitar estar conectado con otras cosas. es decir
    a través de la inyección de dependencias podemos pasar los parámetros

Ventajas
* Regression Test
* Refactoring
* Multiple targets

de esta manera podemos entender qué hace el software y documentar.

Test Frameworks
incorporá métodos para describir un set de test (describe) y para describir el test (it)
Controla la suite de testing, ejecuto algunos hooks (before, beforeEach, after, afterEach)

## Assertion
Expresa una condición que debe cumplirse. Normalmente son funciones cuyo nombre es: expect, should, asset

Spies
Son objetos que se encargan de vigilar
Mocks
incluye lo mismo que stubs

Assertion: chai
Spies:sinon
Stubs: sinon
Mocks: sinon
Coverage: isatanbul


yarn run test

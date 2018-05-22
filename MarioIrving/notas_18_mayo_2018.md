
Una suite de pruebas en como un chechlist

TDD la lógica de negocio deben estar en las pruebas de negocio en los unitest, los reqerimientos funcionales deben estar considerados.
aumenta el tiempo en un 80%
* la sugerencia es empezar por las funciones grandes

BDD
esta sintáxis está hecha para la gente de negocios,

```BDD
const login = () {
  validateForm();
};

it('login with API Rest', ()=>{
    assert.calledOnce(
      guestUsersFromService);
    assert.strictEqual({
      user: 'malforime',
      pass: '2187ehweifh2389'
      }, getUser());

      assert.calledOnce(login);  
});

```

TDD

```TDD
suite('suite cases', ()=>{
  test('case', ()=>{
    assert.strictEqual({}, getUSer());  
    });
  });

```

CHAI implementa TDD, BDD

Los unitest también tiene sus desventajas si estan mal escritos.
verificación
1. expect(true).toEqual(false);
 *  expect('1').toEqual(1);


 para Jest no existe 'strictEqual'

 cada vez que tengamos que probar sobre funciones externas. Tenemos que forzar o sobreescribirlas.

 * las funciones asíncronas no es trivial reescribir promesas

 Prueas QA
 * UI (alas, betas, releases)
 * subcutáneos (system test)
 * integración (API terceros, BBDD)
 * unitaros (unitest es chamba del desarrollador)

 Polymer ya implementa su propia librería

 DEntro de la carpeta test en el 'componentePruba'.html nos metemos y en
 <text-fixture> </text-fixture>

 Mocks objento de prueba que permite clonar un moudlo con funiones especiales de prueba

Objetos de prueba
* fakes
+ Spies (permite analizar la función en su llamado)
* Stubs (reemplazar el comportamiento de una función)
* Mocks (clonar el objeto de manera especial para realizar pruebas unitarias)
* Spies calls
* Fake Timers
* Fake XHR and server
* JSON-P
* Assertions (son comparaciones en BDD son expecs)
* matchers
* sandboxes
* Utils

Cuando pruebas algo lo tienes que realizar de manera aislada de agentes externos, es decir si está colgado de una api rest. Tienes que simular el comportamiento del API REST.

comando: polymer test

para cambiar algún  elemento nativo de html es con $

```Polymer
text-fixture id="CharginFile"
template
  i18n elem path="x" language-selected="es"

test('Charging json file' , () => {
    const element = fixture ('ChangedFile')
    const dataExpected = {
      title: "Mi lucha"
    }

    element.addEventListener('lang-changed' , (event) => {
        const data = event.detail;
        assert.equal('dataExpected', data);
    });

    element.$.http.generatorRequest = () => {
      element.$.http.lastResponse = (
          title: "Mi lucha"
      );
      element.RequestContent  
    }

    )}
})

```

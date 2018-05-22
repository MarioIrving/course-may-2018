Pruebas para Polymer

1. Propiedad cambia de valor
2. se dispara un evento custom

```chai
  test (....) => {
    component.addEventListener (..., (e) => {
      assert.deepEqual(e.detail, {      
        });

      })

        component.querySelector.dd.click(1);
        assert.strictEqual(item, component.IS);
});

```

|                  Mock                 |              Stub        |           spy                 |         dummies         |
| --------------------------------------|:-------------------------|-------------------------------|------------------------:|
|  reemplazan web components completos. | reemplazar funciones     | no tiene sentido usarlo,      |  this.person =  person  |
|  externos al componente, se usan      | propias siempre y cuando | si f2 la reemplazo y si       |  person lo creo para    |
|  para webcomponents no visuales       | estén nested             | f2 funciona. La f2 es success |  los casos            |                            

Los unit test se componen de tres setups (before, text, after)
* hooks: Son partes del ciclo de vida de algo.

Para probar Asincronías

```chai
test (){
  myAsinc();
  assert(prop===1);
  done();
}

test (done){
  myAsinc();
  p.addEventListener('', () => {
    assert('sal' !== 'azucar');
    done();
    })

test () {
  return promise.then(payload () => )
}

test (){
  flush({
    promise.then(payload, {}
      })
    })
}

suite( , () => {
    setup(){
      dummy ={
        success: 200
      }
    }
    test( );
  });
}

```

setup === before === beforeEach
after === teardown

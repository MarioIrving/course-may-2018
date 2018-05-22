var assert = require("chai").assert;
var expect = require("chai").expect;
var ppt = require("../app/piedra_papel_tijera");

describe ("PPT usando Chai mediante la interfaz expect: ", function() {
  describe("Revisa la función azar", function() {
    it("Revisa si los valores aleatorios que estén entre el rango de 1 y 3",  function(){
      expect(ppt.azar()).be.within(1, 3);
    });
  });

});

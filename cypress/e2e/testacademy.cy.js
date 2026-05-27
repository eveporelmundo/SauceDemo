describe('Grupo de Pruebas', function(){
it('Prueba 1',function(){
cy.visit('https://www.saucedemo.com//');
cy.contains( 'Carrito' ).click();
})
})
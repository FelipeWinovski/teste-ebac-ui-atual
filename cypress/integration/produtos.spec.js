/// <reference types="cypress"/>

describe('Funcionalidade Página de Produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        //.first()
        //.last()
        //.eq(3)
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade= 2
        cy.get('.product-block')
        .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantidade)
        cy.get('.woocommerce-message').should('contain',quantidade +' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar um produto ao carrinho - Usando um comando customizado', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'L', 'Purple', 1)
    });

});
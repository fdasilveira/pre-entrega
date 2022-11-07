/// <reference types="cypress" />

import { Register } from "../support/pages/register";
import { Login } from "../support/pages/login";
import { Home  } from "../support/pages/home";
import { ProductsPage } from "../support/pages/products";
import { ShopingCartPage } from "../support/pages/shopingCart";

describe('desafio 3', () => 
{
    let LoginData;
    let productsshop;
    const register = new Register();
    const login = new Login();
    const home = new Home();
    const productsPage = new ProductsPage();
    const shopingCartPage = new ShopingCartPage();

    
    before('Before', () => {
        cy.fixture('LoginData').then(datos => {
            LoginData = datos

        })
        cy.fixture('productsshop').then(products =>{
            productsshop = products
        })
        
    })

    it('pre-entrega', () => {

        let suma = (productsshop.productOne.Price1) + (productsshop.productTwo.Price2);
        
        cy.visit('');
        register.clickButtonLogin();
        login.writingUser(LoginData.user.username);
        login.writingPass(LoginData.user.password);
        login.clickLoginButton();
        home.clickButtonOnLineShop();
        productsPage.selectWhitePants();
        productsPage.clickOnClosemodal();
        productsPage.selectRedCap();
        productsPage.clickOnClosemodal();
        productsPage.clickButtonGoShoppingCart();
        shopingCartPage.verifyPriceWhitePants().should('have.text', "$20");
        shopingCartPage.verifyNameWhitePants().should('have.text', "White Pants");
        shopingCartPage.verifyPriceAndProductWhitePants(productsshop.productOne.Name,productsshop.productOne.Price1).should('have.text',`$${productsshop.productOne.Price1}`);
        shopingCartPage.verifyPriceRedCap().should('have.text', "$10");
        shopingCartPage.veryfyNameRedCap().should('have.text',"Red Cap");
        shopingCartPage.veryfyPriceAndProductRedCap(productsshop.productTwo.Name,productsshop.productTwo.Price2).should('have.text',`$${productsshop.productTwo.Price2}`);
        shopingCartPage.clickOnShowTotalPrice().click();
        shopingCartPage.checkAcumulatePrice(productsshop.productOne.Price1,productsshop.productTwo.Price2).should('exist');
        shopingCartPage.checkAcumulatePrice().should('have.text',suma);
    });
    
});
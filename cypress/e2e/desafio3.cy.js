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
        let Name1 = productsshop.productOne.Name
        let priceOne = productsshop.productOne.Price1
        let Name2 = productsshop.productTwo.Name
        let priceTwo = productsshop.productTwo.Price2
        
        cy.visit('');
        register.clickButtonLogin();
        login.writingUser(LoginData.user.username);
        login.writingPass(LoginData.user.password);
        login.clickLoginButton();
        home.clickButtonOnLineShop();
        productsPage.selectProduct(productsshop.productOne.Name);
        productsPage.clickOnClosemodal();
        productsPage.selectProduct(productsshop.productTwo.Name);
        productsPage.clickOnClosemodal();
        productsPage.clickButtonGoShoppingCart();
        shopingCartPage.verifyProduct(productsshop.productOne.Name).should("have.text",Name1);
        shopingCartPage.verifyPricesAndProducts(productsshop.productOne.Name,productsshop.productOne.Price1).should("have.text",`$${priceOne}`);
        shopingCartPage.verifyProduct(productsshop.productTwo.Name).should("have.text",Name2);
        shopingCartPage.verifyPricesAndProducts(productsshop.productTwo.Name,productsshop.productTwo.Price2).should("have.text",`$${priceTwo}`);
        shopingCartPage.clickOnShowTotalPrice().click();
        shopingCartPage.checkAcumulatePrice().should('have.text',suma);
    });
    
});
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/backend-practice.js';



async function loadPage() {
  try {
    await loadProductFetch();

  await new Promise((resolve) => {
      loadCart(() => {
        resolve();
      })
});

    renderOrderSummary();
    renderPaymentSummary();
  } catch (error) {
      console.log('Oops unexpected error, try again later!')
  }
};
loadPage();
/*
Promise.all([
    loadProductFetch(),
new Promise((resolve) => {
           loadCart(() => {
             resolve();
           })
})
]).then(() => {
        renderOrderSummary();
        renderPaymentSummary();
 })
*/

/*
new Promise((resolve) => {
    loadProducts(() => {
    resolve();
    });
}).then(() => {
        return new Promise((resolve) => {
           loadCart(() => {
             resolve();
           })
        }).then(() => {
        renderOrderSummary();
        renderPaymentSummary();
        })
    });
    */
/*
loadProducts(() => {
 loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
    console.log('cart is loaded')
    })
})*/

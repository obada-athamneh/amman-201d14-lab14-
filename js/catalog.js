/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);


// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  let optionEl;
  //optionEl=document.createElement('option')
  //optionEl.value='selectcard';
  //optionEl.text='please select';
 
  for (let i in Product.allProducts) {

    
    optionEl=document.createElement('option');
    //optionEl.appendChild(document.createTextNode('option'))
    //optionEl.value='1234';
    selectElement.appendChild(optionEl);
    optionEl.text= Product.allProducts[i].name;
    optionEl.value=Product.allProducts[i].name;
    //console.log(optionEl.value)



  }


}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading

    event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart

function addSelectedItemToCart() {
  const selectElement = document.getElementById('items');
  // TODO: suss out the item picked from the select list
  let selectProd= selectElement.options[selectElement.selectedIndex].text;
 // console.log(selectProd);  
   
  


  
  // TODO: get the quantity
 let q =document.getElementById('quantity').value;
 //console.log(q);


  // TODO: using those, add one item to the Cart

let cart1 =new Cart(selectProd);

Cart.prototype.addItem(selectProd,parseInt(q));
console.log(cart1);
}
// TODO: Update the cart count in the header nav with the number of items in the Cart

function updateCounter() {

 //let spanEl= document.getElementById('itemCount')
// spanEl.textContent= Cart.item.length;

}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();

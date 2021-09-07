const addItem = () => {
    const productNameField = document.getElementById('product-name');
    const productName = productNameField.value;
    const productPriceField = document.getElementById('product-price');
    const productPrice = productPriceField.value;

    //error handling
    if (!(productName && productPrice)) {
        const errorMessage = document.getElementById('error-message');
        console.log('sdsds',errorMessage)
        errorMessage.innerText = 'Please give some input';
        return;
    }

    //display all products
    displayProducts(productName, productPrice);
    addProductToCart(productName, productPrice);

    productNameField.value = '';
    productPriceField.value = '';
}

const displayProducts = (productName, productPrice) =>{
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = productName + ' ' + productPrice;
    ul.appendChild(li);
}

const getCart = () =>{
    const cart = localStorage.getItem('cart');
    console.log(cart)
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else{
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = (name, price) => {
    const cart = getCart();
    if (cart[name]) {
        // cart[name] = parseInt(price) + parseInt(price);
        cart[name] = price;
        // cart['quantity'] = cart['quantity']+1;
    }
    else{
        cart[name] = price;
        // cart['quantity'] = 1;
    }
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
    console.log(cart)
}


//localstorage theke always data ui te show korbe
const displayProductsFromLocalStorage = () => {
    const cart = getCart();
    for (const products in cart) {
        console.log(products, cart[products]);
        displayProducts(products, cart[products]);
    }
    console.log(cart)
}
displayProductsFromLocalStorage();

const addItemToCart = () => {
    document.getElementById('products').textContent= '';
    localStorage.removeItem('cart');
}
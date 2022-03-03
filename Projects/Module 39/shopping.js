const displayLocalStorage = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name)
    }
}

const addItem = () => {
    const nameField = document.getElementById('product-name')
    const name = nameField.value;
    if (!name) {
        return;
    }

    displayProduct(name)

    adProductToCart(name)
    nameField.value = ''
}
const displayProduct = name => {
    const ul = document.getElementById('products')
    const li = document.createElement('li')
    li.innerText = name;
    ul.appendChild(li)
}
const getCart = () => {
    const cart = localStorage.getItem('cart')
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    }
    else {
        cartObj = {};

    }
    return cartObj
}
const adProductToCart = (name) => {
    const cart = getCart()
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    } else {
        cart[name] = 1;
    }


    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}

const parchase = () => {
    document.getElementById('products').textContent = ''
    localStorage.removeItem('cart')
}
displayLocalStorage()
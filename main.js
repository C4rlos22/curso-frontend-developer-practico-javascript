const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const carMenu = document.querySelector('.shopping-cart');
const carIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');

const productDetail = document.querySelector('.product-detail-info');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobilepMenu);
carIcon.addEventListener('click', toggleMenuCart);


function toggleDesktopMenu() {
    closeOthersComponent(carMenu);
    closeOthersComponent(productDetail);
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu() {
    closeOthersComponent(carMenu);
    closeOthersComponent(productDetail);
    mobileMenu.classList.toggle('inactive');
}

function toggleMenuCart() {
    closeOthersComponent(mobileMenu);
    closeOthersComponent(desktopMenu);
    closeOthersComponent(productDetail);
    carMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
    closeOthersComponent(carMenu);
    closeOthersComponent(desktopMenu);
    productDetail.classList.toggle('inactive');
}


/* Open an close of components */


function closeOthersComponent(components) {
    const isComponentOpen = components.classList.contains('inactive');
    if (!isComponentOpen) {
        components.classList.add('inactive');
    }
}

function closeProductDetail() {
    productDetail.classList.add('inactive');
    
}


/* Creando cards de productos */

const productList = [];

productList.push({
    name: 'Bike',
    price: 240,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    icon: "./icons/bt_add_to_cart.svg",

});

productList.push({
    name: 'Macbook',
    price: 1399,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    icon: "./icons/bt_add_to_cart.svg",

});

productList.push({
    name: 'Laptop',
    price: 980,
    image: "https://images.pexels.com/photos/5861325/pexels-photo-5861325.jpeg?auto=compress&cs=tinysrgb&w=400",
    icon: "./icons/bt_add_to_cart.svg",

});

/*

        <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <div class="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>

*/


// Creando el HTML
for( product of productList) {
    const productCard = document.createElement ('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement ('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', toggleProductDetail);

    productCard.appendChild(productImg);
    
    const productInfo = document.createElement ('div');
    productInfo.classList.add('product-info');
    
    productCard.appendChild(productInfo);

    const productInfoDiv = document.createElement ('div');

    const productPrice = document.createElement ('p');
    productPrice.innerHTML= '$' + product.price;
    
    const productName = document.createElement ('p');
    productName.innerHTML = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);


    const productInfoFigure = document.createElement ('figure');
    const productCarIcon = document.createElement ('img');
    productCarIcon.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productCarIcon);
    cardsContainer.appendChild(productCard);

}

/*
<div class="product-detail-info-close">
    <img src="./icons/icon_close.png" alt="close">
</div>

<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">

<div class="product-info">
    <p>$35,00</p>
    <p>Bike</p>
    <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
    <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
    Add to cart
    </button>
</div>
*/

const closeIconContainer = document.createElement ('div');
closeIconContainer.classList.add('product-detail-info-close');

const closeIcon = document.createElement ('img');
closeIcon.setAttribute('src','./icons/icon_close.png');
closeIconContainer.addEventListener('click', closeProductDetail);

closeIconContainer.appendChild(closeIcon);

productDetail.appendChild(closeIconContainer);



const productDetailImg = document.createElement ('img');
productDetailImg.setAttribute('src','https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

productDetail.appendChild(productDetailImg);

const productInfo = document.createElement ('div');
productInfo.classList.add('product-info');
const productInfoPrice = document.createElement ('p');
productInfoPrice.innerHTML = '$35.00'
const productInfoName = document.createElement ('p');
productInfoName.innerHTML = 'Bike'
const productInfoDescription = document.createElement ('p');
productInfoDescription.innerHTML = 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'

productDetail.appendChild(productInfo);
productInfo.appendChild(productInfoPrice);
productInfo.appendChild(productInfoName);
productInfo.appendChild(productInfoDescription);

const primaryButton = document.createElement('button');
primaryButton.classList.add('primary-button');
primaryButton.classList.add('add-to-cart-button');

const cartAddIcon = document.createElement ('img');
cartAddIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
primaryButton.appendChild(cartAddIcon);
primaryButton.innerHTML = primaryButton.innerHTML + 'Add to cart';

productInfo.appendChild(primaryButton);




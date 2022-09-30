const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const carMenu = document.querySelector('.product-detail');
const carIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobilepMenu);
carIcon.addEventListener('click', toggleMenuCart);

function toggleDesktopMenu() {
    const isCarMenuOpen = carMenu.classList.contains('inactive');
    if (!isCarMenuOpen) {
        carMenu.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu() {
    const isCarMenuOpen = carMenu.classList.contains('inactive');
    if (!isCarMenuOpen) {
        carMenu.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleMenuCart() {
    const isMobileMenuOpen = mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuOpen) {
        mobileMenu.classList.toggle('inactive');
    }

    if (!isDesktopMenuOpen) {
        desktopMenu.classList.toggle('inactive');
    }

    carMenu.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    icon: "./icons/bt_add_to_cart.svg",

});

productList.push({
    name: 'Macbook',
    price: 120,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    icon: "./icons/bt_add_to_cart.svg",

});

productList.push({
    name: 'Laptop',
    price: 120,
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


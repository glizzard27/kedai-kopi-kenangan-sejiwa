//Toggle class active Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");
//Ketika Hamburger Menu Diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active Search-form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
}

// Toggle class active Shopping Cart
const shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingcart.classList.toggle('active');
  e.preventDefault();
}

//Klik Diluar Element
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector('#search-button');
const shoppingcartButton = document.querySelector('#shopping-cart-button');


document.addEventListener("click", function(e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!shoppingcartButton.contains(e.target) && !shoppingcart.contains(e.target)) {
    shoppingcart.classList.remove("active");
  }
});

// Modal Box

const itemdetailModal = document.querySelector('#item-detail-modal');
const itemdetailButtons = document.querySelectorAll('.item-detail-button');

itemdetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemdetailModal.style.display = 'flex';
    e.preventDefault();
  }
})

// Klik Tombol Close Modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemdetailModal.style.display = 'none';
  e.preventDefault();
}

// Klik Diluar Modal
window.onclick = (e) => {
  if (e.target === itemdetailModal) {
    itemdetailModal.style.display = 'none';
  }
}

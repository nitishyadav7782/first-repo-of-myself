// Sample products data
const products = [
    { id: 1, name: 'Laptop', price: 999, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=250&h=200&fit=crop' },
    { id: 2, name: 'Smartphone', price: 699, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=250&h=200&fit=crop' },
    { id: 3, name: 'Headphones', price: 199, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=250&h=200&fit=crop' },
    { id: 4, name: 'Tablet', price: 499, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=250&h=200&fit=crop' },
    { id: 5, name: 'Smart Watch', price: 299, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=250&h=200&fit=crop' },
    { id: 6, name: 'Keyboard', price: 89, image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=250&h=200&fit=crop' },
    { id: 7, name: 'Mouse', price: 49, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=250&h=200&fit=crop' },
    { id: 8, name: 'Monitor', price: 349, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=250&h=200&fit=crop' },
    { id: 9, name: 'Printer', price: 179, image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=250&h=200&fit=crop' },
    { id: 10, name: 'Webcam', price: 79, image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=250&h=200&fit=crop' },
    { id: 11, name: 'Speakers', price: 129, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=250&h=200&fit=crop' },
    { id: 12, name: 'External HDD', price: 159, image: 'https://images.unsplash.com/photo-1531492746076-742c0aea033a?w=250&h=200&fit=crop' }
];

let cart = [];

// DOM elements
const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartCountHeader = document.getElementById('cart-count-header');
const cartTotal = document.getElementById('cart-total');
const cartSection = document.getElementById('cart');
const checkoutBtn = document.getElementById('checkout-btn');
const accountBtn = document.getElementById('account-btn');
const moreBtn = document.getElementById('more-btn');
const cartHeaderBtn = document.getElementById('cart-header-btn');

// Display products
function displayProducts() {
    displayFilteredProducts(products);
}

// Toggle product size on click
function toggleProductSize(productDiv) {
    productDiv.classList.toggle('expanded');
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    showAddToCartFeedback(productId);
}

// Buy now
function buyNow(productId) {
    addToCart(productId);
    cartSection.style.display = 'block';
}

// Show feedback for add to cart
function showAddToCartFeedback(productId) {
    const productDiv = document.querySelector(`[onclick*="addToCart(${productId})"]`).parentElement;
    const button = productDiv.querySelector('button:first-of-type');
    
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Adding...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
    }, 1000);
}

// Update cart display
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <span>${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}</span>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(itemDiv);
    });
    
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountHeader.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotal.textContent = total.toFixed(2);
    
    cartSection.style.display = cart.length > 0 ? 'block' : 'none';
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Thank you for your purchase! Total: ₹' + cartTotal.textContent);
        cart = [];
        updateCart();
    } else {
        alert('Your cart is empty!');
    }
});

// Navigation
document.querySelector('nav a[href="#cart"]').addEventListener('click', (e) => {
    e.preventDefault();
    cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
});

document.querySelector('nav a[href="#products"]').addEventListener('click', (e) => {
    e.preventDefault();
    cartSection.style.display = 'none';
});

// Header button handlers
accountBtn.addEventListener('click', () => {
    alert('Account feature coming soon!');
});

moreBtn.addEventListener('click', () => {
    alert('More options menu coming soon!');
});

cartHeaderBtn.addEventListener('click', () => {
    cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
});

// Initialize
displayProducts();
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

searchInput.addEventListener('input', filterProducts);
searchBtn.addEventListener('click', () => {
    filterProducts();
    searchInput.focus();
});

// Filter products based on search
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.price.toString().includes(searchTerm)
    );
    displayFilteredProducts(filteredProducts);
}

// Display filtered products
function displayFilteredProducts(filteredProducts) {
    productList.innerHTML = '';
    if (filteredProducts.length === 0) {
        productList.innerHTML = '<p>No products found matching your search.</p>';
        return;
    }
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.onclick = () => toggleProductSize(productDiv);
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/150x150?text=No+Image';" onclick="toggleProductSize(this.parentElement); event.stopPropagation();">
            <div class="details">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
            </div>
            <div class="buttons">
                <button onclick="addToCart(${product.id}); event.stopPropagation();"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                <button onclick="buyNow(${product.id}); event.stopPropagation();"><i class="fas fa-bolt"></i> Buy Now</button>
            </div>
        `;
        productList.appendChild(productDiv);
    });
}

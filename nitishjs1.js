// ============================================
// MODERN ECOMMERCE - FULL FUNCTIONALITY
// ============================================

// Sample products data - EXPANDED with multiple categories
const products = [
    // Laptops & Computers
    { id: 1, name: 'Laptop', price: 999, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop' },
    { id: 2, name: 'Gaming Laptop', price: 1499, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop' },
    
    // Smartphones & Mobiles
    { id: 3, name: 'Smartphone', price: 699, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop' },
    { id: 4, name: 'Premium Mobile', price: 1299, image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=300&h=300&fit=crop' },
    { id: 5, name: 'Budget Phone', price: 349, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop' },
    
    // Audio - Headphones
    { id: 6, name: 'Wireless Headphones', price: 199, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop' },
    { id: 7, name: 'Premium Headphones', price: 399, image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop' },
    
    // Audio - Earbuds (NAYA)
    { id: 8, name: 'Wireless Earbuds', price: 129, image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop' },
    { id: 9, name: 'Premium Earbuds', price: 249, image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop' },
    { id: 10, name: 'Noise Cancelling Earbuds', price: 199, image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop' },
    
    // Audio - Speakers & Neckbands (NAYA)
    { id: 11, name: 'Bluetooth Speaker', price: 99, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop' },
    { id: 12, name: 'Neckband Earphone', price: 89, image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop' },
    { id: 13, name: 'Portable Speaker', price: 149, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop' },
    
    // Tablets
    { id: 14, name: 'Tablet', price: 499, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop' },
    { id: 15, name: 'High-End Tablet', price: 799, image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop' },
    
    // Wearables
    { id: 16, name: 'Smart Watch', price: 299, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop' },
    { id: 17, name: 'Fitness Band', price: 149, image: 'https://images.unsplash.com/photo-1575311373937-040b3e6f6393?w=300&h=300&fit=crop' },
    
    // Computer Peripherals
    { id: 18, name: 'Keyboard', price: 89, image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop' },
    { id: 19, name: 'Gaming Keyboard', price: 179, image: 'https://images.unsplash.com/photo-1587829191301-ce897d2b2d6d?w=300&h=300&fit=crop' },
    { id: 20, name: 'Mouse', price: 49, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop' },
    { id: 21, name: 'Gaming Mouse', price: 119, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop' },
    { id: 22, name: 'Monitor', price: 349, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop' },
    { id: 23, name: 'Curved Gaming Monitor', price: 599, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop' },
    
    // Printers & Scanners
    { id: 24, name: 'Printer', price: 179, image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=300&h=300&fit=crop' },
    { id: 25, name: 'Wireless Printer', price: 249, image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=300&h=300&fit=crop' },
    
    // Cameras & Accessories
    { id: 26, name: 'Webcam', price: 79, image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=300&fit=crop' },
    { id: 27, name: 'HD Webcam', price: 149, image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=300&fit=crop' },
    
    // Storage Devices
    { id: 28, name: 'External HDD', price: 159, image: 'https://images.unsplash.com/photo-1555617117-08fda84cd87c?w=300&h=300&fit=crop' },
    { id: 29, name: 'SSD External Drive', price: 229, image: 'https://images.unsplash.com/photo-1555617117-08fda84cd87c?w=300&h=300&fit=crop' },
    { id: 30, name: 'USB Flash Drive', price: 29, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop' },
    
    // Chargers & Cables
    { id: 31, name: 'Fast Charger', price: 49, image: 'https://images.unsplash.com/photo-1591290619762-62f86b42a2c5?w=300&h=300&fit=crop' },
    { id: 32, name: 'Wireless Charger', price: 79, image: 'https://images.unsplash.com/photo-1591290619762-62f86b42a2c5?w=300&h=300&fit=crop' },
    
    // Power Banks & Batteries
    { id: 33, name: 'Power Bank 10000mAh', price: 69, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop' },
    { id: 34, name: 'Power Bank 20000mAh', price: 119, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop' }
];

let cart = [];
let wishlist = [];

// DOM elements - will be initialized after DOM is loaded
let productList;
let cartItems;
let cartCountHeader;
let cartTotal;
let cartSection;
let checkoutBtn;
let accountBtn;
let cartHeaderBtn;
let loginModal;
let closeLoginBtn;
let themToggle;
let searchBtn;
let searchInput;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded - Initializing products...');
    
    // Initialize DOM elements AFTER DOM is ready
    productList = document.getElementById('product-list');
    cartItems = document.getElementById('cart-items');
    cartCountHeader = document.getElementById('cart-count-header');
    cartTotal = document.getElementById('cart-total');
    cartSection = document.getElementById('cart');
    checkoutBtn = document.getElementById('checkout-btn');
    accountBtn = document.getElementById('account-btn');
    cartHeaderBtn = document.getElementById('cart-header-btn');
    loginModal = document.getElementById('login-modal');
    closeLoginBtn = document.getElementById('close-login');
    themToggle = document.getElementById('theme-toggle');
    searchBtn = document.getElementById('search-btn');
    searchInput = document.getElementById('search-input');
    
    // Debug: Check if elements are found
    if (!productList) {
        console.error('❌ product-list element not found!');
    } else {
        console.log('✓ product-list found:', productList);
    }
    
    console.log('Total products to display:', products.length);
    displayProducts();
    setupEventListeners();
    console.log('✓ Initialization complete!');
});

// Setup event listeners
function setupEventListeners() {
    accountBtn.addEventListener('click', openLoginModal);
    closeLoginBtn?.addEventListener('click', closeLoginModal);
    cartHeaderBtn.addEventListener('click', toggleCartView);
    themToggle?.addEventListener('click', toggleTheme);
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => e.key === 'Enter' && handleSearch());
    checkoutBtn.addEventListener('click', handleCheckout);
    
    // Login button animations
    const loginPhoneBtn = document.getElementById('login-phone-btn');
    const loginGmailBtn = document.getElementById('login-gmail-btn');
    
    loginPhoneBtn?.addEventListener('mousedown', addRippleEffect);
    loginPhoneBtn?.addEventListener('click', () => {
        loginPhoneBtn.classList.add('pulse');
        setTimeout(() => loginPhoneBtn.classList.remove('pulse'), 600);
        showNotification('Phone login coming soon!');
    });
    
    loginGmailBtn?.addEventListener('mousedown', addRippleEffect);
    loginGmailBtn?.addEventListener('click', () => {
        loginGmailBtn.classList.add('pulse');
        setTimeout(() => loginGmailBtn.classList.remove('pulse'), 600);
        showNotification('Gmail login coming soon!');
    });
    
    // Close modal on outside click
    loginModal?.addEventListener('click', (e) => {
        if (e.target === loginModal) closeLoginModal();
    });
}

// ============ PRODUCT DISPLAY ============
function displayProducts(productsToDisplay = products) {
    if (!productList) {
        console.error('❌ productList is null!');
        return;
    }
    
    productList.innerHTML = '';
    console.log(`Displaying ${productsToDisplay.length} products...`);
    
    productsToDisplay.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.05}s`;
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">₹${product.price}</p>
                <div class="product-actions">
                    <button class="product-btn add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add
                    </button>
                    <button class="product-btn wishlist-btn" onclick="toggleWishlist(${product.id})" title="Add to wishlist">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        
        productList.appendChild(productCard);
        
        // Add ripple effect event listener
        const addBtn = productCard.querySelector('.add-to-cart-btn');
        addBtn.addEventListener('mousedown', addRippleEffect);
        addBtn.style.position = 'relative';
        addBtn.style.overflow = 'hidden';
    });
    
    console.log(`✓ ${productsToDisplay.length} products displayed successfully!`);
}

// ============ CART OPERATIONS ============
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    // Find the product card and button
    const productCards = document.querySelectorAll('.product-card');
    let productCard = null;
    
    for (let card of productCards) {
        const image = card.querySelector('.product-image');
        if (image && image.src === product.image) {
            productCard = card;
            break;
        }
    }
    
    // Animate button press
    if (productCard) {
        const button = productCard.querySelector('.add-to-cart-btn');
        button.classList.add('pressed');
        setTimeout(() => button.classList.remove('pressed'), 300);
        
        // Create flying animation
        createFlyToCartAnimation(productCard, product);
    }
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    showNotification(`${product.name} added to cart!`);
}

// Create fly-to-cart animation
function createFlyToCartAnimation(productCard, product) {
    const productImage = productCard.querySelector('.product-image');
    if (!productImage) return;
    
    // Get positions
    const productRect = productImage.getBoundingClientRect();
    const cartBtn = document.getElementById('cart-header-btn');
    const cartRect = cartBtn.getBoundingClientRect();
    
    // Create flying element
    const flyingItem = document.createElement('img');
    flyingItem.className = 'flying-item';
    flyingItem.src = product.image;
    
    // Position at product location
    flyingItem.style.left = productRect.left + 'px';
    flyingItem.style.top = productRect.top + 'px';
    flyingItem.style.width = productRect.width + 'px';
    flyingItem.style.height = productRect.height + 'px';
    
    document.body.appendChild(flyingItem);
    
    // Calculate distance and trigger animation
    setTimeout(() => {
        const deltaX = cartRect.left - productRect.left + (cartRect.width / 2 - productRect.width / 2);
        const deltaY = cartRect.top - productRect.top + (cartRect.height / 2 - productRect.height / 2);
        
        flyingItem.style.transition = 'none';
        flyingItem.classList.add('flying-to-cart');
        flyingItem.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.3)`;
    }, 10);
    
    // Pulse cart icon
    cartBtn.classList.add('pulse');
    setTimeout(() => cartBtn.classList.remove('pulse'), 600);
    
    // Remove flying element after animation
    setTimeout(() => {
        flyingItem.style.opacity = '0';
        setTimeout(() => flyingItem.remove(), 100);
    }, 800);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('Item removed from cart');
}

function updateCartItemQuantity(productId, quantity) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        updateCart();
    }
}

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="color: #1e293b; text-align: center; padding: 2rem;">Your cart is empty</p>';
        cartSection.style.display = 'none';
        cartCountHeader.textContent = '0';
        cartTotal.textContent = '0';
        return;
    }
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price}</div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        cartItems.appendChild(itemDiv);
    });
    
    cartCountHeader.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotal.textContent = total.toFixed(2);
}

function toggleCartView() {
    if (cart.length === 0) {
        showNotification('Add items to your cart first!');
        return;
    }
    cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
    cartSection.scrollIntoView({ behavior: 'smooth' });
}

// ============ WISHLIST ============
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    const product = products.find(p => p.id === productId);
    
    if (index === -1) {
        wishlist.push(productId);
        showNotification(`${product.name} added to wishlist!`);
    } else {
        wishlist.splice(index, 1);
        showNotification(`${product.name} removed from wishlist`);
    }
}

// ============ SEARCH ============
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
        displayProducts();
        return;
    }
    
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.price.toString().includes(query)
    );
    
    if (filtered.length === 0) {
        productList.innerHTML = '<p style="color: #1e293b; grid-column: 1/-1; text-align: center; padding: 2rem;">No products found</p>';
    } else {
        displayProducts(filtered);
    }
}

// ============ LOGIN MODAL ============
function openLoginModal() {
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
    loginModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============ CHECKOUT ============
function handleCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    showNotification(`Order placed! Total: ₹${total.toFixed(2)}`);
    cart = [];
    updateCart();
    cartSection.style.display = 'none';
}

// ============ THEME TOGGLE ============
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = themToggle.querySelector('i');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Check saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    const icon = themToggle?.querySelector('i');
    if (icon) icon.classList.replace('fa-moon', 'fa-sun');
}

// ============ NOTIFICATIONS ============
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #6366f1, #ec4899);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
        animation: slideIn 0.3s ease-out;
        z-index: 999;
        font-weight: 600;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add ripple effect
function addRippleEffect(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.animation = 'ripple 0.6s ease-out';
    
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

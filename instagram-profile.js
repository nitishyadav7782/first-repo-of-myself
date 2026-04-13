// ================================================
// INSTAGRAM PROFILE - INTERACTIVE FUNCTIONALITY
// ================================================

// Sample Posts Data
const posts = [
    { id: 1, title: 'Sunset Beach Vibes', emoji: '🌅', likes: 2543, comments: 128, date: '2 days ago' },
    { id: 2, title: 'Coffee & Code', emoji: '☕', likes: 1890, comments: 95, date: '3 days ago' },
    { id: 3, title: 'Mountain Adventure', emoji: '⛰️', likes: 3210, comments: 256, date: '5 days ago' },
    { id: 4, title: 'Night City Lights', emoji: '🌃', likes: 4120, comments: 512, date: '1 week ago' },
    { id: 5, title: 'Ocean Waves', emoji: '🌊', likes: 2890, comments: 178, date: '1 week ago' },
    { id: 6, title: 'Forest Walk', emoji: '🌲', likes: 1560, comments: 84, date: '10 days ago' },
    { id: 7, title: 'City Skyline', emoji: '🏙️', likes: 5430, comments: 623, date: '2 weeks ago' },
    { id: 8, title: 'Desert Sunset', emoji: '🏜️', likes: 3780, comments: 421, date: '2 weeks ago' },
    { id: 9, title: 'Aurora Borealis', emoji: '🌌', likes: 6200, comments: 890, date: '3 weeks ago' }
];

// Profile Data
const profileData = {
    username: 'designstudio',
    fullName: 'Design Studio',
    bio: '✨ Web Design & Inspiration\n📸 Photography | UI/UX\n🎨 Creative Content Creator',
    avatar: '👩‍🎨',
    followers: 15420,
    following: 842,
    postCount: 234
};

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', function() {
    initProfile();
    renderPosts('posts');
    setupTabNavigation();
    setupLikeButtons();
    setupModalFunctionality();
    setupFollowButton();
    setupContactForm();
});

// ============ PROFILE INITIALIZATION ============
function initProfile() {
    // Update profile stats
    document.querySelector('.stat:nth-child(1) .stat-number').textContent = profileData.postCount;
    document.querySelector('.stat:nth-child(2) .stat-number').textContent = formatNumber(profileData.followers);
    document.querySelector('.stat:nth-child(3) .stat-number').textContent = formatNumber(profileData.following);
}

// Format large numbers (1000+ -> 1K)
function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

// ============ RENDER POSTS ============
function renderPosts(tabType) {
    const postsGrid = document.querySelector('.posts-grid');
    
    // Clear existing posts
    postsGrid.innerHTML = '';
    
    // Filter posts based on tab
    let filteredPosts = posts;
    if (tabType === 'reels') {
        filteredPosts = posts.filter((_, i) => i % 2 === 0);
    } else if (tabType === 'tagged') {
        filteredPosts = posts.filter((_, i) => i % 3 === 0);
    } else if (tabType === 'saved') {
        filteredPosts = posts.filter((_, i) => i % 4 !== 0);
    }
    
    // Render posts with staggered animation
    filteredPosts.forEach((post, index) => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <div class="post-image" style="background: linear-gradient(135deg, ${getGradient(post.id)});">
                <span style="font-size: 4rem;">${post.emoji}</span>
                <div class="post-overlay">
                    <div class="overlay-stat">
                        <span>❤️</span> ${formatNumber(post.likes)}
                    </div>
                    <div class="overlay-stat">
                        <span>💬</span> ${post.comments}
                    </div>
                </div>
            </div>
            <div class="post-info">
                <div class="post-title">${post.title}</div>
                <div class="post-date">${post.date}</div>
            </div>
        `;
        
        // Add click handler to open modal
        postCard.addEventListener('click', () => openModal(post));
        
        // Add animation delay
        postCard.style.animationDelay = `${index * 0.05}s`;
        
        postsGrid.appendChild(postCard);
    });
}

// Get gradient based on post ID
function getGradient(id) {
    const gradients = [
        '#667eea, #764ba2',
        '#f093fb, #f5576c',
        '#4facfe, #00f2fe',
        '#43e97b, #38f9d7',
        '#fa709a, #fee140',
        '#30cfd0, #330867',
        '#a8edea, #fed6e3',
        '#ff9a56, #ff6a88',
        '#667eea, #764ba2'
    ];
    return gradients[id % gradients.length];
}

// ============ TAB NAVIGATION ============
function setupTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get tab type and render posts
            const tabType = this.getAttribute('data-tab');
            renderPosts(tabType);
            
            // Show ripple effect
            createRipple(this);
        });
    });
    
    // Set first tab as active
    tabButtons[0].classList.add('active');
}

// Create ripple effect on click
function createRipple(element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    
    ripple.style.width = ripple.style.height = '20px';
    ripple.style.position = 'absolute';
    ripple.style.background = 'rgba(0, 149, 246, 0.5)';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'rippleAnimation 0.6s ease-out';
    
    // Add ripple animation keyframe if not exists
    if (!document.querySelector('style[data-ripple]')) {
        const style = document.createElement('style');
        style.setAttribute('data-ripple', true);
        style.textContent = `
            @keyframes rippleAnimation {
                from {
                    transform: scale(1);
                    opacity: 1;
                }
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ============ LIKE BUTTONS ============
function setupLikeButtons() {
    // Global like animation setup (will be called on modal like button)
}

function toggleLike(element) {
    element.classList.toggle('liked');
    
    // Add animation
    const icon = element.querySelector('span');
    if (element.classList.contains('liked')) {
        icon.textContent = '❤️';
        icon.style.animation = 'likeAnimation 0.6s ease-out';
    } else {
        icon.textContent = '🤍';
        icon.style.animation = 'unlikeAnimation 0.3s ease-out';
    }
    
    // Add animation keyframes if not exists
    if (!document.querySelector('style[data-like]')) {
        const style = document.createElement('style');
        style.setAttribute('data-like', true);
        style.textContent = `
            @keyframes likeAnimation {
                0% { transform: scale(1); }
                50% { transform: scale(1.3); }
                100% { transform: scale(1); }
            }
            @keyframes unlikeAnimation {
                0% { transform: scale(1) rotate(0deg); }
                100% { transform: scale(0.8) rotate(-20deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

// ============ MODAL FUNCTIONALITY ============
function setupModalFunctionality() {
    const modal = document.getElementById('modal');
    const modalClose = document.querySelector('.modal-close');
    
    // Close on button click
    modalClose.addEventListener('click', closeModal);
    
    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openModal(post) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    
    // Create gradient background for image
    modalImage.style.background = `linear-gradient(135deg, ${getGradient(post.id)})`;
    modalImage.innerHTML = `<span style="font-size: 6rem;">${post.emoji}</span>`;
    modalImage.style.display = 'flex';
    modalImage.style.alignItems = 'center';
    modalImage.style.justifyContent = 'center';
    
    // Update post details
    document.querySelector('.post-details h3').textContent = post.title;
    document.querySelector('.post-details p').innerHTML = 
        `<strong>${profileData.username}</strong> Beautiful moment captured in time ✨`;
    document.querySelector('.post-meta').innerHTML = `
        <span>❤️ ${formatNumber(post.likes)} likes</span>
        <span>💬 ${post.comments} comments</span>
        <span>📅 ${post.date}</span>
    `;
    
    // Update like button status (random)
    const likeBtn = document.querySelector('.like-btn');
    if (Math.random() > 0.5) {
        likeBtn.classList.add('liked');
        likeBtn.querySelector('span').textContent = '❤️';
    } else {
        likeBtn.classList.remove('liked');
        likeBtn.querySelector('span').textContent = '🤍';
    }
    
    // Add like button handler
    likeBtn.addEventListener('click', function() {
        toggleLike(this);
    });
    
    // Show modal with animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============ FOLLOW BUTTON ============
function setupFollowButton() {
    const followBtn = document.querySelector('.btn-follow');
    let isFollowing = false;
    
    followBtn.addEventListener('click', function() {
        isFollowing = !isFollowing;
        
        if (isFollowing) {
            this.textContent = 'Following';
            this.style.background = 'white';
            this.style.color = '#000';
            this.style.border = '1px solid #dbdbdb';
        } else {
            this.textContent = 'Follow';
            this.style.background = '#0095f6';
            this.style.color = 'white';
            this.style.border = 'none';
        }
        
        // Add animation
        this.style.animation = 'buttonBounce 0.4s ease-out';
    });
    
    // Add button animation keyframe
    if (!document.querySelector('style[data-button]')) {
        const style = document.createElement('style');
        style.setAttribute('data-button', true);
        style.textContent = `
            @keyframes buttonBounce {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(0.95); }
            }
        `;
        document.head.appendChild(style);
    }
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('contact-message').value.trim();

        if (!name || !email) {
            showNotification('Please provide a name and email.', 'error');
            return;
        }

        showNotification(`Thanks, ${name}! Your message has been sent.`, 'success');
        form.reset();
    });
}

// ============ NOTIFICATION SYSTEM ============
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#31a24c' : '#e0245e'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        z-index: 2000;
        animation: slideInRight 0.4s ease-out;
        font-weight: 600;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Add animation keyframe
    if (!document.querySelector('style[data-notif]')) {
        const style = document.createElement('style');
        style.setAttribute('data-notif', true);
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease-out forwards';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

// ============ UTILITY FUNCTIONS ============

// Search functionality
document.querySelector('.icon-btn')?.addEventListener('click', function() {
    const searchInput = prompt('Search posts...');
    if (searchInput) {
        showNotification(`Searching for: "${searchInput}"`, 'success');
    }
});

// Settings menu
document.querySelectorAll('.btn-more').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        showNotification('Settings menu opened', 'success');
    });
});

// Message button
document.querySelector('.btn-message')?.addEventListener('click', function() {
    showNotification('Opening messages...', 'success');
});

// Theme toggle placeholder
document.addEventListener('keydown', function(e) {
    // Press 'T' to toggle theme (for demonstration)
    if (e.key.toLowerCase() === 't' && e.ctrlKey) {
        e.preventDefault();
        document.body.style.filter = 
            document.body.style.filter === 'invert(1)' ? 'invert(0)' : 'invert(1)';
        showNotification('Theme toggled', 'success');
    }
});

// Export for potential backend integration
window.profileData = profileData;
window.posts = posts;

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mainMenu = document.querySelector('.main-menu-items');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    // Toggle hamburger menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mainMenu.classList.toggle('active');
    });

    // Handle dropdowns on mobile
    dropdownItems.forEach(item => {
        const link = item.querySelector('a');
        
        if (window.innerWidth <= 768) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    item.classList.toggle('active');
                }
            });
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mainMenu.contains(e.target) && !hamburger.contains(e.target)) {
            mainMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mainMenu.classList.remove('active');
            hamburger.classList.remove('active');
            dropdownItems.forEach(item => item.classList.remove('active'));
        }
    });
});











/* 
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', event => {
        const dropdown = item.querySelector('.dropdown-menu');
        
        // Close other dropdowns
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== dropdown) {
                menu.style.display = 'none';
            }
        });

        // Toggle the current dropdown
        if (dropdown) {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }

        // Prevent link navigation if a dropdown exists
        if (dropdown) event.preventDefault();
    });
});
 */ 


//CHANGE NAvBAR BACKGROUND //


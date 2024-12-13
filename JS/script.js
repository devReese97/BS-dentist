

   // Create a button dynamically
   const navbar = document.querySelector('.navbar');
   const menuItems = document.querySelector('.main-menu-items');

   // Create hamburger button
   const hamburgerBtn = document.createElement('button');
   hamburgerBtn.classList.add('hamburger-btn');
   hamburgerBtn.innerHTML = `<span></span><span></span><span></span>`;
   navbar.querySelector('.navbar-flex').appendChild(hamburgerBtn);

   // Toggle menu visibility on click
   hamburgerBtn.addEventListener('click', () => {
       hamburgerBtn.classList.toggle('active');
       menuItems.classList.toggle('active');
   });










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



//CHANGE NAvBAR BACKGROUND //

document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(12px)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        navbar.style.backdropFilter = 'blur(8px)';
    }
});

const navItems = document.querySelectorAll('.navbars li');
const savedIndex = localStorage.getItem('activeNavIndex');

if (savedIndex !== null) {
   
    navItems[savedIndex].classList.add('active');
} else {
    navItems[0].classList.add('active'); 
}

navItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        
        navItems.forEach(nav => nav.classList.remove('active'));
        
        this.classList.add('active');
        
        localStorage.setItem('activeNavIndex', index);
    });
});




const hamburgerBtn = document.getElementById('hamburger-btn');
const socialMenu = document.getElementById('social-menu');

hamburgerBtn.addEventListener('click', () => {
    socialMenu.classList.toggle('active');
});
(() => {
  const mobileMenu = document.querySelector('[data-modal]');
  const openMenuBtn = document.querySelector('[data-modal-open]');
  const closeMenuBtn = document.querySelector('[data-modal-close]');
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle("is-hidden");

    
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  
})();

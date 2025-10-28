document.addEventListener('DOMContentLoaded', function() {
    
    // --- Gestione Hamburger Menu (Mobile) ---
    const menuToggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }

    // --- Gestione Menu a Tendina (Dropdown) ---
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            
            // ==========================================================
            // LOGICA CORRETTA (VECCHIA)
            // Blocca SEMPRE il link del menu principale se è un "toggle"
            // ==========================================================
            event.preventDefault(); 
            // ==========================================================
            
            const dropdownMenu = this.nextElementSibling;
            closeAllDropdowns(dropdownMenu);
            
            if (dropdownMenu) {
                dropdownMenu.classList.toggle('show');
            }
        });
    });

    // Funzione per chiudere tutti i dropdown tranne quello corrente
    function closeAllDropdowns(exceptThisMenu) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== exceptThisMenu) {
                menu.classList.remove('show');
            }
        });
    }

    // Chiudi i menu se l'utente clicca fuori
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            closeAllDropdowns(null);
        }
    });
});

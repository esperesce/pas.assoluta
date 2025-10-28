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
            // NUOVA LOGICA (Questa è la modifica che hai chiesto)
            // ==========================================================
            // Blocchiamo il link SOLO se l'href è un cancelletto ("#")
            // (come per "Cosa Offriamo")
            // Altrimenti, lasciamo che il link funzioni e porti 
            // alla pagina (es. index.html o chi-siamo.html).
            
            if (this.getAttribute('href') === '#') {
                event.preventDefault(); // Blocca solo i link "vuoti"
            }
            // ==========================================================
            // FINE DELLA MODIFICA
            // ==========================================================
            
            
            // Troviamo il sottomenu di QUESTO specifico link
            const dropdownMenu = this.nextElementSibling;
            
            // Chiudi tutti gli altri menu aperti
            closeAllDropdowns(dropdownMenu);
            
            // Apri o chiudi il menu corrente
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
        // Assicurati che il click non sia sul toggle stesso
        if (!event.target.matches('.dropdown-toggle')) {
            closeAllDropdowns(null);
        }
    });
});

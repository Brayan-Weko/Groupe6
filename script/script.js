function AfficheSousBranche(SousBranche) {
    divCible = document.querySelector(".Vues");
    if (divCible.className === 'Vues') {
        divCible.className = 'Vues';
        divCible.classList.add(SousBranche);
    } else {
        divCible.className = 'Vues';
        divCible.classList.add(SousBranche);
    }
}

window.addEventListener('click', function(event) {
    if (!divCible.contains(event.target)) {
        divCible.className = 'Vues';
    }
});

window.addEventListener('scroll', function() {
    divCible.className = 'Vues';
});

function AfficheSousMenu(element) {
    var sousMenu = element.nextElementSibling;
    sousMenu.style.display = 'flex';
}

function CacheSousMenu(element) {
    var sousMenu = element.nextElementSibling;
    sousMenu.style.display = 'none';
}

function AfficherMenu() {
    divCible = document.querySelector("body");
    if (divCible.classList.contains("Menu")) {
        divCible.classList.remove("Menu");
    } else {
        divCible.classList.add("Menu");
    }
}


let currentContent = 0; // Index de l'affiche actuelle

function changeInputContainer(element) {
    const liElements = document.querySelectorAll('.choice_link li');

    liElements.forEach(li => {
        if (li === element) {
            li.classList.add('Actuel');
        } else {
            li.classList.remove('Actuel');
        }
    });

    const dataContentTrigger = element.getAttribute('data-contentTrigger');

    const inputContainer = document.querySelector(`.Affiche[data-content="${dataContentTrigger}"]`);

    const allInputContainers = document.querySelectorAll('.Affiche');
    allInputContainers.forEach(container => {
        container.classList.remove('show');
    });

    inputContainer.classList.add('show');
    currentContent = parseInt(dataContentTrigger);
}

function changeContentAutomatically() {
    const affiches = document.querySelectorAll('.Affiche');
    const afficheCount = affiches.length;

    const currentAffiche = document.querySelector(`.Affiche[data-content="${currentContent}"]`);
    const nextAfficheIndex = (currentContent + 1) % afficheCount;
    const nextAffiche = document.querySelector(`.Affiche[data-content="${nextAfficheIndex}"]`);

    currentAffiche.classList.remove('show');
    nextAffiche.classList.add('show');

    const liElements = document.querySelectorAll('.choice_link li');
    liElements.forEach(li => {
        if (li.getAttribute('data-contentTrigger') === `${currentContent}`) {
            li.classList.remove('Actuel');
        } else if (li.getAttribute('data-contentTrigger') === `${nextAfficheIndex}`) {
            li.classList.add('Actuel');
        }
    });

    currentContent = nextAfficheIndex;
}

setInterval(changeContentAutomatically, 5000); // Change l'affiche toutes les 3 secondes
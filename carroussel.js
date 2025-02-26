// Sélectionner l'image principale
const imagePrincipale = document.getElementById('imagePrincipale');

// Sélectionner toutes les images du carrousel
const carrouselImages = document.querySelectorAll('.carrouselImage');

// Ajouter un événement 'click' à chaque image du carrousel
carrouselImages.forEach(image => {
    image.addEventListener('click', () => {
        // Échanger les sources des images
        const tempSrc = image.src; // Sauvegarder la source de l'image cliquée
        image.src = imagePrincipale.src; // Remplacer la source de l'image cliquée par celle de l'image principale
        imagePrincipale.src = tempSrc; // Remplacer la source de l'image principale par celle de l'image cliquée
    });
});
// Liste des fichiers audio (nom des fichiers doit correspondre à data-sound)
const sounds = {
    sound1: 'coucou.wav.wav',
    sound2:'triple-monstrewav.wav',
    sound3: 'je-suis-fatigue-les-brozer-made-with-Voicemod.mp3'
};

// Ajout d'événements aux boutons
document.querySelectorAll('button[data-sound]').forEach(button => {
    button.addEventListener('click', () => {
        const soundKey = button.getAttribute('data-sound');
        if (sounds[soundKey]) {
            const audio = new Audio(sounds[soundKey]);
            audio.play();
        }
    });
});

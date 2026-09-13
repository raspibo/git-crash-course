'use strict';

const imageZoom = document.querySelector('.image-zoom');
const zoomImage = imageZoom.querySelector('img');

function closeImageZoom() {
    imageZoom.close();
}

imageZoom.querySelector('button').addEventListener('click', closeImageZoom);
imageZoom.addEventListener('click', event => {
    if (event.target === imageZoom || event.target === zoomImage) closeImageZoom();
});
// Keep Reveal's Escape/arrow shortcuts from acting behind the modal.
imageZoom.addEventListener('keydown', event => event.stopPropagation());
imageZoom.addEventListener('close', () => zoomImage.removeAttribute('src'));

const slideWidth = () => window.innerWidth <= 600 ? 480 : 1280;

Reveal.initialize({
    width: slideWidth(),
    height: 960,
    margin: 0.04,
    slideNumber: true,
    hash: true,
    history: true,
    center: false,
    plugins: [RevealMarkdown, RevealHighlight, RevealZoom, RevealNotes]
}).then(() => {
    document.querySelectorAll('.slides img[data-action="zoom"]').forEach(image => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'image-zoom-trigger';
        button.setAttribute('aria-label', `Ingrandisci: ${image.alt || image.getAttribute('src').split('/').pop()}`);
        image.replaceWith(button);
        button.append(image);
        button.addEventListener('click', event => {
            // Preserve opening the full image in a new tab with Ctrl/Cmd-click.
            if (event.ctrlKey || event.metaKey) {
                window.open(image.dataset.original || image.src, '_blank', 'noopener');
                return;
            }
            zoomImage.src = image.dataset.original || image.src;
            zoomImage.alt = image.alt;
            imageZoom.showModal();
        });
    });
    Reveal.on('slidechanged', () => {
        // Scroll view can change the active slide while focus enters the dialog.
        if (!Reveal.isScrollView()) closeImageZoom();
    });
    window.addEventListener('resize', () => Reveal.configure({width: slideWidth()}));
    Reveal.layout();
}).catch(error => {
    console.error('Unable to initialize the presentation:', error);
    document.querySelector('.slides').textContent =
        'Impossibile caricare le slides. Avviare ./run.sh e aprire http://127.0.0.1:8000.';
});

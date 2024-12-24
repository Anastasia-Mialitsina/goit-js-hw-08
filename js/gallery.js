const images = [
  {
    preview: "./images/previewone.jpg",
    original: "./images/originalone.jpg",
    description: "Computer",
  },
  {
    preview: "./images/previewtwo.jpg",
    original: "./images/originalwtwo.jpg",
    description: "Bulb",
  },
  {
    preview: "./images/previewthree.jpg",
    original: "./images/originalthree.jpg",
    description: "Telephone",
  },
  {
    preview: "./images/previewfour.jpg",
    original: "./images/originalfour.jpg",
    description: "Living room",
  },
  {
    preview: "./images/previewfive.jpg",
    original: "./images/originalfive.jpg",
    description: "Tennis",
  },
  {
    preview: "./images/previewsix.jpg",
    original: "./images/originalsix.jpg",
    description: "Working",
  },
];


const galleryContainer = document.querySelector('gallery');
const galleryMarkup = images
    .map(({ preview, original, description }) => {
        return
        <li class="gallery-item">
            <a class="gallery-link" href="${original}">
                <img
                    class="gallery-image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>;
    })
    .join('');

galleryContainer.innerHTML = galleryMarkup;
galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();

    const targetImage = event.target;
    if (targetImage.nodeName != 'IMG') return;
    const largeImageURL = targetImage.dataset.sourse;
    const modal = dasicLighbox.create(
        <img src="${largeImageURL}" alt="${targetImage.alt}" width="800" />
    );
    modal.show();
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.visible()) {
            modal.close();
        }
    });
});

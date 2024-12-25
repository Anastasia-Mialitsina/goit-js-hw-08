const images = [
  {
    preview:
      "../js/images/prewievone.jpg",
    original:
      "../js/images/originalone.jpg",
    description: "Working",
  },
  {
    preview:
      "../js/images/previewtwo.jpg",
    original:
      "../js/images/originaltwo.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "../js/images/previewthree.jpg",
    original:
      "../js/images/originalthree.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "../js/images/previewfour.jpg",
    original:
      "../js/images/originalfour.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "../js/images/previewfive.jpg",
    original:
      "../js/images/originalfive.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "../js/images/previewsix.jpg",
    original:
      "../js/images/originalsix.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "../js/images/previewseven.jpg",
    original:
      "../js/images/originalseven.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "../js/images/previeweight.jpg",
    original:
      "../js/images/originaleight.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "../js/images/previewnine.jpg",
    original:
      "../js/images/originalnine.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = images
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
  })
  .join("");

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  const targetImage = event.target;

  if (targetImage.nodeName !== "IMG") return;

  const largeImageURL = targetImage.dataset.source;

  const modal = basicLightbox.create(`
    <img src="${largeImageURL}" alt="${targetImage.alt}" width="800" />
  `);

  modal.show();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.visible()) {
      modal.close();
    }
  });
});

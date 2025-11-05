document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.getElementById('gallery-container');
  const modalImage = document.getElementById('modalImage');

  for (let i = 1; i <= 45; i++) {
    const col = document.createElement('div');
    col.classList.add('col-6', 'col-md-4', 'col-lg-3', 'text-center');

    const img = document.createElement('img');
    img.src = `img/pintura${i}.jpg`;
    img.alt = `Pintura ${i}`;
    img.classList.add('img-fluid', 'rounded', 'shadow-sm', 'gallery-img');
    img.setAttribute('data-bs-toggle', 'modal');
    img.setAttribute('data-bs-target', '#imageModal');
    img.setAttribute('data-img', img.src);

    col.appendChild(img);
    galleryContainer.appendChild(col);
  }


  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      modalImage.src = img.getAttribute('data-img');
    });
  });
});
/* Preserve captions and an actionable source link if an image cannot load. */
document.querySelectorAll('figure img').forEach(function (img) {
  var figure = img.closest('figure');
  var media = img.closest('.image-link') || img.closest('picture') || img;
  var status = document.createElement('p');
  status.className = 'asset-status';
  status.setAttribute('role', 'status');
  status.hidden = true;
  status.appendChild(document.createTextNode('Não foi possível carregar esta imagem. '));
  var link = document.createElement('a');
  link.href = img.getAttribute('data-original') || img.src;
  link.target = '_blank';
  link.rel = 'noopener';
  link.tabIndex = 0;
  link.textContent = 'Abrir a imagem original';
  status.appendChild(link);
  figure.insertBefore(status, figure.firstChild);

  function update() {
    if (!img.complete) return;
    var failed = img.naturalWidth === 0;
    media.hidden = failed;
    status.hidden = !failed;
    figure.classList.toggle('asset-falhou', failed);
  }
  img.addEventListener('error', update);
  img.addEventListener('load', update);
  update();
});

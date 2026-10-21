// Footer year and the mobile menu.
(function () {
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.hidden = !open;
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) { setOpen(false); toggle.focus(); }
  });
  // Close the menu if the screen grows past the phone layout (e.g. rotating a tablet).
  window.matchMedia('(min-width: 761px)').addEventListener('change', function (mq) {
    if (mq.matches) setOpen(false);
  });
})();

// Gallery filters and tap-to-enlarge photo viewer.
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll('.gallery__item'));
  if (!items.length) return;

  document.querySelectorAll('.filter').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.dataset.filter;
      document.querySelectorAll('.filter').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      items.forEach(function (li) {
        li.hidden = f !== 'all' && li.dataset.category !== f;
      });
    });
  });

  var box = document.querySelector('.lightbox');
  if (!box || typeof box.showModal !== 'function') return;
  var img = box.querySelector('.lightbox__img');
  var cap = box.querySelector('.lightbox__caption');
  var prev = box.querySelector('.lightbox__prev');
  var next = box.querySelector('.lightbox__next');
  var current = 0;
  var opener = null;

  function visible() { return items.filter(function (li) { return !li.hidden; }); }

  function show(i) {
    var list = visible();
    current = (i + list.length) % list.length;
    var src = list[current].querySelector('img');
    img.src = src.currentSrc || src.src;
    img.alt = src.alt;
    cap.textContent = list[current].querySelector('.gallery__caption').textContent +
      ' (' + (current + 1) + ' of ' + list.length + ')';
    prev.hidden = next.hidden = list.length < 2;
  }

  items.forEach(function (li) {
    li.querySelector('.gallery__open').addEventListener('click', function (e) {
      opener = e.currentTarget;
      show(visible().indexOf(li));
      box.showModal();
    });
  });

  prev.addEventListener('click', function () { show(current - 1); });
  next.addEventListener('click', function () { show(current + 1); });
  box.querySelector('.lightbox__close').addEventListener('click', function () { box.close(); });
  // Click on the dark backdrop closes; clicks on the photo or buttons don't.
  box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
  box.addEventListener('close', function () { if (opener) opener.focus(); });
  box.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  // Swipe left/right on phones.
  var startX = null;
  box.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', function (e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    startX = null;
  });
})();

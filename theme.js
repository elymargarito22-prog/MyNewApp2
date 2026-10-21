// Theme: "light", "dark" or "system" (default). Loaded in <head> so the saved
// choice applies before first paint; the switch is wired up once the DOM is ready.
(function () {
  var KEY = 'theme';
  var root = document.documentElement;

  function saved() {
    try { return localStorage.getItem(KEY) || 'system'; } catch (e) { return 'system'; }
  }

  function apply(choice) {
    if (choice === 'light' || choice === 'dark') root.setAttribute('data-theme', choice);
    else root.removeAttribute('data-theme');
    document.querySelectorAll('.theme-switch button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.themeChoice === choice));
    });
  }

  apply(saved());

  document.addEventListener('DOMContentLoaded', function () {
    apply(saved());
    document.querySelectorAll('.theme-switch button').forEach(function (b) {
      b.addEventListener('click', function () {
        var choice = b.dataset.themeChoice;
        try { localStorage.setItem(KEY, choice); } catch (e) {}
        apply(choice);
      });
    });
  });
})();

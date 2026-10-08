// Harrison Flores — comportamento do site (menu, entradas suaves, pedido pelo WhatsApp)
(function () {
  "use strict";

  // Troque pelo número real da loja: 55 + DDD + número, só dígitos.
  var WHATSAPP_NUMBER = "5500000000000";
  var DEFAULT_MESSAGE = "Olá, Harrison Flores! Gostaria de fazer um pedido.";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && "IntersectionObserver" in window) root.classList.add("motion");

  function waLink(text) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text || DEFAULT_MESSAGE);
  }

  // Todos os botões de pedido apontam para o mesmo número.
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = waLink(a.getAttribute("data-wa") || DEFAULT_MESSAGE);
  });

  // Cabeçalho: mais leve no topo da página.
  var header = document.querySelector(".site-header");
  if (header) {
    var setTop = function () { header.classList.toggle("is-top", window.scrollY < 24); };
    setTop();
    window.addEventListener("scroll", setTop, { passive: true });
  }

  // Menu móvel.
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    var setOpen = function (open) {
      root.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector(".label").textContent = open ? "Fechar" : "Menu";
      if (open) {
        menu.removeAttribute("inert");
        var first = menu.querySelector("a");
        if (first) first.focus();
      } else {
        menu.setAttribute("inert", "");
      }
    };
    menu.setAttribute("inert", "");
    toggle.addEventListener("click", function () { setOpen(!root.classList.contains("nav-open")); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && root.classList.contains("nav-open")) { setOpen(false); toggle.focus(); }
    });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
  }

  // Ordem do traço nas ilustrações: folhagem primeiro, flores depois.
  document.querySelectorAll(".draw .ink").forEach(function (g) {
    Array.prototype.forEach.call(g.children, function (el, i) { el.style.setProperty("--d", String(i * 70)); });
  });

  // Entradas ao rolar.
  if (root.classList.contains("motion")) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-in"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    document.querySelectorAll("[data-reveal], .draw").forEach(function (el) { io.observe(el); });
  }

  // Formulário de contato: monta a mensagem e abre o WhatsApp.
  var form = document.getElementById("order-form");
  if (form) {
    var nameInput = form.querySelector("#nome");
    var nameError = form.querySelector("#nome-erro");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = nameInput.value.trim();
      if (!name) {
        nameInput.setAttribute("aria-invalid", "true");
        nameError.textContent = "Diga seu nome para a gente saber com quem está falando.";
        nameInput.focus();
        return;
      }
      nameInput.removeAttribute("aria-invalid");
      nameError.textContent = "";

      var data = new FormData(form);
      var lines = ["Olá, Harrison Flores! Meu nome é " + name + "."];
      var occasion = data.get("ocasiao");
      var date = data.get("data");
      var budget = String(data.get("investimento") || "").trim();
      var message = String(data.get("mensagem") || "").trim();
      if (occasion) lines.push("Ocasião: " + occasion);
      if (date) {
        var parts = String(date).split("-");
        lines.push("Para quando: " + (parts.length === 3 ? parts[2] + "/" + parts[1] + "/" + parts[0] : date));
      }
      if (budget) lines.push("Investimento aproximado: " + budget);
      if (message) lines.push("", message);

      window.open(waLink(lines.join("\n")), "_blank", "noopener");
    });
    nameInput.addEventListener("input", function () {
      if (nameInput.value.trim()) { nameInput.removeAttribute("aria-invalid"); nameError.textContent = ""; }
    });
  }

  var year = document.getElementById("ano");
  if (year) year.textContent = String(new Date().getFullYear());
})();

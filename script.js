const products = [
  { name: "Set de Cosméticos para Mujer", category: "Cosméticos", price: 299, icon: "💄" },
  { name: "Oso de Peluche 45 cm", category: "Juguetes", price: 249, icon: "🧸" },
  { name: "Audífonos Inalámbricos Bluetooth", category: "Accesorios", price: 399, icon: "🎧" },
  { name: "Freidora de Aire 4.5 L", category: "Hogar", price: 1199, icon: "🍟" },
  { name: "Set de Brochas de Maquillaje", category: "Cosméticos", price: 199, icon: "💅" },
  { name: "Taza para Regalo", category: "Regalos", price: 129, icon: "☕" },
  { name: "Lámpara Decorativa", category: "Hogar", price: 349, icon: "💡" },
  { name: "Accesorios para Celular", category: "Accesorios", price: 149, icon: "📱" },
  { name: "Kit de Regalo Especial", category: "Regalos", price: 299, icon: "🎁" },
  { name: "Juguete Infantil", category: "Juguetes", price: 179, icon: "🚗" },
  { name: "Agenda y Papelería", category: "Otros", price: 119, icon: "📒" },
  { name: "Artículo de Moda", category: "Otros", price: 249, icon: "👕" }
];

const grid = document.getElementById("productGrid");
const filters = document.querySelectorAll(".filter");
const showAll = document.getElementById("showAll");

function money(value) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0
  }).format(value);
}

function renderProducts(category = "Todos", all = false) {
  const filtered = category === "Todos"
    ? products
    : products.filter(p => p.category === category);

  const list = all ? filtered : filtered.slice(0, 8);

  grid.innerHTML = list.map(p => `
    <article class="product-card">
      <div class="product-photo" aria-hidden="true">${p.icon}</div>
      <div class="product-content">
        <span class="product-category">${p.category}</span>
        <h3>${p.name}</h3>
        <div class="product-price">${money(p.price)}</div>
        <a class="product-cta"
           href="https://wa.me/527701192781?text=${encodeURIComponent(`Hola Novedades Jedran, me interesa el producto "${p.name}" de ${money(p.price)}.`)}"
           target="_blank" rel="noopener">Consultar por WhatsApp</a>
      </div>
    </article>
  `).join("");

  showAll.textContent = all ? "Mostrar menos ↑" : "Ver todos →";
  showAll.dataset.all = all ? "true" : "false";
}

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.filter, false);
  });
});

showAll.addEventListener("click", () => {
  const active = document.querySelector(".filter.active")?.dataset.filter || "Todos";
  const all = showAll.dataset.all !== "true";
  renderProducts(active, all);
});

document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    const category = card.dataset.category;
    const filter = [...filters].find(b => b.dataset.filter === category);
    if (filter) {
      filters.forEach(b => b.classList.remove("active"));
      filter.classList.add("active");
      renderProducts(category, false);
    }
  });
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();

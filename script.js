/* Novedades Jedran - catálogo corregido.
   Los nombres de las imágenes se conservan exactamente como están en GitHub. */
const products = [
  // REGALOS
  ["producto-06.jpeg", "Bolsa de Ositos para regalo", "Regalos"],
  ["producto-21.jpeg", "Letrero de Decoración de graduación: Mi Graduación", "Regalos"],
  ["producto-24.jpeg", "Papalote de kuromi", "Regalos"],
  ["producto-25.jpeg", "Globos decorativas de graduación", "Regalos"],
  ["producto-36.jpeg", "Bolsa para regalo con diseño floral", "Regalos"],
  ["producto-37.jpeg", "Bolsa para regalo amarilla", "Regalos"],
  ["producto-38.jpeg", "Bolsa para regalo de cumpleaños", "Regalos"],
  ["producto-46.jpeg", "Bolsa de regalo con diseño de Liverpool", "Regalos"],

  // COSMÉTICOS
  ["producto-11.jpeg", "Mascarilla facial", "Cosméticos"],
  ["producto-44.jpeg", "Set de belleza y maquillaje", "Cosméticos"],

  // JUGUETES
  ["producto-01.jpeg", "Mini tetris portátil rosa", "Juguetes"],
  ["producto-05.jpeg", "squishy de labubu", "Juguetes"],
  ["producto-07.jpeg", "Set de muñeca de enfermera con accesorios sensillo", "Juguetes"],
  ["producto-09.jpeg", "Set de vehículos de construcción", "Juguetes"],
  ["producto-10.jpeg", "Globos de agua reutilizables para juego", "Juguetes"],
  ["producto-20.jpeg", "Motocicleta de juguete Speed Racing", "Juguetes"],
  ["producto-27.jpeg", "Disfraz o alas de mariposa infantil", "Juguetes"],
  ["producto-31.jpeg", "Mini pistola de Juguete de plástico amarillo", "Juguetes"],
  ["producto-32.jpeg", "Castilo de juego infantil tipo tienda", "Juguetes"],
  ["producto-34.jpeg", "Figura de acción de Spider-Man", "Juguetes"],
  ["producto-40.jpeg", "Juego de mesa infantil", "Juguetes"],
  ["producto-41.jpeg", "Casita de juego infantil tipo tienda", "Juguetes"],
  ["producto-45.jpeg", "vehículos de policía de juguete individuales", "Juguetes"],

  // HOGAR
  ["producto-35.jpeg", "Paraguas surtidos", "Hogar"],
  ["producto-42.jpeg", "Paraguas y mallitas escolares surtidas", "Hogar"],

  // ACCESORIOS
  ["producto-02.jpeg", "carritos de juguete con su lanzador ", "Accesorios"],
  ["producto-12.jpeg", "Reloj inteligente", "Accesorios"],
  ["producto-14.jpeg", "lapiceras de tela infantil", "Accesorios"],

  // MODA
  ["producto-13.jpeg", "Ropa interior para dama  de encaje rosa", "Moda"],
  ["producto-15.jpeg", "faja para dama color beige", "Moda"],
  ["producto-16.jpeg", "Brassiere de encaje rosa", "Moda"],
  ["producto-17.jpeg", "faja para dama negra", "Moda"],
  ["producto-18.jpeg", "Top rosa", "Moda"],
  ["producto-19.jpeg", "faja de dos prendas color beige y blanco", "Moda"],
  ["producto-22.jpeg", "blusa de tirantes negra", "Moda"],

  // PAPELERÍA
  ["producto-03.jpeg", "Calculadora cientifica rosa", "Papelería"],
  ["producto-04.jpeg", "juego de kuromi", "juguete"],
  ["producto-08.jpeg", "Set de colores y marcadores", "Papelería"],
  ["producto-23.jpeg", "loterias  infantiles", "Papelería"],
  ["producto-26.jpeg", "cuadros de pintura diamante de Spider-Man", "Papelería"],
  ["producto-28.jpeg", "cuadro de pintura diamante de Spider-Man", "Papelería"],
  ["producto-29.jpeg", "Colores para dibujo", "Papelería"],
  ["producto-30.jpeg", "mini rompecabesas de kuromi infantiles", "Papelería"],
  ["producto-33.jpeg", "Tableta LCD para escribir y dibujar", "Papelería"],
  ["producto-39.jpeg", "Set de arte de 150 piezas", "Papelería"],

  // OTROS
  ["producto-43.jpeg", "Pelotas y balones de futbol y basketball surtidas", "Otros"]
];

const phone='527701192781';
const grid=document.getElementById('productGrid');
const filters=[...document.querySelectorAll('[data-filter]')];
function wa(name){return `https://wa.me/${phone}?text=${encodeURIComponent(`Hola Novedades Jedran, me interesa el producto "${name}". ¿Me pueden compartir precio y disponibilidad?`)}`}
function render(filter='Todos'){
 const list=filter==='Todos'?products:products.filter(p=>p[2]===filter);
 grid.innerHTML=list.length?list.map(p=>`<article class="product"><img class="product-image" loading="lazy" src="${p[0]}" alt="${p[1]}"><div class="product-body"><span class="tag">${p[2]}</span><h3>${p[1]}</h3><a class="ask" target="_blank" rel="noopener" href="${wa(p[1])}">💬 Consultar por WhatsApp</a></div></article>`).join(''):`<div class="empty">No hay productos en esta categoría.</div>`;
}
filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');render(btn.dataset.filter);document.getElementById('productos').scrollIntoView({behavior:'smooth',block:'start'})}));
document.querySelectorAll('.category-grid button').forEach(btn=>btn.addEventListener('click',()=>{const cat=btn.dataset.category;const target=filters.find(b=>b.dataset.filter===cat);if(target)target.click()}));
const menu=document.getElementById('menu'),nav=document.getElementById('navLinks');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();render();

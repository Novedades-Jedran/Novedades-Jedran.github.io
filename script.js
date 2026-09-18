const products = [
  ["producto-01.jpeg", "Mini consola portátil rosa", "Juguetes"],
  ["producto-02.jpeg", "Accesorios para el cabello", "Accesorios"],
  ["producto-03.jpeg", "Calculadora electrónica rosa", "Papelería"],
  ["producto-04.jpeg", "Libro infantil de actividades", "Papelería"],
  ["producto-05.jpeg", "Muñecas de fantasía", "Juguetes"],
  ["producto-06.jpeg", "Ositos de peluche para regalo", "Regalos"],
  ["producto-07.jpeg", "Set de muñeca y accesorios", "Juguetes"],
  ["producto-08.jpeg", "Set de colores y marcadores", "Papelería"],
  ["producto-09.jpeg", "Set de vehículos de construcción", "Juguetes"],
  ["producto-10.jpeg", "Juguete de gel con figuras", "Juguetes"],
  ["producto-11.jpeg", "Mascarilla facial", "Cosméticos"],
  ["producto-12.jpeg", "Reloj inteligente", "Accesorios"],
  ["producto-13.jpeg", "Brassiere de encaje rosa", "Moda"],
  ["producto-14.jpeg", "Prenda de vestir estampada", "Moda"],
  ["producto-15.jpeg", "Vestido rosa", "Moda"],
  ["producto-16.jpeg", "Brassiere de encaje", "Moda"],
  ["producto-17.jpeg", "Prenda de vestir negra", "Moda"],
  ["producto-18.jpeg", "Top rosa", "Moda"],
  ["producto-19.jpeg", "Prenda de vestir beige", "Moda"],
  ["producto-20.jpeg", "Motocicleta Speed Racing", "Juguetes"],
  ["producto-21.jpeg", "Decoración Mi Graduación", "Regalos"],
  ["producto-22.jpeg", "Prenda de vestir oscura", "Moda"],
  ["producto-23.jpeg", "Lámina infantil educativa", "Papelería"],
  ["producto-24.jpeg", "Decoración de unicornio", "Regalos"],
  ["producto-25.jpeg", "Figuras de graduación", "Regalos"],
  ["producto-26.jpeg", "Artículo infantil de Spider-Man", "Juguetes"],
  ["producto-27.jpeg", "Set infantil azul", "Juguetes"],
  ["producto-28.jpeg", "Decoración de Spider-Man", "Regalos"],
  ["producto-29.jpeg", "Colores para dibujo", "Papelería"],
  ["producto-30.jpeg", "Cuadernos infantiles", "Papelería"],
  ["producto-31.jpeg", "Bolsa de regalo amarilla", "Regalos"],
  ["producto-32.jpeg", "Prenda infantil rosa", "Moda"],
  ["producto-33.jpeg", "Material educativo para niños", "Papelería"],
  ["producto-34.jpeg", "Libro o actividad de Spider-Man", "Papelería"],
  ["producto-35.jpeg", "Paraguas surtidos", "Hogar"],
  ["producto-36.jpeg", "Bolsa con diseño floral", "Regalos"],
  ["producto-37.jpeg", "Bolsa de regalo amarilla", "Regalos"],
  ["producto-38.jpeg", "Tarjeta de cumpleaños", "Regalos"],
  ["producto-39.jpeg", "Set de arte de 150 piezas", "Papelería"],
  ["producto-40.jpeg", "Juego de mesa infantil", "Juguetes"],
  ["producto-41.jpeg", "Escoba infantil", "Hogar"],
  ["producto-42.jpeg", "Artículo para hogar", "Hogar"],
  ["producto-43.jpeg", "Pelotas deportivas", "Juguetes"],
  ["producto-44.jpeg", "Set de maquillaje infantil", "Cosméticos"],
  ["producto-45.jpeg", "Canasta o juguete plástico rojo", "Hogar"],
  ["producto-46.jpeg", "Bolsa Liverpool", "Regalos"]
];

const phone='527701192781';
const grid=document.getElementById('productGrid');
const filters=[...document.querySelectorAll('[data-filter]')];
function wa(name){return `https://wa.me/${phone}?text=${encodeURIComponent(`Hola Novedades Jedran, me interesa el producto "${name}". ¿Me pueden compartir precio y disponibilidad?`)}`}
function render(filter='Todos'){
 const list=filter==='Todos'?products:products.filter(p=>p[2]===filter);
 grid.innerHTML=list.length?list.map(p=>`<article class="product"><img class="product-image" loading="lazy" src="assets/${p[0]}" alt="${p[1]}"><div class="product-body"><span class="tag">${p[2]}</span><h3>${p[1]}</h3><a class="ask" target="_blank" rel="noopener" href="${wa(p[1])}">💬 Consultar por WhatsApp</a></div></article>`).join(''):`<div class="empty">No hay productos en esta categoría.</div>`;
}
filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');render(btn.dataset.filter);document.getElementById('productos').scrollIntoView({behavior:'smooth',block:'start'})}));
document.querySelectorAll('.category-grid button').forEach(btn=>btn.addEventListener('click',()=>{const cat=btn.dataset.category;const target=filters.find(b=>b.dataset.filter===cat);if(target)target.click()}));
const menu=document.getElementById('menu'),nav=document.getElementById('navLinks');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();render();

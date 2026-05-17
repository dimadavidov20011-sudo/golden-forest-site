<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Golden Forest — Золотой лес</title>
  <style>
    body { margin:0; font-family: Arial, sans-serif; background:#f4f8f2; color:#222; }
    header { background:url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop') center/cover no-repeat; color:white; text-align:center; padding:120px 20px; }
    header h1 { font-size:48px; margin-bottom:10px; }
    header p { font-size:22px; }
    .btn { display:inline-block; margin-top:20px; padding:14px 28px; background:#2e7d32; color:white; text-decoration:none; border-radius:10px; }
    section { max-width:1000px; margin:auto; padding:60px 20px; }
    .cards { display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:20px; }
    .card { background:white; padding:20px; border-radius:14px; box-shadow:0 2px 8px rgba(0,0,0,0.1); }
    footer { background:#111; color:white; text-align:center; padding:30px; }
  </style>
</head>
<body>
  <header>
    <h1>Golden Forest — Золотой лес</h1>
    <p>Отдых на природе с комфортом</p>
    <a href="#booking" class="btn">Забронировать</a>
  </header>

  <section>
    <h2>Наши зоны отдыха</h2>
    <div class="cards">
      <div class="card"><h3>Беседки</h3><p>Уютные беседки для семьи и друзей</p></div>
      <div class="card"><h3>Мангал-зоны</h3><p>Полностью оборудованные места для шашлыка</p></div>
      <div class="card"><h3>Столики</h3><p>Комфортные места на природе</p></div>
      <div class="card"><h3>Скоро: Дом</h3><p>Дом в аренду для отдыха с ночёвкой</p></div>
      <div class="card"><h3>Скоро: Бассейн</h3><p>Летний бассейн для гостей</p></div>
      <div class="card"><h3>Скоро: Баня</h3><p>Баня для полного расслабления</p></div>
    </div>
  </section>

  <section>
    <h2>Цены</h2>
    <p>Столик — от 300 грн</p>
    <p>Мангал-зона — от 500 грн</p>
    <p>Беседка малая — от 800 грн</p>
    <p>Беседка большая — от 1500 грн</p>
  </section>

  <section id="booking">
    <h2>Бронирование</h2>
    <p>Телефон и адрес добавим позже.</p>
  </section>

  <footer>
    <p>Golden Forest — Золотой лес</p>
  </footer>
</body>
</html>
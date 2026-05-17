export default function RecreationRentalSite() {
  const services = [
    { title: 'Беседки', desc: 'Уютные беседки для отдыха с семьёй и друзьями' },
    { title: 'Мангалы', desc: 'Полностью оборудованные мангальные зоны' },
    { title: 'Столики', desc: 'Комфортные места на природе' },
    { title: 'Скоро: Дом в аренду', desc: 'Уютный дом для отдыха с ночёвкой' },
    { title: 'Скоро: Бассейн', desc: 'Летний бассейн для гостей' },
    { title: 'Скоро: Баня', desc: 'Настоящая баня для полного расслабления' }
  ];

  return (
    <div className="min-h-screen bg-green-50 text-gray-900">
      <header className="bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center text-white">
        <div className="bg-black/50 min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Golden Forest — Золотой лес</h1>
          <p className="text-xl max-w-2xl mb-8">Аренда беседок, мангалов и столиков. Скоро: дом, бассейн и баня.</p>
          <a href="#booking" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-2xl text-lg shadow-lg">Забронировать</a>
        </div>
      </header>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Наши зоны отдыха</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Цены</h2>
          <div className="space-y-3 text-lg">
            <p>Столик — от 300 грн</p>
            <p>Мангал-зона — от 500 грн</p>
            <p>Беседка малая — от 800 грн</p>
            <p>Беседка большая — от 1500 грн</p>
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Бронирование</h2>
        <form className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <input className="w-full border rounded-xl p-3" placeholder="Ваше имя" />
          <input className="w-full border rounded-xl p-3" placeholder="Телефон" />
          <input className="w-full border rounded-xl p-3" type="date" />
          <input className="w-full border rounded-xl p-3" placeholder="Количество гостей" />
          <textarea className="w-full border rounded-xl p-3" placeholder="Что хотите забронировать?" />
          <button className="w-full bg-green-600 text-white py-3 rounded-xl">Отправить заявку</button>
        </form>
      </section>

      <footer className="bg-gray-900 text-white text-center py-8">
        <p>Golden Forest — Золотой лес</p>
        <p>Телефон: +38 (___) ___-__-__</p>
        <p>Адрес: добавьте ваш адрес</p>
      </footer>
    </div>
  );
}

import './App.css'

function App() {

  return (
    <>
    <section className='w-full h-[135vh] bg-gray-500 flex justify-center flex-wrap'>
      <header className="w-[90%] h-16 bg-red-700 flex justify-between items-center">
        <img className='w-50 h-15' src="/src/assets/hotwheels.png" alt="logo" />
        <nav className='w-120 h-full flex bg-blue-500 justify-between items-center'>
          <a className='text-xl' href="#">Новости</a>
          <a className='text-xl' href="#">Наборы</a>
          <a className='text-xl' href="#">Мероприятия</a>
          <a className='text-xl' href="#">Контакты</a>
        </nav>
        <div className='w-50 h-full flex bg-green-500 justify-between items-center'>
          <button className='text-xl'>Log in</button>
          <button className='text-xl'>Reg</button>
        </div>
      </header>
      <main className='w-[80%] h-[40%] bg-yellow-500 flex flex-wrap justify-around content-around'>
        <img className='w-35 h-35' src="src/assets/arny.jpg" alt="icon"/>
        <p className='text-2xl w-[25%] h-10 text-right font-[600]'>Miller S.</p>
        <p className='w-[88%] text-2xl text-center'>Что вершит судьбу человечества в этом мире? Некое незримое существо или закон, подобно Длани Господней парящей над миром? По крайне мере истинно то, что человек не властен даже над своей волей.</p>
        <a className='w-[15%] h-[15%] flex items-center justify-center text-center text-4xl font-[500] bg-red-600 rounded-[5rem]' href="#">Тёлки</a>
        <a className='w-[15%] h-[15%] flex items-center justify-center text-center text-4xl font-[500] bg-red-600 rounded-[5rem]' href="#">Тачки</a>
        <a className='w-[15%] h-[15%] flex items-center justify-center text-center text-4xl font-[500] bg-red-600 rounded-[5rem]' href="#">Админки</a>
        <a className='w-[15%] h-[15%] flex items-center justify-center text-center text-4xl font-[500] bg-red-600 rounded-[5rem]' href="#">Пуринки</a>
      </main>
      <section className='w-[80%] h-[50%] bg-purple-700 flex flex-wrap justify-evenly  content-around'>
        <img className='w-35 h-35' src="src/assets/markarian.jpg" alt="icon" style={{ margin: '0rem 75rem 0rem 0rem', }}/>
        <img className='w-60 h-80 ' src="src/assets/mila.jpg" alt="photo"/>
        <p className='w-[40%] h-[60%] bg-[#300052] text-white items-center justify-center text-center flex text-4xl font-[500]'>Просто Мила Йовович</p>
      </section>
    </section>
    <section className='w-full h-[100vh] bg-rose-500 flex flex-wrap justify-center items-center'>
      <p className='font-weight-bold text-9xl font-sans bg-black text-red-600 radius-xl'>Hell yeah</p>
      <div className='w-[80%] h-[80%] shadow-xl bg-orange-700 flex flex-wrap justify-around items-center'>
        <img className='w-[20%] drop-shadow-lg' src="src/assets/4b0540ed9fbe2f607ee62ec1275e246d.jpg" alt="hell yeah"/>
        <img className='h-[45%] drop-shadow-lg' src="src/assets/b62e4d48ce42bf79fee55e0ce912a819.jpg" alt="hell yeah"/>
        <img className='w-[35%] h-[35%] drop-shadow-lg' src="src/assets/56b18526c68f447e7bedc059abbfddbd.jpg" alt="hell yeah"/>
        <img className='w-[35%] h-[45%] drop-shadow-lg' src="src/assets/33627bc1c2c7943e180478fb5fa3d166.jpg" alt="hell yeah"/>
        <img className='w-[25%] drop-shadow-lg' src="src/assets/4e0a564860787f7e9fe6ad3e88ebf674.jpg" alt="hell yeah"/>
      </div>
    </section>
    </>
  )
}

export default App

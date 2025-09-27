import './App.css'

function App() {

  return (
    <>
    <header className="w-full h-16 bg-red-700 flex justify-between items-center">
      <img className='w-50 h-15' src="/src/assets/hotwheels.png" alt="logo" />
      <nav className='w-100 h-full flex bg-blue-500 justify-between items-center'>
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
    </>
  )
}

export default App

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      {/* <div>Hello World!</div> */}
      <div className='card'>
        <div className='container__info'>
          <div className="content_info">
            <p className='title'>Estou completando mais uma fase!</p>
            <p className='subtitle'>Venha comemorar comigo!</p>
          </div>
        </div>
        <div className='container__name'>
          <div className="content_name">
            <p className='nameText'>Theo</p>
            <p className='age'>9 Anos</p>
          </div>
        </div>
        <div className='container__date'>
          <div className="content_date">
            <p className='day'>Quarta</p>
            <p className='date'>20/03</p>
          </div>
          <div className="content_locale">
            <p className='hour'>Às 20:30hrs</p>
            <p className='date'>local</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default App

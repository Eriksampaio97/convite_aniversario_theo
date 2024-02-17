import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import localizacao from './assets/localizacao.png'
import confirmation from './assets/confirmacao.png'
import gift from './assets/presente.png'
import './App.css'

function App() {
  return (
    <>
      {/* <div>Hello World!</div> */}
      <div className='card'>
        <div className='teste'>

        
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
            <p className='date'>20</p>
            <p className='month'>Março</p>
          </div>
          <div className="content_locale">
            <p className='hour'>Às 20:30hrs</p>
            <div className='buttons'>
              <div className='container__button'>
                <a href='www.google.com' className='optionButton'><img src={localizacao} alt="" className='button_image'/></a>
                <p className='buttonText'>localização</p>
              </div>
              <div className='container__button'>
              <a href='www.google.com' className='optionButton'><img src={confirmation} alt="" className='button_image'/></a>
                <p className='buttonText'>Confirmação</p>
              </div>
              <div className='container__button'>
                <button className='optionButton'><img src={gift} alt="" className='button_image'/></button>
                <p className='buttonText'>Dicas de presente</p>
              </div>
            </div>
          </div>
          
        </div>
        
        </div>
      </div>
    </>
  )
}

export default App

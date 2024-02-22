import React from 'react'
import './Sections.css' 

const Sections = () => {
  return (
   
      <section className='sections'>
      <div className="sections__cta">
      <h2 className='sections__cta-title'>Músicos Online</h2>
      <p className='sections__cta-text'>Por y Para amantes de la Música.
Consigue más visibilidad y facilidad en el proceso de contratación sin intermediación.</p>
      <a className='sections__cta-link' href="">Busca tu artista</a>
      </div>
      <div className='sections__container'>
        <h2 className='sections__container-title'>Contrata tu artista y trae su música en vivo</h2>
        <p className='sections__container-text'>Aquí podrás contratar artistas, músicos, bandas, cantautores, deejays, solistas, técnicos de sonido, técnicos de iluminación etc.. para todos tus eventos. Encuentra a tu artista por género musical, por el instrumento que toca o por el tipo de evento para el que se ofrece y da con el músico ideal para tus celebraciones o salas de conciertos.</p>

      </div>
      </section>
      
      
    
  )
}

export default Sections

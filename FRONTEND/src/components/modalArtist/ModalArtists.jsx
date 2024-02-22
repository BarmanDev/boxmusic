

import React from 'react'
import './ModalArtists.css'
import pepe from "../../img/pepe.jpg"

const ModalArtists = () => {
  return (
    <div className='modalContainer'>
        
        <div className='modalCard'>
            <div className='modalCard__artist'>
            
            <div className='modelCard__dates'>
            <h2 className='modalCard__artist-name'>Pepe Garcia</h2>
            <h3>Rock, Blues y Folk</h3>
            <div className='modelCard__favorites'>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
</svg>
<h4>Guardar en favoritos</h4>
</div>
            </div>
            <img className='modalCard__img' src={pepe} alt="" />
            </div>
            
            <div className='modalCard__songs'>
            <h4 className='modalCard__songs-title'>Título canción: gjhdfjhsgfjgsafgjhsa</h4>
            <button className='modalCard__songs-button'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 4v16l13 -8z" />
</svg></button>
            </div>
            <div className='modalCard__songs'>
            <h4 className='modalCard__songs-title'>Título canción: gjhdfjhsgfjgsafgjhsa</h4>
            <button className='modalCard__songs-button'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 4v16l13 -8z" />
</svg></button>
            </div>
            <p className='modelCard__bio'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem aperiam reiciendis iure quod quas architecto perferendis, error fugiat cum at natus in id aspernatur cupiditate accusantium recusandae velit aliquid.</p>
            <div className='modelCard__contact'>
                
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" className="modelCard__contact-icon" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
  <path d="M10 9l5 3l-5 3z" />
</svg></a>
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" className="modelCard__contact-icon" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M16.5 7.5l0 .01" />
</svg></a>
<a href=""><svg xmlns="http://www.w3.org/2000/svg" className="modelCard__contact-icon" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
  <path d="M3 7l9 6l9 -6" />
</svg></a>
<a href=""><svg xmlns="http://www.w3.org/2000/svg" className="modelCard__contact-icon" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
</svg></a>
            </div>


        </div>
        <button className='modalContainer__button'>x</button>
      
    </div>
  )
}

export default ModalArtists

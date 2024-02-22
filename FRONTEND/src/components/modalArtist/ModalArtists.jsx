

import React from 'react'
import './ModalArtists.css'
import pepe from "../../img/pepe.jpg"

const ModalArtists = () => {
  return (
    <div className='modalContainer'>
        <div className='modalCard'>
            <div className='modalCard__artist'>
            
            <div>
            <h2>Pepe Garcia</h2>
            <h3>Rock</h3>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem aperiam reiciendis iure quod quas architecto perferendis, error fugiat cum at natus in id aspernatur cupiditate accusantium recusandae velit aliquid.</p>
            <div>
                <h3>Contacto</h3>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
            </div>


        </div>
      
    </div>
  )
}

export default ModalArtists

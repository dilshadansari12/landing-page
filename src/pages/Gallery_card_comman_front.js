import React from 'react';
import Gallery_card from './Gallery_card';


function Gallery_card_comman_front(props) {
    return (
        <div className='g_c_front'>
            <Gallery_card />

            <div className="card front_card" style={{ width: "17rem" }}>
                <img src={props.img} className="card-img-top" alt={props.alt}/>
                <div className="card-body">
                    <h3 className="card-text h3_txt" >{props.name}</h3>
                </div>
            </div>

        </div>
    )
}

export default Gallery_card_comman_front
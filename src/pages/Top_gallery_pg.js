import React from 'react';
import Gallery_card_comman_front from './Gallery_card_comman_front';

const Top_gallery_pg = () => {
    return (<div className='Top_gallery_pg contaner mt-2'>
        <div className='head_gallery d-flex justify-content-around pt-5'>
            <h3 className='la_text'> <span></span>Top Galleries</h3>
            <a href='#'>View more</a>
        </div>

            <div className='d-flex justify-content-around flex-wrap mt-5'>
                    
                <Gallery_card_comman_front img="images/g_cad1.png" alt="this is my first image"  name="Apex Legend"  />
                <Gallery_card_comman_front img="images/g_card2.png" alt="this is my secand image"  name="Free fire" />
                <Gallery_card_comman_front img="images/g_card3.png" alt="this is my thirid image"  name="Pubg" />
            </div>

    </div>)
}


export default Top_gallery_pg;
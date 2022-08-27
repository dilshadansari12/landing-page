import React from 'react';
import Action_card from './Action_card';



const All_card_pg = () => {
    return (<div className='Live_auction_pg'>

          <div className='container mb-5 pt-5'>
             <h3 className='la_text'> <span></span> Live Auction</h3>
          </div>

       <div className='container  d-flex justify-content-around flex-wrap first_holder flex-wrap' >
            <Action_card img="images/L_A1.png" alt="first images" name="Fuse" link="#"/>
            <Action_card img="images/L_A2.png" alt="secand images" name="Nick Fury"  link="#" />
            <Action_card img="images/L_A3.png" alt="third images" name="Nico"  link="#"/>
            <Action_card img="images/L_A4.png" alt="four images" name="Toric"  link="#"/>
            <Action_card img="images/L_A5.png" alt="five images" name="Warith"  link="#"/>
            <Action_card img="images/L_A6.png" alt="six images" name="Harth Stonebrew"  link="#"/>
        </div>
    </div>)
}


export default All_card_pg;
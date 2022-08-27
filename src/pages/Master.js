import React from 'react';
import All_card_pg from './All_card_pg';
import Top_gallery_pg from './Top_gallery_pg';
import News_pg from './News_pg';
import Works from './Works';
import Last_part from './Last_part';


const Master = () => {
    return (<>
        <div className='master_div' >
            <All_card_pg />
            <div className='tank_bg' >
                <Top_gallery_pg />
                <News_pg />
                <Works />
                <Last_part />
            </div>
        </div>
    </>)
}

export default Master;
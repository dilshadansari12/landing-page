import React from 'react';
import How_its_work_compo from './How_its_work_compo';


const Works = () => {
  return (
    <div className='Work_pg' >

        <div className='Word_text'>
            <h2>How its work</h2>
            <p>We the community at NFTZone have our own discord group consisting of 150+ members. Be a part of it.</p>
        </div>

        <div  className='Word_box_txt' >
                <How_its_work_compo />
                <How_its_work_compo />
                <How_its_work_compo />
                <How_its_work_compo />

        </div>

    </div>
  )
}

export default Works;
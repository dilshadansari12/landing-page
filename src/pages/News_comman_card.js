import React from 'react';


const News_comman_card = (props) =>{

    

    return(<>
                <div className='News_Card'>
                        <img  src={props.img}  alt="demo" style={{width:"100%" , height:"80%"}}/>
                        <p className='artical_p'>{props.artical}</p>
                </div>
    </>
    )
}

export default News_comman_card;
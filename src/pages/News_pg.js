import React from 'react';
import News_comman_card from './News_comman_card';



const News_pg = () => {
    return (<>
        <div className='News_pg' >
            <h3>Latest News</h3>
        </div>

        <div className='d-flex justify-content-around flex-wrap'>
            <News_comman_card img="images/News1.png" artical="Samsung Gaming Hub, an All-New Game Streaming Discovery Platform...s" />
            <News_comman_card img="images/News2.png" artical="Garena free fire logo has changed forever here is what it looks like now... " />
            <News_comman_card img="images/News3.png" artical="Samsung Gaming Hub, an All-New Game Streaming Discovery Platform..." />
        </div>

        {/* join comunity area */}
        <div className='join_comunity'>
            <div className='mini_join_div'>
                <h3>Join Our Community</h3>
                <p>We the community at NFTZone have our own discord group consisting of 150+ members. Be a part of it.</p>
                <a href='#'> <i className="fa-brands fa-discord"></i> Discord</a>
            </div>
        </div>


    </>)
}

export default News_pg;
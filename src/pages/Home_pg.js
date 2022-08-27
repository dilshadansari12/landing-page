import React from 'react';

const Home_pg = () => {
  return (<>
    <div className='home_master' >
      <div className='container  xyz'>
        <div className='btn_logo d-flex justify-content-between' style={{ padding: "15px 0" }}>
          <img src="images/log.png" alt="logo" />
          <a href='#' className='join_btn' >Join Comunity</a>
        </div>

        <div className='home_core_part d-flex justify-content-between' >

          <div className='tet_home' >
            <h3>THE FIRST <span style={{ color: "red" }}> NFT <br /></span>
              for Transparency and
              Community-Driven</h3>
            <a href='#' >Lest Explore</a>
          </div>

          <div className='animation_part' >

            <img src='images/hero.png' alt='her img' />

          </div>


        </div>


      </div>

    </div>
  </>)
}

export default Home_pg;
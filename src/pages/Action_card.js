import React from 'react';


const Action_card = (prosp) => {
    return (<>
        <div className="ACtion_master_div a_m_d">

            {/* for upper border */}
            <div className='bore_slide'></div>
            {/* for left side border */}
            <div className='bore_slideu bs'></div>

            {/* img area */}
            <div className='div2'>
                <img src={prosp.img} alt={prosp.alt} className='pic1 pic1_kp' />
            </div>


            <div className='bubble bubble_b'>
                <img src="images/bubble.png" alt="picture" className='pic1b pic1b_kp_m' />
            </div>


            <div className='text'>
                <div className='aprt1'>
                    <div className='aprt1_1'><div className='card_nm'>{prosp.name}</div> <div className='card_time' ><span className='sapn_card' >12</span>h <span className='sapn_card' >30</span>m  <span className='sapn_card' >20</span>s</div> </div>
                    <div className='aprt1_2'></div>

                </div>
                <div className='part2' >
                    <div className='brid_part' ><h6>current bid:</h6><span className='brid_amount'>$ 20,000</span></div>
                    <a className='brid_part2' href={prosp.link} >Buy Now</a>
                </div>
            </div>

        </div>



    </>)
}

export default Action_card;
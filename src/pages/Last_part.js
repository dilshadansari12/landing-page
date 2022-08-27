import React from 'react';


const Last_part = () => {
    return (<>
        <div className='Last_part' >
            <div className='master-reac' >
                <div id="pahla">
                    <img src="images/rec1.png" alt="sdsd" id='rec1' />
                    <img src="images/thanos.png" alt="sdsd" id="thanos" />
                </div>

                <div id="dono">
                    <img src="images/rec2.png" alt="sdsd" id='rec1' />
                    <div className='subscribe_text'>
                        <h3>Subscribe to Our Newsletter</h3>
                        <a href='#' >Subscribe <i className="fa-solid fa-bell"></i> </a>
                    </div>
                </div>

            </div>

        </div>

        <div className='last_l_s'>
            <div className='last_log'><img src="images/log.png" /></div>
            <div className='Last_loos'>
                <a href="#">  <i className="fa-brands fa-instagram"></i></a>
                <a href="#">    <i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#">    <i className="fa-brands fa-discord"></i></a>

            </div>
        </div>

    </>)
}

export default Last_part;
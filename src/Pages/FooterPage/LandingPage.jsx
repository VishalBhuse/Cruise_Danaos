import React from 'react'
import img1_C from "./Images/1.png"
import img2_C from "./Images/2.png"
import img3_C from "./Images/3.png"
import img4_C from "./Images/4.png"
import img5_C from "./Images/5.png"
import img6_C from "./Images/6.png"
import img7_C from "./Images/7.png"
import img8_C from "./Images/8.png"
import img9_C from "./Images/9.png"
import img10_C from "./Images/10.png"
import img11_C from "./Images/11.png"
import img12_C from "./Images/12.png"
import img13_C from "./Images/13.png"
import per1 from "./Images/Per1.png"
import per2 from "./Images/Per2.png"
import per3 from "./Images/Per3.png"
import startFull from "./Images/Starfull.png"
import startHalf from "./Images/Starhalf.png"
import dotimg from "./Images/dot.png"
import arrow from "./Images/Arrow 1.png"

import BFB from "./Images/logos/BFB.png"
import Binsta from "./Images/logos/Binsta.png"
import Bmail from "./Images/logos/Bmail.png"
import Bprint from "./Images/logos/Bprint.png"
import Btwit from "./Images/logos/Btwit.png"
import Byoutube from "./Images/logos/Byoutube.png"
import Sclock from "./Images/logos/Sclock.png"
import Smail from "./Images/logos/Smail.png"
import Slocation from "./Images/logos/Slocation.png"
import Smobile from "./Images/logos/sMobile.png"

import "./style.css"


const LandingPage = () => {
  return (
    <>
        <div className='top_destination_box'>
        <p>Top Travel Destinations</p>
        <div></div>
        <div className='top_destination_F'>
            <div>
                <img src={img1_C} alt=''/>
                <p>India</p>
            </div>
            <div>
                <img src={img2_C} alt=''/>
                <p>Italy</p>
            </div>
            <div>
                <img src={img3_C} alt=''/>
                <p>Paris</p>
            </div>
            <div>
                <img src={img4_C} alt=''/>
                <p>Singapore</p>
            </div>
            <div>
                <img src={img5_C} alt=''/>
                <p>Mauritius</p>
            </div>
            <div>
                <img src={img6_C} alt=''/>
                <p>Thailand</p>
            </div>
        </div>
    </div>
    <div className='top_destination_box'>
        <p>Top things to do World Wide</p>
        <div></div>
        <div className='top_destination_F'>
            <div>
                <img src={img1_C} alt=''/>
                <p>India Tickets </p>
            </div>
            <div>
                <img src={img2_C} alt=''/>
                <p>Italy Tickets</p>
            </div>
            <div>
                <img src={img3_C} alt=''/>
                <p>Eiffel Tower Tickets</p>
            </div>
            </div>
    </div>
    <div className='bussiness_chart_box'>
        <div>
            <div>
                <p>Business Events & Charters</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo odio aenean sed adipiscing.</p>
            </div>
            <div>
                <p>Corporate Package</p>
                <p>From 30PX</p>
                <div style={{width:"100%",height:"1px",borderBottom:"1px solid"}}></div>
                <ul>
                    <li>Weekday corporate charter.</li>
                    <li>Land And Sea Package.</li>
                    <li>Team Bonding Package.</li>
                </ul>
                <button>View more <span></span></button>
            </div>
        </div>
    </div>
    <div className='article_box'>
        <div className='top_destination_box'>
            <p>Top Travel Articles</p>
            <div></div>
        </div>
        <div className='article_f'>
            <div>
                <img src={img7_C} alt=''/>
                <p>7th <br/> March</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div>
                <img src={img8_C} alt=''/>
                <p>7th <br/> March</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div>
                <img src={img9_C} alt=''/>
                <p>7th <br/> March</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
    </div>

    <div className='gallery_box'>
        <div className='top_destination_box'>
            <p>Gallery</p>
            <div></div>
        </div>
        <div className='gallery_f'>
            <img src={img13_C} alt=''/>
            <img src={img12_C} alt=''/>
            <img src={img11_C} alt=''/>
            <img src={img10_C} alt=''/>
        </div>
        <button>View More <span><img src={arrow} alt=''/></span></button>
    </div>

    <div className='review_box'>
        <div className='top_destination_box'>
            <p>Top Reviews from Customers</p>
            <div></div>
        </div>
        <div className='review_box_f'>
            <div>
                <img src={per1} alt=''/>
                <p>Lorem ipsum</p>
                <p>America</p>
                <div>
                    <img src={startFull} alt=''/>
                    <img src={startFull} alt=''/>
                    <img src={startFull} alt=''/>
                    <img src={startFull} alt=''/>
                    <img src={startHalf} alt=''/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium aenean</p>
            </div>
            <div>
                <img src={per2} alt=''/>
                <p>Lorem ipsum</p>
                <p>America</p>
                <div>
                    <img src={startFull} alt=''/>
                    <img src={startFull} alt=''/>
                    <img src={startFull} alt=''/>
                    <img src={startFull} alt=''/>
                    <img src={startHalf} alt=''/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium aenean</p>
            </div>
            <div>
                <img src={per3} alt=''/>
                <p>Lorem ipsum</p>
                <p>America</p>
                <div>
                    <img src={startFull} alt=''/>
                    <img src={startFull} alt=''/>
                    <img src={startFull} alt=''/>
                    <img src={startFull} alt=''/>
                    <img src={startHalf} alt=''/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium aenean</p>
            </div>
        </div>
        <div className='three_dot_f'>
            <img src={dotimg} alt=""/>
            <img src={dotimg} alt=""/>
            <img src={dotimg} alt=""/>
        </div>
    </div>

    <div className='footer'>
        <div className='footer_f'>
            <div className='footer_f_1'>
                <p>LOGO & NAME</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium aenean</p>
            </div>
            <div className='footer_f_2'>
                <p>Our Services</p>
                <div></div>
                <ul>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </div>
            <div className='footer_f_2'>
                <p>Quick Links</p>
                <div></div>
                <ul>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </div>
            <div className='footer_f_2'>
                <p>Contact Info</p>
                <div></div>
                <img src={Slocation} alt=''/>
                <img src={Smail} alt=''/>
                <img src={Smobile} alt=''/>
                <img src={Sclock} alt=''/>
            </div>
        </div>
        <div className='footer_logo_f'>
            <img src={Byoutube} alt=''/>
            <img src={BFB} alt=''/>
            <img src={Bmail} alt=''/>
            <img src={Btwit} alt=''/>
            <img src={Bprint} alt=''/>
            <img src={Binsta} alt=''/>
        </div>
    </div>
    </>
    
  )
}

export default LandingPage
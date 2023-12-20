import React from 'react'
import "./Ourhomes.css";
import image1 from '../../../public/Media/Magate1.jpg'
import image2 from '../../../public/Media/Magate2.jpg'
import image3 from '../../../public/Media/Magate3.jpg'
import image4 from '../../../public/Media/Magate4.jpg'

const Ourhomes = () => {
  return (
    <div className='second'>
      <div className='texCard'>
        <h1>OUR HOMES</h1>
          <h5>
          Designed to celebrate the grandeur of Nigeria’s rich architectural heritage,<br />Magate homes &  Properties features a complementary to our culture and modern lifestyle. <br /> Our homes are not just beautiful; they are practical and affordable for the discerning home buyer in Nigeria and Abroad.
          </h5>
      </div>
      <div className='mains'>
      <div className='main'>
        <img src={image1} alt="" id='img'/>
        <div className='text'>
        <h3 className='third'>
        The Afin:
        </h3>
        <p>
        Afin is a 7 bed detached mansion inspired by ancient design. It is a classic example of the Amen Estate collection that successfully blends the graceful architecture of past with present day technology.
        </p>
        </div>
      </div>
      <div className='main'>
        <img src={image2} alt="" id='img'/>
        <div className='text'>
        <h3 className='third'>
        The Afin:
        </h3>
        <p>
        Afin is a 7 bed detached mansion inspired by ancient design. It is a classic example of the Amen Estate collection that successfully blends the graceful architecture of past with present day technology.
        </p>
        </div>
      </div>
      <div className='main'>
        <img src={image3} alt="" id='img'/>
        <div className='text'>
        <h3 className='third'>
        The Afin:
        </h3>
        <p>
        Afin is a 7 bed detached mansion inspired by ancient design. It is a classic example of the Amen Estate collection that successfully blends the graceful architecture of past with present day technology.
        </p>
        </div>
      </div>
      <div className='main'>
        <img src={image4} alt="" id='img'/>
        <div className='text'>
        <h3 className='third'>
        The Afin:
        </h3>
        <p>
        Afin is a 7 bed detached mansion inspired by ancient design. It is a classic example of the Amen Estate collection that successfully blends the graceful architecture of past with present day technology.
        </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Ourhomes
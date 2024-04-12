import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

function Homepage() {
 
  const [textIndex, setTextIndex] = useState(0);
  const sentences = [
    'Fight For our Nation',
    'Make Easy in Transportation',
    'Perform Mining',
    'Fight against Fire',
    'Keep City Clean',
    'Help in Constrction'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % sentences.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div className='HomeBox'>

      <h1 className='TitleName'>Indian Trucks</h1>
      <h4 className='Slogan'>Hauling Dreams.. Journeying Far.. Indian Trucks.. Our Guiding Star</h4>

      <div className="Homebox2">

        <div className="content1">
         
           <h3 className='sent1'> We Indian Trucks </h3> 
           <h2 className='sent2'>{sentences[textIndex]}</h2>
        </div>


        <div className="content2">

          <p className="summa1">Under the vast sky, it's a symbol of human endeavor, bridging distances with every journey...</p>

          <div className="summa2">
  
            <Link to='/Contact'> <img src="https://github.com/SriramKannan04/Truck_Garage_India/blob/main/public/Images/support.png" alt="support" srcset="" className='supportImg' title='Contact Us'/> </Link>
            <Link to='/About'>   <img src="https://github.com/SriramKannan04/Truck_Garage_India/blob/main/public/Images/about.png" alt="about" srcset="" className='supportImg' title='About Sriram'/>   </Link>
            <Link to='https://trucks.cardekho.com/' target='_blank'> <img src="https://github.com/SriramKannan04/Truck_Garage_India/blob/main/public/Images/order.png" alt="order" srcset="" className='supportImg' title='Wanna See more then tab here..!'/> </Link> 

          </div>

        </div>

      </div>

    </div>
  )
}

export default Homepage

import React from 'react';
import './Truck4.css';

function TruckEicher() {
  return (
    <div className='Truck4'>

      <div className="titleBar4">
        <p className="brand4">EICHER MOTORS</p>

        <div className="brandImg4">
          <img src="./Images/eicherGroup.png" alt="" srcset="" className='Eicher'/>
          {/* <img src="./Images/tataMain2.png" alt="" srcset="" className='Eicher'/> */}
        </div>

      </div>  


      <div className="EicherContent">

        <div className="EicherLorrybox">
          <div className="LorryImg4">
            <img src="./Images/eicherLorry1.png" alt="" srcset="" className='Eicher1'/>
          </div>
          
          <div className="nextbox4">
            <p className='rateBox4'>Eicher Pro 6048</p>
            <p className="rateBox4">Starts from  ₹45.10 Lakh</p>
            <p className="rateBox44"> <span className='Property'>Mileage  </span> <span className='Attribute'>3.5kmpl</span></p>
            <p className="rateBox44"> <span className='Property'>Power  </span> <span className='Attribute'>260hp</span></p>
            <p className="rateBox44"> <span className='Property'>Engine  </span> <span className='Attribute'>7700cc</span></p>
          </div>
          
          <div className="back4">
            <a href="https://trucks.cardekho.com/en/trucks/eicher/pro-6048" target="_blank" rel="noopener noreferrer"> <button className='Explore'>Explore</button> </a>
          </div>
        </div>


        <div className="EicherLorrybox">
          <div className="LorryImg4">
            <img src="./Images/eicherLorry2.png" alt="" srcset="" className='Eicher1'/>
          </div>
          
          <div className="nextbox4">
            <p className='rateBox4'>Eicher Pro 6042HT</p>
            <p className="rateBox4">Starts from  ₹40.72 Lakh</p>
            <p className="rateBox44"> <span className='Property'>Mileage  </span> <span className='Attribute'>2.25 - 3.25 kmpl</span></p>
            <p className="rateBox44"> <span className='Property'>Power  </span> <span className='Attribute'>260hp</span></p>
            <p className="rateBox44"> <span className='Property'>Engine  </span> <span className='Attribute'>7689cc</span></p>
          </div>
          
          <div className="back4">
            <a href="https://trucks.cardekho.com/en/trucks/eicher/pro-6042-ht" target="_blank" rel="noopener noreferrer"> <button className='Explore'>Explore</button> </a>
          </div>
        </div>


        <div className="EicherLorrybox">
          <div className="LorryImg4">
            <img src="./Images/eicherLorry3.png" alt="" srcset="" className='Eicher1' id='eithree'/>
          </div>
          
          <div className="nextbox4">
            <p className='rateBox4'>Eicher Pro 8055</p>
            <p className="rateBox4">Starts from  ₹44.19 Lakh</p>
            <p className="rateBox44"> <span className='Property'>Mileage  </span> <span className='Attribute'>2.25 - 3.25 kmpl</span></p>
            <p className="rateBox44"> <span className='Property'>Power  </span> <span className='Attribute'>350hp</span></p>
            <p className="rateBox44"> <span className='Property'>Engine  </span> <span className='Attribute'>7689cc</span></p>
          </div>
          
          <div className="back4">
            <a href="https://trucks.cardekho.com/en/trucks/eicher/pro-8055" target="_blank" rel="noopener noreferrer"> <button className='Explore'>Explore</button> </a>
          </div>

        </div>       

      </div> 

    </div>
  )
}

export default TruckEicher;
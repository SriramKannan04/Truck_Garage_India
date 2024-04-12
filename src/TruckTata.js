import React from 'react';
import'./Truck1.css';

function TruckTata() {
  return (
    <div className='Truck1'>

      <div className="titleBar">
        <p className="brand">TATA MOTORS</p>

        <div className="brandImg">
          <img src="./Images/tataMain1.png" alt="" srcset="" className='tata'/>
          <img src="./Images/tataMain2.png" alt="" srcset="" className='tata' id='two'/>
        </div>

      </div>

      <div className="tataContent">
        
        <div className="tataLorrybox">
          <div className="LorryImg">
            <img src="./Images/tataLorry1.png" alt="" srcset="" className='tata1'/>
          </div>
          
          <div className="nextbox">
            <p className='rateBox'>Tata Prima FL 5530.S</p>
            <p className="rateBox">Starts from  ₹40.32 Lakh</p>
            <p className="rateBox1"> <span className='Property'>Mileage  </span> <span className='Attribute'>2.25 - 3.25 kmpl</span></p>
            <p className="rateBox1"> <span className='Property'>Power  </span> <span className='Attribute'>300hp</span></p>
            <p className="rateBox1"> <span className='Property'>Engine  </span> <span className='Attribute'>6700cc</span></p>
          </div>
          
          <div className="back">
            <a href="https://trucks.cardekho.com/en/trucks/tata/prima-fl-5530-s-bs6" target="_blank" rel="noopener noreferrer"> <button className='Explore'>Explore</button> </a>
          </div>
        </div>


        <div className="tataLorrybox">
          <div className="LorryImg">
            <img src="./Images/tataLorry2.png" alt="" srcset="" className='tata1' id='one1'/>
          </div>
          
          <div className="nextbox">
            <p className='rateBox'>Tata Prima 2825.K/.TK</p>
            <p className="rateBox">Starts from  ₹49.98 Lakh</p>
            <p className="rateBox1"> <span className='Property'>Mileage  </span> <span className='Attribute'>2.75 - 3.75 kmpl</span></p>
            <p className="rateBox1"> <span className='Property'>Power  </span> <span className='Attribute'>250hp</span></p>
            <p className="rateBox1"> <span className='Property'>Engine  </span> <span className='Attribute'>6692cc</span></p>
          </div>
          
          <div className="back">
            <a href="https://trucks.cardekho.com/en/trucks/tata/prima-2825-k-tk" target="_blank" rel="noopener noreferrer"> <button className='Explore'>Explore</button> </a>
          </div>
        </div>


        <div className="tataLorrybox">
          <div className="LorryImg">
            <img src="./Images/tataLorry3.png" alt="" srcset="" className='tata1' id='zebra'/>
          </div>
          
          <div className="nextbox">
            <p className='rateBox'>Tata LPT 4925</p>
            <p className="rateBox">Starts from  ₹45.12 Lakh</p>
            <p className="rateBox1"> <span className='Property'>Mileage  </span> <span className='Attribute'>2.25 - 3.25 kmpl</span></p>
            <p className="rateBox1"> <span className='Property'>Power  </span> <span className='Attribute'>249hp</span></p>
            <p className="rateBox1"> <span className='Property'>Engine  </span> <span className='Attribute'>6700cc</span></p>
          </div>
          
          <div className="back">
            <a href="https://trucks.cardekho.com/en/trucks/tata/lpt-4925" target="_blank" rel="noopener noreferrer"> <button className='Explore'>Explore</button> </a>
          </div>

        </div>       

      </div>     
      
    </div>
  )
}

export default TruckTata;
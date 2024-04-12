import React from 'react';
import './Truck2.css'

function TruckMahindra() {
  return (
    <div className='Truck2'>

      <div className="titleBar2">
        <p className="brand2">MAHINDRA MOTORS</p>

        <div className="brandImg2">
          <img src="./Images/mahindraGroup.png" alt="" srcset="" className='mahindra'/>
          {/* <img src="./Images/mahindraMain2.png" alt="" srcset="" className='mahindra'/> */}
        </div>

      </div>  


      <div className="mahindraContent">

        <div className="mahindraLorrybox">
          <div className="LorryImg2">
            <img src="./Images/mahindraLorry1.png" alt="" srcset="" className='mahindra1'/>
          </div>
          
          <div className="nextbox2">
            <p className='rateBox2'>Mahindra Blazo X 28 M-Dura Tipper</p>
            <p className="rateBox2">Starts from  ₹41.24 Lakh</p>
            <p className="rateBox22"> <span className='Property'>Mileage  </span> <span className='Attribute'>4kmpl</span></p>
            <p className="rateBox22"> <span className='Property'>Power  </span> <span className='Attribute'>280hp</span></p>
            <p className="rateBox22"> <span className='Property'>Engine  </span> <span className='Attribute'>7000cc</span></p>
          </div>
          
          <div className="back2">
            <a href="https://trucks.cardekho.com/en/trucks/mahindra/blazo-x-28-tipper" target="_blank" rel="noopener noreferrer"> <button className='Explore'>Explore</button> </a>
          </div>
        </div>


        <div className="mahindraLorrybox">
          <div className="LorryImg2">
            <img src="./Images/mahindraLorry2.png" alt="" srcset="" className='mahindra1'/>
          </div>
          
          <div className="nextbox2">
            <p className='rateBox2'>Mahindra Blazo X 42 Truck</p>
            <p className="rateBox2">Starts from  ₹41.47 Lakh</p>
            <p className="rateBox22"> <span className='Property'>Mileage  </span> <span className='Attribute'>4kmpl</span></p>
            <p className="rateBox22"> <span className='Property'>Power  </span> <span className='Attribute'>300hp</span></p>
            <p className="rateBox22"> <span className='Property'>Engine  </span> <span className='Attribute'>6700cc</span></p>
          </div>
          
          <div className="back2">
            <a href="https://trucks.cardekho.com/en/trucks/mahindra/blazo-x-37-tag-axle" target="_blank" rel="noopener noreferrer"> <button className='Explore'>Explore</button> </a>
          </div>
        </div>


        <div className="mahindraLorrybox">
          <div className="LorryImg2">
            <img src="./Images/mahindraLorry3.png" alt="" srcset="" className='mahindra1'/>
          </div>
          
          <div className="nextbox2">
            <p className='rateBox2'>Mahindra Furio 14 HD</p>
            <p className="rateBox2">Starts from  ₹22.16 Lakh</p>
            <p className="rateBox22"> <span className='Property'>Mileage  </span> <span className='Attribute'>6.5 kmpl</span></p>
            <p className="rateBox22"> <span className='Property'>Power  </span> <span className='Attribute'>138hp</span></p>
            <p className="rateBox22"> <span className='Property'>Engine  </span> <span className='Attribute'>3500cc</span></p>
          </div>
          
          <div className="back2">
            <a href="https://trucks.cardekho.com/en/trucks/mahindra/furio-14-hd" target="_blank" rel="noopener noreferrer"> <button className='Explore'>Explore</button> </a>
          </div>

        </div>       

      </div> 

    </div>
  )
}

export default TruckMahindra;
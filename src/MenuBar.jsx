import React from 'react';
import './Menubar.css';
import { Link } from 'react-router-dom';

function MenuBar() {
  return (
      <div className="Navbox">
          <div className='Menu'>

              <div className='Logo'>
                  <Link to="/Homepage"><img src="./Images/truckLogo3.png" alt="" srcset="" className='Img' title='HomePage'/></Link>
                  {/* <Link to="/Homepage"><img src="./Images/truckLogoBlack.png" alt="" srcset="" className='Img2' /></Link> */}
                  <h1 className='Truck'>INDIAN TRUCKS</h1>
              </div>

              <div className="navbar">
                  <ul>
                      <li>
                          <p className='truckName'>Tata</p>
                          <Link to="/TruckTata"><img src="./Images/tataSymbol.png" alt="" srcset="" className='hideLogo' title='Tata Motors'/></Link>
                      </li>

                      <li>
                          <p className='truckName'>Mahindra</p>
                          <Link to="/TruckMahindra"><img src="./Images/mahindraSymbol.png" alt="" srcset="" className='hideLogo' title='Mahindra & Mahindra Motors'/></Link>
                      </li>

                      <li>
                          <p className='truckName'>Bharat Benz</p>
                          <Link to="/TruckBharatBenz"><img src="./Images/bharatBenzSymbol.png" alt="" srcset="" className='hideLogo' title='BharatBenz MotorWorks'/></Link>
                      </li>

                      <li>
                          <p className='truckName'>Eicher</p>
                          <Link to="/TruckEicher"><img src="./Images/eicherSymbol.png" alt="" srcset="" className='hideLogo' title='Eicher & Volvo Motors'/></Link>
                      </li>

                      <li>
                          <p className='truckName'>Ashok Leyland</p>
                          <Link to="/TruckAL"><img src="./Images/AshokLeylandSymbol.png" alt="" srcset="" className='hideLogo' id='ashok' title='Ashok Leyland Motors'/></Link>
                      </li>

                  </ul>
              </div>

          </div>
      </div>

  )
}

export default MenuBar;
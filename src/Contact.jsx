import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SupAbt.css';

function Contact() {

  const [Name, SetName] = useState('');
  const [Email, SetEmail] = useState('');
  const [Mobile, SetMobile] = useState('');
  const [Comments, SetComments] = useState('');

  function Display(e) 
  {
    e.preventDefault(); 

    SetName(e.target.value);
    SetComments(e.target.value);
    SetEmail(e.target.value);
    SetMobile(e.target.value);

    if (Name.length<=24) 
    {
      console.log(" Name          : " + Name);
    }
    else
    {
      SetName('Invalid name')
    }


    if (Email.includes('@')) 
    {
      console.log(" Email         : " + Email);
    }
    else
    {
      SetEmail(' "@" symbol is missing ')
    }


    if (Mobile.length<11) 
    {
      console.log(" Mobile NUmber : " + Mobile);
    }
    else
    {
      alert(' Mobile number Should be less than 11 ')
    }


    if (Comments.length<=1000) 
    {
      if (Comments !== "") 
      {
        console.log(" Comments      : " + Comments);
      }
      else
      {
        SetComments(' Empty Field ')
      }
    }
    else 
    {
      SetComments(' Try to provide your comments less than 101 characters..! ')
    }


    if (Name.length<=24) 
    {
      if (Email.includes('@')) 
      {
        if (Mobile.length<11) 
        {
          if (Comments.length<=1000)
          {
            alert(" Thanks a lot for your Comments.. 😊 ")
          }
        }
      }
    }


  } 


  return (
    <div className='ContactUs'>
        
      <div className="SubContact1">

        <h1 className='ContactTitle1'> Contact Us</h1>
        <span className='more'>
            <Link to='/About' className='more1'>                                       <p>About Us</p>      </Link>
            <Link to='https://trucks.cardekho.com/' target='_blank' className='more1'> <p>Explore More</p > </Link> 
        </span>

      </div>

      <div className="SubContact2">
        <div className="pesuBox">
          <h1 className='ContactTitle'> Contact Us</h1>

          <form action="" method="get">

            <div className="entity">

              <label htmlFor="" >Name :</label>

              <input type="name"
                name="Name"
                id="nameSollu" 
                className='solluSollu'
                value={Name} 
                onChange={(e) => SetName(e.target.value)}
                placeholder={'Enter your Name here'}
                required/>
            </div>

            <div className="entity">

              <label htmlFor="" >E-mail :</label>

              <input type="email" 
                name="Email"
                id="mailSollu" 
                className='solluSollu' 
                value={Email} 
                onChange={(e => SetEmail(e.target.value))}
                placeholder={"Enter your E-Mail I'd here"}
                required/>

            </div>

            <div className="entity">

              <label htmlFor="" >Mobile :</label>

              <input 
                type="number" 
                name="Number" 
                id="numberSollu" 
                className='solluSollu'
                value={Mobile} 
                onChange={(e) => SetMobile(e.target.value)}
                placeholder={'Enter your Mobile Number here'}
                required/>

            </div>

            <div className="entity">

              <label htmlFor="" >Comment :</label>

                <textarea 
                name="Comments" 
                id="comment" 
                cols="33" rows="10" 
                className='commentPannu' 
                value={Comments} 
                onChange={(e) => SetComments(e.target.value)}
                placeholder={'Enter your comments'}
                required></textarea>

            </div>

            <div className="entity1">
              <button type="submit" className='sub' onClick={Display}>SUBMIT</button>
            </div>
              
          </form>

        </div>

      </div>
        
    </div>
  )
}

export default Contact;
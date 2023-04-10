import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './assets/Logo.svg';
import Glogo from './assets/google-logo-icon-png-transparent-background-osteopathy-16 1.svg';
import flogo from './assets/facebook-512 1.svg'
import clogo from './assets/Vector.svg'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
export function App() {
  const [passVisible, setPassVisible] = useState<boolean>(false)
  const showPassword = ()=>{
    setPassVisible(!passVisible);
  }
  return (
      <div className='container'>
        <div className='container-form'>
          <div className='form'>
            <p className='title-big'>Create Account</p>
              <div className='div-social'>
                <button className='social-button'>
                  <img src={Glogo}/>
                  Signup with Google
                </button>
                <button className='social-button'>
                  <img src={flogo}/>
                  Signup with Facebook</button>
              </div>
              <p className='title'> - OR - </p>
              <input type='text' placeholder='Full Name'/>
              <input type='email' placeholder='Email Address'/>
              <div className='password'>
                <input type= {passVisible?'text':'password'} placeholder='Password'/>
                {passVisible?
                    <AiOutlineEyeInvisible color='#A3A3A3' size={24} onClick={showPassword}/>:
                    <AiOutlineEye color='#A3A3A3' size={24} onClick={showPassword}/>}
              </div>
            <button>Create Account</button>
            <div className='link-login'>
                <p className='body'>Already have an account?</p>
                <a>Log in</a>
            </div>
            
          </div>
        
        </div>
        <div className='personal'>
          <div><img src={clogo}/></div>
          <div>
              <img className='home' src={Logo}/>
              <p className='title-contrast'>
                Find 3D Objects, Mockups and Illustration here.
              </p>
          </div>
          
        </div>
      </div>
          
  )
}


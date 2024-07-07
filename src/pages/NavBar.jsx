import './Nav.css'
import Logo from '../assets/logo.png'
import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu'


function NavBar(){

    const [toggle, setToggle] = useState(false);



    const handleClick = () => {
        setToggle(!toggle);
      };


    return(
        <>
        <div className="container">
           <div className="left-side">
            <img src={Logo} alt="logo" />
            <h3>creative</h3>
           </div>
           <div className="right-side">
            <ul>
                <li>
                <NavLink to={'/'} className='linker'>About</NavLink>
                </li>
                <li>
                <NavLink to={'/service'}>Service</NavLink>
                </li>
                <li>
                <NavLink to={'/projects'}>Trainers</NavLink>
                </li>
                <li className='list'>Schedule a Call</li>
                
            </ul>

        </div>
        <div className="burgerMenu">
                <button onClick={handleClick}></button>
                <Menu>

                <div className="innerDiv">
                
                <ul>
                 
                <li>
                <NavLink to={'/'} className='linker'>About</NavLink>
                </li>
                <li>
                <NavLink to={'/service'}>Service</NavLink>
                </li>
                <li>
                <NavLink to={'/projects'}>Trainers</NavLink>
                </li>
                
                
            </ul>
             
                </div>
                </Menu>
  
               
            </div>
        </div>
      

        </>
    )
}
export default NavBar
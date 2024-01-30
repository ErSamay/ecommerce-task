import React, {useContext ,  useState , useRef } from 'react'
import './Navbar.css'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import nav_dropdown from "../Assets/dropdown_icon.png"
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

function Navbar() {
    const[menu , setMenu] = useState('shop');
    const{getTotalCardItems} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }




  return (
    <div className='navbar flex justify-around shadow-md'>
        <div className='nav-logo flex items-center gap-2'>
            <img src={logo} alt='' />
            <p className='text-#171717 text-38 font-semibold'>JAINSHOP</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt='' /> 
        <ul ref={menuRef} className='nav-menu flex items-center list-none gap-12 text-#626262 text-20 font-medium'>
            <li className='flex flex-col items-center cursor-pointer justify-center gap-3' onClick={() => {setMenu("shop")}}><Link style={{textDecoration:"none"}} to='/'>Shop</Link>{menu==="shop"?<hr className='border-none w-4/5 h-3 rounded-lg bg-#FF4141'/>:<></>}</li>
            <li className='flex flex-col items-center cursor-pointer justify-center gap-3'  onClick={() => {setMenu("mens")}}><Link style={{textDecoration:"none"}} to='/mens'>Men</Link>{menu==="mens"?<hr className='border-none w-4/5 h-3 rounded-lg bg-#FF4141'/>:<></>}</li>
            <li className='flex flex-col items-center cursor-pointer justify-center gap-3' onClick={() => {setMenu("womens")}}><Link style={{textDecoration:"none"}} to='/womens'>Women</Link>{menu==="womens"?<hr className='border-none w-4/5 h-3 rounded-lg bg-#FF4141'/>:<></>}</li>
            <li className='flex flex-col items-center cursor-pointer justify-center gap-3' onClick={() => {setMenu("kids")}}><Link style={{textDecoration:"none"}} to='/kids'>Kids</Link>{menu==="kids"?<hr className='border-none w-4/5 h-3 rounded-lg bg-#FF4141'/>:<></>}</li>
        </ul>
        <div className='nav-logo-cart flex gap-45 items-center'>
          {localStorage.getItem('auth-token')
          ?<button onClick={() => {localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to="/login"> <button className='w-200 h-75 px-10 py-4 outline-none border border-solid border-gray-700 rounded-full text-gray-600 text-20 font-semibold bg-white cursor-pointer' style={{ backgroundColor: '#f3f3f3' }}>Login</button></Link>}
          
           <Link to="/cart"> <img src={cart_icon} alt='' /></Link>
            <div className='nav-cart-count w-22 h-22 flex justify-center items-center mt-neg35 ml-neg55 rounded-11 text-14 bg-red-500 text-white'>{getTotalCardItems()}</div>
        </div>
    </div>
  )
}

export default Navbar


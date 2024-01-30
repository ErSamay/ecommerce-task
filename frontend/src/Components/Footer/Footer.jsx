import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pintester_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center gap-8'>
        <div className='footer-logo flex items-center gap-5'>
            <img src={footer_logo} alt="" />
            <p className='text-#383838 text-46 font-bold'>JAINSHOP</p>
        </div>
        <ul className='footer-links flex gap-16 list-none text-#252525 text-20'>
            <li className='cursor-pointer'>Company</li>
            <li className='cursor-pointer'> Products</li>
            <li className='cursor-pointer'>Offices</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
           
        </ul>
        <div className="footer-social-icon flex gap-5">
            <div className="footer-icons-container p-4 pb-2 bg-#fbfbfb border border-#ebebeb">
                <img src={whatsapp_icon} alt="" />
            </div>
            <div className="footer-icons-container p-4 pb-2 bg-#fbfbfb border border-#ebebeb">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container p-4 pb-2 bg-#fbfbfb border border-#ebebeb">
                <img src={pintester_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright flex flex-col items-center gap-8 w-full mb-8 text-#1a1a1a text-20">
            <hr className='w-4/5 border-none rounded-lg h-3 bg-#c7c7c7'/>
            <p>Copyright &copy; 2024 - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
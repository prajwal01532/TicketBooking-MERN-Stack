import React from 'react'
import { assets } from '../assets/assets' // ✅ Make sure the path is correct

const Footer = () => {
  return (
    <footer className="px-6 mt-40 md:px-16 lg:px-36 w-full text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
        <div className="md:max-w-96">
          <img className="w-36 h-auto" src={assets.logo} alt="logo" /> {/* ✅ fixed */}
          <p className="mt-6 text-sm">
          Seamless movie ticket booking, anytime, anywhere — by Prazzol Pokhrel.          </p>
          <div className="flex items-center gap-2 mt-4">
            <img src={assets.googlePlay} className="h-9 w-auto" alt="Google Play" /> {/* ✅ added alt */}
            <img src={assets.appStore} className="h-9 w-auto" alt="App Store" />
          </div>
        </div>

        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+977 9804994584</p>
              <p>prazzol01532@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} © Movie Ticket Booking Web App Made By Prazzol Pokhrel. All Right Reserved.
      </p>
    </footer>
  )
}

export default Footer

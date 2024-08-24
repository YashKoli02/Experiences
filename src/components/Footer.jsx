import React from 'react'
import {FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa'
import {TiSocialPinterest} from 'react-icons/ti'
const Footer = () => {
  return (
    <div className='parent'>
        <div className='container1'>
            <div>
                <h6 className='inner-container'>Solutions</h6>
                <ul>
                    <li className='list-inner'>Travel</li>
                    <li className='list-inner'>Booking</li>
                    <li className='list-inner'>Flights</li>
                    <li className='list-inner'>Cruises</li>
                    <li className='list-inner'>Ground</li>
                </ul>
            </div>
            <div>
                <h6 className='inner-container'>Support</h6>
                <ul>
                    <li className='list-inner'>Pricing</li>
                    <li className='list-inner'>Documentation</li>
                    <li className='list-inner'>Tours</li>
                    <li className='list-inner'>Refunds</li>
                </ul>
            </div>
            <div>
                <h6 className='inner-container'>Company</h6>
                <ul>
                    <li className='list-inner'>About</li>
                    <li className='list-inner'>Blog</li>
                    <li className='list-inner'>Jobs</li>
                    <li className='list-inner'>Press</li>
                    <li className='list-inner'>Partners</li>
                </ul>
            </div>
            <div>
                <h6 className='inner-container'>Legal</h6>
                <ul>
                    <li className='list-inner'>Claims</li>
                    <li className='list-inner'>Privacy</li>
                    <li className='list-inner'>Terms</li>
                    <li className='list-inner'>Policies</li>
                    <li className='list-inner'>Conditions</li>
                </ul>
            </div>
            <div className='subscriber'>
          <p className='subscriber2'>Subscribe to our newsletters</p>
          <p className='list-inner2'>
            The Latest deals, articles and resources sent to your inbox weekly.
          </p>
          <form className='form'>
            <input className='forminput' type='email' placeholder='Enter email...'/>
            <button className='p-2 mb-4 rounded-md'>Subscribe</button>
          </form>
        </div>
        </div>

        <div className='icons'>
            <p className='list-inner2'>2022 Experience,LLC.All rights reserved</p>
            <div className='socials'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <TiSocialPinterest/>
            </div>
        </div>
    </div>
  )
}

export default Footer
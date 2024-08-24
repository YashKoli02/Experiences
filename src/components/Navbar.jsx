import React,{useState} from 'react'
import {HiMenuAlt3} from 'react-icons/hi'

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleNav=()=>{
     setNav(!nav);
     if(!nav){
        document.body.style.overflow='hidden'
     }
     else{
        document.body.style.overflow='scroll'
     }
    }
  return (
    <div className='navbar'>
        <h1 className='content'>Experiences</h1>
        <HiMenuAlt3 onClick={handleNav} className='icon' size={25}/>
        <div className={nav ? 'list':'navlist'}>
            <ul className='unordered'>
                <li className='items'>Home</li>
                <li className='items'>Destinations</li>
                <li className='items'>Reservations</li>
                <li className='items'>Amenities</li>
                <li className='items'>Rooms</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
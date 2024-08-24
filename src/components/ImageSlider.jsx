import React,{useState} from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
const ImageSlider = () => {
    const slides=[
        {
            url: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80',
            title: 'Lobster',
          },
          {
            url: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Sushi',
          },
          {
            url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Pasta',
          },
          {
            url: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Salmon',
          },
    ];
    const [current,SetCurrent]=useState(0);

    const prevSlide=()=>{
       const isFirstSlide=current===0;
       const newIndex=isFirstSlide?slides.length-1:current-1;
       SetCurrent(newIndex);
    }
    const nextSlide=()=>{
      const islastSlide=current===slides.length-1;
      const newIndex=islastSlide?0:current+1;
      SetCurrent(newIndex);
    }
    const gotoSlide=(slideIndex)=>{
      SetCurrent(slideIndex)
    }
    setInterval(nextSlide,4000);
      return (
    <div className='slider'  >
        <div
        className='sliding'
        style={{backgroundImage:`url(${slides[current].url})`}}
        ></div>
        <div className='left'>
          <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        <div className='right'>
          <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        <div className='fourdot'>
          {slides.map((slide,slideIndex)=>(
          <div className='four' key={slideIndex} onClick={()=>gotoSlide(slideIndex)}>
        <RxDotFilled/>
          </div>
            ))}
        </div>
    </div>
  )
}

export default ImageSlider
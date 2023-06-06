import React, { useState } from 'react';
import people from './data'
import {FaQuoteRight, FaChevronLeft, FaChevronRight} from 'react-icons/fa'
export default function Reviews() {
    const [index, setIndex] = useState(0);
    const {name,job, image,text} = people[index];
    function checkNumber(number){
        if(number > people.length-1){
            return 0;
        }
        if(number<0){
            return people.lenght-1;
        }
        return number;
    }

    function prevBtnPerson(){
        setIndex((index)=>{
            let newIndex = index+1;
            checkNumber(newIndex);
        })  
    }
    prevBtnPerson();

    function nextBtnPerson(){
        setIndex((index)=>{
            let newIndex = index-1;
            checkNumber(newIndex);
        })
    }
    nextBtnPerson();

    function randomPerson(){
        let randomNum = Math.floor(Math.random()*people.length);
        if(randomNum === index){
            randomNum = index+1;
        }
        setIndex(checkNumber(randomNum));
    }

  return (
    <article className='reviews'>
        <div className='img-container'>
            <img src={image} alt={name} className='person-img'/>
            <span className='quote-icon'>
                <FaQuoteRight/>
            </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='info'>{text}</p>
        <p className='job'>{job}</p>
        <div className='button-container'>
            <button type="" className='prevBtnPerson' onClick={prevBtnPerson} >
                <FaChevronLeft/>
            </button>
            <button type="" className='nextBtnPerson' onClick={nextBtnPerson} >
                <FaChevronRight/>
            </button>  
        </div>
        <button className='random-btn' onClick={randomPerson} >surprise me</button>
    </article>
  )
}

import React, { useEffect, useState } from 'react'
import strings from '../../traslate/Translate'
import SearchShipment from './SearchShipment'
import Container from './Container';

const Nav = ({setLanguage,language}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(!isOpen);
    };
   console.log(language)
    useEffect(() => { 
        strings.setLanguage(language)
        
        console.log(strings.getLanguage())
     },[language,strings.getLanguage()])
  return (
    <nav className="bg-white border-b border-solid border-gray-100 shadow-sm">
        <Container>
    <div className=" mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-white">
                <img src={require('../../assets/image/logo.png')}/>
            </span>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
          <a
          href='#'
                  className="text-gray-700 px-3 py-2 text-base font-bold no-underline">
                  {strings.home}
                </a>
                <a
                href='#'
                  className="text-gray-700 px-3 py-2 text-base font-bold no-underline">
                  {strings.prices}
                </a>
                <a
                href='#'
                  className="text-gray-700 px-3 py-2 text-base font-bold no-underline">
                  {strings.callSales}
                </a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <div onClick={openModal} className='text-base font-bold cursor-pointer'>{strings.trackYourShipment}</div>
            <div className='relative'>
            <SearchShipment language={language} isOpen={isOpen}/>
            </div>
            {language==="en"?<div className='text-base font-bold cursor-pointer' onClick={()=>setLanguage('ar')}>عربى</div>
        :<div className='text-base font-bold cursor-pointer' onClick={()=>setLanguage('en')}>English</div>}
          </div>
        </div>
      </div>
    </div>
    </Container>
  </nav>
  )
}

export default Nav
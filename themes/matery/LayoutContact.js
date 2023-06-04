import Header from './components/Header'
import CONFIG_MATERY from './config_matery'
import HeaderArticle from './components/HeaderArticle'
import LayoutBase from './LayoutBase'
import React from 'react'
import Contact from './components/Contact'

export const LayoutContact = (props) => {
  return (
    <LayoutBase {...props} 
    headerSlot={<HeaderArticle {...props} />}
    containerSlot={ <Contact {...props}/>} >
    </LayoutBase>
  )
}


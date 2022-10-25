import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Technologies from './components/Technologies'
import Header from './components/Header'
import Raiting from './components/Raiting'
import Accordion from './components/Accordion'
import starlogo from './star.png'
import { Starlogo } from './components/Starlogo'
import { OnOff } from './onOff'

function App() {
  console.log('App rendering')

  const [switcher, setSwitcher] = useState(false)

  const fooSwitch = () => {
    switcher ? setSwitcher(false) : setSwitcher(true)
  }

  return (
    <div className='appWrapper'>
      <OnOff />

      <Accordion title={'Friends list'} collapsed={false} />

      <Raiting value={1} />
    </div>
  )
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log('title rendering')
  return <h1>{props.title}</h1>
}

export default App

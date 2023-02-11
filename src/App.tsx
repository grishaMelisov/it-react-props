import React, { useState } from 'react'
import './App.css'
import Raiting from './components/Raiting'
import Accordion from './components/Accordion'
import { OnOff } from './components/onOff'

function App() {
  console.log('App rendering')

  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [ratingValue, setRatingValue] = useState(1)
  const [on, setOn] = useState(false)

  return (
    <div className='appWrapper'>
      <OnOff isOn={on} onChange={setOn} />
      <Accordion title={'Friends list'} collapsed={collapsed} onClick={setCollapsed} />
      <Raiting value={ratingValue} onClick={setRatingValue} />
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

function getDivisorsCnt(n: number) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum = sum + 1
    }
  }
  return console.log(sum)
}

getDivisorsCnt(12)

export default App

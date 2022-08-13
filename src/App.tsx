import React from 'react'
import logo from './logo.svg'
import './App.css'
import Technologies from './components/Technologies'
import Header from './components/Header'
import Raiting from './components/Raiting'
import Accordion from './components/Accordion'
import starlogo from './star.png'
import { Starlogo } from './components/Starlogo'

function App() {
  console.log('App rendering')
  return (
    <div>
      <PageTitle title={'INDEX'} />
      <PageTitle title={'My friends'} />
      <Header />
      <Technologies />
      <Raiting value={4} />
      <Accordion title={'Friends list'} collapsed={false} />
      <Accordion title={'Enemies list'} collapsed={false} />
      <Starlogo />
      <Starlogo />
      <Starlogo />
      <Starlogo />
      <Starlogo />
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

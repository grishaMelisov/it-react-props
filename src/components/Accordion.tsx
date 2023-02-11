import { useState } from 'react'

type AccordionPropsType = {
  collapsed: boolean
  title: string
  onClick: (e: boolean) => void
}

function Accordion(props: AccordionPropsType) {
  const switcher = () => {
    props.onClick(!props.collapsed)
  }

  return (
    <div>
      <AccordionTitle title={props.title} toggle={switcher} />
      {props.collapsed && <AccordionBody />}
    </div>
  )
}

function AccordionTitle(props: any) {
  return (
    <h3
      onClick={() => {
        props.toggle()
      }}
    >
      {props.title}
    </h3>
  )
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
export default Accordion

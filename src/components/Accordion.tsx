import { useState } from 'react'

type AccordionPropsType = {
  collapsed: boolean
  title: string
}

function Accordion(props: AccordionPropsType) {
  const [toggle, setToggle] = useState(false)
  const switcher = () => {
    setToggle(!toggle)
  }
  console.log(toggle)

  return (
    <div>
      <AccordionTitle title={props.title} toggle={switcher} />
      {toggle && <AccordionBody />}
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

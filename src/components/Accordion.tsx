import { AnyTxtRecord } from 'dns'
import react from 'react'

type AccordionPropsType = {
  collapsed: any
  title: string
}
function Accordion(props: AccordionPropsType) {
  if (props.collapsed) {
    return (
      <div>
        <AccordionTitle title={props.title} />
      </div>
    )
  }

  return (
    <div>
      <AccordionTitle title={props.title} />
      <AccordionBody />
    </div>
  )
}

function AccordionTitle(props: any) {
  console.log('accordion title rendering')
  return <h3>{props.title}</h3>
}

function AccordionBody() {
  console.log('accordion body rendering')
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
export default Accordion

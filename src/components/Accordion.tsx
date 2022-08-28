type AccordionPropsType = {
  collapsed: boolean
  title: string
}
function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.title} />
      {!props.collapsed && <AccordionBody />}
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

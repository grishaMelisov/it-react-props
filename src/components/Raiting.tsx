import { useState } from 'react'

type RaitingPropsType = {
  value: number
}

function Raiting(props: RaitingPropsType) {
  const [value, setValue] = useState(1)

  const toggle = (e: number) => {
    setValue(e)
  }

  return (
    <div>
      <Star id={1} selected={value > 0} toggle={toggle} />
      <Star id={2} selected={value > 1} toggle={toggle} />
      <Star id={3} selected={value > 2} toggle={toggle} />
      <Star id={4} selected={value > 3} toggle={toggle} />
      <Star id={5} selected={value > 4} toggle={toggle} />
    </div>
  )
}

type StarPropsType = {
  selected: boolean
  toggle: (e: number) => void
  id: number
}

function Star(props: StarPropsType) {
  return props.selected ? (
    <span onClick={() => props.toggle(props.id)}>
      <b>star </b>
    </span>
  ) : (
    <span onClick={() => props.toggle(props.id)}>star </span>
  )
}

export default Raiting

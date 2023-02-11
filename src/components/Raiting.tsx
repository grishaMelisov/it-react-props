import { useState } from 'react'

export type RatingPropsType = {
  value: number
  onClick: (e: number) => void
}

function Raiting(props: RatingPropsType) {
  return (
    <div>
      <Star id={1} selected={props.value > 0} onClick={props.onClick} />
      <Star id={2} selected={props.value > 1} onClick={props.onClick} />
      <Star id={3} selected={props.value > 2} onClick={props.onClick} />
      <Star id={4} selected={props.value > 3} onClick={props.onClick} />
      <Star id={5} selected={props.value > 4} onClick={props.onClick} />
    </div>
  )
}

type StarPropsType = {
  selected: boolean
  onClick: (e: number) => void
  id: number
}

function Star(props: StarPropsType) {
  return props.selected ? (
    <span onClick={() => props.onClick(props.id)}>
      <b>star </b>
    </span>
  ) : (
    <span onClick={() => props.onClick(props.id)}>star </span>
  )
}

export default Raiting

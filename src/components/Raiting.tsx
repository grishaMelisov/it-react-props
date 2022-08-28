type RaitingPropsType = {
  value: number
}

function Raiting(props: RaitingPropsType) {
  console.log('Raiting rendering')

  return (
    <div>
      <Star selected={props.value > 0} />
      <Star selected={props.value > 1} />
      <Star selected={props.value > 2} />
      <Star selected={props.value > 3} />
      <Star selected={props.value > 4} />
    </div>
  )
}

type StarPropsType = {
  selected: boolean
}

function Star(props: StarPropsType) {
  console.log('Star rendering')
  if (props.selected === true)
    return (
      <span>
        <b>star </b>
      </span>
    )
  return <span>star </span>
}

export default Raiting

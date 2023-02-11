type ManType = {
  name: string
  age: number
  lessons: Array<{ title: string }>
  address: {
    street: {
      title: string
    }
  }
}

type PropsType = {
  title: string
  man: ManType
  car: {model:string}
}

export const ManComponent: React.FC<PropsType> = ({ title, man: { name }, ...props}) => {
  return (
    <div>
      <h1>{title}</h1>
      <hr />
      <div>{name}</div>
      <div>{props.car.model}</div>
      <div>{name}</div>
    </div>
  )
}
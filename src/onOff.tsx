import { useState } from 'react'

type onOffType = {
  // on: boolean
  // switcher: () => void
}

export function OnOff(props: onOffType) {
  const [on, setOn] = useState(false)

  const onStyle = {
    width: '30px',
    height: '30px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '10px',
    backgroundColor: on ? 'green' : 'white',
  }
  const offStyle = {
    width: '30px',
    height: '30px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '10px',
    backgroundColor: on ? 'white' : 'red',
  }
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '10px',
    backgroundColor: on ? 'green' : 'red',
  }

  return (
    <div>
      <div onClick={() => setOn(true)} style={onStyle}>
        On
      </div>
      <div onClick={() => setOn(false)} style={offStyle}>
        Off
      </div>
      <div onClick={() => {}} style={indicatorStyle}></div>
    </div>
  )
}

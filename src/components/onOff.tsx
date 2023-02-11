import { useState } from 'react'

export type onOffType = {
  isOn: boolean
  onChange: (e: boolean) => void
}

export function OnOff(props: onOffType) {
  const onStyle = {
    width: '30px',
    height: '30px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '10px',
    backgroundColor: props.isOn ? 'green' : 'white',
  }
  const offStyle = {
    width: '30px',
    height: '30px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '10px',
    backgroundColor: props.isOn ? 'white' : 'red',
  }
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '10px',
    backgroundColor: props.isOn ? 'green' : 'red',
  }

  return (
    <div>
      <div
        onClick={() => {
          props.onChange(true)
        }}
        style={onStyle}
      >
        On
      </div>
      <div
        onClick={() => {
          props.onChange(false)
        }}
        style={offStyle}
      >
        Off
      </div>
      <div
        onClick={() => {
          props.onChange(!props.isOn)
        }}
        style={indicatorStyle}
      ></div>
    </div>
  )
}

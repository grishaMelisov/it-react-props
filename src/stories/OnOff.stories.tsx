import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { OnOff } from '../components/onOff'

export default {
  title: 'Example/OnOff',
  component: OnOff,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof OnOff>

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />

export const isOn = Template.bind({})

isOn.args = {
  isOn: true,
}

export const isOff = Template.bind({})
isOff.args = {
  isOn: false,
}

export const ChangeOnOff = () => {
  const [on, setOn] = useState(false)

  return <OnOff isOn={on} onChange={setOn} />
}

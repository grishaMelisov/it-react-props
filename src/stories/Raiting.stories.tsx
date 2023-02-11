import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

import Rating from '../components/Raiting'

export default {
  title: 'Example/Rating',
  component: Rating,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Rating>

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />

export const OneRating = Template.bind({})

OneRating.args = {
  value: 1,
  onClick: (e) => e,
}

export const TwoRating = Template.bind({})
TwoRating.args = {
  value: 2,
  onClick: (e) => e,
}

export const ThreeRating = Template.bind({})
ThreeRating.args = {
  value: 3,
  onClick: (e) => e,
}

export const FourRating = Template.bind({})
FourRating.args = {
  value: 4,
  onClick: (e) => e,
}

export const ChangeRating = () => {
  const [rating, setRating] = useState(3)
  return <Rating value={rating} onClick={setRating} />
}

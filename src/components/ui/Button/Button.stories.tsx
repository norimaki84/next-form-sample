import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ui/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'ボタン',
}

// export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// }
//
// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button',
// }
//
// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button',
// }
//
// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button',
// }

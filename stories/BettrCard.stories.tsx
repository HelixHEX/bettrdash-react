import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BettrCard } from '../src';

const meta: Meta = {
  title: 'BettrCard',
  component: BettrCard,
  argTypes: {
    apiKey: {
      defaultValue: '123',
      control: {
        type: 'text',
      },
    },
  }
};

export default meta;

const Template: Story = args => <BettrCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  apiKey: '123',
}

export const ItterationTwo = Template.bind({});

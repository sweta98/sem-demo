import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  {Todo}  from '../components/Todo';

export default {
  title: 'Todo',
  component: Todo,
} as ComponentMeta<typeof Todo>;

const Template: ComponentStory<typeof Todo> = (args) => <Todo {...args} />;

export const EmptyList = Template.bind({});
EmptyList.args = {
  items: []
};
export const PopulatedList = Template.bind({});
PopulatedList.args = {
    items: ['item 1', 'item 2']
  };

import React from 'react';
import { ComponentStory } from '@storybook/react'

import Button from '.';

export default {
    title: 'Button',
    component: Button,
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Default Button Args'
};
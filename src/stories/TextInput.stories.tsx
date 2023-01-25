import React from "react";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextInput } from "../components/TextInput";
export default {
    title: "TextInput",
    reference: TextInput,
    
    component: TextInput,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof TextInput>;
const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;
export const Default = Template.bind({});


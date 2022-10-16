import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from './Icon';

export default {
  title: 'Example/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconDefault = Template.bind({});
IconDefault.args = {
  index: 11,
};

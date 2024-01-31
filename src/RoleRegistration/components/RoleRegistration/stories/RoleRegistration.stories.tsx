import { Meta, StoryObj } from '@storybook/react';

import { RoleRegistrationProps } from '../RoleRegistration.types';

import { RoleRegistrationStory } from './RoleRegistrationStory';

type Args = RoleRegistrationProps;

export default {
  title: 'RoleRegistration/RoleRegistration',
  component: RoleRegistrationStory
} as Meta<Args>;

type Story = StoryObj<Args>;

export const Default: Story = {};

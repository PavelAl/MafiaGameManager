import { Meta, StoryObj } from '@storybook/react';

import { RoleRegistrationInputProps } from '../RoleRegistrationInput.types';

import { RoleRegistrationInputStory } from './RoleRegistrationInputStory';

type Args = RoleRegistrationInputProps;

export default {
  title: 'RoleRegistration/RoleRegistrationInput',
  component: RoleRegistrationInputStory
} as Meta<Args>;

type Story = StoryObj<Args>;

export const Default: Story = {};

import { Select as ChakraSelect } from '@chakra-ui/react';
import { FC } from 'react';

import { SelectProps } from './Select.types';

export const Select: FC<SelectProps> = props => {
  const { selectedKey = '', options, placeholder = '', onOptionSelected } = props;

  return (
    <ChakraSelect
      defaultValue={''}
      value={selectedKey}
      size="sm"
      onChange={e => onOptionSelected(e.target.value)}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>

      {options.map(({ key, label }) => (
        <option key={key} value={key}>
          {label}
        </option>
      ))}
    </ChakraSelect>
  );
};

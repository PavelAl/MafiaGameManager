import { HStack, IconButton, Text } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

type Props = {
  name: string;
  button: {
    label: string;
    icon: ReactElement;
    onClick?: () => void;
  };
};

export const EdibleRecord: FC<Props> = props => {
  const { name, button } = props;

  return (
    <HStack alignItems={'center'} justifyContent={'space-between'} spacing={3}>
      <Text p="2" fontSize="sm" wordBreak={'break-word'}>
        {name}
      </Text>

      <IconButton
        variant="link"
        colorScheme="teal"
        aria-label={button.label}
        icon={button.icon}
        onClick={button.onClick}
      />
    </HStack>
  );
};

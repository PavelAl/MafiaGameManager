import { Button, HStack } from '@chakra-ui/react';
import { FC } from 'react';

interface ToolbarProps {
  isFirstDay?: boolean;
  onGoNext?: () => void;
  onGoPrev?: () => void;
}

export const GameModuleToolbar: FC<ToolbarProps> = props => {
  const { isFirstDay, onGoNext, onGoPrev } = props;

  return (
    <HStack justifyContent={'space-between'} width={'100%'}>
      {isFirstDay ? (
        <div style={{ width: 64 }} />
      ) : (
        <Button colorScheme={'blue'} onClick={onGoPrev}>
          Назад
        </Button>
      )}

      <Button colorScheme={'blue'} onClick={onGoNext}>
        Вперед
      </Button>
    </HStack>
  );
};

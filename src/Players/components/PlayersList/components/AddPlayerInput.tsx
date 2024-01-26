import { FormControl, FormLabel, HStack, IconButton, Input } from '@chakra-ui/react';
import { Add } from '@mui/icons-material';
import { FC, useState } from 'react';

export const AddPlayerInput: FC<{ onAddPlayer?: (name: string) => void }> = props => {
  const { onAddPlayer } = props;
  const [value, setValue] = useState<string>('');

  const handleAddPlayer = () => {
    onAddPlayer?.(value);
    setValue('');
  };

  return (
    <FormControl>
      <FormLabel>Добавить игрока</FormLabel>

      <HStack alignItems={'center'} justifyContent={'space-between'} spacing={3}>
        <Input
          value={value}
          placeholder="Введите имя"
          size="md"
          onChange={e => setValue(e.target.value)}
        />

        <IconButton
          variant="link"
          colorScheme="teal"
          aria-label="Add player"
          icon={<Add />}
          onClick={handleAddPlayer}
        />
      </HStack>
    </FormControl>
  );
};

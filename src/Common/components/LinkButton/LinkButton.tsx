import { Button, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export type LinkButtonProps = {
  to: string;
  label: string;
};

export const LinkButton: FC<LinkButtonProps> = props => {
  const { to, label } = props;

  return (
    <Stack spacing={8} alignItems={'center'}>
      <Link to={to}>
        <Button colorScheme="teal" variant="link" size="lg">
          {label}
        </Button>
      </Link>
    </Stack>
  );
};

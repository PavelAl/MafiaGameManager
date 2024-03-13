import { Button, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export type LinkButtonProps = {
  to: string;
  label: string;
  onClick?: () => void;
};

export const LinkButton: FC<LinkButtonProps> = props => {
  const { to, label, onClick } = props;

  return (
    <Stack spacing={8} alignItems={'center'}>
      <Link to={to} onClick={onClick}>
        <Button colorScheme="teal" variant="link" size="lg" onClick={onClick}>
          {label}
        </Button>
      </Link>
    </Stack>
  );
};

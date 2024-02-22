import { HStack, IconButton } from '@chakra-ui/react';
import { Pause, PlayArrow, Replay } from '@mui/icons-material';
import { useState, useEffect, FC } from 'react';

import { formatTime } from './formatTime';

export const Timer: FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  const handleLaunchPause = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  return (
    <HStack gap={10}>
      <IconButton aria-label="Reset" icon={<Replay />} onClick={handleReset} />

      <h2>{formatTime(seconds)}</h2>

      <IconButton
        aria-label={isRunning ? 'Pause' : 'Launch'}
        icon={isRunning ? <Pause /> : <PlayArrow />}
        onClick={handleLaunchPause}
      />
    </HStack>
  );
};

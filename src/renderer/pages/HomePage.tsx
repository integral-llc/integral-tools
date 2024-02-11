import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';

function HomePage() {
  const { setTitle } = useAppContext();

  useEffect(() => {
    setTitle('Home');
  }, [setTitle]);

  return (
    <Box>
      <Typography variant="h1">Home Page!</Typography>
    </Box>
  );
}

export default HomePage;

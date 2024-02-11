import {
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import ClipboardAbleLabel from '../components/ClipboardAbleLabel';
import { useAppContext } from '../contexts/AppContext';

const Percentages = [5, 10, 15, 20, 25, 30, 40, 75, 100, 120, 150, 200];

function CalcPage() {
  const theme = useTheme();
  const [number, setNumber] = useState('0');
  const { setTitle } = useAppContext();

  useEffect(() => {
    setTitle('Options Calc');
  }, [setTitle]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };

  const renderPercentages = () => {
    const value = Number(number);

    const renderCells = (percent: number) => {
      const res = [];
      res.push(
        <Grid item xs={2} key={`percent-${percent}`}>
          <Typography variant="body1">{percent}%</Typography>
        </Grid>,
      );
      res.push(
        <Grid item xs={2} key={`price-${percent}`}>
          <Stack direction="row">
            $
            <ClipboardAbleLabel
              value={(value + value * (percent / 100)).toFixed(2)}
            />
          </Stack>
        </Grid>,
      );
      res.push(<Grid item xs={8} key={`empty-${percent}`} />);
      return res;
    };

    return (
      <Grid container spacing={1} sx={{ padding: theme.spacing(1) }}>
        <Grid item xs={4}>
          <Typography variant="h6">Stroke Sell Price</Typography>
        </Grid>
        <Grid item xs={8} />
        {number && Percentages.map((percent) => renderCells(percent))}
      </Grid>
    );
  };

  return (
    <Box>
      <Stack>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Options Calc
        </Typography>
        <Stack direction="row">
          <Box sx={{ margin: theme.spacing(1) }}>
            <Typography variant="body1">Enter Buy Price</Typography>
          </Box>
          <TextField value={number} type="number" onChange={handleChange} />
        </Stack>
        {renderPercentages()}
      </Stack>
    </Box>
  );
}

export default CalcPage;

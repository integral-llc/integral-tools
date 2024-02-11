import { Box, useTheme } from '@mui/material';
import CompanyLogoImage from '../../../assets/FullLogo.png';

function CompanyLogo() {
  const theme = useTheme();

  // place image in a box to control size

  return (
    <Box sx={{ width: theme.spacing(6), height: theme.spacing(6) }}>
      <img
        src={CompanyLogoImage}
        alt="Company Logo"
        style={{ height: '100%' }}
      />
    </Box>
  );
}

export default CompanyLogo;

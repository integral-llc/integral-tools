import { useState } from 'react';
import { Box, Tooltip, Typography } from '@mui/material';

function ClipboardAbleLabel({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
    // show `tooltip` for 1 second
  };

  return (
    <Tooltip title={copied ? 'Copied!' : 'Copy'}>
      <Box onClick={copy} component="span" sx={{ cursor: 'pointer' }}>
        <Typography variant="body1" sx={{ fontWeight: '500' }}>
          {value}
        </Typography>
      </Box>
    </Tooltip>
  );
}

export default ClipboardAbleLabel;

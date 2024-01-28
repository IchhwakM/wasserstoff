import { styled } from '@mui/material/styles';
import { Tab as MuiTab } from '@mui/material';

interface StyledTabProps {
  label: string;
}

export const Tab = styled((props: StyledTabProps) => (
  <MuiTab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 300,
  fontSize: theme.typography.pxToRem(16),
  fontFamily: 'Poppins',
  '&.Mui-selected': {
    color: '#000000',
  },
  color: '#8484A0'
}));
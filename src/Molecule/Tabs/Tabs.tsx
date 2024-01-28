import { styled } from '@mui/material/styles';
import { Tabs as MuiTabs } from '@mui/material';
import { SyntheticEvent } from 'react';

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: SyntheticEvent, newValue: number) => void;
}

export const Tabs = styled((props: StyledTabsProps) => (
  <MuiTabs
    {...props}
    variant='fullWidth'
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  marginTop: "10px",
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 106,
    width: '100%',
    backgroundColor: '#5756B3',
  },
});

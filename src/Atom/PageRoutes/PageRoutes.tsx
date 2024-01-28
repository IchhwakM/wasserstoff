import { Box } from '@mui/material'
import { SyntheticEvent, useState } from 'react';
import { Tab, Tabs } from '../../Molecule';

export const PageRoutes = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '40%' }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Statistics" />
        <Tab label="Overview" />
        <Tab label="Dashboard" />
        <Tab label="Analytics" />
      </Tabs>
    </Box>
  )
}

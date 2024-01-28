import { useRef } from 'react';
import { Box } from '@mui/material';

import { Map } from './Map';
import { useDimensions } from '../../hooks';
import { hexData } from '../../Assets/Data/MapData/hexData';

export const MapContainer = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartSize = useDimensions(chartRef);

  return (
    <Box
      ref={chartRef}
      display="flex"
      justifyContent="center"
      overflow="hidden"
      height="755.95px"
      width="1341px"
    >
      <Map data={hexData} width={chartSize.width} height={chartSize.height} />
    </Box>
  );
};

import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const CircularProgressBar = (
  props: CircularProgressProps & { value: number, barColor: string },
) => {
  const barColor = props.barColor;
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        sx={{
          color: "#DBDFF1",
          position: 'absolute',
          left: '-0'
        }}
        size="88px"
        thickness={2}
        variant="determinate"
        {...props}
        value={100}
      />
      <CircularProgress thickness={2} size="88px" variant="determinate" {...props}
        sx={{
          color: barColor,
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          fontSize="24px"
          fontFamily="Poppins"
          fontWeight="300"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

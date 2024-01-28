import { Stack, Typography } from "@mui/material"
import { CircularProgressBar } from "../../Atom";

type Props = {
  title: string;
  amount: string;
  color: string;
  percentage: number;
}
export const PercentageChart = (props: Props) => {
  const { title, amount, color, percentage } = props

  return (
    <Stack direction="row" spacing="18px" width="220px">
      <CircularProgressBar value={percentage} barColor={color} />
      <Stack direction="column" justifyContent="center">
        <Typography fontSize="20px" fontFamily='Poppins' fontWeight={400} color="#383874">
          {amount}
        </Typography>
        <Typography fontSize="16px" fontFamily='Poppins' fontWeight={300} color="#383874">
          {title}
        </Typography>
      </Stack>
    </Stack>
  )
}

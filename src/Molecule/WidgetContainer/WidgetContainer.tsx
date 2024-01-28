import { Stack, Typography } from "@mui/material";

import { useGetStyles } from "../../hooks";
import { IconContainer } from "../../Atom";

type Props = {
  title: string;
  amount: string;
  iconBgColor: string;
  iconText: string;
  size: "medium" | "small"
}

export const WidgetContainer = (props: Props) => {
  const { title, amount, iconBgColor, iconText, size } = props

  const {
    amountStyles: { fontSizeAmt, fontWeightAmt },
    titleStyles: { fontSize, fontWeight },
    spacing
  } = useGetStyles(size);

  return (
    <Stack direction="row" spacing={spacing} display="flex" alignItems="center">
      <IconContainer color={iconBgColor} iconText={iconText} size={size} />
      <Stack direction="column" justifyContent="center">
        <Typography fontSize={fontSize} fontFamily='Poppins' fontWeight={fontWeight} color="#383874">
          {title}
        </Typography>
        <Typography fontSize={fontSizeAmt} fontFamily='Poppins' fontWeight={fontWeightAmt} color="#383874">
          {amount}
        </Typography>
      </Stack>
    </Stack>
  )
}
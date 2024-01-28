import { Box } from "@mui/material";
import { useGetIcons, useGetStyles } from "../../hooks";

type Props = {
  iconText: string;
  size: string;
  color: string;
}

export const IconContainer = ({ iconText, size = "medium", color }: Props) => {
  const {
    iconStyles: { borderRadius, height, iconHeight, iconWidth, width }
  } = useGetStyles(size);

  const icon = useGetIcons(iconText);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius={borderRadius}
      bgcolor={color}
      height={height}
      width={width}>
      <img
        src={icon}
        alt="icon"
        width={iconWidth}
        height={iconHeight} />
    </Box>
  )
}

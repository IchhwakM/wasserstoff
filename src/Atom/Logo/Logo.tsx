import { Stack, Typography } from "@mui/material";
import wstfLogo from "../../Assets/images/wstf-logo 1.svg";

export const Logo = () => {
  return (
    <Stack direction="row">
      <img src={wstfLogo} alt="wstf-logo" width="40px" height="40px" />
      <Typography fontSize="20.51px" color="#000000" fontFamily="Archivo" fontWeight={400} lineHeight="22px" padding="8px">WASSERSTOFF</Typography>
    </Stack>
  )
}

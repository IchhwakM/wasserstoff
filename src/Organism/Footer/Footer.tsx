import { Stack, Typography } from "@mui/material"

export const Footer = () => {
  return (
    <Stack
      component="footer"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="#ffffff"
      height="38px"
      p="0 67px">
      <Typography
        color="#5A5A89"
        fontFamily="Roboto"
        fontWeight={700}
        textTransform="uppercase"
        fontSize="10px">
        Orion data visualisation
      </Typography>
      <Typography
        color="#5A5A89"
        fontFamily="Roboto"
        fontWeight={700}
        fontSize="10px">
        2022
      </Typography>
    </Stack>
  )
}

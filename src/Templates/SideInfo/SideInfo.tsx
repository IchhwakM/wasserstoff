import { Stack, Typography } from "@mui/material"
import { sideInfo } from "../../Assets/Data/SideInfoData/data"
import { PercentageChart, WidgetContainer } from "../../Molecule"

export const SideInfo = () => {
  return (
    <Stack direction="column" spacing="60px">
      <Typography fontSize="20.51px" fontFamily='Poppins' fontWeight={500}>
        WSTF FRONT-END HACKATHON
      </Typography>
      <Stack pl="4px" spacing="100px">

        <Stack direction="column">
          <Stack direction="row" spacing={3} alignItems="end">
            <Typography fontSize="20px" fontFamily='Poppins' fontWeight={600} color="#383874">
              All users
            </Typography>
            <Typography fontSize="10px" fontFamily='Poppins' fontWeight={500} color="#383874">
              DETAIL <strong>&gt;</strong>
            </Typography>
          </Stack>
          <Typography fontSize="72px" fontFamily='Poppins' fontWeight={500} color="#383874">
            2,431,340
          </Typography>
        </Stack>
        {sideInfo && (
          <Stack spacing="30px">
            {sideInfo.map(({ id, amounts, color, icon, name }) => (
              <WidgetContainer key={id} title={name} amount={amounts} iconBgColor={color} iconText={icon} size="medium" />
            ))}
          </Stack>
        )}
        <Stack direction="row" spacing="50px" width="max-content">
          <PercentageChart amount="92,980" color="#023AFF" percentage={27} title="Active users" />
          <PercentageChart amount="22,652" color="#00B929" percentage={67} title="New users" />
        </Stack>
      </Stack>
    </Stack>
  )
}

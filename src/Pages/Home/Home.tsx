import { Stack } from "@mui/material"
import { MapContainer, SideInfo } from "../../Templates"
import { TimelineChart } from "../../Molecule"
import { timelineData } from "../../Assets/Data/TimelineData/data"


export const Home = () => {
  return (
    <Stack spacing={4} p="23px 56px">
      <Stack direction="row">
        <SideInfo />
        <MapContainer />
      </Stack>
      <TimelineChart amount="10,430" title="Sales Figures" data={timelineData} />
    </Stack>
  )
}

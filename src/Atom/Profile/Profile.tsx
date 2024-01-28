import { Stack } from "@mui/material";

import PeopleIcon from "../../Assets/images/people.svg";
import ControlIcon from "../../Assets/images/tune.svg";

export const Profile = () => {
  return (
    <Stack direction="row" spacing="26px">
      <img src={PeopleIcon} alt="people-logo" height="24px" width="24px" />
      <img src={ControlIcon} alt="control-logo" height="24px" width="24px" />
    </Stack>
  )
}

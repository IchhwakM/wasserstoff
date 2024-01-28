import { useState } from "react";
import { Stack, Typography } from "@mui/material"

import { ColumnGraph } from "../../Atom";
import { GraphContainer } from "../../Templates/Graph";

type Props = {
  title: string;
  amount: string;
  data: number[];
}
export const TimelineChart = (props: Props) => {
  const { title, amount, data } = props

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack
      direction="row"
      borderRadius="10px"
      bgcolor="#ffffff"
      boxShadow={`
        0px 2.767256498336792px 2.2138051986694336px 0px #6C49AC05,
        0px 6.650102138519287px 5.32008171081543px 0px #6C49AC07,
        0px 12.521552085876465px 10.017241477966309px 0px #6C49AC09,
        0px 22.3363094329834px 17.869047164916992px 0px #6C49AC0B,
        0px 41.777610778808594px 33.422088623046875px 0px #6C49AC0D,
        0px 100px 80px 0px #6C49AC12
      `}
    >
      <Stack onClick={handleClickOpen} spacing="2px" direction="column" p="14px 32px" width="132px">
        <Typography component="div" fontSize="14px" fontFamily='Roboto' fontWeight={400} color="#383874">
          {title}
        </Typography>
        <Typography fontSize="22px" fontFamily='Poppins' fontWeight={600} color="#383874">
          ${amount}
        </Typography>
      </Stack>
      <ColumnGraph data={data} />
      <GraphContainer open={open} handleClose={handleClose} />

    </Stack>
  )
}

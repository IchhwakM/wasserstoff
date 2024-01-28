import { Box, Dialog, Stack, Typography } from "@mui/material"
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { Graph } from "./Graph"
import { data } from "../../Assets/Data/GraphData/data"

type Props = {
  open: boolean;
  handleClose: () => void;
}

export const GraphContainer = ({ open, handleClose }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle>
        <Stack direction="row" justifyContent="space-between">
          <Typography fontSize="18.4px" fontFamily='Poppins' fontWeight={600} color="#171725">
            Sales Figures
          </Typography>
          <Stack direction="row" spacing={16} justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box bgcolor="#A46CE9" height="12px" width="12px" borderRadius="6px" />
              <Typography fontSize="16.1px" fontFamily='Roboto' fontWeight={400} color="#171725">
                Sales
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box bgcolor="#FAE634" height="12px" width="12px" borderRadius="6px" />
              <Typography fontSize="16.1px" fontFamily='Roboto' fontWeight={400} color="#171725">
                Users
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box bgcolor="#FC717D" height="12px" width="12px" borderRadius="6px" />
              <Typography fontSize="16.1px" fontFamily='Roboto' fontWeight={400} color="#171725">
                Product
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box bgcolor="#695DFB" height="12px" width="12px" borderRadius="6px" />
              <Typography fontSize="16.1px" fontFamily='Roboto' fontWeight={400} color="#171725">
                Team
              </Typography>
            </Stack>
          </Stack>

        </Stack>
      </DialogTitle>
      <DialogContent >
        <Graph data={data} />
      </DialogContent>
    </Dialog>
  );
}
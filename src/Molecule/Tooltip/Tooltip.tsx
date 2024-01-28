import { Tooltip as MUITooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";

export const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MUITooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: '6px 10px',
    backgroundColor: '#ffffff',
    color: '#000000',
    borderRadius: '16px',
    boxShadow: '0px 20px 25px rgba(0, 0, 0, 0.3)',
    '& .MuiTooltip-arrow': {
      color: '#ffffff',
    },
  }
});
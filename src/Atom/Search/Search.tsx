import { Stack } from "@mui/material"
import SearchIcon from "../../Assets/images/Search.svg";

export const Search = () => {
  return (
    <Stack position="relative">
      <input type="search" style={{ backgroundColor: '#EEF0FA', borderRadius: '8px', border: 'none', outline: 'none', width: '520px', height: '32px' }} />
      <img
        style={{ position: 'absolute', left: '489px', top: '4px', padding: '4px' }}
        src={SearchIcon}
        alt="icon"
        width="15.24px"
        height="15.24px" />
    </Stack>
  )
}

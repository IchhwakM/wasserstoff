import { Box, Stack } from '@mui/material'

type Props = { data: number[]; };

export const ColumnGraph = (props: Props) => {
  return (
    <Stack spacing="2px" p="20px 32px" overflow="hidden">
      <Stack direction="row" spacing="2px" alignItems="end">
        {props.data.length &&
          props.data.map((e, i) =>
            <Box bgcolor={i > 25 && i < 50 ? "#FF708B" : "#DBDFF1"} height={e / 100} maxWidth="20px" width="calc(100vw - 98vw)" />
          )
        }
      </Stack>
      <Stack direction="row" bgcolor="#8676FF" height="6px" borderRadius="100px" ml="10px !important" width="99%">
        <Box bgcolor="#FFA63F" height="6px" width="20%" borderRadius="100px 0 0 100px" />
        <Box bgcolor="#FF708B" height="6px" width="50%" />
      </Stack>
    </Stack>
  )
}

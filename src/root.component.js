import { Box, Stack } from "@mui/material"
import Like from "./components/Like"
import Share from "./components/Share"

export default function Root(props) {
  const boxStyle = {
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    border: "1px solid #c4c4c4",
    padding: "1rem",
    width: "fit-content"
  }

  return <Box sx={ boxStyle }>
    <Stack spacing={1}>
      <Like />

      <Share />
    </Stack>
  </Box>
}
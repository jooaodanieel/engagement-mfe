import { Box, Stack } from "@mui/material"
import { useEffect, useState } from "react"

import Like from "./components/Like"
import Share from "./components/Share"
import useReactionCard from "./hooks/useReactionCard"


export default function Root(props) {
  const [uuid, setUuid] = useState()
  const { likes, shares } = useReactionCard(uuid)

  function copyURL() {
    navigator.clipboard.writeText("https://digidojo-blog.onrender.com/posts/" + uuid)
  }

  useEffect(() => {
    const id = window.location.pathname
      .split("/")
      .filter((seg) => seg !== "")[1]

    setUuid(id)
  }, [uuid])

  const boxStyle = {
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    border: "1px solid #c4c4c4",
    padding: "1rem",
    width: "fit-content"
  }

  return <Box sx={ boxStyle }>
    <Stack spacing={1}>
      <Like likes={likes} />

      <Share shares={shares} onShare={copyURL} />
    </Stack>
  </Box>
}
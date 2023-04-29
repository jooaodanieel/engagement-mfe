import { Chip } from "@mui/material";
import { useState } from "react";

export default function Share({  }) {
  const [lock, setLock] = useState(false)
  const [nShares, setNShares] = useState(0)

  function defaultLabel() {
    return `${nShares} shares`
  }

  const [shareLabel, setShareLabel] = useState(defaultLabel())

  function increaseShares() {
    if (lock) return

    setLock(true)
    navigator.clipboard.writeText("https://google.com")
    setShareLabel("URL copied")
    setTimeout(() => {
      setNShares(nShares + 1)
      setShareLabel(defaultLabel())
      setLock(false)
    }, 500)
  }

  return <Chip
    sx={{ minWidth: "7rem" }}
    label={shareLabel}
    variant="outlined"
    onClick={increaseShares}
  />
}
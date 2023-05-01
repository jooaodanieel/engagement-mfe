import { Chip } from "@mui/material";
import { useEffect, useState } from "react";

export default function Share({ shares, onShare }) {
  const [lock, setLock] = useState(false)
  const [label, setLabel] = useState(`${shares} shares`)

  useEffect(() => {
    setLabel(`${shares} shares`)
  }, [shares])

  function increaseShares() {
    if (lock) return

    setLock(true)
    onShare()
  }

  return <Chip
    sx={{ minWidth: "7rem" }}
    label={label}
    variant="outlined"
    onClick={increaseShares}
  />
}
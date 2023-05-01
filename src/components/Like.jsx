import { Chip } from "@mui/material";
import { useState } from "react";

export default function Like({ likes }) {
  const [alreadyLiked, setAlreadyLiked] = useState(false)

  function increaseLikes() {
    if (alreadyLiked) {
      alert("you already liked this post")
      return
    }

    setAlreadyLiked(true)
  }

  return <Chip
    label={likes + " likes"}
    variant="outlined"
    onClick={increaseLikes}
  />
}
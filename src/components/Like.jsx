import { Chip } from "@mui/material";
import { useEffect, useState } from "react";

export default function Like({ likes, onLike }) {
  const [alreadyLiked, setAlreadyLiked] = useState(false)
  const [label, setLabel] = useState(likes + " likes")

  function increaseLikes() {
    if (alreadyLiked) {
      alert("you already liked this post")
      return
    }

    onLike()

    setAlreadyLiked(true)
  }

  useEffect(() => {
    if (alreadyLiked) setLabel("liked")
    else setLabel(likes + " likes")
  }, [alreadyLiked, likes])

  return <Chip
    label={label}
    variant="outlined"
    onClick={increaseLikes}
  />
}
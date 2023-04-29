import { Chip } from "@mui/material";
import { useEffect, useState } from "react";

export default function Like({  }) {
  const [nLikes, setNLikes] = useState(0)
  const [alreadyLiked, setAlreadyLiked] = useState(false)

  function increaseLikes() {
    if (alreadyLiked) {
      alert("you already liked this post")
      return
    }

    setAlreadyLiked(true)
    setTimeout(() => setNLikes(nLikes + 1), 137)
  }

  useEffect(() => {
    const maybeId = window.location.pathname.split("/")[2]
    console.log(maybeId)
  }, [])

  return <Chip
    label={nLikes + " likes"}
    variant="outlined"
    onClick={increaseLikes}
  />
}
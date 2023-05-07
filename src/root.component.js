import { useEffect, useState } from "react"

import { CardContainer } from "@digidojo-blog/design-system"

import Like from "./components/Like"
import Share from "./components/Share"
import useReactionCard from "./hooks/useReactionCard"
import useLikePost from "./hooks/useLikePost"


export default function Root(props) {
  const [uuid, setUuid] = useState()
  const { likes, shares } = useReactionCard(uuid)
  const like = useLikePost(uuid)

  function copyURL() {
    navigator.clipboard.writeText("https://digidojo-blog.onrender.com/posts/" + uuid)
  }

  useEffect(() => {
    const id = window.location.pathname
      .split("/")
      .filter((seg) => seg !== "")[1]

    setUuid(id)
  }, [uuid])

  return <CardContainer>
    <Like likes={likes} onLike={like} />

    <Share shares={shares} onShare={copyURL} />
  </CardContainer>
}
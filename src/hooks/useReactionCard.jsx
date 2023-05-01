import { useEffect, useState } from "react";

import axios from "../utils/axios"

export default function useReactionCard(uuid) {
  const [reactions, setReactions] = useState({})

  async function fetchReactionCard(uuid) {
    if (uuid === undefined) return 
    const { data } = await axios.get(`/posts/${uuid}/reactions`)
    setReactions(data)
  }

  useEffect(() => fetchReactionCard(uuid), [uuid])

  return reactions
}
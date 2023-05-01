import axios from "../utils/axios";

export default function useLikePost(uuid) {
  async function likePost() {
    try {
      await axios.put(`/posts/${uuid}/likes`)
    } catch(e) {
      console.log(e)
    }
  }

  return likePost
}
import networkRequest from "./axios";

export default (params) => {
  return networkRequest({url: "/post", params, method: "POST"})
}
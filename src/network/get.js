import networkRequest from "./axios";

export default (params) => {
  return networkRequest({url: "/get", params})
}
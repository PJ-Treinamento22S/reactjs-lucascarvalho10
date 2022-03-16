import axios from "axios";

const api = axios.create({
  baseURL: "https://piupiuwer.polijrinternal.com",
});
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDczODU3MTEsImV4cCI6MTY0NzQ3MjExMSwic3ViIjoiMDgyMmFiMTktMGNmZC00NWViLTgwNzMtNDNkNDAzYmZjMWZkIn0.FP0prtUBtldcDmQCwVoCXckFcxbW-fQUpmssGoQqOCg`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(api.defaults.headers as any).Authorization = `Bearer ${token}`;

export default api;

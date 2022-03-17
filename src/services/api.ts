import axios from "axios";

const api = axios.create({
  baseURL: "https://piupiuwer.polijrinternal.com",
});
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDc0NjA4NzAsImV4cCI6MTY0NzU0NzI3MCwic3ViIjoiZTE3NjNhYzgtMmQwOS00MWI3LTkzYjctZDhiY2M3ZjJkZDcyIn0.jfwXAF1qF61BnNKqL4FFE9f0X0uRN1cJMSUC1xA9MGE`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(api.defaults.headers as any).Authorization = `Bearer ${token}`;

export default api;

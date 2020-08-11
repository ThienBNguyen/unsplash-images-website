import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID C_wkQ6CDAPfJCoXyXMCDsQUN2v2WZCxt1DxmBoQrKq8"
  }
});

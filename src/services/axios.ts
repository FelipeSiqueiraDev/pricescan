import axios from "axios";

export const api = axios.create({
  baseURL: "https://gestaovarejo.faridnet.com.br/",
  timeout: 5000,
  timeoutErrorMessage: "Tempo limite atingido. Sem resposta do servidor",
});

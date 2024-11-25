import { ENDPOINT_URL } from "../constants/options";

export async function apiFetch<ResponseT>(
  endpoint: string,
  options: RequestInit = {}
) {
  if (!endpoint.startsWith("/")) endpoint = "/" + endpoint;
  // if (!endpoint.includes("?")) endpoint += "?";
  const requestURL = ENDPOINT_URL.concat(endpoint);
  return await fetch(requestURL, {
    ...options,
    headers: {
      ...options.headers,
    },
  })
    .then(async (response) => {
      if (response.ok) return await response.json();
      return await response.json().then((error) => {
        throw new Error(error.message);
      });
    })
    .then((response) => {
      return response as ResponseT;
    });
}

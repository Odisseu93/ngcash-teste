import { Api } from "../../../services/axios-config";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("a", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const data = localStorage.getItem("a");

  if (!data) {
    return null;
  }

  const user = JSON.parse(data);

  return user ?? null;
}

export async function Loginrequest(email: string, password: string) {
  try {
    const request = await Api.post('login', { email, password });
    return request.data;
  } catch (error) {
    return null;
  }
}

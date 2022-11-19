import { useContext } from "react";
import { Authcontext } from ".";

export const useAuth = () => {
  const context = useContext(Authcontext);

  return context;
};

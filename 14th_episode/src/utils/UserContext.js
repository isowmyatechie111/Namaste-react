import { createContext } from "react";

const UserContext = createContext({
  logginUser: "DefaultUser",
});

export default UserContext;

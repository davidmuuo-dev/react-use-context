import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export default function ComponentA() {
  const [user, setUser] = useState({ name: "David Muuo" });
  return (
    <div className="border-2 border-gray-50 p-3">
      This is component A
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
      <button
        className="bg-sky-500 rounded-md p-2 m-1 text-black"
        onClick={() => setUser({ name: "Irene Mutheu" })}
        type="button"
      >
        New User
      </button>
    </div>
  );
}

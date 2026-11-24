import { useContext } from "react";
import { UserContext } from "./ComponentA";

export default function ComponentD() {
  const user = useContext(UserContext);
  return (
    <div className="border-2 border-blue-500" p-3>
      This is component D<p>{`GOODBYE ${user.name}`}</p>
    </div>
  );
}

import { useContext } from "react";
import ComponentD from "./ComponentD";
import { UserContext } from "./ComponentA";

export default function ComponentC() {
  const user = useContext(UserContext);
  return (
    <div className="border-2 border-green-500 p-3">
      This is component C<p>{user.name}</p>
      <ComponentD />
    </div>
  );
}

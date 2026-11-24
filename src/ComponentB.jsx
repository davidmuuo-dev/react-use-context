import ComponentC from "./ComponentC";

export default function ComponentB({ user }) {
  return (
    <div className="border-2 border-red-500 p-3">
      This is component B<p>{`Hello ${user.name}`}</p>
      <ComponentC />
    </div>
  );
}

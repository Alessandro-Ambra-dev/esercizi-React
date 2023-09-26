import { useMemo } from "react";

export function FilteredList({ persons }) {
  const filtered = persons.filter((el) => el.age > 18);
  const mapped= filtered.map((el, index)=><li key={index}>{el.name}</li>)

  let students = useMemo(()=>mapped,[mapped])
  return (
    <div>
      <ul>{students}</ul>
    </div>
  );
}

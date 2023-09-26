import React from "react";
import { FilteredList } from "./FilteredList";

export function App() {
  return (
    <div>
      <FilteredList
        persons={[
          { name: "Alessandro", age: 25, id: 1 },
          { name: "Vincenzo", age: 27, id: 2 },
          { name: "Antonio", age: 22, id: 3 },
          { name: "Caio", age: 17, id: 4 },
        ]}
      />
    </div>
  );
}

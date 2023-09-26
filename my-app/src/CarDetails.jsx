import { useEffect, useRef } from "react";

export function CarDetails({ initialStatus }) {
  const initialData = useRef("");

  useEffect(() => {
    initialData.current.model.value = initialStatus.model;
    initialData.current.prodYear.value = initialStatus.prodYear;
    initialData.current.color.value = initialStatus.color;
  });

  return (
    <div>
      <form ref={initialData}>
        <input type="text" name="model" />
        <input type="text" name="prodYear" />
        <input type="text" name="color" />
        <input type="submit" />
      </form>
    </div>
  );
}

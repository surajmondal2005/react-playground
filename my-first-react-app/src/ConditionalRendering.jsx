export function ConditionRendering() {
  const animals = ["Lion", "Tiger"];

  return (
    <div>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </div>
  );
}

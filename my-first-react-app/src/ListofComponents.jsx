function List2(props) {
  return <li>{props.animal}</li>;
}

function List1(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <List2 key={animal} animal={animal} />;
      })}
    </ul>
  );
}

export function ListOfComponents() {
  const animals = ["Lion", "Tiger"];

  return (
    <div>
      <List1 animals={animals} />
    </div>
  );
}

function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };
  return <button style={buttonStyle}>{props.text}</button>;
}

function Button1({text, color, fontSize}) {
  const buttonStyle = {
    color,
    fontSize: fontSize + "px",
  };
  return <button style={buttonStyle}>{text}</button>;
}

export default function Props() {
  return (
    <div>
      <Button text="Click Me!" color="blue" fontSize={20} />
      <Button1 text="Prop Destructuring!" color="blue" fontSize={20} />
    </div>
  );
}

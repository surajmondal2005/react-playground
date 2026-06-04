function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };
  return <button style={buttonStyle}>{props.text}</button>;
}

function Button1({ text, color, fontSize }) {
  const buttonStyle = {
    color,
    fontSize: fontSize + "px",
  };
  return <button style={buttonStyle}>{text}</button>;
}
function Button2({ text = "Click Me", color = "Black", fontSize = 12 }) {
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
      <Button1 text="Prop Destructuring!" color="red" fontSize={20} />
      <Button2 />
    </div>
  );
}

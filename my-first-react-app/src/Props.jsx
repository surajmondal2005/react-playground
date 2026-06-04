function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };
  return <button style={buttonStyle}>{props.text}</button>;
}
export default function Props() {
  return <Button text="Click Me!" color="blue" fontSize={20} />;
}

function Button({ text, handleClick }) {
  return <button onClick={handleClick}>{text}</button>;
}

export default function PropsAsFunctions() {
  const handleButtonClick = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div>
      <Button handleClick={handleButtonClick} text="Hello" />
    </div>
  );
}

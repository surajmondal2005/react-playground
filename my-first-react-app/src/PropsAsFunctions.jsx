function Button({ text, handleClick }) {
  return <button onClick={handleClick}>{text}</button>;
}

export default function PropsAsFunctions() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button
        handleClick={() => handleButtonClick("https://www.theodinproject.com")}
        text="Hello"
      />
    </div>
  );
}
/*Here for passing link as parameter we have to call an anonymous function that that calls the handleClick function with an argumet */

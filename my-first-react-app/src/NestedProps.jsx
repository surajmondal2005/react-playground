function Avatar() {
  return <img src="https://via.placeholder.com/100" alt="avatar" />;
}

function Profile() {
  return (
    <div className="card">
      <Avatar />
      <h2>Suraj Mondal</h2>
      <p>Computer Science Student</p>
    </div>
  );
}

export default function NestedProps() {
  return <Profile />;
}

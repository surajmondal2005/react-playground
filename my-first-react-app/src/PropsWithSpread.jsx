function Avatar({ name, size }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Size: {size}</p>
    </div>
  );
}

function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

export default function PropsWithSpread() {
  return (
    <div>
      <Profile name="Suraj" size={100} />
    </div>
  );
}

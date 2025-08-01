export default function Input() {
  return (
    <>
      <div className="log-block">
        <div className="email">
          <input name="Email" type="email" placeholder="Email" />
        </div>
        <div className="passw">
          <input name="Password" type="password" placeholder="Password" />
        </div>
      </div>
    </>
  );
}

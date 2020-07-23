import React from "react";
function Login() {
  const [login, setLogin] = React.useState([]);
  const [name, setName] = React.useState([]);
  const [email, setEmail] = React.useState([]);
  const [password, setPassword] = React.useState([]);
  const Callme = () => {
    fetch("http://localhost:5000/login")
      .then((response) => response.json())
      .then((data) => setLogin(data));
    console.log("login", login);
  };
  useEffect(() => {
    Callme();
  }, []);

  function display_for_login() {
    console.log(name, email, password);
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setName("");
        setEmail("");
        setPassword("");

        Callme();
      });
  }
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: "600px",
        width: "800px",
        marginLeft: "300px",
      }}
    >
      {" "}
      <center>
        <h1>REGISTRATION DETAILS </h1>
        <label>enter your name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>enter your email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>enter your password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button onClick={() => display_for_login()}>submit</button>
      </center>
    </div>
  );
}

export default Login;

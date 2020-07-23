import React from "react";

const App=()=> {
  const[Array1,setArray1]=React.useState([]);
  const [first, setFirst] = React.useState([]);
  const [last, setLast] = React.useState([]);
  const [email, setEmail] = React.useState([]);
  const [password, setPassword] = React.useState([]);
  const [repassword, setRepassword] = React.useState([]);
  const[marr,setMarr]=React.useState([]);
  const[country,setCountry]=React.useState([]);
  const[food,setFood]=React.useState([]);
  const[state,setState]=React.useState([]);
  const[select,setSelect]=React.useState([]);
  const selection = [
    {
      name: "INDIA",
      states: ["tamilnadu", "kerala", "Delhi"],
    },
    {
      name: "USA",
      states: ["New York", "California", "Texas"],
    },
  ];
  
  
  function handleEnter(event) {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }
 function display(){
   if(password==repassword){
              return(
            
   setArray1(Array1.concat([{first,last,email,password,marr,food,country},]),

   
//alert(first,last,email,password,repassword);
  setFirst(""),
  setLast(""),
  setEmail(""),
  setPassword(""),
  setRepassword(""),
  setMarr(""),
  setFood(""),
  setCountry("")
   )            
              )}
              else 
              {
                alert("incorrect password")
              }
 }

  
  return (
    <div>
      <div
        style={{
          backgroundColor: "gray",
          width: "630px",
          height: "800px",
          float: "left",
        }}
      > <form>
        <label>enter your first name</label>
        <input
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          onKeyDown={handleEnter}
        />
        <br></br>
        <br></br>
        <label>enter your last name</label>
        <input
          type="text"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          onKeyDown={handleEnter}
        />
        <br></br>
        <br></br>
        <label>enter your email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleEnter}
        />
        <br></br>
        <br></br>
        <label>enter your password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleEnter}
        />
        <br></br>
        <br></br>
        <label>enter your repassword</label>
        <input
          type="text"
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
          onKeyDown={handleEnter}
        />
        </form>
        <br></br>
        <br></br>
        <label>Matrial status</label>

        <form action="/action_page.php">
          <input type="radio"  name="status" value="single" onChange={(e)=>setMarr(e.target.value)} onKeyDown={handleEnter} />
          <label >Single</label>
          <br></br>
          <input type="radio" name="status" value="married" onChange={(e)=>setMarr(e.target.value)} onKeyDown={handleEnter}/>
          <label >Married</label>
          <br></br>
          <input type="radio" name="status" value="cant say" onChange={(e)=>setMarr(e.target.value)} onKeyDown={handleEnter}/>
          <label >Can't say</label>
        </form>
        <br></br>

        <form action="/action_page.php">
          <label> choose your food</label>
          <select name="foods" id="foods" onChange={(e)=>setFood(e.target.value)} onKeyDown={handleEnter}>
            <option value="Briyani">Briyani</option>
            <option value="Thandoori">Thandoori</option>
            <option value="Icecream">IceCream</option>
            <option value="Veg-rice">VegRice</option>
          </select>
          </form>
        <br></br>
        <form action="/action_page.php">
          <label> choose your country</label>
          <select name="country" id="country" onChange={(e)=>setCountry(e.target.value)} onKeyDown={handleEnter}>
            <option value="India">India</option>
            <option value="America">America</option>
          </select>
           </form>
          <br></br>
            <br />
            <label>Select state:</label>
            <select onChange={(e) => setSelect(e.target.value)} onKeyDown={handleEnter}>
              <option>Choose State</option>
              
            </select>
         <button onClick={()=>display()}>submit</button>
         
      </div>
      <div
        style={{
          backgroundColor: "red",
          width: "719px",
          height: "800px",
          float: "right",
        }}
      >
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Second Name</th>
              <th>Email</th>
              <th>password</th>
              <th>Marital status</th>
              <th> choice of your food</th>
              <th> enter your country</th>
              <th>select your state</th>
            </tr>
          </thead>
          <tbody>
            {Array1.map((val, index) => (
              <tr key={index}>
                <td>{val.first}</td>
                <td>{val.last}</td>
                <td>{val.email}</td>
                <td>{val.password}</td>
                <td>{val.marr}</td>
                <td>{val.food}</td>
                <td>{val.country}</td>
                <td>{val.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default App;

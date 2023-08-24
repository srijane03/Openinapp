import "./App.css";

function App(){
  return(
  <div className="App">
    <div className ="board">
      <h1>Board</h1>
    </div>
    

    <div className="signup">
      <h1>Sign In</h1>
    </div>
    <div className="sit">
      <p>Sign in to your account</p>
    </div>
    <button className="b1">
      <img
       src="https://img.icons8.com/?size=512&id=17949&format=png"
       alt="google"
       height="30"/>
      <p>Sign in with google</p>
    </button>
    <button className="b2">
      <img
       src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
       alt="apple"
       height="30"/>
      <p>Sign in with apple</p>
    </button>
    
    
    </div>
  
  
     
  )
}

export default App;


import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import { Navigate, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router'
import './App.css';
import env from 'react-dotenv'
function App() {

  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    console.log(jwtDecode(response.credential));
    // <Navigate to="/dashboard" />
    // let navigate = useNavigate();
    // navigate("/dashboard");
    // window.open('http://localhost:3000/dashboard')
    // <Redirect to="/dashboard" />
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: env.CLIENT_ID,
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }
    );
  }, [])

  // google.accounts.id.prompt(); 
  return (
    <div className="App">
      <div id="buttonDiv"></div>
    </div>
  );
}

export default App;

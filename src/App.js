
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import './App.css';
import { auth } from './firebase-config';

function App() {


  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [user, setUser] = useState({})
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })
  // const register = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // };

  // const login = async () => {

  // }


  return (
    <div className="App">
      <div>
        <h3>
          Register User
        </h3>
        <input placeholder='Email...' onChange={(e) => { setRegisterEmail(e.target.value) }} />
        <input type="password" placeholder='Password...' onChange={(e => { setRegisterPassword(e.target.value) })} />
        <button> Create User</button>
      </div>
      <div>
        <h3>Login</h3>
        <input placeholder='Email...' onChange={(e) => setLoginEmail(e.target.value)} />
        <input type="password" placeholder='Password...' onChange={(e) => setLoginPassword(e.target.value)} />
        <button>Login</button>
      </div>
      {user?.email}
      <button>Sign out</button>
    </div>
  );
}

export default App;

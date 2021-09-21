import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from './authSlice'

export default function Login() {
  const dispatch = useDispatch()

  const [inputs, setInputs ] = useState({username:'',password:''})

  const  handleChange = (e) =>{
    const {name, value} = e.target
    setInputs(prev => ({...prev, [name]: value}))
  }

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        
        <input style={styles.inputs} type="text" name="username" placeholder="username" onChange={handleChange} value={inputs.username} required/>
        <br />
        <input style={styles.inputs} type="text" name="password" placeholder="password" onChange={handleChange} value={inputs.password} required/>
        <br />
        <button style={styles.inputs}
          aria-label="Login"
          onClick={() => dispatch(loginUser(inputs))}
        >
          Login
        </button>
        <h4>Type in username and password to login</h4>
        <p>you can get credentials from cred.json file under 'astics/src/data'</p>
      </div>
    </div>
  )
}

const styles = {
  container:{
      minHeight:400,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      
  },
  form:{
    minHeight:300,
    minWidth:300,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputs:{
    minWidth:200,
    fontSize: 20,
    textAlign: 'center'
  },

}
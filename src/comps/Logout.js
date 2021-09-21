import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from './login/authSlice'



export default function Logout() {
    const username = useSelector(state=>state.auth.user)
    const dispatch = useDispatch()
    return (
        <div style={styles.container}>
            <div style={styles.form}>
                <h2>{username}, click below button to logout</h2>
                <button style={styles.inputs}
                aria-label="logout user"
                onClick={() => dispatch(logoutUser())}
                >
                Logout
                </button>
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
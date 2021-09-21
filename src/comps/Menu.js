import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink} from 'react-router-dom'

export default function Menu() {
    const username = useSelector(state => state.auth.user)
    return (
        <div style={styles.Menu}>
            
            {username ?<><NavLink exact to ="/inventory" activeStyle={{color: "blue"}}>Inventory</NavLink> &nbsp;&nbsp; <span>/</span> &nbsp;&nbsp; <NavLink exact to ="/Logout" activeStyle={{color: "blue"}}>Logout</NavLink></>
            : <><NavLink exact to ="/" activeStyle={{color: "blue"}}>Home</NavLink> &nbsp;&nbsp; <span>/</span> &nbsp;&nbsp;<NavLink exact to ="/login" activeStyle={{color: "blue"}}>Login</NavLink></>}
        </div>
    )
}

const styles = {
    Menu:{
        minHeight:100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}
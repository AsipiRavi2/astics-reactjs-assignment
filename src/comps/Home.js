import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
    const username = useSelector(state=>state.auth.user)
    return (
        <div style={styles.container}>
            <h1> Welcome to Astics Inventory Mangement {username}</h1>
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
    }
}
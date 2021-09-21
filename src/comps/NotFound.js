import React from 'react'

export default function NotFound() {
    return (
        <div style={styles.container}>
            <h3> Page Not Found </h3>
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
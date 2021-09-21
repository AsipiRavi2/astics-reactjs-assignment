import React, { useState, useEffect } from 'react'
import { useSelector} from 'react-redux'
import { useHistory } from 'react-router'
import itemsData from '../../data/items.json'

export default function Inventory() {
  // let history = useHistory();
  // const username = useSelector((state) => state.auth.user)

  const [itemInput, setItemInput] = useState({name:''})

  const [items, setItems] = useState(itemsData)

  const  handleChange = (e) =>{
    const {name, value} = e.target
    setItemInput(prev => ({...prev, [name]: value}))
  }

  const addItem = () => {
    if (itemInput.name.trim().length>0){
      itemsData.push(itemInput)
      setItems(itemsData)
      console.log(itemInput.name+"added successfully")
      setItemInput({name:''})
    }
    else{
      alert("Item name cannot be null")
    }

    
  }

  const deleteItem = (itemNo) => {
    itemsData.splice(itemNo,1)
    setItems(itemsData)
    console.log(itemNo+"deleted successfully")
    setItemInput({name:''})
  }

  // useEffect(() => {
  //   if(username){
  //       history.push("/inventory")
  //   }
  //   else{
  //       history.push("/login")
  //   }
  // }, [username,history])
  return (
    <div style={styles.container}>
      <div style={styles.form}>
        {/* <h2><u>Inventory</u></h2> */}
        {/* <h1>{username}</h1> */}
        <input style={styles.inputs} type="text" name="name" placeholder="Type item name" onChange={handleChange} value={itemInput.name} required/>

        <button style={styles.button}
          aria-label="Add Item"
          onClick={addItem}
        >
          + Item
        </button>
        {items.length>0 &&
        <div style={styles.items}>
            <table>
                <thead>
                    <tr>
                        <td><b>ItemName</b></td>
                        <td><b>Action</b></td>
                    </tr>
                </thead>
                <tbody>
                    {items && items.map((item,i)=><tr key={item.name+"-"+i}><td>{item.name}</td><td><button onClick={()=>{deleteItem(i)}}>Delete</button></td></tr>)}
                </tbody>
            </table>
        </div>
        } 
      </div>
    </div>
  )
}

const styles = {
    container:{
        minHeight:400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
    },
    form:{
      minHeight:100,
      minWidth:300,
    },
    inputs:{
      minWidth:200,
      fontSize: 20,
      textAlign: 'center'
    },
    button:{
        minWidth:100,
        fontSize: 20,
        textAlign: 'center'
    },
    items:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'10px',
        textAlign: 'left',
    }
  
  }
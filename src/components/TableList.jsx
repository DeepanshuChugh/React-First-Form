import React from 'react'
import './tablelist.css'

const TableList = ({formData,deleteItem}) => {
  return (
    
    <>
    {formData.map((el,ind)=>(
        <tr key={ind}>
      <td>{el.username}</td>
      <td>{el.age}</td>
      <td>{el.address}</td>
      <td>{el.salary}</td>
      <td>{el.dept}</td>
      <td><i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>{deleteItem(ind)}}/></td>
      </tr>

   ))}
   </>
   
  )
}

export default TableList
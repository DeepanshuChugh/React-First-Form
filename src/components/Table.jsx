import React from 'react'
import TableList from './TableList';
import './tablelist.css'


const Table = ({formData,deleteItem}) => {


  return (
    <table>
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Salary</th>
        <th>Department</th>
        <th>Delete</th>
        </tr>
        <TableList formData={formData}  deleteItem={deleteItem}/>
    </table>
  )
}

export default Table


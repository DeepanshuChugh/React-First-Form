import React, { useState } from 'react'
import Table from './Table';

const Form = () => {
  
    const [formData,setData]=useState([]);
    const [form,setForm] = useState({
        username:'',
        age:'',
        address:'',
        salary:'',
        dept:'',
        html:'',
        CSS:'',
        JS:'',
        id:new Date().getTime().toString()
      
    })

// ONCHANGE HANDLE
    const onChange = (e)=>{
        const name =e.target.name;
        const value =e.target.value;
        const checked = e.target.checked;
        const type = e.target.type;
        console.log(e);
        if(type==='checkbox')
        {
          setForm({...form,[name]:checked})
        }
        else{
          setForm({...form,[name]:value})
        }
    }

    // SUBMIT FORM
    const submitForm =(e)=>{
        e.preventDefault();
         if(form.age || form.username || form.address || form.salary )
         {
          const newData = {...form}
          setData([...formData, newData])
          setForm({ username:'',
          age:'',
          address:'',
          salary:'',
          dept:'',
          html:'',
          CSS:'',
          JS:'',}) 
         }
         else{
           alert("please fill all the fields")
         }
    }

    // DELETE ITEM
    const deleteItem =(id)=>{
      const updatedList=formData.filter((el,ind)=>{return ind !==id})
      setData(updatedList)
  }
  return (
      <>
    <form onSubmit={submitForm}>
        <div>
          <label>UserName</label>
          <input 
          type='text'
          placeholder='Enter User Name'
          name='username' 
          value={form.username} 
          onChange={onChange}/>
        </div>
      
        <div>
          <label>Age</label>
          <input 
          type='number'
          placeholder='Enter Age'
          name='age' 
          value={form.age} 
          onChange={onChange}/>
        </div>
      
        <div>
          <label>Address</label>
          <input 
          type='text'
          placeholder='Enter Your Address'
          name='address' 
          value={form.address} 
          onChange={onChange}/>
        </div>
      
        <div>
          <label>Salary:</label>
          <input 
          type='number'
          placeholder='Enter Salary'
          name='salary' 
          value={form.salary} 
          onChange={onChange}/>
        </div>

        <div>
          <label htmlFor="">Department:</label>
          <select name="dept"
          onChange={onChange} 
          value={form.dept}>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Operations">Operation</option>
          </select>
        </div>
      
      <div>
          Expertise:<br></br>
          <label>HTML</label>
          <input type="checkbox" 
          name="html"
          value={form.html} 
          onChange={onChange} />
          
          <label>CSS</label>
          <input type="checkbox" 
          name="CSS"
          value={form.CSS} 
          onChange={onChange} />
          
          <label>JS</label>
          <input type="checkbox" 
          name="JS"
          value={form.JS} 
          onChange={onChange} />
          
      </div>

      <div>
        <input type="file" onChange={onChange}/>
      </div>
      <button type='submit'>Submit</button>
        
       
    </form>

    <Table formData={formData} deleteItem={deleteItem} />

    {/* 
    <table>
   {<tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>}
   {formData.map((el)=>{return <tr>
      <td>{el.username}</td>
      <td>{el.age}</td>
      <td>{el.salary}</td>
      <td>{el.address}</td>
      <td>{el.dept}</td>

   </tr>})}
   </table>
    */}

    
   
    </>
  )
}

export default Form
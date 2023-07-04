import React,{useState} from "react";
// import noteContext from '../Context/notes/noteContext';

const Addnotes = () => {
  const [note, setnote] = useState({title:"",description:"",tag:""})
  const onchange=(e)=>{
    setnote({...note,[e.target.name]:e.target.value})
        }
  
  return (
    <div>
         <div className="container my-3">
     <h2>Add your notes</h2>
     <form className='my-3'>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onchange} minLength={5} required/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description" onChange={onchange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" onChange={onchange} />
  </div>
  
 
  <button    type="submit" className="btn btn-primary" >Add Note</button>
</form>
</div>
    
    </div>
  )
}

export default Addnotes
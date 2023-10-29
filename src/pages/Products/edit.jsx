import "./new.scss";
import Sidebar from "../../components/SideBar/SideBar";
import Navbar from "../../components/NavBar/NavBar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const EditProduct = ({onSubmit,defaultValue}) => {
  const [file, setFile] = useState("");
  const[formState,setFormState]=useState(defaultValue || {
    name:"",
    offer:"",
    price:"",
    sold:"",
    sales:""
  })
  
 const handleChange=(e)=>{
  setFormState({
    ...formState,
    [e.target.name]:e.target.value
  })
  
 }
 const handleSubmit=(e)=>{
  e.preventDefault();
  onSubmit(formState)
}
  return (
    <div>
      <div>
      <Navbar />
      <div className="flex">
             <Sidebar />
            
             
    <div className="new">
      
      <div className="newContainer">
        
        <div className="top">
          <h1>Edit Product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

             
                <div className="formInput" >
                  <label>Name</label>
                  <input name="name" type='text' placeholder='product name' value={formState.name} onChange={handleChange} />
                </div>
                <div className="formInput" >
                  <label>Quantity</label>
                  <input name="offer" type='text' placeholder='quantity' value={formState.offer} onChange={handleChange}/>
                </div>
                <div className="formInput" >
                  <label>Amount</label>
                  <input name="price" type='number' placeholder='amount' value={formState.price} onChange={handleChange}/>
                </div>
                <div className="formInput" >
                  <label>Category</label>
                  <input name="sold" type='text' placeholder='Category' value={formState.sold} onChange={handleChange}/>
                </div>
                <div className="formInput" >
                  <label>Category</label>
                  <input name="sales" type='text' placeholder='Category' value={formState.sales} onChange={handleChange}/>
                </div>
                <button type='submit' onClick={handleSubmit}  >Add Expense</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default EditProduct;
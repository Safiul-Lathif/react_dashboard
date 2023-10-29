import "./new.scss";
import Sidebar from "../../components/SideBar/SideBar";
import Navbar from "../../components/NavBar/NavBar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ProductService from "../../db/ProductService";
import { ref } from "firebase/storage";

const NewProduct = ({ onSubmit, defaultValue }) => {
  const [file, setFile] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    image: [],
    productLife: "",
    productVariants: [
      {
        size: "200 ml",
        price: "100",
        offer: "20",
      },
      {
        size: "200 ml",
        price: "400",
        offer: "20",
      },
      {
        size: "200 ml",
        price: "200",
        offer: "20",
      },
    ],
    offer: "",
    description: "",
    brand: "",
    quantity: "",
    packed: "",
    location: "",
    category: "",
    subCategory: "",
    count: "",
    price: "",
    priceList: {
      distributor: "140",
      wholeSale: "150",
      customerPrice: "180",
    },
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "image") {
      setFile(e.target.value[0]);
      // if (!file) {
      //   alert("Please upload an image first!");
      // }

      // const storageRef = ref(storage, `/files/${file.name}`);

      // // progress can be paused and resumed. It also exposes progress updates.
      // // Receives the storage reference and the file to upload.
      // const uploadTask = uploadBytesResumable(storageRef, file);

      // uploadTask.on(
      //   "state_changed",

      //   (err) => console.log(err),
      //   () => {
      //     // download url
      //     getDownloadURL(uploadTask.snapshot.ref).then((url) => {
      //       formState.image = [url];
      //     });
      //   }
      // );
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      var data = ProductService.addProducts({
        ...formState,
      });
      console.log("Document written with ID: ", data.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="new">
            <div className="newContainer">
              <div className="top">
                <h1>New Product</h1>
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
                        Image:{" "}
                        <DriveFolderUploadOutlinedIcon className="icon" />
                      </label>
                      <input
                        type="file"
                        id="file"
                        name="image"
                        value={formState.image}
                        onChange={handleChange}
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="formInput">
                      <label>Name</label>
                      <input
                        name="name"
                        type="text"
                        placeholder="product name"
                        value={formState.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="formInput">
                      <label>Quantity</label>
                      <input
                        name="quantity"
                        type="text"
                        placeholder="Quantity"
                        value={formState.quantity}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="formInput">
                      <label>Amount</label>
                      <input
                        name="price"
                        type="number"
                        placeholder="amount"
                        value={formState.price}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="formInput">
                      <label>Category</label>
                      <Select
                        sx={{
                          width: 250,
                          height: 40,
                          marginTop: "10px",
                        }}
                        name="category"
                        value={formState.category}
                        defaultValue={"BEVERAGE"}
                        onChange={handleChange}
                      >
                        <MenuItem value={"BEVERAGE"}>Beverage</MenuItem>
                        <MenuItem value={"COSMETICS"}>Cosmetics</MenuItem>
                        <MenuItem value={"ELECTRICAL"}>Electrical</MenuItem>
                        <MenuItem value={"ELECTRONICS"}>Electronics</MenuItem>
                        <MenuItem value={"FOOD"}>Food</MenuItem>
                        <MenuItem value={"GARMENTS"}>Garments</MenuItem>
                        <MenuItem value={"HOME APPLIANCES"}>
                          Home Appliances
                        </MenuItem>
                        <MenuItem value={"MEDICINES"}>Medicines</MenuItem>
                        <MenuItem value={"TOP SALE"}>Top Sale</MenuItem>
                      </Select>
                    </div>
                    <div className="formInput">
                      <label>Brand</label>
                      <input
                        name="brand"
                        type="text"
                        placeholder="Brand"
                        value={formState.brand}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="formInput">
                      <label>Sub Category</label>
                      <input
                        name="subCategory"
                        type="text"
                        placeholder="Sub Category"
                        value={formState.subCategory}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="formInput">
                      <label>Offer</label>
                      <input
                        name="offer"
                        type="text"
                        placeholder="Offer"
                        value={formState.offer}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="formInput">
                      <label>Product Life</label>
                      <input
                        name="productLife"
                        type="text"
                        placeholder="Product Life"
                        value={formState.productLife}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="formInput">
                      <label>Description</label>
                      <input
                        name="description"
                        type="text"
                        placeholder="Description"
                        value={formState.description}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="formInput">
                      <label>Count</label>
                      <input
                        name="count"
                        type="number"
                        placeholder="Count"
                        value={formState.count}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="formInput">
                      <label>Location</label>
                      <input
                        name="location"
                        type="text"
                        placeholder="Location"
                        value={formState.location}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="formInput">
                      <label>Packed</label>
                      <input
                        name="packed"
                        type="text"
                        placeholder="Packed"
                        value={formState.packed}
                        onChange={handleChange}
                      />
                    </div>
                    <button type="submit" onClick={handleSubmit}>
                      Add Product
                    </button>
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

export default NewProduct;

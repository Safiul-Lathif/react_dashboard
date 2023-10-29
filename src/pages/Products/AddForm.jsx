import { Close, ClosedCaption } from "@mui/icons-material";
import {
  Box,
  ButtonBase,
  Grid,
  Icon,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import "../Products/dataTable.scss";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../db/Firebase";
import Swal from "sweetalert2";

import { useAppStore } from "./AppStore";

export default function AddForm({ CloseEvent }) {
  const [name, setName] = useState("");
  const [offer, setOffer] = useState(0);
  const [price, setPrice] = useState(0);
  const [sold, setSold] = useState(0);
  const [sales, setSales] = useState(0);
  const setRows = useAppStore((state) => state.setRows);
  const empCollectionRef = collection(db, "products");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleOfferChange = (event) => {
    setOffer(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleSoldChange = (event) => {
    setSold(event.target.value);
  };
  const handleSalesChange = (event) => {
    setSales(event.target.value);
  };
  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const createUser = async () => {
    await addDoc(empCollectionRef, {
      name: name,
      offer: Number(offer),
      price: Number(price),
      sold: Number(sold),
      sales: Number(sales),
    });
    getUsers();
    CloseEvent();
    Swal.fire("Submitted", "Your file has been submitted.", "success");
  };
  return (
    <div>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Add Product
      </Typography>
      <Icon
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={CloseEvent}
      >
        <Close />
      </Icon>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            value={name}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            id="outlined-basic"
            label="Offer"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            value={offer}
            onChange={handleOfferChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            id="outlined-basic"
            label="Price"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            value={price}
            onChange={handlePriceChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span className="text-sm">RM</span>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            id="outlined-basic"
            label="Sold"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            value={sold}
            onChange={handleSoldChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            id="outlined-basic"
            label="Sales"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            value={sales}
            onChange={handleSalesChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <div className="pushable" style={{ alignContent: "center" }}>
              <div className="front">
                <span onClick={createUser}>Submit</span>
              </div>
            </div>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </div>
  );
}

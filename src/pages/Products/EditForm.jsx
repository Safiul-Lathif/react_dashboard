import { Close, ClosedCaption } from '@mui/icons-material'
import { Box, ButtonBase, Grid, Icon, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import "../Products/dataTable.scss"
import { collection,addDoc,getDocs, updateDoc, doc } from 'firebase/firestore'
import { db } from '../../db/Firebase'
import Swal from 'sweetalert2'

import { useAppStore } from './AppStore'
import { useEffect } from 'react'


export default function EditForm({fid,CloseEvent}) {
    const[name,setName]=useState("");
    const[offer,setOffer]=useState(0);
    const[price,setPrice]=useState(0);
    const[sold,setSold]=useState(0);
    const[sales,setSales]=useState(0);
    const setRows=useAppStore((state)=>state.setRows)
    const empCollectionRef=collection(db,"products")

    useEffect(()=>{
        console.log("FID"+fid.id);
        setName(fid.name);
        setOffer(fid.offer);
        setPrice(fid.price);
        setSold(fid.sold);
        setSales(fid.sales);
    },[])

    const handleNameChange=(event)=>{
        setName(event.target.value);
    }
    const handleOfferChange=(event)=>{
        setOffer(event.target.value);
    }
    const handlePriceChange=(event)=>{
        setPrice(event.target.value);
    }
    const handleSoldChange=(event)=>{
        setSold(event.target.value);
    }
    const handleSalesChange=(event)=>{
        setSales(event.target.value);
    }
    const getUsers=async ()=>{
        const data=await getDocs(empCollectionRef);
        setRows(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
      }
   
       
      const createUser=async()=>{
        const userDoc=doc(db,"products",fid.id);
        const newFields={
            name:name,
            offer:Number(offer),
            price:Number(price),
            sold:Number(sold),
            sales:Number(sales)
        };
        await updateDoc(userDoc,newFields);
            getUsers();
            CloseEvent();
            Swal.fire("Submitted","Your file has been updated.","success")
        };

  return (
    <div>
        <Box sx={{m:2}}/>
        <Typography variant='h5' align='center'>
            Edit Product
        </Typography>
        
        <Icon 
           style={{position:"absolute", top:"0",right:"0"}}
           onClick={CloseEvent}>
            <Close/>
         </Icon>
         <Box height={20} />
         <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField id="outlined-basic" label="Name" variant="outlined" size='small' sx={{minWidth:"100%"}} value={name} onChange={handleNameChange}
           />
            </Grid>
            <Grid item xs={6}>
            <TextField type='number' id="outlined-basic" label="Offer" variant="outlined" size='small' sx={{minWidth:"100%"}} value={offer} onChange={handleOfferChange}/>
            </Grid>
            <Grid item xs={6}>
            <TextField type='number' id="outlined-basic" label="Price" variant="outlined" size='small' sx={{minWidth:"100%"}} value={price} onChange={handlePriceChange}
             InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                       <span className='text-sm'>RM</span> 
                    </InputAdornment>
                )
            }}/>
            </Grid>
            <Grid item xs={6}>
            <TextField type='number' id="outlined-basic" label="Sold" variant="outlined" size='small' sx={{minWidth:"100%"}} value={sold} onChange={handleSoldChange}/>
            </Grid>
            <Grid item xs={6}>
            <TextField type='number'     id="outlined-basic" label="Sales" variant="outlined" size='small' sx={{minWidth:"100%"}} value={sales} onChange={handleSalesChange}/>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h5' align='center'>
                    <div className='pushable' style={{alignContent:"center"}}>
                        <div className='front'>
                <span onClick={createUser}>Submit</span>
                </div>
                </div>
                </Typography>
            </Grid>
         </Grid>
         <Box sx={{m:4}}/>
    </div>
  )
}
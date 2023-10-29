
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../LatestProducts/latestProducts.scss";
import "./Users.scss";
import Box from "@mui/material/Box";
import UserServices from "../../db/UserServices";
import user from '../../data/user.png'
const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    UserServices.getAllUsers().then((users) => {
      const fmtUsers = users.docs.map((row) => ({
        ...row.data(),
        name: capitalizeFirstLowercaseRest(row.data().name),
        type:'B2B'
        
      }));
      console.log(fmtUsers);
      setData(fmtUsers);
    });
  }, []);
  const capitalizeFirstLowercaseRest = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  const usersColumns = [
    {
      field: "name",
      headerName: "Name",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">

            <img className="cellImg" src={params.row.profile=== ''? user : params.row.profile} alt="avatar" 
            onError={
              () => params.row.profile = user}
            />
            <div className=" flex-auto" >
            {params.row.name} 
            {/* {params.row.id}  */}
            </div>
          </div>
        );
      },
    },
    {
      field: "emailId",
      headerName: "Email",
      width: 150,
    },
    {
      field: "location",
      headerName: "Location",
      width: 150,
    },
    {
      field: "number",
      headerName: "Number",
      width: 150,
    },
    {
      field: "password",
      headerName: "Password",
      width: 150,
    },
   
   
  ];

  return (
    <Box sx={{ height: 620, width: "100%" }}>
      <div className="datatable">
        <DataGrid
          className="datagrid"
          rows={data}
          columns={usersColumns}
          rowCount={data.length}
          checkboxSelection
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
        />
      </div>
    </Box>
  );
}
export default Users
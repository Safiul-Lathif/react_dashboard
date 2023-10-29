import { DataGrid } from "@mui/x-data-grid";
import "../LatestProducts/latestProducts.scss";
import "./dataTable.scss";
import Box from "@mui/material/Box";

const Products = ({ data, productColumns }) => {
  return (
    <Box sx={{ height: 620, width: "100%" }}>
      <div className="datatable">
        <DataGrid
          className="datagrid"
          rows={data}
          columns={productColumns}
          rowCount={data.length}
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
};
export default Products;

import { Box } from "@mui/material";
import React from "react";
import NextnewProducts from "./NextnewProducts";
import { useState } from "react";

const ProductList = () => {
  const [page, setPage] = useState(0);

  return (
    <div>
      <div className="bgcolor">
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <NextnewProducts />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default ProductList;

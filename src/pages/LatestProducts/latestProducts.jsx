import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TableBody } from "semantic-ui-react";
import "../LatestProducts/latestProducts.scss";
const LatestTransactions = () => {
  const rows = [
    {
      id: 1,
      productName: "Redbull Summer pack.12 No's",
      img: "https://media.istockphoto.com/id/458067553/photo/red-bull.jpg?s=612x612&w=0&k=20&c=EcHWwB2PgZp9uXf0z_E9lkZt4NqBdZsPSwYexcwt9bg=",
      offer: "5%",
      price: "$54",
      sold: "1,200",
      sales: "15,256,56",
    },
    {
      id: 2,
      productName: "Tetley Juice.200ml",
      img: "https://cdn.shopify.com/s/files/1/0522/0125/9183/products/O0vEZ4wOEN.jpg?v=1642884249",
      offer: "6%",
      price: "$54",
      sold: "1,200",
      sales: "15,256,56",
    },
    {
      id: 3,
      productName: "Maggie Mega Pack.500gm",
      img: "https://5.imimg.com/data5/SELLER/Default/2022/7/MU/PJ/SD/5742893/maggi-noodles.jpg",
      offer: "8%",
      price: "$54",
      sold: "1,200",
      sales: "15,256,56",
    },
    {
      id: 4,
      productName: "Redbull.500ml",
      img: "https://i5.peapod.com/c/7H/7HSXF.png",
      offer: "9%",
      price: "$54",
      sold: "1,200",
      sales: "15,256,56",
    },
    {
      id: 5,
      productName: "7up.1.5L",
      img: "https://cdn.grofers.com/app/images/products/sliding_image/32390a.jpg?ts=1679992350",
      offer: "10%",
      price: "$54",
      sold: "1,200",
      sales: "15,256,56",
    },
  ];
  return (
    <TableContainer component={Paper} className="latest">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product name</TableCell>
            <TableCell>Offer</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Sold</TableCell>
            <TableCell>Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.productName}
                </div>
              </TableCell>
              <TableCell>{row.offer}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.sold}</TableCell>
              <TableCell>{row.sales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default LatestTransactions;

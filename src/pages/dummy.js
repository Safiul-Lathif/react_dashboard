export const userColumns = [
  {
    field: "user",
    headerName: "Product name",
    width: 280,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.productName}
    //     </div>
    //   );
    // },
  },
  {
    field: "offer",
    headerName: "Offer",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "sold",
    headerName: "Sold",
    width: 130,
  },
  {
    field: "sales",
    headerName: "Sales",
    width: 230,
  },
];

export const productColumns = [
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image[0]} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "category",
    headerName: "Category",
    width: 230,
  },

  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "description",
    headerName: "Description",
    width: 360,
  },
];

export const userRows = [
  //temporary data
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
  {
    id: 6,
    productName: "Everest Channa Masala.200ml",
    img: "https://m.media-amazon.com/images/I/71hexcSRJFL.jpg",
    offer: "5%",
    price: "$54",
    sold: "1,200",
    sales: "15,256,56",
  },
  {
    id: 7,
    productName: "Coca cola.500ml",
    img: "https://m.media-amazon.com/images/I/81kx2IPueEL.jpg",
    offer: "3%",
    price: "$54",
    sold: "1,200",
    sales: "15,256,56",
  },
  {
    id: 8,
    productName: "Mango Pickle.200gm",
    img: "https://ik.imagekit.io/dunzo/tr:w-$w$,h-$h$,cm-pad_resize/1615706897571_product_5d4ad0fa47ddec28ecc4f2d9_1.jpg",
    offer: "5%",
    price: "$54",
    sold: "1,200",
    sales: "15,256,56",
  },
];

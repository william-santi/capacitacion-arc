const resolve = (query) => {
  // console.log("queryyyyyyy", query);
  // // Obtener las categorias
  // let { name_category } = query;
  // const requestUri = `https://fakestoreapi.com/products/`;
  // if (query.hasOwnProperty("name_category")){
  //   const data = `${requestUri}category/${name_category}`
  //   console.log('dataaaaa',data)
  //   https://fakestoreapi.com/products/category/jewelery
  //   return data;
  // }
  const requestUri = `https://fakestoreapi.com/products/`;
  if (query.hasOwnProperty("id"))
    return `${requestUri}${query.id}`;

  throw new Error("Product content source requires a id");
};

export default {
  resolve,
  params: {
    id: "text",
  },
};

// export default {
//   resolve,
//   params: {
//     name_category: "text",
//   },
// };
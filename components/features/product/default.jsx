// import PropTypes from "prop-types";
import { useContent } from "fusion:content";
import { useAppContext } from "fusion:context";
import arrayleft from "../../../resources/img/array-left.png";
import "./index.css";

const Product = ({ customFields }) => {
  const { globalContent } = useAppContext();

  // const { idProduct ='' } = customFields;
  const product = useContent({
    source: "products",
    query: {
      id: globalContent?.id || "",
    },
  });

  return (
    <section className="produc">
      <div className="produc__content">
        <article className="produc__wrapper">
          <a
            href="http://localhost/pf/home-page/?_website=rpalatam"
            rel="noopener noreferrer"
          >
            <img className="array-icon" src={arrayleft} alt="flecha-icon" />
          </a>
          <h1>{product?.category}</h1>
          <picture className="produc__image">
            <img src={product?.image} alt={product?.title} />
          </picture>
          <p>{product?.description}</p>
        </article>
        <article className="produc__details">
          <h3>{product?.title}</h3>
          <h4>$. {product?.price}</h4>
          <button className="produc__add">Agregar al carrito</button>
          <button className="produc__compra">Realizar compra</button>
        </article>
      </div>
    </section>
  );
};

Product.label = "Product";
// Product.propTypes = {
//     customFields: PropTypes.shape({
//       idProduct: PropTypes.string.tag({
//         name: "idProduct",
//         description: "Escribir el id del producto",
//       }),
//     }),
//   };

export default Product;

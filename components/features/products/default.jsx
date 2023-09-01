import PropTypes from "prop-types";
import './index.css'
import { useContent } from "fusion:content";

const Products = ({ customFields }) => {
  const { idProduct = '1' } = customFields;
  const data = useContent({
    source: "products",
    query: {
      id:idProduct || '',
    },
  });

  // const {results=[]} = data;

  return (
    <section className="product">
      <div className="product__portada">
        <div className="product__content">
          <h1>variedades & cortesía</h1>
        </div>
      </div>
      <div className="product__subtitle">
        <p>Envíos a todo el mundo</p>
      </div>
      <div className="product__wrapper">
        <div className="product__text">
          <h2>Todo el año</h2>
          <span></span>
          <p>Los infaltables</p>
        </div>
      </div>
      <div className="product__cont-card">
        <div className="product__wrap">
          <article className="product__card">
            <picture>
              <img src={data?.image} alt={data?.title} />
            </picture>
            <button><a href='http://localhost/pf/home-page/product/3' rel="noopener noreferrer">ver detalles</a></button>
          </article>
          <article className="product__card">
            <h2>oferta</h2>
            <a href="http://localhost/pf/home-page/product/17" rel="noopener noreferrer">
              <picture>
                <img src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" alt="" />
              </picture>
            </a>
          </article>
          <article className="product__card">
            <picture>
              <img src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" alt="" />
            </picture>
            <button><a href='http://localhost/pf/home-page/product/5' rel="noopener noreferrer">ver detalles</a></button>
          </article>
        </div>
      </div>
      {/* {results.map((result) => (
        <div key={result?.id}>
          <img src={result?.image} alt="" />
          <h2>{result?.name}</h2>
          <p>{result?.species}</p>
        </div>
      ))} */}
    </section>
  );
};

Products.label = "Products";

Products.propTypes = {
  customFields: PropTypes.shape({
    idProduct: PropTypes.string.tag({
      name: "idProduct",
      description: "Escribir el id del producto",
    }),
  }),
};

export default Products;

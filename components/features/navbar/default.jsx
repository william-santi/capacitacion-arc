import PropTypes from "prop-types";
// import { useAppContext } from 'fusion:context';
import { useContent } from "fusion:content";
import './navbar.css'


const Navbar = ({customFields}) => {

  // const { globalContent } = useAppContext();
  // const {children:listMenu} = globalContent;

  const {menu=''} =customFields;
    const {children:items} = useContent({
        source: "navigation",
        query: {
            _id: menu ,
        },
      });
   console.log(items)
  return (
    <section>
      <nav className="navbar">
        {
          items.map(item =>(
            <li key={item?._id} className="navbar__item" >
              <a href="#">{item?.name}</a>
            </li>
          ))
        }
      </nav>
    </section>
  )
}

Navbar.label = "Navbar";

Navbar.propTypes = {
    customFields: PropTypes.shape({
      menu: PropTypes.string.tag({
        name: "menu",
        description: "Escribir el nombre del menu creado",
      }),
    }),
  };

export default Navbar;
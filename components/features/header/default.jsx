import React from "react";
import getProperties from "fusion:properties";
import PropTypes from "prop-types";
import { useAppContext } from "fusion:context";
import './index.css'

const Header = ({customFields}) => {
  const { isName, isLastName, isYears } = customFields; 
  const { arcSite } = useAppContext();
  const { name, lastName, years } = getProperties(arcSite);

  return (
    <section className="header">
      <div className="header__content">
        <strong>Mis datos personales</strong>
        <h2>{isName || name} {isLastName || lastName}</h2>
        <span></span>
        <p>{isYears || years} Años</p>
      </div>
    </section>
  );
};

Header.label = "Header";

Header.propTypes = {
  customFields: PropTypes.shape({
    isName: PropTypes.string.tag({
      name: "Nombres",
      description: "Cambiar el nombre",
    }),
    isLastName: PropTypes.string.tag({
      name: "Apellidos",
      description: "Cambiar apellido",
    }),
    isYears: PropTypes.number.tag({
        name: "Edad",
        description: "Cambiar edad",
      }),
  }),
};

export default Header;

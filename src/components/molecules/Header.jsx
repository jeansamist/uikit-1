import React from "react";
import PropTypes from "prop-types";
import Heading from "../atoms/Heading";
import Flexbox from "../containers/Flexbox";
export class Brand {
  /**
   *
   * @param {String} position
   * @param {String} type
   * @param {String} content
   * @param {Boolean} underlined
   * @param {Function} onClick
   */
  constructor(position = "left", type = "text", content = "Brand Content", underlined = false, width = 200, onClick = () => {}) {
    this.position = position;
    this.type = type;
    this.content = content;
    this.underlined = underlined;
    this.width = width;
    this.onClick = onClick;
  }
}
function Header({ children, border = false, className = "", brand = new Brand(), dark = false }) {
  const brandRend =
    brand.type === "text" ? (
      <div className="header-brand header-brand-text">
        <Heading underline={brand.underlined} type="4">
          {brand.content}
        </Heading>
      </div>
    ) : (
      <div className="header-brand header-brand-image">
        <img style={{ width: brand.width }} src={brand.content} alt="brand" />
      </div>
    );
  return (
    <header className={`header${border ? " header-border" : ""}${dark ? " header-dark" : ""}${className ? ` ${className}` : ""}`}>
      <Flexbox className="aic jcsb">
        {brand.position === "left" && brandRend}
        <div className="header-content">{children}</div>
        {brand.position === "right" && brandRend}
      </Flexbox>
    </header>
  );
}
Header.propTypes = {
  /**
   * header Content
   */
  children: PropTypes.node,
  /**
   * If header have a border
   */
  border: PropTypes.bool,
  /**
   * If header's dark
   */
  dark: PropTypes.bool,
  /**
   * header classes
   */
  className: PropTypes.string,
  /**
   * header classes
   */
  brand: PropTypes.objectOf(Brand),
};
export default Header;

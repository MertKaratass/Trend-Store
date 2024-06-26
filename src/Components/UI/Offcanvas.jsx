import { Fragment } from "react";
import "./Offcanvas.css";
import ReactDOM from "react-dom";

const Offcanvas = (props) => {
  const portlElement = document.getElementById("offcanvas-portal");
  return (
    <Fragment>
      <div className="backdrop" onClick={props.onClose} />
      <div className="offcanvas">
        <div className="content">{props.children}</div>
      </div>
    </Fragment>
  );
};

export default Offcanvas;

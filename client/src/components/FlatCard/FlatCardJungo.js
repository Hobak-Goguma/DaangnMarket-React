import React from "react";
// import { Link } from "react-router-dom";

const FlatCardJungo = (props) => {
  return (
    <>
      {props.data.slice(props.a, props.b).map((v, i) => (
        <article className="flat-card" key={i}>
          {/* <Link to="/"> */}

          {/* </Link> */}
        </article>
      ))}
    </>
  );
};

export default FlatCardJungo;

import React from "react";
export const UserContext = React.createContext(null);

export function Card(props) {
  function classes() {
    const bg = props.bgcolor ? "bg-" + props.bgcolor : "";
    const txt = props.txtcolor ? "text-" + props.txtcolor : "text-white";
    return "card " + txt + " " + bg + " primary mb-3 mx-auto";
  }
  return (
    <>
      <br />
      <div
        className={classes()}
        style={{ maxWidth: "22rem", textAlign: "center" }}
      >
        <div className="card-header">
          <strong>{props.header}</strong>
        </div>
        <div className="card-body">
          {props.title && (
            <h5 style={{ textAlign: "center" }} className="card-title">
              <strong>{props.title}</strong>
            </h5>
          )}
          {props.text && (
            <p style={{ textAlign: "center" }} className="card-text">
              <strong>{props.text}</strong>
            </p>
          )}
          {props.body}
          {props.status && (
            <div id="create-status" style={{ textAlign: "center" }}>
              {props.status}
            </div>
          )}
        </div>
      </div>
      <div style={{ height: "8px" }} />
    </>
  );
}

export function List(props) {
  return (
    <>
      <ol className="list-group list-group-flush" style={{ padding: "8px" }}>
        <li
          className="list-group-item d-flex justify-content-between align-items-start"
          style={{
            backgroundColor: "rgb(248, 224, 244)",
          }}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{props.type}</div>
            {props.date}
          </div>
          <span
            className="badge bg-primary rounded-pill"
            style={{ fontFamily: "Arial", fontSize: "x-small" }}
          >
            <strong>{props.amount}</strong>
          </span>
        </li>
      </ol>
    </>
  );
}

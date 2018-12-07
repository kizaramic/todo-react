import React from "react";

export default props => (
    <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
            {props.todo.text}
        </div>
        <button onClick={props.onDelete}>x</button>
    </div>
);
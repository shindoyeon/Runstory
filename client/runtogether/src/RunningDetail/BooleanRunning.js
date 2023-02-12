import React from "react";

// function BooleanRunning(props) {
//     if ( props.Something ) {
//         return <button>{props.truevalue}</button>;
//     } else {
//         return <button>{props.falsevalue}</button>;
//     }
// }

const BooleanRunning = (props) => {
    if ( props.Something == "true" ) {
        return <button>{props.truevalue}</button>;
    } else {
        return <button>{props.falsevalue}</button>;
    }
}
export default BooleanRunning
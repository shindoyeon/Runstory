import React from "react";
import axios from "axios";

const BooleanRunning = (props) => {

    function Canceled() {
        const url = props.api;
        axios.delete(url)
            .then(function(response) {
                console.log("성공");
            })
            .catch(function(error) {
                console.log("실패");
            })

    }

    function Join() {
        const url = props.api;
        axios.post(url)
            .then(function(response) {
                console.log("성공");
            })
            .catch(function(error) {
                console.log("실패");
            })

    }

    if ( props.Something == "true" ) {
        return <button onClick={Canceled}>{props.truevalue}</button>;
    } else {
        return <button onClick={Join}>{props.falsevalue}</button>;
    }
}
export default BooleanRunning
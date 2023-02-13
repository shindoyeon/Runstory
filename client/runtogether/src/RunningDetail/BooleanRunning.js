import React, { useState } from "react";
import { useEffect } from "react";
import axios from "../api/axios";

const BooleanRunning = (props) => {

    function Canceled() {
        const url = props.api;
        axios.delete(url)
            .then(function (response) { // Rerendering 필요...
                console.log("성공");
                window.location.replace("/running/detail/" + props.id)
            })
            .catch(function (error) {
                console.log("실패");
            })
    }

    function Join() {
        const url = props.api;
        axios.post(url)
            .then(function (response) {
                console.log("성공");
                window.location.replace("/running/detail/" + props.id)
            })
            .catch(function (error) {
                console.log("실패");
            })
    }

    if (props.Something) {
        return <button onClick={() => Canceled()} style={{ textAlign: "center", background: "rgb(192,192,192)", paddingLeft: "3%", paddingRight: "3%", borderRadius: "30px" }}>{props.truevalue}</button>;
    } else {
        return <button onClick={() => Join()} style={{ textAlign: "center", background: "rgb(192,192,192)", paddingLeft: "3%", paddingRight: "3%", borderRadius: "30px" }}>{props.falsevalue}</button>;
    }
}
export default BooleanRunning
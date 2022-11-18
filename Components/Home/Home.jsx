import React, { Component } from "react";
import Image1 from "../Img/WhatsApp_Image_2022-11-16_at_8.08.52_PM-removebg-preview.png"

export default class Home extends Component {
    render() {
        return <>
            <div className="py-5 vh-100 bg-info text-white text-center p-relative">
                <img src={Image1} alt="Start" />
                <h1 className="fw-bolder">START REACT</h1>
                <i className="lineStar fa-solid fa-star"></i>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </>;
    }
}

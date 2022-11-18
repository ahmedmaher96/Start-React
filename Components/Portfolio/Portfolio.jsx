import React, { Component } from "react";
import Image1 from "../Img/WhatsApp Image 2022-11-16 at 8.08.52 PM (1).jpeg"
import Image2 from "../Img/WhatsApp Image 2022-11-16 at 8.08.52 PM (2).jpeg"
import Image3 from "../Img/WhatsApp Image 2022-11-16 at 8.09.03 PM.jpeg"
import Image4 from "../Img/WhatsApp Image 2022-11-16 at 8.09.05 PM (1).jpeg"
import Image5 from "../Img/WhatsApp Image 2022-11-16 at 8.09.05 PM (2).jpeg"
import Image6 from "../Img/WhatsApp Image 2022-11-16 at 8.09.05 PM.jpeg"

export default class Portfolio extends Component {
    render() {
        return <>
            <div className="vh-100">
                <div className="title text-center">
                    <h2>Portfolio</h2>
                    <i className="lineStar fa-solid fa-star"></i>
                </div>
                <div className="container">
                    <div className="row g-3">
                        <div className="col-lg-4">
                            <img className="w-100" src={Image1} alt="1" />
                        </div>
                        <div className="col-lg-4">
                            <img className="w-100" src={Image2} alt="1" />
                        </div>
                        <div className="col-lg-4">
                            <img className="w-100" src={Image3} alt="1" />
                        </div>
                        <div className="col-lg-4">
                            <img className="w-100" src={Image4} alt="1" />
                        </div>
                        <div className="col-lg-4">
                            <img className="w-100" src={Image5} alt="1" />
                        </div>
                        <div className="col-lg-4">
                            <img className="w-100" src={Image6} alt="1" />
                        </div>
                    </div>
                </div>
            </div>
        </>;
    }
}

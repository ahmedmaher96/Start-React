import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return <>
            <div className="container vh-100">
                <div className="title text-center">
                    <h2 className='fw-bolder'>Contact</h2>
                    <i className="lineStar fa-solid fa-star"></i>
                </div>
                <div className="d-flex flex-column py-1 ">
                    <input className='my-2 form-control' placeholder="Name" id='name' type="text" />
                    <input className='my-2 form-control' placeholder="Number" id='number' type="text" />
                    <input className='my-2 form-control' placeholder="Email" id='email' type="text" />
                    <textarea className='form-control' placeholder='Message' name="" id="message" cols="30" rows="5"></textarea>
                </div>
                <button className='btn btn-info btn-lg text-white'>Send</button>
            </div>
        </>
    }
}

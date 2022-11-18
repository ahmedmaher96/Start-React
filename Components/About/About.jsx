import React from 'react'

export default function About() {
    return <>
        <div className="text-center vh-100 bg-info text-white">
            <div className="container-sm p-5">
            <h2 className='fw-bold'>ABOUT</h2>
            <i className="fa-solid fa-star"></i>
            <div className="row g-5 pt-5">
                <div className="col-lg-6">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-lg-6">
                    <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
            </div>
            </div>
        </div>

    </>
}

import React from 'react'

export default function Footer() {
    return <>
        <div className='bg-dark fixed-bottom text-white'>
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-4">
                        <h3 className=''>Location</h3>
                        <p className=''>2215 John Daniel Drive <br /> Clark, MO 65243</p>
                    </div>
                    <div className="col-lg-4">
                        <h3>Around The Web</h3>
                        <div className="socialIcons">
                            <div className="Icon">
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h3>About Freelancer</h3>
                        <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route </p>
                    </div>
                </div>
            </div>
            <h6 className='text-center'>Copyright © Your Website 2021</h6>
        </div>
    </>
}

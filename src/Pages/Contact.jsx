import React from "react";

const Contact = () => {
    return (
        <div className="contact-wrapper d-flex align-items-center justify-content-center text-white text-center">
            <div className="overlay">
                </div>
                <div className="content-position-relative">
                    <h1 className="fw-bold mb-2">Conatct Us</h1>
                    <div className="bg-white rounded-pill shadow mx-auto d-flex align-items-center p-2 gap-2 form-box">
                        <input type="text" className="form-control rounded-pill border-0" placeholder="Enter Your Name"></input>
                        <input type="email" className="form-control rounded-pill border-2" placeholder="Enter Your Email"></input>
                        <button className="btn bg-primary text-white rounded-pill fw-bold px-4">SUBMIT</button>
                    </div>
                    <div className="container mt-5">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-md-4 d-flex justify-content-center">
                                <div className="p-4 text-white rounded-4 bg-primary text-start"
                                style={{ width: "260px" }}>
                                    <h5 className="fw-bold mb-3">Call Us <i class="bi bi-telephone-inbound"></i></h5>
                                    <p className="mb-1">1 (234) 567-891</p>
                                    <p>2 (354) 421-987</p>
                                </div>
                            </div>

                            <div className="col-md-4 d-flex justify-content-center">
                                <div className="p-4 text-white rounded-4 bg-primary text-start"
                                style={{ width: "260px" }}>
                                    <h5 className="fw-bold mb-3"> <i class="bi bi-pin-map-fill"></i> Location</h5>
                                    <p className="mb-1">101 Rock Street, 21 Avenues.</p>
                                    <p>New York, AY 2101-70000</p>
                                </div>
                            </div>

                             <div className="col-md-4 d-flex justify-content-center">
                                <div className="p-4 text-white rounded-4 bg-primary text-start"
                                style={{ width: "260px" }}>
                                    <h5 className="fw-bold mb-3">Hours <i class="bi bi-clock-fill"></i></h5>
                                    <p className="mb-1">Mon-Fri: 8am to 10pm</p>
                                    <p>Sat-Sun: 11am to 6pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    );
};

export default Contact;
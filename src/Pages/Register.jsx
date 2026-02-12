import React from "react";

const Register = () => {
    return (
        <div className="container py-5">
         <div className="row g-5 align-items-start mb-5">
            <div className="col-lg-7">
                <h2 className="fw-bold text-dark mb-3">
                    Manage Projects With Easy-{""}
                    <span className="text-primary">Pro Manage</span>
                </h2>
                <p className="text-muted fs-5 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nostrum natus quasi, saepe hic optio omnis ut labore laudantium laborum?
                </p>
                 <p className="text-muted fs-5 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nostrum natus quasi, saepe hic optio omnis ut labore laudantium laborum?
                </p>
                 <p className="text-muted fs-5 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nostrum natus quasi, saepe hic optio omnis ut labore laudantium laborum?
                </p>
                 <p className="text-muted fs-5 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nostrum natus quasi, saepe hic optio omnis ut labore laudantium laborum?
                </p>
                <div className="d-flex gap-3 mt-5">
                    <button className="btn btn-outline-primary px-4 py-2">Learn More</button>
                     <button className="btn btn-primary px-4 py-2">Start Now</button>
                </div>
                </div>
                <div className="col-lg-5">
                    <div className="p-4 border rounded shadow-sm bg-white">
                        <h4 className="text-center fw-bold mb-4">Register here</h4>
                        <form>
                            <div className="mb-4">
                                <label className="form-label fw-semibold">Full Name</label>
                                <input type="text" className="form-control form-control-lg"></input>
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-semibold">Email</label>
                                <input type="email" className="form-control form-control-lg"></input>
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-semibold">Phone</label>
                                <input type="number" className="form-control form-control-lg"></input>
                            </div>
                            <div className="mb-4">
                                <label className="form-label fw-semibold">Select plan</label>
                                <select name="" id="" className="form-select form-select-lg">
                                    <option>premium plan</option>
                                    <option>secondary plan</option>
                                    <option>afordable plan</option>
                                </select>
                            </div>
                            <button className="btn btn-primary w-100 py-2 fs-5">Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>  
    
    );
};

export default Register; 
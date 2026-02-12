import React from "react";

const About = () => {
    return (
    <div className="container my-5">
        <div className="row align-items-center">
            <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                <div className="blob-shape">
                   <img src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjB0ZWFtfGVufDB8fDB8fHww" alt="Team" className="img-fluid"/>
                </div>
            </div>

<div className="col-md-6">
    <h2>About Us</h2>
    <h5 className="fw-bold">Who We Are</h5>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quam rem fugit atque corporis molestiae vitae nihil cupiditate expedita obcaecati.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nihil culpa similique aut mollitia error nesciunt voluptatem iusto eum consequuntur!</p>
    <button className="btn btn-outline-primary">Read More &rarr;</button>
</div>
 </div>

 <section className="py-5">
    <div className="container">
        <h3 className="text-center fw-bold">
            Manage project with<span className="text-primary"> Pro-Manage</span>
        </h3>
        <p className="text-center text-secondary mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex?</p>
        <div className="row g-4">
            <div className="col-md-6">
                <div className="p-4 rounded-4 shadow bg-dark text-white h-100">
                    <div className="d-flex justify-content-between">
                        <h4 className="fw-bold">Pro Manage Eseentials</h4>
                        <span className="badge bg-primary m-5 mt-2">Weekend</span>
                    </div>
                    <p className="mt-3 mb-1">8th january,Thursday</p>
                    <p className="mb-1">10:00 AM to 12:00 PM</p>
                    <p className="mb-4">Online</p>
                    <button className="btn btn-primary px-4 rounded-pill">Enroll Now &rarr;</button>

                </div>
            </div>

             <div className="col-md-6">
                <div className="p-4 rounded-4 shadow bg-white h-100">
                    <div className="d-flex justify-content-between">
                        <h4 className="fw-bold">Advanced Project Planning</h4>
                        <span className="badge bg-primary m-5 mt-2">Weekend</span>
                    </div>
                    <p className="mt-3 mb-1">8th january,Thursday</p>
                    <p className="mb-1">10:00 AM to 12:00 PM</p>
                    <p className="mb-4">Online</p>
                    <button className="btn btn-primary px-4 rounded-pill">Enroll Now &rarr;</button>

                </div>
            </div>

            <div className="col-md-6">
                <div className="p-4 rounded-4 shadow bg-white h-100">
                    <div className="d-flex justify-content-between">
                        <h4 className="fw-bold">Team Collabration</h4>
                        <span className="badge bg-primary m-5 mt-2">Weekend</span>
                    </div>
                    <p className="mt-3 mb-1">8th january,Thursday</p>
                    <p className="mb-1">10:00 AM to 12:00 PM</p>
                    <p className="mb-4">Online</p>
                    <button className="btn btn-primary px-4 rounded-pill">Enroll Now &rarr;</button>

                </div>
            </div>

            <div className="col-md-6">
                <div className="p-4 rounded-4 shadow bg-dark text-white h-100">
                    <div className="d-flex justify-content-between">
                        <h4 className="fw-bold">Risk Management & Reporting</h4>
                        <span className="badge bg-primary m-5 mt-2">Weekend</span>
                    </div>
                    <p className="mt-3 mb-1">8th january,Thursday</p>
                    <p className="mb-1">10:00 AM to 12:00 PM</p>
                    <p className="mb-4">Online</p>
                    <button className="btn btn-primary px-4 rounded-pill">Enroll Now &rarr;</button>

                </div>
            </div>

        </div>
    </div>
 </section>
    </div>
 );       
};
export default About;
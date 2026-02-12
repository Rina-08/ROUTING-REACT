import React from "react";

const Home = () => {
    return (
        <div className="container-fluid mt-4">
            <header className="text-center d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1766961811053-528a264ad2b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D')",
                    height: "80vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    color: "white",
                }}>
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.7)",
                    }}

                ></div>

                <div className="container position-relative"
                    style={{ zIndex: 2, color: "white" }}
                >
                    <div className="row py-lg 5">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <h1>Manage Project with Easy Pro Manage</h1>
                            <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit alias perferendis vitae dolorum in quia dolores voluptatem vero asperiores dolorem.</p>
                            <a href="" className="btn btn-primary me-2">Get Started</a>
                            <a href="" className="btn btn-outline-light">Learn More</a>
                        </div>
                    </div>

                </div>
            </header>
            {/* cards section*/}
            <section className="py-5">
                <h2 className="mb-4 text-center">Why Choose Us?</h2>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <h5 className="card-title">Quality</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, tempora!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <h5 className="card-title">Reliability</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, tempora!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <h5 className="card-title">Support</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, tempora!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* new section*/}

<section className="text-center py-5 bg-primary text-White rounded">
    <h2 className="text-white">Get Started Right Now!</h2>
    <p className="mb-4 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, ipsa!</p>
    <a href="/register" className="btn btn-light btn-lg">Register Now</a>
</section>


        </div>
    );
};

export default Home;
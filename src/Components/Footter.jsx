const Footter=()=>{
    return(
        <div id="contactUs" className="container-fluid py-5 text-start" style={{ backgroundColor: '#f8f9fa', color: '#212529' }}>
            <div className="ps-5 row justify-content-center pt-5">
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex flex-column gap-2" style={{ listStyle: "none", }}>
                        <p className="fw-semibold fs-5">Navigation & Quick Links</p>
                        <h6 className="fw-light fs-5"><a className="text-dark text-decoration-none" href="#home">Home  </a></h6>
                        <h6 className="fw-light fs-5"><a className="text-dark text-decoration-none" href="#service">Services</a></h6>
                        <h6 className="fw-light fs-5"><a className="text-dark text-decoration-none" href="#whyus">Why us</a></h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex flex-column gap-2" style={{ listStyle: "none", }}>
                        <p className="fw-semibold fs-5">Legal & Compliance</p>
                        <h6 className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">Privacy Policy</a></h6>
                        <h6 className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">Terms & Conditions</a></h6>
                        <h6 className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">Cookie Policy</a></h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex flex-column gap-2" style={{ listStyle: "none", }}>
                        <p className="fw-semibold fs-5">Social media Links</p>
                        <h6 className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">Facebook  </a></h6>
                        <h6 className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">Instagram</a></h6>
                        <h6 className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">LinkedIn</a></h6>
                        <h6 className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">You tube</a></h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
                    <div>
                        <p className="fs-1 fw-bolder fst-italic">Li<span className="text-success fs-1">QR</span>nk</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footter


const Navbar = () => {
    return (
        <nav id="navbar" className=" top-0 w-100 navbar navbar-expand-md py-3"  >
            <div className="container-fluid d-flex justify-content-between">
                <p className="fs-3 fw-bolder text-light fst-italic m-0">Li<span className="text-success fs-1">QR</span>nk</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-lg-4">
                        <li className="nav-item">
                            <a className="nav-link active text-light fw-bolder" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light fw-bolder" href="#service">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light fw-bolder" href="#whyus">Why Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light fw-bolder" href="#contactUs">Contact us</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
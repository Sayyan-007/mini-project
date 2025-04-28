import { FaArrowRight } from 'react-icons/fa';
import { XCircle, CheckCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../App.css'

const Services = () => {
    return (
        <div className="container-fluid py-5" id="service">
            <div className="row justify-content-center align-items-stretch">
                <div className="col-lg-3 col-md-6 d-flex">
                    <div className="w-100 text-center p-3 d-flex flex-column">
                        <h4 className="fw-bold p-3 m-0">Long <FaArrowRight className="text-success" /> Short</h4>
                        <div className="text-center py-3">
                            <img src="link.png" style={{ width: '50px', height: 'auto' }} className="mx-auto" alt="" />
                            <p className="px-4 pt-2 fw-medium flex-grow-1">Transforms long URLs into short, shareable links.</p>
                            <Link to="shortURL">
                                <button className="rounded-2 w-75 mt-auto">Convert</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                    <div className="w-100 text-center p-3 d-flex flex-column">
                        <h4 className="fw-bold p-3 m-0">Link <FaArrowRight className="text-success" /> QRcode</h4>
                        <div className="text-center py-3">
                            <img src="qr.png" style={{ width: '50px', height: 'auto' }} className="mx-auto" alt="" />
                            <p className="px-4 pt-2 fw-medium flex-grow-1">Creates scannable QR codes for any given URL.</p>
                            <Link to="qrcode">
                                <button className="rounded-2 w-75 mt-auto">Generate</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                    <div className="w-100 text-center p-3 d-flex flex-column">
                        <h4 className="fw-bold p-3 m-0"><XCircle className="text-danger" /> Link <CheckCircle className="text-success" /></h4>
                        <div className="text-center py-3">
                            <img src="mail.png" style={{ width: '50px', height: 'auto' }} className="mx-auto" alt="" />
                            <p className="px-4 pt-2 fw-medium flex-grow-1">Validates whether the link is available online.</p>
                            <Link to="linkvalidation">
                                <button className="rounded-2 w-75 mt-auto">Check</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                    <div className="w-100 text-center p-3 d-flex flex-column">
                        <h4 className="fw-bold p-3 m-0">Long <FaArrowRight className="text-success" /> Short</h4>
                        <div className="text-center py-3">
                            <img src="link.png" style={{ width: '50px', height: 'auto' }} className="mx-auto" alt="" />
                            <p className="px-4 pt-2 fw-medium flex-grow-1">Link will show a preview of the content inside.</p>
                            <Link to="linkpreview">
                                <button className="rounded-2 w-75 mt-auto">Convert</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Services
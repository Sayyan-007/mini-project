import Navbar from "./Navbar"
import '../App.css'
import Footter from "./Footter"
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { QRgenerate } from "../Utils/generateQR"

import { FaQrcode, FaRedo, FaArrowRight, FaLink, FaRegCopy } from "react-icons/fa";


function LinkPreviewGenerator() {
    const [url, setUrl] = useState("");
    const [previewData, setPreviewData] = useState(null);
    const [loading, setLoading] = useState(false);
    const {qrcode,setqrcode,handleQR} =  QRgenerate();
    
        const generateQR = () =>{
            handleQR(url)
        }

    const fetchLinkPreviewGenerator = async () => {
        if (!url) {
            toast.success("Please enter a URL.");
            return;
        }

        if (!/^https?:\/\//i.test(url)) {
            toast.error("URL must start with http:// or https://");
            return;
        }

        setLoading(true);
        setPreviewData(null);

        try {
            const response = await axios.get(`https://api.microlink.io/?url=${encodeURIComponent(url)}`);
            setPreviewData(response.data.data);
            toast.success("Details Fetched")
        } catch (err) {
            toast.error("Error in Link.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setqrcode('')
        setLoading(false)
        setPreviewData(null)
        setUrl('')
        toast.success('Feilds Cleared')
    }
    console.log(previewData);
    

    return (
        <div className="scroll-hidden">

            <div className="container-fluid" id='home' style={{ backgroundColor: '#212529', color: '#f8f9fa' }}>
                <Navbar />
                <div className="row justify-content-center align-items-center py-4">
                    <div className="col-lg-6 text-center">
                        <div>
                            <h1 className='er' style={{ fontFamily: "cursive" }}>Link Preview Generator</h1>
                            <p className='fs-3 fw-light'>Paste your URL, <br /> get Link Details instantly!</p>
                            <h6>Enter Your URL Below:-</h6>
                        </div>
                        <div>
                            <div>
                                <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" className="p-2 border text-light border-3 rounded-5 w-75 bg-transparent placeholder-text" placeholder="Enter URL :- https://URL.com" />
                            </div>
                            <div>
                                {loading && <div className="pt-3">Loading...</div>}
                            </div>
                            <div className="py-3 d-flex flex-sm-row flex-column justify-content-center gap-2">
                                <button className={`rounded-2 ${previewData ? 'btn-qrcoded' : 'btn-qrcode'}`} disabled={previewData} onClick={fetchLinkPreviewGenerator}><FaArrowRight className="icon" /> {previewData ? 'checked' : 'check'}</button>
                                {(previewData || url) && <button className='rounded-2' onClick={reset}><FaRedo className="icon" /> Reset</button>}
                            </div>
                            <div className="d-flex flex-sm-row flex-column justify-content-center gap-2">
                                {(previewData) && <button className=" rounded-2" onClick={() => window.open(url, "_blank")}><FaLink className="icon" /> Visit Link</button>}
                                {previewData && <button className={`rounded-2 ${qrcode ? 'btn-qrcoded' : 'btn-qrcode' }`} disabled={qrcode} onClick={generateQR}><FaQrcode className="icon"/> {qrcode ? 'Generated' : 'Generate QR'}</button>}
                            </div>
                        </div>
                    </div>
                    {previewData &&
                        <div className="col-lg-6 py-md-5 pt-5 pt-lg-0">
                            <div className="row justify-content-center align-items-center text-center">
                                <div className="col-md-3">
                                {previewData.image?.url ? 
                                    (<img src={previewData.image.url} style={{ maxWidth: "150px", maxHeight: "150px" }} alt="preview" />
                                    ) : previewData.logo?.url ? (
                                      <img src={previewData.logo.url} style={{ maxWidth: "150px", maxHeight: "150px" }} alt="preview" />
                                    ) : (
                                      <p className="text-center fw-lighter">No image</p>
                                    )}
                                </div>
                                <div className="col-md-5 pt-2 pt-lg-0 text-md-start">
                                    <p className="fw-bold m-0">Platform:- <span className="fw-light">{previewData.title || "No Title Available"}</span></p>
                                    <p className="fw-bold m-0">Description:- <span className="fw-light">{previewData.description || "No Description Available"}</span></p>
                                </div>
                                {qrcode && 
                                <div className="col-md-3 pt-2 pt-lg-0">
                                    <img src={qrcode} className="mw-100" alt="" />
                                </div>}
                            </div>
                        </div>
                    }
                </div>
            </div>
            <Footter />

        </div>

        // <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}>
        //     <h1>🔗 Link Preview Generator</h1>

        //     <input
        //         type="text"
        //         placeholder="Paste your link here..."
        //         value={url}
        //         onChange={(e) => setUrl(e.target.value)}
        //         style={{ width: "80%", padding: "10px", margin: "20px 0" }}
        //     />
        //     <br />
        //     <button onClick={fetchLinkPreviewGenerator} style={{ padding: "10px 20px" }}>
        //         Generate Preview
        //     </button>

        //     {loading && <p>Loading preview...</p>}
        //     {previewData && (
        //         <div style={{ marginTop: "30px", textAlign: "left", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
        //             {previewData.image?.url && (
        //                 <img src={previewData.image.url} alt="preview" style={{ width: "100%", borderRadius: "10px" }} />
        //             )}
        //             <h2>{previewData.title || "No Title Available"}</h2>
        //             <p>{previewData.description || "No Description Available"}</p>
        //             <a href={previewData.url} target="_blank" rel="noopener noreferrer">
        //                 Visit Site
        //             </a>
        //         </div>
        //     )}
        // </div>
    );
}

export default LinkPreviewGenerator;

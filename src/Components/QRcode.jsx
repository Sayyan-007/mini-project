import Navbar from "./Navbar"
import '../App.css'
import { useState } from "react"
import Footter from "./Footter"
import { QRgenerate } from "../Utils/generateQR"
import toast from "react-hot-toast"
import { FaQrcode,FaRedo,FaLink } from "react-icons/fa";

const QRcode = () => {

    const [link,setlink] = useState('')
    const {qrcode,setqrcode,loading,handleQR} =  QRgenerate();

    const generateQR = () =>{
        handleQR(link)
    }
    
    const reset =()=>{
        toast.success('Feilds Cleared')
        setlink('')
        setqrcode('')
    }

    return (
        <div className="scroll-hidden">

            <div className="container-fluid" id='home' style={{ backgroundColor: '#212529', color: '#f8f9fa' }}>
                <Navbar />
                <div className="row justify-content-center align-items-center py-4">
                    <div className="col-lg-6 text-center">
                        <div>
                            <h1 className='fw-bolder' style={{ fontFamily: "cursive" }}>Generate QR code</h1>
                            <p className='fs-3 fw-light'>Paste your URL, <br /> get QR code instantly!</p>
                            <h6>Enter Your URL Below:-</h6>
                        </div>
                        <div>
                            <div>
                                <input value={link} onChange={(e)=>setlink(e.target.value)} type="text"  className="p-2 border text-light border-3 rounded-5 w-75 bg-transparent placeholder-text" placeholder="Enter URL :- https://URL.com" />
                            </div>
                            <div>
                                {loading && <div>Loading...</div>}
                            </div>
                            <div className="d-flex flex-sm-row flex-column justify-content-center gap-2 py-3">
                                {(qrcode) &&<button className=" rounded-2" onClick={()=>window.open(link,"_blank")}><FaLink className="icon"/> Visit Link</button>}
                                <button className={`rounded-2 ${qrcode ? 'btn-qrcoded' : 'btn-qrcode' }`} disabled={qrcode} onClick={generateQR}><FaQrcode className="icon"/> {qrcode ? 'Generated' : 'Generate'}</button>
                                {(qrcode || link) &&<button className='rounded-2' onClick={reset}><FaRedo className="icon"/> Reset</button>}
                            </div>
                        </div>
                    </div>
                    {qrcode &&
                    <div className="col-lg-6 text-center mt-sm-4 mt-lg-0">
                        <img src={qrcode} style={{width:"150px",height:"150px"}} alt="" />
                    </div>
                    }
                </div>
            </div>
            <Footter/>

        </div>
    )
}
export default QRcode
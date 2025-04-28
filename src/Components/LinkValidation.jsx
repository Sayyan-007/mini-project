import { useState } from "react"
import Navbar from "./Navbar"
import '../App.css'
import axios from "axios"
import toast from "react-hot-toast"
import Footter from "./Footter"
import { Link } from "react-router-dom"
import { FaQrcode,FaRedo,FaArrowRight,FaLink, FaRegCopy } from "react-icons/fa";
import { useClipboard } from "../Utils/useClipboard"
import { QRgenerate } from "../Utils/generateQR"



const LinkValidation = () => {

    const [link,setlink] = useState('')
    const [status,setstatus] = useState('')
    const [code,setcode] = useState('')
    const [loading,setloading] = useState(false)
    const {copied, copyToClipboard} = useClipboard();
    const {qrcode,setqrcode,loading:qrloading,handleQR} =  QRgenerate();
    

    const CheckValidity = async() =>{

        if(!link)
        {
            toast.success('Please Enter Your Link')
            setstatus('Please Enter Your Link')
            return
        }
        setloading(true)
        setstatus('')
        try 
        {
            const url = link.startsWith('http') ? link : `https://${link}`
            const response = await axios.get(url, { timeout: 5000 })
            // setcode(response.data.config)
            // console.log("code",code);
            if(response.status === 200)
            {
                setcode(url)
                console.log(url);
                
                setstatus("Link is available!");
                toast.success(`Link  is available`)
            }
            else
            {
               setstatus(`Link  is unavailable!`);
               toast.error(`Link is unavailable`)
            }
        } 
        catch (error) 
        {
            console.log(error);
            setstatus("Link is not reachable.");
            toast.error("Link is not reachable.");
        }
        finally
        {
            setloading(false)
        }

    }

    const handlecopy = ()=>{
        copyToClipboard(code)
    }

    const generateQR = () =>{
        handleQR(link)
    }

    const reset=()=>{
        setlink('')
        setstatus('')
        setloading(false)
        setqrcode('')
        setcode('')
    }

    return (
        <div className="container-fluid scroll-hidden" id="home">
            <div className="row justify-content-center align-items-center text-center "style={{ backgroundColor: '#212529', color: '#f8f9fa' }}>
            <Navbar />
                <div className="col-lg-6 py-5">
                    <div>
                        <h1 className='fw-bolder' style={{ fontFamily: "cursive" }}> Link Availability Checker</h1>
                        <p className='fs-3 fw-light'>Paste your URL, <br /> get the Link is Available or Not!</p>
                        <h6>Enter Your URL Below:-</h6>
                    </div>
                    <div>
                        <div>
                            <input value={link} onChange={(e) => setlink(e.target.value)} type="text" autoComplete="on" className="placeholder-text" placeholder="Enter URL :- https://URL.com" />
                        </div>
                        <div className="py-3 d-flex flex-sm-row flex-column justify-content-center gap-2">
                            <button className={`rounded-2 ${code ? 'btn-generated' : 'btn-generate' }`} disabled={code} onClick={CheckValidity} ><FaArrowRight className="icon"/> {code ? 'Checked' : 'Check' }</button>
                            {(link || qrcode) && <button className='rounded-2' onClick={reset}><FaRedo className="icon"/> Reset</button>}
                        </div>
                        <div>
                            {loading && <h5>Loading...</h5>}
                            {qrloading && <h5>Loading...</h5>}
                            {status && <h5>{status}</h5>}
                        </div>
                        {code && 
                            <div className="py-2 d-flex flex-sm-row flex-column justify-content-center gap-2">
                                <button className="rounded-2" onClick={()=>window.open(code,"_blank")}><FaLink className="icon"/> Visit Link</button>
                                <button className={`rounded-2 ${copied ? 'btn-copied' : 'btn-copy' }`} disabled={copied} onClick={handlecopy}><FaRegCopy className="icon"/>{copied ? "Copied": "Copy Link"}</button>
                                <button className={`rounded-2 ${qrcode ? 'btn-qrcoded' : 'btn-qrcode' }`} disabled={qrcode} onClick={generateQR}><FaQrcode className="icon"/> {qrcode ? 'Generated' : 'Generate'}</button>
                            </div>
                        }
                    </div>
                </div>
                {qrcode &&
                <div className="col-lg-6 mt-sm-4 mt-lg-0 pb-5">
                    <img src={qrcode} style={{width:"150px",height:"150px"}} alt="" />
                </div>
                }
            </div>
            <Footter/>

        </div>
    )
}

export default LinkValidation
import {  useState } from 'react';
import '../App.css'
import axios from 'axios';
import Navbar from './Navbar';
import Footter from './Footter';
import toast from 'react-hot-toast';
import { QRgenerate } from "../Utils/generateQR"
import { useClipboard } from "../Utils/useClipboard"
import { FaQrcode,FaRedo,FaArrowRight,FaLink, FaRegCopy } from "react-icons/fa";

const ShortURL=()=>{

    const [longURl,setlongURl] = useState('')
    const [ShortURL,setShortURL] = useState('')
    const [loading,setloading] = useState(false)
    const {copied, copyToClipboard} = useClipboard();
    const {qrcode,setqrcode,handleQR} =  QRgenerate();
    


    console.log(longURl);
    

    const getshortURL=async()=>{
        if (!longURl.trim()) 
            {
                toast.error('Please Enter URL')
            return;
        }
        setloading(true)
        try 
        {
            const response = await axios.get(`https://tinyurl.com/api-create.php?url=${longURl}`)
            console.log(response);
            setShortURL(response.data)
            toast.success("Short Link Created")
        }
        catch (error) 
        {
            console.log(error);
            toast.error('Something went wrong! Please try again.');
            setShortURL('')
        }
        finally{
            setloading(false)
            setlongURl('')
        }
    }

    const reset=()=>{
        setqrcode('')
        setShortURL('')
        setloading(false)
        setlongURl('')
        toast.success('Reset successfully..!!')
    }

    const handlecopy = ()=>
    {
        copyToClipboard(ShortURL)
    }

    const generateQR = () =>
    {
        handleQR(ShortURL)
    }


    return(
        <div className='scroll-hidden'>
            <div className="container-fluid justify-content-center align-items-center" id='home'  style={{ backgroundColor: '#212529', color: '#f8f9fa' }}>
            <Navbar />
                <div className="row justify-content-center align-items-center py-5" >
                    <div className="col-md-6 text-center">
                        <div className='row'>
                            <h1 className='fw-bolder' style={{fontFamily:"cursive"}}>URL Shortener</h1>
                            <p className='fs-3 fw-light'>Paste a long URL, <br /> get a short one instantly!</p>
                            <h6>Enter Your Long URL Below:-</h6>
                        </div>
                        <div className='row gap-3'>
                            <div>
                                <input className="p-2 border text-light border-3 rounded-5 w-75 bg-transparent placeholder-text" type="text" value={longURl} onChange={(e)=>setlongURl(e.target.value)} placeholder='https://LongURl.com'/>
                            </div>
                            <div>
                                {loading && <div>Loading...</div>}
                            </div>
                            <div className='d-flex flex-sm-row flex-column justify-content-center  gap-2'>
                                {<button className={`rounded-2 ${ShortURL ? 'btn-generated' : 'btn-generate' }`} disabled={ShortURL}  onClick={getshortURL}><FaArrowRight className='icon'/> {ShortURL?"Submited":"Submit"}</button>}
                                {(ShortURL || longURl) && <button   className='rounded-2' onClick={reset}><FaRedo className='icon'/> Reset</button>}
                            </div>
                        </div>
                        {ShortURL
                        &&
                            <div className='mt-3'>
                                <div className=''>
                                    <h5 >{ShortURL}</h5>
                                </div>
                                <div className="d-flex flex-sm-row flex-column justify-content-center gap-2">
                                    <button onClick={()=>window.open(ShortURL,"_blank")} className='rounded-2'><FaLink/> Visit Link</button>
                                    <button onClick={handlecopy} className={`rounded-2 ${copied ? 'btn-copied' : 'btn-copy' }`} disabled={copied} ><FaRegCopy className='icon'/> {copied ? 'Copied!' : 'Copy'}</button>
                                    <button onClick={generateQR} className={`rounded-2 ${qrcode ? 'btn-qrcoded' : 'btn-qrcode' }`} disabled={qrcode} ><FaQrcode className='icon'/> {qrcode ? 'Generated QR' : 'Generate QR'}</button>
                                </div>
                            </div>
                        }
                    </div>
                    {qrcode &&
                    <div className="col-md-6  mt-sm-4 mt-lg-0 text-center">
                        <img src={qrcode} style={{width:"150px",height:"150px"}} alt="" />
                    </div>
                    }
                </div>
            </div>
            <Footter/>
        </div>
    )
}
export  default ShortURL
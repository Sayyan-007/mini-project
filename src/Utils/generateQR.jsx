import { useState } from "react"
import toast from "react-hot-toast"

export const QRgenerate = () => {

    const [qrcode, setqrcode] = useState('')
    const [loading, setloading] = useState(false)

    const handleQR = (link) => {
        
        if (!link.trim()) {
            toast.error('Please Enter URL')
            return;
        }
        if (!(link.includes('www') || link.includes('http'))) {
            toast.error('Invalied Link');
            return;
        }
        setloading(true)
        try 
        {
            const response = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`
            setqrcode(response)
            toast.success('QR code Generated')
        }
        catch (error) 
        {
            console.log(error);
            toast.error('Something went wrong! Please try again.');
        }
        finally
        {
            setloading(false)
        }
    }
    return {qrcode,setqrcode,loading,handleQR}
}

// export default QRgenerate
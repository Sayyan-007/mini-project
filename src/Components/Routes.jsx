import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./homepage"
import { Fragment } from "react"
import ShortURL from "./shortURL"
import QRcode from "./QRcode"
import LinkValidation from "./LinkValidation"
import LinkPreviewGenerator from "./LinkPreview"

const WayRoute=()=>{
    return(

        <Fragment>
            <Routes>
                <Route path="" element={<Homepage/>} />
                <Route path="shorturl" element={<ShortURL/>}/>
                <Route path="qrcode" element={<QRcode/>}/>
                <Route path="linkvalidation" element={<LinkValidation/>}/>
                <Route path="linkpreview" element={<LinkPreviewGenerator/>}/>

            </Routes>
        </Fragment>

    )
}

export default WayRoute
const HeroSection=()=>{
    return(
        <div className="container" id="home">
            <div className="row justify-content-center align-items-center text-light text-center"style={{minHeight:"100vh"}}>
                <div className="col-md-6">
                    <h1 style={{fontFamily:"cursive"}} className="fst-italic">Your all-in-one Platform to shorten links and create QR codes. <br /> — fast, easy, and free.</h1>

                </div>
                <div className="col-md-6 mw-100 d-none d-md-block">
                    <img src="qrcodes.png" className="d-none d-md-block w-75 mx-auto"   alt="" />
                </div>
            </div>
        </div>
    )
}
export default HeroSection
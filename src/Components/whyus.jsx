import { FaLock,FaBolt,FaRegClock } from 'react-icons/fa';
const WhyChooseUs=()=>{
    return(
        <div className="container-fluid py-4" style={{ backgroundColor: '#212529', color: '#f8f9fa' }} id='whyus'>
            <div className="row text-center justify-content-center">
                <h1 className='fw-bolder text-center pb-3   ' style={{fontFamily:"revert"}}>Why Us</h1>
                <div className="col-lg-4 col-md-6 mt-2 ">
                    <h5 className="fw-bold p-3 m-0">Time-intensive</h5>
                    <div className=" w-100 text-center">
                        <FaRegClock size={35}/>
                        <p className='px-4 pt-3 fw-medium'>Timely scalable tech solutions, delivered reliably.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-2 ">
                    <h5 className="fw-bold p-3 m-0">Security-First Approach</h5>
                    <div className=" w-100 text-center">
                        <FaLock size={35}/>
                        <p className='px-4 pt-2 fw-medium'>We prioritize data security and follow industry best practices.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-2 ">
                    <h5 className="fw-bold p-3 m-0">Performance Optimized</h5>
                    <div className=" w-100 text-center">
                        <FaBolt size={35}/>
                        <p className='px-4 pt-2 fw-medium'>Fast, responsive, and SEO-optimized platforms for seamless experiences.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhyChooseUs
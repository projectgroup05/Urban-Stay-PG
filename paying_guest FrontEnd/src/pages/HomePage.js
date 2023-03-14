import React from 'react'
import './HomePage.css'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
export default function HomePage() {
    return (
        <div>
            <img src="https://bookmypg.co.in/assets/front/images/city-slider.png    " className="img-fluid" alt="Responsive image"></img>
            <div className='container-fluid imageBanner' style={{ marginTop: '20vh' }}>
                <div id="UniquieID" className='' style={{ background: 'url("https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1638170160/Website/CMS-Uploads/hv2ijnmhybtq1viz7mbh.jpg") no-repeat', position: 'absolute', height: 'f_auto', width: 'f_auto', top: '0px', left: '6vh', marginTop: '20vh', float: 'left' }} />
                <div style={{ float: 'left' }}>
                    <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1638170160/Website/CMS-Uploads/hv2ijnmhybtq1viz7mbh.jpg" className="rounded float-left" alt="..." />
                </div>
                <div style={{ float: 'right', minHeight: '12vh', maxWidth: '40vh', minWidth: '85vh', borderRadius: '5px', backgroundColor: 'whitesmoke' }}>
                    <div className="card" style={{ opacity: '100%', background: 'white' }}>
                        <br />
                        <h5 className="card-header">Book Your PG</h5>
                        <div className="card-body">
                            <h5 className="card-title">Welcome To Urban Stay</h5>
                            <p className="card-text">We, at Urban Stay, are focused towards providing hygenic
                                and  affordable Paying Guest (PG) rentals. We hope to provide you with the best renting solutions with the help of our designs and technology.Our services will help you find and book Paying Guest    (PG) rental homes.</p>
                            <p>Contact owner for more details: +91 9845235678
                                or proceed ahead.</p>
                            <a href="/buildingcards" className="btn btn-primary">Proceed ahead</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

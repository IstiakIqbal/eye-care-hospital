import React from 'react';
import facility1 from '../../../../images/facility/facility1.jpg'
import facility2 from '../../../../images/facility/facility2.jpg'
import facility3 from '../../../../images/facility/facility3.jpg'
import facility4 from '../../../../images/facility/facility4.jpg'

const Facility = () => {
    return (
        <div>
            <h1 className="text-info my-4">Our Facility</h1>
            <div class="container">
                <div class="row row-cols-2 mb-5">
                    <div class="col-lg-3 col-md-6 col-12">
                        <img className="img-fluid w-70 mb-2" src={facility1} alt="" />
                    </div>
                    <div class="col-lg-3 col-md-6 col-12 mb-2">
                        <img className="img-fluid w-70" src={facility2} alt="" />
                    </div>
                    <div class="col-lg-3 col-md-6 col-12 mb-2">
                        <img className="img-fluid w-70" src={facility3} alt="" />
                    </div>
                    <div class="col-lg-3 col-md-6 col-12 mb-2">
                        <img className="img-fluid w-70" src={facility4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facility;
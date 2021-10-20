import React from 'react';
import cataract1 from '../../../../images/cataracts/cataracts1.jpg'

const Cataracts = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mx-auto">
                    <h1 className="fs-1">What are Cataracts?</h1>
                    <p className="fs-5">A cataract develops when the lens in your eye, which is normally clear, becomes foggy. Most cataracts develop slowly over time, causing symptoms such as blurry vision. Cataracts can be surgically removed through an outpatient procedure that restores vision in nearly everyone.</p>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <img className="img-fluid w-60" src={cataract1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Cataracts;
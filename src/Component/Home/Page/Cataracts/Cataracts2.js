import React from 'react';
import cataracts2 from '../../../../images/cataracts/cataracts2.jpg'

const Cataracts2 = () => {
    return (
        <div className="container my-5">
            <div className="row my-5">
                <div className="col-lg-4 col-md-6 col-12 mx-auto">
                    <img className="img-fluid w-60" src={cataracts2} alt="" />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mx-auto mb-3">
                    <h1>Symptoms of Cataracts?</h1>
                    <p className="fs-5">Cataracts are a common part of the eye’s aging process. Eventually, they can cause:
                    </p>
                    <ol className="text-start">
                        <li>Vision that’s cloudy, blurry, foggy or filmy.</li>
                        <li>Sensitivity to bright sunlight, lamps or headlights.</li>
                        <li>Double vision.</li>
                        <li>Need for brighter light to read.
                        </li><li>Difficulty seeing at night (poor night vision).
                        </li>
                        <li>Fading or yellowing of colors
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Cataracts2;
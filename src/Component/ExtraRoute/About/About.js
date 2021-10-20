import React from 'react';
import about from '../../../images/About/about.jpg'

const About = () => {
    return (
        <div>
            <h1 className="text-primary mt-5">About Us</h1>
            <hr className="mb-4" />
            <div className="d-flex justify-content-center">
                <div className="col-lg-6">
                    <img className="w-70 img-fluid my-4" src={about} alt="" />
                    <ul className="my-5">
                        <li>
                            <h4 className="text-start">
                                Mayo Eye-Care (MEC) first started from a rented 5 storied building at Dhanmondi Road No. 6. To meet the increasing demand for clinical services and research, BEH moved to its own new facility at Shatmasjid Road, Dhamnondi, on the 10th October of the year 2012.
                            </h4>
                        </li>
                        <br />
                        <li>
                            <h4 className="text-start">We first started from a rented 5 storied building at Dhanmondi Road No. 6. To meet the increasing demand for clinical services and research, BEH moved to its own new facility at Shatmasjid Road, Dhamnondi, on the 10th October of the year 2012.With the promise and commitment in eye care, Bangladesh Eye Hospital Ltd. is now serving from 9 branches located in Dhanmondi, Banani, Uttara, Chittagong, Shantinagar, Khulna, Zigatola, Mirpur  and a non-profit “Bangladesh Eye Trust Hospital” in Rayerbazar.</h4>
                        </li>
                        <br />
                        <li>
                            <h4 className="text-start">All these have enhanced the MEC’s capabilities to deliver world-class cost effective eye care to meet the increasing demand and to expand its role in the eye care sector of Bangladesh.</h4>
                        </li>
                        <br />
                        <li>
                            <h4 className="text-start">At present Bangladesh Eye Hospital Ltd. (BEH) has 143 consultants and over 700 staffs to provide the best eye care services of the country. They are well experienced and dedicated to their responsibilities.</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
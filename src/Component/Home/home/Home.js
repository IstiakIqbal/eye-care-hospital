import React from 'react';
import Banner from '../../Header/Banner/Banner';
import Cataracts from '../Page/Cataracts/Cataracts';
import Cataracts2 from '../Page/Cataracts/Cataracts2';
import Facility from '../Page/Facility/Facility';
import Services from '../Services/Services';

const home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Cataracts></Cataracts>
            <Cataracts2></Cataracts2>
            <Facility></Facility>
        </div>
    );
};

export default home;
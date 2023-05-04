import React from 'react';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import SpecialMenu from '../ExtraSection/SpecialMenu';
import TopChef from '../ExtraSection/TopChef';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpecialMenu></SpecialMenu>
            <TopChef></TopChef>
            <Chef></Chef>
            
        </div>
    );
};

export default Home;
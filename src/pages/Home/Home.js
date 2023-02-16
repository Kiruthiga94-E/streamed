import React from 'react';
import { Banner, Catalogue, Nav } from '../../components/index.js';
import requests from '../../services/Requests';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <Nav />
            <Banner />
            {Object.entries(requests).map(([key, value]) => {
                return (
                    <Catalogue
                        title={value.title}
                        url={value.url}
                        isPosterPath
                        key={value.title}
                    />
                )
            })}
        </div>
    )
}

export default Home;
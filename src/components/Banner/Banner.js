import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import requests from "../../services/Requests";
import truncate from "../../utils/utils";
import './Banner.css';

function Banner() {
    const [banner, setBanner] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function getBanner() {
            const request = await axios.get(requests.getOriginals.url);
            setBanner(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        getBanner();
    }, [])

    return (
        <header
            className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className='banner__container'>
                <h1 className="banner_title">
                    {banner?.name || banner?.title || banner?.original_name}
                </h1>
                <div className='banner__buttons'>
                    <button className='banner__button' onClick={() => {
                        history.push('/stream')
                    }}>Play</button>
                    <button className='banner__button'>Watch Later</button>
                </div>
                <h1 className='banner__description'>{truncate(banner?.overview || '', 150)}</h1>
            </div>
            <div className='banner--fadeBottom' />
        </header>
    )
}

export default Banner;
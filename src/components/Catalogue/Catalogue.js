import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from '../../axios';
import './Catalogue.css';

function Catalogue({ title, url, isPosterPath = false }) {
    const [catalogue, setCatalogue] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function getCatalogue() {
            const request = await axios.get(url);
            setCatalogue(request.data.results);
            return request;
        }

        getCatalogue();
    }, [url])

    return (
        <div className='row'>
            <h2 className='row__title'>{title}</h2>
            <div className='row__posters'>
                {catalogue.map(catalogueItem => (
                    <img
                        className={`row__poster ${isPosterPath && "row__posterLarge"}`}
                        src={`https://image.tmdb.org/t/p/original/${isPosterPath ? catalogueItem.poster_path : catalogueItem.backdrop_path}`}
                        alt={catalogueItem.name}
                        key={catalogueItem.id}
                        onClick={() => history.push({
                            pathname: '/stream',
                            state: {
                                data: catalogue
                            }
                        })}
                    />
                ))}
            </div>
        </div>
    )
}

export default Catalogue;
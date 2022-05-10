import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Spinner } from '../components/Loader';
import placeholder from '../placeholder.png';
import './Detalles.css';

const Detalles = () => {
    const { idPelicula } = useParams(); 
    const [detalles, setDetalles] = useState([]);
    const [loader, setLoader] = useState(true);
    const imgUrl = detalles.poster_path ? `https://image.tmdb.org/t/p/w500/${detalles.poster_path}` : placeholder;

    useEffect(() => {
        setLoader(true);

        fetch(`https://api.themoviedb.org/3/movie/${idPelicula}`,{
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTlmNGNmOTc2MTRjYjQ3YjE3MGVjM2ZjNzIyNDkyMiIsInN1YiI6IjYxZmM3NDgzZWVlMTg2MDBmN2Y5ODI2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iCtWf9cW3PI8jNZ5xQL_CAgueDG1WurufMIoZ8fCOz4',
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(res => res.json())
            .then(data => setDetalles(data))
            .catch(err => console.error(err))
            .finally(() => { setLoader(false) });

    }, [idPelicula]);

    if(loader){
        return <Spinner />
    }

    return (
        <div className="contenedor-detalles">
            <div className="imagen">
                <img src={imgUrl} alt={imgUrl} />
            </div>
            <div className="detalles-info">
                <p><strong>Título:</strong> <i>{detalles.title}</i></p>
                {/* <p>
                    <strong>Género:</strong> {detalles.genres.map(genero => genero.name).join(', ')}
                </p> */}
                <span><strong>Fecha de estreno:</strong> <i>{detalles.release_date}</i></span>
                <p><strong>Descripción:</strong> <i>{detalles.overview}</i></p>
            </div>
        </div>
    )
}

export default Detalles;
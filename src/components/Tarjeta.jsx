import { Link } from 'react-router-dom';
import placeholder from '../placeholder.png';
import './Tarjeta.css';

const Tarjeta = ({ pelicula }) => {
    const imgUrl = pelicula.poster_path ? `https://image.tmdb.org/t/p/w300/${pelicula.poster_path}` : placeholder;

    return (
        <article className='pelicula'>
            <div className='pelicula-imagen'>
                <span className='pelicula-puntaje'>{pelicula.vote_average}</span>
                <Link to={`/detalles/${pelicula.id}`}>
                    <img src={imgUrl} alt={imgUrl} />
                </Link>

                <div className='pelicula-titulo'>
                    <h3>{pelicula.title}</h3>
                </div>
            </div>
        </article>
    )
}

export default Tarjeta;
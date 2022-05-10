import { useState, useEffect } from 'react'; 
import Tarjeta from './Tarjeta';
import { Spinner } from './Loader';
import './PeliculasApi.css';
import consumirApi from '../utils/useFetch';
import SinResultados from './SinResultados';
import InfiniteScroll from 'react-infinite-scroll-component'; 

const PeliculasApi = ({ buscar }) => {
    const [peliculas, setPeliculas] = useState([]);
    const [loader, setLoader] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoader(true);
        const buscarUrl = buscar 
            ? `/search/movie?query=${buscar}&page=${page}` 
            : `/discover/movie?page=${page}`;
        
        consumirApi(buscarUrl)
            .then(data => setPeliculas((prevPeliculas) => prevPeliculas.concat(data.results)))
            .catch(err => console.error(err))
            .finally(() => { setLoader(false) })
    }, [buscar, page]);

    if(!loader && peliculas.length === 0){
        return <SinResultados />
    }

    return (
        <InfiniteScroll
            dataLength={peliculas.length}
            hasMore={true}
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={loader && <Spinner />}
        >
            <section className="contenedor-peliculas">
                {
                    peliculas.map(pelicula => (
                        <Tarjeta key={pelicula.id} pelicula={pelicula}/>
                    ))
                }
            </section>
        </InfiniteScroll>
    )
} 

export default PeliculasApi;
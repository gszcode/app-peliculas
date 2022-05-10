import Buscar from "../components/Buscar";
import PeliculasApi from "../components/PeliculasApi";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from '../hooks/useDebounce';

const Home = () => {
    const query = useQuery();
    const buscar = query.get('buscar');
    const useDebounced = useDebounce(buscar, 300);

    return (
        <>
            <Buscar />
            <PeliculasApi key={useDebounced} buscar={useDebounced}/>
        </>
    )
}

export default Home;
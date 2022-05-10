import { IconBuscar } from "./IconBuscar";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import './Buscar.css';

const Buscar = () => {
    const history = useHistory();

    const query = useQuery();
    const buscarPeli = query.get('buscar');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        history.push(`/?buscar=${buscarPeli}`);
    }

    return (
        <form className="contenedor-formulario" onSubmit={handleSubmit}>
            <div className="formulario">
                <input 
                    type="text"
                    placeholder="Buscar"
                    className="formulario-input"
                    aria-label="Buscar"
                    value={buscarPeli || ''}
                    onChange={(e) => {
                        const value = e.target.value;
                        return (history.push(`/?buscar=${value}`))
                    }}
                />
                <button className="formulario-btn" type="submit">
                    <IconBuscar />
                </button>
            </div>
        </form>
    )
}

export default Buscar;
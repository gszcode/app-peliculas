import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
    return (
        <>
            <h2 className='error-titulo'>❌ No existe la Página ❌</h2>
            <Link className='error-btn' to="/">Ir al Inicio</Link>
        </>
    )
}

export default Error404;
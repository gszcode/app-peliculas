import { FaSpinner } from "react-icons/fa";
import "./Loader.css";

export function Spinner() {
  return (
    <div className='spinner'>
      <FaSpinner className='spinning' size={60} />
    </div>
  );
}
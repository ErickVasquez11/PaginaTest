import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const EnterHandler = () => {
        navigate("/Login");
    }

    return(
        <section className="bg-gray-700">
        <div className="flex flex-col justify-center items-center
        w-80 max-w-screen-sm mx-auto h-screen md:w-auto ">
            <button onClick= {EnterHandler} className="bg-gray-400 animate-pulse rounded-3xl text-lg h-52 w-80 p-3 border-4 focus:animate-none"> ENTRAR A UCA PAGES</button>
        </div>
        </section>
    )
}
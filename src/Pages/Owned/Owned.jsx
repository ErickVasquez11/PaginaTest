import { useNavigate } from 'react-router-dom';
import OwnedContainer from '../../Components/OwnedContainer';
import { useUserContext } from '../../Contexts/Context';

export default function Owned() {
    const navigate = useNavigate()
    const { Exit } = useUserContext()
    const { login, token } = useUserContext();

    const EnterHandler = () => {
        navigate("/admin")
    }

    const LogoutHandler = () => {
        Exit()
        navigate("/Login")
    }

    const goToPost = () => {
        navigate("/post")
    }

    const ownPosts = () => {
        navigate("/ownposts")
    }

    const createPost = () => {
        navigate("/createpost")
    }

    return (
        <div>
            {<section className="relative w-full px-8 text-white bg-gray-800 body-font">
                <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <a href="#_" className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none select-none">UCA pages</a>
                    <nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
                        <a onClick={EnterHandler} className="relative font-medium leading-6 p-5 rounded-lg hover:bg-gray-400 transition duration-150 ease-out ">
                            <span className="block">Home</span>
                            <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                                <span x-show="hover" className="absolute inset-0 inline-block w-full h-1 h-full transform "></span>
                            </span>
                        </a>
                    </nav>
                    <div class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
                        <span class="inline-flex rounded-md shadow-sm">
                            <a href="#" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                onClick={LogoutHandler}>
                                Cerrar Sesión
                            </a>
                        </span>
                    </div>
                </div>
            </section>}
        <OwnedContainer/>
        </div>
    )
}
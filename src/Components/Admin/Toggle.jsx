import Services from "../../Services/UserServices";
import React, { useEffect, useState } from 'react';
import CardToggle from "../cardToggle";
import { useUserContext } from '../../Contexts/Context';

export default function ToggleP() {
    const [pages, setPages] = useState(0);
    const [posts, setPosts] = useState([]);
    const { login, token } = useUserContext();
    const [id, setid] = useState();

    useEffect(() => {
        getPosts();
    }, []);

    const nextPage = async () => {
        const newPages = pages + 1;
        setPages(newPages);
        await getPosts();
    }

    const previusPage = async () => {
        const newPages = pages - 1;
        setPages(newPages);
        await getPosts();
    }

    //Aca basicamente solo el admin puede acceder a esta pagina asi que 
    //por ese motiivo se hace la funcion asi
    const getPosts = async () => {
        let response = await Services.Owned(token, "admin", 6, pages)
        let data = response.data;
        setPosts(data);
    }

    const GetValue = (val) =>{
        setid(val.target.value)
    }

    const Active_desactive = () =>{
        Services.Toggle(token,"admin",id)
    }

    return (
        
        <>
        
            <div className="flex flex-wrap">
                {posts.map((data) => {
                    return <CardToggle createdAt={data.createdAt} id={data._id} title={data.title} isOwnedPage={false}/>
                })}
            </div>
            <div className="flex justify-center space-x-5 pb-5">
                <button className="bg-blue-300 p-3 rounded" onClick={previusPage}>Anterior</button>
                <button className="bg-red-300 p-3 rounded" onClick={nextPage}>Siguiente</button>
            </div>
            <h1>Ingresar id</h1>
            <input type="text" placeholder="id" onChange={GetValue}/>
            <button onClick={Active_desactive}>Activar/Desactivar</button>
        </>
    )
}
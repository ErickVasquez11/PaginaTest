import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../Contexts/Context';
import Services from "../../Services/UserServices";

export default function UpdatePostC() {
    const [post, setpost] = useState("")
    const [posts, setPosts] = useState([]);
    const { login, token } = useUserContext();
    const [title, setTitle] = useState("")
    const [descrip, setdescrip] = useState("")
    const [img, setimg] = useState("")


    useEffect(() => {
        getPosts();
    }, []);

    const SetData = (val) =>{
        setTitle(val.target.value)
    }

    const SetData2 = (val) =>{
        setdescrip(val.target.value)
    }

    const SetData3 = (val) =>{
        setimg(val.target.value)
    }

    const Active_desactive = () => {
        const cscs = posts.find(element => element.title == post)
        console.log(post)
        console.log(cscs)
        /* Services.Update(token,"admin",) */
    }

    const update_post=() =>{

    }

    const GetValue = (get) => {
        setpost(get.target.value)
    }
    const getPosts = async () => {
        let response = await Services.Owned(token, "admin", 100, 0)
        let data = response.data;
        setPosts(data);
    }
    return (
        <div>

            <div className="flex flex-wrap">
            </div>
            <div className="flex justify-center space-x-5 pb-5">
                <h1>Ingrese el nombre de post</h1>
                <input type="text" />
            </div>
            <h1>Ingresar id</h1>
            <input type="text" placeholder="id" onChange={GetValue} />
            <button onClick={Active_desactive}>buscar</button>

            <h1>
                Ingresar
            </h1>
            <div className="text-center flex flex-col space-y-3 mx-5">
                <h2 className="text-white font-bold text-xl">
                    Titulo:
                </h2>
                <input id="titulo" type="text" placeholder="Inserte su titulo" onChange={SetData} className="rounded-xl p-2" />
                <h2 className="text-white font-bold text-xl">
                    Descripción:
                </h2>
                <input id="Description" type="text" placeholder="Inserte una descripcion" onChange={SetData2} className="rounded-xl p-2" />
                <h2 className="text-white font-bold text-xl">
                    Imagen:
                </h2>
                <input id="Imagen" type="text" placeholder="(Use una URL valida)" onChange={SetData3} className="rounded-xl p-2" />
                <button onClick={update_post} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition ">UPDATE POST</button>
            </div>

            </div>
            )
}
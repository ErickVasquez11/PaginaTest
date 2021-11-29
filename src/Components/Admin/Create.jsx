import { tsImportEqualsDeclaration } from '@babel/types';
import { useState } from 'react';
import { useUserContext } from '../../Contexts/Context';
import Services from '../../Services/UserServices';
//
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostContainer from '../PostContainer';


export default function CreatePost() {
    const { login, token } = useUserContext();
    const [title, setTitle] = useState("")
    const [descrip, setdescrip] = useState("")
    const [img, setimg] = useState("")
    const [Error, SetError] = useState(false);

    const notifySucces = () => toast("Post created successfully");
    const notifyErrorTitle = () => toast.error("El titulo debe tener entre 8 y 32 caracteres");
    const notifyErrorEmpty = () => toast.error("Todos los campos son oblogatorios y no pueden quedar vacios");

    const SetData = (val) =>{
        setTitle(val.target.value)
    }

    const SetData2 = (val) =>{
        setdescrip(val.target.value)
    }

    const SetData3 = (val) =>{
        setimg(val.target.value)
    }
    const CreateNewPost = () => {
        if (title === "" || descrip ==="" || img==="") {
            notifyErrorEmpty();
        }else if (title.length < 9 || title.length > 33 || descrip.length < 9) {
            notifyErrorTitle();
        }else{
            notifySucces();
            Services.createPost(token, "admin", title,descrip,img)
            .then(res => {
                console.log(res);
            }, err => {
                console.log(err);
            }
            )
            reloadPage();
        }
        
    }

    //funcion para ocultar el formulario
    const HideForm = () => {
        document.getElementById("form").style.display = "none";
    }

    const reloadPage = () => {
        setTimeout(function(){
            window.location.reload();
        }   ,5000);
    }

    const reloadFaster = () => {
        setTimeout(function(){
            window.location.reload();
        }   ,1000);
    }

    return(
        <div className="bg-gray-800 w-96 h-96 rounded-lg mx-auto mt-5" id="form">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
                <div className="text-center flex flex-col space-y-3 mx-5 pt-7">
                <h2 className="text-white font-bold text-xl">
                    Titulo:
                </h2>
                <input id="titulo" type="text" placeholder="Inserte su titulo" onChange={SetData} className="rounded-xl p-2"/>
                <h2 className="text-white font-bold text-xl">
                    Descripción:
                </h2>
                <input id="Description" type="text" placeholder="Inserte una descripcion" onChange={SetData2} className="rounded-xl p-2"/>
                <h2 className="text-white font-bold text-xl">
                    Imagen:
                </h2>
                <input id="Imagen" type="text" placeholder="(Use una URL valida)" onChange={SetData3} className="rounded-xl p-2"/>
                <div className="space-x-5">
                    <button onClick={CreateNewPost} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition ">Subir post</button>
                    <button onClick={reloadFaster} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition ">Cancelar</button>
                </div>
            </div>

        </div>
    )
}
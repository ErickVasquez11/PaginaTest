import Services from "../Services/UserServices";
import { useUserContext } from "../Contexts/Context"
import { useState } from "react";

const AddCommentBox = (props) => { //De aca se recibe el id del post

    const { login, token } = useUserContext();  //Se obtiene el token y el usuario logueado

    return (
        <>
            <form className="w-full">
            <input
                className="px-4 py-2 w-full rounded-lg text-gray-800 border border-gray-500 text-sm"
                type="text"
                placeholder="Escribe tu comentario y presiona enter"
            />
            </form>
        </>
    )
}


export default AddCommentBox;
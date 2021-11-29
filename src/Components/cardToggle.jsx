import React from "react"
import { useState } from "react"
import { UilEditAlt } from '@iconscout/react-unicons'
import { UilSmileBeam } from '@iconscout/react-unicons'
import { UilStar } from '@iconscout/react-unicons'
import { UilAndroidPhoneSlash } from '@iconscout/react-unicons'
import { UilCommentAltLines } from '@iconscout/react-unicons'
import { useUserContext } from "../Contexts/Context"
import { useEffect } from "react"
import Services from "../Services/UserServices";
import CommentCardContainer from "./CommentContainer"
import AddCommentBox from "./AddCommentBox"


export default function CardToggle(props) {

    const { login, token } = useUserContext();

    const [username, setUsername] = useState("");

    const getUsername = async () => {
    const response = await Services.verifyToken(token);
    const username = response.username;
    setUsername(username);
}
    useEffect(() => {
        getUsername();
    }, []);

    return (
        <>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <div className="p-6 transition duration-300 ease-in">
                            <h1 className="text-2xl font-semibold mb-3">{props.title}</h1>
                            <p>{props.id}</p>
                            <p className="leading-relaxed mb-3">{props.description}</p>
                        </div>
                    </div>
                </div>
        </>
    )}
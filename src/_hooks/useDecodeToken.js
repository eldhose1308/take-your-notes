import { useState, useEffect } from 'react'

import { jwtDecode } from "jwt-decode";

const useDecodeToken = (token) => {
    token = token || "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNiwiaWRlbnRpZmllciI6Ik5pczRiMWxuYm1aaGNXZEpabmhGZUhWdU1tSjZkejA5Vll5S042IiwiaWF0IjoxNzAwOTk2NDA0LCJleHAiOjE3MDEwMDAwMDR9.tmYxcaEpSund46Rxauid32SDJwSK0veD1VeBZnxtILs"
    const [ decodedToken, setDecodedToken ] = useState(null)

    useEffect(() => {
        if(!token) return null

        try{
            const decoded = jwtDecode(token);

            if(!decoded) throw new Error('Invlid Token')

            setDecodedToken(decoded)

        }catch(err){
            setDecodedToken(null)
            console.log('Error while decoding token : ' + err)
        }

    },[token])

    return decodedToken;
}

export default useDecodeToken;
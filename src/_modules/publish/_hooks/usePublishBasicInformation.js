import { useState, useEffect } from "react";

import * as publishService from "_services/publish.service";

const usePublishBasicInformation = () => {
    const [fetchStatus, setFetchStatus] = useState('none');

    const fetchPostsData = async (filters) => {
        // try{
        //     setFetchStatus('loading');
        //     const postsData = await publishService.getPosts(filters);
        //     // setFetchStatus('success');
        //     if(postsData.length === 0){
        //         setFetchStatus('empty');
        //     }else{
        //         setFetchStatus('success');
        //         setTimeout(() => {
        //             setFetchStatus('none');
        //         }, 1000);
        //     }
            
        //     return postsData;
        // }catch(error){
        //     setFetchStatus('failure');
        // }
    }

    const savePublishBasicInformation = async (formData) => {
        const { appName, subdomainName, contactEmail, tagLine } = formData;
        const payload = {
            app_name: appName,
            subdomain_name: subdomainName,
            contact_email: contactEmail,
            tag_line: tagLine
        };
        try{
            setFetchStatus('loading');
            await publishService.saveBasicInformation(payload);
        }catch(error){
            setFetchStatus('failure');
            throw error;
        }
    }

    return {
        fetchStatus,
        fetchPostsData,

        savePublishBasicInformation
    }
}

export default usePublishBasicInformation;
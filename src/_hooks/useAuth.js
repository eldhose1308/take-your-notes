import { useClientAuth } from "_contexts/AuthProvider"
import { useTopLoader } from "_contexts/TopLoaderProvider";

import * as userModel from "_services/user.service";

const useAuth = () => {
    const { showTopLoader, hideTopLoader, setProgress } = useTopLoader()

    const { isAuthenticated, loginClient, logoutClient } = useClientAuth()

    const login = async (formData) => {
        showTopLoader()
        
        try{
            const userData = await userModel.login(formData, { setProgress });
            const { data } = userData;
            loginClient(data)
            return userData
        }catch(err){
        }finally{
            hideTopLoader()
        }
    }

    const logout = () => {
        // call server api here
        logoutClient()
    }

    return {
        isAuthenticated,
        login,
        logout
    }
}

export default useAuth
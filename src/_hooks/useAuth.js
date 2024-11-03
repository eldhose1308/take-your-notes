import { useClientAuth } from "_contexts/AuthProvider"
import { useTopLoader } from "_contexts/TopLoaderProvider";

import * as userModel from "_services/auth.service";

const useAuth = () => {
    const { showTopLoader, hideTopLoader, setProgress } = useTopLoader()
    const { isAuthenticated, loginClient, logoutClient } = useClientAuth()

    const login = async (formData) => {
        showTopLoader()
        
        try{
            const userData = await userModel.login(formData, { setProgress });
            const { data } = userData;
            setTimeout(() => {
                loginClient(data)
            }, 1500)
            return userData
        }catch(err){
            throw err;
        }finally{
            hideTopLoader()
        }
    }

    const signup = async (formData) => {
        showTopLoader()
        
        try{
            const userData = await userModel.register(formData, { setProgress });
            const { data } = userData;
            loginClient(data)
            return userData
        }catch(err){
            throw err;
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
        signup,
        logout
    }
}

export default useAuth
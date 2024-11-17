import { useClientAuth } from "_contexts/AuthProvider"
import { useTopLoader } from "_contexts/TopLoaderProvider";

import * as authModel from "_services/auth.service";
import * as userModel from "_services/users.service";

const useAuth = () => {
    const { showTopLoader, hideTopLoader, setProgress } = useTopLoader()
    const { isAuthenticated, loginClient, logoutClient, user, updateUser } = useClientAuth()

    const login = async (formData) => {
        showTopLoader()
        
        try{
            const userData = await authModel.login(formData, { setProgress });
            // const { data } = userData;
            setTimeout(() => {
                loginClient(userData)
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
            const userData = await authModel.register(formData, { setProgress });
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

    const updateUserData = async (formData) => {
        try{
            const { avatar, removeAvatar } = formData || {};
            if(avatar){
                const userData = await userModel.uploadUserAvatar(formData);
                updateUser(userData);
                return userData;
            }

            if(removeAvatar){
                const userData = await userModel.removeUserAvatar(formData);
                updateUser(userData);
                return userData;
            }
            // const { data } = userData;
            // updateUser();
        }catch(err){
            throw err;
        }
        // finally{
        //     hideTopLoader()
        // }
    }

    return {
        user,
        updateUserData,
        isAuthenticated,
        login,
        signup,
        logout
    }
}

export default useAuth
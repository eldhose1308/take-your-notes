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
            }, 1000)
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
            // const { data } = userData;
            loginClient(userData)
            return userData
        }catch(err){
            throw err;
        }finally{
            hideTopLoader()
        }
    }

    const googleAuth = async (formData) => {
        showTopLoader()
        
        try{
            const userData = await authModel.googleAuth(formData, { setProgress });
            // const { data } = userData;
            loginClient(userData)
            return userData
        }catch(err){
            throw err;
        }finally{
            hideTopLoader()
        }
    }

    const logout = async () => {
        // call server api here
        try{
            const userData = await authModel.logout();
            // const { data } = userData;
            logoutClient()
            return userData
        }catch(err){
            throw err;
        }finally{
            hideTopLoader()
        }
    }

    const updateUserData = async (formData) => {
        try{
            const { avatar, removeAvatar, basicInfo, extraInfo } = formData || {};
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

            if(basicInfo){
                const userData = await userModel.updateBasicInfo(basicInfo);
                updateUser(userData);
                return userData;
            }
            if(extraInfo){
                const userData = await userModel.updateExtraInfo(extraInfo);
                updateUser(userData);
                return userData;
            }
            // const { data } = userData;
            // updateUser();
        }catch(err){
            const { statusCode } = err;
            if(statusCode === 401){
                logout();
                return;
            }
            throw err;
        }
        // finally{
        //     hideTopLoader()
        // }
    }

    return {
        user,
        updateUserData,
        updateUser,
        isAuthenticated,
        login,
        signup,
        logout,

        googleAuth
    }
}

export default useAuth
import { useNavigate } from "react-router-dom";

const useUsersPostNavigation = () => {
    const navigate = useNavigate();

    const navigateToList = () => {
        navigate("/my/posts");
    }
    const navigateToView = ({ userName, postSlug }) => {
        navigate(`/users/${userName}/posts/${postSlug}`);
    }
    const navigateToCreate = () => {
        navigate("create");
    }
    const navigateToEdit = (id) => {
        navigate("edit/" + id);
    }

    return {
        navigateToList,
        navigateToCreate,
        navigateToEdit,
        navigateToView
    }

}

export default useUsersPostNavigation;
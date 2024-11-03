import { useNavigate } from "react-router-dom";

const usePostsNavigation = () => {
    const navigate = useNavigate();

    const navigateToList = () => {
        navigate("/my/posts");
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
        navigateToEdit
    }
}

export default usePostsNavigation
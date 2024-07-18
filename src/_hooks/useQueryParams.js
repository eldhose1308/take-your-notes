import { useParams } from 'react-router-dom'

const useQueryParams = () => {
    const params = useParams()

    return params;
}

export default useQueryParams;
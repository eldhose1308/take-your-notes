import { useNavigate } from 'react-router-dom';

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const navigateTo = (path, options = {}) => {
    navigate(path, options);
  };

  return navigateTo;
};

export default useCustomNavigate;

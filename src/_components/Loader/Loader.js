import Stencil from "./Stencil";
import Dots from "./Dots";
import Spinner from "./Spinner";
import useLoading from "_hooks/useLoading";

const loadersMap = {
    stencil: Stencil,
    dots: Dots,
    spinner: Spinner
}

const Loader = (props) => {
    const { type='stencil' } = props;
    const { isLoading, setIsLoading } = useLoading();
    
    // return Spinner
    const Component = loadersMap[type] || Spinner;
    return <Component />;
    // return Component;

}

export default Loader;
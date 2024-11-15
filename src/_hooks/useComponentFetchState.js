import React from "react";

import { Stencil } from "_components/Loader";
import Failure from "_components/State/Failure";

const DefaultStencil = () => <Stencil count={3} />

const useComponentFetchState = (props) => {
    const { fetchStatus, loading: Loading=<DefaultStencil />, success: Success, empty: Empty, failure: FailureTemplate=<Failure /> } = props;
    const FailureComponent = <FailureTemplate />;

    const ComponentStateMap = {
        none: Success,
        loading: Loading,
        failure: Failure,
        success: Success,
        empty: Empty,
    }


    const ComponentState = ComponentStateMap[fetchStatus] || null;
    return ComponentState;
}

export default useComponentFetchState;
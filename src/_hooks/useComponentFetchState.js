import React from "react";

import { Stencil } from "_components/Loader";
import Failure from "_components/State/Failure";
import UnAuthorised from "_components/State/UnAuthorised";
import Empty from "_components/State/Empty";

const DefaultStencil = () => <Stencil count={3} />

const useComponentFetchState = (props) => {
    const { fetchStatus, messages, loading: Loading=<DefaultStencil />, success: Success, empty: EmptyTemplate=<Empty />, unauthorised: UnAuthorisedTemplate=<UnAuthorised />, failure: FailureTemplate=<Failure /> } = props;
    const { failure, empty } = messages || {};
    const { heading: failureHeading, description: failureDescription } = failure || {};
    const { heading: emptyHeading, description: emptyDescription } = empty || {};

    const FailureComponent = () => <FailureTemplate heading={failureHeading} description={failureDescription} />;

    const ComponentStateMap = {
        // none: Loading,
        loading: Loading,
        failure: FailureTemplate,
        success: Success,
        empty: EmptyTemplate,
        unauthorised: UnAuthorisedTemplate, // create a template for unathorised
    }


    const ComponentState = ComponentStateMap[fetchStatus] || null;
    return ComponentState;
}

export default useComponentFetchState;
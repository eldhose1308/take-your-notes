import React from "react";

import CategoryFiltersWithDND from "../CategoryFiltersWithDND";
import UsersFiltersWithDND from "../UsersFiltersWithDND";
import SubscribersFilter from "../SubscribersFilter";
import SubscriptionsFilter from "../SubscriptionsFilter";

const renderForm = (selectedTab, props) => {
    switch (selectedTab) {
        case 'category':
            return <CategoryFiltersWithDND {...props} />;
        case 'user':
            return <UsersFiltersWithDND {...props} />;
        case 'subscriptions':
            return <SubscriptionsFilter {...props} />;
        case 'subscribers':
            return <SubscribersFilter {...props} />;
        default:
            return <p>Not Available</p>
    }
}

export default renderForm;
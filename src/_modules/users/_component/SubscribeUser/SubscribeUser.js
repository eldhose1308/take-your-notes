import React from "react";

import SubscribeButton from "_components/UI/SubscribeButton/SubscribeButton";

import * as subscriptionsService from '_services/subscriptions.service';
import { isUserDataSameAsLoggedInUser } from "_utils/userAuth";

const SubscribeUser = (props) => {
    const { userId, userName, isSubscribed = false, updateUser=()=>{} } = props;
    const isCurrentUserDetail = userName ? isUserDataSameAsLoggedInUser(userName) : false;

    const subscriptionHeading = isSubscribed ? 'Confirm UnSubscription ?' : 'Confirm Subscription ?';
    const subscriptionDescription = isSubscribed ? 'Are you sure you want to unsubscribe? You will no longer receive email notifications when this user posts new content.' : 'By subscribing to this user, you agree to receive an email notification every time they post new content. Are you sure you want to subscribe?';

    const subscriptionButtonValues = isSubscribed ? {
        none: 'Confirm Unsubscription',
        loading: 'Unsubscribing from the user',
        failure: 'Failed to unsubscribe from the user',
        completed: 'Unsubscribed from the user',
    } : {
        none: 'Confirm Subscription',
        loading: 'Subscribing to the user',
        failure: 'Failed to subscribe to the user',
        completed: 'Subscribed to the user',
    }

    const handleSubscription = async () => {
        try{
            if(isSubscribed){
                await subscriptionsService.unSubscribeUser(userId);
                updateUser(previousUserState => ({ ...previousUserState, isSubscribed: false }));
            }else{
                await subscriptionsService.subscribeUser(userId); 
                updateUser(previousUserState => ({ ...previousUserState, isSubscribed: true }));
            }
        }catch(err){
            throw err;
        }
    }

    if(isCurrentUserDetail){
        return null;
    }

    return (
        <SubscribeButton
            onClick={handleSubscription}
            isSubscribed={isSubscribed}
            subscribeText={isSubscribed ? 'Unsubscribe' : 'Subscribe'}
            textInputs={{ 
                heading: subscriptionHeading, 
                message: subscriptionDescription, 
                buttonValues: subscriptionButtonValues 
            }}
        />
    )
}

export default SubscribeUser;
import React, { useState, useEffect } from "react";

import { Button, Checkbox, TextArea } from "_components/Form";

import useForm from "_hooks/useForm";
import { FeedbackFormSchema } from "../_utils/validation-rules";
import ModeSelector from "_components/UI/ModeSelector/ModeSelector";
import { useToast } from "_contexts/ToastProvider";

import * as feedbacks from "_services/feedbacks.service";
import useShowMorePagination from "_components/Pagination/_hooks/useShowMorePagination";
import useFeedbacks from "../_hooks/useFeedbacks";
import { Stencil } from "_components/Loader";
import EmptyFollowingUsers from "_components/DisplayStates/Empty/EmptyFollowingUsers";
import FollowersUnAuthorised from "_components/DisplayStates/Error/FollowersUnAuthorised";
import FeedbackItemList from "./FeedbackItemList";
import useComponentFetchState from "_hooks/useComponentFetchState";
import FeedbackTypeSelector from "./FeedbackTypeSelector";
import UserFilters from "_modules/users/_component/UserFilters";
import FeedbackFilters from "./FeedbackFilters";
import FeedbackUnAuthorised from "_components/DisplayStates/Error/FeedbackUnAuthorised";
import EmptyFeedbacks from "_components/DisplayStates/Empty/EmptyFeedbacks";

const pageSize = 30;

const MyFeedbacks = () => {
    const { currentPage, isAllDataFetched, incrementPagination, checkIfAllDataFetched, resetPagination } = useShowMorePagination({ pageSize });
    const { fetchFeedbacksData, fetchStatus } = useFeedbacks();
    const [feedbackType, setFeedbackType] = useState('complaint');

    const [filters, setFilters] = useState({});
    const [data, setData] = useState([]);

    const CategoriesComponentState = useComponentFetchState({
        fetchStatus,
        loading: <Stencil />,
        empty: <EmptyFeedbacks />,
        unauthorised: <FeedbackUnAuthorised />,
        success: <FeedbackItemList feedbacksList={data} />
    });

    const handleFiltersChange = async (newFilters) => {
        const userFilters = { ...filters, ...newFilters };
        setFilters(userFilters);
        setData([]);
        resetPagination();
        const usersFilter = { page: 1, limit: pageSize, ...userFilters };
        try{
            const users = await fetchFeedbacksData(usersFilter);
            checkIfAllDataFetched(users);
            setData(users);
        }catch(err){
            console.error(err);
        }
    }

    const fetchFeedbacks = async () => {
        const usersFilter = { page: currentPage + 1, limit: pageSize, ...filters };
        try {
            const users = await fetchFeedbacksData(usersFilter);
            setData((previousUsers) => [...previousUsers, ...users]);

            incrementPagination();
            checkIfAllDataFetched(users);
            return users;
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchFeedbacks();
    }, [])

    return (
        <div className="text-default mx-5">
            {/* <h1>Feedback List</h1> */}

            <FeedbackFilters onChange={handleFiltersChange} />
            <div className="flex text-xs">

                <FeedbackTypeSelector selectedValue={feedbackType} onChange={handleFiltersChange} />
            </div>

            <div className="flex flex-col">
                {CategoriesComponentState}

            </div>
        </div>
    );
}

export default MyFeedbacks;
import React, { useState, useEffect } from "react";

import { Stencil } from "_components/Loader";
import AdditionalContentSection from "_components/Misc/AdditionalContentSection";
import MiniUsersList from "./_components/MiniUsersList";
import SeeMoreButton from "_components/Misc/SeeMoreButton";

import useUsers from "_modules/users/_hooks/useUsers";
import useComponentFetchState from "_hooks/useComponentFetchState";

import CLIENT_ROUTES from "_routes/clientRoutes";


const pageSize = 6;
const usersListRoute = CLIENT_ROUTES.USER_LIST;

const AdditionalUsers = () => {
    const [usersData, setUsersData] = useState();
    const { fetchStatus, fetchUsersData } = useUsers();
    const UsersListComponentState = useComponentFetchState({
        fetchStatus,
        loading: <Stencil />,
        success: <MiniUsersList usersList={usersData} />
    });

    const fetchUsers = async () => {
        const filters = { page: 1, limit: pageSize };
        try {
            const usersList = await fetchUsersData(filters);
            setUsersData(usersList);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <React.Fragment>
            <AdditionalContentSection
                heading='Fresh Faces in the Community'
                renderFooter={() => <SeeMoreButton linkUrl={usersListRoute} />}
            >

                <div className="border-b border-custom">
                    {UsersListComponentState}
                </div>

            </AdditionalContentSection>

        </React.Fragment>
    )
}

export default AdditionalUsers;
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Flex from "_components/Misc/Flex/Flex";
import Avatar from "_components/UI/Avatar/Avatar";
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import { isUserDataSameAsLoggedInUser } from "_utils/userAuth";
import CLIENT_ROUTES from "_routes/clientRoutes";

const UserCard = ({ userData }) => {
    const { fullName, userName } = userData || {};
    const navigate = useNavigate();

    const isCurrentUserDetail = isUserDataSameAsLoggedInUser(userName);
    const userDetailRoute = CLIENT_ROUTES.USER_DETAIL(userName);

    return (
        <Card size='sm' rounded='lg' className='border hover-border-highlight mx-4 my-2'>
            <CardContent>
                <Flex direction='' alignItems='none' justifyContent='spaceBetween'>
                    <div className="flex flex-col mb-2">
                        <Link to={userDetailRoute} className='cursor-pointer group-hover'>
                            <div className="flex mb-2">
                                <Avatar name={fullName} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&amp;usqp=CAU" />
                                <div className="flex flex-col">
                                    <h3 className="text-sm text-default px-3">{fullName}</h3>
                                    <p className="text-secondary px-3 space-y-1 text-xs">2w ago</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col mb-2">
                        {!isCurrentUserDetail && <div className="bg-custom text-accent hover-text-custom hover-accent text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md">
                            <span className="flex items-center">
                                <span className="flex items-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6" /><circle cx="10" cy="8" r="5" /><path d="M19 16v6" /><path d="M22 19h-6" /></svg>
                                </span>
                                Follow
                            </span>
                        </div>}
                    </div>
                </Flex>
            </CardContent>
        </Card>
    )
}

export default UserCard;
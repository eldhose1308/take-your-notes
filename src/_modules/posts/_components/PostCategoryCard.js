import React from "react";

import Flex from "_components/Misc/Flex/Flex";
import { Card, CardContent } from "_components/Misc/Card/Card";
import PostCategoryInfo from "./PostCategoryInfo";

const PostCategoryCard = ({ categoryData }) => {

    return (
        <Card size='sm' rounded='lg' className='border hover-border-highlight mx-4 my-2 group-hover'>
            <CardContent>
                <Flex direction='' alignItems='none' justifyContent='spaceBetween'>
                    <PostCategoryInfo categoryData={categoryData} hasFollowers hasPosts hasFollowButton={false} />
                </Flex>
            </CardContent>
        </Card>
    )
}

export default PostCategoryCard;
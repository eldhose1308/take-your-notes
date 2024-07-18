import React from "react";

import Flex from "_components/Misc/Flex/Flex";
import Avatar from "_components/UI/Avatar/Avatar";
import { Button } from "_components/Form";

const MiniCommunityCard = () => {

    return (
        <Flex justifyContent='spaceBetween' className='py-2'>
            <div className="flex mb-2 items-center">

                <Avatar size='xs' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&amp;usqp=CAU" />

                <div className="flex flex-col">
                    <h3 className="text-default px-3 text-sm">Javascript</h3>
                    <p className="text-secondary px-3 space-y-1 text-xs">255 members</p>
                </div>
            </div>

            <div className="flex mb-2">
                <Button variant='custom' size='xs'>
                    <div className="flex pr-2 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                    </div>
                    <span className="text-xs">
                        Join
                    </span>
                </Button>
            </div>
        </Flex>
    )
}

export default MiniCommunityCard
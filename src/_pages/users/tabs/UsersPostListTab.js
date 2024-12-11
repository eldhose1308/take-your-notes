import React from "react";
import UsersPostList from "../UsersPostList";
import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";

const UsersPostListTab = (props) => {
    const { userName } = props;

    return (
        <div>

            <div className="flex flex-col mt-4 mx-1">
                <Separator />

                <Typography type='span' textVariant='default' className='my-2'>
                    Collected Works of
                    <Typography type='span' className='ml-2 my-2'>{userName}</Typography>
                </Typography>

                <Separator />
            </div>


            <div className='flex content-start w-full'>
                <React.Fragment>
                    <UsersPostList key={userName} userName={userName} />
                </React.Fragment>
            </div>
        </div>
    )
}

export default UsersPostListTab;
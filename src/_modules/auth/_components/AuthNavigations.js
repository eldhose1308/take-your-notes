import React from "react";

import { Link } from "react-router-dom";

import Flex from "_components/Misc/Flex/Flex";
import Typography from "_components/Misc/Typography/Typography";

const AuthNavigations = (props) => {
    const { currentPage, navigateTo, navigateToLink } = props;

    return (
        <Flex justifyContent='spaceBetween' className='mb-3'>
            <Typography size='xl'>
                {currentPage}
            </Typography>
            <Typography size='lg' variant='secondary'>
                <Link to={navigateToLink}>
                    <Flex className='hover-text-default'>
                        <span className="mx-2 text-md">
                            {navigateTo}
                        </span>
                        <svg className="lucide lucide-circle-arrow-right animate-bounce-x" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="m12 16 4-4-4-4" /></svg>
                    </Flex>
                </Link>
            </Typography>
        </Flex>
    )
}

export default AuthNavigations
import React, { useState, useEffect } from "react";

import Flex from "_components/Misc/Flex/Flex";
import { Card, CardContent, CardFooter, CardTitle } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button } from "_components/Form";
import MiniCommunityCard from "./MiniCommunityCard";

import * as communityModel from "_services/communities.service";
import { filters } from "../_utils/communityFilter";
import useLoading from "_hooks/useLoading";
import FileInfoTable from "_modules/notes/_components/infotable/FileInfoTable";

const MiniCommunityList = (props) => {
    const { filter = 'RANDOM' } = props;

    const [isCardOpen, setIsCardOpen] = useState(true)

    const toggleCard = () => {
        setIsCardOpen(prev => !prev)
    }

    return (
        <Card border='ghost' className='mx-3 my-3 bg-light  rounded-md border border-another'>
            <CardTitle>
                <Flex justifyContent='spaceBetween' className='px-3 py-1 border-b border-another bg-default rounded-md'>
                    <Typography size='md' textVariant='default'>
                        Note Details
                    </Typography>
                    <Button width='none' variant='ghost' size='xs' onClick={toggleCard}>
                        {isCardOpen ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                        }
                    </Button>
                </Flex>
            </CardTitle>
            {isCardOpen && <CardContent className='px-3 py-2'>
                {/* Select a note and see it's info */}
                <Flex direction='column'>

                    <FileInfoTable fileInfo={[
                        {
                            "header": "File Name",
                            "data": "Sample"
                        },
                        {
                            "header": "File Path",
                            "data": "home/sdkf/dddd"
                        },
                        {
                            "header": "File Location",
                            "data": "Main Folder"
                        },
                        {
                            "header": "Created by",
                            "data": "John Doe"
                        },
                        {
                            "header": "Created at",
                            "data": "2024-06-29"
                        },
                        {
                            "header": "Last edited at",
                            "data": "2024-06-30"
                        },
                        {
                            "header": "Last edited by",
                            "data": "Jane Smith"
                        }
                    ]} />

                </Flex>

            </CardContent>}
            {/* <CardFooter>
                <Flex>
                    <Button size='xs' width='none' variant='ghost' className='border border-secondary hover-border-custom'>See more</Button>
                </Flex>
            </CardFooter> */}
        </Card>
    )
}

export default MiniCommunityList
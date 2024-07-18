import React from "react";

import Flex from "_components/Misc/Flex/Flex";
import { TabItem, Tabs } from '_components/UI/Tabs/Tabs';
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button } from "_components/Form";
import Separator from "_components/Misc/Separator/Separator";
import { FilterSort, FilterAlphabetically, FilterMembers, FilterViews } from "_modules/filters/_components";


const Communities = () => {

    return (
        <React.Fragment>

            <Flex direction='column' alignItems='none' justifyContent='none' width='none' className='posts-filters bg-default border-b border-another sticky top-0'>

                <Tabs>
                    <TabItem isActive={true} onClick={() => { alert('show posts...') }} >Following Communities</TabItem>
                    <TabItem>Suggested Communities</TabItem>
                    <TabItem>Newly Created</TabItem>
                    <TabItem>Most Members</TabItem>
                    <TabItem>Alphabetical</TabItem>
                </Tabs>

                <Separator className='my-2' />

                <Flex justifyContent='none'>

                    <FilterSort
                        onSelect={() => { }}
                    />

                    <FilterAlphabetically
                    />


                    <FilterViews
                    />

                    <FilterMembers
                    />

                </Flex>
            </Flex>

            <Card size='sm'>
                <CardHeader>
                    <Flex justifyContent='spaceBetween'>
                        <div>
                            <Typography textVariant='bold'>Mallu Page</Typography>
                            <Typography variant='secondary'>500 members</Typography>
                        </div>
                        <Typography variant='secondary'>123 posts</Typography>

                    </Flex>
                </CardHeader>
                <CardContent>
                    <Typography>
                        Once relegated to the browser as one of the 3 core technologies of the web, JavaScript can now be found almost everywhere
                    </Typography>
                </CardContent>
                <CardFooter>
                    <Flex justifyContent='spaceBetween'>
                        <Button variant='outline'>Join</Button>
                    </Flex>
                </CardFooter>
            </Card>
        </React.Fragment>
    )
}

export default Communities
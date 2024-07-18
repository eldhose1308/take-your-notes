import React from "react";

import Flex from "_components/Misc/Flex/Flex";
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button } from "_components/Form";

const Tag = () => {

    return (
        <Card size='sm'>
            <CardHeader>
                <Flex justifyContent='spaceBetween'>
                    <Typography textVariant='bold'>#javascript</Typography>
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
                    <Button variant='outline'>Follow</Button>
                </Flex>
            </CardFooter>
        </Card>
    )
}

export default Tag

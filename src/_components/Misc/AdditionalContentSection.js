import React from "react";

import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Separator from "_components/Misc/Separator/Separator";

const AdditionalContentSection = ({ children, ...props }) => {
    const { renderHeader, renderFooter } = props;

    return (
        <div>
            <Card size='sm' rounded='lg' className='border hover-border-highlight mx-4 my-2'>
                {renderHeader && <React.Fragment><CardHeader>
                    {renderHeader()}
                </CardHeader>
                    <Separator variant='custom' /></React.Fragment>}
                <CardContent>
                    {children}
                </CardContent>
                {renderFooter && <CardFooter>
                    {renderFooter()}
                </CardFooter>}
            </Card>
        </div>
    )
}

export default AdditionalContentSection;
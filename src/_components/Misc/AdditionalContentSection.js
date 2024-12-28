import React from "react";

import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Separator from "_components/Misc/Separator/Separator";

const AdditionalContentSection = ({ children, ...props }) => {
    const { heading, footer, renderHeader=()=>{}, renderFooter=()=>{} } = props;
    const headerContent = heading || renderHeader();
    const footerContent = footer || renderFooter();

    return (
        <div>
            <Card size='sm' rounded='lg' className='border hover-border-highlight mx-4 my-2 text-sm'>
                {headerContent && <React.Fragment><CardHeader>
                    {headerContent}
                </CardHeader>
                    <Separator variant='another' /></React.Fragment>}
                <CardContent>
                    {children}
                </CardContent>
                {footerContent && <CardFooter>
                    {footerContent}
                </CardFooter>}
            </Card>
        </div>
    )
}

export default AdditionalContentSection;
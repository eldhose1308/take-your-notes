import React from "react";

import { TabItem, Tabs } from '_components/UI/Tabs/Tabs';
import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";
import TagGroup from "_modules/tags/_components/TagGroup";

import { FilterSort, FilterViews } from "_modules/filters/_components";

const Tags = () => {

    return (
        <React.Fragment>
            <Flex direction='column' alignItems='none' justifyContent='none' width='none' className='posts-filters bg-default border-b border-another sticky top-0'>

                <Tabs>
                    <TabItem isActive={true} onClick={() => { alert('show posts...') }} >Following Tags</TabItem>
                    <TabItem>Suggested Tags</TabItem>
                </Tabs>

                <Separator className='my-2' />

                <Flex justifyContent='none'>

                    <FilterSort
                        onSelect={() => { }}
                    />

                    <FilterViews
                    />

                </Flex>
            </Flex>



            <TagGroup />


        </React.Fragment>
    )
}

export default Tags
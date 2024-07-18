import React from "react"

import { TabItem, Tabs } from '_components/UI/Tabs/Tabs';
import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";
import TagGroup from "_modules/tags/_components/TagGroup";

import { FilterSort, FilterViews } from "_modules/filters/_components";
import { TextBox } from "_components/Form";
import Filter from "_modules/filters/_components/Filter";

const SeeLater = () => {

    return (
        <React.Fragment>
            <Flex direction='column' alignItems='none' justifyContent='none' width='none' className='posts-filters bg-default border-b border-another sticky top-0'>

                <Tabs>
                    <TabItem isActive={true} onClick={() => { alert('show posts...') }} >Saved Content</TabItem>
                    <TabItem>Shared with you</TabItem>
                </Tabs>

                <Separator className='my-2' />

                <Flex justifyContent='none'>

                    <Filter
                        label='Added order'
                        options={[{ id: 'none', text: 'Latest' }, { id: 'none', text: 'Oldest' }]}
                    />

                    <Filter
                        label='Date Saved'
                        options={[{ id: 'none', text: 'Today' }, { id: 'none', text: 'Yesterday' }, { id: 'none', text: 'Last 7 days' }, { id: 'none', text: 'This month' }, { id: 'none', text: 'Last Month' }, { id: 'none', text: 'Custom Range' }]}
                    />

                </Flex>
            </Flex>

            <TagGroup />


        </React.Fragment>
    )
}

export default SeeLater
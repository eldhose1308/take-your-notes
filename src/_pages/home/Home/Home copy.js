import React, { useEffect } from 'react'


import NotesWithEditor from '_components/Notes/NotesWithEditor/NotesWithEditor';
import { TabItem, Tabs } from '_components/UI/Tabs/Tabs';
import { Card, CardContent, CardFooter, CardTitle } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button } from "_components/Form";
import Avatar from "_components/UI/Avatar/Avatar";
import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";
import ResponsiveDrawer from '_components/UI/Drawer/ResponsiveDrawer';

import { FilterSort, FilterViews } from "_modules/filters/_components";
import MiniCommunityList from '_modules/communities/_components/MiniCommunityList';
import NotesContainer from '_components/Notes/NotesContainer/NotesContainer';
import Notes from '_modules/notes/_components/Notes';
import { convertToHTML } from '_modules/markdownEditor/_utils/markdownConvert';
import ContentSwitcher from '_components/UI/ContentSwitcher/ContentSwitcher';
// import useDrawer from '_hooks/useDrawer';

const Home = () => {
    // const { isDrawerOpen, closeDrawer, openDrawer } = useDrawer()

    return (
        <React.Fragment>
              <Flex direction='column' justifyContent='none' alignItems='none' wrap='none' className='m-3'>
                                <div className='my-1'>
                                    {/* make this as a component which can be customised with background colors */}
                                    <Button width='none' rounded='xl'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M17.599 6.5a3 3 0 0 0 .399-1.375" /><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" /><path d="M3.477 10.896a4 4 0 0 1 .585-.396" /><path d="M19.938 10.5a4 4 0 0 1 .585.396" /><path d="M6 18a4 4 0 0 1-1.967-.516" /><path d="M19.967 17.484A4 4 0 0 1 18 18" /></svg>
                                    </Button>
                                </div>

                                <div className=' mx-1'>

                                    <div className='text-md text-bold my-1'>
                                        {/* same color as top icon or else we give a default color */}
                                        <span className='text-secondary'>DSM / </span>
                                        <span className='text-md text-secondary'>Day 1 / </span>
                                        <span className='text-md'>My Thoughts</span>
                                    </div>

                                    <div className='text-sm my-1'>Just scrambling my silly thoughts</div>
                                    <div className='text-xs text-secondary my-1'>5 cards</div>
                                </div>
                            </Flex>
                            
            <Flex alignItems='none' justifyContent='spaceBetween'>

                <ContentSwitcher direction='left'>
                    <Flex direction='column' alignItems='none' justifyContent='spaceBetween' width='none' className='min-w-sm max-w-sm h-full sticky top-0 overflow-scroll bg-light'>
                       <div>
                        Search/Pin(Sticky)/
                        {'164326432732164326432732164326432732'.split('').map(item => {
                            return  (
                            <div className='bg-default border border-another text-xs rounded-md my-2 px-2 py-2'>
                                <span>sdfndskf</span>
                            </div>
                            )
                            })}
                            
                       </div>
                    </Flex>
                </ContentSwitcher>


                <Flex direction='column' alignItems='none' justifyContent='none' width='none' className='grow-2 overflow-scroll h-full bg-light'>


                    {/* <Flex direction='column' alignItems='none' justifyContent='none' width='none' className='posts-filters bg-default border-b border-another sticky top-0'>

                        <Tabs hasNav>
                            <TabItem isActive={true} onClick={() => { }} >All</TabItem>
                            <TabItem>Frequently</TabItem>
                            <TabItem>Visited</TabItem>
                            <TabItem>Tags</TabItem>
                            <TabItem>here</TabItem>
                            <TabItem>Frequently</TabItem>
                            <TabItem>Visited</TabItem>
                            <TabItem>Tags</TabItem>
                            <TabItem>here</TabItem>
                            <TabItem>Frequently</TabItem>
                            <TabItem>Visited</TabItem>
                            <TabItem>Tags</TabItem>
                            <TabItem>here</TabItem>
                            <TabItem>Frequently</TabItem>
                            <TabItem>Visited</TabItem>
                            <TabItem>Tags</TabItem>
                            <TabItem>here</TabItem>
                            <TabItem>Frequently</TabItem>
                            <TabItem>Visited</TabItem>
                            <TabItem>Tags</TabItem>
                            <TabItem>here</TabItem>
                            <TabItem>Frequently</TabItem>
                            <TabItem>Visited</TabItem>
                            <TabItem>Tags</TabItem>
                            <TabItem>here</TabItem>
                        </Tabs>


                    </Flex> */}

                    <div className="flex">
                        <div className='w-full px-3 mr-3 my-2'>
                            {/* <Flex direction='column' justifyContent='none' alignItems='none' wrap='none' className='m-3'>
                                <div className='my-1'>
                                    <Button width='none' rounded='xl'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M17.599 6.5a3 3 0 0 0 .399-1.375" /><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" /><path d="M3.477 10.896a4 4 0 0 1 .585-.396" /><path d="M19.938 10.5a4 4 0 0 1 .585.396" /><path d="M6 18a4 4 0 0 1-1.967-.516" /><path d="M19.967 17.484A4 4 0 0 1 18 18" /></svg>
                                    </Button>
                                </div>

                                <div className=' mx-1'>

                                    <div className='text-md text-bold my-1'>
                                        <span className='text-secondary'>DSM / </span>
                                        <span className='text-md text-secondary'>Day 1 / </span>
                                        <span className='text-md'>My Thoughts</span>
                                    </div>

                                    <div className='text-sm my-1'>Just scrambling my silly thoughts</div>
                                    <div className='text-xs text-secondary my-1'>5 cards</div>
                                </div>
                            </Flex> */}
                            <NotesContainer />
                        </div>
                    </div>

                </Flex>




                <ContentSwitcher>

                    <Flex direction='column' alignItems='none' justifyContent='spaceBetween' width='none' className='min-w-md max-w-md h-full sticky top-0  bg-light'>

                        <MiniCommunityList />

                        <Separator />

                        <Card border='ghost' className='mx-3  bg-light'>
                            <CardTitle>
                                <Flex direction='column' justifyContent='spaceBetween' className='px-3 m-3'>
                                    <Typography size='lg'>
                                        Preview
                                    </Typography>
                                </Flex>

                            </CardTitle>
                            <CardContent>

                                <Notes
                                    isActive
                                    htmlContent={convertToHTML(` kfvdsjkjfjs dfds dddklld sdlkknlds

                                    - sdkfbdskf
                                    - -dsfnds
                                    - dsfsfsf dsfjfdk
                                    ---
                                    
                                    sdfgdssdkjnfkd sdkfkd
                                    
                                    dsfdsfsf fkjdf dsf dslfsldkkk sddskc;dlds sdf`)}
                                // noteMetaDetails={noteMetaDetails}
                                />

                            </CardContent>
                            <CardFooter></CardFooter>
                        </Card>

                        <Separator />


                        <Card border='ghost' className='mx-3  bg-light'>
                            <CardTitle>
                                <Flex direction='column' justifyContent='spaceBetween' className='px-3 m-3'>
                                    <Typography size='lg'>
                                        Calendar
                                    </Typography>
                                    <Typography size='lg'>
                                        Selected note details
                                    </Typography>
                                    <Typography size='lg'>
                                        preview on typing
                                    </Typography>
                                    <Typography size='lg'>
                                        multi open on right
                                    </Typography>
                                </Flex>

                            </CardTitle>
                            <CardContent>
                            </CardContent>
                            <CardFooter></CardFooter>
                        </Card>

                    </Flex>
                </ContentSwitcher>

            </Flex>


        </React.Fragment>
    )
}

export default Home
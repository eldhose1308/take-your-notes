import React from "react";

import Flex from "_components/Misc/Flex/Flex";
import Avatar from "_components/UI/Avatar/Avatar";
import Post from "_modules/posts/_components/Post";
import { Card, CardContent, CardFooter, CardTitle } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button } from "_components/Form";
import { TabItem, Tabs } from "_components/UI/Tabs/Tabs";
import Separator from "_components/Misc/Separator/Separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItemGroup, DropdownMenuTrigger } from "_components/UI/Dropdown/Dropdown";
import CenterLineText from "_components/UI/CenterLineText/CenterLineText";

const UserProfile = () => {

    return (
        <Flex alignItems='none' justifyContent='spaceBetween'>

            <Flex direction='column' alignItems='none' justifyContent='spaceBetween' width='none' className='grow-2'>

                {/* <Flex className='px-3 py-3 m-3' width='none'> */}
                <Flex justifyContent='spaceBetween' className='px-3 py-3 m-3' width='full'>
                    <div className="flex mb-2">
                        <Avatar name='ES' size='lg' />
                        <div className="flex flex-col my-2">
                            <h3 className="text-default px-3">Joe Banks</h3>
                            <p className="text-secondary px-3 space-y-1 text-xs">~joe_banks</p>
                        </div>
                    </div>
                    <div className="flex mb-2">
                        <Button variant='custom' size='sm'>
                            <div className="flex pr-2 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6" /><circle cx="10" cy="8" r="5" /><path d="M19 16v6" /><path d="M22 19h-6" /></svg>
                            </div>
                            <span className="">
                                Follow
                            </span>
                        </Button>
                    </div>
                </Flex>

                <Separator />

                <Tabs>
                    <TabItem isActive={true} onClick={() => { alert('show posts...') }} >Posts</TabItem>
                    <TabItem>Comments</TabItem>
                    <TabItem>Followers</TabItem>
                    <TabItem>Following</TabItem>
                </Tabs>

                <Separator />


                <Flex justifyContent='none'>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                          
                                    Sort by
                              
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItemGroup
                                options={[{ id: 'latest', text: 'Latest' }, { id: 'oldest', text: 'Oldest' }, { id: 'most_viewed', text: 'Most Viewed' }]}
                                onChange={(value) => alert(value)}
                            />
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                           
                                    Latest
                             
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItemGroup
                                options={[{ id: 'latest', text: 'Latest' }, { id: 'oldest', text: 'Oldest' }, { id: 'most_viewed', text: 'Most Viewed' }]}
                                onChange={(value) => alert(value)}
                            />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </Flex>




                <div className="flex">
                    <div className='w-full px-3 mr-3'>

                        <div className="text-sm hover-custom cursor-pointer">
                            <CenterLineText text='Today' onClick={() => {alert(111)}} /> 
                        </div>

                        <Post hasFollowButton={false} />
                        <Post hasFollowButton={false} />
                        <Post hasFollowButton={false} />

                        <div className="text-sm hover-custom cursor-pointer">
                            <CenterLineText text='Aug 10 - Aug 17' onClick={() => {alert(111)}} /> 
                        </div>
            
                        <Post hasFollowButton={false} />
                        <Post hasFollowButton={false} />

                    </div>
                </div>

            </Flex>

            <Flex direction='column' alignItems='none' justifyContent='spaceBetween' width='none' className='min-w-md max-w-md h-full sticky top-0'>

                <Card border='ghost' className='mx-3'>
                    <CardTitle>
                        <Flex justifyContent='spaceBetween' className='px-3 m-3'>
                            <Typography size='lg'>
                                Communities
                            </Typography>
                        </Flex>
                    </CardTitle>
                    <CardContent>
                        <Flex>
                            <Flex justifyContent='spaceBetween' className='py-2'>
                                <div className="flex mb-2 items-center">

                                    <Avatar size='xs' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&amp;usqp=CAU" />

                                    <div className="flex flex-col">
                                        <h3 className="text-default px-3 text-sm">Javascript</h3>
                                        <p className="text-secondary px-3 space-y-1 text-xs">255 members</p>
                                    </div>
                                </div>

                                <div className="flex mb-2">
                                    <Button variant='custom' size='xs'>
                                        <div className="flex pr-2 py-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                                        </div>
                                        <span className="text-xs">
                                            Join
                                        </span>
                                    </Button>
                                </div>
                            </Flex>
                            <Flex justifyContent='spaceBetween' className='py-2'>
                                <div className="flex mb-2 items-center">

                                    <Avatar size='xs' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&amp;usqp=CAU" />

                                    <div className="flex flex-col">
                                        <h3 className="text-default px-3 text-sm">Angular</h3>
                                        <p className="text-secondary px-3 space-y-1 text-xs">1k members</p>
                                    </div>
                                </div>

                                <div className="flex mb-2">
                                    <Button variant='custom' size='xs'>
                                        <div className="flex pr-2 py-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                                        </div>
                                        <span className="text-xs">
                                            Join
                                        </span>
                                    </Button>
                                </div>
                            </Flex>
                        </Flex>

                    </CardContent>
                    <CardFooter>
                        <Flex>
                            <Button size='xs' width='none' variant='ghost' className='border border-secondary hover-border-custom'>See more</Button>
                        </Flex>
                    </CardFooter>
                </Card>

                <Separator />

                <Card border='ghost' className='mx-3'>
                    <CardTitle>
                        <Flex justifyContent='spaceBetween' className='px-3 m-3'>
                            <Typography size='xl'>
                                Badges
                            </Typography>
                        </Flex>

                    </CardTitle>
                    <CardContent>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>

            </Flex>
        </Flex>
    )
}

export default UserProfile
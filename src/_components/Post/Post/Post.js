import React from 'react'

import { Button } from '_components/Form';
import Flex from '_components/Misc/Flex/Flex';
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from '_components/Misc/Typography/Typography';
import Separator from '_components/Misc/Separator/Separator';
import Avatar from '_components/UI/Avatar/Avatar';
import FollowButton from '_modules/users/_component/FollowButton';


const Post = (props) => {
    const { hasFollowButton = false } = props;

    return (
        <React.Fragment>
            <Card variant='default' className='hover-secondary'>
                <CardHeader>
                    <Flex justifyContent='spaceBetween' alignItems='none'>
                        <div className="flex mb-2">

                            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&amp;usqp=CAU" />

                            <div className="flex flex-col">
                                <h3 className="text-default px-3">Joe Banks</h3>
                                <p className="text-secondary px-3 space-y-1 text-xs">2w ago</p>
                            </div>
                        </div>
                        {hasFollowButton ? (
                            <FollowButton />
                        ) : null}
                    </Flex>
                </CardHeader>

                <CardContent>

                    <Typography type='h1' size='lg' className='mb-2'>Might Nvidia Be the First Company With an AI CEO?</Typography>
                    <Typography variant='secondary'>Might Nvidia Be the First Company With an AI CEO?</Typography>


                </CardContent>


                <CardFooter className='p-0'>
                    <Flex justifyContent='none' alignItems='none' width='none'>
                        <Button size='xs' variant='secondary' width='none' className='mx-1'>
                            <div className="flex pr-2 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                            </div>
                            <span className="text-default text-xs">
                                280
                            </span>
                        </Button>


                        <Button size='xs' variant='secondary' width='none' className='mx-1'>
                            <div className="flex pr-2 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                            </div>
                            <span className="text-default text-xs">
                                200
                            </span>
                        </Button>
                        <Button size='xs' variant='secondary' width='none' className='mx-1'>
                            <div className="flex pr-2 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                            </div>
                        </Button>
                    </Flex>
                    <Flex justifyContent='none' alignItems='none' width='none' className='mt-2'>
                        <Button size='xs' variant='secondary' width='none' title='Save' className='mx-1'>
                            <div className="flex py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark-plus"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /><line x1="12" x2="12" y1="7" y2="13" /><line x1="15" x2="9" y1="10" y2="10" /></svg>
                            </div>
                        </Button>
                    </Flex>
                </CardFooter>

            </Card>

            <Separator />

        </React.Fragment>

    )
}

export default Post;
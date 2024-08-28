import React from "react";

import Flex from '_components/Misc/Flex/Flex';

import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import { Button } from "_components/Form";

import './Notes.css'
import { convertToHTML } from "_modules/markdownEditor/_utils/markdownConvert";

const Notes = (props) => {

    const { isActive, content, noteMetaDetails={}, htmlContent, onEditClick, onDeleteClick, onHighLight=()=>{} } = props

    const { title, link, tags = [] } = noteMetaDetails;

    return (
        <React.Fragment>
            <Card rounded='lg' variant='default' className={`group-hover cursor-pointer ${isActive ? 'border-2 shadow-lg' : ''}`} onClick={onHighLight} onDoubleClick={onEditClick}>
                <CardHeader>
                    <Flex justifyContent='spaceBetween' alignItems='none'>
                        <div className="flex mb-2">
                            <div className="flex flex-col">
                                <div className="flex mx-2">

                                    {/* <span>Icon</span> */}
                                    <h3 className="text-default text-lg">{title}</h3>
                                </div>
                                {link &&
                                    (<div className="flex items-center py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                                        <p className="text-secondary px-2 space-y-1 text-xs">
                                            Linked Note
                                        </p>
                                    </div>)
                                }

                            </div>
                        </div>

                        <div className="flex mb-2">
                            <Flex justifyContent='none' alignItems='none' wrap='none' className='invisible group-hover-item'>
                                {!!onEditClick && <Button size='xs' variant='ghost' title='Edit' onClick={onEditClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-line"><path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" /><path d="m15 5 3 3" /></svg>
                                </Button>}
                                <span className="mx-1"></span>
                                {!!onDeleteClick && <Button size='xs' variant='ghost' title='Delete' onClick={onDeleteClick} className='hover-destructive hover-text-custom' >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                                </Button>}
                            </Flex>
                        </div>
                    </Flex>
                </CardHeader>

                <CardContent className="h-screen-1/2 overflow-scroll">

                    <div className="note-html-content text-default" dangerouslySetInnerHTML={{ __html: htmlContent }}>
                        {/* {content} */}
                    </div>

                </CardContent>


                <CardFooter className='p-0'>
                    <Flex justifyContent='spaceBetween' alignItems='none'>
                        <div className="flex mb-2 items-end">
                            <p className="text-secondary px-3 space-y-1 text-xs">2w ago</p>
                        </div>

                        <div className="flex mb-2  max-w-md tags-area">
                            {tags.map((tagItem, index) => (
                                <div key={index} className="flex hover-custom cursor-pointer my-1 text-xs rounded-md">
                                    <span className="mx-1 px-2 py-1">#{tagItem}</span>
                                    {/* <span className="flex items-center text-bold rounded-md cursor-pointer px-1 hover-destructive hover-text-custom">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                </span> */}
                                </div>
                            ))}
                        </div>
                    </Flex>
                </CardFooter>
            </Card>
        </React.Fragment>
    )
}

export default Notes
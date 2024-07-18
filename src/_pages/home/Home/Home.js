import React, { useState, useEffect } from 'react'

import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";


import * as notesModel from "_services/notes.service";
import NoteAndEditor from '_components/Notes/NoteAndEditor/NoteAndEditor';
import NoteOptionsMenu from '_modules/notes/_components/noteOptionsMenu/NoteOptionsMenu';

import './Home.css'
import SearchBar from '_components/UI/SearchBar/SearchBar';
import NotesFilterBar from '_modules/filters/_components/NotesFilterBar';

const Home = () => {
    // const { isDrawerOpen, closeDrawer, openDrawer } = useDrawer()
    const [notesList, setNotesList] = useState([]);
    const [selectedNoteId, setSelectedNoteId] = useState();
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const openSearch = () => {
        setIsSearchVisible(previousState => !previousState)
    }

    const openFilter = () => {
        setIsFilterVisible(previousState => !previousState)
    }

    useEffect(() => {
        async function fetchData() {
            const notes = await notesModel.getNotes()
            setNotesList(notes)
        }
        fetchData();
    }, []);

    const handleNoteSelect = (selectedId) => {
        setSelectedNoteId(selectedId)
    }



    return (
        <React.Fragment>

            <Flex alignItems='none' justifyContent='spaceBetween' className='my-4 mx-4'>

                {/* <ContentSwitcher direction='left'> */}
                {/* Put this inside responsiveDrawer for small screen sizes */}
                <Flex direction='column' alignItems='none' justifyContent='spaceBetween' width='none' className='min-w-sm max-w-xs h-full sticky top-0 overflow-scroll bg-light'>


                    <div className='px-2 min-w-sm'>
                        <div className='text-sm text-bold my-1'>
                            {/* same color as top icon or else we give a default color */}
                            <span className='text-secondary'>DSM . </span>
                            <span className='text-secondary'>
                                Day 1
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
                            </span>
                        </div>
                        <div className='text-xs text-secondary my-1'>5 cards</div>
                        {/* Filters - Sort by: Name, Created Date, Updated Date */}
                        <div className='flex justify-end pr-4 my-2'>
                            <div className={`flex items-center cursor-pointer mx-1 px-1 py-1 rounded-md border hover-custom ${isSearchVisible ? 'border-custom' : ''}`} onClick={openSearch}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </div>
                            <div className={`flex items-center cursor-pointer mx-1 px-1 py-1 rounded-md border hover-custom ${isFilterVisible ? 'border-custom' : ''}`} onClick={openFilter}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                                {isFilterVisible && <NotesFilterBar />}
                            </div>
                        </div>

                        {isSearchVisible && <div className='notes-search-bar my-2'>
                            <SearchBar size='sm' textBoxProps={{
                                    placeholder: 'Enter note content to search', 
                                    placeholderFocus: 'default',
                                    isFocused: true
                                }} 
                                buttonProps={{
                                    size: 'xs'
                                }}
                            />
                        </div>
                        }

                        <Separator />

                        <div className='overflow-scroll my-2 pr-4 h-screen-3/4'>

                            <span className='text-xs py-2 px-2 bg-transparent border border-accent hover-accent hover-text-custom flex justify-center rounded-md w-full cursor-pointer'>
                                <span className='mx-2'>
                                    Click to create new note
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                            </span>


                            {/* {'1643264327321643264327321643264327324326432732164326432732'.split('').map(item => { */}
                            {notesList.map(item => {
                                const { id } = item
                                const isSelectedItem = selectedNoteId === id
                                return (
                                    <React.Fragment>
                                        <div onClick={() => handleNoteSelect(id)} className={`text-xs rounded-md my-2 px-2 py-2 max-h-md cursor-pointer group-hover hover-custom ${isSelectedItem ? 'bg-highlight' : ''}`}>
                                            <div className='flex justify-between'>
                                                <h3 className='my-1'>sflkndslkflds</h3>
                                                <NoteOptionsMenu
                                                    onEdit={() => console.log('Edit')}
                                                // onDelete={handleDelete}
                                                />
                                            </div>
                                            <span className='flex max-h-xs overflow-hidden'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut quam in elit viverra semper.
                                                Praesent convallis nisl nec est interdum, vitae vestibulum mauris pulvinar. Vivamus non purus non ex tristique
                                                gravida. Proin tempor elit vel ipsum tempus, ut sollicitudin ligula tristique. Integer luctus volutpat
                                                tincidunt. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et
                                                malesuada fames ac turpis egestas. Duis a ligula at lacus laoreet sollicitudin. Nulla eget ligula venenatis,
                                                dapibus nisl sit amet, placerat lacus. Aliquam erat volutpat.
                                            </span>

                                            <div className='flex justify-between mt-4'>
                                                <span className='text-secondary'>
                                                    Wednesday
                                                </span>
                                                <span className='text-secondary'>
                                                    2:35pm
                                                </span>
                                            </div>
                                        </div>

                                        <Separator />
                                    </React.Fragment>
                                )
                            })}

                        </div>
                    </div>
                </Flex>
                {/* </ContentSwitcher> */}


                <Flex direction='column' alignItems='none' wrap='none' justifyContent='none' width='none' className='grow-2 h-full bg-light'>




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
                                </div>

                            </Flex> */}

                            {/* <MarkdownEditor /> */}
                            <NoteAndEditor id={selectedNoteId} />
                        </div>
                    </div>

                </Flex>




                {/* <ContentSwitcher>

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
                </ContentSwitcher> */}

            </Flex>


        </React.Fragment>
    )
}

export default Home
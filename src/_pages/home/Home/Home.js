import React, { useState, useEffect } from 'react'

import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";


import * as notesModel from "_services/notes.service";
import NoteAndEditor from '_components/Notes/NoteAndEditor/NoteAndEditor';
import NoteOptionsMenu from '_modules/notes/_components/noteOptionsMenu/NoteOptionsMenu';

import './Home.css'
import SearchBar from '_components/UI/SearchBar/SearchBar';
import NotesFilterBar from '_modules/filters/_components/NotesFilterBar';

import ResponsiveDrawer from '_components/UI/Drawer/ResponsiveDrawer';

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

                <ResponsiveDrawer direction='right'>
                {/* Put this inside responsiveDrawer for small screen sizes */}
                <Flex direction='column' alignItems='none' justifyContent='spaceBetween' width='none' className='min-w-sm max-w-xs h-full sticky mr-4 top-0 right-0 overflow-scroll bg-light'>


                    <div className='px-2 min-w-sm'>
                        <div className='flex text-sm text-bold my-1'>
                            {/* same color as top icon or else we give a default color */}
                            <span className='text-secondary'>DSM / </span>
                            <span className='flex items-center mx-1 text-secondary'>
                                Day 1
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-up-down"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg> */}
                            </span>
                        </div>
                        <div className='text-xs text-secondary my-1'>5 cards</div>
                        {/* Filters - Sort by: Name, Created Date, Updated Date */}
                        <div className='flex justify-end pr-4 my-2 text-default'>
                            <div className={`flex items-center cursor-pointer mx-1 px-1 py-1 rounded-md border hover-custom ${isSearchVisible ? 'border-custom' : ''}`} onClick={openSearch}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </div>
                            <div className={`flex items-center cursor-pointer mx-1 px-1 py-1 rounded-md border hover-custom ${isFilterVisible ? 'border-custom' : ''}`} onClick={openFilter}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
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

<span className='text-xs py-2 px-2 bg-transparent text-default border border-accent hover-accent hover-text-custom flex justify-center rounded-md w-full cursor-pointer'>
                                <span className='mx-2'>
                                    Click to create new note
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                            </span>

                        <Separator />

                        <div className='overflow-scroll my-2 pr-4 h-screen-3/4'>

                            {/* {'1643264327321643264327321643264327324326432732164326432732'.split('').map(item => { */}
                            {notesList.map(item => {
                                const { id } = item
                                const isSelectedItem = selectedNoteId === id
                                return (
                                    <React.Fragment>
                                        <div onClick={() => handleNoteSelect(id)} className={`text-xs text-default rounded-md my-2 px-2 py-2 max-h-md cursor-pointer group-hover hover-custom ${isSelectedItem ? 'bg-highlight' : ''}`}>
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
                                                    2:35 pm
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
                </ResponsiveDrawer>


                <Flex direction='column' alignItems='none' wrap='none' justifyContent='none' width='none' className='grow-2 h-full bg-light'>




                    <div className="flex">
                        <div className='w-full px-3 mr-3 my-2'>

                            <NoteAndEditor id={selectedNoteId} />
                        </div>
                    </div>

                </Flex>


            </Flex>


        </React.Fragment>
    )
}

export default Home
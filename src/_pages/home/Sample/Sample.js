import React from "react";

import './Sample.css';
import Separator from "_components/Misc/Separator/Separator";
import NoteOptionsMenu from "_modules/notes/_components/noteOptionsMenu/NoteOptionsMenu";
import ResponsiveDrawer from "_components/UI/Drawer/ResponsiveDrawer";
import Flex from "_components/Misc/Flex/Flex";
import CommandCenter from "_modules/notes/_components/CommandCenter";
import NoteAndEditor from "_components/Notes/NoteAndEditor/NoteAndEditor";

const Sample = () => {

    return (
        <>
            <div className="container">
                <div className="left-field">
                    <ResponsiveDrawer direction='right'>
                        <Flex direction='column' alignItems='none' justifyContent='spaceBetween' width='none' className='min-w-sm max-w-xs h-full sticky mr-4 top-0 right-0 overflow-scroll-y bg-light'>


                            <div className='px-2 min-w-sm'>
                                <div className='flex justify-between'>

                                    <div className='flex text-sm'>
                                        {/* same color as top icon or else we give a default color */}
                                        <span className='flex items-center mx-1 text-secondary cursor-pointer'>
                                            <span className='mr-1 items-center' onClick={(e) => { }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z"></path></svg>
                                            </span>
                                            <span className='folder-separator text-secondary'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path></svg>
                                            </span>
                                        </span>
                                        <div className='flex'>


                                            {/* <Combobox>
                                            <ComboboxTrigger> */}
                                            <span className='flex mx-1 items-center text-secondary cursor-pointer'>
                                                <span className=''>Personal</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z"></path></svg>
                                            </span>
                                            {/* </ComboboxTrigger>
                                            <ComboboxContent
                                                options={folderOptions}
                                            />

                                        </Combobox> */}
                                            <span className='folder-separator text-secondary'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path></svg>
                                            </span>
                                        </div>

                                        <div className='flex'>
                                            {/* 
                                    <Combobox>
                                            <ComboboxTrigger> */}
                                            <span className='flex mx-1 items-center text-secondary cursor-pointer'>
                                                <span className=''>Notes</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z"></path></svg>
                                            </span>
                                            {/* </ComboboxTrigger>
                                            <ComboboxContent
                                                options={folderOptions}
                                            />

                                        </Combobox> */}

                                        </div>

                                    </div>

                                    <div className='cursor-pointer' onClick={() => { }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-open"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 21C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H20C20.5523 5 21 5.44772 21 6V9H19V7H11.5858L9.58579 5H4V16.998L5.5 11H22.5L20.1894 20.2425C20.0781 20.6877 19.6781 21 19.2192 21H3ZM19.9384 13H7.06155L5.56155 19H18.4384L19.9384 13Z"></path></svg> */}
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6 7V4C6 3.44772 6.44772 3 7 3H13.4142L15.4142 5H21C21.5523 5 22 5.44772 22 6V16C22 16.5523 21.5523 17 21 17H18V20C18 20.5523 17.5523 21 17 21H3C2.44772 21 2 20.5523 2 20V8C2 7.44772 2.44772 7 3 7H6ZM6 9H4V19H16V17H6V9ZM8 5V15H20V7H14.5858L12.5858 5H8Z"></path></svg> */}
                                    </div>
                                </div>
                                <div className='text-xs text-secondary my-1'>5 cards</div>
                                {/* Filters - Sort by: Name, Created Date, Updated Date */}
                                <div className='flex justify-end pr-4 my-2 text-default'>
                                    <div className={`flex items-center cursor-pointer mx-1 px-1 py-1 rounded-md border hover-custom ${false ? 'border-custom' : ''}`} onClick={() => { }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM12.1779 7.17624C11.4834 7.48982 11 8.18846 11 9C11 10.1046 11.8954 11 13 11C13.8115 11 14.5102 10.5166 14.8238 9.82212C14.9383 10.1945 15 10.59 15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C11.41 7 11.8055 7.06167 12.1779 7.17624Z"></path></svg> */}
                                    </div>
                                    <div className={`flex items-center cursor-pointer mx-1 px-1 py-1 rounded-md border hover-custom ${false ? 'border-custom' : ''}`} onClick={() => { }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21 4V6H20L14 15V22H10V15L4 6H3V4H21Z"></path></svg> */}
                                        {/* {isFilterVisible && <NotesFilterBar />} */}
                                    </div>
                                </div>



                                <span onClick={() => () => { }} className='text-xs py-2 px-2 bg-transparent text-default border border-accent hover-accent hover-text-custom flex justify-center rounded-md w-full cursor-pointer'>
                                    <span className='mx-2'>
                                        Click to create new note
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                                </span>

                                <Separator />

                                <div className='overflow-scroll my-2 pr-4 h-screen-3/4'>

                                    {'1643264327321643264327321643264327324326432732164326432732'.split('').map(item => {
                                        {/* {notesList.map(item => { */ }
                                        const { id } = item
                                        const isSelectedItem = 3 === id
                                        return (
                                            <React.Fragment>
                                                <div onClick={() => { }} className={`text-xs text-default rounded-md my-2 px-2 py-2 max-h-md cursor-pointer group-hover hover-custom ${isSelectedItem ? 'bg-highlight' : ''}`}>
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
                </div>



                <div className="right-field overflow-scroll">

                {/* <CommandCenter /> */}
                <NoteAndEditor />

                </div>
            </div>
        </>
    )
}

export default Sample;
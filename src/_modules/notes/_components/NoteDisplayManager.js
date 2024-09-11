import React from "react"
import { useSelector } from 'react-redux';

import CommandCenter from "./CommandCenter";
import NoteAndEditor from "_components/Notes/NoteAndEditor/NoteAndEditor";
import { getCurrentNote } from "store/selectors/notesSelectors";
import { TabItem, Tabs } from "_components/UI/Tabs/Tabs";

const NoteDisplayManager = () => {
    const isNoteAdding = useSelector(state => state.notes.isNoteAdding);
    const selectedNoteId = useSelector(getCurrentNote);

    return (
        <React.Fragment>
            {!isNoteAdding && !selectedNoteId ? (
                <CommandCenter />
            ) : (
                <div className="flex">
                    <div className='w-full px-3 mr-3'>
                        {/* <Tabs hasNav>
                            <TabItem isActive={true} onClick={() => { alert('show posts...') }} >Note 1</TabItem>
                            <TabItem>Note 2</TabItem>
                        </Tabs> */}
                        <NoteAndEditor isEditMode={isNoteAdding} key={selectedNoteId} id={selectedNoteId} />
                    </div>
                </div>)}
        </React.Fragment>
    )
}

export default NoteDisplayManager;
import React, { useState } from "react";
import FileWithPreview from "_components/Form/FileUpload/FileWithPreview";

const buttonClipboardStateValues = {
    none: 'Insert to Editor',
    completed: 'Inserted to Editor',
    failure: 'Failed', 
}

const UploadedImagesItem = ({ file, onCopy }) => {
    const { id, fileName, fileType: format, basePath } = file;
    const preview = basePath + fileName;

    const [clipboardButtonText, setClipboardButtonText] = useState(buttonClipboardStateValues.none)

    const handleCopy = (e) => {
        setClipboardButtonText(buttonClipboardStateValues.completed)
        setTimeout(() => {
            setClipboardButtonText(buttonClipboardStateValues.none)
        }, 1500);
        onCopy(preview, file, e);
    }

    return (
        <div className="text-default text-xs border border-another hover-custom px-2 py-2 m-2 rounded-md">
        <div className="flex justify-betweens w-full items-center mb-4">

            <span className="mx-2">
                {id}
            </span>
            <FileWithPreview preview={preview} format={format} />
            <span onClick={handleCopy} className="mx-2 px-1 py-1 border-2 border-highlight hover-highlight rounded-md cursor-copy"> 
                {clipboardButtonText}
            </span>
        </div>
        <span className="w-3/4 mx-2 text-ellipsis overflow-hidden">{fileName}</span>
    </div>
    )
}

export default UploadedImagesItem;
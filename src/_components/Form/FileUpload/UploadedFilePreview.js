import React from "react";
import UploadedFilePreviewItems from "./UploadedFilePreviewItems";

const UploadedFilePreview = ({ fileData, fileUploadStatus, onRemoveFile }) => {

    return (
        <div className="h-60 overflow-scroll pr-4">

        {fileData.map((file) => {
            const { id, name, size, format, preview } = file;
            const fileUploadStatusInfo = fileUploadStatus[id];
            return (
                <UploadedFilePreviewItems key={id} fileUploadStatusInfo={fileUploadStatusInfo} onRemoveFile={onRemoveFile} id={id} name={name} size={size} format={format} preview={preview} />
            )
        })}
    </div>
    )
}

export default UploadedFilePreview;
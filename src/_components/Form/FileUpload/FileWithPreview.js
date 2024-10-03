import React, { useState } from "react";

const FileWithPreview = ({ preview, format }) => {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const handleOpenPreview = (e) => {
        e.stopPropagation();
        setIsPreviewOpen(true);
    }

    const handleClosePreview = () => {
        setIsPreviewOpen(false);
    }

    return (
        <React.Fragment>
            <div onClick={handleOpenPreview} className="flex border border-accent rounded-md p-1 cursor-pointer">
                {format.startsWith("image/") ? (
                    <img src={preview} alt="preview" className="h-10 w-10" />
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></svg>
                )}
            </div>

            {isPreviewOpen && (<div className="flex items-center justify-center overlay overlay-semi z-50">
                <div className="relative">
                    {format.startsWith("image/") ? (
                        <img src={preview} alt="Full Preview" className="h-48 w-48 object-cover" />
                    ) : (
                        <span className="text-white">File preview not available now, will show in iframe the contents later</span>
                    )}

                    <span onClick={handleClosePreview} className="absolute border text-destructive rounded-full p-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-x"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><line x1="15" x2="9" y1="9" y2="15" /><line x1="9" x2="15" y1="9" y2="15" /></svg>
                    </span>
                </div>
            </div>)}

        </React.Fragment>
    )
}

export default FileWithPreview;
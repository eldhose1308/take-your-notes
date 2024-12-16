import React from "react";
import Typography from "_components/Misc/Typography/Typography";

const PostItemRowContent = ({ tableOfContent }) => {
    const { id, text, children, level } = tableOfContent;

    return (
        <div key={id} className={`flex flex-col my-1 ml-${level * 2}`}>
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                <span>{text}</span>
            </div>

            {children.length > 0 && (
                <div className="flex flex-col">
                    {children.map(child => {
                        return <PostItemRowContent key={child.id} tableOfContent={child} />
                    })}
                </div>
            )}

        </div>
    )
}

const PostItemTableOfContent = ({ tableOfContents = [] }) => {

    if(tableOfContents.length === 0) return null;

    return (
        <div className="border border-another rounded-md">
            <Typography className='my-2 mx-4'>Table of Contents</Typography>
            <div className="flex flex-col text-sm text-secondary">
                {tableOfContents.map(tableOfContent => <PostItemRowContent key={tableOfContent.id} tableOfContent={tableOfContent} />)}
            </div>
        </div>
    )
}

export default PostItemTableOfContent;
import { compareAndFormatTimes } from "_utils/timestampUtils";
import React from "react";

const FormattedTimestamp = ({ createdTime, updatedTime, hasEditInfo=true }) => {

    const [createdTimestamp, updatedTimestamp] = compareAndFormatTimes(createdTime, updatedTime);

    return (
        <span>
            <p className="text-secondary px-3 space-y-1 text-xs">{createdTimestamp}</p>
            {(hasEditInfo && !!updatedTimestamp) && <p className="text-secondary px-3 space-y-1 text-xxs">[Edited] {updatedTimestamp}</p>}
        </span>
    )
}

export default FormattedTimestamp;
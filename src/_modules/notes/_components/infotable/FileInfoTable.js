import React from "react"


const FileInfoItems = ({ header, data }) => {

    return (
        <tr>
            <th className="font-medium text-left">{header}</th>
            <td className="text-right">{data}</td>
        </tr>
    )
}


const FileInfoTable = ({ fileInfo = [] }) => {

    return (
        <table className="w-full text-xs">
            {fileInfo.map((item, index) => {
                const { header, data } = item
                return (<FileInfoItems key={`File_Info_${index}`} header={header} data={data} />)
            })}
        </table>
    )
}

export default FileInfoTable
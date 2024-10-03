import * as fileUpload from '_api/fileUpload.api'


export const formatFileUploadData = (data) => {
    const { file_name, file_type, file_upload_id } = data;
    const formattedResponse = { id: file_upload_id, fileName: file_name, fileType: file_type };
    return formattedResponse;
}

const getFileUploads = async (data, config = {}) => {
    const response = await fileUpload.get(data, config);
    const { data: fileUploads = [] } = response;
    const fileUploadsFormatted = fileUploads.map(formatFileUploadData)
    return fileUploadsFormatted || []
}

const upload = async (data, config) => {
    const response = await fileUpload.upload(data, config);
    const { data: fileUploadData = [] } = response;
    const { basePath, filePath, mimeType } = fileUploadData;
    const formattedFileUploadData = { id: 101, fileName: filePath, basePath, fileType: mimeType };
    // const formattedFileUploadData = formatFileUploadData(fileUploadData);
    return formattedFileUploadData;
}


export {
    getFileUploads,
    upload,
   
}
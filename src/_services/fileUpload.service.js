import * as fileUpload from '_api/fileUpload.api'


export const formatFileUploadData = (data) => {
    const { file_name, file_type, file_upload_id, base_path } = data;
    const formattedResponse = { id: file_upload_id, fileName: file_name, fileType: file_type, basePath: base_path };
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
    const formattedFileUploadData = formatFileUploadData(fileUploadData);
    return formattedFileUploadData;
}


export {
    getFileUploads,
    upload,
   
}
export const preProcessImage = (filesList) => {
    const files = Array.from(filesList) || [];
        const newFileData = files.map((file, index) => {
            const { lastModified, name, size, type } = file;
            const uId = `${name[0]}_${lastModified}}`;
            return {
                id: btoa(uId),
                name: name,
                size: size > (1024 * 1024)
                    ? (size / (1024 * 1024)).toFixed(2) + ' MB'
                    : (size / 1024).toFixed(2) + ' KB',
                format: type,
                preview: URL.createObjectURL(file),
                file: filesList[index]
            }
        });

        return newFileData;
}
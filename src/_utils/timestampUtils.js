export const formatToLocalTime = (utcDate, optionsArg={}) => {
  const standardizedUTCString = utcDate.replace(' ', 'T');
    const isoTimestamp = new Date(standardizedUTCString + 'Z');
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      ...optionsArg
    };
    
    try{
      return new Intl.DateTimeFormat('en-US', options).format(isoTimestamp);
    }catch(err){
      console.error('@unable to format date', utcDate, err);
      return '';
    }
}

export const compareAndFormatTimes = (createdAt, updatedAt) => {
    const createdTime = formatToLocalTime(createdAt);
    const updatedTime = formatToLocalTime(updatedAt);
  
    return createdAt === updatedAt ? [createdTime] : [createdTime, updatedTime];
}
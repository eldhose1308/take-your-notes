export const formatToIST = (utcDate, optionsArg={}) => {
    const isoTimestamp = new Date(utcDate + ' UTC');
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
    const createdTime = formatToIST(createdAt);
    const updatedTime = formatToIST(updatedAt);
  
    return createdAt === updatedAt ? [createdTime] : [createdTime, updatedTime];
}
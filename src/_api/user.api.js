import userData from "_mockData/user.mock";

const login = (data, config={}) => {
    const { setProgress, abortRequest } = config;

    
    let progress = 0;
    return new Promise((resolve, reject) => {
        const intervalId = setInterval(() => {
            progress = progress + 10
            setProgress && setProgress(progress)
            if (progress === 100) {
                clearInterval(intervalId);
                if(Math.floor(Math.random()*10)%2===0)
                    resolve(userData)
                else
                    reject('Byee')    
            }
        }, 100)
    })
}

export {
    login,
}


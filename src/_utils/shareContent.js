export const shareContent = ({ title, text, url }) => {
    return new Promise((resolve, reject) => {

        if (navigator.share) {
            navigator.share({ title, text, url })
                .then(() => {
                    resolve('share');
                })
                .catch(err => {
                    console.error('@unable to copy to clipboard', err);
                    reject()
                });
        } else {
            navigator.clipboard.writeText(url)
                .then(() => {
                    resolve('clipboard');
                })
                .catch(err => {
                    reject(err)
                    console.error('@unable to copy to clipboard', err);
                });
        }
    })

}

import { BASE_URL } from "_constants";
import userData from "_mockData/user.mock";
import { AccessAPI } from "_utils";

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

const signin = (payload) => {
    return new AccessAPI(BASE_URL + 'auth/signin').post(payload)
        .then((res) => {
            return res
        }).catch((err) => {
            throw err
        })
} 
const userDataArray = [
    { name: "Lucas Martins", email: "lucas.martins@gmail.com", username: "lucasmartins", password: "Lucas@2024" },
    { name: "Sophie Collins", email: "sophie.collins@aol.com", username: "sophiecollins", password: "Sophie@1234" },
    { name: "Hiroshi Kimura", email: "hiroshi.kimura@yahoo.com", username: "hiroshikimura", password: "Hiroshi@5678" },
    { name: "Maya Gupta", email: "maya.gupta@outlook.com", username: "mayagupta", password: "Maya@2024" },
    { name: "Liam Anderson", email: "liam.anderson@gmail.com", username: "liamanderson", password: "Liam@1234" },
    { name: "Zara Patel", email: "zara.patel@domain.com", username: "zarapatel", password: "Zara@5678" },
    { name: "Rei Yamashita", email: "rei.yamashita@aol.com", username: "reiyamashita", password: "Rei@9876" },
    { name: "Ethan Walker", email: "ethan.walker@domain.com", username: "ethanwalker", password: "Ethan@2024" },
    { name: "Mira Sharma", email: "mira.sharma@outlook.com", username: "mirasharma", password: "Mira@2345" },
    { name: "Chloe Johnson", email: "chloe.johnson@gmail.com", username: "chloejohnson", password: "Chloe@5678" },
    { name: "Jin Park", email: "jin.park@yahoo.com", username: "jinpark", password: "Jin@1234" },
    { name: "Eva Chang", email: "eva.chang@domain.com", username: "evachang", password: "Eva@9876" },
    { name: "Arjun Gupta", email: "arjun.gupta@aol.com", username: "arjungupta", password: "Arjun@2345" },
    { name: "Harper Clark", email: "harper.clark@gmail.com", username: "harperclark", password: "Harper@5678" },
    { name: "Siti Hawa", email: "siti.hawa@yahoo.com", username: "siti.hawa", password: "Siti@2024" },
    { name: "David Tan", email: "david.tan@gmail.com", username: "davittan", password: "David@9876" },
    { name: "Nina Patel", email: "nina.patel@hotmail.com", username: "ninapatel", password: "Nina@1234" },
    { name: "Akira Suzuki", email: "akira.suzuki@outlook.com", username: "akirasuzuki", password: "Akira@2345" },
    { name: "Luca Rossi", email: "luca.rossi@gmail.com", username: "lucarossi", password: "Luca@5678" },
    { name: "Priya Yadav", email: "priya.yadav@domain.com", username: "priyayadav", password: "Priya@2024" },
    { name: "Elliot White", email: "elliot.white@aol.com", username: "elliotwhite", password: "Elliot@1234" },
    { name: "Zoe Wang", email: "zoe.wang@gmail.com", username: "zoewang", password: "Zoe@9876" },
    { name: "John Tanaka", email: "john.tanaka@gmail.com", username: "johntanaka", password: "John@2345" },
    { name: "Amaya Kaur", email: "amaya.kaur@domain.com", username: "amayakaur", password: "Amaya@5678" },
    { name: "Kento Fujiwara", email: "kento.fujiwara@gmail.com", username: "kentofujiwara", password: "Kento@1234" },
    { name: "Neha Arora", email: "neha.arora@aol.com", username: "nehaarora", password: "Neha@9876" },
    { name: "Kairos Vasquez", email: "kairos.vasquez@domain.com", username: "kairosvasquez", password: "Kairos@2024" },
    { name: "Dylan Kim", email: "dylan.kim@gmail.com", username: "dylankim", password: "Dylan@1234" },
    { name: "Zara Yang", email: "zara.yang@aol.com", username: "zarayang", password: "Zara@5678" },
    { name: "Lukas Andersson", email: "lukas.andersson@outlook.com", username: "lukasandersson", password: "Lukas@2345" },
    { name: "Eiko Kobayashi", email: "eiko.kobayashi@domain.com", username: "eikokobayashi", password: "Eiko@1234" },
    { name: "Kunal Patel", email: "kunal.patel@gmail.com", username: "kunalpatel", password: "Kunal@9876" },
    { name: "Laila Khalid", email: "laila.khalid@yahoo.com", username: "lailakhalid", password: "Laila@2345" },
    { name: "Jaxson Cooper", email: "jaxson.cooper@aol.com", username: "jaxsoncooper", password: "Jaxson@5678" },
    { name: "Asahi Ito", email: "asahi.ito@domain.com", username: "asahiito", password: "Asahi@2024" },
    { name: "Mira Gupta", email: "mira.gupta@aol.com", username: "miragupta", password: "Mira@1234" },
    { name: "Jayden Bennett", email: "jayden.bennett@gmail.com", username: "jaydenbennett", password: "Jayden@9876" },
    { name: "Nina Ma", email: "nina.ma@domain.com", username: "ninama", password: "Nina@2345" },
    { name: "Kenji Watanabe", email: "kenji.watanabe@aol.com", username: "kenjiwatanabe", password: "Kenji@5678" },
    { name: "Maya Menon", email: "maya.menon@yahoo.com", username: "mayamenon", password: "Maya@2024" },
    { name: "Riku Suzuki", email: "riku.suzuki@gmail.com", username: "rikusuzuki", password: "Riku@2345" },
    { name: "Anita Sharma", email: "anita.sharma@domain.com", username: "anitasharma", password: "Anita@9876" },
    { name: "Liam Sato", email: "liam.sato@gmail.com", username: "liamsato", password: "Liam@1234" },
    { name: "Sakura Tanaka", email: "sakura.tanaka@aol.com", username: "sakuratnaka", password: "Sakura@2024" },
    { name: "Alexis Lee", email: "alexis.lee@gmail.com", username: "alexislee", password: "Alexis@5678" },
    { name: "Kai Zhang", email: "kai.zhang@domain.com", username: "kaizhang", password: "Kai@2345" },
    { name: "Taro Yamamoto", email: "taro.yamamoto@aol.com", username: "taroyamamoto", password: "Taro@5678" },
    { name: "Ishaan Desai", email: "ishaan.desai@domain.com", username: "ishaan.desai", password: "Ishaan@1234" },
    { name: "Aria Green", email: "aria.green@aol.com", username: "ariagreen", password: "Aria@9876" },
    { name: "Milo Thompson", email: "milo.thompson@domain.com", username: "milothompson", password: "Milo@2345" },
    { name: "Sophie Patel", email: "sophie.patel@aol.com", username: "sophiepatel", password: "Sophie@5678" },
    { name: "Naomi Matsumoto", email: "naomi.matsumoto@domain.com", username: "naomimatsumoto", password: "Naomi@2024" },
    { name: "Vikram Reddy", email: "vikram.reddy@domain.com", username: "vikramreddy", password: "Vikram@9876" },
    { name: "Aiden Lee", email: "aiden.lee@domain.com", username: "aidenlee", password: "Aiden@2345" },
    { name: "Leo Cruz", email: "leo.cruz@aol.com", username: "leocruz", password: "Leo@5678" },
    { name: "Kyoko Nishida", email: "kyoko.nishida@domain.com", username: "kyokonishida", password: "Kyoko@2024" },
    { name: "Sophia Wong", email: "sophia.wong@gmail.com", username: "sophiawong", password: "Sophia@1234" },
    { name: "Haruto Kato", email: "haruto.kato@domain.com", username: "harutokato", password: "Haruto@5678" },
    { name: "Daniel Gonzalez", email: "daniel.gonzalez@domain.com", username: "danielgonzalez", password: "Daniel@2024" },
    { name: "Amira Khan", email: "amira.khan@aol.com", username: "amirakhan", password: "Amira@1234" },
    { name: "Lena Johansson", email: "lena.johansson@domain.com", username: "lenajohansson", password: "Lena@9876" },
    { name: "Nishant Kumar", email: "nishant.kumar@domain.com", username: "nishantkumar", password: "Nishant@2345" },
    { name: "Alina Lee", email: "alina.lee@gmail.com", username: "alinalee", password: "Alina@5678" }
];


  

const signup = (payload) => {
    userDataArray.forEach((user) => {
	const { name, email, username, password } = user;
    const newPayload = {email, password,full_name:name,user_name:username}

    return new AccessAPI(BASE_URL + 'auth/signup').post(newPayload)
        .then((res) => {
            return res
        }).catch((err) => {
            throw err
        })
    })

} 

const signout = (payload) => {
    return new AccessAPI(BASE_URL + 'auth/logout').post(payload)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}

const googleAuth = (payload) => {
    return new AccessAPI(BASE_URL + 'auth/googleSignup').post(payload)
        .then((res) => {
            return res
        }).catch((err) => {
            throw err
        })
} 

export {
    login,
    signin,
    signup,
    signout,

    googleAuth
}


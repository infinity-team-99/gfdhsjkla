const apiUrl = "https://api.mymemory.translated.net/get";
const languages = {
    "en": "English",
    "uz": "Uzbek",
    "ru": "Russian",
    "fr": "French",
    "de": "German",
    "es": "Spanish",
    "zh": "Chinese",
    "ar": "Arabic"
};
const dark = document.getElementById('dark')

document.addEventListener('DOMContentLoaded', () => {
    const inplang = document.getElementById('inplang')
    const outlang = document.getElementById('outlang')
    Object.entries(languages).forEach(([code, name]) => {
        inplang.innerHTML += `<option value="${code}">${name}</option>`
        outlang.innerHTML += `<option value="${code}">${name}</option>`

    });
});

document.getElementById('translatebtn').addEventListener('click', async () => {
    const text = document.getElementById('inptext').value;
    const fromlang = document.getElementById('inplang').value;
    const tolang = document.getElementById('outlang').value;
    if (!text) return;

    const response = await fetch(`${apiUrl}?q=${encodeURIComponent(text)}&langpair=${fromlang}|${tolang}`);
    const data = await response.json();
    document.getElementById('outtext').value = data.responseData.translatedText;

})

document.querySelectorAll('.speak').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.getElementById(btn.getAttribute('data-target'));
        const lang = btn.closest('.translation-box').querySelector('select').value;

        const utterance = new SpeechSynthesisUtterance(target.value);
        utterance.lang = lang;

        speechSynthesis.speak(utterance);
    });
});
let i = 0
dark.addEventListener('click', () => {
    i++
    if (i % 2 == 0) {
        document.head.innerHTML = `
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

        <style>
        body {
    font-family: Arial, Helvetica, sans-serif;
    background: url(https://wallpapercave.com/wp/wp12568440.jpg) no-repeat center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;

}

.container {
    background-color: rgba(255, 255, 255, 0.514);
    backdrop-filter: blur(10px);
    padding:30px 10px;
    width: 300px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    height: 450px;
    width: 450px;
    padding-left: 10px;
}

h2 {
    color: #333;

}

.translation-box {
    margin-bottom: 15px;

}

textarea {
        background: rgb(230, 230, 230);
    outline: none;
    width: 95%;
    height: 80px;
    padding: 10px;
border: none;
    border-bottom: 1px solid rgb(36, 36, 36);
    border-top: 2px solid rgb(251, 251, 251);
        border-radius: 15px;
    resize: none;
}

.controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding-right: -4px;
    width: 450px;
    margin-top: 5px;

}

select {
    background: rgb(230, 230, 230);
    flex: 1;
    padding: 10px;
    border-radius: 99px;
    width: 180px;
    height: 50px;
    border: none;
    outline: none;
    border-bottom: 1px solid rgb(36, 36, 36);
    border-top: 2px solid rgb(251, 251, 251);


}

.speak {
    background: rgb(230, 230, 230);
    border: none;
    border-bottom: 1px solid rgb(36, 36, 36);
    border-top: 2px solid rgb(255, 255, 255);
    border-radius: 99px;
    height: 50px;
    width: 50px;
    font-size: 20px;
    cursor: pointer;
}

#translatebtn {
        background: rgb(230, 230, 230);
    color: black;
    border: none;
    padding: 10px 15px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
 border-bottom: 1px solid rgb(36, 36, 36);
    border-top: 2px solid rgb(255, 255, 255);
    border-radius: 99px;
 
}
button:active{
    position: relative;
    top: 1px;
height: 48px;
border-bottom: none;
}

select:active{
    position: relative;
    top: 1px;
border-bottom: none;
height: 48px;
padding-bottom: 8px;
}
.mode{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
top: 20px;
right: 20px;

}
#dark{
    background: rgb(230, 230, 230);
    border: none;
    height: 40px;
    width: 80px;
    border-radius: 15px;
    cursor: pointer;
    display:flex ;
    justify-content: center;
    align-items: center;
    gap: 23px;
    font-size: 16px;
    margin-top: 10px;
padding-bottom: 3px;
 border-bottom: 1px solid rgb(36, 36, 36);
    border-top: 2px solid rgb(255, 255, 255);
    border-radius: 99px;
}
i{
    transform: scale(1.3)
}
.bac{
    background-color: rgba(158, 55, 255, 0.575);
    width: 35px;
    height: 35px;
    border-radius: 99px;
    position: absolute;
    right:42px;
    animation-name:bb;
    animation-fill-mode: forwards;
    animation-duration: 0.4s;
}
@keyframes bb{
    0%{
    position: absolute;
    right:3px;
    }
    100%{
    position: absolute;
    right:42px;
    }
}

@keyframes xx{
    0%{
    position: absolute;
    right:42px;
    }
    100%{
    position: absolute;
    right:3px;
    }
}
        </style>
        `
    }
    else {

        document.head.innerHTML = `
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

        <style>
        body {
    font-family: Arial, Helvetica, sans-serif;
    background: url(https://wallpapercave.com/wp/wp12568440.jpg) no-repeat center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
            color:white;


}

.container {
    background-color: rgba(46, 46, 46, 0.64);
    backdrop-filter: blur(10px);
    padding:30px 10px;
    width: 300px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
    height: 450px;
    width: 450px;
    padding-left: 10px;
            color:white;

}

h2 {
        color:white;

}

.translation-box {
    margin-bottom: 15px;

}

textarea {
        background: #333;
    outline: none;
    width: 95%;
    height: 80px;
    padding: 10px;
border: none;
    border-bottom: 1px solid rgb(0, 0, 0);
    border-top: 2px solid rgb(71, 71, 71);
        border-radius: 15px;
    resize: none;
}

.controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding-right: -4px;
    width: 450px;
    margin-top: 5px;

}
textarea::placeholder{
        color:white;

}
select {
    background: #333;
 border-bottom: 1px solid rgb(0, 0, 0);
    border-top: 2px solid rgb(71, 71, 71);
    flex: 1;
    padding: 10px;
    border-radius: 99px;
    width: 180px;
    height: 50px;
    border: none;
    outline: none;
            color:white;


}

.speak {
background: #333;
 border-bottom: 1px solid rgb(0, 0, 0);
    border-top: 2px solid rgb(71, 71, 71);    border: none;
   
    border-radius: 99px;
    height: 50px;
    width: 50px;
    font-size: 20px;
    cursor: pointer;
}

#translatebtn {
background: #333;
 border-bottom: 1px solid rgb(0, 0, 0);
    border-top: 2px solid rgb(71, 71, 71);    color: black;
    border: none;
    padding: 10px 15px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
   border-radius: 99px;
         color:white;

}
button:active{
    position: relative;
    top: 1px;
height: 48px;
border-bottom: none;
}

select:active{
    position: relative;
    top: 1px;
border-bottom: none;
height: 48px;
padding-bottom: 8px;
}
.mode{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
top: 20px;
right: 20px;

}
#dark{
    background: #333;
 border-bottom: 1px solid rgb(0, 0, 0);
    border-top: 2px solid rgb(71, 71, 71);
    border: none;
    height: 40px;
    width: 80px;
    border-radius: 15px;
    cursor: pointer;
    display:flex ;
    justify-content: center;
    align-items: center;
    gap: 23px;
    font-size: 16px;
    margin-top: 10px;
padding-bottom: 3px;
    border-radius: 99px;
}
i{
    transform: scale(1.3)
}
.bac{
    background-color: rgba(158, 55, 255, 0.575);
    width: 35px;
    height: 35px;
    border-radius: 99px;
    position: absolute;
    right:42px;
    animation-name:xx;
    animation-fill-mode: forwards;
    animation-duration: 0.4s;
}
@keyframes bb{
    0%{
    position: absolute;
    right:3px;
    }
    100%{
    position: absolute;
    right:42px;
    }
}

@keyframes xx{
    0%{
    position: absolute;
    right:42px;
    }
    100%{
    position: absolute;
    right:3px;
    }
}
        </style>
        `
    }


})
















































































































































































































const title = document.title
const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');


if(title == "Main"){
    navBtn.onclick = () => {
        if (nav.classList.toggle('open')) {
            navBtnImg.src = "./resources/nav-close.svg";
        }
        else{
            navBtnImg.src = './resources/nav-open.svg';
        }
    }
}else{
    navBtn.onclick = () => {
        if (nav.classList.toggle('open')) {
            navBtnImg.src = "../resources/nav-close.svg";
        }
        else{
            navBtnImg.src = '../resources/nav-open.svg';
        }
    }

}






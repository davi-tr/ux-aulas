function changeMode(){
  changeClass();
  changeBtn();
  changeImg()
}

function changeClass(){
    body.classList.toggle(darkModeClass);
}

function changeBtn(){
  button.classList.toggle(darkModeClass);
}

const icon = document.getElementById('btn');
let toggle = true;

function changeImg(){
    if (image.src == "https://img.icons8.com/ios-glyphs/90/000000/github.png"){
      image.src = "https://img.icons8.com/ios-glyphs/90/FFFFFF/github.png";
    } else{
      image.src = "https://img.icons8.com/ios-glyphs/90/000000/github.png"
    }
}

const darkModeClass = 'dark-mode'
const body = document.getElementsByTagName('body')[0];


const button = document.getElementById('btn');
const image = document.getElementById('git');


button.addEventListener('click', changeMode);
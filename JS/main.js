let text=document.getElementById('text')
let email=document.getElementById('email')
let button=document.getElementById('button')
let h1=document.getElementById('h1');

// function
function updateHeader() {
    h1.innerHTML=`Welcome to you !  ${text.value}`
    if (text.value !== '') {
        h1.style.background='#161515bb';
        h1.style.borderRadius='30px';
        h1.style.paddingTop='20px'
    }
}
let img2=document.createElement('img')
img2.src='wallpaperflare.com_wallpaper (5).jpg';
let img3=document.createElement('img')
img3.src='wallpaperflare.com_wallpaper (6).jpg';


let  car_menu =document.querySelector('.car_menu')













function div(){
let div_20=document.createElement('div')
let img_20=document.createElement('img')
let div_body_20=document.createElement('div')
let h5_20=document.createElement('h5')
let p_20=document.createElement('p')
let button_20=document.createElement('button')
let text_h5_20=document.createTextNode('card!! !')
let text_p_20=document.createTextNode('Lorem ipsum dolor sitamet consectetur adipisicing elit. Culpa, quisquam?')
let text_button_20=document.createTextNode('button')
div_20.className="card m-3 w-card bg-white";
img_20.src=img3.src;
div_body_20.className="card-body";
h5_20.className="text-primary"
p_20.className="text-dark"
button_20.className="btn btn-outline-primary text-dark"
h5_20.appendChild(text_h5_20)
p_20.appendChild(text_p_20)
button_20.appendChild(text_button_20)
div_body_20.appendChild(h5_20)
div_body_20.appendChild(p_20)
div_body_20.appendChild(button_20)
div_20.appendChild(img_20)
div_20.appendChild(div_body_20)

car_menu.appendChild(div_20)
}

div();div();div();div();div();div();
div();div();div();div();div();div();
div();div();div();div();div();div();
div();div();div();div();div();div();

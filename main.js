let btn = document.querySelector("#btn");
let data = document.querySelector("#data");
let isTrue = false;

// let btn = document.querySelector('#menubar');
btn.addEventListener('click', myMenu)

function myMenu(){
    isTrue = !isTrue;
    console.log(isTrue)
    activeMenu();
}
function activeMenu(){
    if(isTrue){
        btn.classList.remove('ti-menu');
        btn.classList.add('ti-close')
        data.classList.remove('-translate-y-80')
        // data.classList.remove('opacity-0')
    }
    else{
        btn.classList.remove('ti-close');
        btn.classList.add('ti-menu');
        data.classList.add('-translate-y-80')
        // data.classList.add('opacity-0')
    }
}



// scroll bar change
let fix = document.querySelector('#fix');
let opacity = document.querySelector('#opacity');

window.onscroll = function(){
    if(document.documentElement.scrollTop > 500){
        fix.classList.add('fixed', 'duration-700')
        
        // fix.classList.add('bg-yellow-700')
        // opacity.classList.remove('opacity-50')
    }
    else{
        fix.classList.remove('fixed')
        // fix.classList.remove('bg-yellow-700')
        // opacity.classList.add('opacity-50');
    }
}




//toggleMenu

// let btn = document.querySelector('#btn');
// let toggleMenu = document.querySelector('#toggleMenu');
// let isTrue = false;
// function toggleFunc(){
//     isTrue = !isTrue;
//     activeFunc();
// }
// function activeFunc(){
//     if(isTrue){
//         toggleMenu.classList.remove('ti-menu-alt')
//         toggleMenu.classList.add('ti-close');
//         btn.classList.remove('-translate-y-80')
//     }else{
//         toggleMenu.classList.remove('ti-close')
//         toggleMenu.classList.add('ti-menu-alt')
//         btn.classList.add('-translate-y-80')
//     }
// }
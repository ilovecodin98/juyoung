let cn2Images = document.getElementsByClassName("cn2_images");
let cn2MenuTitles = document.querySelectorAll('#cn2_menu ul li a');
let cn2MenuBottum = document.getElementsByClassName("cn2_menu_bottom");


for(let r = 0; r < cn2MenuTitles.length; r++){
    cn2MenuTitles[r].addEventListener("click", function(e){
        e.preventDefault();
        for(let j = 0; j < cn2Images.length; j++){
            cn2Images[j].style.display = "none";
            cn2MenuBottum[j].style.display = "none"
        }
        cn2Images[r].style.display = "block";
        cn2MenuBottum[r].style.display = "block";
    });
}

cn2Images[2].style.display = "block";
cn2MenuBottum[2].style.display = "block";


let cn4Menu = document.querySelectorAll("#cn4_menu ul a");
let cn4BoxInside = document.getElementsByClassName("con4_box_inside");
let cn4MenuBottom = document.getElementsByClassName("cn4_menu_bottom");



for(let i = 0; i < cn4Menu.length; i++){
    cn4Menu[i].addEventListener("click", function(e){
        e.preventDefault();
        for(let t = 0; t < cn4BoxInside.length; t++){
            cn4BoxInside[t].style.display = "none";
            cn4MenuBottom[t].style.display = "none";
        }
        cn4MenuBottom[i].style.display = "flex";
        cn4BoxInside[i].style.display = "flex";
    });
}
cn4MenuBottom[0].style.display = "block";
cn4Menu[0].style.display = "flex";
cn4BoxInside[0].style.display = "flex";










const cn6PrvBnt = document.getElementById("cn6_prv");
const cn6NextBnt = document.getElementById("cn6_next");
let cn6Images = document.getElementById("cn6_best_item_for_move");




cn6PrvBnt.addEventListener("click", function(){
        cn6Images.style.marginLeft = "0";
        cn6PrvBnt.style.display ="none"
        cn6NextBnt.style.display ="flex"
    }

);


cn6NextBnt.addEventListener("click", function(){
    cn6Images.style.marginLeft = "-100%";
    cn6NextBnt.style.display ="none"
    cn6PrvBnt.style.display ="flex"
}

);




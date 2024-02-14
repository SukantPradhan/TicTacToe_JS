let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let hide=document.querySelector(".hide");
let win=document.querySelector("#win");
let newbut=document.querySelector("#new-but");
let point=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(point){
            point=false;
            box.innerText= "O";

        }
        else{
            point=true;
            box.innerText= "X";
        }
        box.disabled=true;
        checkwinner();
    });
});
const disableboxes=()=>{
    for(let p of boxes){
        p.disabled=true;

    }
};
const enableboxes=()=>{
    for(let p of boxes){
        p.disabled=false;
        p.innerText="";

    }
};

const showinner = (winner) => {
    win.innerText=`Congratulations ${winner}`;
    hide.classList.remove("hide");
};

const checkwinner = () =>{
    for(let pt of winpatterns){
        // console.log(pt[0],pt[1],pt[2]);
        // console.log(boxes[pt[0]].innerText,boxes[pt[1]].innerText,boxes[pt[2]].innerText);
        let pos1=boxes[pt[0]].innerText;
        let pos2=boxes[pt[1]].innerText;
        let pos3=boxes[pt[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !="" ){
            if(pos1 === pos2 && pos2 === pos3){
                showinner(pos1);
                 disableboxes();
            }
        }
    }
};
const resetbox = ()=>{
    point=true;
    enableboxes();
    hide.classList.add("hide");
};
reset.addEventListener("click",resetbox);
newbut.addEventListener("click",resetbox);
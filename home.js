
const nameList = ['rahul' , 'aditya' , 'avishek' , 'himanshu' , 'naman' , 'shailesh' , 'dixit' , 'narendra'];

let lengthOfList = nameList.length;

// function for choosing random name from list 
function chooseName(){
    const ind = Math.floor( Math.random()*lengthOfList);
    const name = nameList[ind];
    return name;
}


let Name = chooseName();
let lengthOfName = Name.length;


function createLi(val){
    let li = document.createElement("li");
    li.append(val);
    return li;
}

const content =  document.getElementById("words");

for(let i=0;i<lengthOfName;i++){
    let li = createLi("_");
    content.append(li);
}


// for Remianing live
const remianingLive = document.getElementById("live-no");




const btn = document.getElementsByClassName("btn");

for(let item of btn){
    item.addEventListener("click" , function(){
        change( item.innerText);
    });
}

let remianing = 5;
function change(  val){
    
    const temp = content.getElementsByTagName("li");
    let p = false;
    for(let i=0;i<Name.length;i++){
        if(val===Name[i]){
            
            temp[i].innerText = val;
            p = true;
        }
    }
    if(!p){
        remianing--;
        remianingLive.innerText = remianing;
    }
    if(isWin(temp) || remianing === 0){
        
        
        remianing = 5;
        remianingLive.innerText =5;
        setTimeout(function(){
            if(isWin(temp)){
                alert("Congrats ..... you win ")
            }
            else{
                alert("You lose")
            }
            reset(temp);
        } , 500);
        

    }
    
    
}

// reset function
function reset(temp){
    
   for(let x of temp){
       x.innerText = '_';
   }
   Name = chooseName();
   lengthOfName = Name.length;

}

// cheching for win
function isWin(temp){
    for(let x of temp){
        if(x.innerText === '_'){
            return false
        }
    }
    return true;
}
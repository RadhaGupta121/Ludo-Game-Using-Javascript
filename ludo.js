const faces=[
     "one.png",
     "two.png",
     "three.png","four.png","five.png","six.png"

];


const btn=document.getElementById("clck");
const image1=document.getElementById('img1');
const image2=document.getElementById('img2');
const winner =document.getElementById("winner");

const randomnumber1=Math.floor(Math.random()*faces.length);

const randomnumber2=Math.floor(Math.random()*faces.length);
console.log(randomnumber1);
console.log(randomnumber2);

const playGame=()=>{
    image1.src=faces[randomnumber1];
image2.src=faces[randomnumber2];

if(randomnumber1==randomnumber2)
{
    winner.innerText="DRAW";
}
else if(randomnumber1>randomnumber2)
{
    winner.innerText="Player1 Won the match";
}
else if(randomnumber1<randomnumber2)
{
    winner.innerText="Player2 won the match";
}


}
btn.addEventListener('click',function(){
    if(btn.innerText=='Click Me')
    {
       clck.innerText='Start Again';
        playGame();
    }
   else if(clck.innerText=='Start Again')
    {
        window.location.reload();
        playGame();
    }
   
})


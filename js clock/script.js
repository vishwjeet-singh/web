const sechand=document.querySelector('.sec-hand');
const minhand=document.querySelector('.min-hand');
const hourhand=document.querySelector('.hr-hand'); 
function setdate() {
    const now=new Date();
    const seconds=now.getSeconds();
    const secondsdegree=((seconds/60)*360)+90;
    sechand.style.transform=`rotate(${secondsdegree}deg)`;
    const minutes = now.getMinutes();
    const minutesdegree = ((minutes/60)*360)+90;
    minhand.style.transform=`rotate(${minutesdegree}deg)`;

     const hour = now.getHours();
     const hourdegree= ((hour/12)*360)+90;
     hourhand.style.transform=`rotate(${hourdegree}deg)`;
}
setInterval(setdate,1000);
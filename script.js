const countLabel = document.getElementById('countLabel')
const increaseBtn = document.getElementById('increaseBtn')
const decreaseBtn = document.getElementById('decreaseBtn')
const resetBtn = document.getElementById('resetBtn')

let count = 0;
let interval;

increaseBtn.onclick = ()=>{
    interval = setInterval(()=>{
        count ++;
        countLabel.textContent = count
    },800)
    
}

decreaseBtn.onclick = ()=>{
    clearInterval(interval)
    interval = setInterval(()=>{
        count --;
        countLabel.textContent = count
    },1000)
}

resetBtn.onclick = ()=>{
    clearInterval(interval)
    count = 0 ;
    countLabel.textContent = count
}
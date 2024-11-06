const successbtn=document.querySelector(".sbtn");
const errorbtn=document.querySelector(".ebtn");
const invalidbtn=document.querySelector(".ibtn");

let toastbox=document.getElementById('toastbox');

function showtoast(){
  let toast=document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML='<i class="fa-solid fa-circle-check"></i>Successfully submitted';
  toastbox.appendChild(toast);
}

function showtoast1(){
  let toast1=document.createElement('div');
  toast1.classList.add('toast');
  toast1.innerHTML='<i class="fa-solid fa-circle-xmark"></i>Rectify the error';
  toastbox.appendChild(toast1);
}

function showtoast2(){
  let toast2=document.createElement('div');
  toast2.classList.add('toast');
  toast2.innerHTML='<i class="fa-solid fa-circle-exclamation"></i>Invalid input, Try again';
  toastbox.appendChild(toast2);
}

successbtn.addEventListener("click",()=>{
  showtoast();
})

errorbtn.addEventListener("click",()=>{
  showtoast1();
})

invalidbtn.addEventListener("click",()=>{
  showtoast2();
})
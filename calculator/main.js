const arr = document.querySelectorAll(".keys");
const result = document.getElementById("result");
const ligne1 = document.getElementById("ligne1")
const ligne2 = document.getElementById("ligne2")
for(let i=0;i<arr.length;i++){
    let data;
    arr[i].addEventListener('click',()=>{
        data = arr[i].textContent;
        
            ligne1.textContent +=  data
        
    })
}

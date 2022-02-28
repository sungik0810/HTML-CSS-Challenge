

const timediv = document.querySelector("time")
function timerset(){
    const time = new Date
       let hours = String(time.getHours()).padStart(2,"0")
       let minutes = String(time.getMinutes()).padStart(2,"0")
       let timer = `${hours}:${minutes}`
   timediv.innerText = `SKT ${timer}`
   }
   timerset()
   setInterval(timerset,1000)
   

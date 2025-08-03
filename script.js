console.clear()

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM повністю завантажений");

  const loader = document.querySelector(".loader");     // додаємо
  const container = document.querySelector(".container"); // додаємо

  setTimeout(() => {
    loader.style.opacity = "0";
    container.style.opacity = "1";
    document.body.style.background = "#ffffff"
    document.body.style.height = "fit-content"
  }, 4000);
});




console.clear()
const s = document.querySelector(".sec")
const m = document.querySelector(".min")
const h = document.querySelector(".hour")
setInterval(()=>{
  const now = new Date()
  const sec = now.getSeconds()
  const min = now.getMinutes()
  const hour = now.getHours()

 s.style.transform = `rotate(${sec * 6}deg)`  
 m.style.transform = `rotate(${min * 6 + sec * 0.1}deg)`  
 h.style.transform = `rotate(${hour * 30 + min * 0.5}deg)`
 
 
 console.log(sec, min, hour)
 
  
},1000)          


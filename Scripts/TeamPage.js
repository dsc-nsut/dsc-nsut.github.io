

const show=(name,btnId)=>{
 const e = document.getElementById(name);
 const btn = document.getElementById(btnId);
  e.classList.toggle("show");
  if(btn.innerHTML==="Show All")
  btn.innerHTML="Show Less";
  else
  btn.innerHTML="Show All";
}
const teamName=(name ,btnId)=>{
   show(name,btnId);
}
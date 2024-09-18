
setInterval(() => {
  
  document.getElementsByTagName('p')[2].innerText=new Date().getSeconds()<10 ? '0'+ new Date().getSeconds()+'s': new Date().getSeconds()+' s';
  document.getElementsByTagName('p')[1].innerText=new Date().getMinutes()<10 ? '0'+new Date().getMinutes()+'m':new Date().getMinutes()+' m'
  document.getElementsByTagName('p')[0].innerText= new Date().getHours<10 ? '0'+new Date().getHours()+'h' : new Date().getHours()+' h';
}, 1000);
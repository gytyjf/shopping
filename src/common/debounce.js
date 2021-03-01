export function debounce(fun,deplay){
  let time = null;
  return function(...args){
      if(time) clearTimeout(time);
      time = setTimeout(() =>{
        fun.apply(this,args);
      },deplay)
  }
}
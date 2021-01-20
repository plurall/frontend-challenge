export function formatedDate(str){
  return str.split('-').reduce((p, c) =>  `${c}/${p}` )
}
export default function generateRandomColorArr(arrLength, opacity) {
  const randomColorArr =[]
  while (randomColorArr.length < arrLength) {
    randomColorArr.push(`rgba(${ rand(0, 255) }, ${ rand(0, 255) }, ${ rand(0, 255) }, ${opacity})`);
  }

  function rand(frm, to) {
    return Math.floor(Math.random() * (to - frm)) + frm;
  }
  return randomColorArr;
}
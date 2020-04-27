async function loadImage(url) {
  return new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
  })
}
let preload = function (list, max = 3){
  let length = list.length;
  let count = 0;
  let promiseList = [];
  let imgs = [];
  let next = async (resolve, reject) => {
    if(count < length){
      count++;
      let img;
      img = await loadImage(list[count])
      imgs.push(img);
      next(resolve, reject);
    } else {
      resolve(imgs);
    }
  };
  for(let i = max; i >= 0; i--){
    promiseList.push(new Promise(next));
  }

  return Promise.all(promiseList);
};

let src = "http://meadjohson2020.app.tianletravel.com/shareImg.jpg";
let list = [];
let result;
for(let i = 0; i < 100; i++){
  list.push(src);
}
preload(list,3).then((res)=>{
  result = res;
});



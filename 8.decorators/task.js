//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  return function (...args) {
    const hash = md5(args);
    let cacheObject = cache.find((cacheObject) => cacheObject.hash === hash);

    if (cacheObject) {
        //console.log("Из кэша: " + cacheObject.result);
        return "Из кэша: " + cacheObject.result;
    }

    let result = func(...args);
    cache.push({hash, result});

    if (cache.length > 5) {
        cache.shift();
    }

    return "Вычисляем: " + result;
  }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  
}

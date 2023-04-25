//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  return function (...args) {
    const hash = md5(args);
    let cacheObject = cache.find((cacheObject) => cacheObject.hash === hash);

    if (cacheObject) {
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
  let timeout = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    if (timeout === null) {
        func(...args);
        wrapper.count++;
    }

    if (timeout) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
        timeout = true;
        func(...args);
        wrapper.count++;
    }, delay);
    wrapper.allCount++;
  }

  return wrapper;
}

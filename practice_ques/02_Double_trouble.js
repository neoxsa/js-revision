// You were tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them

function checkD(items) {

    const result = [];

    for (let i = 0; i <= items.length; i++) {
        if (items[i] === items[i + 1]) {
          return  result.push(items[i]);
        } else {
          return  result.push(items[i]);
        }

    }
    return result;
}


console.log(checkD(["hello", "world", "hello"]))
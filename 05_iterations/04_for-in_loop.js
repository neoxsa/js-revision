//  for in loop

// Object ex: for in Works ✅ 
const languages = {
    js: "Javascript",
    py: "Python",
    cpp: "C++",
    swift: "Swift"
}

for (const key in languages) {
    console.log(key);
}

// Array ex:

const programming = ["js", "py", "ruby", "cpp"]

for (const key in programming) {
    // Here instead of keys it print only 0 to 3
    console.log(key)    // In arrays the keys value are showing in index numbers.

    console.log(programming[key]);
}

// Map ex: Not working because Map is Immutable
const map = new Map()

map.set('DOM', "Document Object Manipulation")
map.set('SPA', "Single Page Application")
map.set('SSR', "Server Side Rendering")
map.set('API', "Application Programming Interface")
map.set('REST API', "Representational State Transfer API")

for (const key in map) {
    console.log(key);
}
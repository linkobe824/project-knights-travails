const someset = new Set();
const hash = [];

someset.add(1)
someset.add(2)
someset.add(3)
someset.add(4)

hash[0] = someset

for (let i of hash[0]){
    console.log(i)
}
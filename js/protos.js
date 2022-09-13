// console.log('Fear is the mind killer');

const myHouse = new Object();
myHouse.name = "Manor";
myHouse.rooms = 3;
myHouse.built = 1970;
myHouse.getName = function(){
    return this.name;
}

console.log(myHouse);
console.log(myHouse.getName())


function House(name, rooms, built) {
    this.name = name;
    this.rooms = rooms;
    this.built = built;
    this.getName = function(){
        return this.name;
    }
}


const ashevilleHouse = new House('Woodward', 10, 1912);
console.log(ashevilleHouse);

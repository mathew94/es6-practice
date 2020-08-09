const person = { name: "Jack William", age: 17, job: "facebooker", gfName: "Ema Watson", address: "Kochu Khet", phone: "01823444733", friends: ["Tom hancks", "Tom cruise", "Tom yarn"]};

const complexObject = {
    name: "abc",
    info: {
        address: "Kola bagan",
        leader: "Tiger Leader"
    }
}
const { leader } = complexObject.info;


const { phone, gfName, address } = person;
// const gfName = person.gfName;
// const phone = person.phone;

console.log(gfName, phone, address);
console.log(gfName, phone, address);

const friends = ["Sakib Khan", "Arman Khan", "Amir Khan", "Salman Khan", "Sharukh Khan"];
const [chotoFriend, nextFriend, ...remainingFriends] = friends;
console.log(chotoFriend, nextFriend);
console.log(remainingFriends);
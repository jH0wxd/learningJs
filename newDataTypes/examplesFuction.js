const myAnonymousFuction = function (parameter) {
    return console.log(`Test ${parameter}`)
}
myAnonymousFuction(88);

const myArrowFuction = (parameter1) => {
    console.log(`Hello World ${parameter1}`)
}
myArrowFuction(`Awesome`);

const onlyOneParameter = parameter2 => console.log(`teste ${parameter2}`)

onlyOneParameter(`69`)

const object = {
    objectFunction: parameter3 => console.log`Inside Function ${parameter3}`
}

object.objectFunction(`Test`)

const object2 = {
    object2Fuction (parameter4) {
        console.log(`Object2 ${parameter4}`)
    }
} 
object2.object2Fuction();

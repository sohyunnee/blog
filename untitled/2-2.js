const sayNode = function () {
    console.log("Node");
};

const es = 'ES';

const oldObjects = {
    sayJS : function (){
        console.log('JS');
    },
    sayNode : sayNode,
};

oldObjects[es + 6] = 'Fantastic';
oldObjects.sayNode();
oldObjects.sayJS();
console.log(oldObjects.ES6);
console.log("------------");

const newObject = {
    sayJS : function (){
        console.log('JS');
    },
    sayNode,
    [es+6] : 'Fantastic2',
}

newObject["ESS"+6]='fantastic12345';
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);

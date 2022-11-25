const relationship1 = {
    name : 'zero',
    friends : ['nero', 'hero', 'xero'],
    logFriends : function (){
        var that = this;
        this.friends.forEach(function (friend){
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();
console.log('---');
const relationship2 = {
    name : 'zero',
    friends : ['nero', 'hero', 'xero'],
    logFriends : function (){
        console.log(this);
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();

const array = ['nodejs',{},10,true];
const [node, obj, , bool] = array;
console.log(array);

const candyMachine = {
    status : {
        name: 'node',
        count: 5,
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    },
};
const {getCandy, status:{count}} = candyMachine;
console.log(count);
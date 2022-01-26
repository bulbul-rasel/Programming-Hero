var friendList = ['kalam', 'emul', 'shuvo', 'akash'];
friendList.push('noyan');
friendList.push('kawsar');

var pushFirst = friendList.unshift('Emran');
console.log(friendList);

var popName = friendList.pop()
// friendList.pop();
var firstItem = friendList.shift();
console.log(friendList);
console.log(popName);

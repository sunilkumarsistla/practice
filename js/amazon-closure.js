for(var i = 1;i<=5;++i) {
    setTimeout(() => console.log('i:',i), i*1000);
}
// change above function to print 1,2,3,4,5
for(let i = 1;i<=5;++i) {
    setTimeout(() => console.log('let i:', i), i*1000);
}
for(var i = 1;i<=5;++i) {
    (a => { setTimeout(() => console.log('iffe i:', a, i), a*1000); })(i);
}
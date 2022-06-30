let a;
let date;
let time;
const options = {
    weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'
};
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options); //Prints Date,Month and Year
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds(); //Gives Time
    document.getElementById('time').innerHTML = time + " On <br>" + date; //Prints Time
}, 100);



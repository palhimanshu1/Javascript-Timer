const myLabel = document.getElementById("myLabel");
update();
setInterval(update,1000)



function update(){
    let date = new Date()
    myLabel.innerHTML = formatTime(date)
    function formatTime(date){
        let hours = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let amOrPm = hours>=12? "PM":"AM";

        hours = (hours)%12 || 12

        hours = formatZeroes(hours)
        min = formatZeroes(min)
        sec = formatZeroes(sec)
        return `${hours}:${min}:${sec} ${amOrPm}`
    }
    function formatZeroes(time){
        time = time.toString();
        return time.length <2 ?"0"+time:time;
    }
}


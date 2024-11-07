const clockButton = document.getElementById('ClickMe');

clockButton.addEventListener('click', () =>{
    console.log('button clicked');
    clickMe();
});

async function clickMe() {
    const time = await fetch('/get_time');
    const data = await time.json();
    console.log(data);
    clockButton.innerHTML = data.time;
}
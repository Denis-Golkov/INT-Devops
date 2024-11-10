const Form = document.getElementById('check-url');
const status = document.getElementById('status');

Form.addEventListener('submit', function(event) {
    console.log('Form is submitted!');
    event.preventDefault();
    const url = document.getElementById('url').value;
    console.log(`URL: ${url}`);
    checkURL(url);
    domainValidation(url)
   
});

async function checkURL(url) {
    const response = await fetch(`/get_url?url=${url}`);
    const data = await response.json();
    console.log(data);
    console.log(data.status_code);
    status.textContent = `Status code ${data.status_code}`;
}
async function domainValidation(url) {
     const urlRegex = /^(((http|https):\/\/|)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?)$/;
     if (urlRegex.test(url)) {
          return true;
      } else {
          return alert("TDL not Valid");
      }
    
};
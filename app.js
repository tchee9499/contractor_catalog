

const scriptURL = "https://script.google.com/macros/s/AKfycbyt3YUU6fMV07Dj1tL-Xxwz6Bn4RHX8S9lzODgQozNLxk0M7epC/exec"
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .then(() => {
            //This is where you write your code
            document.querySelector("#submitter").value = ""
            document.querySelector("#submitters-email").value = ""
            document.querySelector("#vendor-name").value = ""
            document.querySelector("#phone").value = ""
            document.querySelector("#email").value = ""
            document.querySelector("#comment").value = ""


            //Do not alter below this line
        })
        .catch(error => console.error('Error!', error.message))
})
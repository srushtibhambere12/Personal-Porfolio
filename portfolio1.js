
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxHaWJ4SGIbcGfVWyI0MRDtCokSjXDGcr-KxXEnytVfZk7lR8fF84A3S-UWMA5OKajDFQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

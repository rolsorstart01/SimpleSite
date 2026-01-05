// Mobile nav toggle
document.addEventListener('DOMContentLoaded', ()=>{
  const toggle = document.getElementById('nav-toggle')
  const nav = document.getElementById('main-nav')
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('open')
    })
  }

  // Contact form handling (client-side only)
  const form = document.getElementById('contact-form')
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault()
      const name = document.getElementById('name')?.value?.trim()
      const email = document.getElementById('email')?.value?.trim()
      const message = document.getElementById('message')?.value?.trim()
      const status = document.getElementById('form-status')

      if(!name || !email || !message){
        if(status) status.textContent = 'Please complete all fields.'
        return
      }

      // Simulate send
      if(status) status.textContent = 'Sending…'
      setTimeout(()=>{
        if(status) status.textContent = 'Thanks — your message was sent (simulated).'
        form.reset()
      }, 800)
    })
  }
})

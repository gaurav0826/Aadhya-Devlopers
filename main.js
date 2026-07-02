
document.addEventListener('submit', e=>{
  if(e.target.matches('.form')){e.preventDefault(); alert('Demo enquiry submitted successfully. Connect this form to Formspree or EmailJS for live leads.'); e.target.reset();}
});

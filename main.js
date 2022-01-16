let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  function OnMouseIn(elem) {
          elem.style.width = "320px";
          elem.style.hight = "320px";
      }
      function OnMouseOut(elem) {
          elem.style.width = "300px";
          elem.style.hight = "300px";
      }
      
      const name=document.getElementById('firstName');
      const email=document.getElementById('emailAddress');
      const area=document.getElementById('area');
      const validationForm=document.getElementById('validationForm');
      const errname=document.getElementById('errname');
      const erremail=document.getElementById('erremail');
      const errarea=document.getElementById('errarea');


      validationForm.addEventListener('submit', (e) => {
        let messages = []
        let messages1 = []
        let messages2 = []
   
        if (name.value === '' || name.value == null) {
            messages.push('Name is required')
        }
        if (name.value.length<3) {
            messages.push('Name should be more than 3')   
        }
        if (name.value.length>10) {
            messages.push('Name should be less than 10') 
            
          }
        var x = email.value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
            messages1.push("Enter valid e-mail address")
        }
        if(area.value == "" || area.value== null) {
            messages2.push("empty textarea")
         }
        if(area.value.length > 20  ){
            messages2.push("more 20")
          }

          if (messages.length > 0) {
         e.preventDefault()
         errname.innerText = messages.join('')
         erremail.innerText = messages1.join('')
         errarea.innerText = messages2.join('')
  }
})




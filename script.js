
    //  Name Validation
    var firstName= document.getElementById("firstName");
    
    var firstNameValidation=function(){
    
       firstNameValue=firstName.value.trim(); 
       validFirstName=/^[A-Za-z]+$/;
       firstNameErr=document.getElementById('first-name-err');
    
       if(firstNameValue=="")
       {
        firstNameErr.innerHTML=" Name is required";
    
       }else if(!validFirstName.test(firstNameValue)){
        firstNameErr.innerHTML=" Name must be only string without white spaces";

       }else if(firstNameValue.length > 10 || firstNameValue.length < 3 ){
         firstNameErr.innerHTML=" Name must be string > 3 &&< 10";
       }else{
         firstNameErr.innerHTML="";
         return true;
        
       }
    }
    
    firstName.oninput=function(){
       
       firstNameValidation();
    }
    

     // Email Address Validation
     var emailAddress= document.getElementById("emailAddress");;
     var emailAddressValidation= function(){
    
      emailAddressValue=emailAddress.value.trim(); 
       validEmailAddress=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       emailAddressErr=document.getElementById('email-err');
    
       if(emailAddressValue=="")
       {
        emailAddressErr.innerHTML="Email Address is required";
    
       }else if(!validEmailAddress.test(emailAddressValue)){
         emailAddressErr.innerHTML="Email Address should be correct";
       }else{
         emailAddressErr.innerHTML="";
         return true;
       }
    
     }
    
    emailAddress.oninput=function(){
    
       emailAddressValidation();
    }
         // age Validation
         var age = document.getElementById("age");
         var ageValidation = function(){
    
            ageValue=age.value.trim(); 
            validage=/^[0-9]*$/;
            ageErr=document.getElementById('age-err');
         
            if(ageValue=="")
            {
                ageErr.innerHTML="age is required";
         
            }else if(ageValue < 18 ){
    
                ageErr.innerHTML="age > 18";
             }else ageErr.innerHTML="";
            return true;
          }

          age.oninput=function(){
    
            ageValidation();
         }


     // Mobile Number Validation
     var mobileNumber= document.getElementById("mobileNumber");
    
     var mobileNumberValidation = function(){
    
       mobileNumberValue=mobileNumber.value.trim(); 
       validMobileNumber=/^[0-9]*$/;
       mobileNumberErr=document.getElementById('mobile-number-err');
    
       if(mobileNumberValue=="")
       {
        mobileNumberErr.innerHTML="Mobile Number is required";
    
       }else if(!validMobileNumber.test(mobileNumberValue)){
         mobileNumberErr.innerHTML="Mobile Number must be a number";
       }else if(mobileNumberValue.length!=9){
    
          mobileNumberErr.innerHTML="Mobile Number must have 9 digits";
       }else if(!mobileNumberValue.startsWith('777')){
    
        mobileNumberErr.innerHTML="Mobile Number must start with 777";
     }
       else{
         mobileNumberErr.innerHTML="";
         return true;
       }
    
     }
    mobileNumber.oninput=function(){
    
       mobileNumberValidation();
    }
    
    
    // Password Validation
    var password= document.getElementById("password");;
    
    var passwordValidation = function(){
    
      passwordValue=password.value.trim(); 
       validPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
       
       passwordErr=document.getElementById('password-err');
    
       if(passwordValue=="")
       {
        passwordErr.innerHTML="Password is required";
       }else if(!validPassword.test(passwordValue)){
         passwordErr.innerHTML="Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters";
       }
       else{
         passwordErr.innerHTML="";
         return true;
       }
    }
    
    password.oninput=function(){
    
       passwordValidation();
    
     confirmPasswordValidation();
       
    }
    
    // Confirm Password Validation
    var confirmPassword= document.getElementById("confirmPassword");;
    
    var confirmPasswordValidation=function(){
       confirmPasswordValue=confirmPassword.value.trim(); 
       
       confirmPasswordErr=document.getElementById('confirm-password-err');
       if(confirmPasswordValue==""){
           confirmPasswordErr.innerHTML="Confirm Password is required";
       }
    
      else if(confirmPasswordValue!=password.value){
         confirmPasswordErr.innerHTML="Confirm Password does not match";
       }
       else{
         confirmPasswordErr.innerHTML="";
         return true;
       }
    }
    
    confirmPassword.oninput=function(){
    
     confirmPasswordValidation();
       
    }
	    // text area vailidtion 

    var area= document.getElementById("area");
    
    var areaValidation=function(){
    
       areaValue=area.value.trim(); 
       validarea=/^[A-Za-z]+$/;
       areaErr=document.getElementById('area-err');
    
       if(areaValue=="")
       {
        areaErr.innerHTML=" messege is required";

       }else if( areaValue.length < 20 ){
         areaErr.innerHTML=" massege must be  string >20 ";
       }else{
         areaErr.innerHTML="";
         return true;
        
       }
    }
    
    area.oninput=function(){
       
        areaValidation();
    }

    // url vailidtion 

    var url = document.getElementById("url");
    
    var urlValidation=function(){
    
       urlValue=url.value.trim();

     var validURL = function (str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
      } 
       

       urlErr=document.getElementById('url-err');

       if(urlValue=="" )
       {
        urlErr.innerHTML=" url is required";

       }else if ( !validURL ){
        urlErr.innerHTML=" url False";
       }
       
       else{
         urlErr.innerHTML="";
         return true;
        
       }
    }
    
    url.oninput=function(){
       
        urlValidation();
    }
     
    
    // validation on submit
    
    
    document.getElementById("validationForm").onsubmit=function(e){
    
      
      firstNameValidation();
      areaValidation();
      ageValidation();
      urlValidation();
      emailAddressValidation();
      mobileNumberValidation();
      passwordValidation();
      confirmPasswordValidation();
    
      if(firstNameValidation()==true && 
      areaValidation()==true &&
      urlValidation()==true &&
      ageValidation()==true &&
        lastNameValidation()==true && 
        emailAddressValidation() == true && 
        mobileNumberValidation()==true && 
        passwordValidation()==true && 
        confirmPasswordValidation()==true){
        return true;
      }else{
        return false;
      }
    }
    
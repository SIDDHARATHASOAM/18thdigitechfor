

    function validateForm() {

        var x = document.getElementById("usernumber").value;

        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if ((x.match(phoneno))) {
            
        }
        else {
            alert("Please Enter correct number!")
            return false;
        }

        var ps = document.getElementById("password").value;
        var cps = document.getElementById("confirmpassword").value;
        //  jquery validation for checkbox

        if((document.querySelector('#vehicle1:checked') == null ) && ((document.querySelector('#vehicle2:checked') ==null ) && ( document.querySelector('#vehicle3:checked') ==null)) ){
        
            alert("hellooooooo what are you doing...");
            return false;
        }
        
        else{
           
            alert("keep goingggg");
        
        }

        if ((ps == cps)) {
            alert("Thanks for your Details Your form is submitted.")
            return true;
        }
        else {
            alert("Please Enter same passwpord");
            return false;
        }



        // this section is for validation o f checkbox.

       

    }

function validate(){
    if(document.myForm.StudentID.value=="" || isNaN(
        document.myForm.StudentID.value) || 
        document.myForm.StudentID.value.length != 6){

        document.getElementById("IDErr").innerHTML="Student ID must be 6 digit numeric only";
        document.myForm.StudentID.focus();
        return false;
    }

    if(document.myForm.Name.value==""){
        document.getElementById("nameErr").innerHTML="Please enter your Full Name";
        document.myForm.Name.focus();
        return false;
    }

    if(document.myForm.gender.value==""){
        document.getElementById("genderErr").innerHTML="Please select your Gender";
        document.myForm.Name.focus();
        return false;
    }
    
    if(document.myForm.Address.value == ""){
        document.getElementById("AddErr").innerHTML="Please enter your complete Address";
        document.myForm.Address.focus();
        return false;
    }

    if( document.myForm.Zip.value == "" || isNaN(
        document.myForm.Zip.value ) ||
         document.myForm.Zip.value.length != 4 ) {
         
         alert( "Please provide your Zip Code(MUST BE 4 DIGIT)." );
         document.myForm.Zip.focus() ;
         return false;
         }        

    if(document.myForm.Email.value==""){
        document.getElementById("emailErr").innerHTML="Please enter your E-mail";
        document.myForm.Email.focus();
        return false;
    }

    else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.myForm.Email.value) == false){
            alert("Please enter a valid email address");
            document.myForm.Email.focus();
            return false;
        }
    }

    if(document.myForm.SchoolYr.value==""){
        document.getElementById("SYErr").innerHTML="Please enter your School Year";
        document.myForm.SchoolYr.focus();
        return false;
    }

    if(document.myForm.Semester.value==""){
        document.getElementById("SemErr").innerHTML="Please enter Semester";
        document.myForm.Semester.focus();
        return false;
    }

    if(document.myForm.Course.value==""){
        document.getElementById("CourseErr").innerHTML="Please provide your Course";
        document.myForm.Course.focus();
        return false;
    }

    if(document.myForm.YrLevel.value==""){
        document.getElementById("LevelErr").innerHTML="Please provide your Year Level ";
        document.myForm.YrLevel.focus();
        return false;
    }

    if(document.myForm.Section.value =="-1"){
        alert("Please select your Section");
        return false;
    }

    if(document.myForm.Units.value==""){
        document.getElementById("UnitsErr").innerHTML="Please provide your Total Units ";
        document.myForm.Units.focus();
        return false;
    }
    else{
        var regex = /^[0-9]+$/;
        if(regex.test(document.myForm.Units.value) == false){
            alert("Please enter a numeric value only");
            document.myForm.Units.focus();
            return false;
        }
    }
}
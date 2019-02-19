//get rerefences
var formReference = document.querySelector("#myForm");
var txtFirstName = document.querySelector("#firstName");
var txtLastName = document.querySelector("#lastName");
var txtAddress = document.querySelector("#address");
var txtCity = document.querySelector("#city");
var txtState = document.querySelector("#state");
var txtZip = document.querySelector("#zip");
var txtPhone = document.querySelector("#phone");
var txtEmail = document.querySelector("#email");
var txtFeedback = document.querySelector('#txtFeedback');
var errorDivs = document.getElementsByClassName("error");

//listen for form submission
formReference.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {

    var isValid = true;


    //clear out feedback div
    txtFeedback.innerHTML = "";

    //clear out error divs
    for (var i = 0; i < errorDivs.length; i++) {
        errorDivs[i].innerHTML = "";
    }

    //checking for validity.
    //of course, there should be *something* in the textfield
    //ALSO
    //it should not be simply a number.
    //to check for a number use.. isNaN (returns 'false' if the argument is numerical)
    if (txtFirstName.value == "" || !isNaN(txtFirstName.value)) {
        //something is wrong.
        isValid = false;
        //txtFeedback.innerHTML += "<p>Please enter a valid first name.</p>";
        txtFirstName.nextElementSibling.innerHTML = "Please enter a valid first name.";
    }
    if (txtLastName.value == "" || !isNaN(txtLastName.value)) {
        isValid = false;
        //txtFeedback.innerHTML += "<p>Please enter a valid last name.</p>";
        txtLastName.nextElementSibling.innerHTML = "Please enter a valid last name.";
    }

    if (txtAddress.value == "") {
        isValid = false;
        //txtFeedback.innerHTML += "<p>Please enter a valid address.</p>";
        txtAddress.nextElementSibling.innerHTML = "Please enter a valid address.";
    }
    if (txtCity.value == "") {
        isValid = false;
        txtCity.nextElementSibling.innerHTML = "Please enter valid City.";
    }
    if (txtState.value == "") {
        isValid = false;
        txtState.nextElementSibling.innerHTML = "Please enter valid US State Name.";
    }

    //check zip
    //ANY ..  .value is just a string.
    if (txtZip.value == "" || isNaN(txtZip.value) || txtZip.value.length != 5) {
        isValid = false;
        //txtFeedback.innerHTML += "<p>Please enter a valid 5-digit zip code.</p>";
        txtZip.nextElementSibling.innerHTML = "Please enter a valid 5-digit zip code.";
    }

    if (txtPhone.value == "" || !isNaN(txtPhone.value) || txtPhone.value.length != 12) {
        isValid = false;
        //txtFeedback.innerHTML += "<p>Please enter a valid 10 digit phone number, 123-456-7890.</p>";
        txtPhone.nextElementSibling.innerHTML = "Please enter a valid 10 digit phone number, 123-456-7890.";
    }
    //PHONE.
    //you will need to strip out 'bad' characters... perhaps via repeated use of string.replace?
    //bad characters are: - ( ) . " "
    //should get to something that is JUST a numerical string with ten digits.
    //then you can check
    if (txtEmail.value == "" || txtEmail.indexOf("@") != 1 || txtEmail.indexOf(".") != 1) {
        isValid = false;
        //txtFeedback.innerHTML += "<p>Please enter a valid e-mail address.</p>";
        txtEmail.nextElementSibling.innerHTML = "Please enter a valid e-mail address.";

    }

    //EMAIL
    //gotta be there. Gotta be a string.
    //has to have an @, and a . at some point after the the @ sign.
    //Use this via string.indexOf
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
    // google "javascript string indexOf"

    //stop the event from doing whatever it does normally
    if (!isValid) {
        event.preventDefault();
    }
    if (isValid) {
        var str = txtPhone.replace("-", "");
        return true;
    }
}
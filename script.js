let id = 2;
function addRow() {
  let new_row = document.createElement("new_row");

  new_row.innerHTML = `<div class="row_border row mt-4">
    <div class="col-lg-1 col-md-4 col-sm-6">
    <label class="hideLabel"><h5>Enter Degree Name</h5></label>
        <select id="sDegree${id}" name="Degree" class="Degree form-select">
            <option value="" hidden>Click</option>
            <option value="School">School</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
          </select>
          <div id="sDegreeError${id}" class="text-danger"></div>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
    <label class="hideLabel"><h5>Enter Institute Name</h5></label>
    <input type="text" name="InstituteName[]" class="instname form-control" id="instName${id}">
    <div id="InstituteError${id}" class="text-danger"></div>
    </div>
    <div class="col-lg-2 col-md-4 col-sm-6">
    <label class="hideLabel"><h5>Select Starting month</h5></label>
    <input type="month" name="StartYear[]" id="startMonth${id}" class="startYear form-control">
    <div id="startMonthError${id}" class="text-danger"></div>
    </div>
    <div class="col-lg-2 col-md-4 col-sm-6">
    <label class="hideLabel"><h5>Select End month</h5></label>
    <input type="month" name="PassOutYear[]" id="endMonth${id}" class="endYear form-control">
    <div id="endMonthError${id}" class="text-danger"></div>
    </div>
    <div class="col-lg-1 col-md-4 col-sm-6">
    <label class="hideLabel"><h5>Enter Backlog</h5></label>
    <input type="number" name="Backlog[]" placeholder="If any" class="backlog form-control" id="backlog${id}">
    <div id="BacklogError${id}" class="text-danger"></div>
    </div>
    <div class="col-lg-1 col-md-4 col-sm-6">
    <label class="hideLabel"><h5>Percentage</h5></label>
    <input type="number" name="TotalPercentage" placeholder=" %" class="marks form-control" id="TotalPercentage${id}">
    <div id="TotalPercentageError${id}" class="text-danger"></div>
    </div>
    <div class="col-lg-2 col-md-4 col-sm-6 delete-Button"><button class="custom-btn btn-7 form-control" onclick="deleteRow(this)"><span>Delete</span></button></div>
</div>`;
  id++;
  document.getElementById("main_row").appendChild(new_row);
}
function deleteRow(btn) {
  const row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function getValue() {
  // Form Validation
  var regName = /^[a-zA-Z\s]*$/
  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  var check = true;


  // First Name Validation
  var name = document.getElementById("fName").value;
  if (name == "" || !regName.test(name)) {
    document.getElementById("FirstNameError").innerHTML =
      "** Invalid First name";
    check = false;
  } else {
    document.getElementById("FirstNameError").innerHTML = "";
  }

  // Last Name Validation
  var lname = document.getElementById("lName").value;
  if (lname == "" || !regName.test(lname)) {
    document.getElementById("LastNameError").innerHTML = "** Invalid Last name";
    check = false;
  } else {
    document.getElementById("LastNameError").innerHTML = "";
  }

  // Date of Birth Validation
  var dob = document.getElementById("dob").value;
  if (dob == "") {
    document.getElementById("DobError").innerHTML = "** Please select DOB";
    check = false;
  } else {
    document.getElementById("DobError").innerHTML = "";
  }

  // E-mail validation
  var email = document.getElementById("email").value;
  if (email == "" || !regEmail.test(email)) {
    document.getElementById("EmailError").innerHTML =
      "** Please enter correct email";
    check = false;
  } else {
    document.getElementById("EmailError").innerHTML = "";
  }
  // Address validation
  var address = document.getElementById("address").value;
  if (address == "") {
    document.getElementById("AddressError").innerHTML =
      "** Please enter address";
    check = false;
  } else {
    document.getElementById("AddressError").innerHTML = "";
  }
  //Static and  Dynamic Row validation--------------------------------------------------------------------------------------
  for (var j = 0; j < id; j++) {
    if (document.getElementById(`sDegree${j}`)) {
    const degreeVar = document.getElementById(`sDegree${j}`).value;
    const InstVar = document.getElementById(`instName${j}`).value;
    const startMonth = document.getElementById(`startMonth${j}`).value;
    const EndMonth = document.getElementById(`endMonth${j}`).value;
    const BacklogVar = document.getElementById(`backlog${j}`).value;
    const TotalPercentagevar = document.getElementById(
      `TotalPercentage${j}`
    ).value;
    
      if (degreeVar == "") {
        document.getElementById(`sDegreeError${j}`).innerHTML = "** Required";
        check = false;
      } else {
        document.getElementById(`sDegreeError${j}`).innerHTML = "";
      }

      if (InstVar == "") {
        document.getElementById(`InstituteError${j}`).innerHTML =
          "** Institute name required";
        check = false;
      } else {
        document.getElementById(`InstituteError${j}`).innerHTML = "";
      }
      if (startMonth == "") {
        document.getElementById(`startMonthError${j}`).innerHTML =
          "** Start Year required";
        check = false;
      } else {
        document.getElementById(`startMonthError${j}`).innerHTML = "";
      }

      if (EndMonth == "") {
        document.getElementById(`endMonthError${j}`).innerHTML =
          "** PassOut Year required";
        check = false;
      } else {
        document.getElementById(`endMonthError${j}`).innerHTML = "";
      }

      if (BacklogVar == "") {
        document.getElementById(`BacklogError${j}`).innerHTML =
          "** Enter backlog";
        check = false;
      } else if (BacklogVar > 9 || BacklogVar < 0) {
        document.getElementById(`BacklogError${j}`).innerHTML = "** Invalid";
        check = false;
      } else {
        document.getElementById(`BacklogError${j}`).innerHTML = "";
      }
      if (TotalPercentagevar == "") {
        document.getElementById(`TotalPercentageError${j}`).innerHTML =
          "** Total Percentage required";
        check = false;
      } else if (TotalPercentagevar > 100 || TotalPercentagevar < 0) {
        document.getElementById(`TotalPercentageError${j}`).innerHTML =
          "** Invalid Percentage";
        check = false;
      } else {
        document.getElementById(`TotalPercentageError${j}`).innerHTML = "";
      }
    }
  }

  if (check == true) {
    // -----------------------------------------------------------------------------------------------
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    var Degree = document.getElementsByClassName("Degree");
    var InstituteName = document.getElementsByClassName("instname");
    var StartYear = document.getElementsByClassName("startYear");
    var EndYear = document.getElementsByClassName("endYear");
    var Backlog = document.getElementsByClassName("backlog");
    var Percentage = document.getElementsByClassName("marks");

    var obj = {};
    obj.FirstName = fName;
    obj.LastName = lName;
    obj.Email = email;
    obj.Date = dob;
    obj.Address = address;

    Educations = [];
    for (let i = 0; i < InstituteName.length; i++) {
      let InputData = {
        Degree: Degree[i].value,
        InstituteName: InstituteName[i].value,
        StartYear: StartYear[i].value,
        EndYear: EndYear[i].value,
        Backlog: Backlog[i].value,
        Total_percentage: Percentage[i].value,
      };
      Educations.push(InputData);
    }
    obj.EducationDetails = Educations;
    console.log(obj);
    alert("Form Submitted Successfully")
  }
}

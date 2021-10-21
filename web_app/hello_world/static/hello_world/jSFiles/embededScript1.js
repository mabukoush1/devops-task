// Events Tester.(Use the alert statement below to debug-test-run lines and progress of codes in your programmes.)
// return document.getEletmentsByClassName("remove-button").innerHTML = alert('Present Sir!!'); 
 

// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
  function mouseClick1() {
    var input1 = document.getElementById("checkbox1");
    if (input1.checked == true) {
      document.getElementById("final-submit").style.background = "forestgreen";
      document.getElementById("final-submit").style.color = "white";
    }
    else {
      document.getElementById("final-submit").style.background = "";
      document.getElementById("final-submit").style.color = "";
    }
  }



  function mouseClick2(){
    var input2 = document.getElementById("checkbox2");
    if (input2.checked == true) {
      document.getElementById("update").style.background = "forestgreen";
      document.getElementById("update").style.color = "white";
      document.getElementById("delete").style.background = "red";
      document.getElementById("delete").style.color = "white";
    }
    else {
      document.getElementById("update").style.background = "";
      document.getElementById("update").style.color = "";
      document.getElementById("delete").style.background = "";
      document.getElementById("delete").style.color = "";
    }
  }



  // // Use this function for final edit submit button
  // function mouseClick2b() {
  //   var input1 = document.getElementById("checkbox1b");
  //   if (input1.checked == true) {
  //     document.getElementById("modify1-submit").style.background = "forestgreen";
  //     document.getElementById("modify1-submit").style.color = "white";
  //   }
  //   else {
  //     document.getElementById("modify1-submit").style.background = "";
  //     document.getElementById("modify1-submit").style.color = "";
  //   }
  // }




  function mouseClick3(){
    var input3 = document.getElementById("checkbox3");
    if (input3.checked == true) {
      document.getElementById("proceedToViewProducts").style.background = "forestgreen";
      document.getElementById("proceedToViewProducts").style.color = "white";
    }
    else {
      document.getElementById("proceedToViewProducts").style.background = "";
      document.getElementById("proceedToViewProducts").style.color = "";
    }
  }




// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// The statements and functions below is used to enable multiple file uploads and 
// remove some of the default appearance of input elements with file="type".
	var selDiv = "";
	document.addEventListener("DOMContentLoaded", init, false);
	
	function init() {
		document.querySelector('#files').addEventListener('change', handleFileSelect, false);
		selDiv = document.querySelector("#selectedFiles");
	}
	function handleFileSelect(e) {
		var files = e.target.files;
		var filesArr = Array.prototype.slice.call(files);

		filesArr.forEach(function(f) {			
			if(!f.type.match("image.*")) {
				return;
			}			
			var reader = new FileReader(); //Instance of file Reader.
			reader.onload = function (e) {
				var para = document.createElement("span");
				para.innerHTML = f.name + returnFileSize(f.size) + '.' + "<span>&nbsp;</span>" + "<span class='remove-button'>&#9746;</span>" + "<br/>";
				selDiv.appendChild(para);
			};
			reader.readAsDataURL(f);
		});
		
	}

// The returnFileSize() function below takes a number (of bytes, taken from the current file's size property)
// and turns it into a nicely formatted size in bytes/KB/MB.
function returnFileSize(number) {
  if(number < 1024) {
    return '(' + number + 'bytes' + ')';
  } else if(number >= 1024 && number < 1048576) {
    return '(' + (number/1024).toFixed(1) + 'KB' + ')';
  } else if(number >= 1048576) {
    return '(' + (number/1048576).toFixed(1) + 'MB' + ')';
  }
}

// Remove any of the images that are selected with a remove icon.
var selDiv1 = document.querySelector("#selectedFiles");
selDiv1.addEventListener('click', removeImage, false);
function removeImage(e) {
	if(e.target.classList.contains('remove-button')) {
		var delParent = e.target.parentElement;
		selDiv1.removeChild(delParent);
	}
}














// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// Script to make the user select a valid region other than the default or focused "Select province" Option
var validSelect = document.querySelector("#mySelect");
document.addEventListener('mouseover', ()=> {
  if(validSelect.value == 0) {
    document.getElementById('final-submit').disabled = true;
    document.getElementById('valid-region').removeAttribute('hidden');
  }
  if(validSelect.value != 0) {
    document.getElementById('final-submit').disabled = false;
    document.getElementById('valid-region').setAttribute('hidden', '');
  }

}, false);



// For mobile screen touch responsiveness
var validSelect2 = document.querySelector("#mySelect");
document.addEventListener('change', ()=> {
  if(validSelect2.value == 0) {
    document.getElementById('final-submit').disabled = true;
    document.getElementById('valid-region').removeAttribute('hidden');
  }
  if(validSelect2.value != 0) {
    document.getElementById('final-submit').disabled = false;
    document.getElementById('valid-region').setAttribute('hidden', '');
  }

}, false);
























// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// // Page redirection countdown timer.

// var onee = document.querySelector(".two")
// onee.addEventListener('mouseover', (e) => {
//   var countDownvar = document.getElementsByClassName("one");
//   // timeleft = 16;
//   // timeleft -= 1;
//   // if(timeleft <= 0) clearInterval(setInterval(()=> countDownvar.innerHTML = timeleft + "seconds..."), 1000);
//   // countDownvar.innerHTML = alert('Hey!!')
//   countDownvar.innerHTML = alert('Present Sir!!');
// }, false);










// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************








// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************






// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************

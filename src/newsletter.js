/* Newsletter signup validation logic */

// Global vars
var editorialConsentId = "interstitial-newsletter-consent-editorial";

// Function to set date/time for hidden fields for email consent
function setConsentTime(id, timestamp) {
  var hiddenFieldId = id + "-timestamp";
  var hiddenField = document.getElementById(hiddenFieldId);
  hiddenField.value = timestamp;
}

// Function to add leading zeros where needed in date/time
function addLeadingZero(num) {
  var ret = num.toString();
  ret = ret.length == 1 ? "0" + ret : ret;
  return ret;
}

// Function to get current date in UTC
function getDate() {
  var currTime = new Date().getTime();

  var now = new Date(currTime);

  var hour = addLeadingZero(now.getUTCHours().toString());
  var min = addLeadingZero(now.getUTCMinutes().toString());
  var sec = addLeadingZero(now.getUTCSeconds().toString());
  var month = addLeadingZero((now.getUTCMonth() + 1).toString());
  var day = addLeadingZero(now.getUTCDate().toString());

  var date =
    now.getUTCFullYear().toString() +
    "-" +
    month +
    "-" +
    day +
    " " +
    hour +
    ":" +
    min +
    ":" +
    sec;

  return date;
}

// Check if country has been selected
// function checkCountrySelection() {
//   if (countryList.value.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

function checkCountrySelection(countryList) {
  if (countryList.value && countryList.value.length) {
    return true;
  } else {
    return false;
  }
}

// Validate email address input
function validateEmail(email) {
  var re = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+\.*/;
  return re.test(String(email).toLowerCase());
}

// Validate requires fields -- Email address and Country. Enable/disable submit button accordingly
export function validateReqFields(
  editorialConsent,
  countryList,
  emailInput,
  submitBtn
) {
  if (!checkCountrySelection(countryList) || !validateEmail(emailInput.value)) {
    submitBtn.setAttribute("disabled", true);
  } else {
    submitBtn.removeAttribute("disabled");
    // Set timestamp for editorial consent
    setConsentTime(editorialConsentId, getDate());
  }
}

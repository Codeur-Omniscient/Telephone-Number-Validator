document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementById("user-input");
  const checkBtn = document.getElementById("check-btn");
  const clearBtn = document.getElementById("clear-btn");
  const resultsDiv = document.getElementById("results-div");

  // Function to validate US phone number
  function validatePhoneNumber(phoneNumber) {
    // Remove all non-alphanumeric characters for easier checking
    const cleanNumber = phoneNumber.replace(/\s+/g, " ").trim();

    // Regex to validate US phone numbers in various formats
    const countryCode = "^(1\\s?)?";
    const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
    const spacesDashes = "[\\s\\-]?";
    const phoneNumberReg = "[0-9]{3}[\\s\\-]?[0-9]{4}$";
    const phoneRegex = new RegExp(
      `${countryCode}${areaCode}${spacesDashes}${phoneNumberReg}`
    );

    return phoneRegex.test(cleanNumber);
  }

  // Event listener for check button
  checkBtn.addEventListener("click", () => {
    const phoneNumber = userInput.value.trim();

    if (!phoneNumber) {
      alert("Please provide a phone number");
      return;
    }

    const isValid = validatePhoneNumber(phoneNumber);

    if (isValid) {
      resultsDiv.innerHTML = `Valid US number: ${phoneNumber}`;
    } else {
      resultsDiv.innerHTML = `Invalid US number: ${phoneNumber}`;
    }
  });

  // Event listener for clear button
  clearBtn.addEventListener("click", () => {
    resultsDiv.innerHTML = "";
    userInput.value = "";
  });

  // Add enter key support for the input field
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      checkBtn.click();
    }
  });
});

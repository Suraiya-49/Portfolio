jQuery(document).ready(function(){



  jQuery(".bars").click(function(){
    jQuery(this).find(jQuery(".fa-solid")).toggleClass('fa-xmark');
  });


  jQuery(".bars").click(function(){
  jQuery(".responsive").toggle(1000);
  return false
  })




});




document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const toast = document.getElementById("toast");
  const submitBtn = document.getElementById("submitBtn");

  const showToast = (message, isError = false) => {
    toast.textContent = message;
    toast.style.backgroundColor = isError ? "#f44336" : "#4caf50";
    toast.className = "toast show";
    setTimeout(() => (toast.className = "toast"), 3000);
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        showToast("Message submitted successfully!");
        form.reset();
      } else {
        showToast(result.error || "Failed to submit the form. Please try again.", true);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      showToast("An error occurred while submitting the form.", true);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Now";
    }
  });
});



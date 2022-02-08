frappe.web_form.after_load = () => {
  const lead = `
  <div class="container">
     <div class="leadcontainer border p-4">
       <div class="logolead text-center">
         <img src="https://eas.test.pccr.edu.ph/files/new%20logo%20initial%202%20(1).png">
          <p>Select what student type are you applying</p>
       </div>
      
       <div class="cursor-pointer text-left p-2 border-primary2 my-2" id="freshmen-link">
         <h4 class="font-weight-bold mb-0">Freshman</h4>
         <p class="text12">An incoming student in either Grade 7 (Junior High School), Grade 11 (Senior High School), Collegiate Programs, and Graduate Studies.</p>
       </div>
       <div class="cursor-pointer text-left p-2 border-primary2 my-2" id="transferee-link">
         <h4 class="font-weight-bold mb-0">Transferee</h4>
         <p class="text12">An incoming student in either Grade 8 to Grade 10, Grade 12, and Collegiate Programs.</p>
       </div>
       <div class="cursor-pointer text-left p-2 border-primary2 my-2" id="second-courser-link">
         <h4 class="font-weight-bold mb-0">Second Coursers</h4>
         <p class="text12">An incoming student that already finished a bachelor’s program.</p>
       </div>
     </div>

   </div>
   <div class="container text-center">
    <p class="link py-3 text12 cursor-pointer"> Already have Reference Number? Click here</p>
   </div>
  `
  
  $('Body').append(lead); 
  const url_base = window.location.origin 
  $('#freshmen-link').click( () => { 
    sessionStorage.setItem("acad", "Freshman"); 
    // location.replace("/lead-app/lead-admsn"); 
  }) 
  $('#transferee-link').click( () => { 
    sessionStorage.setItem("acad", "Transferee"); 
    location.replace("/lead-app/lead-admsn"); 
  }) 
  $('#second-courser-link').click( () => { 
    sessionStorage.setItem("acad", "Second Courser"); 
    location.replace("/lead-app/lead-admsn"); 
  }) 
  $('.link').click( () => {

  })
  $(".navbar-brand").css("pointer-events", "none"); 
}



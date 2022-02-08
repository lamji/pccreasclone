// frappe.ready(function() {
	// bind events here

    //Get Date
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    const month = months[d.getMonth()];
    const day = d.getDate()
    const due = d.getDate() + 10
    const year = d.getFullYear()
    const datenow = month + " " + day + ", " + year
    const dueDate = month + " " + due + ", " + year

    const date = new Date(01-31-2022)
    const d1 = 2022-1-31
    const d2 = date.toString().split("-").pop()
    const month2 = date.toLocaleString('default', { month: 'long' });
    console.log(month2, d2, d1);
	  const body_content = `
        <div class="container mb-5 text12">
        <div class="container tab mb-5 text12">
          <h5 class="my-5">Class Enlistment</h5>
          <div class="row d-flex justify-content-center">
            <div class="col text-center tab-line">
              <img src="https://eas.test.pccr.edu.ph/files/Completed.png" class="icon-tab">
              <p class="tab_label">Terms and Condition</p>
            </div>
            <div class="col text-center tab-line">
              <img src="https://eas.test.pccr.edu.ph/files/Completed.png" class="icon-tab">
              <p class="tab_label">Admission Requirements</p>
            </div>
            <div class="col text-center tab-line">
              <img src="https://eas.test.pccr.edu.ph/files/Completed.png" class="icon-tab">
              <p class="tab_label">Enlistment</p>
            </div>
            <div class="col text-center tab-line-active">
              <img src="https://eas.test.pccr.edu.ph/files/Active%20-%20Billing.png" class="icon-tab">
              <p class="tab_label">Billing</p>
            </div>
            <div class="col text-center tab-line">
              <img src="https://eas.test.pccr.edu.ph/files/Inactive%20-%20Confirmation.png" class="icon-tab">
              <p class="tab_label">Confirmation</p>
            </div>
            
          </div>
        </div>

        <div class=" content_margin_top">
          <div class="row">
          <div class=" col-md-6 left-pannel">
              <div class="d-flex justify-content-left align-items-center">
                  <img class="pccr-logo-billing" src="https://lms.staging.pccr.edu.ph/pluginfile.php/1/theme_space/customlogosidebar/1627014959/new%20logo%20initial%202.png" />
                  <div class="w-100 text-center">
                      <h4 class="font-weight-bold mb-0">Philippine College of Criminology</h4>
                      <p class="mb-0 text12">641 Sales St, Quiapo, Manila, 1001 Metro Manila</p>
                  </div>
              </div>

              <div class="row">
                  <div class="col-6">
                      <h5 class="font-weight-bold mb-0">Statement of Account</h5>
                      <p class="text12">#2384928408239804823</p>
                      <p class="text12 mb-1 st_name">Student Name: <span class="font-weight-bold "> loading . . . . </span></p>
                  </div>
                  <div class="col-6 date_now">
                      
                  </div>
              </div>

              <div class="row text12 program_acad_year"> 
                  
              </div>
              <hr class="bold-line">
              <div class="row text12">
                  <div class="col-12">
                      <h5 class="">Account Summary</h5>
                  </div>
                  <div class="col-6 due_date">
                      
                  </div>
                  <div class="col-6 amount_to_pay">
                      
                  </div>
              </div>
              <hr class="bold-line">
              <div class="row text12">
                  <div class="col-12">
                      <h5 class="">Tuition Fee Table</h5>
                  </div>
                  <div class="d-flex table-head border p-2">
                      <div class="w-25">
                          <p class="mb-0">Code</p>
                      </div>
                      <div class="w-50">
                          <p class="mb-0">Description</p>
                      </div>
                      <div class="w-25">
                          <p class="mb-0">Charges</p>
                      </div>
                  </div>
                  <div class="d-flex table-body p-2 border">
                      <div class="w-25">
                          <p class="mb-0">01-2021-001</p>
                      </div>

                      <div class="w-75 ">
                          <div class="row align-items-center mb-2 fees_discription">
                              
                          </div>
                      </div>

                  </div>
                  <div class="d-flex table-total border">
                      <div class="w-75 text12">
                          <p class=" mb-0 p-2 text-center">TOTAL:</h>
                      </div>
                      <div class="w-25 text12 total">
                          
                      </div>
                  </div>
                  <div class="col-12 my-3">
                      <div class=" mt-3">
                        <h5 class="font-weight-bold">General Disclosure</h5>
                        <p>
                          Thank you for completing your online enrollment. You have 24 hours to finalize your enrollment by paying the down payment of P2,000.00 and or the full amount as reflected on the Statement of Account. 
                        </p>
                        <p>
                          PCCR reserves the right to change the terms, conditions, and notices under official communication platforms including but not limited to the charges associated with enrollment and other fees of the school.  Please be aware that you must complete the physical submission of all enrollment requirements based on the schedule of the Registrar Department.  Non-compliance with the enrollment requirements might cause cancellation or revocation of your enrollment.
                        </p>
                        <p>
                          Please be reminded that enrollment is on a first come first serve basis as finalized by your payment. PCCR may change schedules and terms with a high degree of consideration on availability of facilities, teachers, and condition of students Once payment is received and acknowledged by the Finance Department you are now officially enrolled as a student of PCCR. This entails that you follow all rules and regulations of PCCR as stated but not limited to the student manual. 
                        </p>
                        <h5 class="font-weight-bold">Refunds and Charges</h5>
                        <p>
                          There are corresponding fees and other charges if you decide to transfer or withdraw within the 2 weeks after the beginning of classes.  You may transfer or withdraw in writing within the said 2 weeks, however you will be charged twenty-five per cent (25%) of the total amount due for the whole semester during the 1st week after the beginning of classes.  If you choose to withdraw or transfer within the 2nd week after the beginning of classes you will be charged fifty per cent (50%) of the total amount due for the semester. You will be charged for all the school fees in full if you withdraw after the second week of classes. Total amount does not include any deductions made for special or promotional discounts of the school.  All intent, communications and processing of transfer and withdrawals must be received during the office days of the Academic Offices, Finance Office and the Registrar’s Office
                        </p>
                        <h5 class="font-weight-bold">Sample Calendar</h5>
                        <div class="border d-flex">
                           <table>
                            <tr>
                              <th class="text-center border">Beginning of Classes</th>
                              <th class="text-center border" style="width:15%;">Week</th>
                              <th class="text-center border">Inclusive Dates (Office days)</th>
                              <th class="text-center border">Charges and Fees <p class="mb-0">(Total amount due during the semester without discounts and promotions)</p> </th>
                            </tr>
                            <tr>
                              <td class="border text-center">September 5, 2022</td>
                              <td class="border text-center p-0"><p class="mb-0 border-bottom p-1">1</p><p class="mb-0 p-1">2</p><p class="mb-0 border-top p-1">3 & onwards</p></td>
                              <td class="border text-center p-0 w-50">
                                <p class="mb-0 p-1 border-bottom">September 5 – 9, 2022</p>
                                <p class="mb-0  p-1">September 12 – 16, 2022</p>
                                <p class="mb-0 border-top p-1">September 19 and onwards</p>
                              </td>
                               <td class="border text-center p-0">
                                <p class="mb-0 p-1 border-bottom">25%</p>
                                <p class="mb-0  p-1">50%</p>
                                <p class="mb-0 border-top p-1">Full semester fees</p>
                              </td>
                            </tr>
                          </table>
                        </div>
                           <h5 class="mt-4">Consent</h5>
                            <p>
                              From the beginning of your application, you have signified your intent to adhere to policies associated with your admission as a student of PCCR.  Any determination of fraud and/or misrepresentation, the administration of PCCR has the right to cancel or revoke your enrollment with consideration to due process as stated but not limited to the student manual and existing laws of the Republic of the Philippines.
                            </p>
                            <p>
                              For questions and assistance regarding payment, you may contact the Finance Department at..
                            </p>
                            <p>
                              For other inquiries regarding your enrollment, you may contact the Registrar's Office at registrar@pccr.edu.ph or call
                            </p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-md-6 right-pannel">
              <div class="amount-due">
                  <h5 class="font-weight-bold ">Amount Due</h5>
              
              </div>

              <div class="mt-4 ">
                  <h5 class="font-weight-bold">Payments Terms</h5>
                  <div class="d-flex">
                      <div class="custom-border-primary rounded w-40 text12 cursor-pointer full_payment_div d-flex align-items-center" id="fullpayment">
                          <input type="radio"  name="payment" value="fullpayment">
                           <label for="fullpayment" class="p-2 cursor-pointer">Full Payment</label>
                      </div>
                      <div class="custom-border-primary rounded w-40 text12 cursor-pointer inst1_div d-flex align-items-center" id="installment1" >
                          <input type="radio" name="payment" value="installment1">
                         <label for="installment1" class="p-2 cursor-pointer">Installment 1</label>
                      </div>
                  </div>
                  <div class="d-flex mt-1">
                      <div id="installment2" class="custom-border-primary rounded w-40 text12 cursor-pointer inst2_div d-flex align-items-center">
                          <input type="radio" class="cursor-pointer"  name="payment" value="installment2">
                          <label for="installment2" class="p-2 cursor-pointer">Installment 2</label>
                      </div>
                  </div>
                  <div class="notes mt-3">
                  </div>
              </div>

               <div class="mt-4 ">
                  <h5 class="font-weight-bold">Payments Method</h5>
                  <div class="d-flex">
                      <div class="d-flex align-items-center custom-border-primary rounded w-40 text12 gcash_div cursor-pointer" id="gcash">
                          <input type="radio"  name="paymentmethod" class="cursor-pointer" value="gcash">
                          <label for="gcash" class="p-2 cursor-pointer"><img src="https://eas.test.pccr.edu.ph/files/GCash_Horizontal-Full-Blue-Transparent.png" class="mx-2 billing_icon_gcash cursor-pointer">Gcash</label>
                      </div>
                      <div class="d-flex align-items-center  custom-border-primary rounded w-40 text12 grab_div cursor-pointer" id="grab">
                          <input type="radio"  name="paymentmethod" class="cursor-pointer"  value="Grab_Pay">
                          <label for="grab" class="p-2 cursor-pointer"><img src="https://eas.test.pccr.edu.ph/files/akjdlskjadjladlk.png" class="mx-2 cursor-pointer billing_icon grab_icon">Grab Pay</label>
                      </div>
                  </div>
                  <div class="d-flex mt-1">
                      <div class=" d-flex align-items-center custom-border-primary rounded w-40 text12 card_div cursor-pointer" id="card">
                          <input type="radio"  name="paymentmethod" value="card" class="cursor-pointer">
                          <label for="card" class="p-2 cursor-pointer"><img src="https://eas.test.pccr.edu.ph/files/clipart2061111.png" class="mx-2 cursor-pointer billing_icon card_icon">Credit/Debit</label>
                      </div>
                  </div>
              </div>
              <div class="gcash_details mt-5 text12">
                  <h6 class="">Gcash Payment Details:</h6>
                  <form>
                      <div class="row">
                          <div class="col-md-6">
                            <label for="gcashname" class="p-0">Name on Gcash</label>
                            <input type="text" class="text12 mt-1 form-control form-control-sm mb-2" placeholder="Juan Dele Cruz" id="gcashname">
                          </div>
                          <div class="col-md-6">
                              <div class="d-flex">
                                  <div class="w-50">
                                      <label for="gcashnumber" class="p-0">Gcash Number </label>
                                  </div>
                                  <div class="w-25 text-right">
                                      <img src="https://eas.test.pccr.edu.ph/files/icon.png" class="billing_icon_gcash">
                                  </div>
                              </div>
                            <input type="number" class="mt-1 text12 form-control form-control-sm mb-2" placeholder="4343xxxxxxxxxxxx" id="gcashnumber">
                          </div>
                      </div>
                      
                  </form>
              </div>

              <div class="grab_details mt-5 text12">
                  <h6 class="">Grab Payment Details:</h6>
                  <form>
                      <div class="row">
                          <div class="col-md-6">
                            <label for="grabname" class="p-0">Name on Grab</label>
                            <input type="text" class="text12 mt-1 form-control form-control-sm mb-2" placeholder="Juan Dele Cruz" id="grabname">
                          </div>
                          <div class="col-md-6">
                              <div class="d-flex">
                                  <div class="w-50">
                                      <label for="grabnumber" class="p-0">Grab Number </label>
                                  </div>
                                  <div class="w-25 text-right">
                                      <img src="https://www.pinclipart.com/picdir/big/392-3921244_grab-is-one-of-the-most-frequently-used.png" class="card_logo">
                                  </div>
                              </div>
                            <input type="number" class="mt-1 text12 form-control form-control-sm mb-2" placeholder="4343xxxxxxxxxxxx" id="grabnumber">
                          </div>
                      </div>
                      
                  </form>
              </div>

              <div class="card_details mt-5 text12">
                  <h6 class="">Credit/Debit Card Payment Details:</h6>
                  <form>
                      <div class="row">
                          <div class="col-md-6">
                              <div class="d-flex">
                                  <div class="w-50">
                                      <label for="cname" class="p-0">Card Name </label>
                                  </div>
                              </div>
                            <input type="number" class="mt-1 text12 form-control form-control-sm mb-1" placeholder="Juan Dela cruz" id="cname">
                          </div>
                          <div class="col-md-6">
                              <div class="d-flex">
                                  <div class="w-50">
                                      <label for="cnumber" class="p-0">Card Number </label>
                                  </div>
                                  <div class="w-25 text-right">
                                      <img src="https://www.pngkey.com/png/detail/196-1968868_major-credit-card-logos-credit-debit-card-logo.png" class="card_logo">
                                  </div>
                              </div>
                            <input type="number" class="mt-1 text12 form-control form-control-sm mb-2" placeholder="4343xxxxxxxxxxxx" id="cnumber">
                          </div>
                      </div>
                      <div class="row mt-1">
                          <div class="col-md-6">
                            <label for="xdate" class="p-0">Expiration (MM/YY)</label>
                            <input type="month" class="mt-1 text12 form-control form-control-sm mb-1" placeholder="(MM/YY)" id="xdate">
                          </div>
                          <div class="col-md-6">
                            <label for="cvc" class="p-0">cvc</label>
                            <input type="number" class="mt-1 text12 form-control form-control-sm mb-1 text12" placeholder="xxx" id="cvc">
                          </div>
                      </div>
                  </form>
              </div>
              <div class="billing_address text12 mt-3">
                  <h6 class="">Billing Address</h6>
                  <form>
                      <div class="row">
                          <div class="col-md-6">
                            <label for="fname" class="p-0">First Name</label>
                            <input type="text" class="text12 mt-1 form-control form-control-sm mb-0" placeholder="Juan " id="fname">
                          </div>
                          <div class="col-md-6">
                            <label for="lname" class="p-0">Last Name</label>
                            <input type="text" class="mt-1 text12 form-control form-control-sm mb-0" placeholder="Dela Cruz" id="lname">
                          </div>
                      </div>
                      <div class="row mt-2">
                          <div class="col-md-6">
                            <label for="email" class="p-0">Email</label>
                            <input type="email" class="mt-1 text12 form-control form-control-sm mb-1" placeholder="no_reply@gmail.com" id="email">
                          </div>
                          <div class="col-md-6">
                            <label for="pnumber" class="p-0">Phone Number</label>
                            <input type="number" class="mt-1 text12 form-control form-control-sm mb-1 text12" placeholder="+63 xxxxxxxxx" id="pnumber">
                          </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <label for="address1" class="p-0">Line 1</label>
                          <input type="text" class="text12 mt-1 form-control form-control-sm mb-1" placeholder="Line 1" id="address1">
                        </div>
                        <div class="col-md-12">
                          <label for="address2" class="p-0">Line 2</label>
                          <input type="text" class="mt-1 text12 form-control form-control-sm mb-1" placeholder="Line 2" id="address2">
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <label for="city" class="p-0">City</label>
                          <select class="mt-1 form-control form-control-sm text12">
                              <option value="not-selected">Select city</option>
                              <option value="valenzuela">Valenzuela</option>
                              <option value="caloocan">Caloocan</option>
                          </select>
                        </div>
                        <div class="col-md-6">
                          <label for="state" class="p-0">State</label>
                          <select class="mt-1 form-control form-control-sm text12">
                              <option value="not-selected">Select State</option>
                              <option value="valenzuela">Valenzuela</option>
                              <option value="caloocan">Caloocan</option>
                          </select>
                        </div>
                      </div>

                      <div class="row mt-2">
                          <div class="col-md-6">
                            <label for="city" class="p-0">Country</label>
                            <select class="mt-1 form-control form-control-sm text12">
                                <option value="not-selected">Select country</option>
                                <option value="PH">Philippines</option>
                            </select>
                          </div>
                          <div class="col-md-6">
                            <label for="state" class="p-0">Postal Code</label>
                            <select class="mt-1 form-control form-control-sm text12">
                                <option value="not-selected">Select postal code</option>
                                <option value="1234">1234</option>
                                <option value="4565">4565</option>
                            </select>
                          </div>
                        </div>
                      
                  </form>
              </div>
              <div class="d-flex justify-content-center align-items-center mt-4 text12">
                  <div class="back_to_enlistment text-center border px-2 py-1 rounded cursor-pointer">
                      <p class="mb-0">Back to Enlistment</p>
                  </div>
                  <div class="text-center mx-3 border px-2 py-1 rounded cursor-pointer secondary-button text12">
                      <p class="mb-0">Print Statement</p>
                  </div>
                  <div class="text-center ml-3 border px-2 py-1 rounded cursor-pointer secondary-button text12">
                      <p class="mb-0">Download Statement</p>
                  </div>
                  <div class="text-center disabled-button border px-2 py-1 rounded cursor-pointer mx-3">
                      <p class="mb-0">Continue</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container text12 my-5">
        <div class="footer mt-5">
          <hr>
          <p class="p-5">© Philippine College of Criminology</p>
          </div>
        </div>

        <!-- end of container -->
    </div>
 
	`
$('body').append(body_content)

// functionality
const notes = `
    <h6 class="">Notes:</h6>
    <p class="text12">
        In Installment Terms, it will be in 4 parts and needs to settle the payment
        on or before exam days.
    </p>
`
$('.card_details, .billing_address, .grab_details, .gcash_details').hide()
// payments term Selection
$('#fullpayment').click( () => {
    $('.full_payment_div').removeClass("unselected_payment").addClass('selected_payment')
    $('.inst1_div').removeClass("selected_payment").addClass('unselected_payment')
    $('.inst2_div').removeClass("selected_payment").addClass('unselected_payment')
    $('.notes').html("<p></p>")
})
$('#installment1').click( () => {
    $('.full_payment_div').removeClass("selected_payment").addClass('unselected_payment')
    $('.inst1_div').removeClass("unselected_payment").addClass('selected_payment')
    $('.inst2_div').removeClass("selected_payment").addClass('unselected_payment')
    $('.notes').html(notes)
})
$('#installment2').click( () => {
    $('.full_payment_div').removeClass("selected_payment").addClass('unselected_payment')
    $('.inst1_div').removeClass("selected_payment").addClass('unselected_payment')
    $('.inst2_div').removeClass("unselected_payment").addClass('selected_payment')
    $('.notes').html(notes)
})

// payments method selection
$('#gcash').click( () => {
    $('.gcash_div').removeClass("unselected_payment").addClass('selected_payment')
    $('.grab_div').removeClass("selected_payment").addClass('unselected_payment')
    $('.card_div').removeClass("selected_payment").addClass('unselected_payment')
    $('.billing_address, .gcash_details').show()
    $('.card_details, .grab_details').hide()
})
$('#grab').click( () => {
    $('.gcash_div').removeClass("selected_payment").addClass('unselected_payment')
    $('.grab_div').removeClass("unselected_payment").addClass('selected_payment')
    $('.card_div').removeClass("selected_payment").addClass('unselected_payment')
    $('.billing_address, .grab_details').show()
    $('.card_details, .gcash_details').hide()
})
$('#card').click( () => {
    $('.gcash_div').removeClass("selected_payment").addClass('unselected_payment')
    $('.grab_div').removeClass("selected_payment").addClass('unselected_payment')
    $('.card_div').removeClass("unselected_payment").addClass('selected_payment')
    $('.card_details, .billing_address').show()
    $('.grab_details, .gcash_details').hide()
})

//SOA data
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var refEncoded = sessionStorage.ref_number
var refDecoded = atob(refEncoded).split("=").pop()
fetch("/api/resource/Enlistment/" + refDecoded)
.then( res => res.json())
.then(res => {
    var enlistment_data = res.data
    $('title').html(res.data.name)
    //fetch to fees
    fetch("/api/resource/Fees/" + res.data.fees_application_name)
    .then( res => res.json())
    .then(res => {
        const dateFunction = (stringDate) => {
          const date2 = new Date(stringDate)
          const due_date_pccr = date2.toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'})
          return due_date_pccr
        }
        $('.date_now').append(`<p class="text-right text12">${dateFunction(res.data.creation)}</p>`)
        //console.log(res)
        const fees_list = res.data.components
        //console.log(enlistment_data)
        var student_name = `
          <p class="">Student Name: <span class="font-weight-bold st_name_injected">${res.data.student_name}</span></p>
        `
        var program_acad_year = `
        <div class="col-6">
            <p class="mb-1 program_value">Program: <span class="font-weight-bold">${res.data.program}</span></p>
            <p class="">Year Level: <span class="font-weight-bold">1st Year</span></p>
        </div>
        <div class="col-6">
            <p class="mb-1">Section: <span class="font-weight-bold">JHS-Y21-1A</span></p>
            <p class="">Academic Year and Terms: <span class="font-weight-bold">1st year</span></p>
        </div>
        `
        var due_date = `
          <p class="">Due Date: <span class="font-weight-bold">${dateFunction(res.data.due_date)}</span></p>
        `
        var amount_to_pay = `
          <p class="">Amount to pay: <span class="font-weight-bold">Php ${numberWithCommas(res.data.grand_total)}</span></p>
        `
        $('.st_name').html(student_name)
        $('.program_acad_year').append(program_acad_year)
        $('.due_date').append(due_date)
        $('.amount_to_pay').append(amount_to_pay)
        
        var amount_due = `
          <p class="text12">Pay on or before ${dateFunction(res.data.due_date)}</p>
          <input class="p-2 shadow-sm border font-weight-bold col-md-5" placeholder="${"P " + numberWithCommas(res.data.grand_total) + ".00"}"></input>
        `
        $('.amount-due').append(amount_due)
        // get the list of fees category
        fetch('/api/resource/Fee Category')   
        .then(res => res.json())
        .then(res => {
          var fee_category = res.data
          var total = 0
          console.log(fees_list, fee_category)
          for (let i = 0; i < fee_category.length; i++) {
            const class_name = fee_category[i].name.replace(/\s/g, '')
            var title_text = `
                <div class="col-md-8">
                    <p class="font-weight-bold mb-0 ${class_name}">${fee_category[i].name}</p>
                    <div class="row  ${class_name+"_fee"}">
                        
                    </div>
                </div>
                <div class="col lab_fees_charges ${class_name+"_amount"}">
                    
                </div>
            `
            $('.fees_discription').append(title_text)
            $(`${"." + class_name}, ${'#' + class_name}, ${"." + class_name +"_amount"}`).hide()
            var misc_fees_charges = 0
            var lab_fees_amount = 0
            var other_fees_amount = 0
            for (let j = 0; j < fees_list.length; j++) {
              //console.log(fees_list[j])
              const show_item = fees_list[j].fee_type.replace(/\s/g, '')
              $(`${"." + show_item }, ${'#' + show_item}`).show()
               if(fee_category[i].name == fees_list[j].fee_type){
                $(`${"." + show_item }, ${'#' + class_name}`).show()
                var other_fees = `
                <div class="col-md-8 ">
                    <p class="mb-1">${fees_list[j].fee_description}</p>       

                </div>
                <div class="col-1 text-center">
                    <p class="mb-0 font-weight-bold"></p>
                </div>
                <div class="col fees_amount">
                    <p class="mb-1 font-weight-bold pl-0">${numberWithCommas(fees_list[j].amount)}</p>
                </div>
               `
               other_fees_amount = other_fees_amount + fees_list[j].amount
               $(`${"." + show_item +"_fee"}`).append(other_fees)
              }
              $(`${"." + show_item +"_amount"}`).show()
            }
            
            if(other_fees_amount > 0){
              total = total + other_fees_amount
              console.log(other_fees_amount)
              $(`${"." + class_name +"_amount"}`).append(`<p class="mb-0">${numberWithCommas(other_fees_amount)}</p>`)
            } 
          }
           $('.total').append(`<p class="mb-0 p-2 font-weight-bold">${numberWithCommas(total)}</p>`)
        })   
        .catch((error) => {
          console.log(error)
        })
    })
    .catch((error) => {
    
    })
})
.catch((error) => {

})
//Back to enlistment
$('.back_to_enlistment').click( () => {
    location.replace("/lead-class-enlistment")
})

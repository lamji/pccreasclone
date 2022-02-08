

	frappe.web_form.after_save = () => {
		
			fetch("/api/resource/Academic Department/" + academic_department)
			.then(result => result.json())
			.then(result => {
				console.log(result)
				const confirmation = `
				<div class="container">
					<h3 class="my-5 font-weight-bold">Student Application Form</h3>
					<div class="row mb-5">
	                    <div class="col-md-10">
	                        <div class=" d-flex justify-content-center">
	                            <div class="col text-center tab-line">
	                                <img src="https://eas.test.pccr.edu.ph/files/Completed.png" class="icon-tab">
	                                <p class="tab_label">Admission</p>
	                            </div>
	                            <div class="col text-center tab-line">
	                                <img src="https://eas.test.pccr.edu.ph/files/Completed.png" class="icon-tab">
	                                <p class="tab_label">Personal Information</p>
	                            </div>
	                            <div class="col text-center tab-line">
	                                <img src="https://eas.test.pccr.edu.ph/files/Completed.png" class="icon-tab">
	                                <p class="tab_label">Educational Background</p>
	                            </div>
	                            <div class="col text-center tab-line-active">
	                                <img src="https://eas.test.pccr.edu.ph/files/Active%20-%20Confirmation.png" class="icon-tab">
	                                <p class="tab_label">Confirmation</p>
	                            </div>
	                        </div>
	                    </div>
					</div>
					<div class="text-center header mt-5">
						<h6 class="font-weight-bold">Congratulations, ${p_first_name + " " + p_last_name}</h6>
					</div>
					<p class="text12">This confirms you that you have successfully submitted your pre-application form to PCCR. If you wish to continue enrolling here in PCCR, you are 1 step away from it. If you do not wish to continue as of the moment, you may do it some other time.
						<br>
						<br>
						<span class="text-red">Please note down your Reference Number in a piece of paper as you will need this to enter on the next step.</span>
					</p>
					<p><h6 class="head-sm mb-0 font-weight-bold">Reference Number: ${ref}</h6></p>
					<div class="row">
							<div class="col-md-10 row">
								<div class="col-md-3">
									<h6 class="head-sm mb-0 font-weight-bold">Applicant Name</h6>
									<p class="text-gray text12 p-0">${p_first_name + " " + p_last_name}</p>
								</div>
								<div class="col-md-3 ">
									<h6 class="head-sm mb-0 font-weight-bold">Student Type</h6>
									<p class="text-gray text12 p-0">${student_type}</p>
								</div>
								<div class="col-md-3">
									<h6 class="head-sm mb-0 font-weight-bold">Academic Department</h6>
									<p class="text-gray text12 p-0">${result.data.academic_department}</p>
								</div>
								<div class="col-md-3">
									<h6 class="head-sm mb-0 font-weight-bold">Program</h6>
									<p class="text-gray text12 p-0">${program}</p>
								</div>
							</div>
							
							<div class="col-md-10 row mt-5">
								<div class="col-md-3">
									<h6 class="head-sm mb-0 font-weight-bold">Grade Level</h6>
									<p class="text-gray text12 p-0">${result.data.academic_department + "-" +program}</p>
								</div>
								<div class="col-md-3 ">
									<h6 class="head-sm mb-0 font-weight-bold">Applicant Contact Number</h6>
									<p class="text-gray text12 p-0">${number}</p>
								</div>
								<div class="col-md-3">
									<h6 class="head-sm mb-0 font-weight-bold">Applicant Email Address</h6>
									<p class="text-gray text12 p-0">${email}</p>
								</div>
								<div class="col-md-3">
									<h6 class="head-sm mb-0 font-weight-bold">Educational Level</h6>
									<p class="text-gray text12 p-0">${result.data.academic_department}</p>
								</div>
							</div>
							<p class="text12">A confirmation email has also been sent to your email address containing your PCCR Applicant Reference Number</p>
							</div>
							<div class="text-center my-5">
								<div id="submit" class="btn btn-primary">Download Application Form</div>
								<a class="text-center text12" href="/lead-app/app-stud"><div class="btn btn-primary">Continue Enrollment</div></a>
							</div>
						</div>
						
					</div>
			
					`
					$('.educational_background_college').hide()
					$('.educational_background_jhs').hide()
					$('.educational_background_shs').hide()
					$('.educational_background_grad').hide()
					$('body').append(confirmation)
			})
	}
// })





frappe.web_form.after_load = () => {
	const lead_session = sessionStorage.acad
	var refEncoded = sessionStorage.ref_number
	var refDecoded = atob(refEncoded).split("=").pop()
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
			<h6 class="font-weight-bold congrats">loading . . . .</h6>
		</div>
		<p class="text12">This confirms you that you have successfully submitted your pre-application form to PCCR. If you wish to continue enrolling here in PCCR, you are 1 step away from it. If you do not wish to continue as of the moment, you may do it some other time.
			<br>
			<br>
			<span class="text-red">Please note down your Reference Number in a piece of paper as you will need this to enter on the next step.</span>
		</p>
		<p><h6 class="head-sm mb-0 font-weight-bold ref_number">loading . . . </h6></p>
		<div class="row">
				<div class="col-md-10 row">
					<div class="col-md-3">
						<h6 class="head-sm mb-0 font-weight-bold">Applicant Name</h6>
						<p class="text-gray text12 p-0 app_name"> . . . . </p>
					</div>
					<div class="col-md-3 ">
						<h6 class="head-sm mb-0 font-weight-bold">Student Type</h6>
						<p class="text-gray text12 p-0 student_type">. . . . </p>
					</div>
					<div class="col-md-3">
						<h6 class="head-sm mb-0 font-weight-bold">Academic Department</h6>
						<p class="text-gray text12 p-0 academic"> . . . . </p>
					</div>
					<div class="col-md-3">
						<h6 class="head-sm mb-0 font-weight-bold">Program</h6>
						<p class="text-gray text12 p-0 program"> . . . . </p>
					</div>
				</div>
				
				<div class="col-md-10 row mt-5">
					<div class="col-md-3">
						<h6 class="head-sm mb-0 font-weight-bold">Grade Level</h6>
						<p class="text-gray text12 p-0 grade_level"> . . . . </p>
					</div>
					<div class="col-md-3 ">
						<h6 class="head-sm mb-0 font-weight-bold">Applicant Contact Number</h6>
						<p class="text-gray text12 p-0 app_number"> . . . . </p>
					</div>
					<div class="col-md-3">
						<h6 class="head-sm mb-0 font-weight-bold">Applicant Email Address</h6>
						<p class="text-gray text12 p-0 email_address"> . . . . </p>
					</div>
					<div class="col-md-3">
						<h6 class="head-sm mb-0 font-weight-bold">Educational Level</h6>
						<p class="text-gray text12 p-0 edu_level"> . . . . </p>
					</div>
				</div>
				<p class="text12">A confirmation email has also been sent to your email address containing your PCCR Applicant Reference Number</p>
				</div>
				<div class="text-center my-5">
					<div id="submit" class="btn btn-primary">Download Application Form</div>
					<a class="text-center text12" href="/lead-app/app-stud"><div class="btn btn-primary">Continue Enrollment</div></a>
				</div>
			</div>
			<div class="footer mt-5">
				<p class="p-5">© Philippine College of Criminology</p>
			</div>
		</div>
	`
	$('Body').append(confirmation);
	fetch('/api/method/login', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			// usr: 'Administrator',
			// pwd: 'admin'
			usr: 'jicklampago.abakada@gmail.com',
			pwd: 'Abakada@1'
		})
	})
	.then(r => r.json())
	.then(r => {
		fetch('/api/resource/Admission PCCR/' + refDecoded)
		.then(res => res.json())
		.then(res => {
			console.log(res)
			const first_name = res.data.first_name
			const last_name = res.data.last_name
			const email = res.data.personal_email_address
			const ref_number = res.data.reference_number
			var program = res.data.program
			$('.ref_number').html(`<h6 class="head-sm mb-0 font-weight-bold">Reference Number:${ref_number} </h6></p>`)
			$('.congrats').html(`<h6 class="font-weight-bold congrats">Congratulations, ${first_name + " " + last_name}</h6>`)
			$('.app_name').html(`<p class="text-gray text12 p-0 app_name"> ${first_name + " " + last_name}</p>`)
			$('.student_type').html(`<p class="text-gray text12 p-0 student_type">${res.data.student_type}</p>`)
			$('.program').html(`<p class="text-gray text12 p-0 program">${res.data.program}</p>`)
			$('.app_number').html(`<p class="text-gray text12 p-0 app_number">${res.data.mobile_contact_number}</p>`)
			$('.email_address').html(`<p class="text-gray text12 p-0 email_address">${res.data.personal_email_address}</p>`)
			fetch('/api/resource/Academic Department/' + res.data.academic_department)
			.then(data => data.json())
			.then(data => {
				console.log(data)
				$('.academic').html(`<p class="text-gray text12 p-0 academic">${data.data.academic_department}</p>`)
				$('.grade_level').html(`<p class="text-gray text12 p-0 grade_level">${data.data.academic_department + " - " + program}</p>`)
				$('.edu_level').html(`<p class="text-gray text12 p-0 educ_level">${data.data.academic_department}</p>`)
			})
			//EMAIL FUNCTIONALITY
			setTimeout(function () {
			    var year = new Date().getFullYear().toString();
			    var content = 'Hi ' + first_name + ' ' + last_name + ' <br><br>Welcome to Philippine College of Criminology. This is the first step to become a part of Batang 641. Here\'s your unique Reference Number: <b>'+ ref_number +'</b>. This will be your unique identifier during your enrollment process. A new ID number will be given to you once the enrollment process is completed. To continue your enrollment, you may use the link below and enter the reference number seen on this email. <br><br> <a href="https://eas.test.pccr.edu.ph/lead-app/app-stud?new=1">https://eas.test.pccr.edu.ph/lead-app/app-stud?new=1</a> <br><br> Please feel free to email us if you have any query. We are looking forward to meeting you in our virtual environment.<br><br> Regards, <br><br>PCCR';

			    frappe.call({
			        method: "frappe.core.doctype.communication.email.make",
			        args: {
			            recipients: email,
			            sender: "infrasupport@abakadastudios.com",
			            content: content,
			            subject: "PCCR Lead Reference Number AY " + year,
			            doctype: "Admission PCCR",
			            name: ref_number,
			            send_email: 1,
			        },
			        callback: function (r) {
			            setTimeout(function () {
			                console.log(r.message.name)
			                var comm = r.message.name;
			                fetch('/api/resource/Email Queue?filters=[["communication","=", "' + comm + '"]]')
			                    .then(response => response.json())
			                    .then(data => {
			                        email_queue = data.data[0].name;
			                            console.log(email_queue)
			                            frappe.call({
			                                method: "frappe.email.doctype.email_queue.email_queue.send_now",
			                                args: {
			                                    name: email_queue
			                                }
			                            });

			                    }).catch(error => {
									console.log(error.message)
									fetch('/api/resource/Email Queue?filters=[["communication","=", "' + comm + '"]]')
									.then(response => response.json())
									.then(data => {
										email_queue = data.data[0].name;
											console.log(email_queue)
											frappe.call({
												method: "frappe.email.doctype.email_queue.email_queue.send_now",
												args: {
													name: email_queue
												}
											});
									}).catch(error => {
										console.log(error.message)	
									});
								});
			            }, 30000);
			        }
			    });
			}, 10000);
			//END EMAIL FUNCTIONALITY   
		})
	})
	  
}



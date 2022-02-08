// frappe.ready(function() {
	// bind events here
	frappe.web_form.after_load = () => {
	
		const add_requirements_tab = `
			<div class="container tab mb-5 text12">
		      <h5 class="my-5">Class Enlistment</h5>
		      <div class="row d-flex admission_tab justify-content-center">
		        <div class="col text-center tab-line-done cursor-pointer back_termsandconditions">
		          <img src="https://eas.test.pccr.edu.ph/files/Completed.png" class="icon-tab">
		          <p class="tab_label">Terms and Condition</p>
		        </div>
		        <div class="col text-center tab-line-active">
		          <img src="https://eas.test.pccr.edu.ph/files/Active%20-%20Admission.png" class="icon-tab">
		          <p class="tab_label">Admission Requirements</p>
		        </div>
		        <div class="col text-center tab-line">
		          <img src="https://eas.test.pccr.edu.ph/files/Inactive%20-%20Enlistment.png" class="icon-tab">
		          <p class="tab_label">Enlistment</p>
		        </div>
		        <div class="col text-center tab-line">
		          <img src="https://eas.test.pccr.edu.ph/files/Inactive%20-%20Biling.png" class="icon-tab">
		          <p class="tab_label">Billing</p>
		        </div>
		        <div class="col text-center tab-line">
		          <img src="https://eas.test.pccr.edu.ph/files/Inactive%20-%20Confirmation.png" class="icon-tab">
		          <p class="tab_label">Confirmation</p>
		        </div>
		      </div>
		`

		const footer =`
		<div class="footer">
			<hr>
			<p class="p-4">© Philippine College of Criminology</p>
		</div>
		`
		const button_footer = `
	    <div class="notice"></div>
		<div class="row req_button">
			<div class="col-12 row justify-content-center text-center d-flex">
				<div class="back mx-2 border border-black btn" id="back">Back</div>
				<div class="btn btn-primary" id="submit_req">Submit</div>
			</div>
			${footer}
		</div>
		`
		const confirmation_html = `
		<div class="container confirmation_html mb-5 text12">
	      <h5 class="my-5">Class Enlistment</h5>
	      <div class="row d-flex admission_tab justify-content-center">
	        <div class="col text-center tab-line-done cursor-pointer back_termsandconditions">
	          <img src="https://eas.test.pccr.edu.ph/files/Completed.png" class="icon-tab">
	          <p class="tab_label">Terms and Condition</p>
	        </div>
	        <div class="col text-center tab-line-active">
	          <img src="https://eas.test.pccr.edu.ph/files/Active%20-%20Admission.png" class="icon-tab">
	          <p class="tab_label">Admission Requirements</p>
	        </div>
	        <div class="col text-center tab-line">
	          <img src="https://eas.test.pccr.edu.ph/files/Inactive%20-%20Enlistment.png" class="icon-tab">
	          <p class="tab_label">Enlistment</p>
	        </div>
	        <div class="col text-center tab-line">
	          <img src="https://eas.test.pccr.edu.ph/files/Inactive%20-%20Biling.png" class="icon-tab">
	          <p class="tab_label">Billing</p>
	        </div>
	        <div class="col text-center tab-line">
	          <img src="https://eas.test.pccr.edu.ph/files/Inactive%20-%20Confirmation.png" class="icon-tab">
	          <p class="tab_label">Confirmation</p>
	        </div>
	      </div>

	       <div class="table_container">
	          <div class="d-flex py-3 align-items-center approved_header" >
	            <div class="pr-2"><h5 class="mb-0 check_holder_success circle">&#10003;</h5></div>
	            <div>
	              <h5 class="mb-0">Requirements has been approved</h5>
	              <p class="mb-0">You may now continue enlisting subjects and proceed to payment</p>
	            </div>
	          </div>

	           <div class="d-flex py-3 align-items-center submiited_header">
	            <div class="pr-2 "><h5 class="mb-0 check_holder_primary circle">&#10003;</h5></div>
	            <div>
	              <h5 class="mb-0">Requirements Successfully Submitted</h5>
	              <p class="mb-0">You have uploaded the following requirements:</p>
	            </div>
	          </div>

	          <div class="d-flex py-3 align-items-center rejected_header">
	            <div class="pr-2"><h5 class="mb-0 check_holder_rejected circle">x</h5></div>
	            <div>
	              <h5 class="mb-0">Requirements has been rejected</h5>
	              <p class="mb-0">Please see below the remarks from the Registrar for your guidance</p>
	            </div>
	           
	          </div>
	          <div class="remarks_container">
	              <h5 class="mb-3 remarks fw-bold">Remarks</h5>
	              <p class="mb-0 add_remark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	           </div>

	          <div class="mt-3">
		          <table class="table_approved">
		            <tr class="tr-custom confirmation">
		              <th>Requirement</th>
		              <th>File Submitted</th>
		              <th>File Submitted</th>
		            </tr>
		            <tr class="loader">
		              <td class="spinner-grow" role="status"><span class="sr-only">Loading...</span></td>
		              <td class="spinner-grow" role="status"><span class="sr-only">Loading...</span></td>
		              <td class="spinner-grow" role="status"><span class="sr-only">Loading...</span></td>
		            </tr>
		          </table>

      	          <div class="mt-3 shadow-sm border p-3 rejected_notes"> 
		            <h6>Additional Comments</h6>
		            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla et purus id convallis. Curabitur in elit eu turpis ornare auctor sed eu arcu.</p>
		            <div class="form-floating">
		              <textarea class="form-control" placeholder="Leave a comment here" id="comments"></textarea>
		            </div>
		          </div>

		          <!-- Button -->
		          <div class="d-flex text12 justify-content-center my-3">
		              <div class="border mx-2 text12 btn btn-primary cursor-pointer confirmation_to_billing approved_button">Continue</div>
		          </div>
		          <div class="d-flex text12 justify-content-center my-3 rejected_button">
		            <div id="confirmation_submit" class="border mx-2 text12 btn btn-primary cursor-pointer">Submit</div>
		            <div id="confirmation_cancel" class="border text12 btn cursor-pointer ">Cancel</div>
		          </div>
	           </div>
	       </div>
	     
	      <div class="mt-3 confirmation_notes">
	        <p>These submitted requirements will be reviewed and assessed by the staff of the Registrar’s Office within three (3) business days. Please wait until approval as it is a requirement to proceed to class enlistment. You will be contacted through the submitted email address and contact number once approved. You may also contact us at 
	        <span class="text-primary-pccr fw-bold">02-8123-4567</span> for updates and for more urgent concerns.</p>
	      </div>
	      
	      <div class="footer confirmation_footer mt-5">
	        <hr>
	        <p class="p-5">© Philippine College of Criminology</p>
	      </div>
	    </div>
		`

		
		// Class Section selection
		const class_enlistment = `
		<div class="container class_enlistment mb-5 text12">
			<h5 class="my-5">Class Enlistment</h5>
			<div class="row d-flex justify-content-center">
				<div class="col text-center tab-line-done cursor-pointer back_termsandconditions">
					<img src="https://eas.test.pccr.edu.ph/files/Completed.png" class="icon-tab">
					<p class="tab_label">Terms and Condition</p>
				</div>
				<div class="col text-center tab-line-done cursor-pointer back_ad_req">
					<img src="https://eas.test.pccr.edu.ph/files/Completed.png" class="icon-tab">
					<p class="tab_label">Admission Requirements</p>
				</div>
				<div class="col text-center tab-line-active">
					<img src="https://eas.test.pccr.edu.ph/files/Active%20-%20Enlistment.png" class="icon-tab">
					<p class="tab_label">Enlistment</p>
				</div>
				<div class="col text-center tab-line">
					<img src="https://eas.test.pccr.edu.ph/files/Inactive%20-%20Biling.png" class="icon-tab">
					<p class="tab_label">Billing</p>
				</div>
				<div class="col text-center tab-line">
					<img src="https://eas.test.pccr.edu.ph/files/Inactive%20-%20Confirmation.png" class="icon-tab">
					<p class="tab_label">Confirmation</p>
				</div>
			</div>

			<!-- class table-->
			<div class="class_content mb-5">
				<h5 class="font-weight-bold mt-4">Choose Section</h5>
				<p class="mb-0 font-weight-bold mb-2 acad_section">loading . . . . . . .</p>
				<select class="standardSelector col-md-4 border bg-white border-dark text-gray text12" name="psCity" id="section" >
					<option id="section_select">Choose Section</option>
				</select>
				<div class="">
				<div class="custom-table my-4 text12">
					<table id="table-head">
						<tr class="tr-custom">
							<th>Subject Code</th>
							<th class="">Title</th>
							<th>Unit</th>
							<th>Section</th>
							<th>Remarks</th>
							<th>Action</th>
						</tr>
					</table>
				</div>
				</div>
			</div>

			<!-- class button-->
			<div class="class_button text12 my-5">
				<div class="d-flex justify-content-center">
					<div class="back cursor-pointer border boder-0 mx-2 py-1 px-3">Back</div>
					<div class="continue border btn-secondary boder-0 mr-2 py-1 px-3 cursor-not-allowed">Confirm Enlistment</div>
				    <div class="continue_billing border btn-primary boder-0 mr-2 py-1 px-3 cursor-pointer">Confirm Enlistment</div>
				</div>
				<div class="footer mt-5">
					<hr>
					<p>© Philippine College of Criminology</p>
				</div>
			</div>
		</div>
		`

		const scholarship = `
			<div class="my-4">
				<h5>Scholarship and Discount</h5>
				<p class="mb-0">
					PCCR has various scholarships and discounts for students to avail. To apply, check the box below and a representative of the SAAS department will contact you for the screening and needed requirements.
				</p>
				<input type="checkbox" id="scholorship" name="scholarship" value="applied scholarship">
  				<label for="scholorship"> I want to apply for scholarship and discount</label><br>
			</div>
		`
		$(`[data-fieldname="action"],
		[data-fieldname="count"],
		[data-fieldname="last_name"],
		[data-fieldname="first_name"],
		[data-fieldname="student_type"],
		[data-fieldname="voucher"], 
		[data-fieldname="esc"],
		[data-fieldname="ncae"],
		[data-fieldname="als"],
		[data-fieldname="coh"],
		[data-fieldname="otr"],
		[data-fieldname="visa"],
		[data-fieldname="affidavit"],
		[data-fieldname="passport"],
		[data-fieldname="personal_history"],
		[data-fieldname="peac"],
		[data-fieldname="certificate_of_good_moral_character"],
		[data-fieldname="psa_birth_certificate"],
		[data-fieldname="photocopy_of_diploma"],
		[data-fieldname="2x2_id_photo"],
		[data-fieldname="form_138"],
		[data-fieldname="form_137"]`)
		.attr("style", "display: none !important")
		$('form').addClass("row ")
		$('.frappe-control').addClass('col-md-6')
		$('.form-page').append(scholarship)
		$('.form-page').prepend("<h2 class='mt-3'>Admission Requirements</h2><h3 class='loading'>loading . . .  </h3>")
		$('')

		//clear function 
		$('[data-fieldname="voucher"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="voucher"] .attached-file-link').text("")
		 	}, 100); 
		})
		$('[data-fieldname="esc"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="esc"] .attached-file-link').text("")
		 	}, 100); 
		})
		$('[data-fieldname="ncae"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="ncae"] .attached-file-link').text("")
		 	}, 100); 
		})
		$('[data-fieldname="als"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="als"] .attached-file-link').text("")
		 	}, 100); 
		})
		$('[data-fieldname="otr"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="otr"] .attached-file-link').text("")
		 	}, 100); 
		})
		$('[data-fieldname="coh"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="coh"] .attached-file-link').text("")
		 	}, 100); 
		})
		$('[data-fieldname="visa"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="visa"] .attached-file-link').text("")
		 	}, 100); 
		})
		$('[data-fieldname="affidavit"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="affidavit"] .attached-file-link').text("")
		 	}, 100); 
		})
		$('[data-fieldname="passport"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="passport"] .attached-file-link').text("")
		 	}, 100); 
		})
		$('[data-fieldname="personal_history"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="personal_history"] .attached-file-link').text("")
		 	}, 100); 
		})
		$('[data-fieldname="peac"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="peac"] .attached-file-link').text("")
		 	}, 100); 
		})
		$('[data-fieldname="psa_birth_certificate"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="psa_birth_certificate"] .attached-file-link').text("")
		 	}, 100); 
		})
		$('[data-fieldname="certificate_of_good_moral_character"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="certificate_of_good_moral_character"] .attached-file-link').text("")
		 	}, 100); 
		})
		$('[data-fieldname="photocopy_of_diploma"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="photocopy_of_diploma"] .attached-file-link').text("")
		 	}, 100); 
		})
		$('[data-fieldname="form_137"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="form_137"] .attached-file-link').text("")
		 	}, 100); 
		})
		$('[data-fieldname="2x2_id_photo"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="2x2_id_photo"] .attached-file-link').text("")
		 	}, 100); 
		})
		$('[data-fieldname="form_138"] .btn-default').click( () => {
			setTimeout(function(){
				$('[data-fieldname="form_138"] .attached-file-link').text("")
		 	}, 100); 
		})

		// addmission requirements
		$('.page_content').prepend(add_requirements_tab)
		//add maxsize file upload
		const text= `
		    <p class="mb-0 text12">- Maximum file size: 20MB</p>
		    <p class="text12">- Accepted file types: jpg, png, pdf</p>
		`
		$('.control-input').append(text)
		const req = '<p style="color: #7a0200" class="mb-0 mt-4">*Required fields</p>'
		$('.form-group').prepend(req)
		$('.container.my-4').append(button_footer)
		$('body').append(confirmation_html + class_enlistment)
        
		const url_base = window.location.origin
		const value = frappe.web_form.get_value("name1");
		let refEncoded = sessionStorage.ref_number
		var refDecoded = atob(refEncoded).split("=").pop()

		//get the count
		fetch("/api/resource/Enlistment/" + refDecoded)
	    .then( res => res.json())
	    .then(res => {
	        console.log(res)
	        const click_count = res.data.count
			console.log(click_count)
			if(click_count == '1' ){
				$('[data-web-form="lead-admission"], .req_button, .class_enlistment, .tab').hide()
			}else if(click_count == "2"){
				$('.class_enlistment').show()
				$('.confirmation_html ,[data-web-form="lead-admission"], .req_button,.tab ').hide()
			}else if(click_count == "3"){
			    location.replace("/billing")
			}else{
				$('[data-web-form="lead-admission"], .req_button, .class_enlistment, .tab').show()
				$('.class_enlistment, .confirmation_html').hide()
				fetch(url_base + "/api/resource/Admission PCCR/" + refDecoded)
		.then( res => res.json())
		.then( res => {
			$('.loading').hide()
			var acad_value = res.data.academic_department
			function educ_value(string) {
			    let educ_level = ""
			    if(string == "D05"){
			    	educ_level = "Junior High School"
			    }else if(string == "D06"){
			    	educ_level = "Senior High School"
			    }else if(string == "D07"){
			    	educ_level = "College"
			    }else if(string == "D08"){
			    	educ_level = "Graduate School"
			    }else if(string == "D09"){
			    	educ_level = "All Department"
			    }
			    return educ_level;
			}
			let educational_level = educ_value(acad_value);
			// const acad_dept2 = educational_level
			const Student_Type = res.data.student_type
			fetch("/api/resource/Academic Department/" + acad_value)
			.then(res => res.json())
			.then(res => {
				console.log(res.data.academic_department)
				const acad_dept2 = res.data.academic_department
				if(acad_dept2 == "Junior High School" && Student_Type == "Freshman"){
			    $(`[data-fieldname="2x2_id_photo"],
				[data-fieldname="psa_birth_certificate"],
				[data-fieldname="photocopy_of_diploma"],
				[data-fieldname="form_138"],
				[data-fieldname="certificate_of_good_moral_character"],
				[data-fieldname="form_137"]`)
				.attr("style", "display: block !important")
				frappe.web_form.set_df_property("2x2_id_photo", "reqd", 1)
				frappe.web_form.set_df_property("psa_birth_certificate", "reqd", 1)
				frappe.web_form.set_df_property("form_138", "reqd", 1)
				frappe.web_form.set_df_property("photocopy_of_diploma", "reqd", 1)
				frappe.web_form.set_df_property("certificate_of_good_moral_character", "reqd", 1)
				frappe.web_form.set_df_property("form_137", "reqd", 1)
			}else if(acad_dept2 == "Senior High School" && Student_Type == "Freshman"){
				 $(`[data-fieldname="2x2_id_photo"],
				[data-fieldname="psa_birth_certificate"],
				[data-fieldname="form_138"],
				[data-fieldname="voucher"], 
				[data-fieldname="esc"],
				[data-fieldname="ncae"],
				[data-fieldname="certificate_of_good_moral_character"],
				[data-fieldname="form_137"]`)
				.attr("style", "display: block !important")
				$('[data-fieldname="voucher"] div  p:contains(*Required fields), [data-fieldname="esc"] div  p:contains(*Required fields)').html("<p class='mb-0' style='color: black !important'>Optional</p>")
				frappe.web_form.set_df_property("2x2_id_photo", "reqd", 1)
				frappe.web_form.set_df_property("psa_birth_certificate", "reqd", 1)
				frappe.web_form.set_df_property("form_138", "reqd", 1)
				frappe.web_form.set_df_property("voucher", "reqd", 0)
				frappe.web_form.set_df_property("esc", "reqd", 0)
				frappe.web_form.set_df_property("ncae", "reqd", 1)
				frappe.web_form.set_df_property("certificate_of_good_moral_character", "reqd", 1)
				frappe.web_form.set_df_property("form_137", "reqd", 1)
			}else if(acad_dept2 == "College" && Student_Type == "Freshman"){
				$(`[data-fieldname="2x2_id_photo"],
				[data-fieldname="psa_birth_certificate"],
				[data-fieldname="form_138"],
				[data-fieldname="als"],
				[data-fieldname="certificate_of_good_moral_character"],
				[data-fieldname="form_137"]`)
				.attr("style", "display: block !important")
				$('[data-fieldname="als"] div  p:contains(*Required fields)').html("")
				frappe.web_form.set_df_property("2x2_id_photo", "reqd", 1)
				frappe.web_form.set_df_property("psa_birth_certificate", "reqd", 1)
				frappe.web_form.set_df_property("form_138", "reqd", 1)
				frappe.web_form.set_df_property("als", "reqd", 0)
				frappe.web_form.set_df_property("certificate_of_good_moral_character", "reqd", 1)
				frappe.web_form.set_df_property("form_137", "reqd", 1)
			}else if(acad_dept2 == "Graduate School" && Student_Type == "Freshman"){
				$(`[data-fieldname="2x2_id_photo"],
				[data-fieldname="coh"],
				[data-fieldname="otr"],
				[data-fieldname="certificate_of_good_moral_character"]`)
				.attr("style", "display: block !important")
				frappe.web_form.set_df_property("2x2_id_photo", "reqd", 1)
				frappe.web_form.set_df_property("otr", "reqd", 1)
				frappe.web_form.set_df_property("coh", "reqd", 1)
				frappe.web_form.set_df_property("form_138", "reqd", 0)
				frappe.web_form.set_df_property("certificate_of_good_moral_character", "reqd", 1)
			}else if(acad_dept2 == "Junior High School" && Student_Type == "Transferee"){
				 $(`[data-fieldname="2x2_id_photo"],
				[data-fieldname="psa_birth_certificate"],
				[data-fieldname="form_138"],
				[data-fieldname="certificate_of_good_moral_character"],
				[data-fieldname="form_137"]`)
				.attr("style", "display: block !important")
				frappe.web_form.set_df_property("2x2_id_photo", "reqd", 1)
				frappe.web_form.set_df_property("psa_birth_certificate", "reqd", 1)
				frappe.web_form.set_df_property("form_138", "reqd", 1)
				frappe.web_form.set_df_property("certificate_of_good_moral_character", "reqd", 1)
				frappe.web_form.set_df_property("form_137", "reqd", 1)
			}else if(acad_dept2 == "Senior High School" && Student_Type == "Transferee"){
				 $(`[data-fieldname="2x2_id_photo"],
				[data-fieldname="psa_birth_certificate"],
				[data-fieldname="form_138"],
				[data-fieldname="voucher"], 
				[data-fieldname="esc"],
				[data-fieldname="ncae"],
				[data-fieldname="peac"],
				[data-fieldname="certificate_of_good_moral_character"],
				[data-fieldname="form_137"]`)
				.attr("style", "display: block !important")
				$('[data-fieldname="voucher"] div  p:contains(*Required fields), [data-fieldname="esc"] div  p:contains(*Required fields), [data-fieldname="peac"] div  p:contains(*Required fields)').html("<p class='mb-0' style='color: black !important'>Optional</p>")
				frappe.web_form.set_df_property("2x2_id_photo", "reqd", 1)
				frappe.web_form.set_df_property("psa_birth_certificate", "reqd", 1)
				frappe.web_form.set_df_property("form_138", "reqd", 1)
				frappe.web_form.set_df_property("voucher", "reqd", 0)
				frappe.web_form.set_df_property("esc", "reqd", 0)
				frappe.web_form.set_df_property("ncae", "reqd", 1)
				frappe.web_form.set_df_property("peac", "reqd", 0)
				frappe.web_form.set_df_property("certificate_of_good_moral_character", "reqd", 1)
				frappe.web_form.set_df_property("form_137", "reqd", 1)
			}else if(acad_dept2 == "College" && Student_Type == "Transferee"){
				 $(`[data-fieldname="2x2_id_photo"],
				[data-fieldname="psa_birth_certificate"],
				[data-fieldname="coh"],
				[data-fieldname="otr"],
				[data-fieldname="certificate_of_good_moral_character"],
				[data-fieldname="form_137"]`)
				.attr("style", "display: block !important")
				$('[data-fieldname="voucher"] div  p:contains(*Required fields), [data-fieldname="esc"] div  p:contains(*Required fields), [data-fieldname="peac"] div  p:contains(*Required fields)').html("<p class='mb-0' style='color: black !important'>Optional</p>")
				frappe.web_form.set_df_property("2x2_id_photo", "reqd", 1)
				frappe.web_form.set_df_property("psa_birth_certificate", "reqd", 1)
				frappe.web_form.set_df_property("form_138", "reqd", 0)
				frappe.web_form.set_df_property("otr", "reqd", 1)
				frappe.web_form.set_df_property("coh", "reqd", 1)
				frappe.web_form.set_df_property("certificate_of_good_moral_character", "reqd", 1)
				frappe.web_form.set_df_property("form_137", "reqd", 1)
			}else if(acad_dept2 == "College" && Student_Type == "Second Courser"){
				$(`[data-fieldname="2x2_id_photo"],
				[data-fieldname="psa_birth_certificate"],
				[data-fieldname="coh"],
				[data-fieldname="otr"],
				[data-fieldname="certificate_of_good_moral_character"],
				[data-fieldname="form_137"]`)
				.attr("style", "display: block !important")
				$('[data-fieldname="voucher"] div  p:contains(*Required fields), [data-fieldname="esc"] div  p:contains(*Required fields), [data-fieldname="peac"] div  p:contains(*Required fields)').html("<p class='mb-0' style='color: black !important'>Optional</p>")
				frappe.web_form.set_df_property("2x2_id_photo", "reqd", 1)
				frappe.web_form.set_df_property("psa_birth_certificate", "reqd", 1)
				frappe.web_form.set_df_property("form_138", "reqd", 0)
				frappe.web_form.set_df_property("otr", "reqd", 1)
				frappe.web_form.set_df_property("coh", "reqd", 1)
				frappe.web_form.set_df_property("certificate_of_good_moral_character", "reqd", 1)
				frappe.web_form.set_df_property("form_137", "reqd", 1)
			}else if(acad_dept2 == "Graduate School" && Student_Type == "Second Courser"){
				$(`[data-fieldname="2x2_id_photo"],
				[data-fieldname="coh"],
				[data-fieldname="otr"],
				[data-fieldname="certificate_of_good_moral_character"]`)
				.attr("style", "display: block !important")
				$('[data-fieldname="voucher"] div  p:contains(*Required fields), [data-fieldname="esc"] div  p:contains(*Required fields), [data-fieldname="peac"] div  p:contains(*Required fields)').html("<p class='mb-0' style='color: black !important'>Optional</p>")
				frappe.web_form.set_df_property("2x2_id_photo", "reqd", 1)
				frappe.web_form.set_df_property("form_138", "reqd", 0)
				frappe.web_form.set_df_property("otr", "reqd", 1)
				frappe.web_form.set_df_property("coh", "reqd", 1)
				frappe.web_form.set_df_property("certificate_of_good_moral_character", "reqd", 1)
				
			}
			})
		})
		.catch((error) => {
			// alert(error)
		});
			}
	    })
	    .catch((error) => {

	    })
		
	
		
	
		// Bck to terms and conditions
		$('#back').click( () => {
			location.replace("/terms-and-conditions")
		})
		$('#submit_req').click( () => {
			frappe.web_form.set_value("count", "1")
			setTimeout(function(){
				frappe.web_form.save()
			 }, 100); 
		})
		
		$('.rejected_button, .rejected_notes, .remarks_container, .submiited_header, .rejected_header, .approved_header, .approved_button').attr("style", "display: none !important")
		fetch(url_base + "/api/resource/Enlistment/" + refDecoded)
		.then(res => res.json())
		.then(res => {
			
			const action = res.data.action 
			if(action == "Approved"){
				$('.approved_header, .approved_button').show()
			}else if(action == "Reject"){
				$('.rejected_header, .rejected_button, .rejected_notes, .remarks_container').show()
				if(res.data.add_remark){
					$('.add_remark').html(`<p>${res.data.add_remark}</p>`)
				}
			}else{
				$('.submiited_header').show()
			}
			const data = res.data
			for (const key in data) {
		    	let string = key
		    	function capitalizeFirstLetter(string) {
				  return string.charAt(0).toUpperCase() + string.slice(1);
				}
				let key_data = capitalizeFirstLetter(string)
				if(isNaN(data[key])){
					if(data[key].includes("/files/") || data[key].includes("/privates/files/")){
						let value = data[key].split("/").pop()
						const table_injected = `
			            <tr class="confirmation">
			              <td>${key_data}</td>
			              <td>${value}</td>
			              <td><span class="text-primary-pccr fw-bold mx-2 cursor-pointer">View</span><span class="text-primary-pccr fw-bold mx-2 cursor-pointer approved_tr">Download</span><span class="text-primary-pccr fw-bold mx-2 cursor-pointer rejected_tr">Change</span></td>
			            </tr>
						`
						$('.table_approved').append(table_injected)
					}
				}else{}
			}
			$('.loader').hide()
			
			if(action == "Approved"){
				$('.rejected_tr').hide()
			}
		})
	    
	    // 0 = display the attach file
		// 1 = hide attach, display confirmation
		
		
		$('.confirmation_continue').click( () => {
			frappe.web_form.set_value("count", "2")
			setTimeout(function(){
				frappe.web_form.save()
			 }, 100); 
		})
		//continue to billing
		$('.confirmation_to_billing').click( () => {
			frappe.web_form.set_value("count", "2")
			setTimeout(function(){
				frappe.web_form.save()
			 }, 100);
		})

		// Class section selection
		//fetch section
		fetch(url_base + '/api/resource/Sections')
		.then(r => r.json())
		.then(r => {
		    const result = r.data
		    for (let i = 0; i < result.length; i++) { 
		        fetch(url_base + '/api/resource/Sections/' + result[i].name)
		        .then(res => res.json())
		        .then(res => {
		            const section_array = res.data.name + " | " + res.data.shift 
		            const name = res.data.name
		            const value = name
		            document.getElementById("section").innerHTML += `<option class="p-2" value="${value}">${section_array}</option>`;
		        })
		    }
		})
		// get academic department
		const d = new Date();
	    const year = d.getFullYear()
	
		fetch(url_base + "/api/resource/Enlistment/" + refDecoded)
		.then(res => res.json())
		.then(res => {
			const acad_html = `
				<p class="mb-0 font-weight-bold mb-2 acad_section">${res.data.academic_department} Batch ${year}</p>
			`
			$('.acad_section').html(acad_html)
		})
		//check if there si selected section
		$('.continue_billing').hide()
		$("#section").change( () => {
		    var section = $('#section').val();
		    if(section === "Choose Section"){
		        $('.continue_billing').hide()
		        $('.continue').show()
		        $('#t-list td').hide()
		    }else{
		        $('.continue').hide()
		        $('.continue_billing').show()
		        $('#t-list td').hide()
		        //Table List
		        fetch(url_base + '/api/resource/Sections/' + section)
		        .then(res => res.json())
		        .then(res => {
		            const courses = res.data.subjects_enlistment
		            const courses2 = [1,2,3,4,5,6]
		            for (let i = 0; i < courses.length; i++) { 
			          const table_list = `
			          <tr id="t-list">
							<td>Subject Code</td>
							<td class="">Title</td>
							<td>${courses[i].unit}</td>
							<td>${courses[i].section}</td>
							<td>Remarks</td>
							<td>Action</td>
						</tr>
			          `
			          document.getElementById("table-head").innerHTML += table_list;
			        }
		        })
		    }
		})
		$('.continue_billing').click( () => {
		    frappe.web_form.set_value("count", "3")
			setTimeout(function(){
				frappe.web_form.save()
			 }, 100);
		})
		$('.back').click( () => {
		    frappe.web_form.set_value("count", "1")
			setTimeout(function(){
				frappe.web_form.save()
			 }, 100);
		})

	}
	frappe.web_form.after_save = () => {
		location.reload()
	}  // End of after save
// })
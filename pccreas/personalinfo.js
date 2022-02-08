

// frappe.ready(function() {
	frappe.web_form.after_load = () => {
		const lead_session = sessionStorage.acad
	    $(".navbar-brand").css("pointer-events", "none");
        const url_base = window.location.origin
     
		fetch(url_base + '/api/method/login', {
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
			
		})

		
		fetch('https://api.psgc.abakadastudios.com/api/provinces?per_page=all')
		.then(response => response.json())
		.then(data => {
			data.data.forEach(function(value) {   
				$('#province, #HsProvince, #GsProvince, #college_ps_province, #college_gs_province, #college_jhs_province, #college_shs_province, #shs_ps_province, #shs_gs_province, #shs_jhs_province, #grad_college_province')
				.append($("<option></option>")
				.attr("value", value.name)
				.attr("id", value.code)
				.text(value.name)); 
			});
		});

		
    const personal_info_Tab = `
		<div class="container tab mb-5 text12">
			<h3 class="my-5 font-weight-bold">Student Application Form</h3>
			<div class="row">
				<div class="col-md-10">
					<div class=" d-flex justify-content-center">
						<div class="col text-center tab-line-done" id="back_to_admission">
							<img src="https://eas.test.pccr.edu.ph/files/Completed.png" class="icon-tab">
							<p class="tab_label">Admission</p>
						</div>
						<div class="col text-center tab-line-active">
							<img src="https://eas.test.pccr.edu.ph/files/Active%20-%20Application.png" class="icon-tab">
							<p class="tab_label">Personal Information</p>
						</div>
						<div class="col text-center tab-line">
							<img src="https://eas.test.pccr.edu.ph/files/Inactive%20-%20Application.png" class="icon-tab">
							<p class="tab_label">Educational Background</p>
						</div>
						<div class="col text-center tab-line">
							<img src="https://eas.test.pccr.edu.ph/files/Inactive%20-%20Confirmation.png" class="icon-tab">
							<p class="tab_label">Confirmation</p>
						</div>
					</div>
				</div>
			</div>
			
		</div>
		`
		const header =`
			<div class="container my-5">
				<h3>Personal Information</h3>
				<p class="text-red text-10">*Required fields</p>
			</div>
			
		`
		const student_name1 = `
			<div class="container text12">
			<form>
				<h6 class="col-12 p-0 font-weight-bold mb-2">Student Name</h6>
				<div class="form-row">
				<div class="form-group col-md-3 c-mb-sm-1">
					<label for="last_name">Last Name<span class="text-red"> *</span></label>
					<input type="text" class="check_value form-control form-control-sm border bg-white rounded-0 border-dark" id="last_name" placeholder="Enter Last Name">
				</div>
				<div class="form-group col-md-3 c-mb-sm-1">
					<label for="first_name">First Name<span class="text-red"> *</span></label>
					<input type="text" class="check_value form-control form-control-sm border bg-white rounded-0 border-dark" id="first_name" placeholder="Enter First Name">
				</div>
				<div class="form-group col-md-3 c-mb-sm-1">
					<label for="middle_name">Middle Name<span class="text-red"> *</span></label>
					<input type="text" class="check_value form-control form-control-sm border bg-white rounded-0 border-dark" id="middle_name" placeholder="Enter Middle Name">
				</div>
				<div class="form-group col-md-2 mb-0">
					<label for="suffix" class="col-12 p-0">Suffix </label>
					<input type="text" class="check_value form-control form-control-sm border bg-white rounded-0 border-dark" id="name_suffix" placeholder="Suffix">
				</div>
				</div>
			</form>
			</div>
		`
		const personal_information2 =`
			<div class="container text12">
			<form>
			<h6 class="col-12 p-0 font-weight-bold mb-2">Personal Information</h6>
				<div class="form-row">
					<div class="form-group col-md-3 c-mb-sm-1">
						<label for="gender" class="col-12 p-0">Gender <span class="text-red"> *</span></label>
						<select id="gender" class="text-gray p-1 col-12 border bg-white border-dark c-p-5">
							<option selected disabled>Select Gender</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
					</div>
					<div class="form-group col-md-3 c-mb-sm-1">
						<label for="birthday">Birthday <span class="text-red"> *</span></label>
						<input type="date" id="birthday" max="2022-12-31" class="form-control form-control-sm border bg-white rounded-0 border-dark" id="birthday" placeholder="Enter Birthday">
					</div>
					<div class="form-group col-md-3 c-mb-sm-1">
						<label for="age_as">Age as of the 1st Friday of June <span class="text-red"> *</span></label>
						<input type="number" id="age_as" class="check_value form-control form-control-sm border bg-white rounded-0 border-dark" disabled >
					</div>
				</div>
				<div class="form-row">
					<div class="form-group col-md-3 c-mb-sm-1">
						<label for="mother_tongue">Mother Tongue <span class="text-red"> *</span></label>
						<input type="text" id="mother_tongue" class="check_value form-control form-control-sm border bg-white rounded-0 border-dark"  placeholder="Ex. Tagalog">
					</div>
					<div class="form-group col-md-3 c-mb-sm-1">
						<label for="ethnic" class="col-12 p-0">IP (Ethnic Group) <span class="text-red"> *</span></label>
						<select id="ethnic" class="text-gray p-1 col-12 border bg-white border-dark c-p-5">
                            <option selected disabled>Select Ethnic Group</option>
                            <option value="Prefer not to mention">Prefer not to mention</option>
							<option value="Abelling">Abelling</option>
							<option value="Abiyan">Abiyan</option>
							<option value="Aeta/Ayta">Aeta/Ayta</option>
							<option value="Agta">Aggay</option>
							<option value="Aggay">Agta</option>
							<option value="Agutaynon/Agutayanon">Agutaynon/Agutayanon</option>
							<option value="Alangan">Alangan</option>
							<option value="Apayao/Yapayao">Apayao/Yapayao</option>
							<option value="Applai">Applai</option>
							<option value="Atta/Ata/Ati">Atta/Ata/Ati</option>
							<option value="Ayangan">Ayangan</option>
							<option value="Badjao, Sama Dilaut">Badjao, Sama Dilaut</option>
							<option value="Bagobo/Guinga/Guingaay">Bagobo/Guinga</option>
							<option value="Balangao/Baliwon">Balangao/Baliwon</option>
							<option value="Banwaon">Banwaon</option>
							<option value="Batak/Binatak">Batak/Binatak</option>
							<option value="Batangan">ABatanganggay</option>
							<option value="Bilaan/B'laan">Bilaan/B'laan</option>
							<option value="Binukid/Bukidnon">Binukid/Bukidnon</option>
							<option value="Bugkalot">Bugkalot</option>
							<option value="Bontok/Binontok">Bontok/Binontok</option>
							<option value="Buhid">Buhid</option>
							<option value="Cimaron">Cimaron</option>
							<option value="Cuyunon/Cuyunan">Cuyunon/Cuyunan</option>
							<option value="Dibabawon">Dibabawon</option>
							<option value="Dumagat/Dumagat(Umiray)">Dumagat/Dumagat(Umiray)</option>
							<option value="Gaddang">Gaddang</option>
							<option value="Gubatnon">Gubatnon</option>
							<option value="Hanunuo">Hanunuo</option>
							<option value="Higaonon">Higaonon</option>
							<option value="Ibaloi/Inibaloi">Ibaloi/Inibaloi</option>
							<option value="Ibanag">Ibanag</option>
							<option value="Ifugao">Ifugao</option>
							<option value="Ikalahan/Kalanguya">Ikalahan/Kalanguya</option>
							<option value="Ilongot">Ilongot</option>
							<option value="Iranon">Iranon</option>
							<option value="Iraya">Iraya</option>
							<option value="Isarog">Isarog</option>
							<option value="Isinay">Isinay</option>
							<option value="Isneg">Isneg</option>
							<option value="Itawis">Itawis</option>
							<option value="Ivatan/Itbayat">Ivatan/Itbayat</option>
							<option value="Iwak/I'wa/Owak">Iwak/I'wa/Owak</option>
							<option value="Jama Mapun">Jama Mapun</option>
							<option value="Kabihug">Kabihug</option>
							<option value="Kalagan">Kalagan</option>
							<option value="Kalinga">Kalinga</option>
							<option value="Kamigin/Kinamiging">Kamigin/Kinamiging</option>
							<option value="Kankanai/Kankaney">Kankanai/Kankaney</option>
							<option value="Karao">Karao</option>
							<option value="Karolanos">Karolanos</option>
							<option value="Kolibugan/Kalibugan">Kolibugan/Kalibugan</option>
							<option value="Maguindanao">Maguindanao</option>
							<option value="Mamanwa">Mamanwa</option>
							<option value="Mandaya">Mandaya</option>
							<option value="Manobo/Ata-Manobo">Manobo/Ata-Manobo</option>
							<option value="Maranao">Maranao</option>
							<option value="Matigsalog">Matigsalog</option>
							<option value="Molbog">Molbog</option>
							<option value="Negrito">Negrito</option>
							<option value="Palawan/Pinalawan/Palawanon">Palawan/Pinalawan/Palawanon</option>
							<option value="Ratagnon">Ratagnon</option>
							<option value="Remontado">Remontado</option>
							<option value="Sama Dilaya">Sama Dilaya</option>
							<option value="Sangil, Sangir">Sangil, Sangir</option>
							<option value="Subanen/Subaben">Subanen/Subaben</option>
							<option value="Sulod">Sulod</option>
							<option value="Tabangnon">Tabangnon</option>
							<option value="Tadyawan">Tadyawan</option>
							<option value="Tagabawa">Tagabawa</option>
							<option value="Tagakaolo">Tagakaolo</option>
							<option value="Tagbanwa">Tagbanwa</option>
							<option value="T'boli">T'boli</option>
							<option value="Teduray">Teduray</option>
							<option value="Tigwahon/Tigwahanon">Tigwahon/Tigwahanon</option>
							<option value="Tinggian">Tinggian</option>
							<option value="Tiruray">Tiruray</option>
							<option value="Talaandig">Talaandig</option>
							<option value="Tuwali">Tuwali</option>
							<option value="Ubo">Ubo</option>
							<option value="Umayamnon">Umayamnon</option>
							<option value="Yakan">Yakan</option>
							<option value="Yogad">Yogad</option>
						</select>
					</div>
					<div class="form-group col-md-3 ">
						<label for="religion" class="col-12 p-0">Religion <span class="text-red"> *</span></label>
						<select id="religion" class="text-gray p-1 col-12 border bg-white border-dark c-p-5">
							<option selected disabled>Select Religion</option>
							<option value="None">None</option>
                            <option value="Prefer not to mention">Prefer not to mention</option>
							<option value="Aglipay">Aglipay</option>
							<option value="Bible Christian">Bible Christian</option>
							<option value="Assemblies of God">Assemblies of God</option>
							<option value="Association of Baptist Churches in Luzon, Visayas, and Mindanao">Association of Baptist Churches in Luzon, Visayas, and Mindanao</option>
							<option value="Association of Fundamental Baptist Churches in the Philippines">Association of Fundamental Baptist Churches in the Philippines</option>
							<option value="Baptist Conference of the Philippines">Baptist Conference of the Philippines</option>
							<option value="Bible Baptist Church">Bible Baptist Church</option>
							<option value="Bread of Life Ministries">Bread of Life Ministries</option>
							<option value="Buddhist">Buddhist</option>
							<option value="Cathedral of Praise, Incorporated">Cathedral of Praise, Incorporated</option>
							<option value="Charismatic Full Gospel Ministries">Charismatic Full Gospel Ministries</option>
							<option value="Christ the Living Stone Fellowship">Christ the Living Stone Fellowship</option>
							<option value="Christian and Missionary Alliance Church of the Philippines">Christian and Missionary Alliance Church of the Philippines</option>
							<option value="Christian Missions in the Philippines">Christian Missions in the Philippines</option>
							<option value="Church of Christ">Church of Christ</option>
							<option value="Church of God World Mission in the Philippines">Church of God World Mission in the Philippines</option>
							<option value="Church of Jesus Christ of the Latter Day Saints">Church of Jesus Christ of the Latter Day Saints</option>
							<option value="Church of the Nazarene">Church of the Nazarene</option>
							<option value="Christian Reformed Church in the Philippines, Incorporated">Christian Reformed Church in the Philippines, Incorporated</option>
							<option value="Conservative of the Philippine Baptist Church">Conservative of the Philippine Baptist Church</option>
							<option value="BuddhConvention of the Philippine Baptist Churchst">Convention of the Philippine Baptist Church</option>
							<option value="Crusaders of the Divine Church of Christ, Incorporated">Crusaders of the Divine Church of Christ, Incorporated</option>
							<option value="Door of Faith">Door of Faith</option>
							<option value="Evangelical Christian Outreach Foundation">Evangelical Christian Outreach Foundation</option>
							<option value="Evangelical Free Church of the Philippines">Evangelical Free Church of the Philippines</option>
							<option value="Evangelical Presbyterian Church">Evangelical Presbyterian Church</option>
							<option value="Faith Tabernacle Church (Living Rock Ministries)">Faith Tabernacle Church (Living Rock Ministries)</option>
							<option value="Filipino Assemblies of the First Born, Incorporated">Filipino Assemblies of the First Born, Incorporated</option>
							<option value="Foursquare Gospel Church in the Philippines">Foursquare Gospel Church in the Philippines</option>
							<option value="Free Believers in Christ Fellowship">Free Believers in Christ Fellowship</option>
							<option value="Free Methodist Church">Free Methodist Church</option>
							<option value="Free Mission in the Philippines, Incorporated">Free Mission in the Philippines, Incorporated</option>
							<option value="General Baptist Churches of the Philippines">General Baptist Churches of the Philippines</option>
							<option value="Good News Christian Churches">Good News Christian Churches</option>
							<option value="Higher Ground Baptist Mission">Higher Ground Baptist Mission</option>
							<option value="IEMELIF Reform Movement">IEMELIF Reform Movement</option>
							<option value="Iglesia Evangelica Unida de Cristo">Iglesia Evangelica Unida de Cristo</option>
							<option value="Iglesia Evangelista Methodista en Las Islas Filipinas (IEMELIF)">Iglesia Evangelista Methodista en Las Islas Filipinas (IEMELIF)</option>
							<option value="Iglesia Filipina Independiente">Iglesia Filipina Independiente</option>
							<option value="Iglesia ni Cristo">Iglesia ni Cristo</option>
							<option value="Iglesia sa Dios Espiritu Santo, Incorporated">Iglesia sa Dios Espiritu Santo, Incorporated</option>
							<option value="Independent Baptist Churches of the Philippines">Independent Baptist Churches of the Philippines</option>
							<option value="Independent Baptist Missionary Fellowship">Independent Baptist Missionary Fellowship</option>
							<option value="International One Way Outreach">International One Way Outreach</option>
							<option value="Islam">Islam</option>
							<option value="Jehovah's Witness">Jehovah's Witness</option>
							<option value="Jesus Christ Saves Global Outreach">Jesus Christ Saves Global Outreach</option>
							<option value="Jesus is Alive Community, Incorporated">Jesus is Alive Community, Incorporated</option>
							<option value="Jesus is Lord Church">Jesus is Lord Church</option>
							<option value="Jesus Reigns Ministries">Jesus Reigns Ministries</option>
							<option value="Love of Christ International Ministries">Love of Christ International Ministries</option>
							<option value="Lutheran Church of the Philippines">Lutheran Church of the Philippines</option>
							<option value="Miracle Life Fellowship International">Miracle Life Fellowship International</option>
							<option value="Miracle Revival Church of the Philippines">Miracle Revival Church of the Philippines</option>
							<option value="Missionary Baptist Churches of the Philippines">Missionary Baptist Churches of the Philippines</option>
							<option value="Pentecostal Church of God Asia Mission">Pentecostal Church of God Asia Mission</option>
							<option value="Philippine Benevolent Missionaries Association">Philippine Benevolent Missionaries Association</option>
							<option value="Philippine Ecumenical Christian Church">Philippine Ecumenical Christian Church</option>
							<option value="Philippine Episcopal Churche">Philippine Episcopal Churche</option>
							<option value="Philippine Evangelical Mission">Philippine Evangelical Mission</option>
							<option value="Philippine General Council of the Assemblies of God">Philippine General Council of the Assemblies of God</option>
							<option value="Philippine Good News Ministries">Philippine Good News Ministries</option>
							<option value="Philippine Grace Gospel">Philippine Grace Gospel</option>
							<option value="Philippine Independent Catholic Church">Philippine Independent Catholic Church</option>
							<option value="Philippine Missionary Fellowship">Philippine Missionary Fellowship</option>
							<option value="Philippine Pentecostal Holiness Church">Philippine Pentecostal Holiness Church</option>
							<option value="Potter's House Christian Center">Potter's House Christian Center</option>
							<option value="Presbyterian Church in the Philippines">Presbyterian Church in the Philippines</option>
							<option value="Roman Catholic, including Catholic Charismatic">Roman Catholic, including Catholic Charismatic</option>
							<option value="Salvation Army, Philippines">Salvation Army, Philippines</option>
							<option value="Seventh Day Adventist">Seventh Day Adventist</option>
							<option value="Southern Baptist Church">Southern Baptist Church</option>
							<option value="Take the Nation for Jesus Global Ministries (Corpus Christi)">Take the Nation for Jesus Global Ministries (Corpus Christi)</option>
							<option value="Things to Come">Things to Come</option>
							<option value="UNIDA Evangelical Church">UNIDA Evangelical Church</option>
							<option value="United Church of Christ in the Philippines">United Church of Christ in the Philippines</option>
							<option value="United Evangelical Church of the Philippines (Chinese)">United Evangelical Church of the Philippines (Chinese)</option>
							<option value="Union Espiritista Cristiana de Filipinas, Incorporated">Union Espiritista Cristiana de Filipinas, Incorporated</option>
							<option value="United Methodists Church">United Methodists Church</option>
							<option value="United Pentecostal Church (Philippines), Incorporated">United Pentecostal Church (Philippines), Incorporated</option>
							<option value="Universal Pentecostal Church">Universal Pentecostal Church</option>
							<option value="Victory Chapel Christian Fellowship">Victory Chapel Christian Fellowship</option>
							<option value="Watch Tower Bible and Tract Society of the Philippines, Incorporated (Jehovah's Witnesses)">Watch Tower Bible and Tract Society of the Philippines, Incorporated (Jehovah's Witnesses)</option>
							<option value="Way of Salvation">Way of Salvation</option>
							<option value="Way of Salvation Church Incorporated, The">Way of Salvation Church Incorporated, The</option>
							<option value="Wesleyan Church, The">Wesleyan Church, The</option>
							<option value="Word for the World">Word for the World</option>
							<option value="Word International Ministries, Incorporated">Word International Ministries, Incorporated</option>
							<option value="World Missionary Evangelism">World Missionary Evangelism</option>
							<option value="Worldwide Church of God">Worldwide Church of God</option>
							<option value="Zion Christian Community Church">Zion Christian Community Church</option>
							<option value="Other Baptists">Other Baptists</option>
							<option value="Other Evangelical Churches">Other Evangelical Churches</option>
							<option value="Other Methodists">Other Methodists</option>
							<option value="Other Protestants">Other Protestants</option>
							<option value="Tribal religions">Tribal religions</option>
							<option value="Other religious affiliations">Other religious affiliations</option>
						</select>
					</div>
				</div>
			</form>
			</div>
		`
		const contact_information = `
			<div class="container text12">
				<form>
					<h6 class="col-12 p-0 font-weight-bold mb-2">Contact Information</h6>
					<div class="form-row">
					<div class="form-group col-md-3 c-mb-sm-1">
							<label for="mobile_number">Mobile Contact Number <span class="text-red"> *</span></label>
							<input type="number" class="form-control form-control-sm border bg-white rounded-0 border-dark" id="mobile_number" placeholder="Enter your 11 digit mobile number">
						</div>
						<div class="form-group col-md-3 c-mb-sm-1">
							<label for="home_phone">Home Phone Number<span class="text-red"></span></label>
							<input type="number" class="form-control form-control-sm border bg-white rounded-0 border-dark" id="home_phone" placeholder="Enter your Home Phone Number">
						</div>
						<div class="form-group col-md-3 ">
							<label for="email">Personal Email Address <span class="text-red"> *</span></label>
							<input type="email" class="form-control form-control-sm border bg-white rounded-0 border-dark" id="email" placeholder="Enter your Email Address">
						</div>
					</div>
				</form>
			</div>
		`
		const home_address = `
			<div class=" container text12">
				<form>
					<h6 class="col-12 p-0 font-weight-bold mb-2">Home Address</h6>
					<div class="form-row">
					<div class="form-group col-md-9  c-mb-sm-1">
						<label for="address">Street Address (House No., Street, Subdivision/Village, Sitio, Purok) <span class="text-red"> *</span></label>
						<input type="text" class="form-control form-control-sm border bg-white rounded-0 border-dark" id="address" placeholder="Ex. block 1 lot 1 1st street ABC Subdivision">
					</div>
					</div>
					<div class="form-row">
						<div class="form-group col-md-3 ">
							<label for="province" class="col-12 p-0">Province <span class="text-red"> *</span></label>
							<select id="province" class="text-gray p-1 col-12 border bg-white border-dark c-p-5 select_box">
								<option selected disabled>Select Province</option>
							</select>
						</div>

						<div class="form-group col-md-3 c-mb-sm-1">
							<label for="city" class="col-12 p-0">Municipality/City <span class="text-red"> *</span></label>
							<select id="city" class="text-gray p-1 col-12 border bg-white border-dark c-p-5 select_box">
								<option selected disabled>Select Municipality/City</option>
							</select>
						</div>

						<div class="form-group col-md-3 c-mb-sm-1">
							<label for="barangay" class="col-12 p-0">Barangay <span class="text-red"> *</span></label>
							<select id="barangay" class="text-gray p-1 col-12 border bg-white border-dark c-p-5 select_box">
								<option selected disabled>Select Barangay</option>
							</select>
						</div>						
					</div>
				</form>
			</div>
		`
		const parents =`
		<div class="container text12">
			<form>
				<h6 class="col-12 p-0 font-weight-bold mb-2">Parents</h6>
				<div class="form-row">
					<div class="form-group col-md-2 c-mb-sm-1">
						<label for="living" class="col-12 p-0">Are you living with your parents?</label>
						<select id="living" class="text-gray p-1 col-12 border bg-white border-dark c-p-5">
							<option value="yes" selected>Yes</option>
							<option value="no">No</option>
						</select>
					</div>
				</div>

				<div class="form-row father">
				<div class="form-group col-md-3 c-mb-sm-1">
					<label for="father_name">Father's Last Name <span class="text-red"> *</span></label>
					<input type="text" class="form-control form-control-sm border bg-white rounded-0 border-dark" id="father_name" placeholder="Enter your Father's Last Name">
				</div>
				<div class="form-group col-md-3 c-mb-sm-1">
					<label for="father_first_name">Father's First Name <span class="text-red"> *</span></label>
					<input type="text" class="form-control form-control-sm border bg-white rounded-0 border-dark" id="father_first_name" placeholder="Enter your Father's First Name ">
				</div>
				<div class="form-group col-md-3 c-mb-sm-1">
					<label for="father_middle_name">Father's Middle Name <span class="text-red"> *</span></label>
					<input type="text" class="form-control form-control-sm border bg-white rounded-0 border-dark" id="father_middle_name" placeholder="Enter your Father's Middle Name">
				</div>
				<div class="form-group col-md-2 c-mb-sm-1">
					<label for="father_suffix" class="col-12 p-0">Suffix </label>
                    <input type="text" class="check_value form-control form-control-sm border bg-white rounded-0 border-dark" id="father_suffix" placeholder="Suffix">
				</div>
				</div>

				<div class="form-row mother">
					<div class="form-group col-md-3 c-mb-sm-1">
						<label for="mother_name">Mother's Last Name <span class="text-red"> *</span></label>
						<input type="text" class="form-control form-control-sm border bg-white rounded-0 border-dark" id="mother_name" placeholder="Enter your Mother's Last Name">
					</div>
					<div class="form-group col-md-3 c-mb-sm-1">
						<label for="mother_first_name">Mother's First Name <span class="text-red"> *</span></label>
						<input type="text" class="form-control form-control-sm border bg-white rounded-0 border-dark" id="mother_first_name" placeholder="Enter your Mother's First Name *">
					</div>
					<div class="form-group col-md-3">
						<label for="mother_middle_name">Mother's Middle Name <span class="text-red"> *</span></label>
						<input type="text" class="form-control form-control-sm border bg-white rounded-0 border-dark" id="mother_middle_name" placeholder="Enter your Mother's Middle Name">
					</div>
				</div>
			</form>
			</div>
		`
		const guardian = `
			<div class="container guardian text12">
				<form>
					<h6 class="col-12 p-0 font-weight-bold mb-2">Guardian</h6>
					<div class="form-row">
						<div class="form-group col-md-3 c-mb-sm-1">
							<label for="guardian_name">Full Name of Guardian<span class="text-red"> *</span></label>
							<input type="text" class="form-control form-control-sm border bg-white rounded-0 border-dark" id="guardian_name" placeholder="Enter your Guardian's Full Name">
						</div>
						<div class="form-group col-md-3 c-mb-sm-1">
							<label for="relationship">Relationship <span class="text-red"> *</span></label>
							<input type="text" class="form-control form-control-sm border bg-white rounded-0 border-dark" id="relationship" placeholder="Enter Relationship">
						</div>
						<div class="form-group col-md-3 ">
							<label for="guardian_number">Contact Number <span class="text-red"> *</span></label>
							<input type="number" class="form-control form-control-sm border bg-white rounded-0 border-dark" id="guardian_number" placeholder="Enter Contact Number ">
						</div>
					</div>
					<div class="form-row">
		                <div class="form-group col-md-9  d-flex">
		                    <div class="col-md-6 mr-1 p-0">
		                        <label for="reason">Reason for Guardianship<span class="text-red"> *</span></label>
		                        <input type="text" class="py-1 check_value form-control form-control-sm border bg-white rounded-0 border-dark" id="reason" placeholder="Enter Reason for Guardianship">
		                    </div>
		                    <div class="col-md-6 p-0" >
		                        <label for="guardian_name">Supporting documents for Guardianship<span class="text-red"> *</span></label>
		                        <input type="file" name="img[]" class="file " id = "guardianProof">
		                        <div class="input-group mb-0">
		                          <input type="text" class="form-control py-1 check_value form-control form-control-sm border bg-white rounded-0 border-dark" disabled placeholder="Upload File" aria-label="Upload File" aria-describedby="basic-addon1">
		                          <div class="input-group-append">
		                            <div class="browse input-group-text btn btn-primary text12" id="basic-addon2"><i class="fas fa-search"></i>  Browse</div>
		                          </div>
		                        </div>                       
                                <p class="mb-0 text12">- Maximum file size: 20MB</p>
		                        <p class="text12">- Accepted file types: jpg, png, pdf</p>
		                    </div>
		                </div>
		            </div>
				</form>
				
			</div>
		`
		const button = `
			<div class="d-flex justify-content-center text12">
				<div class=" back_to_admission back cursor-pointer border boder-0 mx-2 text-center py-1 px-3">Back</div>
				<div class=" go_to_background back cursor-pointer border boder-0 mx-2 text-center py-1 px-3 cursor-pointer border btn-primary boder-0 mr-2 py-1 px-3">Continue</div>
            </div>
		`
		var button_footer = `
		<div class="container text12">
			<div class="footer mt-5">
				<hr>
				<p class="p-5">© Philippine College of Criminology</p>
				<hr>
			</div>
		</div>
		`
		


	    // all html
	    const Admission = `
	  
	        <div id="personal_info">
	            ${personal_info_Tab + header +  student_name1 + personal_information2 + contact_information + home_address + parents + guardian + button + button_footer}
	        </div>
			
	    `
		$('Body').append(Admission);


   

	
		// on reload check the page tracker

		// capture the value of input personal information
		//get the value of are you living with your parents
		$('.guardian').hide()
		$('#living').change( () => {
			const living_with_parents = $('#living').val()
			console.log(living_with_parents)
			if(living_with_parents == "yes"){
				$('.guardian').hide()
				$('.father, .mother').show()
			}else{
				$('.guardian').show()
				$('.father, .mother').hide()
			}
		})

		//upload file
		$(document).on("click", ".browse", function() {
		  var file = $(this)
		    .parent()
		    .parent()
		    .parent()
		    .find(".file");
		  file.trigger("click");
		});
		$(document).on("change", ".file", function() {
		  $(this)
		    .parent()
		    .find(".form-control")
		    .val(
		      $(this)
		        .val()
		        .replace(/C:\\fakepath\\/i, "")
		    );
		});

		//Location API
		$('#province').change(function() {
			//var province = $("#province").val();
			var province = $(this).children(":selected").attr("id");	
			$('#city')
			.empty()
			.append($("<option selected value='not-selected'>Select Municipality/City</option>"));
			fetch('https://api.psgc.abakadastudios.com/api/provinces/'+province+'?per_page=all&include=municipalities,cities')
			.then(response => response.json())
			.then(data => {
				data.data.cities.forEach(function(value) {
					$('#city')
					.append($("<option></option>")
					.attr("value", value.name)
					.attr("id", value.code)
					.text(value.name)); 
				}),
				data.data.municipalities.forEach(function(value) {
					$('#city')
					.append($("<option></option>")
					.attr("value", value.name)
					.attr("id", value.code)
					.text(value.name)); 
				});
				
			});
		})

		$('#city').change(function() {
			
			var city = $(this).children(":selected").attr("id");
			
			$('#barangay')
			.empty()
			.append($("<option selected value='not-selected'>Select Barangay</option>"));
		
			fetch('https://api.psgc.abakadastudios.com/api/municipalities/'+city+'?per_page=all&include=barangays')
			.then(response => response.json())
			.then(data => {
				data.data.barangays.forEach(function(value) {
					$('#barangay')
					.append($("<option></option>")
					.attr("value", value.name)
					.text(value.name)); 
				})
			})
			.catch(function() {
				fetch('https://api.psgc.abakadastudios.com/api/cities/'+city+'?per_page=all&include=barangays')
				.then(response => response.json())
				.then(data => {
					data.data.barangays.forEach(function(value) {
						$('#barangay')
						.append($("<option></option>")
						.attr("value", value.name)
						.text(value.name)); 
					})
				})
			});
		})				
		//End Location API	
		// variables
		var first_name =""
		var last_name = ""
		var middle_name = ""
		var name_suffix = ""
		var gender = ""
		var birthday = ""
		var Age_as = ""
		var ethnic = ""
		var religion = ""
		var mother_tongue =""
		var mobile_number =""
		var home_phone =""
		var email =""
		var address =""
		var barangay =""
		var city =""
		var province =""
		var father_name =""
		var father_first_name =""
		var father_middle_name =""
		var father_suffix =""
		var mother_name =""
		var mother_first_name =""
		var mother_middle_name =""
		var guardian_name =""
		var relationship =""
		var guardian_number =""
		
		function validateEmail($email) {
	        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	        console.log($email);
	        return emailReg.test($email);
	    }
			$('input#birthday').on('input',function(e){
			const d = new Date();
			var today = new Date("June, "+d.getFullYear());
			var birthDate = new Date(this.value);
			var age = today.getFullYear() - birthDate.getFullYear();
			var m = today.getMonth() - birthDate.getMonth();
			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
			{
				age--;
			}
			
			if(age > 0) {
				$("input#age_as").val(age);
			}
			else {
				$("input#age_as").val('');
			}
			
		 });

		function getAge(dateString) 
		{
			var today = new Date();
			var birthDate = new Date(dateString);
			var age = today.getFullYear() - birthDate.getFullYear();
			var m = today.getMonth() - birthDate.getMonth();
			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
			{
				age--;
			}
			return age;
		}

		$('.check_value').keyup( () => {
			first_name = $('#first_name').val();
			last_name = $('#last_name').val();
			middle_name = $('#middle_name').val();
			mother_tongue = $('#mother_tongue').val();
			Age_as = $('#age_as').val();
		})
		$('#name_suffix, #gender, #birthday, #religion, #ethnic, #religion, #ethnic').change( () => {

		})
		$('.go_to_background').click( () => {
			name_suffix = $('#name_suffix').val();
			gender = $('#gender').val();
			birthday = $('#birthday').val();
			ethnic = $('#ethnic').val();
			religion = $('#religion').val();
			mobile_number = $('#mobile_number').val();
	        home_phone = $('#home_phone').val();
	        email = $('#email').val();
	        address = $('#address').val();
	        barangay = $('#barangay').val();
	        city = $('#city').val();
	        province = $('#province').val();
	        father_name = $('#father_name').val();
	        father_first_name = $('#father_first_name').val();
	        father_middle_name = $('#father_middle_name').val();
	        father_suffix = $('#father_suffix').val();
	        mother_name = $('#mother_name').val();
	        mother_first_name = $('#mother_first_name').val();
	        mother_middle_name = $('#mother_middle_name').val();
	        guardian_name = $('#guardian_name').val();
	        relationship = $('#relationship').val();
	        guardian_number = $('#guardian_number').val();
	        living = $('#living').val();
	        reason = $('#reason').val();
	        guardianProof = $('#guardianProof').val();
	       
	        frappe.web_form.set_value('first_name', first_name)
            frappe.web_form.set_value('last_name', last_name)
            frappe.web_form.set_value('middle_name', middle_name)
            frappe.web_form.set_value('suffix', name_suffix)
            frappe.web_form.set_value('gender', gender)
            frappe.web_form.set_value('birthday', birthday)
            frappe.web_form.set_value('age_as_first_friday_of_june', Age_as)
            frappe.web_form.set_value('mother_tongue', mother_tongue)
            frappe.web_form.set_value('ip__ethic_group_', ethnic)
            frappe.web_form.set_value('religion', religion)
            frappe.web_form.set_value('mobile_contact_number', mobile_number)
            frappe.web_form.set_value('mobile_contact_number', mobile_number)
            frappe.web_form.set_value('home_phone_number', home_phone)
            frappe.web_form.set_value('personal_email_address', email)
            frappe.web_form.set_value('street_address_house_no_street_subdivisionvillage_sitio_purok', address)
            frappe.web_form.set_value('barangay', barangay)
            frappe.web_form.set_value('municipalitycity', city)
            frappe.web_form.set_value('province', province)
            frappe.web_form.set_value('fathers_last_name', father_name)
            frappe.web_form.set_value('father_first_name', father_first_name)
            frappe.web_form.set_value('fathers_middle_name', father_middle_name)
            frappe.web_form.set_value('suffix2', father_suffix)
            frappe.web_form.set_value('mothers_last_name', mother_name)
            frappe.web_form.set_value('mothers_first_name', mother_first_name)
            frappe.web_form.set_value('mothers_middle_name', mother_middle_name)
            frappe.web_form.set_value('full_name_of_guardian', guardian_name)
            frappe.web_form.set_value('relationship', relationship)
            frappe.web_form.set_value('contact_number', guardian_number)
            frappe.web_form.set_value('reason_for_guardianship', reason)
         
            //disable required
        	if(living == "yes"){
            	frappe.web_form.set_df_property("full_name_of_guardian", "reqd", 0)
				frappe.web_form.set_df_property("relationship", "reqd", 0)
				frappe.web_form.set_df_property("contact_number", "reqd", 0)
				frappe.web_form.set_df_property("reason_for_guardianship", "reqd", 0)
				$('.father, .mother').show()
            }else{
            	frappe.web_form.set_df_property("fathers_last_name", "reqd", 0)
				frappe.web_form.set_df_property("father_first_name", "reqd", 0)
				frappe.web_form.set_df_property("fathers_middle_name", "reqd", 0)
				frappe.web_form.set_df_property("mothers_first_name", "reqd", 0)
				frappe.web_form.set_df_property("mothers_last_name", "reqd", 0)
				frappe.web_form.set_df_property("mothers_middle_name", "reqd", 0)
				$('.father, .mother').attr("style", "display: none !important")
            }
		   	function validateEmail(emailstring) 
		    {
		        var re = /\S+@\S+\.\S+/;
		        return re.test(emailstring);
		    }
		    const email_validatoin = validateEmail(email)
		    if(mobile_number.length && email_validatoin && guardianProof){
				if( mobile_number.length != 11 || email_validatoin == false){
			    	if(email_validatoin == false){
			    		frappe.throw("Invalid Email")
			    	}else if(mobile_number.length != 11){
			    		frappe.throw("Invalid Mobile Number, Must be 11 Digit")
			    	}else if(guardianProof == ""){
						frappe.throw("Supporting documents for Guardianship is  Required")
			    	}
			    }else{
			    	console.log("saved")
			    	setTimeout(function () {
						frappe.web_form.save()
					}, 1000);
			    }
		    }else{
		    	setTimeout(function () {
					frappe.web_form.save()
				}, 1000);
		    }
		})
	},
	frappe.web_form.after_save = () => {
		location.replace('/educational-background-form')
	}
// })



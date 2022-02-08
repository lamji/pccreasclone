// frappe.ready(function() {
	frappe.web_form.after_load = () => {
	    $(".navbar-brand").css("pointer-events", "none");
        const url_base = window.location.origin
        const Tab = `
            <div class="container tab mb-5 text12">
            <h3 class="my-5 font-weight-bold">Student Application Form</h3>
            <div class="row">
                <div class="col-md-10">
                    <div class=" d-flex justify-content-center">
                        <div class="col text-center tab-line-active">
                            <img src="https://eas.test.pccr.edu.ph/files/Active%20-%20Admission.png" class="icon-tab">
                            <p class="tab_label">Admission</p>
                        </div>
                        <div class="col text-center tab-line">
                            <img src="https://eas.test.pccr.edu.ph/files/Inactive%20-%20Application.png" class="icon-tab">
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
			console.log(r)
		})

		fetch(url_base + '/api/resource/Academic Department?fields=["academic_department", "name"]')
		.then(response => response.json())
		.then(data => {
			data.data.forEach(function(value) {   
				$('#acadcDept')
				.append($("<option></option>")
				.attr("value", value.name)
				.text(value.academic_department)); 
			});
		});


		`
		`
		var newHTML = `
		<div class="container">
            <div class="row">
                <p class="">Admission Information</p>
            </div>
            <div class= "row">
                <p class="text12">Please identify first what Academic Department you want to be admitted.</p>
            </div>
            <p class="text-10 text-red">*Required fields</p>
            <div class="row px-0">
                <div class="col-md-12 text12 pl-0">
                    <label class="inputLabel mb-0 p-0" for="psSchoolName">Student Type<span class="text-red"> *</span></label>
                    <input class="longInput form-control mb-2 form-control-sm border bg-white rounded-0 border-secondary" type="text" placeholder="Transferee" id="student_type" disabled value="Transferee"></input>
                    <label class="mb-0 p-0" for="acadDept">Academic Department<span class="text-red"> *</span></label>
                    <select id="acadcDept" class="mb-2  text-gray col-md-12 border bg-white border-dark c-p-5" aria-label="Default select example">
                        <option value="not-selected">Select Academic Department</option>
                    </select>
                    <label class="mb-0 p-0" for="program">Program<span class="text-red"> *</span></label>
					<select id="program" class="mb-2 text-gray col-md-12 border bg-white border-dark c-p-5" aria-label="Default select example">
						<option value="not-selected">Select Program</option>
					</select>
					<div>
                    <div class="row d-flex justify-content-center">
					    <div id="back_to_step1" class="col-lg-1 col-sm-3 back cursor-pointer text-center border boder-0 my-2 mx-2 py-1 px-3">Back</div>
                        <div id="show-button" class="col-lg-1 col-sm-3 continue cursor-pointer text-center border btn-primary boder-0 my-2 mr-2 py-1 px-3">Continue</div>
                        <div id="hide-button" class="col-lg-1 col-sm-3 cursor-not-allowed text-center border btn-secondary boder-0 my-2 mr-2 py-1 px-3">Continue</div>
                    </div>
                </div>

                <div class="col-md-8 text12 pl-0" style="display: none;">
                    <h6 class="font-weight-bold mb-0">Curriculum</h6>
                    <table class="table table-bordered table-striped mb-0">
                        <thead class="">
                            <tr>
                                <th class="th-code">Subject Code</th>
                                <th class="">Title</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="table-wrapper-scroll-y my-custom-scrollbar">
                        <table class="table table-bordered table-striped mb-0">
                            <tbody class="table-body">
                            
                            </tbody>
                        </table>
                    </div>
					<div class="d-flex sm-button justify-content-center">
						<div id="back_to_step1" class="back cursor-pointer border boder-0 mx-2 py-1 px-3">Back</div>
						<div id="show-button" class=" sm-show-button continue cursor-pointer border btn-primary boder-0 mr-2 py-1 px-3">Continue</div>
						<div id="hide-button" class=" sm-hide-buttoncursor-not-allowed border btn-secondary boder-0 mr-2 py-1 px-3">Continue</div>
					</div>
                </div>
            </div>
            <div class="container text12">
			<div class="footer mt-5">
				<hr>
				<p class="p-5">© Philippine College of Criminology</p>
				<hr>
			</div>
		</div>
        </div>
    </div>
		
	`
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
						<input type="date" id="birthday" max="1979-12-31" class="form-control form-control-sm border bg-white rounded-0 border-dark" id="birthday" placeholder="Enter Birthday">
					</div>
					<div class="form-group col-md-3 c-mb-sm-1">
						<label for="age_as">Age as of the 1st Friday of June <span class="text-red"> *</span></label>
						<input type="number" id="age_as" class="check_value form-control form-control-sm border bg-white rounded-0 border-dark" >
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
							<label for="home_phone">Home Phone Number<span class="text-red"> *</span></label>
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
						<label for="address">Street Address (House No., Street, Subdivision/Village, Sitio, Purok)</label>
						<input type="text" class="form-control form-control-sm border bg-white rounded-0 border-dark" id="address" placeholder="Ex. block 1 lot 1 1st street ABC Subdivision">
					</div>
					</div>
					<div class="form-row">
						<div class="form-group col-md-3 c-mb-sm-1">
							<label for="barangay" class="col-12 p-0">Barangay <span class="text-red"> *</span></label>
							<select id="barangay" class="text-gray p-1 col-12 border bg-white border-dark c-p-5 select_box">
								<option selected disabled>Select Barangay</option>
								<option value="Barangay 1">Barangay 1</option>
								<option value="Barangay 2">Barangay 2</option>
								<option value="Barangay 3">Barangay 3</option>
								<option value="Barangay 4">Barangay 4</option>
							</select>
						</div>
						<div class="form-group col-md-3 c-mb-sm-1">
							<label for="city" class="col-12 p-0">Municipality/City <span class="text-red"> *</span></label>
							<select id="city" class="text-gray p-1 col-12 border bg-white border-dark c-p-5 select_box">
								<option selected disabled>Select Municipality/City</option>
								<option value="Angeles">Angeles</option>
								<option value="Bacolod">Bacolod</option>
                                <option value="Baguio">Baguio</option>
								<option value="Butuan">Butuan</option>
                                <option value="Cagayan de Oro">Cagayan de Oro</option>
								<option value="Caloocan">Caloocan</option>
                                <option value="Angeles">Cebu City</option>
								<option value="Bacolod">Davao City</option>
							</select>
						</div>
						<div class="form-group col-md-3 ">
							<label for="province" class="col-12 p-0">Province <span class="text-red"> *</span></label>
							<select id="province" class="text-gray p-1 col-12 border bg-white border-dark c-p-5 select_box">
								<option selected disabled>Select Province</option>
								<option value="Abra">Abra</option>
								<option value="Agusan del Norte">Agusan del Norte</option>
                                <option value="Agusan del Sur">Agusan del Sur</option>
								<option value="Aklan">Aklan</option>
                                <option value="Albay">Albay</option>
								<option value="Antique">Antique</option>
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

				<div class="form-row">
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

				<div class="form-row">
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
		                        <label for="guardian_name">Reason for Guardianship<span class="text-red"> *</span></label>
		                        <input type="text" class="py-1 check_value form-control form-control-sm border bg-white rounded-0 border-dark" id="guardian_name" placeholder="Enter Reason for Guardianship">
		                    </div>
		                    <div class="col-md-6 p-0" >
		                        <label for="guardian_name">Supporting documents for Guardianship<span class="text-red"> *</span></label>
		                        <input type="file" name="img[]" class="file ">
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
		const education_background_Tab = `
			<div class="container tab mb-5 text12">
			<h3 class="my-5 font-weight-bold">Student Application Form</h3>
			<div class="row">
				<div class="col-md-10">
					<div class=" d-flex justify-content-center">
						<div class="col text-center tab-line-done" id="back_to_admission">
							<img src="https://eas.test.pccr.edu.ph/files/Completed.png" class="icon-tab">
							<p class="tab_label">Admission</p>
						</div>
						<div class="col text-center tab-line">
							<img src="https://eas.test.pccr.edu.ph/files/Completed.png" class="icon-tab">
							<p class="tab_label">Personal Information</p>
						</div>
						<div class="col text-center tab-line-active">
							<img src="https://eas.test.pccr.edu.ph/files/Active%20-%20Application.png" class="icon-tab">
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
		var education_background_header = `
		<div class="container">
			<h5 class="headerLabel font-weight-bold">Educational Background</h5>
			
		</div>
		`
        //updated by jick from this line to 835
		var education_background_pre_school = `
		<div class="container">
			<form>
				<div class="preSchool text12 form-group">
					<h6 class="inputGroup"> <b>Pre School</b> </h6>
					<div class="custom-table my-4">
						<table class="">
							<thead class="">
							<tr class="tr-custom">
								<th class="table-school">School</th>
								<th>Year Started</th>
								<th>Year Ended</th>
								<th>Province</th>
								<th>City</th>
							</tr>
							</thead>
							<tbody class="hs_table_body_1">
								
							</tbody>
						</table>
					
					</div>
					<div class="form-row">
						<div class="col-md-4">
							<label class="inputLabel" for="HsSchoolName">School Name</label>
							<input class="hs_get_value longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="HsSchoolName" name="psSchoolName" placeholder="Enter School Name" > </input>
						</div>

						<div class="col">
							<label class="inputLabel" for="HsYearStart">Year Started</label>
							<input id="HsYearStart" max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date"  name="psYearStart" placeholder="Date"> </input>
						</div>

						<div class="col">
							<label class="inputLabel" for="HsYearEnd">Year End</label>
							<input id="HsYearEnd" max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" name="psYearEnd" placeholder="date""> </input>
						</div>

						<div class="col">
							<label class="inputLabel" for="HsProvince">Province</label>
							<select id="HsProvince" class="text-gray col-12 border bg-white border-dark c-p-5" name="psProvince"  >
								<option value="">Select province</option>
								<option value="Abra">Abra</option>
								<option value="Agusan del Norte">Agusan del Norte</option>
                                <option value="Agusan del Sur">Agusan del Sur</option>
								<option value="Aklan">Aklan</option>
                                <option value="Albay">Albay</option>
								<option value="Antique">Antique</option>
							</select>
						</div>

						<div class="col">
							<label class="inputLabel" for="HsCity">City</label>
							<select id="HsCity" class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="psCity" >
								<option value="">Select City</option>
								<option value="Angeles">Angeles</option>
								<option value="Bacolod">Bacolod</option>
                                <option value="Baguio">Baguio</option>
								<option value="Butuan">Butuan</option>
                                <option value="Cagayan de Oro">Cagayan de Oro</option>
								<option value="Caloocan">Caloocan</option>
                                <option value="Angeles">Cebu City</option>
								<option value="Bacolod">Davao City</option>
							</select>
						</div>
						
					</div>
					<div class="py-2 add_school" style="width:25px;">
							<div id="hs_add_button" class="cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
					</div>
				</div>
			</form>
			</div>
		`
		var education_background_pre_school2 = `
			<div class="container">
			<form>
			<div class="preSchool text12 form-group">
				<h6 class="inputGroup"> <b>Grade School</b> </h6>
				<div class="custom-table my-4">
					<table class="">
						<thead class="">
						<tr class="tr-custom">
							<th class="table-school">School</th>
							<th>Year Started</th>
							<th>Year Ended</th>
							<th>Grade Started</th>
							<th>Grade Ended</th>
							<th>Province</th>
							<th>City</th>
						</tr>
						</thead>
						<tbody class="hs_table_body_2">
							
						</tbody>
					</table>
				</div>
				<div class="form-row">
					<div class="col-md-2">
						<label class="inputLabel" for="GsSchoolName">School Name<span class="text-red"> *</span></label>
						<input class="gs_get_value longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="GsSchoolName" name="GsSchoolName" placeholder="Enter School Name"> </input>
					</div>

					<div class="col">
						<label class="inputLabel" for="GsYearStart">Year Started<span class="text-red"> *</span></label>
						<input id="GsYearStart" max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date"  name="GsYearStart" placeholder="Date"> </input>
					</div>

					<div class="col">
						<label class="inputLabel" for="GsYearEnd">Year End<span class="text-red"> *</span></label>
						<input id="GsYearEnd" max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" name="GsYearEnd" placeholder="date"> </input>
					</div>

					<div class="col">
						<label class="inputLabel" for="GsStarted">Grade Started<span class="text-red"> *</span></label>
						<select id="GsStarted" class="text-gray col-12 border bg-white border-dark c-p-5" name="GsProvince"  >
							<option value="select">Select Grade Started</option>
							<option value="Grade 1">Grade 1</option>
							<option value="Grade 2">Grade 2</option>
							<option value="Grade 3">Grade 3</option>
							<option value="Grade 4">Grade 4</option>
							<option value="Grade 5">Grade 5</option>
							<option value="Grade 6">Grade 6</option>
						</select>
					</div>
					<div class="col">
						<label class="inputLabel" for="GsEnded">Grade Ended<span class="text-red"> *</span></label>
						<select id="GsEnded" class="text-gray col-12 border bg-white border-dark c-p-5" name="GsProvince"  >
							<option value="select">Select Grade Ended</option>
							<option value="Grade 1">Grade 1</option>
							<option value="Grade 2">Grade 2</option>
							<option value="Grade 3">Grade 3</option>
							<option value="Grade 4">Grade 4</option>
							<option value="Grade 5">Grade 5</option>
							<option value="Grade 6">Grade 6</option>
						</select>
					</div>

					<div class="col">
						<label class="inputLabel" for="GsProvince">Province<span class="text-red"> *</span></label>
						<select id="GsProvince" class="text-gray col-12 border bg-white border-dark c-p-5" name="GsProvince"  >
							<option value="">Select province</option>
							<option value="Abra">Abra</option>
							<option value="Agusan del Norte">Agusan del Norte</option>
							<option value="Agusan del Sur">Agusan del Sur</option>
							<option value="Aklan">Aklan</option>
							<option value="Albay">Albay</option>
							<option value="Antique">Antique</option>
						</select>
					</div>

					<div class="col">
						<label class="inputLabel" for="GsCity">City<span class="text-red"> *</span></label>
						<select id="GsCity" class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="GsCity" >
							<option value="">Select City</option>
							<option value="Angeles">Angeles</option>
							<option value="Bacolod">Bacolod</option>
							<option value="Baguio">Baguio</option>
							<option value="Butuan">Butuan</option>
							<option value="Cagayan de Oro">Cagayan de Oro</option>
							<option value="Caloocan">Caloocan</option>
							<option value="Angeles">Cebu City</option>
							<option value="Bacolod">Davao City</option>
						</select>
					</div>
				</div>
				<div class="py-2 add_school">
					<div id="gs_add_button" class="cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
				</div>
			</div>
		</form>
		</div>
		`
		var education_button_footer = `
		<div class="container text12">
			<div class="d-flex justify-content-center">
				<div  class="back cursor-pointer border boder-0 mx-2 py-1 px-3 back_to_personal_info">Back</div>
				<div class=" continue_to_confirmation continue cursor-pointer border btn-primary boder-0 mr-2 py-1 px-3">Continue</div>
			</div>
		</div>
	`
		var college_education_background_header = `
		<div class="container">
			<h5 class="headerLabel font-weight-bold">Educational Background</h5>
			<p class="text-red text-10">*Required Fields</p> 
		</div>
		`
		var college_education_background_pre_school = `
			<div class="container">
			<form>
				<div class="preSchool text12 form-group">
					<h6 class="inputGroup"> <b>Pre-School</b> </h6>
					<div class="custom-table my-4">
						<table>
							<tr class="tr-custom">
								<th class="table-school">School</th>
								<th>Year Started</th>
								<th>Year Ended</th>
								<th>Province</th>
								<th>City</th>
							</tr>
							<tbody class="college_ps_table">
								
							</tbody>
						</table>
					</div>
					<div class="form-row">
						<div class="col-md-4">
							<label class="inputLabel" for="college_ps_school_name">School Name<span class="text-red"> *</span></label>
							<input class="college_ps_school_name longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="college_ps_school_name" name="college_ps_school_name" placeholder="Enter School Name"> </input>
						</div>

						<div class="col-md-2">
							<label class="inputLabel" for="college_ps_year_start">Year Started<span class="text-red"> *</span></label>
							<input max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="college_ps_year_start" name="college_ps_year_start" placeholder="Date"> </input>
						</div>

						<div class="col-md-2">
							<label class="inputLabel" for="college_ps_year_end">Year End<span class="text-red"> *</span></label>
							<input max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="college_ps_year_end" name="college_ps_year_end" placeholder="date""> </input>
						</div>

						<div class="col-md-2">
							<label class="inputLabel" for="college_ps_province">Province<span class="text-red"> *</span></label>
							<select class="text-gray col-12 border bg-white border-dark c-p-5" name="college_ps_province" id="college_ps_province" >
								<option value="">Select province</option>
								<option value="Abra">Abra</option>
								<option value="Agusan del Norte">Agusan del Norte</option>
                                <option value="Agusan del Sur">Agusan del Sur</option>
								<option value="Aklan">Aklan</option>
                                <option value="Albay">Albay</option>
								<option value="Antique">Antique</option>
							</select>
						</div>

						<div class="col-md-2">
							<label class="inputLabel" for="college_ps_city">City<span class="text-red"> *</span></label>
							<select class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="college_ps_city" id="college_ps_city" >
								<option value="">Select City</option>
								<option value="Angeles">Angeles</option>
								<option value="Bacolod">Bacolod</option>
                                <option value="Baguio">Baguio</option>
								<option value="Butuan">Butuan</option>
                                <option value="Cagayan de Oro">Cagayan de Oro</option>
								<option value="Caloocan">Caloocan</option>
                                <option value="Angeles">Cebu City</option>
								<option value="Bacolod">Davao City</option>
							</select>
						</div>
						<div class="p-2">
							<div id="college_ps_add_button" class=" cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
						</div>
					</div>
				</div>
			</form>
			</div>
		`


		var college_education_background_year_school = `
		<div class="container">
			<form>
				<div class="preSchool text12 form-group">
					<h6 class="inputGroup"> <b>Grade School</b> </h6>
					<div class="custom-table my-4">
						<table>
							<tr class="tr-custom">
								<th class="table-school">School</th>
								<th>Year Started</th>
								<th>Year Ended</th>
								<th>Grade Started</th>
								<th>Grade Ended</th>
								<th>Province</th>
								<th>City</th>
							</tr>
							<tbody class="college_gs_table">
								
							</tbody>
						</table>
					</div>
					<div class="form-row">
						<div class="col-md-2">
							<label class="inputLabel" for="college_gs_school_name">School Name<span class="text-red"> *</span></label>
							<input class="college_gs_school_name longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="college_gs_school_name" name="college_gs_school_name" placeholder="Enter School Name"> </input>
						</div>
		
						<div class="col">
							<label class="inputLabel" for="college_gs_year_start">Year Started<span class="text-red"> *</span></label>
							<input max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="college_gs_year_start" name="college_gs_year_start" placeholder="Date"> </input>
						</div>
		
						<div class="col">
							<label class="inputLabel" for="college_gs_year_end">Year End<span class="text-red"> *</span></label>
							<input max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="college_gs_year_end" name="college_gs_year_end" placeholder="date""> </input>
						</div>
						
						<div class="col">
							<label class="inputLabel" for="college_GsStarted">Grade Started<span class="text-red"> *</span></label>
							<select id="college_GsStarted" class="text-gray col-12 border bg-white border-dark c-p-5" name="GsProvince"  >
								<option value="select">Select Grade Started</option>
								<option value="Grade 1">Grade 1</option>
								<option value="Grade 2">Grade 2</option>
								<option value="Grade 3">Grade 3</option>
								<option value="Grade 4">Grade 4</option>
								<option value="Grade 5">Grade 5</option>
								<option value="Grade 6">Grade 6</option>
							</select>
						</div>
						<div class="col">
							<label class="inputLabel" for="college_GsEnded">Grade Ended<span class="text-red"> *</span></label>
							<select id="college_sEnded" class="text-gray col-12 border bg-white border-dark c-p-5" name="GsProvince"  >
								<option value="select">Select Grade Ended</option>
								<option value="Grade 1">Grade 1</option>
								<option value="Grade 2">Grade 2</option>
								<option value="Grade 3">Grade 3</option>
								<option value="Grade 4">Grade 4</option>
								<option value="Grade 5">Grade 5</option>
								<option value="Grade 6">Grade 6</option>
							</select>
						</div>

						<div class="col">
							<label class="inputLabel" for="college_gs_province">Province<span class="text-red"> *</span></label>
							<select class="text-gray col-12 border bg-white border-dark c-p-5" name="college_gs_province" id="college_gs_province" >
								<option value="">Select province</option>
								<option value="Abra">Abra</option>
								<option value="Agusan del Norte">Agusan del Norte</option>
								<option value="Agusan del Sur">Agusan del Sur</option>
								<option value="Aklan">Aklan</option>
								<option value="Albay">Albay</option>
								<option value="Antique">Antique</option>
							</select>
						</div>
		
						<div class="col">
							<label class="inputLabel" for="college_gs_city">City<span class="text-red"> *</span></label>
							<select class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="college_gs_city" id="college_gs_city" >
								<option value="">Select City</option>
								<option value="Angeles">Angeles</option>
								<option value="Bacolod">Bacolod</option>
								<option value="Baguio">Baguio</option>
								<option value="Butuan">Butuan</option>
								<option value="Cagayan de Oro">Cagayan de Oro</option>
								<option value="Caloocan">Caloocan</option>
								<option value="Angeles">Cebu City</option>
								<option value="Bacolod">Davao City</option>
							</select>
						</div>
					</div>
					<div class="py-2 add_school">
						<div id="college_gs_add_button" class=" cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
					</div>
				</div>
			</form>
			</div>
	`
	var college_education_background_junior_higjschool = `
	<div class="container">
		<form>
			<div class="preSchool text12 form-group">
				<h6 class="inputGroup"> <b>Junior High School</b> </h6>
				<div class="custom-table my-4">
					<table>
						<tr class="tr-custom">
							<th class="table-school">School</th>
							<th>Year Started</th>
							<th>Year Ended</th>
							<th>Grade Started</th>
							<th>Grade Ended</th>
							<th>Province</th>
							<th>City</th>
						</tr>
						<tbody class="college_jhs_table">
							
						</tbody>
					</table>
				</div>
				<div class="form-row">
					<div class="col-md-2">
						<label class="inputLabel" for="college_jhs_school_name">School Name<span class="text-red"> *</span></label>
						<input class="college_jhs_school_name longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="college_jhs_school_name" name="college_jhs_school_name" placeholder="Enter School Name"> </input>
					</div>
	
					<div class="col">
						<label class="inputLabel" for="college_jhs_year_start">Year Started<span class="text-red"> *</span></label>
						<input max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="college_jhs_year_start" name="college_jhs_year_start" placeholder="Date"> </input>
					</div>
	
					<div class="col">
						<label class="inputLabel" for="college_jhs_year_end">Year End<span class="text-red"> *</span></label>
						<input max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="college_jhs_year_end" name="college_jhs_year_end" placeholder="date""> </input>
					</div>
					
					<div class="col">
						<label class="inputLabel" for="college_jhs_gradeStarted">Grade Started<span class="text-red"> *</span></label>
						<select id="college_jhs_gradeStarted" class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_ps_city">
							<option value="select">Select Grade Started</option>
							<option value="Grade 7">Grade 7</option>
							<option value="Grade 8">Grade 8</option>
                            <option value="Grade 9">Grade 9</option>
							<option value="Grade 10">Grade 10</option>
						</select>
					</div>

					<div class="col"> 
						<label class="inputLabel" for="college_jhs_gradeStarted">Grade Ended<span class="text-red"> *</span></label>
						<select id="collge_jhs_gradeEnded" class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_ps_city">
							<option value="select">Select Grade Ended</option>
							<option value="Grade 7">Grade 7</option>
							<option value="Grade 8">Grade 8</option>
                            <option value="Grade 9">Grade 9</option>
							<option value="Grade 10">Grade 10</option>
						</select>
					</div>

					<div class="col">
						<label class="inputLabel" for="college_jhs_province">Province<span class="text-red"> *</span></label>
						<select class="text-gray col-12 border bg-white border-dark c-p-5" name="college_jhs_province" id="college_jhs_province" >
							<option value="">Select province</option>
							<option value="Abra">Abra</option>
							<option value="Agusan del Norte">Agusan del Norte</option>
							<option value="Agusan del Sur">Agusan del Sur</option>
							<option value="Aklan">Aklan</option>
							<option value="Albay">Albay</option>
							<option value="Antique">Antique</option>
						</select>
					</div>
	
					<div class="col">
						<label class="inputLabel" for="college_jhs_city">City<span class="text-red"> *</span></label>
						<select class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="college_jhs_city" id="college_jhs_city" >
							<option value="">Select City</option>
							<option value="Angeles">Angeles</option>
							<option value="Bacolod">Bacolod</option>
							<option value="Baguio">Baguio</option>
							<option value="Butuan">Butuan</option>
							<option value="Cagayan de Oro">Cagayan de Oro</option>
							<option value="Caloocan">Caloocan</option>
							<option value="Angeles">Cebu City</option>
							<option value="Bacolod">Davao City</option>
						</select>
					</div>
				</div>
				<div class="py-2 add_school">
					<div id="college_jhs_add_button" class=" cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
				</div>
			</div>
		</form>
		</div>
	`
	var college_education_background_senior_highschool = `
	<div class="container">
		<form>
			<div class="preSchool text12 form-group">
				<h6 class="inputGroup"> <b>Senior High School</b> </h6>
				<div class="custom-table my-4">
					<table>
						<tr class="tr-custom">
							<th class="table-school">School</th>
							<th>Year Started</th>
							<th>Year Ended</th>
							<th>Grade Started</th>
							<th>Grade Ended</th>
							<th>Province</th>
							<th>City</th>
						</tr>
						<tbody class="college_shs_table">
							
						</tbody>
					</table>
				</div>
				<div class="form-row">
					<div class="col-md-2">
						<label class="inputLabel" for="college_shs_school_name">School Name<span class="text-red"> *</span></label>
						<input class="college_shs_school_name longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="college_shs_school_name" name="college_shs_school_name" placeholder="Enter School Name"> </input>
					</div>
	
					<div class="col">
						<label class="inputLabel" for="college_shs_year_start">Year Started<span class="text-red"> *</span></label>
						<input max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="college_shs_year_start" name="college_shs_year_start" placeholder="Date"> </input>
					</div>
	
					<div class="col">
						<label class="inputLabel" for="college_shs_year_end">Year End<span class="text-red"> *</span></label>
						<input max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="college_shs_year_end" name="college_shs_year_end" placeholder="date""> </input>
					</div>
					
					<div class="col">
						<label class="inputLabel" for="college_shs_gradeStarted">Grade Started<span class="text-red"> *</span></label>
						<select id="college_shs_gradeStarted" class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_ps_city">
							<option value="select">Select Grade Started</option>
							<option value="Grade 11">Grade 11</option>
							<option value="Grade 12">Grade 12</option>
						</select>
					</div>

					<div class="col"> 
						<label class="inputLabel" for="college_shs_gradeStarted">Grade Ended<span class="text-red"> *</span></label>
						<select id="collge_shs_gradeEnded" class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_ps_city">
							<option value="select">Select Grade Ended</option>
							<option value="Grade 11">Grade 11</option>
							<option value="Grade 12">Grade 12</option>
						</select>
					</div>

					<div class="col">
						<label class="inputLabel" for="college_shs_province">Province<span class="text-red"> *</span></label>
						<select class="text-gray col-12 border bg-white border-dark c-p-5" name="college_shs_province" id="college_shs_province" >
							<option value="">Select province</option>
							<option value="Abra">Abra</option>
							<option value="Agusan del Norte">Agusan del Norte</option>
							<option value="Agusan del Sur">Agusan del Sur</option>
							<option value="Aklan">Aklan</option>
							<option value="Albay">Albay</option>
							<option value="Antique">Antique</option>
						</select>
					</div>
	
					<div class="col">
						<label class="inputLabel" for="college_shs_city">City<span class="text-red"> *</span></label>
						<select class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="college_shs_city" id="college_shs_city" >
							<option value="">Select City</option>
							<option value="Angeles">Angeles</option>
							<option value="Bacolod">Bacolod</option>
							<option value="Baguio">Baguio</option>
							<option value="Butuan">Butuan</option>
							<option value="Cagayan de Oro">Cagayan de Oro</option>
							<option value="Caloocan">Caloocan</option>
							<option value="Angeles">Cebu City</option>
							<option value="Bacolod">Davao City</option>
						</select>
					</div>
				</div>
				<div class="py-2 add_school">
					<div id="college_shs_add_button" class=" cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
				</div>
			</div>
		</form>
		</div>
	`
	var college_education_background_button_footer = `
		<div class="container text12">
			<div class="d-flex justify-content-center">
				<div class="back_to_personal_info back cursor-pointer border boder-0 mx-2 py-1 px-3">Back</div>
				<div class="continue continue_to_confirmation cursor-pointer border btn-primary boder-0 mr-2 py-1 px-3">Continue</div>
			</div>
		</div>
	`
		
	var shs_education_background_pre_school = `
			<div class="container">
			<form>
				<div class="preSchool text12 form-group">
					<h6 class="inputGroup"> <b>Pre-School</b> </h6>
					<div class="custom-table my-4">
						<table>
							<tr class="tr-custom">
								<th class="table-school">School</th>
								<th>Year Started</th>
								<th>Year Ended</th>
								<th>Province</th>
								<th>City</th>
							</tr>
							<tbody class="shs_ps_table">
								
							</tbody>
						</table>
					</div>
					<div class="form-row">
						<div class="col-md-2">
							<label class="inputLabel" for="shs_ps_school_name">School Name<span class="text-red"> *</span></label>
							<input class="shs_ps_school_name longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="shs_ps_school_name" name="shs_ps_school_name" placeholder="Enter School Name"> </input>
						</div>

						<div class="col">
							<label class="inputLabel" for="shs_ps_year_start">Year Started<span class="text-red"> *</span></label>
							<input max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="shs_ps_year_start" name="shs_ps_year_start" placeholder="Date"> </input>
						</div>

						<div class="col">
							<label class="inputLabel" for="shs_ps_year_end">Year End<span class="text-red"> *</span></label>
							<input max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="shs_ps_year_end" name="shs_ps_year_end" placeholder="date""> </input>
						</div>

						<div class="col">
							<label class="inputLabel" for="shs_ps_province">Province<span class="text-red"> *</span></label>
							<select class="text-gray col-12 border bg-white border-dark c-p-5" name="shs_ps_province" id="shs_ps_province" >
								<option value="">Select province</option>
								<option value="Abra">Abra</option>
								<option value="Agusan del Norte">Agusan del Norte</option>
                                <option value="Agusan del Sur">Agusan del Sur</option>
								<option value="Aklan">Aklan</option>
                                <option value="Albay">Albay</option>
								<option value="Antique">Antique</option>
							</select>
						</div>

						<div class="col">
							<label class="inputLabel" for="shs_ps_city">City<span class="text-red"> *</span></label>
							<select class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_ps_city" id="shs_ps_city" >
								<option value="">Select City</option>
								<option value="Angeles">Angeles</option>
								<option value="Bacolod">Bacolod</option>
                                <option value="Baguio">Baguio</option>
								<option value="Butuan">Butuan</option>
                                <option value="Cagayan de Oro">Cagayan de Oro</option>
								<option value="Caloocan">Caloocan</option>
                                <option value="Angeles">Cebu City</option>
								<option value="Bacolod">Davao City</option>
							</select>
						</div>
					</div>
					<div class="py-2 add_school">
						<div id="shs_ps_add_button" class=" cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
					</div>
				</div>
			</form>
			</div>
		`


		var shs_education_background_grade_school = `
		<div class="container">
			<form>
				<div class="preSchool text12 form-group">
					<h6 class="inputGroup"> <b>Grade School</b> </h6>
					<div class="custom-table my-4">
						<table>
							<tr class="tr-custom">
								<th class="table-school">School</th>
								<th>Year Started</th>
								<th>Year Ended</th>
								<th>Grade Started</th>
								<th>Grade Ended</th>
								<th>Province</th>
								<th>City</th>
							</tr>
							<tbody class="shs_gs_table">
								
							</tbody>
						</table>
					</div>
					<div class="form-row">
						<div class="col-md-2">
							<label class="inputLabel" for="shs_gs_school_name">School Name<span class="text-red"> *</span></label>
							<input class="shs_gs_school_name longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="shs_gs_school_name" name="shs_gs_school_name" placeholder="Enter School Name"> </input>
						</div>
		
						<div class="col">
							<label class="inputLabel" for="shs_gs_year_start">Year Started<span class="text-red"> *</span></label>
							<input max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="shs_gs_year_start" name="shs_gs_year_start" placeholder="Date"> </input>
						</div>
		
						<div class="col">
							<label class="inputLabel" for="shs_gs_year_end">Year End<span class="text-red"> *</span></label>
							<input max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="shs_gs_year_end" name="shs_gs_year_end" placeholder="date""> </input>
						</div>
						
						<div class="col">
							<label class="inputLabel" for="shs_gs_gradeStarted">Grade Started<span class="text-red"> *</span></label>
							<select id="shs_gs_gradeStarted" class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_ps_city">
								<option value="select">Select Grade Started</option>
								<option value="Grade 1">Grade 1</option>
								<option value="Grade 2">Grade 2</option>
								<option value="Grade 3">Grade 3</option>
								<option value="Grade 4">Grade 4</option>
								<option value="Grade 5">Grade 5</option>
								<option value="Grade 6">Grade 6</option>
							</select>
						</div>

						<div class="col"> 
							<label class="inputLabel" for="shs_gs_gradeStarted">Grade Ended<span class="text-red"> *</span></label>
							<select id="shs_gs_gradeEnded" class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_ps_city">
								<option value="select">Select Grade Ended</option>
								<option value="Grade 1">Grade 1</option>
								<option value="Grade 2">Grade 2</option>
								<option value="Grade 3">Grade 3</option>
								<option value="Grade 4">Grade 4</option>
								<option value="Grade 5">Grade 5</option>
								<option value="Grade 6">Grade 6</option>
							</select>
						</div>

						<div class="col">
							<label class="inputLabel" for="shs_gs_province">Province<span class="text-red"> *</span></label>
							<select class="text-gray col-12 border bg-white border-dark c-p-5" name="shs_gs_province" id="shs_gs_province" >
								<option value="">Select province</option>
								<option value="Abra">Abra</option>
								<option value="Agusan del Norte">Agusan del Norte</option>
								<option value="Agusan del Sur">Agusan del Sur</option>
								<option value="Aklan">Aklan</option>
								<option value="Albay">Albay</option>
								<option value="Antique">Antique</option>
							</select>
						</div>
		
						<div class="col">
							<label class="inputLabel" for="shs_gs_city">City<span class="text-red"> *</span></label>
							<select class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_gs_city" id="shs_gs_city" >
								<option value="">Select City</option>
								<option value="Angeles">Angeles</option>
								<option value="Bacolod">Bacolod</option>
								<option value="Baguio">Baguio</option>
								<option value="Butuan">Butuan</option>
								<option value="Cagayan de Oro">Cagayan de Oro</option>
								<option value="Caloocan">Caloocan</option>
								<option value="Angeles">Cebu City</option>
								<option value="Bacolod">Davao City</option>
							</select>
						</div>
					</div>
					<div class="py-2 add_school">
						<div id="shs_gs_add_button" class=" cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
					</div>
				</div>
			</form>
			</div>
	`
	var shs_education_background_junior_highschool = `
	<div class="container">
		<form>
			<div class="preSchool text12 form-group">
				<h6 class="inputGroup"> <b>Junior High School</b> </h6>
				<div class="custom-table my-4">
					<table>
						<tr class="tr-custom">
							<th class="table-school">School</th>
							<th>Year Started</th>
							<th>Year Ended</th>
							<th>Grade Started</th>
							<th>Grade Ended</th>
							<th>Province</th>
							<th>City</th>
						</tr>
						<tbody class="shs_jhs_table">
							
						</tbody>
					</table>
				</div>
				<div class="form-row">
					<div class="col-md-2">
						<label class="inputLabel" for="shs_jhs_school_name">School Name<span class="text-red"> *</span></label>
						<input class="shs_jhs_school_name longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="shs_jhs_school_name" name="shs_jhs_school_name" placeholder="Enter School Name"> </input>
					</div>
	
					<div class="col">
						<label class="inputLabel" for="shs_jhs_year_start">Year Started<span class="text-red"> *</span></label>
						<input max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="shs_jhs_year_start" name="shs_jhs_year_start" placeholder="Date"> </input>
					</div>
	
					<div class="col">
						<label class="inputLabel" for="shs_jhs_year_end">Year End<span class="text-red"> *</span></label>
						<input max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="shs_jhs_year_end" name="shs_jhs_year_end" placeholder="date""> </input>
					</div>
					
					<div class="col">
						<label class="inputLabel" for="shs_jhs_gradeStarted">Grade Started<span class="text-red"> *</span></label>
						<select id="shs_jhs_gradeStarted" class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_ps_city">
							<option value="select">Select Grade Started</option>
							<option value="Grade 7">Grade 7</option>
							<option value="Grade 8">Grade 8</option>
                            <option value="Grade 9">Grade 9</option>
							<option value="Grade 10">Grade 10</option>
						</select>
					</div>

					<div class="col"> 
						<label class="inputLabel" for="shs_jhs_gradeStarted">Grade Ended<span class="text-red"> *</span></label>
						<select id="shs_jhs_gradeEnded" class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_ps_city">
							<option value="select">Select Grade Ended</option>
							<option value="Grade 7">Grade 7</option>
							<option value="Grade 8">Grade 8</option>
                            <option value="Grade 9">Grade 9</option>
							<option value="Grade 10">Grade 10</option>
						</select>
					</div>

					<div class="col">
						<label class="inputLabel" for="shs_jhs_province">Province<span class="text-red"> *</span></label>
						<select class="text-gray col-12 border bg-white border-dark c-p-5" name="shs_jhs_province" id="shs_jhs_province" >
							<option value="">Select province</option>
							<option value="Abra">Abra</option>
							<option value="Agusan del Norte">Agusan del Norte</option>
							<option value="Agusan del Sur">Agusan del Sur</option>
							<option value="Aklan">Aklan</option>
							<option value="Albay">Albay</option>
							<option value="Antique">Antique</option>
						</select>
					</div>
	
					<div class="col">
						<label class="inputLabel" for="shs_jhs_city">City<span class="text-red"> *</span></label>
						<select class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_jhs_city" id="shs_jhs_city" >
							<option value="">Select City</option>
							<option value="Angeles">Angeles</option>
							<option value="Bacolod">Bacolod</option>
							<option value="Baguio">Baguio</option>
							<option value="Butuan">Butuan</option>
							<option value="Cagayan de Oro">Cagayan de Oro</option>
							<option value="Caloocan">Caloocan</option>
							<option value="Angeles">Cebu City</option>
							<option value="Bacolod">Davao City</option>
						</select>
					</div>
				</div>
				<div class="py-2 add_school">
					<div id="shs_jhs_add_button" class=" cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
				</div>
			</div>
		</form>
		</div>
	`	
		
		
		var grad_education_background_college = `
	<div class="container">
		<form>
			<div class="preSchool text12 form-group">
				<h6 class="inputGroup"> <b>College</b> </h6>
				<div class="custom-table my-4">
					<table>
						<tr class="tr-custom">
							<th class="table-school">School</th>
							<th>Year Started</th>
							<th>Year Ended</th>
							<th>Grade Started</th>
							<th>Grade Ended</th>
							<th>Province</th>
							<th>City</th>
						</tr>
						<tbody class="grad_college_table">
							
						</tbody>
					</table>
				</div>
				<div class="form-row">
					<div class="col-md-2">
						<label class="inputLabel" for="grad_college_school_name">School Name<span class="text-red"> *</span></label>
						<input class="grad_college_school_name longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="grad_college_school_name" name="grad_college_school_name" placeholder="Enter School Name"> </input>
					</div>
	
					<div class="col">
						<label class="inputLabel" for="grad_college_year_start">Year Started<span class="text-red"> *</span></label>
						<input max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="grad_college_year_start" name="grad_college_year_start" placeholder="Date"> </input>
					</div>
	
					<div class="col">
						<label class="inputLabel" for="grad_college_year_end">Year End<span class="text-red"> *</span></label>
						<input max="1979-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="grad_college_year_end" name="grad_college_year_end" placeholder="date""> </input>
					</div>
	                
	                <div class="col">
						<label class="inputLabel" for="college_jhs_gradeStarted">Grade Started<span class="text-red"> *</span></label>
						<select id="college_jhs_gradeStarted" class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_ps_city">
							<option value="select">Select Grade Started</option>
							<option value="First Year">First Year</option>
							<option value="Second Year">Secnd Year</option>
                            <option value="Third Year">Third Year</option>
							<option value="Fourth Year">Fourth Year</option>
							<option value="Fifth Year">Fifth Year</option>
						</select>
					</div>

					<div class="col"> 
						<label class="inputLabel" for="grad_college_gradeStarted">Grade Ended<span class="text-red"> *</span></label>
						<select id="grad_collge_gradeEnded" class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_ps_city">
							<option value="select">Select Grade Ended</option>
							<option value="First Year">First Year</option>
							<option value="Second Year">Secnd Year</option>
                            <option value="Third Year">Third Year</option>
							<option value="Fourth Year">Fourth Year</option>
							<option value="Fifth Year">Fifth Year</option>
						</select>
					</div>
	                
					<div class="col">
						<label class="inputLabel" for="grad_college_province">Province<span class="text-red"> *</span></label>
						<select class="text-gray col-12 border bg-white border-dark c-p-5" name="grad_college_province" id="grad_college_province" >
							<option value="">Select province</option>
							<option value="Abra">Abra</option>
							<option value="Agusan del Norte">Agusan del Norte</option>
							<option value="Agusan del Sur">Agusan del Sur</option>
							<option value="Aklan">Aklan</option>
							<option value="Albay">Albay</option>
							<option value="Antique">Antique</option>
						</select>
					</div>
	
					<div class="col">
						<label class="inputLabel" for="grad_college_city">City<span class="text-red"> *</span></label>
						<select class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="grad_college_city" id="grad_college_city" >
							<option value="">Select City</option>
							<option value="Angeles">Angeles</option>
							<option value="Bacolod">Bacolod</option>
							<option value="Baguio">Baguio</option>
							<option value="Butuan">Butuan</option>
							<option value="Cagayan de Oro">Cagayan de Oro</option>
							<option value="Caloocan">Caloocan</option>
							<option value="Angeles">Cebu City</option>
							<option value="Bacolod">Davao City</option>
						</select>
					</div>
				</div>
				<div class="py-2 add_school">
					<div id="grad_college_add_button" class=" cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
				</div>
			</div>
		</form>
		</div>
	`


    // all html
    const Admission = `
        <div id="admission"> 
            ${Tab + newHTML }
        </div>
        <div id="personal_info">
            ${personal_info_Tab + header +  student_name1 + personal_information2 + contact_information + home_address + parents + guardian + button + button_footer}
        </div>
		<div class="educational_background_college">
			${education_background_Tab + college_education_background_header  + college_education_background_pre_school + college_education_background_year_school + college_education_background_junior_higjschool + college_education_background_senior_highschool + college_education_background_button_footer + button_footer}
		</div>
		<div class="educational_background_jhs">
			${education_background_Tab + education_background_header + education_background_pre_school + education_background_pre_school2 + education_button_footer + button_footer}
		</div>
		<div class="educational_background_shs">
			${education_background_Tab + education_background_header + shs_education_background_pre_school + shs_education_background_grade_school + shs_education_background_junior_highschool + education_button_footer + button_footer}
		</div>
		<div class="educational_background_grad">
			${education_background_Tab + college_education_background_header  + college_education_background_pre_school + college_education_background_year_school + college_education_background_junior_higjschool + college_education_background_senior_highschool  + grad_education_background_college +  college_education_background_button_footer + button_footer}
		</div>
    `
	$('Body').append(Admission);


    // hide ITEMS
    $('#personal_info, #program_college, #show-button, #program_graduate_school, #program_hs, .educational_background_college, .educational_background_jhs, .educational_background_shs, .educational_background_grad').hide()





	fetch(url_base + '/api/resource/Admission PCCR?order_by=creation desc')
	.then(response => response.json())
	.then(data => {
		console.log(data.data[0].name)
		var latest_ref = data.data[0].name;
		var after_ = latest_ref.substring(latest_ref.indexOf('-') + 1);
		var ref_number = incrementString(after_)
		var year = new Date().getFullYear().toString().substr(-2);
		var reference_number = year+'-'+ref_number;
		var student_type = $("#student_type").val();

		frappe.web_form.set_value('reference_number', reference_number);
		frappe.web_form.set_value('name1', reference_number);
		frappe.web_form.set_value('student_type', student_type);
	});

	function incrementString (string) {  
		// Extract string's number
		var number = string.match(/\d+/) === null ? 0 : string.match(/\d+/)[0];
		
		// Store number's length
		var numberLength = number.length
	  
		// Increment number by 1
		number = (parseInt(number) + 1).toString();
		
		// If there were leading 0s, add them again
		while (number.length < numberLength) {
		  number = "0" + number;
		}
		  
		return string.replace(/[0-9]/g, '').concat(number);
	  }

    $('#show-button').hide()

	// get currriculum

	const get_currriculum = (acad_value) => {
		console.log(acad_value)
		$('.table-body').html('<p id="hide"></p>')
		// Fetch data depends on acad dept and program
		fetch(url_base + '/api/resource/Curriculum/' + acad_value)
		.then(res => res.json())
		.then(res => {
			var acadArray = res.data.curriculum_data
			console.log(acadArray)
			acadArray.forEach(element => {
				$('#hide').hide()
				$('.table-body').append(`
				<tr>
					<td class="th-code">${element.subject_code}</td>
					<td>${element.title}</td>
				</tr>
				`)
			});
		})
		.catch((error) => {
			$('.table-body').html(`
			<tr>
				<td class="th-code"> Select academic department</td>
				<td></td>
			</tr>
			`)
		});
	}
	//dynamic button admission form function
	$('#acadcDept').change( () => {
		$('#program')
		.empty()
		.append($("<option selected value='not-selected'>Select Program</option>"));

		var acad_value = $('#acadcDept').val();
		var program_value = $('#program').val();
		var curriculum = acad_value + program_value
		frappe.web_form.set_value('academic_department', acad_value);

		fetch(url_base + '/api/resource/Program?filters=[["academic_department","=", "'+acad_value+'"]]')
		.then(response => response.json())
		.then(data => {
			data.data.forEach(function(value) {   
				$('#program')
				.append($("<option></option>")
				.attr("value", value.name)
				.text(value.name)); 
			});
		});

		
		$('#hide-button, .sm-hide-button').show()
		$('#show-button, .sm-show-button').hide()
		$('.table-body').html('<p id="hide"></p>')
	
	})

	$('#program').change( () => {
		var acad_value = $('#acadcDept').val();
		var program = $("#program").val();
		frappe.web_form.set_value('program', program);

		if(acad_value === "not-selected" || program === "not-selected"){
			$('#hide-button, .sm-hide-button').show()
			$('#show-button, .sm-show-button').hide()
		}else{
			$('#hide-button, .sm-hide-button').hide()
			$('#show-button, .sm-show-button').show()
		}
	});


	// capture the value of input personal information

	//get the value of are you living with your parents
	$('.guardian').hide()
	$('#living').change( () => {
		const living_with_parents = $('#living').val()
		console.log(living_with_parents)
		if(living_with_parents == "yes"){
			$('.guardian').hide()
		}else{
			$('.guardian').show()
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
        
        
	   var parentProvided = false;
	   if(father_name != "" && father_first_name != "" && father_middle_name != "") {
	        parentProvided = true;
	   }
	   else if (mother_name != "" && mother_first_name != "" && mother_middle_name != "") {
	        parentProvided = true;
	   }
	   
	   if (first_name == "" || last_name == "" || middle_name == "" || gender == null || birthday == "" || mother_tongue == "" || ethnic == null || religion == null || mobile_number == "" || home_phone == "" || email == "" || address == "" || barangay == null || city == null || province == null || parentProvided == false) {
            frappe.msgprint({
                title: __('Error'),
                indicator: 'green',
                message: __('Some required fields have not been filled up, please fill them up before submission.')
            });
        } else{
        
        
        }
        
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
		
		const acad_value = frappe.web_form.get_value('academic_department');
		//redirect to educational background form
		if(acad_value === "D05"){
			$('.educational_background_jhs').show()
			$('#admission, #personal_info, .educational_background_college, .educational_background_shs').hide()
		}
		else if(acad_value === "D06"){
			$('.educational_background_shs').show()
			$('#admission, #personal_info, .educational_background_college, .educational_background_jhs').hide()
		}else if(acad_value === "D07"){
			$('.educational_background_college').show()
			$('#admission, #personal_info, .educational_background_jhs, .educational_background_shs').hide()
		}else if(acad_value === "D08"){
			$('.educational_background_grad').show()
			$('#admission, #personal_info, .educational_background_jhs, .educational_background_shs, .educational_background_college').hide()
		}
	})

	// Education background functionalities
	var School_name =""
	var Year_started = ""
	var Year_end = ""
	var Province = ""
	var city = ""
	var pre_school_array = []
	//capturing the value
	$('.hs_get_value').keyup( () => {
		School_name = $('#HsSchoolName').val();
	})
	$('#HsYearStart, #HsYearEnd, #HsProvince, #HsCity').change( () => {
		Year_started = $('#HsYearStart').val()
		Year_end = $('#HsYearEnd').val()
		Province = $('#HsProvince').val()
		city = $('#HsCity').val()
	})
	// Pre Schhol add button
	$('#hs_add_button').click( () => {
		if(School_name === "" || Year_started === "" || Year_end === "" || Province === "" || city === ""){
			frappe.throw('<p class="text-red">Please fill all values carefully</p>');
		}else{
			let my_object = {}
			my_object.schhol = School_name
			my_object.year_started = Year_started
			my_object.year_ended = Year_end
			my_object.province = Province
			my_object.city = city
			pre_school_array.push(my_object)
			console.log(pre_school_array)
			$('#HsSchoolName').val("")
			$('#HsYearStart').val("")
			$('#HsYearEnd').val("")
			$('#HsProvince').val("")
			$('#HsCity').val("")
			var hs_table = `
				<tr>
					<td class="table-school">${School_name}</td>
					<td class="">${Year_started}</td>
					<td class="">${Year_end}</td>
					<td class="">${Province}</td>
					<td class="">${city}</td>
				</tr>
			`
			$('.hs_table_body_1').append(hs_table)
			School_name =""
			Year_started = ""
			Year_end = ""
			Province = ""
			city = ""
		}
	})

	// Grade schhool functionalities
	var Gs_School_name =""
	var Gs_Year_started = ""
	var Gs_Year_end = ""
	var Gs_Province = ""
	var Gs_city = ""
	var Gs_pre_school_array = []
	//capturing the value
	$('.gs_get_value').keyup( () => {
		Gs_School_name = $('#GsSchoolName').val();
	})
	$('#GsYearStart, #GsYearEnd, #GsProvince, #GsCity').change( () => {
		Gs_Year_started = $('#GsYearStart').val()
		Gs_Year_end = $('#GsYearEnd').val()
		Gs_Province = $('#GsProvince').val()
		Gs_city = $('#GsCity').val()
	})
	//Grade school add button
	$('#gs_add_button').click( () => {
		if(Gs_School_name === "" || Gs_Year_started === "" || Gs_Year_end === "" || Gs_Province === "" || Gs_city === ""){
			frappe.throw('Please fill all values carefully');
		}else{
			let gs_my_object = {}
			gs_my_object.schhol = Gs_School_name
			gs_my_object.year_started = Gs_Year_started
			gs_my_object.year_ended = Gs_Year_end
			gs_my_object.province = Gs_Province
			gs_my_object.city = Gs_city
			Gs_pre_school_array.push(gs_my_object)
			console.log(Gs_pre_school_array)
			$('#GsSchoolName').val("")
			$('#GsYearStart').val("")
			$('#GsYearEnd').val("")
			$('#GsProvince').val("")
			$('#GsCity').val("")
			var gs_table = `
				<tr>
					<td class="table-school">${Gs_School_name}</td>
					<td class="">${Gs_Year_started}</td>
					<td class="">${Gs_Year_end}</td>
					<td class="">${Gs_Province}</td>
					<td class="">${Gs_city}</td>
				</tr>
			`
			$('.hs_table_body_2').append(gs_table)
			Gs_School_name =""
			Gs_Year_started = ""
			Gs_Year_end = ""
			Gs_Province = ""
			Gs_city = ""
		}
	})

	// College preschool functionalities
	var college_ps_school_name =""
	var college_ps_year_start = ""
	var college_ps_year_end = ""
	var college_ps_province = ""
	var college_ps_city = ""
	var college_ps_array = []
	//capturing the value
	$('.college_ps_school_name').keyup( () => {
		college_ps_school_name = $('#college_ps_school_name').val();
	})
	$('#college_ps_year_start, #college_ps_year_end, #college_ps_province, #college_ps_city').change( () => {
		college_ps_year_start = $('#college_ps_year_start').val()
		college_ps_year_end = $('#college_ps_year_end').val()
		college_ps_province = $('#college_ps_province').val()
		college_ps_city = $('#college_ps_city').val()
	})
	// College Pre school add button
	$('#college_ps_add_button').click( () => {
		console.log('clicked')
		if(college_ps_school_name === "" || college_ps_year_start === "" || college_ps_year_end === "" || college_ps_province === "" || college_ps_city === ""){
			frappe.throw('<p class="text-red">Please fill all values carefully</p>');
		}else{
			let my_object = {}
			my_object.school = college_ps_school_name
			my_object.year_started = college_ps_year_start
			my_object.year_ended = college_ps_year_end
			my_object.province = college_ps_province
			my_object.city = college_ps_city

			college_ps_array.push(my_object)
			console.log(college_ps_array)
			$('#college_ps_school_name').val("")
			$('#college_ps_year_start').val("")
			$('#college_ps_year_end').val("")
			$('#college_ps_province').val("")
			$('#college_ps_city').val("")
			var college_ps_table = `
				<tr>
					<td class="table-school">${college_ps_school_name}</td>
					<td class="">${college_ps_year_start}</td>
					<td class="">${college_ps_year_end}</td>
					<td class="">${college_ps_province}</td>
					<td class="">${college_ps_city}</td>
				</tr>
			`
			$('.college_ps_table').append(college_ps_table)
			college_ps_school_name = ""
			college_ps_year_start =""
			college_ps_year_end = ""
			college_ps_province = ""
			college_ps_city = ""
		}
	})

	// College grade school functionalities
	var college_gs_school_name =""
	var college_gs_year_start = ""
	var college_gs_year_end = ""
	var college_gs_province = ""
	var college_gs_city = ""
	var college_gs_array = []
	//capturing the value
	$('.college_gs_school_name').keyup( () => {
		college_gs_school_name = $('#college_gs_school_name').val();
	})
	$('#college_gs_year_start, #college_gs_year_end, #college_gs_province, #college_gs_city').change( () => {
		college_gs_year_start = $('#college_gs_year_start').val()
		college_gs_year_end = $('#college_gs_year_end').val()
		college_gs_province = $('#college_gs_province').val()
		college_gs_city = $('#college_gs_city').val()
	})
	// College grade school add button
	$('#college_gs_add_button').click( () => {
		if(college_gs_school_name === "" || college_gs_year_start === "" || college_gs_year_end === "" || college_gs_province === "" || college_gs_city === ""){
			frappe.throw('<p class="text-red">Please fill all values carefully</p>');
		}else{
			let my_object = {}
			my_object.school = college_gs_school_name
			my_object.year_started = college_gs_year_start
			my_object.year_ended = college_gs_year_end
			my_object.province = college_gs_province
			my_object.city = college_gs_city

			college_gs_array.push(my_object)
			console.log(college_gs_array)
			$('#college_gs_school_name').val("")
			$('#college_gs_year_start').val("")
			$('#college_gs_year_end').val("")
			$('#college_gs_province').val("")
			$('#college_gs_city').val("")
			var college_gs_table = `
				<tr>
					<td class="table-school">${college_gs_school_name}</td>
					<td class="">${college_gs_year_start}</td>
					<td class="">${college_gs_year_end}</td>
					<td class="">${college_gs_province}</td>
					<td class="">${college_gs_city}</td>
				</tr>
			`
			$('.college_gs_table').append(college_gs_table)
			college_gs_school_name = ""
			college_gs_year_start =""
			college_gs_year_end = ""
			college_gs_province = ""
			college_gs_city = ""
		}
	})

	//College JHS

	var college_jhs_school_name =""
	var college_jhs_year_start = ""
	var college_jhs_year_end = ""
	var college_jhs_province = ""
	var college_jhs_city = ""
	var college_jhs_array = []
	//capturing the value
	$('.college_jhs_school_name').keyup( () => {
		college_jhs_school_name = $('#college_jhs_school_name').val();
	})
	$('#college_jhs_year_start, #college_jhs_year_end, #college_jhs_province, #college_jhs_city').change( () => {
		college_jhs_year_start = $('#college_jhs_year_start').val()
		college_jhs_year_end = $('#college_jhs_year_end').val()
		college_jhs_province = $('#college_jhs_province').val()
		college_jhs_city = $('#college_jhs_city').val()
	})
	// College grade school add button
	$('#college_jhs_add_button').click( () => {
		if(college_jhs_school_name === "" || college_jhs_year_start === "" || college_jhs_year_end === "" || college_jhs_province === "" || college_jhs_city === ""){
			frappe.throw('<p class="text-red">Please fill all values carefully</p>');
		}else{
			let my_object = {}
			my_object.school = college_jhs_school_name
			my_object.year_started = college_jhs_year_start
			my_object.year_ended = college_jhs_year_end
			my_object.province = college_jhs_province
			my_object.city = college_jhs_city

			college_jhs_array.push(my_object)
			console.log(college_jhs_array)
			$('#college_jhs_school_name').val("")
			$('#college_jhs_year_start').val("")
			$('#college_jhs_year_end').val("")
			$('#college_jhs_province').val("")
			$('#college_jhs_city').val("")
			var college_jhs_table = `
				<tr>
					<td class="table-school">${college_jhs_school_name}</td>
					<td class="">${college_jhs_year_start}</td>
					<td class="">${college_jhs_year_end}</td>
					<td class="">${college_jhs_province}</td>
					<td class="">${college_jhs_city}</td>
				</tr>
			`
			$('.college_jhs_table').append(college_jhs_table)
			college_jhs_school_name = ""
			college_jhs_year_start =""
			college_jhs_year_end = ""
			college_jhs_province = ""
			college_jhs_city = ""
		}
	})

	//College SHS
	// College grade school functionalities
	var college_shs_school_name =""
	var college_shs_year_start = ""
	var college_shs_year_end = ""
	var college_shs_province = ""
	var college_shs_city = ""
	var college_shs_array = []
	//capturing the value
	$('.college_shs_school_name').keyup( () => {
		college_shs_school_name = $('#college_shs_school_name').val();
	})
	$('#college_shs_year_start, #college_shs_year_end, #college_shs_province, #college_shs_city').change( () => {
		college_shs_year_start = $('#college_shs_year_start').val()
		college_shs_year_end = $('#college_shs_year_end').val()
		college_shs_province = $('#college_shs_province').val()
		college_shs_city = $('#college_shs_city').val()
	})
	// College grade school add button
	$('#college_shs_add_button').click( () => {
		if(college_shs_school_name === "" || college_shs_year_start === "" || college_shs_year_end === "" || college_shs_province === "" || college_shs_city === ""){
			frappe.throw('<p class="text-red">Please fill all values carefully</p>');
		}else{
			let my_object = {}
			my_object.school = college_shs_school_name
			my_object.year_started = college_shs_year_start
			my_object.year_ended = college_shs_year_end
			my_object.province = college_shs_province
			my_object.city = college_shs_city

			college_shs_array.push(my_object)
			console.log(college_shs_array)
			$('#college_shs_school_name').val("")
			$('#college_shs_year_start').val("")
			$('#college_shs_year_end').val("")
			$('#college_shs_province').val("")
			$('#college_shs_city').val("")
			var college_shs_table = `
				<tr>
					<td class="table-school">${college_shs_school_name}</td>
					<td class="">${college_shs_year_start}</td>
					<td class="">${college_shs_year_end}</td>
					<td class="">${college_shs_province}</td>
					<td class="">${college_shs_city}</td>
				</tr>
			`
			$('.college_shs_table').append(college_shs_table)
			college_shs_school_name = ""
			college_shs_year_start =""
			college_shs_year_end = ""
			college_shs_province = ""
			college_shs_city = ""
		}
	})

	// SHS preschool functionalities
	var shs_ps_school_name =""
	var shs_ps_year_start = ""
	var shs_ps_year_end = ""
	var shs_ps_province = ""
	var shs_ps_city = ""
	var shs_ps_array = []
	//capturing the value
	$('.shs_ps_school_name').keyup( () => {
		shs_ps_school_name = $('#shs_ps_school_name').val();
	})
	$('#shs_ps_year_start, #shs_ps_year_end, #shs_ps_province, #shs_ps_city').change( () => {
		shs_ps_year_start = $('#shs_ps_year_start').val()
		shs_ps_year_end = $('#shs_ps_year_end').val()
		shs_ps_province = $('#shs_ps_province').val()
		shs_ps_city = $('#shs_ps_city').val()
	})
	// SHS Pre school add button
	$('#shs_ps_add_button').click( () => {
		console.log('clicked')
		if(shs_ps_school_name === "" || shs_ps_year_start === "" || shs_ps_year_end === "" || shs_ps_province === "" || shs_ps_city === ""){
			frappe.throw('<p class="text-red">Please fill all values carefully</p>');
		}else{
			let my_object = {}
			my_object.school = shs_ps_school_name
			my_object.year_started = shs_ps_year_start
			my_object.year_ended = shs_ps_year_end
			my_object.province = shs_ps_province
			my_object.city = shs_ps_city

			shs_ps_array.push(my_object)
			console.log(shs_ps_array)
			$('#shs_ps_school_name').val("")
			$('#shs_ps_year_start').val("")
			$('#shs_ps_year_end').val("")
			$('#shs_ps_province').val("")
			$('#shs_ps_city').val("")
			var shs_ps_table = `
				<tr>
					<td class="table-school">${shs_ps_school_name}</td>
					<td class="">${shs_ps_year_start}</td>
					<td class="">${shs_ps_year_end}</td>
					<td class="">${shs_ps_province}</td>
					<td class="">${shs_ps_city}</td>
				</tr>
			`
			$('.shs_ps_table').append(shs_ps_table)
			shs_ps_school_name = ""
			shs_ps_year_start =""
			shs_ps_year_end = ""
			shs_ps_province = ""
			shs_ps_city = ""
		}
	})

	// SHS grade school functionalities
	var shs_gs_school_name =""
	var shs_gs_year_start = ""
	var shs_gs_year_end = ""
	var shs_gs_province = ""
	var shs_gs_city = ""
	var shs_gs_array = []
	//capturing the value
	$('.shs_gs_school_name').keyup( () => {
		shs_gs_school_name = $('#shs_gs_school_name').val();
	})
	$('#shs_gs_year_start, #shs_gs_year_end, #shs_gs_province, #shs_gs_city').change( () => {
		shs_gs_year_start = $('#shs_gs_year_start').val()
		shs_gs_year_end = $('#shs_gs_year_end').val()
		shs_gs_province = $('#shs_gs_province').val()
		shs_gs_city = $('#shs_gs_city').val()
	})
	// SHS grade school add button
	$('#shs_gs_add_button').click( () => {
		if(shs_gs_school_name === "" || shs_gs_year_start === "" || shs_gs_year_end === "" || shs_gs_province === "" || shs_gs_city === ""){
			frappe.throw('<p class="text-red">Please fill all values carefully</p>');
		}else{
			let my_object = {}
			my_object.school = shs_gs_school_name
			my_object.year_started = shs_gs_year_start
			my_object.year_ended = shs_gs_year_end
			my_object.province = shs_gs_province
			my_object.city = shs_gs_city

			shs_gs_array.push(my_object)
			console.log(shs_gs_array)
			$('#shs_gs_school_name').val("")
			$('#shs_gs_year_start').val("")
			$('#shs_gs_year_end').val("")
			$('#shs_gs_province').val("")
			$('#shs_gs_city').val("")
			var shs_gs_table = `
				<tr>
					<td class="table-school">${shs_gs_school_name}</td>
					<td class="">${shs_gs_year_start}</td>
					<td class="">${shs_gs_year_end}</td>
					<td class="">${shs_gs_province}</td>
					<td class="">${shs_gs_city}</td>
				</tr>
			`
			$('.shs_gs_table').append(shs_gs_table)
			shs_gs_school_name = ""
			shs_gs_year_start =""
			shs_gs_year_end = ""
			shs_gs_province = ""
			shs_gs_city = ""
		}
	})

	//College JHS

	var shs_jhs_school_name =""
	var shs_jhs_year_start = ""
	var shs_jhs_year_end = ""
	var shs_jhs_province = ""
	var shs_jhs_city = ""
	var shs_jhs_array = []
	//capturing the value
	$('.shs_jhs_school_name').keyup( () => {
		shs_jhs_school_name = $('#shs_jhs_school_name').val();
	})
	$('#shs_jhs_year_start, #shs_jhs_year_end, #shs_jhs_province, #shs_jhs_city').change( () => {
		shs_jhs_year_start = $('#shs_jhs_year_start').val()
		shs_jhs_year_end = $('#shs_jhs_year_end').val()
		shs_jhs_province = $('#shs_jhs_province').val()
		shs_jhs_city = $('#shs_jhs_city').val()
	})
	// SHS jhs add button
	$('#shs_jhs_add_button').click( () => {
		if(shs_jhs_school_name === "" || shs_jhs_year_start === "" || shs_jhs_year_end === "" || shs_jhs_province === "" || shs_jhs_city === ""){
			frappe.throw('<p class="text-red">Please fill all values carefully</p>');
		}else{
			let my_object = {}
			my_object.school = shs_jhs_school_name
			my_object.year_started = shs_jhs_year_start
			my_object.year_ended = shs_jhs_year_end
			my_object.province = shs_jhs_province
			my_object.city = shs_jhs_city

			shs_jhs_array.push(my_object)
			console.log(shs_jhs_array)
			$('#shs_jhs_school_name').val("")
			$('#shs_jhs_year_start').val("")
			$('#shs_jhs_year_end').val("")
			$('#shs_jhs_province').val("")
			$('#shs_jhs_city').val("")
			var shs_jhs_table = `
				<tr>
					<td class="table-school">${shs_jhs_school_name}</td>
					<td class="">${shs_jhs_year_start}</td>
					<td class="">${shs_jhs_year_end}</td>
					<td class="">${shs_jhs_province}</td>
					<td class="">${shs_jhs_city}</td>
				</tr>
			`
			$('.shs_jhs_table').append(shs_jhs_table)
			shs_jhs_school_name = ""
			shs_jhs_year_start =""
			shs_jhs_year_end = ""
			shs_jhs_province = ""
			shs_jhs_city = ""
		}
	})


    //GradSchool College

	var grad_college_school_name =""
	var grad_college_year_start = ""
	var grad_college_year_end = ""
	var grad_college_province = ""
	var grad_college_city = ""
	var grad_college_array = []
	//capturing the value
	$('.grad_college_school_name').keyup( () => {
		grad_college_school_name = $('#grad_college_school_name').val();
	})
	$('#grad_college_year_start, #grad_college_year_end, #grad_college_province, #grad_college_city').change( () => {
		grad_college_year_start = $('#grad_college_year_start').val()
		grad_college_year_end = $('#grad_college_year_end').val()
		grad_college_province = $('#grad_college_province').val()
		grad_college_city = $('#grad_college_city').val()
	})
	// SHS jhs add button
	$('#grad_college_add_button').click( () => {
		if(grad_college_school_name === "" || grad_college_year_start === "" || grad_college_year_end === "" || grad_college_province === "" || grad_college_city === ""){
			frappe.throw('<p class="text-red">Please fill all values carefully</p>');
		}else{
			let my_object = {}
			my_object.school = grad_college_school_name
			my_object.year_started = grad_college_year_start
			my_object.year_ended = grad_college_year_end
			my_object.province = grad_college_province
			my_object.city = grad_college_city

			grad_college_array.push(my_object)
			console.log(grad_college_array)
			$('#grad_college_school_name').val("")
			$('#grad_college_year_start').val("")
			$('#grad_college_year_end').val("")
			$('#grad_college_province').val("")
			$('#grad_college_city').val("")
			var grad_college_table = `
				<tr>
					<td class="table-school">${grad_college_school_name}</td>
					<td class="">${grad_college_year_start}</td>
					<td class="">${grad_college_year_end}</td>
					<td class="">${grad_college_province}</td>
					<td class="">${grad_college_city}</td>
				</tr>
			`
			$('.grad_college_table').append(grad_college_table)
			grad_college_school_name = ""
			grad_college_year_start =""
			grad_college_year_end = ""
			grad_college_province = ""
			grad_college_city = ""
		}
	})


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





	// Redirection
	$('#show-button').click( () => {
		$('#personal_info').show()
		$('#admission, .educational_background_college, .educational_background_jhs, .educational_background_shs, .educational_background_grad').hide()
	})
	$('#back_to_admission, .back_to_admission').click( () => {
		$('#personal_info, .educational_background_college, .educational_background_jhs, .educational_background_shs, .educational_background_grad').hide()
		$('#admission').show()
	})
	$('#back_to_step1').click( () => {
		location.replace("/lead-app")
	})
	
	// back to information form
	$('.back_to_personal_info').click( () => {
		$('#personal_info').show()
		$('#admission, .educational_background_college, .educational_background_jhs, .educational_background_shs, .educational_background_grad').hide()
	})
	// continue to confirmation
	$('.continue_to_confirmation').click( () => {
		const p_first_name = frappe.web_form.get_value("first_name")
		const p_last_name = frappe.web_form.get_value("last_name")
		const ref_number = frappe.web_form.get_value("reference_number")
		const student_type = frappe.web_form.get_value("student_type")
		const academic_department = frappe.web_form.get_value("academic_department")
		const program = frappe.web_form.get_value("program")
		const email = frappe.web_form.get_value("personal_email_address")
		const number = frappe.web_form.get_value("mobile_contact_number")

		var acad_value = $('#acadcDept').val();
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
		let grade_level = educational_level + " - " + program
		console.log(educational_level);



		if (false){ //Gs_pre_school_array.length === 0
			frappe.throw('<p class="text-red">Grade School is Required</p>')	
		}else{
			frappe.web_form.save()
            
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
					<h6 class="font-weight-bold">Congratulations, ${first_name + " " + last_name}</h6>
				</div>
				<p class="text12">This confirms you that you have successfully submitted your pre-application form to PCCR. If you wish to continue enrolling here in PCCR, you are 1 step away from it. If you do not wish to continue as of the moment, you may do it some other time.
					<br>
					<br>
					<span class="text-red">Please note down your Reference Number in a piece of paper as you will need this to enter on the next step.</span>
				</p>
				<p><h6 class="head-sm mb-0 font-weight-bold">Reference Number: ${ref_number}</h6></p>
				<div class="row">
						<div class="col-md-10 row">
							<div class="col-md-3">
								<h6 class="head-sm mb-0 font-weight-bold">Applicant Name</h6>
								<p class="text-gray text12 p-0">${first_name + " " + last_name}</p>
							</div>
							<div class="col-md-3 ">
								<h6 class="head-sm mb-0 font-weight-bold">Student Type</h6>
								<p class="text-gray text12 p-0">${student_type}</p>
							</div>
							<div class="col-md-3">
								<h6 class="head-sm mb-0 font-weight-bold">Academic Department</h6>
								<p class="text-gray text12 p-0">${academic_department}</p>
							</div>
							<div class="col-md-3">
								<h6 class="head-sm mb-0 font-weight-bold">Program</h6>
								<p class="text-gray text12 p-0">${program}</p>
							</div>
						</div>
						
						<div class="col-md-10 row mt-5">
							<div class="col-md-3">
								<h6 class="head-sm mb-0 font-weight-bold">Grade Level</h6>
								<p class="text-gray text12 p-0">${grade_level}</p>
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
								<p class="text-gray text12 p-0">${educational_level}</p>
							</div>
						</div>
						<p class="text12">A confirmation email has also been sent to your email address containing your PCCR Applicant Reference Number</p>
						</div>
						<div class="text-center my-5">
							<div id="submit" class="btn btn-primary">Download Application Form</div>
							<a class="text-center text12" href="/lead-app/app-stud"><div class="btn btn-primary">Continue Enrollment</div></a>
						</div>
					</div>
					${button_footer}
			</div>
		
		`
		$('.educational_background_college').hide()
		$('.educational_background_jhs').hide()
		$('.educational_background_shs').hide()
		$('.educational_background_grad').hide()
		$('body').append(confirmation)
		}
	})        
	}
// })



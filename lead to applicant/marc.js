

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
      console.log(r)
      var refDecoded = "22-002111"
      fetch('/api/resource/Admission PCCR/' + refDecoded)
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
      
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

    const Admission = `
      <div class="container mb-5 text12">
      
      
      </div>

      <!-- header -->
      <div class="header">
        <h5 class="headerLabel font-weight-bold my-4">Educational Background</h5>
      </div>

      <!-- pre-school -->
      <div class="junior_high_school"> 
        <form>
          <div class="preSchool text12 form-group">
          <h6 class="inputGroup"> <b>Pre School</b> </h6>
            ------------------------
            <div class="row">
              

              

              

              

              
              
            </div>
            <div class="py-2 add_school" style="width:25px;">
                <div id="hs_add_button" class="cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
            </div>
          </div>
        </form>

        <form>
          <div class="preSchool text12 form-group">
            <h6 class="inputGroup my-4"> <b>Grade School</b> </h6>
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
            <div class="row">
              

              

             

              

              
            </div>
            <div class="py-2 add_school">
              <div id="gs_add_button" class="cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
            </div>
          </div>
        </form>
      </div>


      <!-- End of grade school -->

      <!-- Start of Senior High School --------------------------------------------->
      <div class="senior_highschool">
        <form>
          <div class="preSchool text12 form-group">
            <h6 class="inputGroup my-4"> <b>Pre-School</b> </h6>
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
            <div class="row">
              <div class="col-md-2">
                <label class="inputLabel" for="shs_ps_school_name">School Name<span class="text-red"> *</span></label>
                <input class="shs_ps_school_name longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="shs_ps_school_name" name="shs_ps_school_name" placeholder="Enter School Name"> </input>
              </div>

              <div class="col">
                <label class="inputLabel" for="shs_ps_year_start">Year Started<span class="text-red"> *</span></label>
                <input max="2022-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="shs_ps_year_start" name="shs_ps_year_start" placeholder="Date"> </input>
              </div>

              <div class="col">
                <label class="inputLabel" for="shs_ps_year_end">Year End<span class="text-red"> *</span></label>
                <input max="2022-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="shs_ps_year_end" name="shs_ps_year_end" placeholder="date""> </input>
              </div>

              <div class="col">
                <label class="inputLabel" for="shs_ps_province">Province<span class="text-red"> *</span></label>
                <select class="text-gray col-12 border bg-white border-dark c-p-5" name="shs_ps_province" id="shs_ps_province" >
                  <option selected disabled value="">Select province</option>
                </select>
              </div>

              <div class="col">
                <label class="inputLabel" for="shs_ps_city">City<span class="text-red"> *</span></label>
                <select class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_ps_city" id="shs_ps_city" >
                  <option selected disabled value="">Select City</option>
                </select>
              </div>
            </div>
            <div class="py-2 add_school">
              <div id="shs_ps_add_button" class=" cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
            </div>
          </div>
        </form>
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
            <div class="row">
              <div class="col-md-2">
                <label class="inputLabel" for="shs_gs_school_name">School Name<span class="text-red"> *</span></label>
                <input class="shs_gs_school_name longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="shs_gs_school_name" name="shs_gs_school_name" placeholder="Enter School Name"> </input>
              </div>
      
              <div class="col">
                <label class="inputLabel" for="shs_gs_year_start">Year Started<span class="text-red"> *</span></label>
                <input max="2022-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="shs_gs_year_start" name="shs_gs_year_start" placeholder="Date"> </input>
              </div>
      
              <div class="col">
                <label class="inputLabel" for="shs_gs_year_end">Year End<span class="text-red"> *</span></label>
                <input max="2022-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="shs_gs_year_end" name="shs_gs_year_end" placeholder="date""> </input>
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
                <label class="inputLabel" for="shs_gs_gradeS">Grade Ended<span class="text-red"> *</span></label>
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
                  <option selected disabled value="">Select province</option>
                </select>
              </div>
      
              <div class="col">
                <label class="inputLabel" for="shs_gs_city">City<span class="text-red"> *</span></label>
                <select class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_gs_city" id="shs_gs_city" >
                  <option selected disabled value="">Select City</option>
                </select>
              </div>
            </div>
            <div class="py-2 add_school">
              <div id="shs_gs_add_button" class=" cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
            </div>
          </div>
        </form>
        <form>
          <div class="preSchool text12 form-group">



            <h6 class="inputGroup my-4"> <b>Junior High School</b> </h6>
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
            <div class="row">
              <div class="col-md-2">
                <label class="inputLabel" for="shs_jhs_school_name">School Name<span class="text-red"> *</span></label>
                <input class="shs_jhs_school_name longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="shs_jhs_school_name" name="shs_jhs_school_name" placeholder="Enter School Name"> </input>
              </div>
      
              <div class="col">
                <label class="inputLabel" for="shs_jhs_year_start">Year Started<span class="text-red"> *</span></label>
                <input max="2022-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="shs_jhs_year_start" name="shs_jhs_year_start" placeholder="Date"> </input>
              </div>
      
              <div class="col">
                <label class="inputLabel" for="shs_jhs_year_end">Year End<span class="text-red"> *</span></label>
                <input max="2022-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="shs_jhs_year_end" name="shs_jhs_year_end" placeholder="date""> </input>
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
                <label class="inputLabel" for="shs_jhs_gradeEnded">Grade Ended<span class="text-red"> *</span></label>
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
                  <option selected disabled value="">Select province</option>
                </select>
              </div>
      
              <div class="col">
                <label class="inputLabel" for="shs_jhs_city">City<span class="text-red"> *</span></label>
                <select class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_jhs_city" id="shs_jhs_city" >
                  <option selected disabled value="">Select City</option>
                </select>
              </div>
            </div>
            <div class="py-2 add_school">
              <div id="shs_jhs_add_button" class=" cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
            </div>
          </div>
        </form>
      </div>
     
      <!-- End of senior High School --------------------------------------------------->


     <!--  College pre-school --------------------------------------------------------->
     <div class="college">  
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
              <input max="2022-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="college_ps_year_start" name="college_ps_year_start" placeholder="Date"> </input>
            </div>

            <div class="col-md-2">
              <label class="inputLabel" for="college_ps_year_end">Year End<span class="text-red"> *</span></label>
              <input max="2022-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="college_ps_year_end" name="college_ps_year_end" placeholder="date""> </input>
            </div>

            <div class="col-md-2">
              <label class="inputLabel" for="college_ps_province">Province<span class="text-red"> *</span></label>
              <select class="text-gray col-12 border bg-white border-dark c-p-5" name="college_ps_province" id="college_ps_province" >
                <option selected disabled value="">Select province</option>
              </select>
            </div>

            <div class="col-md-2">
              <label class="inputLabel" for="college_ps_city">City<span class="text-red"> *</span></label>
              <select class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="college_ps_city" id="college_ps_city" >
                <option selected disabled value="">Select City</option>
              </select>
            </div>
            <div class="p-2">
              <div id="college_ps_add_button" class=" cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
            </div>
          </div>
        </div>
      </form>

        <form>
        <div class="preSchool text12 form-group">
          <h6 class="inputGroup my-4"> <b>Grade School</b> </h6>
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
          <div class="row">
            <div class="col-md-2">
              <label class="inputLabel" for="college_gs_school_name">School Name<span class="text-red"> *</span></label>
              <input class="college_gs_school_name longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="college_gs_school_name" name="college_gs_school_name" placeholder="Enter School Name"> </input>
            </div>
    
            <div class="col">
              <label class="inputLabel" for="college_gs_year_start">Year Started<span class="text-red"> *</span></label>
              <input max="2022-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="college_gs_year_start" name="college_gs_year_start" placeholder="Date"> </input>
            </div>
    
            <div class="col">
              <label class="inputLabel" for="college_gs_year_end">Year End<span class="text-red"> *</span></label>
              <input max="2022-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="college_gs_year_end" name="college_gs_year_end" placeholder="date""> </input>
            </div>
            
            <div class="col">
              <label class="inputLabel" for="college_gs_started">Grade Started<span class="text-red"> *</span></label>
              <select id="college_gs_started" class="text-gray col-12 border bg-white border-dark c-p-5" name="GsProvince"  >
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
              <label class="inputLabel" for="college_gs_ended">Grade Ended<span class="text-red"> *</span></label>
              <select id="college_gs_ended" class="text-gray col-12 border bg-white border-dark c-p-5" name="GsProvince"  >
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
                <option selected disabled value="">Select province</option>
              </select>
            </div>
    
            <div class="col">
              <label class="inputLabel" for="college_gs_city">City<span class="text-red"> *</span></label>
              <select class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="college_gs_city" id="college_gs_city" >
                <option selected disabled value="">Select City</option>
              </select>
            </div>
          </div>
          <div class="py-2 add_school">
            <div id="college_gs_add_button" class=" cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
          </div>
        </div>
      </form>

      <form>
        <div class="preSchool text12 form-group">
          <h6 class="inputGroup my-4"> <b>Junior High School</b> </h6>
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
          <div class="row">
            <div class="col-md-2">
              <label class="inputLabel" for="college_jhs_school_name">School Name<span class="text-red"> *</span></label>
              <input class="college_jhs_school_name longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="college_jhs_school_name" name="college_jhs_school_name" placeholder="Enter School Name"> </input>
            </div>
    
            <div class="col">
              <label class="inputLabel" for="college_jhs_year_start">Year Started<span class="text-red"> *</span></label>
              <input max="2022-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="college_jhs_year_start" name="college_jhs_year_start" placeholder="Date"> </input>
            </div>
    
            <div class="col">
              <label class="inputLabel" for="college_jhs_year_end">Year End<span class="text-red"> *</span></label>
              <input max="2022-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="college_jhs_year_end" name="college_jhs_year_end" placeholder="date""> </input>
            </div>
            
            <div class="col">
              <label class="inputLabel" for="college_jhs_started">Grade Started<span class="text-red"> *</span></label>
              <select id="college_jhs_started" class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_ps_city">
                <option value="select">Select Grade Started</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8">Grade 8</option>
                              <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
              </select>
            </div>

            <div class="col"> 
              <label class="inputLabel" for="college_jhs_ended">Grade Ended<span class="text-red"> *</span></label>
              <select id="college_jhs_ended" class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="shs_ps_city">
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
                <option selected disabled value="">Select province</option>
              </select>
            </div>
    
            <div class="col">
              <label class="inputLabel" for="college_jhs_city">City<span class="text-red"> *</span></label>
              <select class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="college_jhs_city" id="college_jhs_city" >
                <option selected disabled value="">Select City</option>
              </select>
            </div>
          </div>
          <div class="py-2 add_school">
            <div id="college_jhs_add_button" class=" cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
          </div>
        </div>
      </form>

      <form>
        <div class="preSchool text12 form-group">
          
         
          <div class="row">
            <div class="col-md-2">
              <label class="inputLabel" for="college_shs_school_name">School Name<span class="text-red"> *</span></label>
              <input class="college_shs_school_name longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="college_shs_school_name" name="college_shs_school_name" placeholder="Enter School Name"> </input>
            </div>
    
            <div class="col">
              <label class="inputLabel" for="college_shs_year_start">Year Started<span class="text-red"> *</span></label>
              <input max="2022-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="college_shs_year_start" name="college_shs_year_start" placeholder="Date"> </input>
            </div>
    
            <div class="col">
              <label class="inputLabel" for="college_shs_year_end">Year End<span class="text-red"> *</span></label>
              <input max="2022-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="college_shs_year_end" name="college_shs_year_end" placeholder="date""> </input>
            </div>
            
           
          </div>
          <div class="py-2 add_school">
            <div id="college_shs_add_button" class=" cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
          </div>
        </div>
      </form>
     </div>

     
     <!-- End of college pre school -->

     <!-- Start of college -->
     <div class="graduate_school">
       <form>
        <div class="preSchool text12 form-group">
          
          <div class="row">
            <div class="col-md-2">
              <label class="inputLabel" for="grad_college_school_name">School Name<span class="text-red"> *</span></label>
              <input class="grad_college_school_name longInput form-control form-control-sm border bg-white rounded-0 border-dark"  type="text" id="grad_college_school_name" name="grad_college_school_name" placeholder="Enter School Name"> </input>
            </div>
    
            <div class="col">
              <label class="inputLabel" for="grad_college_year_start">Year Started<span class="text-red"> *</span></label>
              <input max="2022-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="grad_college_year_start" name="grad_college_year_start" placeholder="Date"> </input>
            </div>
    
            <div class="col">
              <label class="inputLabel" for="grad_college_year_end">Year End<span class="text-red"> *</span></label>
              <input max="2022-12-31" class="standardInput form-control form-control-sm border bg-white rounded-0 border-dark" type="date" id="grad_college_year_end" name="grad_college_year_end" placeholder="date""> </input>
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
                <option value="Second Year">Second Year</option>
                <option value="Third Year">Third Year</option>
                <option value="Fourth Year">Fourth Year</option>
                <option value="Fifth Year">Fifth Year</option>
              </select>
            </div>
            <div class="col">
              <label class="inputLabel" for="grad_college_province">Province<span class="text-red"> *</span></label>
              <select class="text-gray col-12 border bg-white border-dark c-p-5" name="grad_college_province" id="grad_college_province" >
                <option selected disabled value="">Select province</option>
              </select>
            </div>
            <div class="col">
              <label class="inputLabel" for="grad_college_city">City<span class="text-red"> *</span></label>
              <select class="standardSelector text-gray col-12 border bg-white border-dark c-p-5" name="grad_college_city" id="grad_college_city" >
                <option selected disabled value="">Select City</option>
              </select>
            </div>
          </div>
          <div class="py-2 add_school">
            <div id="grad_college_add_button" class=" cursor-pointer border rounded-0 py-1 px-3 border-dark">+ Add School</div>
          </div>
        </div>
      </form>
     </div>
       <div class="text12">
        <div class="d-flex justify-content-center">
          <div class="back_to_personal_info back cursor-pointer border boder-0 mx-2 py-1 px-3">Back</div>
          <div class="continue continue_to_confirmation cursor-pointer border btn-primary boder-0 mr-2 py-1 px-3">Continue</div>
        </div>
      </div>
       <div class="text12">
        <div class="footer mt-5">
          <hr>
          <p class="p-5">© Philippine College of Criminology</p>
        </div>
      </d>
    </div>
    `
    
  $('Body').append(Admission);
  let data = frappe.web_form.get_values();
  console.log(data)
  const acad_value = data.academic_department
  console.log(acad_value)
  //const acad_value = "D05"
    
    var refEncoded = sessionStorage.ref_number
    var refDecoded = atob(refEncoded).split("=").pop()
    console.log(refDecoded)
    $('title').html(refDecoded)
    fetch('/api/resource/Admission PCCR/' + refDecoded)
    .then(res => res.json())
    .then(res => {
     console.log(res)
     console.log(res.data.student_type)
     if (res.data.student_type == "Second Courser") {
        if(acad_value === "D05"){
            $('.college, .college .preSchool, .graduate_school, .senior_highschool').hide()
        }
        else if(acad_value === "D06"){
            $('.college, .junior_high_school, .graduate_school').hide()
        }else if(acad_value === "D07"){
            $('.junior_high_school, .senior_highschool').hide()
        }else if(acad_value === "D08"){
            $('.junior_high_school, .senior_highschool').hide()
        }
     }
     else if (res.data.student_type == "Transferee") {
        if(acad_value === "D05"){
            $('.college, .junior_high_school, .graduate_school').hide()
        }
        else if(acad_value === "D06"){
            $('.junior_high_school, .graduate_school, .senior_highschool').hide()
        }else if(acad_value === "D07"){
            $('.junior_high_school, .senior_highschool').hide()
        }else if(acad_value === "D08"){
            $('.junior_high_school, .senior_highschool').hide()
        }
     }
     else {
        if(acad_value === "D05"){
        $('.college, .college .preSchool, .graduate_school, .senior_highschool').hide()
        }
        else if(acad_value === "D06"){
            $('.college, .junior_high_school, .graduate_school').hide()
        }else if(acad_value === "D07"){
            $('.junior_high_school, .graduate_school, .senior_highschool').hide()
        }else if(acad_value === "D08"){
            $('.junior_high_school, .senior_highschool').hide()
        }
     }
     
     
    })
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

  $('#HsProvince').change(function() {
    var province = $(this).children(":selected").attr("id");
    $('#HsCity')
    .empty()
    .append($("<option selected value='not-selected'>Select City</option>"));
  
    fetch('https://api.psgc.abakadastudios.com/api/provinces/'+province+'?per_page=all&include=municipalities,cities')
    .then(response => response.json())
    .then(data => {
      data.data.cities.forEach(function(value) {
        $('#HsCity')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      }),
      data.data.municipalities.forEach(function(value) {
        $('#HsCity')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      });
      
    });
  })  

  $('#GsProvince').change(function() {
    var province = $(this).children(":selected").attr("id");
    $('#GsCity')
    .empty()
    .append($("<option selected value='not-selected'>Select City</option>"));
  
    fetch('https://api.psgc.abakadastudios.com/api/provinces/'+province+'?per_page=all&include=municipalities,cities')
    .then(response => response.json())
    .then(data => {
      data.data.cities.forEach(function(value) {
        $('#GsCity')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      }),
      data.data.municipalities.forEach(function(value) {
        $('#GsCity')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      });
      
    });
  })
    
  $('#college_ps_province').change(function() {
    var province = $(this).children(":selected").attr("id");
    $('#college_ps_city')
    .empty()
    .append($("<option selected value='not-selected'>Select City</option>"));
  
    fetch('https://api.psgc.abakadastudios.com/api/provinces/'+province+'?per_page=all&include=municipalities,cities')
    .then(response => response.json())
    .then(data => {
      data.data.cities.forEach(function(value) {
        $('#college_ps_city')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      }),
      data.data.municipalities.forEach(function(value) {
        $('#college_ps_city')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      });
      
    });
  })  
  $('#college_gs_province').change(function() {
    var province = $(this).children(":selected").attr("id");
    $('#college_gs_city')
    .empty()
    .append($("<option selected value='not-selected'>Select City</option>"));
  
    fetch('https://api.psgc.abakadastudios.com/api/provinces/'+province+'?per_page=all&include=municipalities,cities')
    .then(response => response.json())
    .then(data => {
      data.data.cities.forEach(function(value) {
        $('#college_gs_city')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      }),
      data.data.municipalities.forEach(function(value) {
        $('#college_gs_city')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      });
      
    });
  })

  $('#college_jhs_province').change(function() {
    var province = $(this).children(":selected").attr("id");
    $('#college_jhs_city')
    .empty()
    .append($("<option selected value='not-selected'>Select City</option>"));
  
    fetch('https://api.psgc.abakadastudios.com/api/provinces/'+province+'?per_page=all&include=municipalities,cities')
    .then(response => response.json())
    .then(data => {
      data.data.cities.forEach(function(value) {
        $('#college_jhs_city')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      }),
      data.data.municipalities.forEach(function(value) {
        $('#college_jhs_city')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      });
      
    });
  })  
  $('#college_shs_province').change(function() {
    var province = $(this).children(":selected").attr("id");
    $('#college_shs_city')
    .empty()
    .append($("<option selected value='not-selected'>Select City</option>"));
  
    fetch('https://api.psgc.abakadastudios.com/api/provinces/'+province+'?per_page=all&include=municipalities,cities')
    .then(response => response.json())
    .then(data => {
      data.data.cities.forEach(function(value) {
        $('#college_shs_city')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      }),
      data.data.municipalities.forEach(function(value) {
        $('#college_shs_city')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      });
      
    });
  })  
  $('#shs_ps_province').change(function() {
    var province = $(this).children(":selected").attr("id");
    $('#shs_ps_city')
    .empty()
    .append($("<option selected value='not-selected'>Select City</option>"));
  
    fetch('https://api.psgc.abakadastudios.com/api/provinces/'+province+'?per_page=all&include=municipalities,cities')
    .then(response => response.json())
    .then(data => {
      data.data.cities.forEach(function(value) {
        $('#shs_ps_city')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      }),
      data.data.municipalities.forEach(function(value) {
        $('#shs_ps_city')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      });
    });
  })
  $('#shs_gs_province').change(function() {
    
    var province = $(this).children(":selected").attr("id");
    
    $('#shs_gs_city')
    .empty()
    .append($("<option selected value='not-selected'>Select City</option>"));
  
    fetch('https://api.psgc.abakadastudios.com/api/provinces/'+province+'?per_page=all&include=municipalities,cities')
    .then(response => response.json())
    .then(data => {
      data.data.cities.forEach(function(value) {
        $('#shs_gs_city')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      }),
      data.data.municipalities.forEach(function(value) {
        $('#shs_gs_city')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      });
      
    });
  })  
  $('#shs_jhs_province').change(function() {
    
    var province = $(this).children(":selected").attr("id");
    
    $('#shs_jhs_city')
    .empty()
    .append($("<option selected value='not-selected'>Select City</option>"));
  
    fetch('https://api.psgc.abakadastudios.com/api/provinces/'+province+'?per_page=all&include=municipalities,cities')
    .then(response => response.json())
    .then(data => {
      data.data.cities.forEach(function(value) {
        $('#shs_jhs_city')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      }),
      data.data.municipalities.forEach(function(value) {
        $('#shs_jhs_city')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      });
      
    });
  })  
  $('#grad_college_province').change(function() {
    
    var province = $(this).children(":selected").attr("id");
    
    $('#grad_college_city')
    .empty()
    .append($("<option selected value='not-selected'>Select City</option>"));
  
    fetch('https://api.psgc.abakadastudios.com/api/provinces/'+province+'?per_page=all&include=municipalities,cities')
    .then(response => response.json())
    .then(data => {
      data.data.cities.forEach(function(value) {
        $('#grad_college_city')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      }),
      data.data.municipalities.forEach(function(value) {
        $('#grad_college_city')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .text(value.name)); 
      });
      
    });
  })          
  //End Location API  
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
    if(School_name === "" || Year_started === "" || Year_end === "" || Province === null || city === null){
      frappe.throw('<p class="text-red">Please fill all values carefully</p>');
    }else{
        if (Year_started <= Year_end) {
          let my_object = {}
          my_object.schhol = School_name
          my_object.year_started = Year_started
          my_object.year_ended = Year_end
          my_object.province = Province
          my_object.city = city
          pre_school_array.push(my_object)
          
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
            }else{
               frappe.throw('Year Started must be less than Year Ended.')
            }
          const get_preschool_array = () => {
            console.log(pre_school_array)
          }
    }
  })
   


  // Grade schhool functionalities
  var Gs_School_name =""
  var Gs_Year_started = ""
  var Gs_Year_end = ""
  var Gs_Province = ""
  var Gs_city = ""
  var GsStarted = ""
  var GsEnded = ""
  var Gs_pre_school_array = []
  //capturing the value
  $('.gs_get_value').keyup( () => {
    Gs_School_name = $('#GsSchoolName').val();
  })
  $('#GsYearStart, #GsYearEnd, #GsProvince, #GsCity, #GsStarted, #GsEnded').change( () => {
    Gs_Year_started = $('#GsYearStart').val()
    Gs_Year_end = $('#GsYearEnd').val()
    Gs_Province = $('#GsProvince').val()
    Gs_city = $('#GsCity').val()
    GsStarted = $('#GsStarted').val()
    GsEnded = $('#GsEnded').val()
  })
  //Grade school add button
  $('#gs_add_button').click( () => {
    if(Gs_School_name === "" || Gs_Year_started === "" || Gs_Year_end === "" || Gs_Province == null || Gs_city == null || GsStarted == null || GsEnded == null){
      console.log(Gs_Province);
            console.log(Gs_city);
            console.log(GsStarted);
            console.log(GsEnded);
      frappe.throw('Please fill all values carefully');

    }else{
            const gradeStartedArray = GsStarted.split(" ")
            const gradeEndedArray = GsEnded.split(" ")

            let gradeStartedNumber = gradeStartedArray[1]
            let gradeEndedNumber = gradeEndedArray[1]

            console.log(gradeStartedNumber)
            console.log(gradeEndedNumber)
            
            console.log("this is gs year started" + Gs_Year_started)
            console.log(Gs_Year_end)

            if (gradeStartedNumber <= gradeEndedNumber) {
              if(Date.parse(Gs_Year_started) < Date.parse(Gs_Year_end)){
                   let gs_my_object = {}
                    gs_my_object.schhol = Gs_School_name
                    gs_my_object.year_started = Gs_Year_started
                    gs_my_object.year_ended = Gs_Year_end
                    gs_my_object.province = Gs_Province
                    gs_my_object.city = Gs_city
                    gs_my_object.started = GsStarted
                    gs_my_object.ended = GsEnded
                    
                    Gs_pre_school_array.push(gs_my_object)
                    console.log(Gs_pre_school_array)
                    $('#GsSchoolName').val("")
                    $('#GsYearStart').val("")
                    $('#GsYearEnd').val("")
                    $('#GsProvince').val("")
                    $('#GsCity').val("")
                    $('#GsStarted').val("")
                    $('#GsEnded').val("")
                    var gs_table = `
                        <tr>
                            <td class="table-school">${Gs_School_name}</td>
                            <td class="">${Gs_Year_started}</td>
                            <td class="">${Gs_Year_end}</td>
                            <td class = "">${GsStarted}</td>
                            <td class = "">${GsEnded}</td>
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
                    GsStarted = ""
                    GsEnded = ""  
            }else{
               frappe.throw('Year Started must be less than Year Ended.')
            }
            } else{
                frappe.throw('Grade Started must be less than Grade Ended.')
            }
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
    if(college_ps_school_name === "" || college_ps_year_start === "" || college_ps_year_end === "" || college_ps_province === null || college_ps_city === null){
      frappe.throw('<p class="text-red">Please fill all values carefully</p>');
    }else{
    
        if (college_ps_year_start <= college_ps_year_end) {
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
            }else{
               frappe.throw('Year Started must be less than Year Ended.')
            }
      
    }
  })

  // College grade school functionalities
  var college_gs_school_name =""
  var college_gs_year_start = ""
  var college_gs_year_end = ""
  var college_gs_province = ""
  var college_gs_city = ""
  var college_gs_started  = ""
  var college_gs_ended = ""
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
    college_gs_started = $('#college_gs_started').val()
    college_gs_ended = $('#college_gs_ended').val()
  })
  // College grade school add button
  $('#college_gs_add_button').click( () => {
    if(college_gs_school_name === "" || college_gs_year_start === "" || college_gs_year_end === "" || college_gs_province === null || college_gs_city === null || college_gs_started === null || college_gs_ended === null){
      frappe.throw('<p class="text-red">Please fill all values carefully</p>');
    }else{
            const startedArray = college_gs_started.split(" ");
            let startedNumber = startedArray[1];

            const endedArray = college_gs_ended.split(" ");
            let endedNumber = endedArray[1];

            if (startedNumber <= endedNumber){
                if (college_gs_year_start <= college_gs_year_end){
                    let my_object = {}
                    my_object.school = college_gs_school_name
                    my_object.year_started = college_gs_year_start
                    my_object.year_ended = college_gs_year_end
                    my_object.province = college_gs_province
                    my_object.city = college_gs_city
                    my_object.started = college_gs_started
                    my_object.ended = college_gs_ended
        
                    college_gs_array.push(my_object)
                    console.log(college_gs_array)
                    $('#college_gs_school_name').val("")
                    $('#college_gs_year_start').val("")
                    $('#college_gs_year_end').val("")
                    $('#college_gs_province').val("")
                    $('#college_gs_city').val("")
                    $('#college_gs_started').val("")
                    $('#college_gs_ended').val("")
                    var college_gs_table = `
                        <tr>
                            <td class="table-school">${college_gs_school_name}</td>
                            <td class="">${college_gs_year_start}</td>
                            <td class="">${college_gs_year_end}</td>
                            <td class = "">${college_gs_started}</td>
                            <td class = "">${college_gs_ended}</td>
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
                    college_gs_started = ""
                    college_gs_ended =  ""
                }else{
                   frappe.throw('Year Started must be less than Year Ended.')
                }
            } else{
                frappe.throw("Please ensure that the grade ended is greater than the grade started.")
            }

    }
  })

  //College JHS

  var college_jhs_school_name =""
  var college_jhs_year_start = ""
  var college_jhs_year_end = ""
  var college_jhs_province = ""
  var college_jhs_city = ""
  var college_jhs_started = ""
  var college_jhs_ended = "" 
  var college_jhs_array = []
  //capturing the value
  $('.college_jhs_school_name').keyup( () => {
    college_jhs_school_name = $('#college_jhs_school_name').val();
  })
  $('#college_jhs_year_start, #college_jhs_year_end, #college_jhs_province, #college_jhs_city, #college_jhs_started, #college_jhs_ended').change( () => {
    college_jhs_year_start = $('#college_jhs_year_start').val()
    college_jhs_year_end = $('#college_jhs_year_end').val()
    college_jhs_province = $('#college_jhs_province').val()
    college_jhs_city = $('#college_jhs_city').val()
    college_jhs_started = $('#college_jhs_started').val()
    college_jhs_ended = $('#college_jhs_ended').val()
  })
  // College grade school add button
  $('#college_jhs_add_button').click( () => {
    if(college_jhs_school_name === "" || college_jhs_year_start === "" || college_jhs_year_end === "" || college_jhs_province === null || college_jhs_city === null || college_jhs_started === null ||  college_jhs_ended === null){
      frappe.throw('<p class="text-red">Please fill all values carefully</p>');
    }else{
        console.log("THIS IS ADDING JHS IN COLLEGE DEPARTMENT");
        console.log("This is year start: " + college_jhs_year_start);
        console.log("This is year end: " + college_jhs_year_end);
        
        const startedArray = college_jhs_started.split(" ");
        let startedNumber = parseInt(startedArray[1]) 

        const endedArray = college_jhs_ended.split(" ");
        let endedNumber = parseInt(endedArray[1]) 
        
        console.log("This is grade start: " + startedNumber);
        console.log("This is grade end: " + endedNumber);
        
        if (startedNumber <= endedNumber) {
            console.log("passed number validation");
        }
        else {
            console.log("FAILED number validation, starting number:" + startedNumber +" ended number:" + endedNumber);
        
        }

        if (startedNumber <= endedNumber)  {
            console.log("passed number validation");
            if (college_jhs_year_start < college_jhs_year_end){
                let my_object = {}
                my_object.school = college_jhs_school_name
                my_object.year_started = college_jhs_year_start
                my_object.year_ended = college_jhs_year_end
                my_object.province = college_jhs_province
                my_object.city = college_jhs_city
                my_object.started = college_jhs_started
                my_object.ended = college_jhs_ended
    
                college_jhs_array.push(my_object)
                console.log(college_jhs_array)
                $('#college_jhs_school_name').val("")
                $('#college_jhs_year_start').val("")
                $('#college_jhs_year_end').val("")
                $('#college_jhs_province').val("")
                $('#college_jhs_city').val("")
                $('#college_jhs_started').val("")
                $('#college_jhs_started').val("")
                var college_jhs_table = `
                    <tr>
                        <td class="table-school">${college_jhs_school_name}</td>
                        <td class="">${college_jhs_year_start}</td>
                        <td class="">${college_jhs_year_end}</td>
                        <td class = "">${college_jhs_started}</td>
                        <td class = "">${college_jhs_ended}</td>
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
                college_jhs_started = ""
                college_jhs_ended = ""
            }else{
               frappe.throw('Year Started must be less than Year Ended.')
            }
        } else{
            frappe.throw("Please ensure that the grade ended is greater than the grade started.")
        }

    }
  })

  //College SHS
  // College grade school functionalities
  var college_shs_school_name =""
  var college_shs_year_start = ""
  var college_shs_year_end = ""
  var college_shs_province = ""
  var college_shs_city = ""
  var college_shs_started = ""
  var college_shs_ended = ""
  var college_shs_array  = []
  //capturing the value
  $('.college_shs_school_name').keyup( () => {
    college_shs_school_name = $('#college_shs_school_name').val();
  })
  $('#college_shs_year_start, #college_shs_year_end, #college_shs_province, #college_shs_city, #college_shs_started, #college_shs_ended').change( () => {
    college_shs_year_start = $('#college_shs_year_start').val()
    college_shs_year_end = $('#college_shs_year_end').val()
    college_shs_province = $('#college_shs_province').val()
    college_shs_city = $('#college_shs_city').val()
    college_shs_started = $('#college_shs_started').val()
    college_shs_ended = $('#college_shs_ended').val()
    college_shs_school_name = $('#college_shs_school_name').val();
  })
  // College grade school add button
  $('#college_shs_add_button').click( () => {
    if(college_shs_school_name === "" || college_shs_year_start === "" || college_shs_year_end === "" || college_shs_province === null || college_shs_city === null || college_shs_started === null || college_shs_ended === null){
      frappe.throw('<p class="text-red">Please fill all values carefully</p>');
    }else{
            const startedArray = college_shs_started.split(" ");
            let startedNumber = parseInt(startedArray[1]) 

            const endedArray = college_shs_ended.split(" ");
            let endedNumber = parseInt(endedArray[1]) 

            if (startedNumber <= endedNumber) {
                if (college_shs_year_start <= college_shs_year_end){
                    let my_object = {}
                    my_object.school = college_shs_school_name
                    my_object.year_started = college_shs_year_start
                    my_object.year_ended = college_shs_year_end
                    my_object.province = college_shs_province
                    my_object.city = college_shs_city
                    my_object.started = college_shs_started
                    my_object.ended = college_shs_ended
        
                    college_shs_array.push(my_object)
                    console.log(college_shs_array)
                    $('#college_shs_school_name').val("")
                    $('#college_shs_year_start').val("")
                    $('#college_shs_year_end').val("")
                    $('#college_shs_province').val("")
                    $('#college_shs_city').val("")
                    $('#college_shs_started').val("")
                    $('#college_shs_ended').val("")
                    
                    var college_shs_table = `
                        <tr>
                            <td class="table-school">${college_shs_school_name}</td>
                            <td class="">${college_shs_year_start}</td>
                            <td class="">${college_shs_year_end}</td>
                            <td class = "">${college_shs_started}</td>
                            <td class = "">${college_shs_ended}</td>
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
                    college_shs_started = ""
                    college_shs_ended = ""
                }else{
                   frappe.throw('Year Started must be less than Year Ended.')
                }
            } else{
                frappe.throw("Please ensure that the grade ended is greater than the grade started.")
            }

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
    if(shs_ps_school_name === "" || shs_ps_year_start === "" || shs_ps_year_end === "" || shs_ps_province === null || shs_ps_city === null){
      frappe.throw('<p class="text-red">Please fill all values carefully</p>');
    }else{
        if (shs_ps_year_start <= shs_ps_year_end){
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
            }else{
               frappe.throw('Year Started must be less than Year Ended.')
            }
      
    }
  })

  // SHS grade school functionalities
  var shs_gs_school_name =""
  var shs_gs_year_start = ""
  var shs_gs_year_end = ""
  var shs_gs_province = ""
  var shs_gs_city = ""
  var shs_gs_gradeStarted = ""
  var shs_gs_gradeEnded = ""
  var shs_gs_array = []
  //capturing the value
  $('.shs_gs_school_name').keyup( () => {
    shs_gs_school_name = $('#shs_gs_school_name').val();
  })
  $('#shs_gs_year_start, #shs_gs_year_end, #shs_gs_province, #shs_gs_city, #shs_gs_gradeStarted, #shs_gs_gradeEnded').change( () => {
    shs_gs_year_start = $('#shs_gs_year_start').val()
    shs_gs_year_end = $('#shs_gs_year_end').val()
    shs_gs_province = $('#shs_gs_province').val()
    shs_gs_city = $('#shs_gs_city').val()
    shs_gs_gradeStarted = $('#shs_gs_gradeStarted').val()
    shs_gs_gradeEnded = $('#shs_gs_gradeEnded').val()
  })
  // SHS grade school add button
  $('#shs_gs_add_button').click( () => {
    if(shs_gs_school_name === "" || shs_gs_year_start === "" || shs_gs_year_end === "" || shs_gs_province === null || shs_gs_city === null || shs_gs_gradeStarted  === null || shs_gs_gradeEnded === null){
      frappe.throw('<p class="text-red">Please fill all values carefully</p>');
    }else{
            const startedArray = shs_gs_gradeStarted.split(" ");
            let startedNumber =parseInt(startedArray[1]) 

            const endedArray = shs_gs_gradeEnded.split(" ");
            let endedNumber =parseInt(endedArray[1]) 

            if (startedNumber <= endedNumber) {
                if (shs_gs_year_start <= shs_gs_year_end){
                    let my_object = {}
                    my_object.school = shs_gs_school_name
                    my_object.year_started = shs_gs_year_start
                    my_object.year_ended = shs_gs_year_end
                    my_object.province = shs_gs_province
                    my_object.city = shs_gs_city
                    my_object.gradeStarted = shs_gs_gradeStarted
                    my_object.gradeEnded = shs_gs_gradeEnded
        
                    shs_gs_array.push(my_object)
                    console.log(shs_gs_array)
                    $('#shs_gs_school_name').val("")
                    $('#shs_gs_year_start').val("")
                    $('#shs_gs_year_end').val("")
                    $('#shs_gs_province').val("")
                    $('#shs_gs_city').val("")
                    $('#shs_gs_gradeStarted').val("")
                    $('#shs_gs_gradeEnded').val("")
                    
                    var shs_gs_table = `
                        <tr>
                            <td class="table-school">${shs_gs_school_name}</td>
                            <td class="">${shs_gs_year_start}</td>
                            <td class="">${shs_gs_year_end}</td>
                            <td class="">${shs_gs_gradeStarted}</td>
                            <td class="">${shs_gs_gradeEnded}</td>
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
                    shs_gs_gradeStarted  = ""
                    shs_gs_gradeEnded = ""
                }else{
                   frappe.throw('Year Started must be less than Year Ended.')
                }
            } else{
                frappe.throw("Please ensure that the grade ended is greater than the grade started.")
            }


    }
  })

  //College JHS

  var shs_jhs_school_name =""
  var shs_jhs_year_start = ""
  var shs_jhs_year_end = ""
  var shs_jhs_province = ""
  var shs_jhs_city = ""
  var shs_jhs_gradeStarted =  ""
  var shs_jhs_gradeEnded = ""
  var shs_jhs_array = []
  //capturing the value
  $('.shs_jhs_school_name').keyup( () => {
    shs_jhs_school_name = $('#shs_jhs_school_name').val();
  })
  $('#shs_jhs_year_start, #shs_jhs_year_end, #shs_jhs_province, #shs_jhs_city, #shs_jhs_gradeStarted, #shs_jhs_gradeEnded').change( () => {
    shs_jhs_year_start = $('#shs_jhs_year_start').val()
    shs_jhs_year_end = $('#shs_jhs_year_end').val()
    shs_jhs_province = $('#shs_jhs_province').val()
    shs_jhs_city = $('#shs_jhs_city').val()
    shs_jhs_gradeStarted = $('#shs_jhs_gradeStarted').val()
    shs_jhs_gradeEnded = $('#shs_jhs_gradeEnded').val()
    shs_jhs_school_name = $('#shs_jhs_school_name').val();
  })
  // SHS jhs add button
  $('#shs_jhs_add_button').click( () => {
    console.log("cliked")
    if(shs_jhs_school_name === "" || shs_jhs_year_start === "" || shs_jhs_year_end === "" || shs_jhs_province === null || shs_jhs_city === null || shs_jhs_gradeStarted === null || shs_jhs_gradeEnded === null){
      frappe.throw('<p class="text-red">Please fill all values carefully</p>');
    }else{
            const startedArray = shs_jhs_gradeStarted.split(" ");
            let startedNumber = parseInt(startedArray[1]) 

            const endedArray = shs_jhs_gradeEnded.split(" ");
            let endedNumber = parseInt(endedArray[1]) 

            if (startedNumber <= endedNumber) {
                if (shs_jhs_year_start <= shs_jhs_year_end){
                    let my_object = {}
                    my_object.school = shs_jhs_school_name
                    my_object.year_started = shs_jhs_year_start
                    my_object.year_ended = shs_jhs_year_end
                    my_object.province = shs_jhs_province
                    my_object.city = shs_jhs_city
                    my_object.gradeStarted = shs_jhs_gradeStarted
                    my_object.gradeEnded = shs_jhs_gradeEnded
        
                    shs_jhs_array.push(my_object)
                    console.log(shs_jhs_array)
                    $('#shs_jhs_school_name').val("")
                    $('#shs_jhs_year_start').val("")
                    $('#shs_jhs_year_end').val("")
                    $('#shs_jhs_province').val("")
                    $('#shs_jhs_city').val("")
                    $('#shs_jhs_gradeStarted').val("")
                    $('#shs_jhs_gradeEnded').val("")
                    var shs_jhs_table = `
                        <tr>
                            <td class="table-school">${shs_jhs_school_name}</td>
                            <td class="">${shs_jhs_year_start}</td>
                            <td class="">${shs_jhs_year_end}</td>
                            <td class="">${shs_jhs_gradeStarted}</td>
                            <td class="">${shs_jhs_gradeEnded}</td>
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
                    shs_jhs_gradeStarted = ""
                    shs_jhs_gradeEnded = ""
                }else{
                   frappe.throw('Year Started must be less than Year Ended.')
                }
            } else {
                frappe.throw("Please ensure that the grade ended is greater than the grade started.")
            }


    }
  })


    //College

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
    grad_college_grade_started = $('#college_jhs_gradeStarted').val()
    grad_college_grade_ended = $('#grad_collge_gradeEnded').val()
    grad_college_city = $('#grad_college_city').val()
    grad_college_school_name = $('#grad_college_school_name').val();
  })
  // SHS jhs add button
  $('#grad_college_add_button').click( () => {
    if(grad_college_school_name === "" || grad_college_year_start === "" || grad_college_year_end === "" || grad_college_province === null || grad_college_city === null){
      frappe.throw('<p class="text-red">Please fill all values carefully</p>');
    }else{
        const func = (string) => {
          var year = 0
          if(string == "First Year"){
            year = 1
          }else if(string == "Second Year"){
            year = 2
          }else if(string == "Thrird Year"){
            year = 3
          }else if(string == "Fourth Year"){
            year = 4
          }else if(string == "Fifth Year"){
            year = 5
          }
          return year
        }

        let collegeStarted = func($('#college_jhs_gradeStarted').val())
        let collegeEnded = func($('#grad_collge_gradeEnded').val())
        if (grad_college_year_start <= grad_college_year_end){
          if(collegeStarted >= collegeEnded){
            frappe.throw('Grade started must be less than grade ended.')
          }else{
             let my_object = {}
            my_object.school = grad_college_school_name
            my_object.year_started = grad_college_year_start
            my_object.year_ended = grad_college_year_end
            my_object.grade_started = grad_college_grade_started
            my_object.grade_ended = grad_college_grade_ended
            my_object.province = grad_college_province
            my_object.city = grad_college_city
      
            grad_college_array.push(my_object)
            $('#grad_college_school_name').val("")
            $('#grad_college_year_start').val("")
            $('#grad_college_year_end').val("")
            $('#grad_college_province').val("")
            $('#college_jhs_gradeStarted').val("")
            $('#grad_collge_gradeEnded').val("")
            $('#grad_college_city').val("")

            var grad_college_table = `
            <tr>
              <td class="table-school">${grad_college_school_name}</td>
              <td class="">${grad_college_year_start}</td>
              <td class="">${grad_college_year_end}</td>
              <td class="">${grad_college_province}</td>
              <td class="">${grad_college_grade_started}</td>
              <td class="">${grad_college_grade_ended}</td>
              <td class="">${grad_college_city}</td>
            </tr>
          `
          $('.grad_college_table').append(grad_college_table)
          grad_college_school_name = ""
          grad_college_year_start =""
          grad_college_year_end = ""
          grad_college_province = ""
          grad_college_grade_started = ""
          grad_college_grade_ended = ""
          grad_college_city = ""   
          }
         
          
        }else{
               frappe.throw('Year Started must be less than Year Ended.')
          }
      
    }
  })   
  $('.continue_to_confirmation').click( () => {
    $('#continue_to_confirmation').html("Adding School . . . ")
    if(acad_value == "D05"){
      if(pre_school_array.length == 0){
        frappe.throw("Pre school must not be empty")
      }else if(Gs_pre_school_array.length == 0){
        frappe.throw("Grade school must not be empty")
      }else{
       
        var refEncoded = sessionStorage.ref_number
        var refDecoded = atob(refEncoded).split("=").pop()
        fetch('/api/resource/Admission PCCR/' + refDecoded, {
        headers:{
          'X-Frappe-CSRF-Token': frappe.csrf_token
        },
        method: "PUT",
         body: JSON.stringify({
            data: {
            education: [
              [0].{
                academic: "Grade Schooleqweqweqwwwwwwwe",
                grade_ended: Gs_pre_school_array.ended,
                grade_started: Gs_pre_school_array.started,
                province: Gs_pre_school_array.province,
                school_name: Gs_pre_school_array.schhol,
                year_end: Gs_pre_school_array.year_ended,
                year_started: Gs_pre_school_array.year_started
              }
            ]
          }
          })
        })
        .then(res => res.json())
        .then(res => {
          console.log(res)
        })
        .catch(error => console.log('error', error));
                    
      }
    }else if(acad_value == "D06"){
      if(shs_ps_array.length == 0){
        frappe.throw("Pre school must not be empty")
      }else if(shs_gs_array.length == 0){
        frappe.throw("Grade school must not be empty")
      }else if(shs_jhs_array.length == 0){
        frappe.throw("Junior High School must not be empty")
      }else{
        console.log("save the data")
         // window.location.href = "/confirmation-lead"
      }
    }else if(acad_value === "D07"){
      if(college_ps_array.length == 0){
        frappe.throw("Pre school must not be empty")
      }else if(college_gs_array.length == 0){
        frappe.throw("Grade school must not be empty")
      }else if(college_jhs_array.length == 0){
        frappe.throw("Junior school must not be empty")
      }else if(college_shs_array.length == 0){
        frappe.throw("Senior High School must not be empty")
      }else{
        console.log("save the data")
        // window.location.href = "/confirmation-lead"
      }
    }else if(acad_value){
      if(college_ps_array.length == 0){
        frappe.throw("Pre school must not be empty")
      }else if(college_gs_array.length == 0){
        frappe.throw("Grade school must not be empty")
      }else if(college_jhs_array.length == 0){
        frappe.throw("Junior High School must not be empty")
      }else if(college_shs_array.length == 0){
        frappe.throw("Senior High School must not be empty")
      }else if(grad_college_array == 0){
        frappe.throw("College school must not be empty")
      }else{
        console.log("save the data")
         // window.location.href = "/confirmation-lead"
      }
    }
  })
  $('.back_to_personal_info').click( () => {
       window.location.href = "/personal-information-form"
  })
  }
// })



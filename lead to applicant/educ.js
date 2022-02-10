 $(".navbar-brand").css("pointer-events", "none");
    const url_base = window.location.origin
    var refEncoded = sessionStorage.ref_number
    var refDecoded = atob(refEncoded).split("=").pop()
    fetch(url_base + '/api/method/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usr: 'lead_user@gmail.com',
        pwd: 'Gues_101'
      })
    })
    .then(r => r.json())
    .then(r => {
      fetch('/api/resource/Admission PCCR/' + refDecoded)
      .then(res => res.json())
      .then(res => {
        var acd = res.data.academic_department + "-" + res.data.student_type
        var global_arr = []
        var pre_school_array = []
        var Gs_pre_school_array = []
        var shs_jhs_array = []
        var college_shs_array  = []
        var grad_college_array = []
        var grad_college_array_2 = []
        $('.loading').hide()
        //table function loop
        var education_list = res.data.education
        //hide some fileds
        if(acd == "D05-Freshman"){
          $('.senior_high_school, .junior_high_school, .college, .graduate_school').hide()
        }else if(acd == "D06-Freshman"){
           $('.senior_high_school, .college, .graduate_school').hide()
        }else if(acd == "D07-Freshman"){
          $('.college, .graduate_school').hide()
        }else if(acd == "D08-Freshman"){
          $('.graduate_school').hide()
        }else if(acd == "D05-Transferee"){
          $('.senior_high_school, .college, .graduate_school').hide()
        }else if(acd == "D06-Transferee"){
           $('.college, .graduate_school').hide()
        }else if(acd == "D07-Transferee"){
          $('.graduate_school').hide()
        }else if(acd == "D07-Second Courser"){
          $('.graduate_school').hide()
        }else{
          $('.graduate_school').show()
        }
        education_list.forEach( el => {
          global_arr.push(el)
          if(el.academic == "Pre School"){
             var table = `
              <tr>
                <td class="table-school">${el.school_name}</td>
                <td class="">${el.year_started}</td>
                <td class="">${el.year_end}</td>
                <td class="">${el.province}</td>
                <td class="">${el.city}</td>
              </tr>
          `
           $('.hs_table_body_1').append(table)
          }
          if(el.academic == "Grade School"){
             var table = `
              <tr>
                  <td class="table-school">${el.school_name}</td>
                  <td class="">${el.year_started}</td>
                  <td class="">${el.year_end}</td>
                  <td class = "">${el.province}</td>
                  <td class = "">${el.grade_ended}</td>
                  <td class="">${el.grade_started}</td>
                  <td class="">${el.city}</td>
              </tr>
          `
          $('.hs_table_body_2').append(table)
          }if(el.academic == "Junior High School"){
             var table = `
              <tr>
                  <td class="table-school">${el.school_name}</td>
                  <td class="">${el.year_started}</td>
                  <td class="">${el.year_end}</td>
                  <td class = "">${el.province}</td>
                  <td class = "">${el.grade_ended}</td>
                  <td class="">${el.grade_started}</td>
                  <td class="">${el.city}</td>
              </tr>
          `
          $('.shs_jhs_table').append(table)
          }
          if(el.academic == "Senior High School"){
             var table = `
                <tr>
                    <td class="table-school">${el.school_name}</td>
                    <td class="">${el.year_started}</td>
                    <td class="">${el.year_end}</td>
                    <td class = "">${el.province}</td>
                    <td class = "">${el.grade_ended}</td>
                    <td class="">${el.grade_started}</td>
                    <td class="">${el.city}</td>
                </tr>
            `
            $('.college_shs_table').append(table)
          }
          if(el.academic == "College"){
            var table = `
                <tr>
                    <td class="table-school">${el.school_name}</td>
                    <td class="">${el.year_started}</td>
                    <td class="">${el.year_end}</td>
                    <td class = "">${el.province}</td>
                    <td class = "">${el.grade_ended}</td>
                    <td class="">${el.grade_started}</td>
                    <td class="">${el.city}</td>
                </tr>
            `
            $('.grad_college_table').append(table)
          }
          if(el.academic == "Graduate School"){
            var table = `
                <tr>
                    <td class="table-school">${el.school_name}</td>
                    <td class="">${el.year_started}</td>
                    <td class="">${el.year_end}</td>
                    <td class = "">${el.province}</td>
                    <td class = "">${el.grade_ended}</td>
                    <td class="">${el.grade_started}</td>
                    <td class="">${el.city}</td>
                </tr>
            `
            $('.grad_college_table_2').append(table)
          }
        })
        // function add button
        let add_button = async()=>{
          let imageres = fetch('/api/resource/Admission PCCR/' + refDecoded, {
            headers:{
              'X-Frappe-CSRF-Token': frappe.csrf_token
            },
            method: "PUT",
            body: JSON.stringify({
              education: global_arr
            })
          })
          .then(res => res.json())
          .then(res => {
            swal("Added!", "", "success");
            })
          .catch((error) => {
            console.log(error)
          })
        }
      // close the modal
      $('.close, .close-btn').click( () => {
        $('#error').modal('hide')
        $('.error_message').html("")
        $('.continue_to_confirmation').html("Continue")
      })
      //change input
      
      //watch input and select
      $('input, Select').click( () => {
        $('.continue_to_confirmation').html("Continue")
      })
      var mq = window.matchMedia( "(max-width: 570px)" );
      if (mq.matches) {
        $('.m-querry').removeClass('col').addClass("col-6")
      }
      else {
        $('div.col').removeClass('col-6').addClass("col")
      }
      // Api Location
      fetch('https://api.psgc.abakadastudios.com/api/provinces?per_page=all')
      .then(response => response.json())
      .then(data => {
        data.data.forEach(function(value) {   
          $('#province, #HsProvince, #GsProvince, #college_ps_province, #college_gs_province, #college_jhs_province, #college_shs_province, #shs_ps_province, #shs_gs_province, #shs_jhs_province, #grad_college_province, #grad_college_province_2')
          .append($("<option></option>")
          .attr("value", value.name)
          .attr("id", value.code)
          .text(value.name)); 
        });
      });
      $('#HsProvince').change(function() {
        var province = $(this).children(":selected").attr("id");
        $('#HsCity')
        .empty()
        .append($("<option selected value=''>Select City</option>"));
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
      .append($("<option selected value=''>Select City</option>"));
    
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
      .append($("<option selected value=''>Select City</option>"));
    
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
      .append($("<option selected value=''>Select City</option>"));
    
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
      .append($("<option selected value=''>Select City</option>"));
    
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
      .append($("<option selected value=''>Select City</option>"));
    
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
      .append($("<option selected value=''>Select City</option>"));
    
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
      .append($("<option selected value=''>Select City</option>"));
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
      .append($("<option selected value=''>Select City</option>"));
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
      .append($("<option selected value=''>Select City</option>"));
    
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
     $('#grad_college_province_2').change(function() {
      var province = $(this).children(":selected").attr("id");
      $('#grad_college_city_2')
      .empty()
      .append($("<option selected value=''>Select City</option>"));
    
      fetch('https://api.psgc.abakadastudios.com/api/provinces/'+province+'?per_page=all&include=municipalities,cities')
      .then(response => response.json())
      .then(data => {
        data.data.cities.forEach(function(value) {
          $('#grad_college_city_2')
          .append($("<option></option>")
          .attr("value", value.name)
          .attr("id", value.code)
          .text(value.name)); 
        }),
        data.data.municipalities.forEach(function(value) {
          $('#grad_college_city_2')
          .append($("<option></option>")
          .attr("value", value.name)
          .attr("id", value.code)
          .text(value.name)); 
        });
        
      });
    })  
    // End of api
    // JHS validation
    var forms_jhs = document.querySelectorAll('.pre_school_val')
    var forms_gs = document.querySelectorAll('.grade_school_val')
    var forms_junior_high = document.querySelectorAll('.junior_high_school_val')
    var forms_senior_high = document.querySelectorAll('.senior_high_school_val')
    var forms_college = document.querySelectorAll('.college_val')
    var forms_gradschool = document.querySelectorAll('.grad_val')
    // Loop over them and prevent submission
  Array.prototype.slice.call(forms_jhs)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          $('.error_message').html("<p class='text-red text-left'>Some fields in pre school are missing.</p>")
          $('#error').modal("show")
        }else{
          event.preventDefault()
          event.stopPropagation()
          var Year_started = $('#HsYearStart').val()
          var Year_started = $('#HsYearStart').val()
          var Year_end = $('#HsYearEnd').val()
          var Province = $('#HsProvince').val()
          var city = $('#HsCity').val()
          var School_name = $('#HsSchoolName').val();
          if(Year_started < Year_end) {
            let my_object = {}
            my_object.academic = "Pre School"
            my_object.year_started = Year_started
            my_object.year_end = Year_end
            my_object.province = Province
            my_object.city = city
            my_object.school_name = School_name
            my_object.grade_started = "No Applicable"
            my_object.grade_ended = "Not Applicable"
            pre_school_array.push(my_object)
            global_arr.push(my_object)
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
            add_button()
          }else{
            $('.error_message').html("Year Started must be less than Year Ended.")
            $('#error').modal('show')
            $('#HsYearEnd, #HsYearStart').addClass("was-validated-custom")
          }
        }

        form.classList.add('was-validated')
      }, false)
    })

    //grade school validation
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    Array.prototype.slice.call(forms_gs)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          $('.error_message').html("<p class='text-red text-left '>Some fields in grade school are missing.</p>")
          $('#error').modal("show")
        }else{
          event.preventDefault()
          event.stopPropagation()
          var Gs_School_name = $('#GsSchoolName').val();
          var Gs_Year_started =  $('#GsYearStart').val()
          var Gs_Year_end = $('#GsYearEnd').val()
          var Gs_Province = $('#GsProvince').val()
          var Gs_city = $('#GsCity').val()
          var GsStarted = $('#GsStarted').val()
          var GsEnded = $('#GsEnded').val()

          const gradeStartedArray = GsStarted.split(" ")
          const gradeEndedArray = GsEnded.split(" ")
          let gradeStartedNumber = gradeStartedArray[1]
          let gradeEndedNumber = gradeEndedArray[1]
          if (gradeStartedNumber < gradeEndedNumber) {
            $('#GsStarted, #GsEnded').removeClass("was-validated-custom")
            if(Date.parse(Gs_Year_started) < Date.parse(Gs_Year_end)){
              $('#GsYearStart, #GsYearStart').removeClass("was-validated-custom")
              let gs_my_object = {}
              gs_my_object.academic = "Grade School"
              gs_my_object.year_started = Gs_Year_started
              gs_my_object.year_end = Gs_Year_end
              gs_my_object.province = Gs_Province
              gs_my_object.city = Gs_city
              gs_my_object.school_name = Gs_School_name
              gs_my_object.grade_started = GsStarted
              gs_my_object.grade_ended = GsEnded
              
              Gs_pre_school_array.push(gs_my_object)
              global_arr.push(gs_my_object)
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
              add_button()
            }else{
              $('.error_message').html("Year Started must be less than Year Ended.")
              $('#error').modal('show')
              $('#GsYearStart, #GsYearStart').addClass("was-validated-custom")
            }
          }else{
            $('.error_message').html("Grade Started must be less than Grade Ended.")
            $('#error').modal('show')
            $('#GsStarted, #GsEnded').addClass("was-validated-custom")
          }
        }
        form.classList.add('was-validated')
      }, false)
    })

    // Junior high sxhool validation
    Array.prototype.slice.call(forms_junior_high)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          $('.error_message').html("<p class='text-red text-left '>Some fields in junior high school are missing.</p>")
          $('#error').modal("show")
        }else{
          event.preventDefault()
          event.stopPropagation()
          var shs_jhs_year_start = $('#shs_jhs_year_start').val()
          var shs_jhs_year_end = $('#shs_jhs_year_end').val()
          var shs_jhs_province = $('#shs_jhs_province').val()
          var shs_jhs_city = $('#shs_jhs_city').val()
          var shs_jhs_gradeStarted = $('#shs_jhs_gradeStarted').val()
          var shs_jhs_gradeEnded = $('#shs_jhs_gradeEnded').val()
          var shs_jhs_school_name = $('#shs_jhs_school_name').val();
          const startedArray = shs_jhs_gradeStarted.split(" ");
          let startedNumber = parseInt(startedArray[1]) 
          const endedArray = shs_jhs_gradeEnded.split(" ");
          let endedNumber = parseInt(endedArray[1]) 
           if (startedNumber < endedNumber) {
            $('#shs_jhs_gradeStarted, #shs_jhs_gradeEnded').removeClass("was-validated-custom")
              if (shs_jhs_year_start < shs_jhs_year_end){
                $('#shs_jhs_year_start, #shs_jhs_year_end').removeClass("was-validated-custom")
                let my_object = {}
                my_object.academic = "Junior High School"
                my_object.school_name = shs_jhs_school_name
                my_object.year_started = shs_jhs_year_start
                my_object.year_end = shs_jhs_year_end
                my_object.province = shs_jhs_province
                my_object.city = shs_jhs_city
                my_object.grade_started = shs_jhs_gradeStarted
                my_object.grade_ended = shs_jhs_gradeEnded

                shs_jhs_array.push(my_object)
                global_arr.push(my_object)
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
                add_button()
              }else{
              $('.error_message').html("Year Started must be less than Year Ended.")
              $('#error').modal('show')
              $('#shs_jhs_year_start, #shs_jhs_year_end').addClass("was-validated-custom")
            }
          }else{
            $('.error_message').html("Grade Started must be less than Grade Ended.")
            $('#error').modal('show')
            $('#shs_jhs_gradeStarted, #shs_jhs_gradeEnded').addClass("was-validated-custom")
          }
        }

        form.classList.add('was-validated')
      }, false)
    })
    // end of jhs validation
    // start of shs validation
    Array.prototype.slice.call(forms_senior_high)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault()
        event.stopPropagation()
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          $('.error_message').html("<p class='text-red text-left '>Some fields in senior high school are missing.</p>")
          $('#error').modal("show")
        }else{
          event.preventDefault()
          event.stopPropagation()
          college_shs_year_start = $('#college_shs_year_start').val()
          college_shs_year_end = $('#college_shs_year_end').val()
          college_shs_province = $('#college_shs_province').val()
          college_shs_city = $('#college_shs_city').val()
          college_shs_started = $('#college_shs_started').val()
          college_shs_ended = $('#college_shs_ended').val()
          college_shs_school_name = $('#college_shs_school_name').val();
          const startedArray = college_shs_started.split(" ");
          let startedNumber = parseInt(startedArray[1]) 
          const endedArray = college_shs_ended.split(" ");
          let endedNumber = parseInt(endedArray[1]) 
          if (startedNumber < endedNumber) {
             $('#college_shs_started,#college_shs_ended').removeClass("was-validated-custom")
             if (college_shs_year_start < college_shs_year_end){
                $('#college_shs_year_start, #college_shs_year_end').removeClass("was-validated-custom")
                let my_object = {}
                my_object.academic = "Senior High School"
                my_object.school_name = college_shs_school_name
                my_object.year_started = college_shs_year_start
                my_object.year_end = college_shs_year_end
                my_object.province = college_shs_province
                my_object.city = college_shs_city
                my_object.grade_started = college_shs_started
                my_object.grade_ended = college_shs_ended
    
                college_shs_array.push(my_object)
                global_arr.push(my_object)
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
                add_button()
             }else{
              $('.error_message').html("Year Started must be less than Year Ended.")
              $('#error').modal('show')
              $('#college_shs_year_start, #college_shs_year_end').addClass("was-validated-custom")
            }
          }else{
            $('.error_message').html("Grade Started must be less than Grade Ended.")
            $('#error').modal('show')
            $('#college_shs_started,#college_shs_ended').addClass("was-validated-custom")
          }
        }

        form.classList.add('was-validated')
      }, false)
    })
    //validation for college
    Array.prototype.slice.call(forms_college)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          $('.error_message').html("<p class='text-red text-left '>Some fields in college are missing.</p>")
          $('#error').modal("show")
        }else{
          event.preventDefault()
          event.stopPropagation()
          var grad_college_year_start = $('#grad_college_year_start').val()
          var grad_college_year_end = $('#grad_college_year_end').val()
          var grad_college_province = $('#grad_college_province').val()
          var grad_college_grade_started = $('#college_jhs_gradeStarted').val()
          var grad_college_grade_ended = $('#grad_collge_gradeEnded').val()
          var grad_college_city = $('#grad_college_city').val()
          var grad_college_school_name = $('#grad_college_school_name').val();
          const func = (string) => {
            var year = 0
            if(string == "First Year"){
              year = 1
            }else if(string == "Second Year"){
              year = 2
            }else if(string == "Third Year"){
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
          if (grad_college_year_start < grad_college_year_end){
             $('#grad_college_year_start, #grad_college_year_end').removeClass("was-validated-custom")
             if(collegeStarted > collegeEnded){
                $('.error_message').html("Grade started must be less than grade ended.")
                $('#error').modal('show')
                $('#college_jhs_gradeStarted, #grad_collge_gradeEnded').addClass("was-validated-custom")
                
              }else{
                $('#college_jhs_gradeStarted, #grad_collge_gradeEnded').removeClass("was-validated-custom")
                let my_object = {}
                my_object.academic = "College"
                my_object.school_name = grad_college_school_name
                my_object.year_started = grad_college_year_start
                my_object.year_end = grad_college_year_end
                my_object.grade_started = grad_college_grade_started
                my_object.grade_ended = grad_college_grade_ended
                my_object.province = grad_college_province
                my_object.city = grad_college_city
          
                grad_college_array.push(my_object)
                global_arr.push(my_object)
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
                add_button()
              }
          }else{
            $('.error_message').html("Year Started must be less than Year Ended.")
            $('#error').modal('show')
            $('#grad_college_year_start, #grad_college_year_end').addClass("was-validated-custom")
          }
        }
       
        form.classList.add('was-validated')
      }, false)
    })
    // validation of grad school
    Array.prototype.slice.call(forms_gradschool)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          $('.error_message').html("<p class='text-red text-left '>Some fields in graduate school are missing.</p>")
          $('#error').modal("show")
        }else{
          event.preventDefault()
          event.stopPropagation()
          var grad_college_year_start_2 = $('#grad_college_year_start_2').val()
          var grad_college_year_end_2 = $('#grad_college_year_end_2').val()
          var grad_college_province_2 = $('#grad_college_province_2').val()
          var grad_college_grade_started_2 = $('#college_jhs_gradeStarted_2').val()
          var grad_college_grade_ended_2 = $('#grad_collge_gradeEnded_2').val()
          var grad_college_city_2 = $('#grad_college_city_2').val()
          var grad_college_school_name_2 = $('#grad_college_school_name_2').val();
          const func = (string) => {
            var year = 0
            if(string == "First Year"){
              year = 1
            }else if(string == "Second Year"){
              year = 2
            }else if(string == "Third Year"){
              year = 3
            }else if(string == "Fourth Year"){
              year = 4
            }else if(string == "Fifth Year"){
              year = 5
            }
            return year
          }

          let collegeStarted_2 = func($('#college_jhs_gradeStarted_2').val())
          let collegeEnded_2 = func($('#grad_collge_gradeEnded_2').val())
          if (grad_college_year_start_2 < grad_college_year_end_2){
             $('#grad_college_year_start_2, #grad_college_year_end_2').removeClass("was-validated-custom")
             if(collegeStarted_2 > collegeEnded_2){
                $('.error_message').html("Grade started must be less than grade ended.")
                $('#error').modal('show')
                $('#college_jhs_gradeStarted_2, #grad_collge_gradeEnded_2').addClass("was-validated-custom")
                
              }else{
                $('#college_jhs_gradeStarted_2, #grad_collge_gradeEnded_2').removeClass("was-validated-custom")
                let my_object = {}
                my_object.academic = "Graduate School"
                my_object.school_name = grad_college_school_name_2
                my_object.year_started = grad_college_year_start_2
                my_object.year_end = grad_college_year_end_2
                my_object.grade_started = grad_college_grade_started_2
                my_object.grade_ended = grad_college_grade_ended_2
                my_object.province = grad_college_province_2
                my_object.city = grad_college_city_2
          
                grad_college_array_2.push(my_object)
                global_arr.push(my_object)
                $('#grad_college_school_name_2').val("")
                $('#grad_college_year_start_2').val("")
                $('#grad_college_year_end_2').val("")
                $('#grad_college_province_2').val("")
                $('#college_jhs_gradeStarted_2').val("")
                $('#grad_collge_gradeEnded_2').val("")
                $('#grad_college_city_2').val("")

                var grad_college_table = `
                  <tr>
                    <td class="table-school">${grad_college_school_name_2}</td>
                    <td class="">${grad_college_year_start_2}</td>
                    <td class="">${grad_college_year_end_2}</td>
                    <td class="">${grad_college_province_2}</td>
                    <td class="">${grad_college_grade_started_2}</td>
                    <td class="">${grad_college_grade_ended_2}</td>
                    <td class="">${grad_college_city_2}</td>
                  </tr>
                `
                $('.grad_college_table_2').append(grad_college_table)
                add_button()
              }
          }else{
            $('.error_message').html("Year Started must be less than Year Ended.")
            $('#error').modal('show')
            $('#grad_college_year_start_2, #grad_college_year_end_2').addClass("was-validated-custom")
          }
        }
       
        form.classList.add('was-validated')
      }, false)
    })
    //browser back
    //back button
    $('.back_to_personal_info').click( () => {
      if(global_arr.length > 0){
        $('.continue_to_confirmation').html("Saving . . .")
        let uploadData_back = async()=>{
          let imageres = fetch('/api/resource/Admission PCCR/' + refDecoded, {
            headers:{
              'X-Frappe-CSRF-Token': frappe.csrf_token
            },
            method: "PUT",
            body: JSON.stringify({
              education: global_arr
            })
          })
          .then(res => res.json())
          .then(res => {
            setTimeout(() => {
              window.location.href = "/personal-information"
            }, 1000);
               
            })
          .catch((error) => {
            console.log(error)
          })
        }
        uploadData_back()
      }else{
        window.location.href = "/personal-information"
      }

       
    })
    //continue button
    $('.continue_to_confirmation').click( () => {
      if(global_arr.length > 0){}
      $('.continue_to_confirmation').html("Updating Records . . .")
      let uploadImage = async()=>{
        let imageres = fetch('/api/resource/Admission PCCR/' + refDecoded, {
          headers:{
            'X-Frappe-CSRF-Token': frappe.csrf_token
          },
          method: "PUT",
          body: JSON.stringify({
            education: raw
          })
        })
        .then(res => res.json())
        .then(res => {
          swal("Success!", "", "success");
          setTimeout(() => {
            window.location.href = "/confirmation-lead"
          }, 1000);
          })
        .catch((error) => {
          console.log(error)
        })
      }
      var raw = global_arr
      if(global_arr.length > 0){
        var pre_school_res = false
        var grade_school_res = false
        var junior_high_school_res = false
        var senior_high_school_res = false
        var college_res = false
        var grad_school_res = false
        global_arr.forEach( element => {
          if(element.academic == "Pre School"){
            pre_school_res = true
          }
          if(element.academic == "Grade School"){
            grade_school_res = true
          }
          if(element.academic == "Junior High School"){
            junior_high_school_res = true
          }
          if(element.academic == "Senior High School"){
            senior_high_school_res = true
          }
          if(element.academic == "College"){
            college_res = true
          }
          if(element.academic == "Graduate School"){
            grad_school_res = true
          }
        })
        //junior High School d05 done
        if(acd == "D05-Freshman"){
          if( pre_school_res && grade_school_res){
            uploadImage()
          }else{
            $('.continue_to_confirmation').html("Error")
            if(!pre_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Pre school must not be empty.</p>")
            }
            if(!grade_school_res){
              $('.error_message').append("<p class='text-left mb-0 text12'>Grade school must not be empty.</p>")
            }
            $('#error').modal("show")
          }
        }
        //Senior High School
        if(acd == "D06-Freshman" || acd == "D05-Transferee"){
          if( pre_school_res && grade_school_res && junior_high_school_res){
            uploadImage()
          }else{
            $('.continue_to_confirmation').html("Error")
            if(!pre_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Pre school must not be empty.</p>")
            }
            if(!grade_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Grade school must not be empty.</p>")
            }
            if(!junior_high_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Junior school must not be empty.</p>")
            }
            $('#error').modal("show")
          }
        }
        if(acd == "D06-Transferee" || acd == "D07-Freshman"){
          if( pre_school_res && grade_school_res && junior_high_school_res && senior_high_school_res){
            uploadImage()
          }else{
            $('.continue_to_confirmation').html("Error")
            if(!pre_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Pre school must not be empty.</p>")
            }
            if(!grade_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Grade school must not be empty.</p>")
            }
            if(!junior_high_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Junior school must not be empty.</p>")
            }
            if(!senior_high_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Senior school must not be empty.</p>")
            }
            $('#error').modal("show")
          }
        }
        //college
        if(acd == "D08-Freshman" || acd == "D07-Transferee" || acd == "D07-Second Courser"){
          if( pre_school_res && grade_school_res && junior_high_school_res && senior_high_school_res && college_res){
            uploadImage()
          }else{
            $('.continue_to_confirmation').html("Error")
            if(!pre_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Pre school must not be empty.</p>")
            }
            if(!grade_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Grade school must not be empty.</p>")
            }
            if(!junior_high_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Junior school must not be empty.</p>")
            }
            if(!senior_high_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Senior school must not be empty.</p>")
            }
            if(!college_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>College school must not be empty.</p>")
            }
            $('#error').modal("show")
          }
        }
        //Grad school
        if(acd == "D08-Transferee" || acd == "D08-Second Courser"){
          if( pre_school_res && grade_school_res && junior_high_school_res && senior_high_school_res && college_res && grad_school_res){
            uploadImage()
          }else{
            $('.continue_to_confirmation').html("Error")
            if(!pre_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Pre school must not be empty.</p>")
            }
            if(!grade_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Grade school must not be empty.</p>")
            }
            if(!junior_high_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Junior school must not be empty.</p>")
            }
            if(!senior_high_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Senior school must not be empty.</p>")
            }
            if(!college_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>College school must not be empty.</p>")
            }
            if(!grad_school_res){
              $('.error_message').append("<p class='text-left text12 mb-0'>Graduate school must not be empty.</p>")
            }
            $('#error').modal("show")
          }
        }
      }else{
        //DO5
        if(acd == "D05-Freshman"){
          if(pre_school_array.length == 0 || Gs_pre_school_array.length == 0){
            if(pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Pre School is empty.</p>")
            }
            if(Gs_pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Grade School is empty.</p>")
            }
            $('#error').modal("show")
          }else{
            uploadImage()
          }
        }
        if(acd == "D05-Transferee"){
          if(pre_school_array.length == 0 || Gs_pre_school_array.length == 0 || shs_jhs_array.length == 0){
            if(pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Pre School is empty.</p>")
            }
            if(Gs_pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Grade School is empty.</p>")
            }
            if(shs_jhs_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Junior High School is empty.</p>")
            }
            $('#error').modal("show")
          }else{
            uploadImage()
          }
        }
        //DO06
        if(acd == "D06-Freshman"){
          if(pre_school_array.length == 0 || Gs_pre_school_array.length == 0 || shs_jhs_array.length == 0){
            if(pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Pre School is empty.</p>")
            }
            if(Gs_pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Grade School is empty.</p>")
            }
            if(shs_jhs_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Junior High School is empty.</p>")
            }
            $('#error').modal("show")
          }else{
            uploadImage()
          }
        }
        if(acd == "D06-Transferee"){
          if(pre_school_array.length == 0 || Gs_pre_school_array.length == 0 || shs_jhs_array.length == 0 || college_shs_array.length == 0){
            if(pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Pre School is empty.</p>")
            }
            if(Gs_pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Grade School is empty.</p>")
            }
            if(shs_jhs_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Junior High School is empty.</p>")
            }
            if(college_shs_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Senior High School is empty.</p>")
            }
            $('#error').modal("show")
          }else{
            uploadImage()
          }
        }
        //D07
        if(acd == "D07-Freshman"){
          if(pre_school_array.length == 0 || Gs_pre_school_array.length == 0 || shs_jhs_array.length == 0 || college_shs_array.length == 0){
            if(pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Pre School is empty.</p>")
            }
            if(Gs_pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Grade School is empty.</p>")
            }
            if(shs_jhs_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Junior High School is empty.</p>")
            }
            if(college_shs_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Senior High School is empty.</p>")
            }
            $('#error').modal("show")
          }else{
            uploadImage()
          }
        }
        if(acd == "D07-Transferee"){
          if(pre_school_array.length == 0 || Gs_pre_school_array.length == 0 || shs_jhs_array.length == 0 || college_shs_array.length == 0 || grad_college_array.length == 0){
            if(pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Pre School is empty.</p>")
            }
            if(Gs_pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Grade School is empty.</p>")
            }
            if(shs_jhs_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Junior High School is empty.</p>")
            }
            if(college_shs_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Senior High School is empty.</p>")
            }
            if(grad_college_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>College School is empty.</p>")
            }
            $('#error').modal("show")
          }else{
            uploadImage()
          }
        }
          if(acd == "D07-Second Courser"){
          if(pre_school_array.length == 0 || Gs_pre_school_array.length == 0 || shs_jhs_array.length == 0 || college_shs_array.length == 0 || grad_college_array.length == 0){
            if(pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Pre School is empty.</p>")
            }
            if(Gs_pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Grade School is empty.</p>")
            }
            if(shs_jhs_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Junior High School is empty.</p>")
            }
            if(college_shs_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Senior High School is empty.</p>")
            }
            if(grad_college_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>College School is empty.</p>")
            }
            $('#error').modal("show")
          }else{
            uploadImage()
          }
        }
          // D08
         if(acd == "D08-Freshman"){
          if(pre_school_array.length == 0 || grad_college_array.length == 0 || Gs_pre_school_array.length == 0 || shs_jhs_array.length == 0 || college_shs_array.length == 0){
            if(pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Pre School is empty.</p>")
            }
            if(Gs_pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Grade School is empty.</p>")
            }
            if(shs_jhs_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Junior High School is empty.</p>")
            }
            if(college_shs_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Senior High School is empty.</p>")
            }
            if(grad_college_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>College School is empty.</p>")
            }
            $('#error').modal("show")
          }else{
            uploadImage()
          }
        }
        if(acd == "D08-Transferee"){
          if(pre_school_array.length == 0 || grad_college_array.length == 0 || grad_college_array_2.length == 0 || Gs_pre_school_array.length == 0 || shs_jhs_array.length == 0 || college_shs_array.length == 0){
            if(pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Pre School is empty.</p>")
            }
            if(Gs_pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Grade School is empty.</p>")
            }
            if(shs_jhs_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Junior High School is empty.</p>")
            }
            if(college_shs_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Senior High School is empty.</p>")
            }
            if(grad_college_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>College School is empty.</p>")
            }
            if(grad_college_array_2.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Graduate School is empty.</p>")
            }
            $('#error').modal("show")
          }else{
            uploadImage()
          }
        }
         if(acd == "D08-Second Courser"){
          if(pre_school_array.length == 0 || grad_college_array.length == 0 || grad_college_array_2.length == 0 || Gs_pre_school_array.length == 0 || shs_jhs_array.length == 0 || college_shs_array.length == 0){
            if(pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Pre School is empty.</p>")
            }
            if(Gs_pre_school_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Grade School is empty.</p>")
            }
            if(shs_jhs_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Junior High School is empty.</p>")
            }
            if(college_shs_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Senior High School is empty.</p>")
            }
            if(grad_college_array.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>College School is empty.</p>")
            }
            if(grad_college_array_2.length == 0){
              $('.error_message').append("<p class='text12 text-left mb-0'>Graduate School is empty.</p>")
            }
            $('#error').modal("show")
          }else{
            uploadImage()
          }
        }
      }

    })
  })
      
})
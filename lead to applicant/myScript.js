// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'
    function toTitleCase(str) {
    return str.split(/\s+/).map(s => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase()).join(" ");
  }
  $('input[type=text]').on('keyup', function(event) {
    var $t = $(this);
    $t.val(toTitleCase($t.val()));
  });
  // //jQuery option 1
  // $('#fieldToRemove').prop('required',false);

  // //jQuery option 2
  // $('#fieldToRemove').removeAttr('required');
  // dynamic guardian and parents
  $('.guardian').hide()
  let living = $('#living :selected').val()
  if(living == "Yes"){
    $('#guardian_name, #relationship, #guardian_number, #reason, #prof').prop('required',false);
  }else{
    $('#guardian_name, #relationship, #guardian_number, #reason').prop('required',true);
      var sd = $('#prof').attr('placeholder');
        if(sd == "Upload File"){
          $(' #prof').prop('required', true);
        }else{
           $('#guardianProof, #prof').prop('required', false);
        }
  }
  $('#living, .living').change( () => {
    const living_with_parents = $('#living ').val()
    console.log(living_with_parents)
    if(living_with_parents == "Yes"){
      $('.guardian').hide()
      $('.mother, .father').show()
      $('#guardian_name, #relationship, #guardian_number, #reason, #prof').prop('required',false);
    }else{
      $('.guardian').show()
      $('.mother, .father').show()
      $('#guardian_name, #relationship, #guardian_number, #reason').prop('required',true);
        var sd = $('#prof').attr('placeholder');
        if(sd == "Upload File"){
          $('#prof').prop('required', true);
        }else{
           $('#guardianProof, #prof').prop('required', false);
        }
    }
  })

  // location api
   fetch('https://api.psgc.abakadastudios.com/api/provinces?per_page=all')
    .then(response => response.json())
    .then(data => {
      data.data.forEach(function(value) {   
        $('#province')
        .append($("<option></option>")
        .attr("value", value.name)
        .attr("id", value.code)
        .attr("class", "province_2")
        .text(value.name)); 
      });
    });
    $('#province').click( () => {
      fetch('https://api.psgc.abakadastudios.com/api/provinces?per_page=all')
      .then(response => response.json())
      .then(data => {
        data.data.forEach(function(value) {   
          $('#province')
          .append($("<option></option>")
          .attr("value", value.name)
          .attr("id", value.code)
          .attr("class", "province_2")
          .text(value.name)); 
        });
    });
    })
    $('#province').change(function() {
      //var province = $("#province").val();
      var province = $(this).children(":selected").attr("id");  
      $('#city')
      .empty()
      .append($("<option selected value=''>Select Municipality/City</option>"));
      fetch('https://api.psgc.abakadastudios.com/api/provinces/'+province+'?per_page=all&include=municipalities,cities')
      .then(response => response.json())
      .then(data => {
        data.data.cities.forEach(function(value) {
          $('#city')
          .append($("<option></option>")
          .attr("value", value.name)
          .attr("class", "city_2")
          .attr("id", value.code)
          .text(value.name)); 
        }),
        data.data.municipalities.forEach(function(value) {
          $('#city')
          .append($("<option></option>")
          .attr("value", value.name)
          .attr("class", "city_2")
          .attr("id", value.code)
          .text(value.name)); 
        });
        
      });
    })

    $('#city, .city_temp').change(function() {
      
      var city = $(this).children(":selected").attr("id");
      
      $('#barangay')
      .empty()
      .append($("<option selected value=''>Select Barangay</option>"));
    
      fetch('https://api.psgc.abakadastudios.com/api/municipalities/'+city+'?per_page=all&include=barangays')
      .then(response => response.json())
      .then(data => {
        data.data.barangays.forEach(function(value) {
          $('#barangay, .bragy_temp')
          .append($("<option></option>")
          .attr("class", "barangay_2")
          .attr("value", value.name)
          .attr("id", value.code)
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
            .attr("class", "barangay_2")
            .text(value.name)); 
          })
        })
      });
    })      
    // end location api
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

    //age computation
    $('input#birthday').on('input',function(e){
      const d = new Date();
      var today = new Date("June, "+d.getFullYear());
      var birthDate = new Date(this.value);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if(age > 0) {
        $("input#age_as").val(age);
      }
      else {
        $("input#age_as").val('');
      }
    });

    function getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
    // end of age computation
    $('#father_name').change( () => {
      $('#mother_name').prop('required',false);
    })
    $('#father_first_name').change( () => {
       $('#mother_first_name').prop('required',false);
    })
    $('#father_middle_name').change( () => {
      $('#mother_middle_name').prop('required',false);
    })
    $('#mother_name').change( () => {
      $('#father_name ').prop('required',false);
    })
    $('#mother_first_name').change( () => {
      $('#father_first_name').prop('required',false);
    })
    $('#mother_middle_name').change( () => {
      $('#father_middle_name ').prop('required',false);
    })
    var forms = document.querySelectorAll('.needs-validation')
    function isEveryInputEmpty(string) {
      var allEmpty = true;

      $(string).each(function() {
          if ($(this).val().length < 11) {
              allEmpty = false;
              $(`${"." + $(this).attr('id')}`).html(`<p class="text12 mb-0 text-red ">* Must be 11 digit</p>`)
              $(`${"#" + $(this).attr('id')}`).addClass("was-validated-custom")
          }else{
            $(`${"." + $(this).attr('id')}`).html(`<p class="text12 ${"." + $(this).attr('id')} text-red "></p>`)
          }
      });

      return allEmpty;
  }
  $('#home_phone').change( () => {
      var x = $('#home_phone').val()
      if (isNaN(x)) // this is the code I need to change
      {
          $('#home_phone').val("Not Applicable");
          return false;
      }
  })
  // fill the fields
  $('html,body').scrollTop(0);
  window.scrollTo(0, 0);
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
      usr: 'lead_user@gmail.com',
    pwd: 'Gues_101'
    })
  })
  .then(r => r.json())
  .then(r => {
    var refEncoded = sessionStorage.ref_number
    var refDecoded = atob(refEncoded).split("=").pop()
    fetch("/api/resource/Admission PCCR/" + refDecoded)
    .then(res => res.json())
    .then(res => {
      $('form.needs-validation').show()
      $('.loading').hide()
      let province_id = res.data.province_code
      fetch('https://api.psgc.abakadastudios.com/api/provinces/'+province_id+'?per_page=all&include=municipalities,cities')
      .then(response => response.json())
      .then(data => {
        data.data.cities.forEach(function(value) {
          $('#city')
          .append($("<option></option>")
          .attr("value", value.name)
          .attr("class", "city_2")
          .attr("id", value.code)
          .text(value.name)); 
        }),
        data.data.municipalities.forEach(function(value) {
          $('#city')
          .append($("<option></option>")
          .attr("value", value.name)
          .attr("id", value.code)
          .attr("class", "city_2")
          .text(value.name)); 
        });
        
      });
      $('.province_temp').show()
      //location api
      if(res.data.province){
        $('#city').append(`<option class="city_temp" id="city_2" selected value="${res.data.municipalitycity}" disabled>${res.data.municipalitycity}</option>`)
        $('#barangay').append(`<option class="bragy_temp" id="barangay_2" value="${res.data.barangay}" selected disabled>${res.data.barangay}</option>`)
        $('#province').append(`<option class="province_temp" id="province_2" value="${res.data.province}" selected disabled>${res.data.province}</option>`)
      }
      if(res.data.living_with_parents == "Yes"){
        $('#living').html(`<option value="Yes" selected>Yes</option>
              <option value="No">No</option>`
        )
        $('#guardian_name, #relationship, #guardian_number, #reason, #prof').prop('required',false);
      }else{
         var sd = $('#prof').attr('placeholder');
        if(sd){
          console.log($('#prof'))
          $('#prof').prop('required', false);
        }else{
           $('#guardianProof, #prof').prop('required', false);
        }
        $('#living').html(`<option value="No" selected>No</option>
              <option value="Yes">Yes</option>`
        )
        $('.guardian').show()
        $('.mother, .father').show()
        $('#guardian_name, #relationship, #guardian_number, #reason').prop('required',true);
      }

      $('#name_suffix').val(res.data.suffix);
      $('#gender').val(res.data.gender);
      $('#birthday').val(res.data.birthday);
      $('#ethnic').val(res.data.ip__ethic_group_);
      $('#religion').val(res.data.religion);
      $('#mobile_number').val(res.data.mobile_contact_number);
      $('#home_phone').val(res.data.home_phone_number);
      $('#email').val(res.data.personal_email_address);
      $('#address').val(res.data.street_address_house_no_street_subdivisionvillage_sitio_purok);
      $('#father_name').val(res.data.fathers_last_name);
      $('#father_first_name').val(res.data.father_first_name);
      $('#father_middle_name').val(res.data.fathers_middle_name);
      $('#father_suffix').val(res.data.suffix2);
      $('#mother_name').val(res.data.mothers_last_name);
      $('#mother_first_name').val(res.data.mothers_first_name);
      $('#mother_middle_name').val(res.data.mothers_middle_name);
      $('#guardian_name').val(res.data.full_name_of_guardian);
      $('#relationship').val(res.data.relationship);
      $('#guardian_number').val(res.data.contact_number);
      $('#reason').val(res.data.reason_for_guardianship);
      $('#first_name').val(res.data.first_name);
      $('#last_name').val(res.data.last_name);
      $('#middle_name').val(res.data.middle_name);
      $('#mother_tongue').val(res.data.mother_tongue);
      $('#age_as').val(res.data.age_as_first_friday_of_june);
      $('#prof').attr("placeholder", res.data.supporting_documents);
    })
  })
  
  $('input').click( () => {
    $('.mybtn').html("Continue")
  })

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault()
        event.stopPropagation()
         $('form input, form select :selected, form select, #birthday ').each(
              function(index){  
                  var input = $(this);
                  const key_input = input.attr('id')
                  const value = input.val()
                  // console.log(key_input + " : " + value)
              
              }
          );
        let f_check =  $('#father_name').val();
        let fn_check =  $('#father_first_name').val();
        let fmn_check =  $('#father_middle_name').val();
        let m_check =  $('#mother_name').val();
        let mn_check =  $('#mother_first_name').val();
        let mmn_check =  $('#mother_middle_name').val();
        if(f_check || fn_check || fmn_check){
          $('#mother_middle_name, #mother_first_name, #mother_name').prop('required',false);
        }
        if(m_check || mn_check || mmn_check){
          $('#father_middle_name, #father_first_name, #father_name').prop('required',false);
        }
       
        let living = $('#living :selected').val()
        event.preventDefault()
        event.stopPropagation()
        const res = () => {
          var num_num
          if(living == "Yes"){
            num_num = isEveryInputEmpty('form input#mobile_number')
          }else{
            num_num = isEveryInputEmpty('form input#mobile_number, form input#guardian_number')
          }
          return num_num
        }
        
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          $('#exampleModal').modal('show')
           $('.mybtn').html("Missing fields . . . . ")
        }else if(!res()){
          event.preventDefault()
          event.stopPropagation()
          form.classList.add('was-validated')
          $('#invalid_input').modal('show')
        }else{
          event.preventDefault()
          event.stopPropagation()
          $('.mybtn').html("Updating Record . . . ")
          $('#living').addClass('was-validated-custom2')
          var arr = [];
          $('form input, form select :selected, form select, #birthday ').each(
              function(index){  
                  var input = $(this);
                  const key_input = input.attr('id')
                  const value = input.val()
                  // alert('Type: ' + input.attr('type') + 'Name: ' + input.attr('name') + 'Value: ' + input.val());
                  arr.push({[key_input]:value});

              }
          );
          const arr2 = []
          $('form input, form select :selected, form select, #birthday ').each(
              function(index){  
                  var input = $(this);
                  const key_input = input.attr('class')
                  const value = input.val()
                  // alert('Type: ' + input.attr('type') + 'Name: ' + input.attr('name') + 'Value: ' + input.val());
                  arr2.push({[key_input]:value});
              }
          );
          let yes_no = $('#living').val()
          console.log(yes_no)
          console.log(arr)
          let uploadFile = async()=>{
            var refEncoded = sessionStorage.ref_number
            var refDecoded = atob(refEncoded).split("=").pop()
            let imageres = await fetch('/api/resource/Admission PCCR/' + refDecoded, {
            headers:{
              'X-Frappe-CSRF-Token': frappe.csrf_token
            },
            method: "PUT",
             body: JSON.stringify({
                age_as_first_friday_of_june: arr[7].age_as,
                barangay : arr2[22].barangay_2,
                birthday: arr[6].birthday,
                living_with_parents: yes_no,
                contact_number: arr[34].guardian_number,
                father_first_name: arr[26].father_first_name,
                fathers_last_name: arr[25].father_name,
                fathers_middle_name: arr[27].father_middle_name,
                first_name: arr[1].first_name,
                full_name_of_guardian: arr[32].guardian_name,
                gender: arr[4].gender,
                ip__ethic_group_: arr[9].ethnic,
                home_phone_number: arr[14].home_phone,
                last_name: arr[0].last_name,
                province: arr2[18].province_2,
                middle_name: arr[2].middle_name,
                mobile_contact_number: arr[13].mobile_number,
                mother_tongue: arr[8].mother_tongue,
                mothers_first_name: arr[30].mother_first_name,
                mothers_last_name: arr[29].mother_name,
                mothers_middle_name: arr[31].mother_middle_name,
                municipalitycity: arr2[20].city_2,
                personal_email_address: arr[15].email,
                reason_for_guardianship: arr[35].reason,
                relationship: arr[33].relationship,
                religion: arr[11].religion,
                street_address_house_no_street_subdivisionvillage_sitio_purok: arr[16].address,
                suffix: arr[3].name_suffix,
                suffix2: arr[28].father_suffix
              })
            })
            .then(res => res.json())
            .then(res => {
              console.log(res)
              let guardian_prof = $('#guardianProof').val()
              if(guardian_prof){
                $('.mybtn').html("Uploading file . . . . ")
                let uploadImage = async()=>{
                let imagedata = $('#guardianProof')[0].files[0]
                let imagefile = new FormData()
                imagefile.append('file', imagedata)

                let imageres = await fetch("/api/method/upload_file", {
                  headers:{
                    'X-Frappe-CSRF-Token': frappe.csrf_token
                  },
                  method: "POST",
                  body: imagefile
                })
                .then(res => res.json())
                .then(res => {
                  var refEncoded = sessionStorage.ref_number
                  var refDecoded = atob(refEncoded).split("=").pop()
                  fetch('/api/resource/Admission PCCR/' + refDecoded, {
                    headers:{
                        'X-Frappe-CSRF-Token': frappe.csrf_token
                      },
                      method: "PUT",
                      body: JSON.stringify({
                        supporting_documents: res.message.file_url
                      })
                  })
                  .then(res => res.json())
                  .then(res => {
                      $('.mybtn').html("Success")
                      // location.replace('/education-background')
                      window.location.href = "/education-background"
                    })
                  })
                }
                uploadImage()
              }else{
                $('.mybtn').html("Success")
                // location.replace('/education-background')
                window.location.href = "/education-background"
              }
            })
          }
          uploadFile()
        }
     
        form.classList.add('was-validated')
      
      }, false)

    })
$('.back').click( () => {
  window.location.href = "/lead-app/lead-admsn"
})
  // end of validation
})()

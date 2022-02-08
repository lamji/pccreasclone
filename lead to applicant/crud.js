fetch( url_base + '/api/resource/Admission PCCR/' + data.name1 {
    method: 'PUT',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Frappe-CSRF-Token': frappe.csrf_token
},
    body: JSON.stringify({
        education: [
            {
                academic: "Pre School",
                grade_ended: "Not Applcable",
                grade_started: "Not Applcable",
                province: pre_school_array.province,
                school_name: pre_school_array.schhol,
                year_end: pre_school_array.year_ended,
                year_started: pre_school_array.year_started
            },
            {
                academic: "Grade School",
                grade_ended: Gs_pre_school_array.ended,
                grade_started: Gs_pre_school_array.started,
                province: Gs_pre_school_array.province,
                school_name: Gs_pre_school_array.schhol,
                year_end: Gs_pre_school_array.year_ended,
                year_started: Gs_pre_school_array.year_started
            }
        ]
    })
})
.then(r => r.json())
.then(r => {
    console.log(r)
               
})
.catch((error) => {
    console.log(error)
});


var myHeaders = new Headers();
myHeaders.append('Accept': 'application/json',);
myHeaders.append("Content-Type", "application/json");
myHeaders.append('X-Frappe-CSRF-Token': frappe.csrf_token);

var raw = JSON.stringify({
  "data": {
    "education": [
      {
        "academic": "Pre School",
        "grade_ended": "Not Applcable",
        "grade_started": "Not Applcable",
        "province": pre_school_array.province,
        "school_name": pre_school_array.schhol,
        "year_end": pre_school_array.year_ended,
        "year_started": pre_school_array.year_started
      },
      {
        "academic": "Grade School",
        "grade_ended": Gs_pre_school_array.ended,
        "grade_started": Gs_pre_school_array.started,
        "province": Gs_pre_school_array.province,
        "school_name": Gs_pre_school_array.schhol,
        "year_end": Gs_pre_school_array.year_ended,
        "year_started": Gs_pre_school_array.year_started
      }
    ]
  }
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
var refEncoded = sessionStorage.ref_number
var refDecoded = atob(refEncoded).split("=").pop()
fetch("https://eas.test.pccr.edu.ph/api/resource/Admission PCCR/" + refDecoded , requestOptions)
  .then(response => response.text())
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log('error', error));

//upload image

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
            console.log(res)
        })
    })
}
uploadImage()



$('#shs_jhs_add_button').click( () => {
    console.log("cliked")
    if(shs_jhs_school_name === "" || shs_jhs_year_start === "" || shs_jhs_year_end === "" || shs_jhs_province === null || shs_jhs_city === null || shs_jhs_gradeStarted === null || shs_jhs_gradeEnded === null){
      frappe.throw('<p class="text-red">Please fill all values carefully</p>');
    }else{
            const startedArray = shs_jhs_gradeStarted(" ");
            let startedNumber = startedArray[1]

            const endedArray = shs_jhs_gradeEnded(" ");
            let endedNumber = endedArray[1]

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
                frappe.throw("Please ensure that the grade ended is grater than the grade started.")
            }


    }
  })
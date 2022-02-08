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
frappe.ui.form.on("Doctype A",{
    refresh: function(frm){   // I have used refresh you can use any trigger
        frm.clear_table('child_table_DoctypeA');
        frappe.call({
        method:"frappe.client.get_list",
        args:{
            doctype:"Doctype B",
            filters: [
                ["field_a","=", frm.doc.field_a]  // You can set any filter you want
            ],
        		fields:["field_b","field_c"] // you can fetch as many fields as you want separated by a comma
    		},
    		callback: function (response) {
        	if (response.message) {
            	$.each(response.message, function(i,row) {   // row can be anything, it is merely a name
            		    var child_add = cur_frm.add_child("child_table_DoctypeA");  // child_add can be anything
		        		child_add.child_table_field_a = row.field_b;
		        		child_add.child_table_field_b = row.field_c; // you can add as many fields as you want
              	        console.log(response.message);     // not really necessary just so you can view the message in the console to check for possible errors               
							});
                        frm.refresh_fields("child_table_DoctypeA");
        	}
    	}
	});
}

// Doctype A:

//     field_a (could be any field type)
//     child_table_DoctypeA (a child table)

// child_table_DoctypeA:

//     child_table_field_a (could be any field type)
//     child_table_field_b (could be any field type)

// Doctype B:

//     field_a (could be any field type)
//     field_b (could be any field type)
//     field_c (could be any field type)

// Use Case:
// Let’s say you want to populate child_table_DoctypeA with specific conditions from the list of Doctype B documents based on a trigger. This method relies purely on client side scripting.
// Note:
// The field types from Doctype B and child_table_DoctypeA must match to be populated. As an example a signature field mapped onto a date field will yield weird results.
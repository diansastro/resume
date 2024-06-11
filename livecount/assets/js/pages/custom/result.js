'use strict';

var KTDatatableDataLocalDemo = function() {
    var demo = function() {

        var dataJSONArray = JSON.parse(
            '[{"recordId":1,"name":"TPS 1","kpps":"kpps1@gmail.com","count1":"40 Suara Sah","count2":"30 Suara Sah","count3":"60 Suara Sah","actions":null},\n' +
            '{"recordId":2,"name":"TPS 2","kpps":"kpps2@gmail.com","count1":"10 Suara Sah","count2":"70 Suara Sah","count3":"80 Suara Sah","actions":null},\n' +
            '{"recordId":3,"name":"TPS 3","kpps":"kpps3@gmail.com","count1":"20 Suara Sah","count2":"45 Suara Sah","count3":"25 Suara Sah","actions":null}]');

        var datatable = $('.count_local_data').KTDatatable({
            data: {
                // type: 'local',
                // source: {
                //     read: {
                //         url: '/admin/staff/list',
                //         method: 'POST'
                //     }
                // },
                type: 'local',
                source: dataJSONArray,
                pageSize: 10
                // serverPaging: true,
                // serverFiltering: true,
                // serverSorting: true
            },
            layout: {
                scroll: false,
                footer: false
            },
            sortable: true,
            pagination: true,
            search: {
                input: $('#generalSearch')
            },
            columns: [
                {
                    field: 'recordId',
                    title: '#',
                    sortable: false,
                    width: 20,
                    type: 'number',
                    selector: {class: 'kt-checkbox--solid'},
                    textAlign: 'center'
                }, {
                    field: 'name',
                    title: 'TPS'
                }, {
                    field: 'kpps',
                    title: 'Ketua KPPS',
                    sortable: false
                }, {
                    field: 'count1',
                    title: 'Suara Paslon 1',
                    sortable: false
                }, {
                    field: 'count2',
                    title: 'Suara Paslon 2',
                    sortable: false
                }, {
                    field: 'count3',
                    title: 'Suara Paslon 3',
                    sortable: false
                }, {
                    field: 'actions',
                    title: 'Actions',
                    sortable: false,
                    width: 110,
                    overflow: 'visible',
                    autoHide: false,
                    template: function(row) {
                        return '\
						<div class="dropdown">\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
                                <i class="la la-cog"></i>\
                            </a>\
						  	<div class="dropdown-menu dropdown-menu-right">\
						    	<a class="dropdown-item" href="result_detail.html"><i class="la la-edit"></i>Edit / Lihat Detail</a>\
						  	</div>\
						</div>\
						<div class="modal fade" id="kt_modal_1_' + row.recordId + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\
							<div class="modal-dialog modal-dialog-centered" role="document">\
								<div class="modal-content">\
									<div class="modal-header">\
										<h5 class="modal-title" id="exampleModalLabel">Hapus Data KPPS</h5>\
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">\
										</button>\
									</div>\
									<div class="modal-body">\
										<p>Hapus "'+ row.name +'" ?</p>\
									</div>\
									<div class="modal-footer">\
										<form>\
											<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>\
											<button type="submit" class="btn btn-danger">Delete</button>\
										</form>\
									</div>\
								</div>\
							</div>\
						</div>\
					';
                    }
                }]
        });

        // $('#kt_form_status').on('change', function() {
        //     datatable.search($(this).val().toLowerCase(), 'status');
        // });

        // $('#kt_form_status,#kt_form_type').selectpicker();

    };

    return {
        init: function() {
            demo();
        }
    };
}();

jQuery(document).ready(function() {
    KTDatatableDataLocalDemo.init();
});

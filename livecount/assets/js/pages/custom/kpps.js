'use strict';

var KTDatatableDataLocalDemo = function() {
    var demo = function() {

        var dataJSONArray = JSON.parse(
            '[{"recordId":1,"name":"Nama KPPS 1","usernmae":"kpps1@gmail.com","pass":"iwue878%*","phone":"08129384717","status":"Active","actions":null},\n' +
            '{"recordId":2,"name":"Nama KPPS 2","usernmae":"kpps2@gmail.com","pass":"iwue878%*","phone":"083716234715","status":"Active","actions":null},\n' +
            '{"recordId":3,"name":"Nama KPPS 3","usernmae":"kpps3@gmail.com","pass":"iwue878%*","phone":"0823843816","status":"Inactive","actions":null}]');

        var datatable = $('.kpps_local_data').KTDatatable({
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
                    title: 'Nama'
                }, {
                    field: 'usernmae',
                    title: 'Username',
                    sortable: false
                }, {
                    field: 'phone',
                    title: 'Telp',
                    sortable: false
                }, {
                    field: 'status',
                    title: 'Status',
                    sortable: false,
                    template: function(row) {
                        var data = {
                            'Active': {'title': 'Active', 'class': ' kt-badge--success'},
                            'Inactive': {'title': 'Inactive', 'class': ' kt-badge--danger'}
                        };
                        return '<span class="kt-badge ' + data[row.status].class + ' kt-badge--inline kt-badge--pill">' + data[row.status].title + '</span>';
                    }
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
						    	<a class="dropdown-item" href="create_kpps.html"><i class="la la-edit"></i>Edit / Lihat Detail</a>\
						  	</div>\
						</div>\
						<a type="button" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="modal" data-target="#kt_modal_1_' + row.recordId + '" title="Delete">\
							<i class="la la-trash"></i>\
						</a>\
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

'use strict';

var KTDatatableDataLocalDemo = function() {
    var demo = function() {

        var dataJSONArray = JSON.parse(
            '[{"recordId":1,"name":"TPS 1","code":"20918271","kel":"Karang Anyar","kec":"Tarakan Barat","kab":"Tarakan","prop":"Kalimantan Utara","status":"Active","actions":null},\n' +
            '{"recordId":2,"name":"TPS 2","code":"20918272","kel":"Karang Balik","kec":"Tarakan Barat","kab":"Tarakan","prop":"Kalimantan Utara","status":"Inactive","actions":null},\n' +
            '{"recordId":3,"name":"TPS 3","code":"20918273","kel":"Karang Harapan","kec":"Tarakan Barat","kab":"Tarakan","prop":"Kalimantan Utara","status":"Active","actions":null}]');

        var datatable = $('.tps_local_data').KTDatatable({
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
                    title: 'Nama TPS'
                }, {
                    field: 'code',
                    title: 'Kode',
                    sortable: false
                }, {
                    field: 'kel',
                    title: 'Kelurahan',
                    sortable: false
                }, {
                    field: 'kec',
                    title: 'Kecamatan',
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
						    	<a class="dropdown-item" href="create_tps.html"><i class="la la-edit"></i>Edit / Lihat Detail</a>\
						  	</div>\
						</div>\
						<a type="button" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="modal" data-target="#kt_modal_1_' + row.recordId + '" title="Delete">\
							<i class="la la-trash"></i>\
						</a>\
						<div class="modal fade" id="kt_modal_1_' + row.recordId + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\
							<div class="modal-dialog modal-dialog-centered" role="document">\
								<div class="modal-content">\
									<div class="modal-header">\
										<h5 class="modal-title" id="exampleModalLabel">Hapus Data TPS</h5>\
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">\
										</button>\
									</div>\
									<div class="modal-body">\
										<p>Hapus "'+ row.name +'" ?</p>\
									</div>\
									<div class="modal-footer">\
										<form action="">\
											<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>\
											<button class="btn btn-danger">Delete</button>\
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

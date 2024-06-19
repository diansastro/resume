"use strict";

var KTUserAdd = function () {
    var formEl;
    var validator;
    var wizard;
    var avatar;
    var options = [];
    var activeDoctorIdList = "";
    var activeDoctorIds = $('.doctor-id');

    var initWizard = function () {
        wizard = new KTWizard('kt_user_add_user', {
            startStep: 1,
            clickableSteps: true
        });

        wizard.on('beforeNext', function(wizardObj) {
            if (validator.form() !== true) {
                wizardObj.stop();
            }
        });

        wizard.on('change', function(wizard) {
            KTUtil.scrollTop();
        });

        $("#assigned-doctor-ids option").each(function() {
            activeDoctorIdList = activeDoctorIdList + $(this).val() + ",";
        });
        // console.log(activeDoctorIdList);
    };

    $('.status-option').selectpicker();

    var initDualListBox = function() {
        var listBoxes = $('.doctor-list-dualBox');
        listBoxes.each(function() {
            var $this = $(this);
            var availableTitle = ($this.attr('data-available-title') != null) ? $this.attr('data-available-title') : 'Doctor List';
            var selectedTitle = ($this.attr('data-selected-title') != null) ? $this.attr('data-selected-title') : 'Selected Doctor';

            var addLabel = ($this.attr('data-add') != null) ? $this.attr('data-add') : 'Add';
            var removeLabel = ($this.attr('data-remove') != null) ? $this.attr('data-remove') : 'Remove';
            var addAllLabel = ($this.attr('data-add-all') != null) ? $this.attr('data-add-all') : 'Add All';
            var removeAllLabel = ($this.attr('data-remove-all') != null) ? $this.attr('data-remove-all') : 'Remove All';

            $this.children('option').each(function() {
                var value = $(this).val();
                var label = $(this).text();
                var selected = !!($(this).is(':selected'));
                options.push({text: label, value: value, selected: selected});
            });

            var search = ($this.attr('data-search') != null) ? $this.attr('data-search') : '';
            $this.empty();

            var dualListBox = new DualListbox($this.get(0), {
                addEvent: function(value) {
                    activeDoctorIdList = activeDoctorIdList + value + ",";
                    activeDoctorIds.val(activeDoctorIdList);
                    // console.log("added : ", activeDoctorIds.val());
                },
                removeEvent: function(value) {
                    activeDoctorIdList = activeDoctorIdList.replace(value + ",", "");
                    activeDoctorIds.val(activeDoctorIdList);
                    // console.log("removed : ", activeDoctorIds.val());
                },
                availableTitle: availableTitle,
                selectedTitle: selectedTitle,
                addButtonText: addLabel,
                removeButtonText: removeLabel,
                addAllButtonText: addAllLabel,
                removeAllButtonText: removeAllLabel,
                options: options
            });

            if (search === 'false') {
                dualListBox.search.classList.add('dual-listbox__search--hidden');
            }
        });
    };

    var initValidation = function() {
        validator = formEl.validate({
            ignore: ":hidden",
            rules: {
                image: {
                    required: false
                },
                fullname: {
                    required: true
                },
                password: {
                    required: true
                },
                status: {
                    required: true
                }
            },
            invalidHandler: function(event, validator) {
                swal.fire({
                    "title": "",
                    "text": "There are some errors in your submission. Please correct them.",
                    "type": "error",
                    "buttonStyling": false,
                    "confirmButtonClass": "btn btn-brand btn-sm btn-bold"
                });
            },
            submitHandler: function (form) {
                console.log("Submit cuy");
            }
        });
    };

    var initSubmitUser = function() {
        var btn = formEl.find('[data-ktwizard-type="action-submit"]');
        btn.on('click', function(e) {
            e.preventDefault();
            if (validator.form()) {
                KTApp.progress(btn);
                formEl.ajaxSubmit({
                    success: function(response, status, xhr, $form) {
                        KTApp.unprogress(btn);
                        if(response.meta.code === 200){
                            window.location.href = response.meta.message;
                        }else{
                            swal.fire({
                                "title": "Error!",
                                "text": response?.meta?.message,
                                "type": "failed",
                                "confirmButtonClass": "btn btn-secondary"
                            });
                        }
                    },
                    error: function (data) {
                        KTApp.unprogress(btn);
                        swal.fire({
                            "title": "",
                            "text": "Technical error",
                            "type": "failed",
                            "confirmButtonClass": "btn btn-secondary"
                        });
                    }
                });
            }
        });
    };

    var initAssignDoctor = function () {
        $('#staff-assign-doctor').validate({
            invalidHandler: function(event, validator) {
                swal.fire({
                    "title": "",
                    "text": "There are some errors in your submission. Please correct them.",
                    "type": "error",
                    "confirmButtonClass": "btn btn-brand btn-sm btn-bold"
                });
            },
            submitHandler: function (form) {
                var btn = $(form).find('.btn-submit');
                $(form).ajaxSubmit({
                    success: function(response, status, xhr, $form) {
                        KTApp.unprogress(btn);
                        if(response.meta.code === 200){
                            window.location.href = response.meta.message;
                        }else{
                            swal.fire({
                                "title": "",
                                "text": response.meta.message,
                                "type": "failed",
                                "confirmButtonClass": "btn btn-secondary"
                            });

                        }
                    },
                    error: function (data) {
                        KTApp.unprogress(btn);
                        swal.fire({
                            "title": "",
                            "text": "Technical error",
                            "type": "failed",
                            "confirmButtonClass": "btn btn-secondary"
                        });
                    }
                });
            }
        });
    };

    var initUserForm = function() {
        avatar = new KTAvatar('kt_user_add_avatar');
    };

    return {
        init: function() {
            formEl = $('#kt_user_add_form');
            initWizard();
            initDualListBox();
            initValidation();
            initSubmitUser();
            initAssignDoctor();
            initUserForm();
        }
    };
}();

jQuery(document).ready(function() {
    KTUserAdd.init();
});

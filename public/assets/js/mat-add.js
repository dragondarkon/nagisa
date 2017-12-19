function slugify(text) {
    return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
}

$(document).ready(function () {

    $('#group_filter').on('change', function () {
        var group_id = $(this).val();
        console.log(group_id);

        $('.wstable tr').each(function () {
            $(this).find('span').haseClass('g' + group_id).hide();
            console.log($(this).find('span'));
        })
    })

    $('#field_name').on('focusout', function () {
        var slug = $('#field_name').val()
        $('#field_slug').val(slugify(slug));
    });
    if (id > 0) {

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "/api/mat/" + id,
            "method": "GET",
        }

        $.ajax(settings).done(function (response) {
            //console.log(response);

            var field_option = JSON.parse(response.result.field_option);
            var field_value_op;

            $.each(field_option, function (index, value) {
                var $clone = $(".copy").clone().children();
                var last_id = parseInt($(".control-item").last().attr('data-id'));
                var used_id;

                used_id = 'cp_id_' + index;
                $clone.attr('data-id', index);
                $clone.find('select').attr('name', 'tag_value[' + index + '][]');
                $clone.addClass('control-item');
                $clone.attr('id', used_id);
                $clone.find('[name="value[]"]').val(value.value);
                $clone.find('[name="text[]"]').val(value.text);

                // make hidden field
                var text_id = '<input type="hidden" class="after_loop" for="' + used_id + '" value="' + value.tag_value + '" />';

                $(".after-add-more").append($clone);
                $(".after-add-more").append(text_id);
                complie_select('#' + used_id + ' .select_tag');

                /*
                 var copy = $('.copy .control-group').clone();
                 $(copy).find('[name="value[]"]').val(value.value);
                 $(copy).find('[name="text[]"]').val(value.text);
                 $('#select_option_group .col-sm-6').prepend(copy);
                 */

            });

            var department = JSON.parse(response.result.department);

            //console.log(department.pd);

            $('input[name="dp[pd]"][value="edit"]').attr('checked', department.pd == "edit" ? true : false);
            $('input[name="dp[pd]"][value="view"]').attr('checked', department.pd == "view" ? true : false);
            $('input[name="dp[pd]"][value="hide"]').attr('checked', department.pd == "hide" ? true : false);

            $('input[name="dp[injection]"][value="edit"]').attr('checked', department.injection == "edit" ? true : false);
            $('input[name="dp[injection]"][value="view"]').attr('checked', department.injection == "view" ? true : false);
            $('input[name="dp[injection]"][value="hide"]').attr('checked', department.injection == "hide" || !department.injection ? true : false);

            $('input[name="dp[extrusion]"][value="edit"]').attr('checked', department.extrusion == "edit" ? true : false);
            $('input[name="dp[extrusion]"][value="view"]').attr('checked', department.extrusion == "view" ? true : false);
            $('input[name="dp[extrusion]"][value="hide"]').attr('checked', department.extrusion == "hide" || !department.extrusion ? true : false);

            $('input[name="dp[account]"][value="edit"]').attr('checked', department.account == "edit" ? true : false);
            $('input[name="dp[account]"][value="view"]').attr('checked', department.account == "view" ? true : false);
            $('input[name="dp[account]"][value="hide"]').attr('checked', department.account == "hide" || !department.account ? true : false);

            $('input[name="dp[sourcing]"][value="edit"]').attr('checked', department.sourcing == "edit" ? true : false);
            $('input[name="dp[sourcing]"][value="view"]').attr('checked', department.sourcing == "view" ? true : false);
            $('input[name="dp[sourcing]"][value="hide"]').attr('checked', department.sourcing == "hide" || !department.sourcing ? true : false);

            // $('input[name="dp[injection]"][value="hide"]').attr('checked',true);
            // $('input[name="dp[extrusion]"][value="hide"]').attr('checked',true);
            // $('input[name="dp[account]"][value="hide"]').attr('checked',true);
            // $('input[name="dp[sourcing]"][value="hide"]').attr('checked',true);

            //$('input[name="dp[pd]"]').attr('checked',true);
            //$('input[name="dp[pd]"]').attr('checked',true);

            //console.log(JSON.parse(response.result.field_option));


            $('#field_name').val(response.result.field_name);
            $('#field_slug').val(response.result.field_slug);
            $('#field_type option[value="' + response.result.field_type + '"]').attr("selected", "selected");
            $('#field_type').trigger('change');

            $('#group option[value="' + response.result.group + '"]').attr("selected", "selected");
            $('#group').trigger('change');

            $('#input_length').val(response.result.input_length);
            $('#remark').val(response.result.remark);
            if (response.result.required > 0) {
                $('#some_id').attr('checked', 'checked');
            }

            var code_length = response.result.code_length;
            var res = code_length.split(",");
            $.each(res, function (index, value) {
                setUse($('#' + value), false);
            })
        });


    } else {

        $('input[name="dp[pd]"][value="hide"]').attr('checked', true);

        $('input[name="dp[injection]"][value="hide"]').attr('checked', true);

        $('input[name="dp[extrusion]"][value="hide"]').attr('checked', true);

        $('input[name="dp[account]"][value="hide"]').attr('checked', true);

        $('input[name="dp[sourcing]"][value="hide"]').attr('checked', true);
    }

    $('#group').change(function () {
        var group_id = $(this).val();

        if (group_id == 1 || group_id == 2) {
            $('.code_length_panel').show();
        } else {
            $('.code_length_panel').hide();

        }

        /* reset all value */
        $('.code_length_btn button:enabled').removeClass('active');
        $('.code_length_btn button:enabled').attr('aria-pressed', false);

        group = group_id;
        $.ajax({
            url: '/mat/getallcodelength',
            type: 'POST',
            data: {
                'group_id': group_id
            },
            dataType: 'json',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                'Accept': 'application/json',
                // 'Authorization': 'Bearer ' + $.cookie('access_token')
            },
            success: function (data) {
                if (data.status == 'success') {

                    //console.log(data.result.d1, $('#d1').hasClass('active'));

                    (data.result.d1 || $('#d1').hasClass('active')) ? $('#d1').attr('disabled', false) : $('#d1').attr('disabled', true);
                    (data.result.d2 || $('#d2').hasClass('active')) ? $('#d2').attr('disabled', false) : $('#d2').attr('disabled', true);
                    (data.result.d3 || $('#d3').hasClass('active')) ? $('#d3').attr('disabled', false) : $('#d3').attr('disabled', true);
                    (data.result.d4 || $('#d4').hasClass('active')) ? $('#d4').attr('disabled', false) : $('#d4').attr('disabled', true);
                    (data.result.d5 || $('#d5').hasClass('active')) ? $('#d5').attr('disabled', false) : $('#d5').attr('disabled', true);
                    (data.result.d6 || $('#d6').hasClass('active')) ? $('#d6').attr('disabled', false) : $('#d6').attr('disabled', true);
                    (data.result.d7 || $('#d7').hasClass('active')) ? $('#d7').attr('disabled', false) : $('#d7').attr('disabled', true);
                    (data.result.d8 || $('#d8').hasClass('active')) ? $('#d8').attr('disabled', false) : $('#d8').attr('disabled', true);
                    (data.result.d9 || $('#d9').hasClass('active')) ? $('#d9').attr('disabled', false) : $('#d9').attr('disabled', true);
                    (data.result.d10 || $('#d10').hasClass('active')) ? $('#d10').attr('disabled', false) : $('#d10').attr('disabled', true);
                    (data.result.d11 || $('#d11').hasClass('active')) ? $('#d11').attr('disabled', false) : $('#d11').attr('disabled', true);
                    (data.result.d12 || $('#d12').hasClass('active')) ? $('#d12').attr('disabled', false) : $('#d12').attr('disabled', true);
                    (data.result.d13 || $('#d13').hasClass('active')) ? $('#d13').attr('disabled', false) : $('#d13').attr('disabled', true);
                    (data.result.d14 || $('#d14').hasClass('active')) ? $('#d14').attr('disabled', false) : $('#d14').attr('disabled', true);
                    (data.result.d15 || $('#d15').hasClass('active')) ? $('#d15').attr('disabled', false) : $('#d15').attr('disabled', true);
                    (data.result.d16 || $('#d16').hasClass('active')) ? $('#d16').attr('disabled', false) : $('#d16').attr('disabled', true);
                    (data.result.d17 || $('#d17').hasClass('active')) ? $('#d17').attr('disabled', false) : $('#d17').attr('disabled', true);
                    (data.result.d18 || $('#d18').hasClass('active')) ? $('#d18').attr('disabled', false) : $('#d18').attr('disabled', true);

                    compile_val();
                    compile_select_data();

                    setTimeout(function () {
                        var after_loop = $('.after_loop');
                        $.each(after_loop, function () {
                            var is_value = $(this).val();
                            var for_id = $(this).attr('for');
                            $('#' + for_id + ' .select_tag').select2('val', [is_value.split(',')]);
                        });
                    }, 1000);

                } else {
                    console.log('false');
                }
            }
        });
    });

});
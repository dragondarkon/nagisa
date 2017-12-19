$(function () {
    'use strict';

    /* Navbar Settings */
    var $main_left = $('.menu_left_panel');
    var $main_content = $('.main-content');
    var $main_logo = $('.contain-logo');
    var top_menu_settings = $.cookie('left_menu_setting');
    var $tokens = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI3N2Q2OGVjN2MzYWYxYjE2ZDUxYTQyZGU2ZTA5NDgzZTZlNmJjMTU3ZTUwYzAzMmMyYWNiYzhhNjdlMmZlMDFjNzc0MjI0MDU2ZmJiYTM1In0.eyJhdWQiOiIxIiwianRpIjoiYjc3ZDY4ZWM3YzNhZjFiMTZkNTFhNDJkZTZlMDk0ODNlNmU2YmMxNTdlNTBjMDMyYzJhY2JjOGE2N2UyZmUwMWM3NzQyMjQwNTZmYmJhMzUiLCJpYXQiOjE1MDA2NjI4MzksIm5iZiI6MTUwMDY2MjgzOSwiZXhwIjoxNTMyMTk4ODM5LCJzdWIiOiI0Iiwic2NvcGVzIjpbIioiXX0.Tf3v-Dy_nmS-gEvy3wDYx5LwLRUkgjmTTgCBZvgQN0OFjTjHvk40VTxqIjo2tMgU4RQ6jjyqNqwA7wnCeFpRI0r5ze40xJhGkQ4Pz82-3Kaf9eZV9eKl3HEUtAFvFZjF8CP1Cq9ntjSZGcqeLowxbBdPiaRV1HFZ72CQsp7zt2vyyGUIaAncVHxxNMTfrllydLDxJBVdmRx5oepUTCsgwTHdEIMwBzZMOkAK4Is939o-Q_iZt-MFtB37ByIov7vSVCYLJIIi0K53L7D8UcWi0SX4ElGTN6GKecaef5-ZR0YHweATRVT0GVI6o67LfIV69pofX5uPdjBIl1YTjn9LmECGochTIKS82kqTDr87NkMgW3kQEbgGLEYJhec8kB4KXN_BIdwP4cwCHCvV4AxqD6CpFdA_F4Iez5MAHxkOaiFjhXVeqP9Oz-G7Mn5ypofPV4j0IuDRr3FmAFk22raDyfWdvCrj5QKZ0eaVke9Qh3r0rWMHCtaDnpZ5u0xeKkVLIh-ujssPyv51X3HYjEcdizNYal1wNRM8MSUchvaeHVJSOHybI379HhWs26ItE2brVwsrOXZD80AxI5UDUyJV73x0aiJVyMMbmXcfmCbBLNZFMlZClkbfCD9BDWJ2q44DgnOpaZgO-EYCLcXEN6_mP4CSOU7uBTO1lnT-cTvZdeQ';

    /* Check settings */
    if (top_menu_settings == 1) {
        $main_left.addClass('mini');
        $main_logo.addClass('mini');
        $main_content.filter(':not(:animated)').animate({'padding-left': '70px'}, 'fast');
    } else if (top_menu_settings === 0) {
        $main_left.removeClass('mini');
        $main_logo.removeClass('mini');
        $main_content.filter(':not(:animated)').animate({'padding-left': '238px'}, 'fast');
    }

    /* menu control */
    $('.top_menu_bar').on('click', function () {
        $main_left.toggleClass('mini');
        $main_logo.toggleClass('mini');

        if ($main_left.hasClass('mini')) {
            $main_content.filter(':not(:animated)').animate({'padding-left': '70px'}, 'fast');
            $.cookie('left_menu_setting', 1);
        } else {
            $main_content.filter(':not(:animated)').animate({'padding-left': '238px'}, 'fast');
            $.cookie('left_menu_setting', 0);
        }
    });


    /* Ajax Setup */
    $.ajaxSetup({
        headers: {
            Accept: "application/json",
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content'),
            'Content-Type': 'application/x-www-form-urlencoded'
                    //Authorization: "Basic  " + btoa('myuser:MyNewPswd')
        },
        error: function (jqXhr) {
//            if (jqXhr.status === 422) {
//                var errors = jqXhr.responseJSON;
//                var errorsHtml = '<ul>';
//                $.each(errors, function (key, value) {
//                    errorsHtml += '<li>' + value[0] + '</li>';
//                });
//                errorsHtml += '</ul>';
//                showNoti('error', 'Information', errorsHtml, 'fa fa-exclamation-circle', '', true);
//            } else {
//                var errors = jqXhr.responseJSON;
//                var errorsHtml = '<ul>';
//                $.each(errors, function (key, value) {
//                    errorsHtml += '<li>' + value + '</li>';
//                });
//                errorsHtml += '</ul>';
//                showNoti('error', 'Information', errorsHtml, 'fa fa-exclamation-circle', '', true);
//            }
            var errors = jqXhr.responseJSON;
            var errorsHtml = '<ul>';
            $.each(errors, function (key, value) {
                errorsHtml += '<li>' + value[0] + '</li>';
            });
            errorsHtml += '</ul>';
            showNoti('error', 'Information', errorsHtml, 'fa fa-exclamation-circle', '', true);

        }
    });

    /* login */
    $('#frmLogin').on('submit', function (e) {
        e.preventDefault();
        var $form = $(this);
        var $button = $(this).find('.btn-ws-login');
        var $current_text = $button.html();
        var tokens = $form.find('input[name="_token"]').val();

        $.ajax({
            url: '/api/login',
            type: 'post',
            dataType: 'json',
            data: $form.serialize(),
            beforeSend: function (xhr) {
                //xhr.setRequestHeader('form-data', '');
                $button.html('Submiting..');
                $.removeCookie('access_token');
                $.removeCookie('token_type');
                $.removeCookie('refresh_token');
            },
            success: function (data) {
                if (data.status == 'error') {
                    // var errors = data.result;
                    // var errorsHtml = '<ul>';
                    // $.each(errors, function (key, value) {
                    //     errorsHtml += '<li>' + value + '</li>';
                    // });
                    // errorsHtml += '</ul>';
                    // showNoti('error', 'Information', errorsHtml, 'fa fa-exclamation-circle', '', '');
                } else {
                    // showNoti('success', 'Successfully', 'You have login successfully. Access token has been generated.', '', '');
                    $.cookie.raw = true;
                    $.cookie.json = false;
                    $.cookie('access_token', data.access_token);
                    //$.cookie('token_type', data.token_type);
                    //$.cookie('refresh_token', data.refresh_token);
                    //$.cookie('access_token', $tokens);
                    $.cookie('token_type', data.token_type);
                    $.cookie('refresh_token', data.refresh_token);
                    // window.location.href = '/dashboard';
                    // console.log(data);
                }
            }
        });

        $.ajax({
            url: '/login',
            type: 'post',
            dataType: 'json',
            data: $form.serialize(),
            success: function (data) {
                if (data.status == 'error') {
                    var errors = data.result;
                    var errorsHtml = '<ul>';
                    $.each(errors, function (key, value) {
                        errorsHtml += '<li>' + value + '</li>';
                    });
                    errorsHtml += '</ul>';
                    showNoti('error', 'Information', errorsHtml, 'fa fa-exclamation-circle', '', '');
                } else {
                    showNoti('success', 'Successfully', 'You have login successfully. Access token has been generated.', '', '');
                    // $.cookie.raw = true;
                    // $.cookie.json = false;
                    // $.cookie('access_token', data.access_token);
                    //$.cookie('token_type', data.token_type);
                    //$.cookie('refresh_token', data.refresh_token);
                    //$.cookie('access_token', $tokens);
                    // $.cookie('token_type', data.token_type);
                    // $.cookie('refresh_token', data.refresh_token);
                    window.location.href = '/dashboard';
                    // console.log(data);
                }
            },
            complete: function () {
                $button.html($current_text);
            }
        });
    });

    $('#frmForgot').on('submit', function (e) {
        e.preventDefault();
        var $form = $(this);
        var $button = $(this).find('.btn-ws-resp');
        var $current_text = $button.html();
        var tokens = $form.find('input[name="_token"]').val();
        var $callback_url = $form.attr('data-callback');
        var $data_method = 'POST';
        var $btn = $(this).button('loading')


        $.ajax({
            url: $form.attr('action'),
            type: $data_method,
            dataType: 'json',
            data: $form.serialize(),
            beforeSend: function (xhr) {
                $button.html('Submiting..');
            },
            success: function (data) {
                if (data.status == 'error') {
                    showNoti('error', data.result, ' ', 'fa fa-exclamation-circle', '');
                    $(this).find("button[type='submit']").prop('disabled', false);
                    $btn.button('reset')
                } else {
                    showNoti('success', 'Successfully', 'Send link forgot password to email.', '', '');
                    setTimeout(function () {
                        window.location.href = '/';
                    }, 3600);
                }
            },
            complete: function () {
                $button.html($current_text);
            }
        });
    });

    $('#frmreset').on('submit', function (e) {
        e.preventDefault();
        var $form = $(this);
        var $button = $(this).find('.btn-ws-resp');
        var $current_text = $button.html();
        var tokens = $form.find('input[name="_token"]').val();
        var $callback_url = $form.attr('data-callback');
        var $data_method = 'POST';

        $.ajax({
            url: $form.attr('action'),
            type: $data_method,
            dataType: 'json',
            data: $form.serialize(),
            beforeSend: function (xhr) {
                $button.html('Submiting..');
            },
            success: function (data) {
                if (data.status == 'error') {
                    var errors = data.result;
                    var errorsHtml = '<ul>';
                    $.each(errors, function (key, value) {
                        errorsHtml += '<li>' + value + '</li>';
                    });
                    errorsHtml += '</ul>';
                    showNoti('error', 'Information', errorsHtml, 'fa fa-exclamation-circle', '', '');
                } else {
                    showNoti('success', 'Successfully', 'Your information has been saved.', '', '', true);
                    setTimeout(function () {
                        window.location.href = '/dashboard';
                    }, 3600);
                }
            },
            complete: function () {
                $button.html($current_text);
            }
        });
    });

    /* ajax post */
    $('.form-ajax').on('submit', function (e) {
        e.preventDefault();
        var $form = $(this);
        var $button = $(this).find('.btn-ws-resp');
        var $current_text = $button.html();
        var tokens = $form.find('input[name="_token"]').val();
        var $callback_url = $form.attr('data-callback');
        var $data_method = $(this).attr('data-method');

        $.ajax({
            url: $form.attr('action'),
            type: $data_method,
            dataType: 'json',
            data: $form.serialize(),
            headers: {
                Authorization: 'Bearer ' + $tokens
            },
            beforeSend: function (xhr) {
                $button.html('Submiting..');
            },
            success: function (data) {
                if (data.status == 'error') {
                    var errors = data.result;
                    var errorsHtml = '<ul>';
                    $.each(errors, function (key, value) {
                        errorsHtml += '<li>' + value + '</li>';
                    });
                    errorsHtml += '</ul>';
                    showNoti('error', 'Information', errorsHtml, 'fa fa-exclamation-circle', '', true);
                } else {
                    showNoti('success', 'Successfully', 'Your information has been saved.', '', '', true);
                    setTimeout(function () {
                        window.location.href = $callback_url;
                    }, 3600);
                }
            },
            complete: function () {
                $button.html($current_text);
            }
        });
    });

    $(document).on('click', '.delete_func', function () {
        var $dataid = $(this).attr('data-id');
        var $dataapi = $(this).attr('data-api');
        bootbox.confirm({
            title: "<img src='/assets/images/big_logo_tran.png' style='height: 35px' />",
            message: "Do you want to delete this row?",
            buttons: {
                confirm: {
                    label: 'Confirm',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'No',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if (result) {
                    $.ajax({
                        url: $dataapi + $dataid,
                        type: 'DELETE',
                        dataType: 'json',
                        data: {},
                        headers: {
                            Authorization: 'Bearer ' + $tokens
                        },
                        success: function (data) {
                            if (data.status == 'error') {
                                var errors = data.result;
                                var errorsHtml = '<ul>';
                                $.each(errors, function (key, value) {
                                    errorsHtml += '<li>' + value + '</li>';
                                });
                                errorsHtml += '</ul>';
                                showNoti('error', 'Information', errorsHtml, 'fa fa-exclamation-circle', '', true);
                            } else {
                                showNoti('success', 'Successfully', 'This row has been deleted.', '', '', true);
                                $('tr[data-id="table_' + $dataid + '"]').fadeOut().remove();
                            }
                        }
                    });
                } else {
                    $('.modal').modal('hide');
                    return false;
                }
            }
        });
    });


    var $user_name = $('.user_name');
    if ($.cookie('access_token')) {
        $.ajax({
            url: '/api/user',
            type: 'GET',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + $.cookie('access_token')
            },
            data: {},
            beforeSend: function () {

            },
            success: function (data) {
                if (data.status === 'success') {
                    $user_name.html(data.result.first_name + ' ' + data.result.last_name);
                }
            }
        });
    } else {
        $user_name.html('Guest');
    }

});

/* Notification Respone */
function showNoti(type, title, text, icon, timeout, boxed) {
    (typeof type === 'undifinded' || type == '') ? type = 'primary' : '';
    (typeof title === 'undifinded' || title == '') ? title = 'System' : '';
    (typeof text === 'undifinded' || text == '') ? text = 'loading information' : '';
    (typeof icon === 'undifinded' || icon == '') ? icon = 'fa fa-bell-o' : '';
    (typeof timeout === 'undifinded' || timeout == '') ? timeout = 3600 : '';
    (typeof boxed === 'undifinded' || boxed == '') ? boxed = false : '';

    /* Generate Notification */
    var msg = '<div class="ws-respon ' + (boxed ? 'boxed' : '') + ' ' + type + '"> \
                        <div class="ws-inner"> \
                            <div class="ws-icon"><i class="' + icon + '" aria-hidden="true"></i></div> \
                            <div class="ws-text"> \
                                <div class="title">' + title + '</div> \
                                <div class="text">' + text + '</div> \
                            </div> \
                            <div class="ws-close"><a href="javascript:;" onclick="closeNoti();"><i class="fa fa-times-circle" aria-hidden="true"></i></a></div> \
                        </div> \
                        </div>';

    /* Check repeat notification */
    if (boxed) {
        if ($('.ws-respon.boxed').length <= 0) {
            $('.respone-box').html(msg);
            $('.ws-respon.boxed').slideDown('fast', function () {
                var $set_this = $(this);
                setTimeout(function () {
                    $set_this.slideUp('fast', function () {
                        $set_this.remove();
                    });
                }, timeout);
            });
        }
    } else {
        if ($('.ws-respon').length <= 0) {
            $(msg).prependTo('body');
            $('.ws-respon').slideDown('fast', function () {
                var $set_this = $(this);
                setTimeout(function () {
                    $set_this.slideUp('fast', function () {
                        $set_this.remove();
                    });
                }, timeout);
            });
        }
    }
}

function closeNoti() {
    $('.ws-respon').slideUp('fast', function () {
        $(this).remove();
    });
}
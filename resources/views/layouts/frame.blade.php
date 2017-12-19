<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}" />

        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script type="text/javascript" src="{{ url('assets/js/bootstrap.min.js') }}"></script>
        <script type="text/javascript" src="{{ url('assets/js/jquery.cookie.js') }}"></script>
        <script type="text/javascript" src="{{ url('assets/js/prism.js') }}"></script>
        <script type="text/javascript" src="{{ url('assets/js/bootbox.min.js') }}"></script>
        <!--script type="text/javascript" src="{{ url('assets/js/mdb.min.js') }}"></script-->
        <script type="text/javascript" src="{{ url('assets/js/select2.full.min.js') }}"></script>
        <script type="text/javascript" src="{{ url('assets/js/main.js') }}"></script>
        @yield('javascript')

        <title>@yield('page_title') - Windsor</title>

        <!-- CSS -->
        <link href="{{ url('assets/css/normalize.css') }}" rel="stylesheet" type="text/css" />
        <link href="{{ url('assets/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css" />
        <link href="{{ url('assets/css/font-awesome.min.css') }}" rel="stylesheet" type="text/css" />
        <link href="{{ url('assets/css/prism.css') }}" rel="stylesheet" type="text/css" />
        <link href="{{ url('assets/css/flatit.css') }}" rel="stylesheet" type="text/css" />
        <!--link href="{{ url('assets/css/mdb.min.css') }}" rel="stylesheet" type="text/css" /-->
        <link href="{{ url('assets/css/select2.css') }}" rel="stylesheet" type="text/css" />
        <link href="{{ url('assets/css/style.css') }}" rel="stylesheet" type="text/css" />
        @yield('css')
        <!-- Font -->
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet">

    </head>
    <body>
        @yield('header')
        @yield('leftmenu')
        @yield('content')
    </body>
</html>

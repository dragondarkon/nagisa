@extends('layouts.frame') @section('page_title', 'Job Detail') @section('top_title', 'Job Detail')

<!-- section header -->
@section('header') @include('layouts.header') @endsection

<!-- section leftmenu -->
@section('leftmenu') @include('layouts.menu') @endsection @section('content')
<style>

</style>
<div class="main-content">
    <div class="content-inner">
        <div class="table-responsive">
        <div class="pull-left">
            </div>
            <div class="pull-right">
                <a href="list" class="btn btn-mat normal">Back</a>
            </div>
            <div class="clearfix"></div>
            <hr />
            <form class="form-horizontal" method="POST" action="{{ url('bistro/create/') }}">
                {{ csrf_field() }}
                <div class="form-group">
                    <label for="job_name" class="col-sm-2 control-label">Job Name</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" name="job_name" id="job_name" placeholder="">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-2">
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>

                </div>
            </form>
            

        </div>
    </div>
    <script>
    </script>
@endsection
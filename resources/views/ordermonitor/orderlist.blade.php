@extends('layouts.frame') @section('page_title', 'Ordermonitor') @section('top_title', 'ordermonitor')

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
            <h3><a href="list">All Job </a> All Department </h3>
        </div>
            <div class="clearfix"></div>
            <hr />
            <table class="table table-hover wstable">
                <thead>
                    <tr>
                        <th>งานทั้งหมดในระบบ</th>
                        <th>งานที่กำลังดำเนินการ</th>
                        <th>งานที่ยังไม่ได้ upload ใน SAP</th>
                        <th>งานที่ดำเนินการแล้วเสร็จ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>512 jobs</td>
                        <td>384 jobs</td>
                        <td>126 jobs</td>
                        <td>31 jobs</td>
                    </tr>
                </tbody>
            </table>

            <table class="table table-hover wstable">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Job Type</th>
                        <th>Job Number</th>
                        <th>Job Name</th>
                        <th>Current Status</th>
                        <th>Start Date</th>
                        <th>Target Date</th>
                        <th>Status SAP</th>
                        <th>Finish Date</th>
                        <th>Remain</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
               
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><a href="#" class="btn btn-mat-normal"><i class="fa fa-pencil" aria-hidden="true"></i></a>&nbsp</i></a></td></td>
                    </tr>
                 
                </tbody>
            </table>
            

        </div>
    </div>
    <script>
    </script>
@endsection
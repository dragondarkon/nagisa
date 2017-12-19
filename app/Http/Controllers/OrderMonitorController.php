<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderMonitorController extends Controller
{
    public function index() {
        
        return view('ordermonitor.orderlist');    
    }
}

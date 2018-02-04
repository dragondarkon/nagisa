<?php

namespace App\Http\Controllers;

use App\Bistro;
use Illuminate\Http\Request;

class BistroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('registerbistro.add');    
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Bistro  $bistro
     * @return \Illuminate\Http\Response
     */
    public function show(Bistro $bistro)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bistro  $bistro
     * @return \Illuminate\Http\Response
     */
    public function edit(Bistro $bistro)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bistro  $bistro
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bistro $bistro)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bistro  $bistro
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bistro $bistro)
    {
        //
    }
}

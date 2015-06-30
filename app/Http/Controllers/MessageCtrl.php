<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Requests\MessageStoreRequest;
use App\Http\Controllers\Controller;
use App;
use Auth;

class MessageCtrl extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return App\Message::where('user_id', '=', Auth::id())->orderBy('id', 'desc')->take(10)->get();
    }
    public function indexPage($page)
    {
        return App\Message::where('user_id', '=', Auth::id())->orderBy('id', 'desc')->skip(10 * ($page - 1))->take(10)->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(MessageStoreRequest $request)
    {
        App\Message::create(['message' => $request->message, 'user_id' => Auth::user()->id]);
        return ['created' => true];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $m = App\Message::findOrFail($id);
        if (Auth::id() != $m->user_id) {
            throw new Exception('Access denied');
        }
        $m->forceDelete();
        return ['deleted' => true];
    }
}

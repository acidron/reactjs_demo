<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ExampleTest extends TestCase
{
    use DatabaseMigrations;
    use WithoutMiddleware;
    
    public function testSignupUser()
    {       
        $response = $this->call('POST', 'auth/register', [
                'firstname' => 'John',
                'lastname'  => 'Appleseed',
                'email'     => 'john@localhost.net',
                'password'  => 'testpass',
                'password_confirmation' => 'testpass',
            ]);
        $user = App\User::where('email', '=', 'john@localhost.net')->first();
        $this->assertEquals('John', $user->firstname);
        $this->assertEquals('Appleseed', $user->lastname);
        
    }
    public function testSignin()
    {
        $user = factory('App\User', 'testuser')->create();
        $this->post('/auth/login', ['email' => 'mine@localhost.net', 'password' => 'testuser'])
            ->seeJson([
                'email' => 'mine@localhost.net'
            ]);

        $json = json_decode($this->response->getContent());
        
        $this->assertObjectHasAttribute('firstname', $json);
        $this->assertObjectHasAttribute('lastname', $json);
    }
    public function testPostingNews()
    {
        $user = factory('App\User')->create();
        $this->actingAs($user);
        $this->post('/messages', ['message' => 'some message here'])->seeJson(['created' => true]);

        $message = App\Message::all()->first();
        $this->assertEquals('some message here', $message->message);
    }
    public function testGettingNews()
    {
        $user = factory('App\User')->create();
        $this->actingAs($user);
        // generate database
        factory('App\Message', 17)->create();

        // get first 10 records
        $request = $this->call('GET', 'messages');
        $data = json_decode($request->content());
        $this->assertEquals(10, count($data));

        // get another 10, although we have 17 in total, there are only 7 left
        $request = $this->call('GET', 'messages/2');
        $data = json_decode($request->content());
        $this->assertEquals(7, count($data));
    }   

    public function testDeleteNews()
    {
        $user = factory('App\User')->create();
        $this->actingAs($user);
        // generate database
        factory('App\Message', 2)->create();
        $this->delete('/messages/2')->seeJson(['deleted' => true]);
        $this->assertEquals(1, App\Message::all()->count());
    }
    public function testEditProfile()
    {
        $user = factory('App\User')->create();
        $this->actingAs($user);

        $this->put('/profile', ['firstname' => 'Ivan', 'lastname' => 'Ivanov'])->seeJson(['changed' => true]);

        $profile = App\User::findOrFail($user->id);
        $this->assertEquals('Ivan', $profile->firstname);
        $this->assertEquals('Ivanov', $profile->lastname);
    }
}
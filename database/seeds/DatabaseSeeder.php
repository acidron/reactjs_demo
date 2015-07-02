<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // $this->call(UserTableSeeder::class);
        factory('App\User', 'testuser')->create();
        factory('App\Message', 17)->create();

        /*DB::table('messages')->insert([
            ]);
        */Model::reguard();
    }
}

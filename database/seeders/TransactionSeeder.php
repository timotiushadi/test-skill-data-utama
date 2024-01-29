<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use Faker\Factory as Faker;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for($i = 1; $i <= 50; $i++){
            // insert data ke table pegawai menggunakan Faker
            DB::table('transactions')->insert([
                'reference_no' => $faker->regexify('[A-Z]{2}[0-4]{8}'),
                'price' => $faker->numberBetween(1500,6000),
                'quantity' => $faker->numberBetween(0,100),
                'payment_amount' => $faker->numberBetween(10000,50000),
                'product_id' => $faker->numberBetween(1,50)
            ]);
        }
    }
}

<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = Faker::create();

        return [
            'name' => $faker->word,
            'price' => $faker->numberBetween(1500,6000),
            'stock' => $faker->numberBetween(0,100),
            'description' => $faker->paragraph(2)
        ];
    }
}

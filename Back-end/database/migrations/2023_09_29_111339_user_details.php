<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_details', function (Blueprint $table) {
            $table->id(); // This will create an auto-incrementing primary key column
            $table->integer('user_id');
            $table->string('livingPlace')->nullable();
            $table->string('religion')->nullable();
            $table->integer('age')->nullable();
            $table->string('cast')->nullable();
            $table->string('education')->nullable();
            $table->decimal('height', 8, 2)->nullable();
            $table->decimal('weight', 8, 2)->nullable();
            $table->string('workDetails')->nullable();
            $table->string('gender')->nullable();
            $table->string('spokenLnguage')->nullable();
            $table->string('town')->nullable();
            $table->string('phonenum')->nullable();
            $table->boolean('Termsagree')->default(false);
            $table->string('selectedPlans')->nullable();
            $table->timestamps(); // This will add 'created_at' and 'updated_at' columns
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_details');
    }
};

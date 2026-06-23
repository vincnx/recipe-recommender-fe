<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="mx-auto max-w-3xl p-4 pb-8 sm:px-8">
    <div
      class="flex h-[calc(100dvh-6rem)] flex-col items-center gap-4 sm:gap-12"
    >
      <h1 class="text-center">About</h1>
      <p class="text-justify text-xl sm:text-2xl">
        Ever stared at your fridge, saw half a tomato, some lonely carrots, and
        that one mystery sauce, and thought: “What on earth can I cook with
        this?”
      </p>

      <div class="aspect-[3/4] w-1/2">
        <iframe
          src="https://giphy.com/embed/6oFNB3JPuLpAs"
          class="h-full w-full rounded-xl border-6"
          allowfullscreen
        ></iframe>
      </div>

      <p class="text-center text-2xl sm:text-3xl">
        <b> That's exactly why Reveal the Recipe was born! </b>
      </p>
    </div>

    <div ref="bottomSection" class="mt-16 flex flex-col gap-4 sm:gap-12">
      <div class="flex flex-col gap-8">
        <h2>Why this app exist</h2>
        <p class="text-xl sm:text-2xl">
          <b>Food waste is a big deal. </b>
          Every year, tons of perfectly good food ends up in the trash.
          <br />
          <b>We've all been there. </b>
          Buying groceries with good intentions, then forgetting about them
          until it's too late.
          <br />
          <b>Cooking ruts are real. </b>
          Sometimes the hardest part of cooking is just deciding what to cook.
        </p>
      </div>

      <div class="flex flex-col gap-8">
        <h2>My mission</h2>
        <p class="text-justify text-xl sm:text-2xl">
          Reveal the Recipe is here to turn those random leftovers into
          something delicious. Instead of tossing food, you get new meal ideas
          that make you feel like a kitchen wizard.
        </p>
      </div>

      <div class="flex flex-col gap-8">
        <h2>How it helps</h2>
        <p class="text-justify text-xl sm:text-2xl">
          Just type in the leftover ingredients you have then we generate
          recipes that match to you.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <p class="text-center text-xl sm:text-2xl">
          What are you waiting for, lets help society by reducing food waste
        </p>
        <RouterLink to="/play">
          <Button class="w-full py-5 text-2xl">Play now</Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<template>
  <div class="mx-auto max-w-3xl p-4 sm:px-8">
    <div class="flex flex-col items-center gap-4 sm:gap-12">
      <h1 class="text-center">TODOs / Future Work</h1>
      <p class="text-justify text-xl sm:text-2xl">
        So here's the deal:
        <b> Reveal the Recipe was built in roughly one week. </b>
        That's right—7 days of code, caffeine, and me trying not to rage quit
        when something broke at 2 AM. Because of that, the app right now is more
        like a scrappy little food truck than a five-star restaurant: it gets
        the job done, but it could definitely use more seasoning.
      </p>

      <p class="text-center text-xl sm:text-2xl">
        Before we jump in to the future work, i think we need to consider
        current weaknesses
      </p>

      <h2 class="self-start">
        Current Weaknesses (a.k.a. “Why it's still a baby app”)
      </h2>

      <p class="text-justify text-xl sm:text-2xl">
        <b> The AI model isn't that smart (yet). </b>
        Let's be honest: it works, but it's not exactly the Gordon Ramsay of
        recipe generation. That's because, spoiler alert, I'm not an AI engineer
        (we need to hire REAL AI engineer). I stitched together something
        functional, but if we really want to make this app shine, we'll need
        someone who actually knows their way around neural nets.

        <br />
        <br />

        <b> The dataset is kinda messy. </b>
        Right now, the recipe data is like my fridge: useful, but half the stuff
        is shoved in the back, and nobody knows if that jar of pickles is still
        good. The dataset works, but it could be a lot cleaner, which means
        sometimes the recipes aren't as smooth or creative as they could be.

        <br />
        <br />

        <b> No unit tests (oops). </b>
        OOps, I skipped writing unit tests because… well… deadlines and
        caffeine. That means if bugs appear, we're all just going to roll with
        it and call them “mystery challenges.” Fun, right?

        <br />
        <br />

        <b> Backend architecture could be stronger. </b>
        Don't get me wrong—it runs! But right now the backend is more like a
        bamboo hut holding together in the wind. One day it should evolve into a
        skyscraper of reliability. For now, it's standing, and that's what
        counts.
      </p>

      <p class="text-center text-xl sm:text-2xl">
        Okay, enough (maybe) for the current weaknesses, lets jump in to the
        future work
      </p>

      <h2 class="self-start">Future Work (a.k.a. “Where we're heading”)</h2>

      <p class="text-justify text-xl sm:text-2xl">
        <b> Community-Powered Recipes </b>
        Imagine a place where users can share their own creative leftover
        recipes. That's the dream: to make this app not just an AI tool, but a
        recipe hub built by the community. The more ideas, the better we all eat
        (and the less we waste).

        <br />
        <br />

        <b> Recipe Rating System </b>
        Not all recipes will be winners. Some will be “OMG this is genius,”
        others will be “ummm… why does this taste like regret?” A rating system
        will let you give honest feedback, which not only helps other users but
        also helps clean up the data. Basically: you'll be doing AI janitorial
        work while rating food. Win-win.

        <br />
        <br />

        <b> Smarter AI model </b>
        With enough time (and the right brains on the team), the model could
        learn to recommend recipes more like an actual chef would. Who knows,
        maybe one day it'll feel like cooking with Gordon Ramsay (without the
        yelling), but keeping the flavor.
      </p>
    </div>
  </div>
</template>

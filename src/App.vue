<template>
  <div class="min-h-screen bg-white font-sans text-ink">

    <!-- Hero -->
    <section class="bg-navy text-white py-16 md:py-20 px-6">
      <div class="max-w-3xl mx-auto">
        <p class="text-xs font-medium tracking-[0.15em] uppercase text-white/50 mb-4">
          Private Coaching &middot; NYC
        </p>
        <h1 class="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white mb-4 max-w-xl">
          Stay Strong, Mobile &amp; Pain-Free — Even With Long Work Hours.
        </h1>
        <p class="text-base text-white/60 leading-relaxed max-w-lg mb-8">
          Private mobility &amp; core coaching for men in tech and finance.
          Online or in-person in NYC.
        </p>
        <a
          href="#apply"
          class="inline-block bg-accent text-white font-semibold text-sm px-7 py-3.5 rounded-lg
                 hover:bg-accent-hover active:scale-[0.98]
                 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy
                 transition-all duration-150"
        >
          Apply for a Free Assessment
        </a>
      </div>
    </section>

    <!-- Problem -->
    <section class="bg-white py-0 overflow-hidden">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 items-stretch">
        <div class="py-12 px-8 md:px-12 flex flex-col justify-center">
          <p class="text-xs font-medium tracking-[0.15em] uppercase text-ink-muted mb-3">The Problem</p>
          <h2 class="text-2xl font-bold text-ink leading-tight tracking-tight mb-4">
            Your Body Is Paying for Your Career
          </h2>
          <ul class="space-y-2.5">
            <li v-for="pain in painPoints" :key="pain" class="flex items-start gap-2.5 text-ink-muted text-sm leading-relaxed">
              <span class="mt-1.5 block w-1 h-1 rounded-full bg-accent shrink-0"></span>
              {{ pain }}
            </li>
          </ul>
        </div>
        <div class="h-64 md:h-auto">
          <img src="/images/image1.jpg" alt="Professional experiencing back pain at desk" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <!-- Solution -->
    <section class="bg-stone py-0 overflow-hidden">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 items-stretch">
        <div class="h-64 md:h-auto order-last md:order-first">
          <img src="/images/image2.jpg" alt="Man doing mobility work at home" class="w-full h-full object-cover" />
        </div>
        <div class="py-12 px-8 md:px-12 flex flex-col justify-center">
          <p class="text-xs font-medium tracking-[0.15em] uppercase text-ink-muted mb-3">The Program</p>
          <h2 class="text-2xl font-bold text-ink leading-tight tracking-tight mb-4">
            6-Week Spine &amp; Mobility Reset
          </h2>
          <ul class="space-y-2.5">
            <li v-for="item in solutionItems" :key="item" class="flex items-start gap-2.5 text-ink-muted text-sm leading-relaxed">
              <span class="mt-1.5 block w-1 h-1 rounded-full bg-accent shrink-0"></span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Who + About -->
    <section class="bg-white py-12 md:py-14 px-6">
      <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <p class="text-xs font-medium tracking-[0.15em] uppercase text-ink-muted mb-3">Is This For You</p>
          <h2 class="text-xl font-bold text-ink leading-tight tracking-tight mb-4">
            Built for High-Performers
          </h2>
          <ul class="space-y-2">
            <li v-for="item in whoItems" :key="item" class="flex items-start gap-2.5 text-ink-muted text-sm leading-relaxed">
              <span class="mt-1.5 block w-1 h-1 rounded-full bg-accent shrink-0"></span>
              {{ item }}
            </li>
          </ul>
        </div>
        <div>
          <p class="text-xs font-medium tracking-[0.15em] uppercase text-ink-muted mb-3">Your Coach</p>
          <h2 class="text-xl font-bold text-ink leading-tight tracking-tight mb-4">
            Maria Roberts
          </h2>
          <p class="text-ink-muted text-sm leading-relaxed mb-3">
            Certified movement specialist with 10+ years working with executives and athletes.
            Evidence-based, efficient, built around a high-pressure career.
          </p>
          <p class="text-xs text-ink-muted/60 tracking-wide">
            Movement Specialist &middot; CSCS &middot; NYC
          </p>
        </div>
      </div>
    </section>

    <!-- Apply -->
    <section id="apply" class="bg-navy py-12 md:py-16 px-6">
      <div class="max-w-3xl mx-auto">
        <div class="mb-8">
          <p class="text-xs font-medium tracking-[0.15em] uppercase text-white/50 mb-3">Apply</p>
          <h2 class="text-2xl font-bold text-white leading-tight tracking-tight mb-2">
            Limited Beta Spots Available
          </h2>
          <p class="text-white/60 text-sm leading-relaxed max-w-md">
            Applications reviewed individually. Accepted applicants receive a complimentary assessment call.
          </p>
        </div>
        <RegistrationForm />
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t border-ink-border py-5 px-6">
      <div class="max-w-3xl mx-auto">
        <p class="text-ink-muted text-xs">
          &copy; {{ currentYear }} Executive Mobility Program &middot; NYC &middot; All rights reserved.
        </p>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import RegistrationForm from './components/RegistrationForm.vue'

const currentYear = new Date().getFullYear()

const painPoints = [
  'Chronic back pain from prolonged sitting',
  'Tight hips limiting movement',
  'Weak core and poor posture',
  'Neck tension from desk work',
]

const solutionItems = [
  'Personalized movement assessment',
  'Hip & spine mobility protocols',
  'Deep core strengthening',
  'Travel-friendly routines',
  '1-on-1 coaching via Zoom or NYC in-person',
]

const whoItems = [
  'Men 35–65 in tech, finance, or leadership',
  'Sitting 8+ hours daily',
  'Experiencing stiffness or recurring pain',
  'Seeking structured expert coaching',
]
</script>

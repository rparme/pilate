<template>
  <div class="min-h-screen bg-white">

    <!-- Header (Desktop) -->
    <header class="hidden md:flex items-center justify-between border-b border-[#e5e5e5] px-12 py-6">
      <router-link to="/" class="flex items-center gap-2">
        <svg class="w-[18px] h-[17px]" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="17" height="16" stroke="black"/>
          <text x="9" y="12" text-anchor="middle" font-family="Inter" font-weight="600" font-size="9" fill="black">P</text>
        </svg>
        <span class="font-display font-bold text-[20px] tracking-[-1px] uppercase text-black">Premium Mobility</span>
      </router-link>
      <nav class="flex items-center gap-12">
        <div class="flex items-center gap-10">
          <a href="#focus" class="font-semibold text-[12px] tracking-[1.2px] uppercase text-black">Program</a>
          <a href="#methodology" class="font-semibold text-[12px] tracking-[1.2px] uppercase text-black">Methodology</a>
          <a href="#about" class="font-semibold text-[12px] tracking-[1.2px] uppercase text-black">About</a>
        </div>
        <router-link to="/capacity" class="bg-black text-white font-semibold text-[10px] tracking-[2px] uppercase px-8 py-3">
          Book Assessment
        </router-link>
      </nav>
    </header>

    <!-- Header (Mobile) -->
    <header class="md:hidden flex items-center justify-between border-b border-[#f5f5f5] px-6 py-5 sticky top-0 bg-white z-50">
      <router-link to="/" class="flex items-center gap-2">
        <div class="w-5 h-5 border border-black flex items-center justify-center">
          <span class="font-semibold text-[8px] text-black">P</span>
        </div>
        <span class="font-display font-bold text-[12px] tracking-[1.8px] uppercase text-black">Premium Mobility</span>
      </router-link>
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2" aria-label="Toggle menu">
        <svg class="w-[17px] h-[11px]" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="17" y2="0.5" stroke="black"/>
          <line y1="5.5" x2="17" y2="5.5" stroke="black"/>
          <line y1="10.5" x2="17" y2="10.5" stroke="black"/>
        </svg>
      </button>
    </header>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden fixed inset-0 top-[68px] bg-white z-40 px-6 py-8 flex flex-col gap-6">
      <a href="#focus" @click="mobileMenuOpen = false" class="font-semibold text-[12px] tracking-[1.2px] uppercase text-black">Program</a>
      <a href="#methodology" @click="mobileMenuOpen = false" class="font-semibold text-[12px] tracking-[1.2px] uppercase text-black">Methodology</a>
      <a href="#about" @click="mobileMenuOpen = false" class="font-semibold text-[12px] tracking-[1.2px] uppercase text-black">About</a>
      <router-link to="/capacity" class="bg-black text-white font-semibold text-[10px] tracking-[2px] uppercase px-8 py-4 text-center mt-4">
        Book Assessment
      </router-link>
    </div>

    <main class="flex flex-col">

      <!-- Hero Section -->
      <section class="px-6 md:px-12 py-12 md:py-32">
        <div class="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-10 items-start">
          <!-- Left content -->
          <div class="md:w-[55%] flex flex-col gap-10 md:pt-12">
            <div class="flex items-center gap-3 md:gap-4">
              <div class="w-8 md:w-12 h-px bg-black"></div>
              <span class="font-semibold text-[10px] tracking-[3px] uppercase text-[#525252]">
                Private Spine &amp; Mobility Coaching &middot; NYC / Online
              </span>
            </div>
            <h1 class="font-display font-bold text-[48px] md:text-[64px] leading-[1] md:leading-[1] tracking-[-1.92px]">
              Fix Back &amp; Hip Pain From Long Work Hours.
              <span class="text-[#a3a3a3]"> Before It Becomes Permanent.</span>
            </h1>
            <p class="font-light text-[18px] md:text-[24px] leading-[29px] md:leading-[32px] text-[#525252] max-w-[576px]">
              You built a strong career.<br>
              Now build a body that can sustain it.<br><br>
              A <em class="not-italic font-light">personalized 6-week spine &amp; mobility reset</em> for men in tech and finance who sit 8+ hours a day.
            </p>
            <div>
              <router-link
                to="/capacity"
                class="inline-flex items-center justify-center bg-black text-white font-semibold text-[12px] tracking-[2.4px] uppercase px-10 py-5 w-full md:w-[305px] hover:bg-[#262626] transition-colors"
              >
                Request FREE Assessment
              </router-link>
            </div>
          </div>
          <!-- Right image -->
          <div class="md:w-[45%] relative">
            <div class="bg-[#f0f0f0] overflow-hidden">
              <img src="/images/hero.jpg" alt="Man experiencing back pain" class="w-full h-[540px] md:h-[680px] object-cover" />
            </div>
            <!-- Quote card -->
            <div class="absolute -bottom-8 -left-8 bg-white border border-[rgba(0,0,0,0.1)] p-8 max-w-[320px] hidden md:block">
              <div class="border-b border-black pb-2 mb-4">
                <span class="font-semibold text-[12px] tracking-[2.4px] uppercase text-black">The Standard</span>
              </div>
              <p class="font-light text-[14px] leading-[22.75px] text-[#525252]">
                "My goal isn't just to be fit now, but to be moving at 100% when I'm 80."
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Focus Section (3 Cards) -->
      <section id="focus" class="bg-[#f9f9f9] border-y border-[#e5e5e5] py-10 md:py-10 px-6 md:px-12">
        <div class="max-w-[1280px] mx-auto">
          <!-- Header -->
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-12 mb-8">
            <div class="flex flex-col gap-4 md:gap-6">
              <span class="font-display font-bold text-[8px] md:text-[10px] tracking-[3.2px] md:tracking-[4px] uppercase text-[#bdbdbd] md:text-[#a3a3a3]">Focus</span>
              <h2 class="font-display font-bold text-[30px] md:text-[48px] leading-[1.25] md:leading-[48px] tracking-[-0.75px] md:tracking-tight text-black">
                The Cost of High-Performance<br>Desk Work
              </h2>
            </div>
            <p class="font-light text-[14px] leading-[22.75px] text-[#525252] md:max-w-[362px] md:text-right">
              Long hours at the desk take a toll on your spine and hips. Your high-output career
              shouldn't come at the cost of your physical freedom.
            </p>
          </div>
          <!-- Cards -->
          <div class="flex flex-col md:flex-row gap-4 md:gap-px">
            <div v-for="card in focusCards" :key="card.title" class="bg-white border border-[rgba(0,0,0,0.15)] md:border-[#e7e5e4] flex-1 relative p-8 md:p-0 md:h-[364px]">
              <div class="md:absolute md:left-[63px] md:top-[68px]">
                <div v-html="card.icon" class="w-6 h-6 text-black"></div>
              </div>
              <h3 class="font-display font-bold text-[14px] md:text-[20px] tracking-[-0.35px] md:tracking-[-0.5px] uppercase text-black mt-6 md:mt-0 md:absolute md:left-[63px] md:top-[151px]">
                {{ card.title }}
              </h3>
              <p class="font-light text-[12px] md:text-[14px] leading-[19.5px] md:leading-[22.75px] text-[#757575] mt-3 md:mt-0 md:absolute md:left-[63px] md:right-[63px]" :class="card.title === 'Tight Hip Flexors' ? 'md:top-[201.75px]' : 'md:top-[229.75px]'">
                {{ card.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Longevity Section -->
      <section class="py-10 md:py-10 px-6 md:px-0">
        <div class="max-w-[1184px] mx-auto flex flex-col md:flex-row gap-4 md:gap-24 items-center">
          <!-- Image -->
          <div class="w-full md:w-[453px] shrink-0">
            <div class="bg-[#f0f0f0] p-1">
              <img src="/images/longevity.jpg" alt="Man focused on longevity" class="w-full aspect-[3/4] object-cover" />
            </div>
          </div>
          <!-- Content -->
          <div class="flex flex-col gap-4 md:gap-8 flex-1">
            <span class="font-display font-bold text-[8px] md:text-[10px] tracking-[3.2px] md:tracking-[4px] uppercase text-[#bdbdbd] md:text-[#a3a3a3]">Long-Term Vision</span>
            <h2 class="font-display font-bold text-[36px] md:text-[48px] leading-[1.1] md:leading-[60px] tracking-[-0.9px] md:tracking-[-1.5px] text-black">
              This Isn't Just About Pain. <span class="text-[#a8a29e] md:text-black">It's About Longevity.</span>
            </h2>
            <div class="flex flex-col gap-12 pt-4">
              <div v-for="item in longevityItems" :key="item.age" class="flex gap-6 md:gap-14 items-start">
                <span class="font-display font-light text-[20px] md:text-[30px] leading-[28px] md:leading-[36px] text-[#78716c] md:text-black w-12 md:w-[61px] shrink-0">{{ item.age }}</span>
                <div class="border-l-2 md:border-l border-[#f5f5f5] md:border-[#e5e5e5] pl-6 md:pl-8 flex flex-col gap-2 md:gap-3">
                  <span class="font-display md:font-sans font-bold md:font-semibold text-[12px] md:text-[18px] tracking-[1.2px] md:tracking-[1.8px] uppercase text-black">{{ item.title }}</span>
                  <p class="font-light text-[14px] md:text-[16px] leading-[22.75px] md:leading-[24px] text-[#757575] md:text-[#525252]">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6-Week Reset Section -->
      <section id="methodology" class="bg-black text-white px-6 md:px-12 py-10 md:py-32">
        <div class="max-w-[1184px] mx-auto flex flex-col md:flex-row gap-10 md:gap-20">
          <!-- Left -->
          <div class="md:flex-1 flex flex-col gap-8">
            <h2 class="font-display font-bold text-[48px] md:text-[72px] leading-[1] md:leading-[72px] tracking-[-2.4px] md:tracking-[-3.6px]">
              The 6-Week<br>Reset
            </h2>
            <p class="font-light text-[18px] md:text-[20px] leading-[29.25px] md:leading-[32.5px] text-[#bdbdbd] md:text-[#e7e5e4]">
              A structured, results-driven system to eliminate desk related pain and rebuild durable strength.<br>
              No fluff. No random workouts. Just measurable improvement.
            </p>
          </div>
          <!-- Right -->
          <div class="md:flex-1 flex flex-col gap-10">
            <div v-for="(step, i) in resetSteps" :key="step.title" class="flex gap-6 md:gap-8 items-start" :class="i < resetSteps.length - 1 ? 'border-b border-[rgba(255,255,255,0.1)] md:border-[#262626] pb-8 md:pb-10' : ''">
              <div class="w-12 h-12 border border-[rgba(255,255,255,0.2)] flex items-center justify-center shrink-0">
                <div v-html="step.icon" class="text-white"></div>
              </div>
              <div class="flex flex-col gap-2">
                <h3 class="font-display md:font-sans font-bold md:font-semibold text-[14px] md:text-[20px] tracking-[1.4px] md:tracking-[-0.5px] uppercase text-white">{{ step.title }}</h3>
                <div class="font-light text-[12px] md:text-[14px] leading-[19.5px] md:leading-[22.75px] text-[#9e9e9e] md:text-[#e7e5e4]" v-html="step.description"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About / Maria Roberts Section -->
      <section id="about" class="px-1 md:px-0">
        <div class="max-w-[1184px] mx-auto flex flex-col md:flex-row border border-[rgba(0,0,0,0.08)] md:border-[rgba(0,0,0,0.1)]">
          <!-- Image -->
          <div class="bg-[#f0f0f0] w-full md:w-[368px] shrink-0 overflow-hidden">
            <img src="/images/maria.jpg" alt="Maria Roberts" class="w-full h-[363px] md:h-[435px] object-cover" />
          </div>
          <!-- Bio -->
          <div class="flex-1 flex flex-col gap-4 p-12 md:py-20 md:pr-20">
            <span class="font-semibold text-[10px] tracking-[4px] uppercase text-[#a3a3a3] hidden md:block">My Methodology</span>
            <h2 class="font-display font-bold text-[36px] leading-[40px] text-black">Maria Roberts</h2>
            <p class="font-light text-[18px] leading-[29.25px] text-[#525252] pt-2">
              I'm Maria Roberts, a certified movement specialist based in NYC. I work privately with executives and professionals who want structured, evidence-based solutions to back pain and mobility decline.<br><br>
              My approach combines biomechanical assessment, targeted mobility training, and progressive core strengthening to create measurable structural change.<br><br>
              Sessions are available in NYC (in-home or studio) or live online. Every program is fully personalized, discreet, and built around the demands of your career.
            </p>
            <div class="flex flex-col gap-0 mt-2">
              <div class="flex items-center gap-4 border-b border-[#f0f0f0] pb-4">
                <svg class="w-3 h-3 text-black" viewBox="0 0 13 13" fill="currentColor"><path d="M6.5 0L8.3 4.2L13 4.8L9.75 7.9L10.6 13L6.5 10.5L2.4 13L3.25 7.9L0 4.8L4.7 4.2L6.5 0Z"/></svg>
                <span class="font-semibold text-[12px] tracking-[1.2px] uppercase text-black">Certified Strength &amp; Conditioning Specialist</span>
              </div>
              <div class="flex items-center gap-4 border-b border-[#f0f0f0] pb-4 pt-4">
                <svg class="w-3 h-3 text-black" viewBox="0 0 13 13" fill="currentColor"><path d="M6.5 0L8.3 4.2L13 4.8L9.75 7.9L10.6 13L6.5 10.5L2.4 13L3.25 7.9L0 4.8L4.7 4.2L6.5 0Z"/></svg>
                <span class="font-semibold text-[12px] tracking-[1.2px] uppercase text-black">Functional Range Conditioning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Intake Application CTA -->
      <section class="bg-[#f9f9f9] md:bg-[#f9f9f9] px-6 md:px-0 py-3 md:py-0">
        <div class="max-w-[768px] mx-auto">
          <div class="bg-white border border-[#f5f5f5] md:border-[#e5e5e5] shadow-[0px_20px_40px_-15px_rgba(0,0,0,0.1)] md:shadow-[0px_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center gap-6 md:gap-9 px-8 md:px-20 py-8 md:py-20">
            <div class="flex flex-col items-center gap-4">
              <h2 class="font-display font-bold text-[30px] md:text-[36px] leading-[36px] md:leading-[40px] tracking-[-0.75px] md:tracking-[-0.9px] text-black text-center">Intake Application</h2>
              <div class="w-8 md:w-12 h-[2px] md:h-1 bg-black"></div>
              <span class="font-semibold text-[8px] md:text-[10px] tracking-[2.4px] md:tracking-[3px] uppercase text-[#9e9e9e] md:text-[#525252]">Confidential Assessment Request</span>
            </div>
            <router-link
              to="/capacity"
              class="bg-black text-white font-semibold text-[12px] tracking-[2.4px] uppercase py-6 w-full md:w-[372px] text-center block hover:bg-[#262626] transition-colors"
            >
              Request FREE Assessment
            </router-link>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer class="border-t border-[#f0f0f0] md:border-[#f0f0f0] px-6 md:px-12 py-20">
      <div class="max-w-[1184px] mx-auto flex flex-col gap-12 md:gap-20">
        <!-- Top -->
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <!-- Logo + tagline -->
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-2">
              <div class="w-5 h-5 border border-black flex items-center justify-center md:hidden">
                <span class="font-semibold text-[8px] text-black">P</span>
              </div>
              <svg class="w-[18px] h-[17px] hidden md:block" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="17" height="16" stroke="black"/>
                <text x="9" y="12" text-anchor="middle" font-family="Inter" font-weight="600" font-size="9" fill="black">P</text>
              </svg>
              <span class="font-display md:font-sans font-bold md:font-semibold text-[12px] md:text-[16px] tracking-[2.4px] md:tracking-[-0.8px] uppercase text-black">Premium Mobility</span>
            </div>
            <p class="font-light text-[10px] md:text-[12px] leading-[16.25px] md:leading-[19.5px] text-[#9e9e9e] md:text-[#a3a3a3] max-w-[320px]">
              Executive physical restoration<br>and longevity strategy.
            </p>
          </div>
          <!-- Footer links -->
          <div class="flex flex-col md:flex-row gap-10 md:gap-12">
            <div class="flex flex-col gap-4">
              <span class="font-semibold text-[8px] md:text-[10px] tracking-[2px] md:tracking-[2px] uppercase text-black">Contact</span>
              <span class="font-normal text-[10px] md:text-[12px] text-[#757575] md:text-[#525252]">info@premium-mobility.com</span>
              <span class="font-normal text-[10px] md:text-[12px] text-[#757575] md:text-[#525252]">Private Concierge</span>
            </div>
            <div class="flex flex-col gap-4">
              <span class="font-semibold text-[8px] md:text-[10px] tracking-[2px] md:tracking-[2px] uppercase text-black">Locations</span>
              <span class="font-normal text-[10px] md:text-[12px] text-[#757575] md:text-[#525252]">New York City, NY</span>
              <span class="font-normal text-[10px] md:text-[12px] text-[#757575] md:text-[#525252]">Virtual Performance Lab</span>
            </div>
          </div>
        </div>
        <!-- Bottom -->
        <div class="border-t border-[#f5f5f5] md:border-[#f0f0f0] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <span class="font-normal text-[7px] md:text-[10px] tracking-[1px] md:tracking-[1px] uppercase text-[#bdbdbd] md:text-[#a3a3a3]">
            &copy; {{ currentYear }} Premium Mobility Program. All rights reserved.
          </span>
          <div class="flex gap-8">
            <!-- Social icons -->
            <a href="#" aria-label="Twitter">
              <svg class="w-3 h-3 text-[#a3a3a3]" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg class="w-3 h-3 text-[#a3a3a3]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
const currentYear = new Date().getFullYear()

const focusCards = [
  {
    title: 'Tech Neck & Shoulder Tension',
    description: 'Correction of forward-head posture and scapular dyskinesis resulting from digital immersion.',
    icon: '<svg viewBox="0 0 24 29" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="6" r="5"/><path d="M12 11v17M8 15l4-4 4 4M6 28h12"/></svg>',
  },
  {
    title: 'Compressed Lumbar Spine',
    description: 'Relieving chronic spinal loading and disc pressure caused by sustained sedentary focus.',
    icon: '<svg viewBox="0 0 27 24" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 1v22M9 5h9M8 9h11M9 13h9M10 17h7M11 21h5"/></svg>',
  },
  {
    title: 'Tight Hip Flexors',
    description: 'Restoring the anterior chain elasticity to eliminate pelvic instability and lower back pain.',
    icon: '<svg viewBox="0 0 22 31" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M11 1c-5 0-10 5-10 10s3 8 6 10M11 1c5 0 10 5 10 10s-3 8-6 10M7 21l-3 9M15 21l3 9"/></svg>',
  },
]

const longevityItems = [
  {
    age: '40s',
    title: 'Build Resiliency',
    description: 'Neutralize the compounding effects of a decade in the executive chair. Focus on joint workspace and structural balance.',
  },
  {
    age: '50s',
    title: 'Maintain Elasticity',
    description: 'Prevent collagen cross-linking and connective tissue stiffening. Keep the fascia hydrated and responsive.',
  },
  {
    age: '60s+',
    title: 'Optimized Function',
    description: 'Retain full independence of movement. High-intensity mobility to support an active, uncompromising lifestyle.',
  },
]

const resetSteps = [
  {
    title: 'Precision Assessment',
    description: '<p>We begin with a detailed movement and spine evaluation. You\'ll understand exactly why your back or hips hurt, not just how to stretch them. This becomes your roadmap.</p>',
    icon: '<svg class="w-[18px] h-[19px]" viewBox="0 0 18 19" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="1" width="14" height="17" rx="1"/><path d="M5 5h8M5 8h8M5 11h5"/></svg>',
  },
  {
    title: 'Personalized 1-on-1 Training',
    description: '<p class="font-semibold mb-1">Sessions available:</p><ul class="list-disc ml-5 mb-3"><li>NYC (In-person, private) or Online (live 1-on-1)</li></ul><p class="font-semibold mb-1">We focus on:</p><ul class="list-disc ml-5"><li>Targeted hip &amp; spine mobility</li><li>Deep core stabilization</li><li>Postural strength</li><li>Desk-damage reversal</li><li>Travel-friendly routines</li></ul>',
    icon: '<svg class="w-[10px] h-[17px]" viewBox="0 0 10 17" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="5" cy="3" r="2.5"/><path d="M5 6v11M2 10h6"/></svg>',
  },
  {
    title: 'Measure Success',
    description: '<p>We don\'t just improve movement, we measure it. We track:</p><ul class="list-disc ml-5 mt-1"><li>Hip internal &amp; external rotation range</li><li>Spinal mobility benchmarks</li><li>Core stability endurance</li><li>Postural alignment changes</li><li>Pain intensity trends (1–10 scale)</li></ul>',
    icon: '<svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 18V8l4-3v13M8 18V5l4-4v17M14 18v-8l4-3v11"/></svg>',
  },
]
</script>

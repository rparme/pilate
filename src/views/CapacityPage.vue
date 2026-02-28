<template>
  <div class="min-h-screen bg-white flex flex-col">

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
          <router-link to="/" class="font-semibold text-[12px] tracking-[1.2px] uppercase text-black">Program</router-link>
          <router-link to="/" class="font-semibold text-[12px] tracking-[1.2px] uppercase text-black">Methodology</router-link>
          <router-link to="/" class="font-semibold text-[12px] tracking-[1.2px] uppercase text-black">About</router-link>
        </div>
        <router-link to="/capacity" class="bg-black text-white font-semibold text-[10px] tracking-[2px] uppercase px-8 py-3">
          Book Assessment
        </router-link>
      </nav>
    </header>

    <!-- Header (Mobile) -->
    <header class="md:hidden flex items-center justify-between border-b border-[#f5f5f5] px-6 py-5">
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
      <router-link to="/" class="font-semibold text-[12px] tracking-[1.2px] uppercase text-black">Program</router-link>
      <router-link to="/" class="font-semibold text-[12px] tracking-[1.2px] uppercase text-black">Methodology</router-link>
      <router-link to="/" class="font-semibold text-[12px] tracking-[1.2px] uppercase text-black">About</router-link>
    </div>

    <!-- Main Content -->
    <main class="flex-1 flex items-center justify-center px-6 py-24">
      <div class="max-w-[720px] w-full flex flex-col items-center text-center">
        <!-- Status Badge -->
        <div class="inline-flex items-center gap-2 border border-[#e2e8f0] md:border-[#757575] rounded-full px-4 py-1.5 shadow-sm md:shadow-none mb-10 md:mb-8">
          <span class="w-2 h-2 rounded-full bg-[#ef4444] md:hidden"></span>
          <svg class="w-[9px] h-[12px] hidden md:block" viewBox="0 0 9 12" fill="none" stroke="#000" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="4" width="7" height="7" rx="1"/>
            <path d="M2.5 4V2.5a2 2 0 014 0V4"/>
          </svg>
          <span class="font-manrope font-bold text-[10px] md:text-[12px] tracking-[1px] md:tracking-[1.2px] uppercase text-[#0f172a]">
            <span class="md:hidden">Capacity Status: Full</span>
            <span class="hidden md:inline">Capacity Status</span>
          </span>
        </div>

        <!-- Headline -->
        <h1 class="font-manrope font-extrabold text-[30px] md:text-[48px] leading-[37.5px] md:leading-[48px] tracking-[-0.75px] md:tracking-[-1.2px] text-[#0f172a] mb-4 md:mb-4">
          Our Intake is Currently at Capacity
        </h1>

        <!-- Description -->
        <p class="font-manrope font-normal text-[16px] md:text-[20px] leading-[26px] md:leading-[28px] text-[#475569] max-w-[672px]">
          To maintain the highest level of personalized care for our executive
          clients, we are not accepting new assessments at this time.
          <span class="font-semibold text-[#0f172a]">We prioritize professionals in tech and finance for our next opening.</span>
        </p>
      </div>
    </main>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

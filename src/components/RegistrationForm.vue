<template>
  <!-- Success state -->
  <div
    v-if="submitted"
    class="max-w-lg mx-auto bg-white border border-ink-border rounded-lg p-10 text-center"
    role="status"
    aria-live="polite"
  >
    <div class="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-5">
      <svg class="w-8 h-8 text-navy" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h2 class="font-serif text-2xl font-bold text-ink mb-3">Application Received</h2>
    <p class="text-ink-muted font-sans leading-relaxed">
      Thank you, <strong class="text-ink">{{ form.name }}</strong>. We'll review your application and be in touch within 48 hours.
    </p>
  </div>

  <!-- Form -->
  <form
    v-else
    novalidate
    class="max-w-lg mx-auto bg-white border border-ink-border rounded-lg overflow-hidden"
    @submit.prevent="handleSubmit"
  >
    <div class="p-8 md:p-10">
      <h2 class="font-serif text-xl font-semibold text-ink mb-1">Apply for the Program</h2>
      <p class="text-ink-muted/80 text-sm font-sans mb-8">
        Tell us about yourself. We review every application.
      </p>

      <!-- Honeypot -->
      <div aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden">
        <input v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
      </div>

      <!-- Required fields -->
      <fieldset class="space-y-5" aria-label="Required information">
        <!-- Full Name -->
        <div>
          <label for="name" class="field-label">Full Name</label>
          <input
            id="name"
            v-model.trim="form.name"
            type="text"
            autocomplete="name"
            placeholder="John Smith"
            class="field-input"
            :aria-invalid="!!visibleErrors.name"
            :aria-describedby="visibleErrors.name ? 'name-error' : undefined"
            @blur="touch('name')"
          />
          <p v-if="visibleErrors.name" id="name-error" class="field-error" role="alert">{{ visibleErrors.name }}</p>
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="field-label">Email Address</label>
          <input
            id="email"
            v-model.trim="form.email"
            type="email"
            autocomplete="email"
            placeholder="john@example.com"
            class="field-input"
            :aria-invalid="!!visibleErrors.email"
            :aria-describedby="visibleErrors.email ? 'email-error' : undefined"
            @blur="touch('email')"
          />
          <p v-if="visibleErrors.email" id="email-error" class="field-error" role="alert">{{ visibleErrors.email }}</p>
        </div>

        <!-- Age Range (required) -->
        <div>
          <label for="age-range" class="field-label">Age Range</label>
          <select
            id="age-range"
            v-model="form.ageRange"
            class="field-input"
            :aria-invalid="!!visibleErrors.ageRange"
            :aria-describedby="visibleErrors.ageRange ? 'age-range-error' : undefined"
            @blur="touch('ageRange')"
          >
            <option value="">Select your age range</option>
            <option value="Under 35">Under 35</option>
            <option value="35-45">35-45</option>
            <option value="46-55">46-55</option>
            <option value="56-65">56-65</option>
            <option value="66+">66+</option>
          </select>
          <p v-if="visibleErrors.ageRange" id="age-range-error" class="field-error" role="alert">{{ visibleErrors.ageRange }}</p>
        </div>
      </fieldset>

      <!-- Optional divider -->
      <div class="flex items-center gap-3 my-8">
        <div class="h-px flex-1 bg-ink-border"></div>
        <span class="text-xs font-sans font-semibold text-ink-muted/60 uppercase tracking-widest whitespace-nowrap">
          Additional context — helps us prepare your assessment
        </span>
        <div class="h-px flex-1 bg-ink-border"></div>
      </div>

      <!-- Optional fields -->
      <fieldset class="space-y-5" aria-label="Optional information">
        <!-- Biggest hurdle -->
        <div>
          <label for="hurdle" class="field-label">
            What's your biggest hurdle to consistent movement?
            <span class="font-normal text-ink-muted/60 ml-1">(optional)</span>
          </label>
          <textarea
            id="hurdle"
            v-model="form.biggestHurdle"
            rows="3"
            placeholder="e.g. Long work hours, no energy after meetings..."
            class="field-input resize-none"
            style="min-height: unset;"
          ></textarea>
        </div>

        <!-- Improve in 6 weeks -->
        <div>
          <label for="improve" class="field-label">
            What would you most like to improve in 6 weeks?
            <span class="font-normal text-ink-muted/60 ml-1">(optional)</span>
          </label>
          <textarea
            id="improve"
            v-model="form.improveIn6Weeks"
            rows="3"
            placeholder="e.g. Core strength, posture, lower back pain..."
            class="field-input resize-none"
            style="min-height: unset;"
          ></textarea>
        </div>
      </fieldset>

      <!-- Submit -->
      <div class="mt-8">
        <button
          type="submit"
          :disabled="submitting"
          :aria-busy="submitting"
          class="w-full rounded-lg bg-accent text-white font-sans font-semibold text-base py-4 px-6
                 hover:bg-accent-hover active:scale-[0.98]
                 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
                 disabled:opacity-60 disabled:cursor-not-allowed
                 transition-all duration-150"
        >
          <span v-if="submitting" class="inline-flex items-center gap-2">
            <svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Sending...
          </span>
          <span v-else>Submit Application</span>
        </button>

        <p v-if="submitError" class="mt-3 text-center text-red-500 text-sm font-sans" role="alert">
          {{ submitError }}
        </p>

        <p class="mt-4 text-center text-ink-muted/60 text-xs font-sans">
          Your details are kept private and never shared.
        </p>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue'

// ─── Types ──────────────────────────────────────────────────────────────────

type FormField = 'name' | 'email' | 'ageRange'

interface RegistrationForm {
  name: string
  email: string
  ageRange: string
  biggestHurdle: string
  improveIn6Weeks: string
  website: string
}

// ─── Constants ──────────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// ─── State ──────────────────────────────────────────────────────────────────

const form = reactive<RegistrationForm>({
  name: '',
  email: '',
  ageRange: '',
  biggestHurdle: '',
  improveIn6Weeks: '',
  website: '',
})

const touched = reactive<Record<FormField, boolean>>({
  name: false,
  email: false,
  ageRange: false,
})

const submitting = ref(false)
const submitted = ref(false)
const submitError = ref('')

// ─── Validation ─────────────────────────────────────────────────────────────

const validationErrors = computed(() => {
  const e: Partial<Record<FormField, string>> = {}

  if (!form.name) e.name = 'Full name is required.'
  else if (form.name.length < 2) e.name = 'Name must be at least 2 characters.'

  if (!form.email) e.email = 'Email address is required.'
  else if (!EMAIL_RE.test(form.email)) e.email = 'Please enter a valid email address.'

  if (!form.ageRange) e.ageRange = 'Please select your age range.'

  return e
})

const visibleErrors = computed(() => {
  const e: Partial<Record<FormField, string>> = {}
  for (const field of Object.keys(validationErrors.value) as FormField[]) {
    if (touched[field]) {
      e[field] = validationErrors.value[field]
    }
  }
  return e
})

const isFormValid = computed(() => Object.keys(validationErrors.value).length === 0)

function touch(field: FormField) {
  touched[field] = true
}

function touchAll() {
  touched.name = true
  touched.email = true
  touched.ageRange = true
}

// ─── Submit ─────────────────────────────────────────────────────────────────

async function handleSubmit() {
  touchAll()
  if (!isFormValid.value) return

  // Honeypot check — bots fill hidden fields
  if (form.website) return

  const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL
  if (!scriptUrl) {
    submitError.value = 'Registration endpoint is not configured. Please contact the site owner.'
    return
  }

  submitting.value = true
  submitError.value = ''

  const payload = {
    name: form.name,
    email: form.email,
    ageRange: form.ageRange,
    biggestHurdle: form.biggestHurdle,
    improveIn6Weeks: form.improveIn6Weeks,
    timestamp: new Date().toISOString(),
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
    })

    const result: { success: boolean; error?: string } = await response.json()

    if (!result.success) {
      throw new Error(result.error || 'Submission failed')
    }

    submitted.value = true
  } catch {
    submitError.value = 'Something went wrong. Please try again in a moment.'
  } finally {
    submitting.value = false
  }
}
</script>

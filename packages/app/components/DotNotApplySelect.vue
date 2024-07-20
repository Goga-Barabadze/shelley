<script setup lang="ts">
const reasonsForClaimNotToApply = [
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
  "Logically inconistent",
]

const selectedReasons = ref<string[]>([])

function onClickReason(reason: string) {
    selectedReasons.value.push(reason)
}
</script>

<template>
    <div class="w-3/4 max-w-[500px] bg-gray-200 rounded-2xl p-4 relative left-0 right-0 top-0 bottom-0 items-center">
    Please select one or more reasons why the argument does not apply:

    <br>
    <br>

    <div
        class="bg-white max-h-[300px] overflow-auto rounded-lg"
    >
      <div
        v-for="reason in reasonsForClaimNotToApply"
        class="cursor-pointer m-2 hover:underline"
        @click="onClickReason(reason)"
      >
        {{ reason }}
      </div>
    </div>

    <br>

    <p class="text-center">
        <a class="cursor-pointer hover:underline">Cancel</a>
        |
        <a class="cursor-pointer hover:underline">Save</a>
    </p>
  </div>
</template>

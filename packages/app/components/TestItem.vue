<script setup lang="ts">
const item = {
    question: "I would be quite bored by a visit to an art gallery.",
    options: [ 
        "strongly disagree",
        "disagree",
        "neutral",
        "agree",
        "strongly agree",
    ]
}

// TODO: Do this on the server
const randomizedOptionsOrder = computed(() => shuffle(item.options))
</script>

<template>
    <div class="flex flex-col border-solid border-[1px] rounded-lg p-5 border-gray-300 m-10">
        <div class="font-semibold text-lg">
            {{ item.question }}
        </div>

        <br>

        <div
            v-for="option in randomizedOptionsOrder"
            :key="option"
            class="m-3 hover:underline cursor-pointer"
        >
            {{ option }}
        </div>
    </div>
</template>
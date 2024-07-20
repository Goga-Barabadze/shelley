<script setup lang="ts">
import TestItem from "~/components/TestItem.vue";
import { name } from "~/utils/pseudo";

useSeoMeta({
  title: "Peer Review",
})

const isTestItem = ref(false)

/*
    TODO:

    - Let reviewer cast their vote, then show what others voted for and let them cast a second vote.
        - If the reviewer makes a mistake the first time around, they can learn where they should pay more attention.
        - Fabricate the others' votes sometimes
    - Check for profane language and highlight the words.
    - Spell Check

    AddClaim
        - Show Stats On Sudden High Traffic (normalized to the traffic for similar claims, and also to the site in general)
        - Suggest what should be changed for the add to go through
    EditClaim
        - Show Git Diff
        - Accept Some Changes, and not others
        - Suggest what should be changed for the edit to go through
*/

</script>

<template>
    <Teleport to="#header">
        
    </Teleport>

    <Teleport to="#article">
        <div class="m-7">
            <h1>Peer Review</h1>
            <p class="text-gray-400 text-xs">
                <template v-if="isTestItem">
                    Please answer the following question truthfully. We use these question as bot-detection, to check language proficiency, but mostly importantly, to make sure that the review sample is heterogenous.
                </template>

                <template v-else>
                    Please reivew the following review item carefully and to the best of your knowledge. If we should detect fraudulent use of the peer review process, you will be banned from this and other editorial features for a certain period of time. If repeated, your case will be reviewed and this can result in only be able to using this platform in read-only mode for an extended period of time, or even forever.
                </template>
            </p>

            <br>
            <br>

            <TestItem v-if="isTestItem"></TestItem>

            <template v-else>
                <div class="flex">
                    <div class="flex-initial w-64">
                        <div class="border-gray-400 rounded-full border-solid w-5 h-5 border-[1px] items-center justify-center flex">
                            +
                        </div>

                        <div class="w-[1px] h-32 bg-gray-400 ml-[10px] mt-[14px]"></div>
                    </div>

                    <div>
                        <span class="pl-2 pb-4 text-sm">
                            <span class="font-bold">{{ name(928317, 1) }}</span> edited the <span class="font-bold">Explanation</span> in <span class="font-bold">Jan 2024</span>
                        </span>

                        <div class="border-solid m-2 p-2 border-[1px] rounded-md border-gray-200">
                            <span class="flex">
                                <span class="flex-1">
                                    A Plant-Based Diet is Healthier Than One With Animal Products
                                </span>

                                <span>Go To</span>
                            </span>

                            <div class="h-[1px] bg-gray-200 mt-3 mb-3"></div>

                            <div class="w-full flex">
                                <div class="m-4">
                                    This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. 
                                </div>

                                <div class="m-4">
                                    This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </Teleport>

    <Teleport to="#right-aside">
        
    </Teleport>
</template>

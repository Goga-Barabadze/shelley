<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
import { vElementVisibility } from '@vueuse/components'

const headlineRef = ref(null)
const isHeadlineVisible = useElementVisibility(headlineRef)

const mainClaim = {
  claim: "A Plant-Based Diet is Healthier Than One With Animal Products",
  definitions: [
      { word: "Roughly", text: "unevenly; harshly; rudely; severely; austerely." },
      { word: "Oblate Spheroid", text: "a sphere squashed from the top so the circumference around the poles is less than the circumference around the equator." },
  ],
}

useSeoMeta({
  title: mainClaim.claim,
})

const claims = ref([
  {
    claim: "A Plant-Based Diet Has No Dietary Cholesterol",
    definitions: [
      { word: "Roughly", text: "unevenly; harshly; rudely; severely; austerely." },
      { word: "Oblate Spheroid", text: "a sphere squashed from the top so the circumference around the poles is less than the circumference around the equator." },
    ],
    explanation: "I used the word \"roughly\" because we could play the \"I have a more precise definition\"-game infinetly and would at some point be listing the exact atoms of the earth. I think the proposed claim should suffice for most circumstances.",
    sources: [
      { text: "Earth is not a perfect sphere. Its shape is an oblate spheroid. This just means that it flattens at the poles and widens out at the equator.” Earth Row (https://earthhow.com/shape-of-the-earth)" }
    ],
    comments: [
      { datetime: "Yesterday", text: "We need to find better sources for this." },
      { datetime: "Today", text: "I will try to find one!" },
    ],
    isCurrentlyVisible: false,
    hasSelectedClaimApplies: false,
    reasonForNotApplying: null,
  },
  {
    claim: "A Plant-Based Diet Is High In Fiber",
    definitions: [
      { word: "Roughly", text: "unevenly; harshly; rudely; severely; austerely." },
      { word: "Oblate Spheroid", text: "a sphere squashed from the top so the circumference around the poles is less than the circumference around the equator." },
    ],
    explanation: "I used the word \"roughly\" because we could play the \"I have a more precise definition\"-game infinetly and would at some point be listing the exact atoms of the earth. I think the proposed claim should suffice for most circumstances.",
    sources: [
      { text: "Earth is not a perfect sphere. Its shape is an oblate spheroid. This just means that it flattens at the poles and widens out at the equator.” Earth Row (https://earthhow.com/shape-of-the-earth)" }
    ],
    comments: [
      { datetime: "Yesterday", text: "We need to find better sources for this." }
    ],
    isCurrentlyVisible: false,
    hasSelectedClaimApplies: false,
    reasonForNotApplying: null,
  },
  {
    claim: "A Plant-Based Diet Is Low In Saturated Fats",
    definitions: [
      { word: "Roughly", text: "unevenly; harshly; rudely; severely; austerely." },
      { word: "Oblate Spheroid", text: "a sphere squashed from the top so the circumference around the poles is less than the circumference around the equator." },
    ],
    explanation: "I used the word \"roughly\" because we could play the \"I have a more precise definition\"-game infinetly and would at some point be listing the exact atoms of the earth. I think the proposed claim should suffice for most circumstances.",
    sources: [
      { text: "Earth is not a perfect sphere. Its shape is an oblate spheroid. This just means that it flattens at the poles and widens out at the equator.” Earth Row (https://earthhow.com/shape-of-the-earth)" }
    ],
    comments: [
      { datetime: "Yesterday", text: "We need to find better sources for this." }
    ],
    isCurrentlyVisible: false,
    hasSelectedClaimApplies: false,
    reasonForNotApplying: null,
  },
  {
    claim: "Yet another title",
    definitions: [
      { word: "Roughly", text: "unevenly; harshly; rudely; severely; austerely." },
      { word: "Oblate Spheroid", text: "a sphere squashed from the top so the circumference around the poles is less than the circumference around the equator." },
    ],
    explanation: "I used the word \"roughly\" because we could play the \"I have a more precise definition\"-game infinetly and would at some point be listing the exact atoms of the earth. I think the proposed claim should suffice for most circumstances.",
    sources: [
      { text: "Earth is not a perfect sphere. Its shape is an oblate spheroid. This just means that it flattens at the poles and widens out at the equator.” Earth Row (https://earthhow.com/shape-of-the-earth)" }
    ],
    comments: [
      { datetime: "Yesterday", text: "We need to find better sources for this." }
    ],
    isCurrentlyVisible: false,
    hasSelectedClaimApplies: false,
    reasonForNotApplying: null,
  },
  {
    claim: "Yet another title",
    definitions: [
      { word: "Roughly", text: "unevenly; harshly; rudely; severely; austerely." },
      { word: "Oblate Spheroid", text: "a sphere squashed from the top so the circumference around the poles is less than the circumference around the equator." },
    ],
    explanation: "I used the word \"roughly\" because we could play the \"I have a more precise definition\"-game infinetly and would at some point be listing the exact atoms of the earth. I think the proposed claim should suffice for most circumstances.",
    sources: [
      { text: "Earth is not a perfect sphere. Its shape is an oblate spheroid. This just means that it flattens at the poles and widens out at the equator.” Earth Row (https://earthhow.com/shape-of-the-earth)" }
    ],
    comments: [
      { datetime: "Yesterday", text: "We need to find better sources for this." }
    ],
    isCurrentlyVisible: false,
    hasSelectedClaimApplies: false,
    reasonForNotApplying: null,
  },
  {
    claim: "Yet another title",
    definitions: [
      { word: "Roughly", text: "unevenly; harshly; rudely; severely; austerely." },
      { word: "Oblate Spheroid", text: "a sphere squashed from the top so the circumference around the poles is less than the circumference around the equator." },
    ],
    explanation: "I used the word \"roughly\" because we could play the \"I have a more precise definition\"-game infinetly and would at some point be listing the exact atoms of the earth. I think the proposed claim should suffice for most circumstances.",
    sources: [
      { text: "Earth is not a perfect sphere. Its shape is an oblate spheroid. This just means that it flattens at the poles and widens out at the equator.” Earth Row (https://earthhow.com/shape-of-the-earth)" }
    ],
    comments: [
      { datetime: "Yesterday", text: "We need to find better sources for this." }
    ],
    isCurrentlyVisible: false,
    hasSelectedClaimApplies: false,
    reasonForNotApplying: null,
  },
  {
    claim: "Yet another title",
    definitions: [
      { word: "Roughly", text: "unevenly; harshly; rudely; severely; austerely." },
      { word: "Oblate Spheroid", text: "a sphere squashed from the top so the circumference around the poles is less than the circumference around the equator." },
    ],
    explanation: "I used the word \"roughly\" because we could play the \"I have a more precise definition\"-game infinetly and would at some point be listing the exact atoms of the earth. I think the proposed claim should suffice for most circumstances.",
    sources: [
      { text: "Earth is not a perfect sphere. Its shape is an oblate spheroid. This just means that it flattens at the poles and widens out at the equator.” Earth Row (https://earthhow.com/shape-of-the-earth)" }
    ],
    comments: [
      { datetime: "Yesterday", text: "We need to find better sources for this." }
    ],
    isCurrentlyVisible: false,
    hasSelectedClaimApplies: false,
    reasonForNotApplying: null,
  },
  {
    claim: "Yet another title",
    definitions: [
      { word: "Roughly", text: "unevenly; harshly; rudely; severely; austerely." },
      { word: "Oblate Spheroid", text: "a sphere squashed from the top so the circumference around the poles is less than the circumference around the equator." },
    ],
    explanation: "I used the word \"roughly\" because we could play the \"I have a more precise definition\"-game infinetly and would at some point be listing the exact atoms of the earth. I think the proposed claim should suffice for most circumstances.",
    sources: [
      { text: "Earth is not a perfect sphere. Its shape is an oblate spheroid. This just means that it flattens at the poles and widens out at the equator.” Earth Row (https://earthhow.com/shape-of-the-earth)" }
    ],
    comments: [
      { datetime: "Yesterday", text: "We need to find better sources for this." }
    ],
    isCurrentlyVisible: false,
    hasSelectedClaimApplies: false,
    reasonForNotApplying: null,
  },
  {
    claim: "Yet another title",
    definitions: [
      { word: "Roughly", text: "unevenly; harshly; rudely; severely; austerely." },
      { word: "Oblate Spheroid", text: "a sphere squashed from the top so the circumference around the poles is less than the circumference around the equator." },
    ],
    explanation: "I used the word \"roughly\" because we could play the \"I have a more precise definition\"-game infinetly and would at some point be listing the exact atoms of the earth. I think the proposed claim should suffice for most circumstances.",
    sources: [
      { text: "Earth is not a perfect sphere. Its shape is an oblate spheroid. This just means that it flattens at the poles and widens out at the equator.” Earth Row (https://earthhow.com/shape-of-the-earth)" }
    ],
    comments: [
      { datetime: "Yesterday", text: "We need to find better sources for this." }
    ],
    isCurrentlyVisible: false,
    hasSelectedClaimApplies: false,
    reasonForNotApplying: null,
  },
  {
    claim: "Yet another title",
    definitions: [
      { word: "Roughly", text: "unevenly; harshly; rudely; severely; austerely." },
      { word: "Oblate Spheroid", text: "a sphere squashed from the top so the circumference around the poles is less than the circumference around the equator." },
    ],
    explanation: "I used the word \"roughly\" because we could play the \"I have a more precise definition\"-game infinetly and would at some point be listing the exact atoms of the earth. I think the proposed claim should suffice for most circumstances.",
    sources: [
      { text: "Earth is not a perfect sphere. Its shape is an oblate spheroid. This just means that it flattens at the poles and widens out at the equator.” Earth Row (https://earthhow.com/shape-of-the-earth)" }
    ],
    comments: [
      { datetime: "Yesterday", text: "We need to find better sources for this." }
    ],
    isCurrentlyVisible: false,
    hasSelectedClaimApplies: false,
    reasonForNotApplying: null,
  },
  {
    claim: "Yet another title",
    definitions: [
      { word: "Roughly", text: "unevenly; harshly; rudely; severely; austerely." },
      { word: "Oblate Spheroid", text: "a sphere squashed from the top so the circumference around the poles is less than the circumference around the equator." },
    ],
    explanation: "I used the word \"roughly\" because we could play the \"I have a more precise definition\"-game infinetly and would at some point be listing the exact atoms of the earth. I think the proposed claim should suffice for most circumstances.",
    sources: [
      { text: "Earth is not a perfect sphere. Its shape is an oblate spheroid. This just means that it flattens at the poles and widens out at the equator.” Earth Row (https://earthhow.com/shape-of-the-earth)" }
    ],
    comments: [
      { datetime: "Yesterday", text: "We need to find better sources for this." }
    ],
    isCurrentlyVisible: false,
    hasSelectedClaimApplies: false,
    reasonForNotApplying: null,
  },
  {
    claim: "Yet another title",
    definitions: [
      { word: "Roughly", text: "unevenly; harshly; rudely; severely; austerely." },
      { word: "Oblate Spheroid", text: "a sphere squashed from the top so the circumference around the poles is less than the circumference around the equator." },
    ],
    explanation: "I used the word \"roughly\" because we could play the \"I have a more precise definition\"-game infinetly and would at some point be listing the exact atoms of the earth. I think the proposed claim should suffice for most circumstances.",
    sources: [
      { text: "Earth is not a perfect sphere. Its shape is an oblate spheroid. This just means that it flattens at the poles and widens out at the equator.” Earth Row (https://earthhow.com/shape-of-the-earth)" }
    ],
    comments: [
      { datetime: "Yesterday", text: "We need to find better sources for this." }
    ],
    isCurrentlyVisible: false,
    hasSelectedClaimApplies: false,
    reasonForNotApplying: null,
  },
])

function onClickClaimApplies(claim) {
  claim.hasSelectedClaimApplies = !claim.hasSelectedClaimApplies
  claim.reasonForNotApplying = null
}

function onClickClaimDoesNotApply(claim) {
  // TODO Ask for reason why it does not apply

  claim.reasonForNotApplying = !claim.reasonForNotApplying ? "reason" : null
  claim.hasSelectedClaimApplies = false
}

function scrollToClaim(claim) {
  const headline = claimHeadlineRefs.value.find(it => it)
}

function onHeadlineVisibilityChange(isCurrentlyVisible: boolean, claim) {
  claim.isCurrentlyVisible = isCurrentlyVisible
}
</script>

<template>
    <Teleport to="#header">
      <div class="flex">
      <div class="w-64 flex-none"></div>

        <h2
            v-if="!isHeadlineVisible"
            class="flex-1 text-center items-center justify-center"
        >
            {{ mainClaim.claim }}
        </h2>

        <div class="w-64 flex-none"></div>
      </div>
        
    </Teleport>

    <Teleport to="#article">
        <DotViewer style="margin-bottom: 25px;" />

        <div>
            <h1 ref="headlineRef">{{ mainClaim.claim }}</h1>

            <ul class="pl-16">
            <li><code>The Earth</code>: the planet we live on</li>
            <li><code>Round</code>: being such that every part of the surface or the circumference is equidistant from the center</li>
            </ul>

            <br>
            <br>
            <br>

            <div class="flex mb-20">
            <div class="flex-1 flex-col text-center">
                <PieChart :percent="100" />
                <p class="mt-0">Completeness</p>
            </div>
            
            <div class="flex-1 flex-col text-center">
                <PieChart :percent="65" />
                <p class="mt-0">Source Quality</p>
            </div>
            
            <div class="flex-1 flex-col text-center">
                <PieChart :percent="29" />
                <p class="mt-0">Uncontroversial</p>
            </div>
            </div>

            <div class="flex pl-8 pr-8">
            <p class=" flex-1 text-xl m-[-7px]">
                {{ claims.length }} Claims
            </p>

            <select class="flex-initial">
                <option value="random" selected>Randomized (Default)</option>
                <option value="newest-to-oldest">Newest to Oldest</option>
                <option value="oldest-to-newest">Oldest to Newest</option>
                <option value="most-controversial-to-least">Most Controversial to Least Controversial</option>
                <option value="least-controversial-to-most">Least Controversial to Most Controversial</option>
            </select>
            </div>

            <br>
            <br>

            <section
              v-for="claim in claims"
              class="m-7 border-solid border-[1px] rounded-lg p-5 border-gray-300"
              ref="claimHeadlineRefs"
              v-element-visibility="isCurrentlyVisible => onHeadlineVisibilityChange(isCurrentlyVisible, claim)"
            >
              <div class="flex">
                  <h2 class="flex-1">
                  {{ claim.claim }}
                  </h2>
              </div>
            

              <ul>
                  <li v-for="definition in claim.definitions">
                  <code>{{ definition.word }}</code>: {{ definition.text }}
                  </li>
              </ul>

              <p class="pt-5">
                  {{ claim.explanation }}
              </p>
              
              <div
                  v-for="(source, sourceIndex) in claim.sources"
                  class="pb-5 pt-5 italic hover:underline cursor-pointer text-sm"
              >
                  <span v-if="claim.sources.length != 1">
                  [{{ sourceIndex + 1 }}.]
                  </span>
                  {{ source.text }}
              </div>

              <br>

              <div class="h-[1px] w-[100%] bg-gray-300" />

              <br>

              <h3>Comments</h3>
              <p class="text-gray-400 text-xs">
                  Please keep in mind that comments are temporary and will be deleted two week after posting. Comments are only meant to coordinate things for the community, not to add further information to the claim.
              </p>
            
              <div class="p-8 pt-4">
                  <div
                  v-for="(comment, index) in claim.comments"
                  class="border-solid border-t-0 border-l-0 border-r-0 border-b-[0.5px] p-2 border-gray-300 text-sm"
                  :class="{ 'border-b-0': index === claim.comments.length - 1 }"
                  >
                      {{ comment.text }}
                      
                      <span class="bg-gray-100 p-[4px] rounded-md text-sm">
                      {{  comment.datetime }}
                      </span>
                  </div>

                  <br>

                  <span class="pl-2 hover:underline cursor-pointer text-gray-500 text-sm">
                  Add Comment
                  </span>
              </div>

              <div class="h-[1px] w-[100%] bg-gray-300"></div>

              <br>
              
              <p class="text-center">
                  <span
                  class="hover:underline cursor-pointer"
                  :class="{ 'font-bold': claim.hasSelectedClaimApplies }"
                  @click="onClickClaimApplies(claim)"
                  >
                  Claim Applies
                  </span>
                  
                  |
                  
                  <span
                  class="hover:underline cursor-pointer"
                  :class="{ 'font-bold': !!claim.reasonForNotApplying }"
                  @click="onClickClaimDoesNotApply(claim)"
                  >
                  Claim Does Not Apply
                  </span>
              </p>
            </section>

            <div class="m-7 border-solid border-[1px] rounded-lg p-5 border-gray-300 text-center">
              <span class="hover:underline cursor-pointer">Add New Claim</span>
              <span class="italic">     or    </span>
              <span class="hover:underline cursor-pointer">Link Existing Claim</span>
            </div>

            <div class="p-8">
              <a href="">Removed claims</a> | <a href="">History</a> | <a href="">Stats</a>
            </div>
        </div>
    </Teleport>

    <Teleport to="#right-aside">
        <div class="table-of-content">
            <div>{{ mainClaim.claim }}</div>

            <br>

            <div
              v-for="claim in claims"
              :class="{ 'visible-toc-item': claim.isCurrentlyVisible }"
            >
              <span
                  @click="scrollToClaim(claim)"
              >
                  {{ claim.claim }}
              </span>
            </div>
        </div>
    </Teleport>
</template>

<style scoped lang="scss">
h2 {
  cursor: pointer;
}

h2:hover {
  text-decoration-line: underline;
}

h1 {
  font-size: 45px;
  margin-bottom: -15px;
  padding: 24px;
}
</style>
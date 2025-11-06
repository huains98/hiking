<script lang="ts" setup>
import {
    Mountain,
    MapPin,
    Backpack
} from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'


const guidePages = ref([
    {
        icon: Mountain,
        title: '记录每一次探险',
        description: '用脚步丈量山川，用镜头定格美景',
        bgGradient: 'from-emerald-500 to-teal-600'
    },
    {
        icon: MapPin,
        title: '分享徒步攻略',
        description: '让你的经验成为他人的指南针',
        bgGradient: 'from-blue-500 to-cyan-600'
    },
    {
        icon: Backpack,
        title: '装备推荐',
        description: '找到最适合你的户外装备',
        bgGradient: 'from-orange-500 to-amber-600'
    }
])

const guideStep = ref(0)
const currentGuide = computed(() => guidePages.value[guideStep.value])

const router = useRouter()

</script>

<template>
    <div class="w-full max-w-md mx-auto min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
        <div class="flex-1 flex flex-col items-center justify-center px-6 relative overflow-hidden">
          <!-- {/* 背景装饰 */} -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-20 left-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
          </div>

          <!-- {/* 图标 */} -->
          <div :class="`relative mb-8 bg-gradient-to-br ${currentGuide!.bgGradient} p-10 rounded-full shadow-2xl animate-pulse`">
            <Icon :size="64" :strokeWidth="1.5" />
          </div>

          <!-- {/* 标题和描述 */} -->
          <h1 class="text-3xl font-bold mb-3 text-center">{{ currentGuide!.title }}</h1>
          <p class="text-lg text-slate-300 text-center mb-12 max-w-xs">{{ currentGuide!.description }}</p>

          <!-- {/* 步骤指示器 */} -->
          <div class="flex gap-2 mb-12">
            <div
                v-for="(_, index) in guidePages"
                :key="index"
                :class="`h-1.5 rounded-full transition-all duration-300 ${
                  index === guideStep 
                    ? 'w-10 bg-white' 
                    : 'w-1.5 bg-slate-600'
                }`"
            ></div>
          </div>
        </div>

        <!-- {/* 底部按钮 */} -->
        <div class="p-5 space-y-2">
            <template v-if="guideStep < guidePages.length - 1">
                <button
                    @click="() => guideStep += 1"
                    class="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3.5 rounded-xl font-semibold shadow-lg active:scale-95 transition-all"
                >
                    下一步
                </button>
                <button
                    @click="() => router.replace('/')"
                    class="w-full bg-transparent text-slate-400 py-3.5 rounded-xl font-medium active:bg-slate-800 transition-all"
                >
                    跳过
                </button>
            </template>
            <template v-else>
                <button
                    @click="() => router.replace('/')"
                    class="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3.5 rounded-xl font-semibold shadow-lg active:scale-95 transition-all"
                    >
                    开始探险
                </button>
            </template>
        </div>
    </div>
</template>

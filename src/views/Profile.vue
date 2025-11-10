<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { Share2, ChevronRight } from 'lucide-vue-next'

const userStats = reactive({
    routes: 23,
    distance: 856,
    days: 67,
    altitude: 4800
})

const myRoutes = ref([
    { id: 1, title: '武功山穿越', date: '2024-10-15', image: '⛰️', status: '已完成' },
    { id: 2, title: '虎跳峡徒步', date: '2024-09-20', image: '🌿', status: '已完成' },
    { id: 3, title: '梅里雪山大环线', date: '2024-11-20', image: '🏔️', status: '计划中' }
])
const achievements = ref([
    { id: 1, name: '初出茅庐', icon: '🥉', desc: '完成首次徒步', unlocked: true },
    { id: 2, name: '百里征程', icon: '🥈', desc: '累计徒步100km', unlocked: true },
    { id: 3, name: '登峰造极', icon: '🏆', desc: '登顶海拔4000m+', unlocked: true },
    { id: 4, name: '徒步达人', icon: '⭐', desc: '完成20条路线', unlocked: true },
    { id: 5, name: '千里之行', icon: '💎', desc: '累计徒步1000km', unlocked: false },
    { id: 6, name: '云端漫步', icon: '☁️', desc: '登顶海拔5000m+', unlocked: false }
])

const menuItems = ref([
    { icon: '📝', title: '我的攻略', count: 12, color: 'from-blue-500 to-cyan-500' },
    { icon: '👥', title: '我的组队', count: 5, color: 'from-purple-500 to-pink-500' },
    { icon: '❤️', title: '收藏路线', count: 34, color: 'from-red-500 to-rose-500' },
    { icon: '🎒', title: '装备清单', count: 0, color: 'from-orange-500 to-amber-500' },
    { icon: '📷', title: '我的足迹', count: 156, color: 'from-emerald-500 to-teal-500' },
    { icon: '⚙️', title: '设置', count: 0, color: 'from-slate-500 to-slate-600' }
])
</script>

<template>
    <div class="w-full max-w-md mx-auto min-h-screen bg-slate-50">
        <!-- {/* 顶部个人信息 */} -->
        <div
            class="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 px-5 pt-10 pb-20 relative overflow-hidden">
            <!-- {/* 背景装饰 */} -->
            <div class="absolute inset-0 opacity-10">
                <div class="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div class="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
            </div>

            <!-- {/* 设置按钮 */} -->
            <button
                class="absolute top-10 right-5 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full active:scale-95 transition-all">
                <Share2 :size="20" />
            </button>

            <!-- {/* 用户信息 */} -->
            <div class="relative z-10 flex flex-col items-center">
                <div
                    class="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-4xl mb-3 border-4 border-white shadow-xl">
                    👨‍🦰
                </div>
                <h2 class="text-white text-xl font-bold mb-1">山野行者</h2>
                <p class="text-emerald-100 text-sm mb-4">探索世界的每一个角落</p>

                <!-- {/* 等级徽章 */} -->
                <div class="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
                    <span class="text-amber-300 text-lg">⭐</span>
                    <span class="text-white text-sm font-medium">Lv.8 资深驴友</span>
                </div>
            </div>
        </div>

        <!-- {/* 数据统计卡片 */} -->
        <div class="px-5 -mt-12 relative z-10 mb-5">
            <div class="bg-white rounded-2xl shadow-xl p-5">
                <div class="grid grid-cols-4 gap-4">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-emerald-600 mb-1">{{ userStats.routes }}</div>
                        <div class="text-xs text-slate-500">完成路线</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-blue-600 mb-1">{{ userStats.distance }}</div>
                        <div class="text-xs text-slate-500">总里程(km)</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-purple-600 mb-1">{{ userStats.days }}</div>
                        <div class="text-xs text-slate-500">徒步天数</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-orange-600 mb-1">{{ userStats.altitude }}</div>
                        <div class="text-xs text-slate-500">最高海拔(m)</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- {/* 成就徽章 */} -->
        <div class="px-5 mb-5">
            <div class="flex items-center justify-between mb-3">
                <h3 class="font-bold text-slate-800 flex items-center gap-2">
                    <span class="text-amber-500">🏆</span>
                    我的成就
                </h3>
                <button class="text-emerald-600 text-sm font-medium flex items-center active:scale-95 transition-all">
                    查看全部
                    <ChevronRight :size="14" />
                </button>
            </div>
            <div class="grid grid-cols-3 gap-3">
                <div v-for="achievement in achievements" :key="achievement.id"
                    :class="`bg-white rounded-xl p-3 text-center shadow-sm ${achievement.unlocked ? '' : 'opacity-40'}`">
                    <div class="text-3xl mb-1">{{ achievement.icon }}</div>
                    <div class="text-xs font-bold text-slate-800 mb-0.5">{{ achievement.name }}</div>
                    <div class="text-xs text-slate-500">{{ achievement.desc }}</div>

                    <div v-if="achievement.unlocked" class="mt-1 text-xs text-emerald-600 font-medium">✓ 已解锁</div>

                </div>
            </div>
        </div>

        <!-- {/* 我的路线 */} -->
        <div class="px-5 mb-5">
            <div class="flex items-center justify-between mb-3">
                <h3 class="font-bold text-slate-800">我的路线</h3>
                <button class="text-emerald-600 text-sm font-medium flex items-center active:scale-95 transition-all">
                    查看全部
                    <ChevronRight :size="14" />
                </button>
            </div>
            <div class="space-y-3">
                <div v-for="route in myRoutes" :key="route.id"
                    class="bg-white rounded-xl shadow-sm p-3 flex items-center gap-3 active:scale-95 transition-all">
                    <div
                        class="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                        {{ route.image }}
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="font-bold text-slate-800 text-sm mb-1">{{ route.title }}</h4>
                        <div class="flex items-center gap-2 text-xs text-slate-500">
                            <span>📅 {{ route.date }}</span>
                        </div>
                    </div>
                    <div :class="`text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ${route.status === '已完成'
                        ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`">
                        {{ route.status }}
                    </div>
                </div>

            </div>
        </div>

        <!-- {/* 功能菜单 */} -->
        <div class="px-5 pb-80px">
            <div class="grid grid-cols-2 gap-3">

                <div v-for="(item, index) in menuItems" :key="index"
                    class="bg-white rounded-xl shadow-sm p-4 active:scale-95 transition-all cursor-pointer">
                    <div class="flex items-center justify-between mb-2">
                        <div class="`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center
                            justify-center text-xl`">
                            {{ item.icon }}
                        </div>

                        <span v-if="item.count > 0"
                            class="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                            {{ item.count }}
                        </span>

                    </div>
                    <div class="font-medium text-slate-800 text-sm">{{ item.title }}</div>
                </div>

            </div>
        </div>
    </div>
</template>
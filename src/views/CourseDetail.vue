<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { ChevronRight, Share2, Heart, Mountain, MapPin, Compass, Backpack, MessageCircle } from 'lucide-vue-next'

const selectedRoute = reactive<any>({})
const detailTab = ref('intro')
const setDetailTab = (tab: any) => {
    detailTab.value = tab
}
</script>

<template>
    <div class="w-full max-w-md mx-auto min-h-screen bg-slate-50">
        <!-- {/* 顶部大图 */} -->
        <div
            class="relative h-64 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 flex items-center justify-center">
            <span class="text-9xl">{{ selectedRoute.image }}</span>

            <!-- {/* 返回按钮 */} -->
            <button @click="() => { }"
                class="absolute top-10 left-5 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full active:scale-95 transition-all">
                <ChevronRight :size="20" class="rotate-180" />
            </button>

            <!-- {/* 分享和收藏 */} -->
            <div class="absolute top-10 right-5 flex gap-2">
                <button class="bg-black/30 backdrop-blur-sm text-white p-2 rounded-full active:scale-95 transition-all">
                    <Share2 :size="20" />
                </button>
                <button class="bg-black/30 backdrop-blur-sm text-white p-2 rounded-full active:scale-95 transition-all">
                    <Heart :size="20" />
                </button>
            </div>

            <!-- {/* 底部渐变遮罩 */} -->
            <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <!-- {/* 标题区 */} -->
        <div class="px-5 -mt-8 relative z-10">
            <div class="bg-white rounded-2xl shadow-xl p-5">
                <div class="flex items-start justify-between mb-3">
                    <div class="flex-1">
                        <h1 class="text-2xl font-bold text-slate-800 mb-2">{{ selectedRoute.title }}</h1>
                        <div class="flex items-center gap-2 text-sm text-slate-600">
                            <MapPin :size="14" />
                            <span>{{ selectedRoute.location }}</span>
                        </div>
                    </div>
                    <div :class="`text-xs px-3 py-1.5 rounded-full font-medium flex-shrink-0 ${selectedRoute.difficultyLevel === 'easy'
                            ? 'bg-green-100 text-green-700'
                            : selectedRoute.difficultyLevel === 'medium'
                                ? 'bg-orange-100 text-orange-700'
                                : 'bg-red-100 text-red-700'
                        }`">
                        {{ selectedRoute.difficulty }}
                    </div>
                </div>

                <!-- {/* 关键数据 */} -->
                <div class="grid grid-cols-4 gap-3 pt-4 border-t border-slate-100">
                    <div class="text-center">
                        <div class="text-xs text-slate-500 mb-1">时长</div>
                        <div class="text-sm font-bold text-slate-800">{{ selectedRoute.days }}</div>
                    </div>
                    <div class="text-center">
                        <div class="text-xs text-slate-500 mb-1">距离</div>
                        <div class="text-sm font-bold text-slate-800">{{ selectedRoute.distance }}</div>
                    </div>
                    <div class="text-center">
                        <div class="text-xs text-slate-500 mb-1">海拔</div>
                        <div class="text-sm font-bold text-slate-800">{{ selectedRoute.altitude }}</div>
                    </div>
                    <div class="text-center">
                        <div class="text-xs text-slate-500 mb-1">季节</div>
                        <div class="text-sm font-bold text-slate-800">{{ selectedRoute.season }}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- {/* Tab导航 */} -->
        <div class="px-5 mt-4">
            <div class="bg-white rounded-xl shadow-sm p-1 flex gap-1">

                <button v-for="tab in [
                    { key: 'intro', label: '路线介绍' },
                    { key: 'guide', label: '行程攻略' },
                    { key: 'equipment', label: '装备清单' }
                ]" :key="tab.key" @click="() => setDetailTab(tab.key)" :class="`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${detailTab === tab.key
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                    : 'text-slate-600'
                }`">
                    {{ tab.label }}
                </button>

            </div>
        </div>

        <!-- {/* 内容区 */} -->
        <div class="px-5 mt-4 pb-24">
            <!-- {/* 路线介绍 */} -->

            <div v-if="detailTab === 'intro'" class="space-y-4">
                <div class="bg-white rounded-2xl shadow-sm p-5">
                    <h3 class="font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <Mountain :size="18" class="text-emerald-600" />
                        路线简介
                    </h3>
                    <p class="text-slate-600 text-sm leading-relaxed">{{ selectedRoute.description }}</p>
                </div>

                <div class="bg-white rounded-2xl shadow-sm p-5">
                    <h3 class="font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <Compass :size="18" class="text-emerald-600" />
                        路线亮点
                    </h3>
                    <div class="flex flex-wrap gap-2">

                        <span v-for="(highlight, idx) in selectedRoute.highlights" :key="idx"
                            class="bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-emerald-200">
                            ✨ {{ highlight }}
                        </span>

                    </div>
                </div>

                <div
                    class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-sm p-5 border border-amber-200">
                    <h3 class="font-bold text-amber-800 mb-3 flex items-center gap-2">
                        💡 温馨提示
                    </h3>
                    <ul class="space-y-2">

                        <li v-for="(tip, idx) in selectedRoute.tips" :key="idx"
                            class="text-amber-700 text-sm flex items-start gap-2">
                            <span class="text-amber-500 mt-0.5">•</span>
                            <span>{{ tip }}</span>
                        </li>

                    </ul>
                </div>

                <!-- {/* 作者信息 */} -->
                <div class="bg-white rounded-2xl shadow-sm p-5">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-2xl">
                                {{ selectedRoute.avatar }}
                            </div>
                            <div>
                                <div class="font-bold text-slate-800">{{ selectedRoute.author }}</div>
                                <div class="text-xs text-slate-500">路线贡献者</div>
                            </div>
                        </div>
                        <button
                            class="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md active:scale-95 transition-all">
                            + 关注
                        </button>
                    </div>
                </div>
            </div>


            <!-- {/* 行程攻略 */} -->

            <div v-if="detailTab === 'guide'" class="space-y-4">

                <div v-for="(day, idx) in selectedRoute.itinerary" :key="idx"
                    class="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <!-- {/* 日期头部 */} -->
                    <div class="bg-gradient-to-r from-emerald-500 to-teal-600 p-4">
                        <div class="flex items-center justify-between text-white">
                            <div class="flex items-center gap-3">
                                <div
                                    class="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                                    D{{ day.day }}
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg">{{ day.title }}</h4>
                                    <p class="text-sm text-emerald-100">{{ day.desc }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 mt-3 text-sm text-white">
                            <span class="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
                                <MapPin :size="14" />
                                {{ day.distance }}
                            </span>
                            <span class="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
                                ⏱️ {{ day.time }}
                            </span>
                            <span class="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
                                📈 {{ day.ascent }}
                            </span>
                        </div>
                    </div>

                    <!-- {/* 路线图示 */} -->
                    <div class="px-4 py-3 bg-slate-50 flex items-center justify-around">

                        <div v-for="(photo, photoIdx) in day.photos" :key="photoIdx" class="text-3xl">{{ photo }}</div>

                    </div>

                    <!-- {/* 途经点 */} -->
                    <div class="p-4">
                        <h5 class="font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <Compass :size="16" class="text-emerald-600" />
                            途经点位
                        </h5>
                        <div class="space-y-3 relative">
                            <!-- {/* 连接线 */} -->
                            <div
                                class="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-400 to-teal-500">
                            </div>


                            <div v-for="(point, pointIdx) in day.waypoints" :key="pointIdx" class="flex gap-3 relative">
                                <div class="relative z-10 flex-shrink-0">
                                    <div :class="`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${pointIdx === 0
                                            ? 'bg-green-500 text-white'
                                            : pointIdx === day.waypoints.length - 1
                                                ? 'bg-red-500 text-white'
                                                : 'bg-blue-500 text-white'
                                        }`">
                                        {{ pointIdx + 1 }}
                                    </div>
                                </div>
                                <div class="flex-1 bg-slate-50 rounded-xl p-3 mb-2">
                                    <div class="flex items-start justify-between mb-1">
                                        <h6 class="font-bold text-slate-800 text-sm">{{ point.name }}</h6>
                                        <span class="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                                            {{ point.altitude }}
                                        </span>
                                    </div>
                                    <div class="flex items-center gap-2 mb-2 text-xs text-slate-500">
                                        <span class="flex items-center gap-1">
                                            ⏰ {{ point.time }}
                                        </span>
                                    </div>
                                    <p class="text-xs text-slate-600">{{ point.desc }}</p>
                                </div>
                            </div>
                            ))}
                        </div>

                        <!-- {/* 注意事项 */} -->

                        <div v-if="day.notes && day.notes.length > 0"
                            class="mt-4 bg-amber-50 rounded-xl p-3 border border-amber-200">
                            <h6 class="font-bold text-amber-800 mb-2 flex items-center gap-1 text-sm">
                                ⚠️ 注意事项
                            </h6>
                            <ul class="space-y-1">

                                <li v-for="(note, noteIdx) in day.notes" :key="noteIdx"
                                    class="text-xs text-amber-700 flex items-start gap-2">
                                    <span class="text-amber-500 mt-0.5">•</span>
                                    <span>{{ note }}</span>
                                </li>

                            </ul>
                        </div>
                        )}
                    </div>
                </div>


                <!-- {/* 整体建议 */} -->
                <div class="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-lg p-5 text-white">
                    <h4 class="font-bold text-lg mb-3 flex items-center gap-2">
                        💪 行程建议
                    </h4>
                    <div class="space-y-2 text-sm">
                        <p class="flex items-start gap-2">
                            <span>🎒</span>
                            <span>合理分配体力，不要在前半程消耗过多</span>
                        </p>
                        <p class="flex items-start gap-2">
                            <span>💧</span>
                            <span>每天至少带2L水，山顶补给点较少</span>
                        </p>
                        <p class="flex items-start gap-2">
                            <span>📱</span>
                            <span>提前下载离线地图，山上信号不稳定</span>
                        </p>
                        <p class="flex items-start gap-2">
                            <span>⛺</span>
                            <span>旺季建议提前预订山顶住宿或租赁帐篷</span>
                        </p>
                    </div>
                </div>
            </div>


            <!-- {/* 装备清单 */} -->

            <div v-if="detailTab === 'equipment'" class="space-y-3">

                <div v-for="(category, idx) in selectedRoute.equipmentList" :key="idx"
                    class="bg-white rounded-2xl shadow-sm p-5">
                    <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <Backpack :size="16" class="text-emerald-600" />
                        {{ category.category }}
                    </h4>
                    <div class="grid grid-cols-2 gap-2">

                        <div v-for="(item, itemIdx) in category.items" :key="itemIdx"
                            class="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg">
                            <input type="checkbox" class="w-4 h-4 text-emerald-600 rounded" />
                            <span class="text-sm text-slate-700">{{ item }}</span>
                        </div>

                    </div>
                </div>


                <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-sm p-5 border border-blue-200">
                    <div class="flex items-start gap-3">
                        <div class="bg-blue-500 text-white p-2 rounded-lg">
                            💡
                        </div>
                        <div>
                            <div class="font-bold text-blue-800 mb-1">装备建议</div>
                            <p class="text-sm text-blue-700">根据季节和天气调整装备，建议提前检查所有装备是否完好。新手建议跟随有经验的领队。</p>
                        </div>
                    </div>
                </div>
            </div>
       
        </div>

        <!-- {/* 底部操作栏 */} -->
        <div
            class="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-slate-200 px-5 py-4 flex items-center gap-3">
            <div class="flex items-center gap-3">
                <button class="flex flex-col items-center gap-1 text-slate-600 active:scale-95 transition-all">
                    <Heart :size="22" />
                    <span class="text-xs">{{selectedRoute.likes}}</span>
                </button>
                <button class="flex flex-col items-center gap-1 text-slate-600 active:scale-95 transition-all">
                    <MessageCircle :size="22" />
                    <span class="text-xs">评论</span>
                </button>
            </div>
            <button
                class="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold shadow-lg active:scale-95 transition-all">
                发起组队
            </button>
        </div>
    </div>
</template>
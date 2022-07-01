import Vue from "vue";
import ECharts from "vue-echarts";
import { use } from "echarts/core";

import { CanvasRenderer } from "echarts/renderers";
import { ScatterChart } from "echarts/charts";
import { TitleComponent, LegendComponent } from "echarts/components";

use([CanvasRenderer, ScatterChart, TitleComponent, LegendComponent]);

Vue.component("v-chart", ECharts);

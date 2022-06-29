import Vue from "vue";
import ECharts from "vue-echarts";
import { use } from "echarts/core";

import { CanvasRenderer } from "echarts/renderers";
import { ScatterChart } from "echarts/charts";

use([CanvasRenderer, ScatterChart]);

Vue.component("v-chart", ECharts);

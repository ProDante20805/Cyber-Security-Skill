import Vue from "vue";
import ECharts from "vue-echarts";
import { use } from "echarts/core";

import { CanvasRenderer } from "echarts/renderers";
import { ScatterChart } from "echarts/charts";
import {
  TitleComponent,
  LegendComponent,
  TooltipComponent,
} from "echarts/components";

use([
  CanvasRenderer,
  ScatterChart,
  TitleComponent,
  LegendComponent,
  TooltipComponent,
]);

Vue.component("v-chart", ECharts);

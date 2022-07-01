<template lang="pug">
  v-chart.skill-points-chart(autoresize :option="option")
</template>

<script lang="ts">
import { SkillPointCategory } from "@/models";
import i18n from "@/i18n";

export default {
  name: "SkillPointsChart",
  computed: {
    series(): { id: string; name: string; type: string }[] {
      return Object.keys(SkillPointCategory).map((skillPointCategory) => {
        return {
          id: skillPointCategory,
          name: i18n.t(
            `skillPointCategories.${skillPointCategory}.name`
          ) as string,
          type: "scatter",
        };
      });
    },
    option() {
      return {
        legend: {},
        xAxis: {
          type: "value",
          min: -1,
          max: 1,
          nameLocation: "center",
          axisLine: {
            symbol: "arrow",
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            formatter: function (value: number) {
              switch (value) {
                case 1:
                  return i18n.t("skillPointsChart.xAxisPositiveName");
                case -1:
                  return i18n.t("skillPointsChart.xAxisNegativeName");
              }
            },
          },
        },
        yAxis: {
          type: "value",
          min: -1,
          max: 1,
          nameLocation: "center",
          axisLine: {
            symbol: "arrow",
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            formatter: function (value: number) {
              switch (value) {
                case 1:
                  return i18n.t("skillPointsChart.yAxisPositiveName");
                case -1:
                  return i18n.t("skillPointsChart.yAxisNegativeName");
              }
            },
          },
        },
        series: this.series,
      };
    },
  },
};
</script>

<style scoped>
.skill-points-chart {
  min-height: 400px;
  min-width: 400px;
  aspect-ratio: 1;
}
</style>

<template lang="pug">
  v-chart.skill-points-chart(autoresize :option="option")
</template>

<script lang="ts">
import { SKILL_POINT_MAX_LEVEL, SkillPointCategory, Career } from "@/models";
import { skillPoints } from "@/resources";
import i18n from "@/i18n";

export default {
  name: "SkillPointsChart",
  props: {
    career: {
      type: Career,
      default: null,
    },
  },
  computed: {
    series(): object[] {
      const scatterSeries = Object.keys(SkillPointCategory).map(
        (skillPointCategory) => {
          return {
            id: skillPointCategory,
            name: i18n.t(
              `skillPointCategories.${skillPointCategory}.name`
            ) as string,
            type: "scatter",
            label: { show: true, position: "bottom", formatter: "{b}" },
            clip: false,
            data: skillPoints
              .filter(
                (skillPoint) => skillPoint.category === skillPointCategory
              )
              .map((skillPoint) => {
                return {
                  name: i18n.t(`skillPoints.${skillPoint.id}.name`),
                  value: [
                    skillPoint.researchOrPractical,
                    skillPoint.defenseOrAttack,
                  ],
                };
              }),
          };
        }
      );
      return [...scatterSeries];
    },
    option(): object {
      return {
        legend: {},
        tooltip: {},
        xAxis: {
          type: "value",
          min: -SKILL_POINT_MAX_LEVEL,
          max: SKILL_POINT_MAX_LEVEL,
          axisLine: {
            symbol: "arrow",
          },
          axisLabel: {
            margin: 32,
            formatter: function (value: number) {
              switch (value) {
                case SKILL_POINT_MAX_LEVEL:
                  return i18n.t("skillPointsChart.xAxisPositiveName");
                case -SKILL_POINT_MAX_LEVEL:
                  return i18n.t("skillPointsChart.xAxisNegativeName");
              }
            },
          },
        },
        yAxis: {
          type: "value",
          min: -SKILL_POINT_MAX_LEVEL,
          max: SKILL_POINT_MAX_LEVEL,
          axisLine: {
            symbol: "arrow",
          },
          axisLabel: {
            margin: 32,
            formatter: function (value: number) {
              switch (value) {
                case SKILL_POINT_MAX_LEVEL:
                  return i18n.t("skillPointsChart.yAxisPositiveName");
                case -SKILL_POINT_MAX_LEVEL:
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

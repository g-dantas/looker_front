import ReactECharts from "echarts-for-react";
import PropTypes from "prop-types";
import { CircularProgress, Skeleton, Stack, Typography } from "@mui/material";

import useQuery from "../../../hooks/useQuery";

function RadarChart({ id, style }) {
  // *--- Looker data ---*
  const { isLoaded, data, fields, title } = useQuery({ id });

  if (!isLoaded) {
    return (
      <Stack gap="16px">
        <Skeleton variant="lightText" width="80%" height="24px" />
        <Stack alignItems="center" justifyContent="center" height="100%" style={style}>
          <CircularProgress />
        </Stack>
      </Stack>
    );
  }

  const serieData = {
    name: "Energy Comsuption",
    value: Object.keys(data[0]).map((item) => {
      return data[0][item];
    }),
  };

  const max = serieData.value.reduce((accumulator, value) => Math.max(accumulator, value), 0);

  const indicator = Object.keys(data[0]).map((item, index) => {
    return {
      name: fields.measures[index].label,
      max,
    };
  });
  //*--- end of Looker data ---*

  const serieName = "Energy Comsuption";

  const option = {
    legend: {
      data: [serieData.name],
      orient: "vertical",
      icon: "circle",
      align: "left",
      top: "0%",
      right: 0,
      itemStyle: {
        width: "8px",
        height: "8px",
      },
      textStyle: {
        color: "white",
        fontFamily: "'Source Sans 3'",
        fontSize: 12,
        fontWeight: "400",
      },
    },
    grid: {
      contailLabel: true,
      left: 0,
    },
    radar: {
      axisName: {
        color: "rgba(255, 255, 255, 0.8)",
        fontFamily: "Barlow",
        fontSize: 10,
        fontWeight: "500",
        formatter: function (params) {
          return params.toUpperCase();
        },
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ["#080e20", "#111b2b"], // Cores das áreas entre as linhas
        },
      },
      indicator,
    },
    tooltip: {
      show: true,
    },
    series: [
      {
        name: serieName,
        type: "radar",
        symbol: "none",
        data: [
          {
            value: serieData.value,
            name: serieData.name,
            itemStyle: {
              color: "#EEAC2D",
            },
            tooltip: {
              show: true,
              backgroundColor: "#FFFFFF",
              textStyle: {
                color: "#1C233B",
                fontSize: 15,
                fontFamily: "Barlow",
                lineHeight: "20px",
                fontWeight: "400",
              },
              formatter: function (params) {
                let indicators = option.radar.indicator; // Acesso aos indicadores definidos na configuração do radar
                let result = `<div style="padding: 6px 10px; "><table style="width: 100%; border-collapse: collapse;"><tr><td style="padding-bottom: 14px"><strong>${params.name}</strong></td></tr>`;

                for (let i = 0; i < params.value.length; i++) {
                  result += `<tr><td style="text-align: left; border-bottom: 1px solid #E3E4E8; padding-bottom: 10px; padding-top: 6px;">
                    ${indicators[i].name}
                    </td><td style="text-align: right; border-bottom: 1px solid #E3E4E8; padding-bottom: 10px; padding-top: 6px;">${params.value[i].toLocaleString()}</td></tr>`;
                }

                // Para adicionar o total
                let total = params.value.reduce((a, b) => a + b, 0);
                result += `<tr><td style="text-align: left; padding-top: 6px;"><strong>Total</strong><td style="text-align: right;">${total.toLocaleString()} TWh</td></td></tr></table></div>`;

                return result;
              },
            },
            rich: {
              strong: {
                fontSize: 20,
                fontFamily: "Barlow",
                fontWeight: "600",
                color: "#1C233B",
                lineHeight: "24px",
              },
            },
            emphasis: {
              areaStyle: {
                color: "#EEAC2D",
                opacity: 0.2,
              },
            },
          },
        ],
      },
    ],
  };

  return (
    <Stack gap="16px">
      <Typography variant="h4" color="white">
        {title}
      </Typography>
      <ReactECharts option={option} style={style} />
    </Stack>
  );
}

RadarChart.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
};

export default RadarChart;

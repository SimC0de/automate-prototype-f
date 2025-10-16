import React, { useId, useContext, useMemo } from "react";
import * as Recharts from "recharts";
import { cn } from "./utils";

const THEMES = { light: "", dark: ".dark" };

const ChartContext = React.createContext(null);

export function useChart() {
  const context = useContext(ChartContext);
  if (!context) throw new Error("useChart must be used within a <ChartContainer />");
  return context;
}

export function ChartContainer({ id, className, children, config, ...props }) {
  const uniqueId = useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground flex aspect-video justify-center text-xs",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <Recharts.ResponsiveContainer>{children}</Recharts.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

function ChartStyle({ id, config }) {
  const colorConfig = Object.entries(config).filter(([, conf]) => conf.theme || conf.color);
  if (!colorConfig.length) return null;

  const css = Object.entries(THEMES)
    .map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, item]) => {
    const color = item.theme?.[theme] || item.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}`)
    .join("\n");

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}

export const ChartTooltip = Recharts.Tooltip;

export function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey
}) {
  const { config } = useChart();

  const tooltipLabel = useMemo(() => {
    if (hideLabel || !payload?.length) return null;
    const [item] = payload;
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
    const itemConf = getPayloadConfig(config, item, key);
    const value =
      !labelKey && typeof label === "string"
        ? config[label]?.label || label
        : itemConf?.label;
    if (labelFormatter)
      return <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>;
    if (!value) return null;
    return <div className={cn("font-medium", labelClassName)}>{value}</div>;
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

  if (!active || !payload?.length) return null;
  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div
      className={cn(
        "border-border/50 bg-background grid min-w-[8rem] gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {!nestLabel && tooltipLabel}
      <div className="grid gap-1.5">
        {payload.map((item, i) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConf = getPayloadConfig(config, item, key);
          const indicatorColor = color || item.payload?.fill || item.color;
          return (
            <div
              key={item.dataKey}
              className={cn("flex items-center gap-2", indicator === "dot" ? "items-center" : "")}
            >
              {!hideIndicator && (
                <div
                  className={cn(
                    "rounded-[2px]",
                    indicator === "dot" ? "h-2.5 w-2.5" : indicator === "line" ? "w-1" : ""
                  )}
                  style={{ backgroundColor: indicatorColor }}
                />
              )}
              <div className="flex flex-1 justify-between leading-none">
                <div className="grid gap-1.5">
                  {nestLabel ? tooltipLabel : null}
                  <span className="text-muted-foreground">{itemConf?.label || item.name}</span>
                </div>
                {item.value && (
                  <span className="text-foreground font-mono font-medium">
                    {item.value.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const ChartLegend = Recharts.Legend;

export function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey
}) {
  const { config } = useChart();
  if (!payload?.length) return null;

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConf = getPayloadConfig(config, item, key);
        return (
          <div key={item.value} className="flex items-center gap-1.5">
            {!hideIcon ? (
              <div className="h-2 w-2 rounded-[2px]" style={{ backgroundColor: item.color }} />
            ) : null}
            {itemConf?.label}
          </div>
        );
      })}
    </div>
  );
}

function getPayloadConfig(config, payload, key) {
  const p = payload?.payload || {};
  const k = p[key] || payload[key] || key;
  return config[k] || config[key];
}

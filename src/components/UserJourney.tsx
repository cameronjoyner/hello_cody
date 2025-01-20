"use client"

import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { type ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { day: "Wed", progress: 150, feeling: "Hello World" },
  { day: "Thu", progress: 60, feeling: "Personal project" },
  { day: "Fri", progress: 100, feeling: "Youtube demos" },
  { day: "Sat", progress: 120, feeling: "Reading docs" },
  { day: "Sun", progress: 235, feeling: "Cody contribution" },
  { day: "Sun", progress: 265, feeling: "Finalizing slideshow" },
]

const chartConfig = {
    progress: {
      label: "Progress",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig

export function UserJourney() {
  return (
    <Card>
      <CardHeader />
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 40,
              right: 24,
              bottom: 24,
              left: 24,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--foreground)", fontSize: 12 }}
              dy={10}
            />
            <Line
              dataKey="progress"
              type="monotone"
              stroke="var(--color-progress)"
              strokeWidth={2}
              dot={(props) => {
                const { cx, cy } = props
                return (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={4}
                    fill="var(--color-progress)"
                    stroke="var(--background)"
                    strokeWidth={2}
                  />
                )
              }}
              activeDot={{
                r: 6,
                stroke: "var(--background)",
                strokeWidth: 2,
              }}
            >
              <LabelList dataKey="feeling" position="top" offset={20} className="fill-foreground" fontSize={12} />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

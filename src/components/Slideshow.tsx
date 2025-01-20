'use client'

import React, { useState } from 'react'
import { Map, PencilRulerIcon, ChevronUp, ChevronDown, type LucideIcon, Bot, Palette, BarChart, FlaskConical, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
// import AssistantsSlide5 from './AssistantsSlide5'
import ToolsSlide2 from './ToolsSlide2'
import ExperimentsSlide3 from './ExperimentsSlide3'
import { UserJourney } from './UserJourney'

interface Slide {
  title: string
  description?: string
  category: string
  icon?: LucideIcon
  img?: string
  chart?: React.ReactNode
}

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const ChartComponent = () => (
  <Card>
    <CardHeader>
    </CardHeader>
    <CardContent>
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={{
              fill: "var(--color-desktop)",
            }}
            activeDot={{
              r: 6,
            }}
          />
        </LineChart>
      </ChartContainer>
    </CardContent>
    
  </Card>
)

const slides: Slide[] = [
  { 
    title: "A meta analysis of Cody", 
    description: "My approach to understanding Cody's capabilities",
    category: "Introduction",
    icon: Bot
  },
  { 
    title: "Tools I use most often", 
    category: "Comfort Zone",
    icon: PencilRulerIcon,
    chart: <ToolsSlide2 />
  },
  { 
    title: "Projects I worked on with Cody",
    category: "Familiarization",
    chart: <ExperimentsSlide3 />,
    icon: FlaskConical
  },
  { 
    title: "High level takeaway of Cody", 
    description: "Highest cognitive load, most adjustment, and largest pay off",
    category: "Review",
    icon: Trophy
  },
  {
    title: "Compared to other AI assistants",
    category: "Contrasts",
    description: "Limitations up front, value came with patience",
    icon: BarChart,
  },
  {
    title: "My own user journey",
    category: "Analytics",
    icon: Map,
    chart: <UserJourney />
  },
  {
    title: "Data Visualization",
    category: "Analytics",
    icon: BarChart,
    chart: <ChartComponent />
  }
]

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev))
  }

  const CurrentIcon = slides[currentSlide].icon

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-full max-w-6xl aspect-video bg-white rounded-lg shadow-lg border-2 border-gray-300 flex flex-col items-center justify-center p-8">
        <div className="flex items-center justify-center mb-4">
          {CurrentIcon && <CurrentIcon className="w-8 h-8 mr-4" />}
          <h2 className="text-3xl font-bold">{slides[currentSlide].title}</h2>
        </div>
        {slides[currentSlide].description && (
          <p className="text-lg text-center mb-6">{slides[currentSlide].description}</p>
        )}
        {slides[currentSlide].img && (
          <div className="mt-4">
            <Image 
              src={slides[currentSlide].img || "/placeholder.svg"} 
              alt={slides[currentSlide].title}
              width={400}
              height={200}
              className="rounded-lg"
            />
          </div>
        )}
        {slides[currentSlide].chart && (
          <div className="mt-4 mb-10 w-full max-w-2xl mx-auto">
            {slides[currentSlide].chart}
          </div>
        )}
        <div className="absolute bottom-2 right-4 flex items-center text-sm gap-4">
          <Badge variant="secondary">{slides[currentSlide].category}</Badge>
          <span className="text-gray-500">{`${currentSlide + 1} / ${slides.length}`}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 ml-4">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={goToNextSlide}
          disabled={currentSlide === slides.length - 1}
          aria-label="Next slide"
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}


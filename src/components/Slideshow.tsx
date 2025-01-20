'use client'

import React, { useState } from 'react'
import { Map, PencilRulerIcon, ChevronUp, ChevronDown, type LucideIcon, Bot, FlaskConical, Trophy, CircleUserRound, UserSearch, Shapes, FileJson } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import HighLevelSlide1 from './HighLevelSlide1'
import ToolsSlide2 from './ToolsSlide2'
import ExperimentsSlide3 from './ExperimentsSlide3'
import PersonasSlides7 from './PersonasSlides7'
import QuestionsForUsersSlide8 from './QuestionsForUsersSlide8'
import QuesitonsForBuildersSlide9 from './QuesitonsForBuildersSlide9'
import { UserJourney } from './UserJourney'

interface Slide {
  title: string
  description?: string
  category: string
  icon?: LucideIcon
  img?: string
  chart?: React.ReactNode
}

const slides: Slide[] = [
  { 
    title: "A meta analysis of Cody", 
    description: "My approach to understanding Cody's capabilities",
    category: "Introduction",
    icon: Bot
  },
  { 
    title: "High level takeaway of Cody", 
    category: "Review",
    icon: Trophy,
    chart: <HighLevelSlide1 />
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
    title: "My own user journey",
    category: "Analytics",
    icon: Map,
    chart: <UserJourney />
  },
  {
    title: "Personas of interest",
    category: "Personas",
    icon: CircleUserRound,
    chart: <PersonasSlides7 />
  },
  {
    title: "My questions for users",
    category: "Understanding Users",
    icon: UserSearch,
    chart: <QuestionsForUsersSlide8 />
  },
  {
    title: "My questions for Sourcegraph",
    category: "Cody's Future",
    icon: FileJson,
    chart: <QuesitonsForBuildersSlide9 />
  },
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


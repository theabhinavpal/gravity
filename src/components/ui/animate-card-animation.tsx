"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface Card {
  id: number
  contentType: 1 | 2 | 3
}

const cardData = {
  1: {
    title: "Gravity Core",
    description: "Next-gen Digital Architecture",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  },
  2: {
    title: "Vibe Intelligence",
    description: "Enterprise AI Solutions",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop",
  },
  3: {
    title: "Nexus Platforms",
    description: "High-performance Web Systems",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
  },
}

const initialCards: Card[] = [
  { id: 1, contentType: 1 },
  { id: 2, contentType: 2 },
  { id: 3, contentType: 3 },
]

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
]

const exitAnimation = {
  y: 340,
  scale: 1,
  zIndex: 10,
}

const enterAnimation = {
  y: -16,
  scale: 0.9,
}

function CardContent({ contentType }: { contentType: 1 | 2 | 3 }) {
  const data = cardData[contentType]

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="-outline-offset-1 flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl outline outline-black/10 dark:outline-white/10">
        <img
          src={data.image || "/placeholder.svg"}
          alt={data.title}
          className="h-full w-full select-none object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-3 pb-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-medium text-foreground">{data.title}</span>
          <span className="text-muted-foreground text-sm">{data.description}</span>
        </div>
        <button className="flex h-10 shrink-0 cursor-pointer select-none items-center gap-0.5 rounded-full bg-foreground pl-4 pr-3 text-sm font-medium text-background hover:opacity-90 transition-opacity">
          Read
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <path d="M9.5 18L15.5 12L9.5 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function AnimatedCard({
  card,
  index,
}: {
  key?: React.Key
  card: Card
  index: number
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  
  return (
    <motion.div
      key={card.id}
      initial={{ opacity: 0, y: -20, scale: 0.8 }}
      animate={{ 
        y, 
        scale, 
        opacity: 1,
        zIndex: 10 - index 
      }}
      exit={{ 
        y: 300, 
        opacity: 0, 
        scale: 0.9,
        zIndex: 50,
        transition: { duration: 0.3, ease: "circIn" }
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 1
      }}
      style={{
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className="absolute flex h-[300px] w-[324px] items-center justify-center overflow-hidden rounded-t-2xl border-x border-t border-white/10 bg-card/80 backdrop-blur-xl p-1 shadow-2xl will-change-transform sm:w-[512px]"
    >
      <CardContent contentType={card.contentType} />
    </motion.div>
  )
}

export default function AnimatedCardStack() {
  const [cards, setCards] = useState(initialCards)
  const [nextId, setNextId] = useState(4)

  const handleAnimate = () => {
    setCards((prev) => {
      const lastCard = prev[prev.length - 1]
      const nextContentType = ((lastCard.contentType % 3) + 1) as 1 | 2 | 3
      return [...prev.slice(1), { id: nextId, contentType: nextContentType }]
    })
    setNextId((prev) => prev + 1)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center pt-2">
      <div className="relative h-[400px] w-full overflow-hidden sm:w-[644px]">
        <AnimatePresence mode="popLayout">
          {cards.slice(0, 3).map((card, index) => (
            <AnimatedCard key={card.id} card={card} index={index} />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 -mt-px flex w-full items-center justify-center border-t border-white/5 py-8">
        <button
          onClick={handleAnimate}
          className="group relative flex h-12 cursor-pointer select-none items-center justify-center gap-3 overflow-hidden rounded-full border border-primary/20 bg-dark px-8 font-black text-white transition-all hover:border-primary/50 hover:bg-primary/10 active:scale-95 uppercase tracking-[0.2em] text-[10px]"
        >
          <span className="relative z-10">Next Project</span>
          <ArrowRight className="relative z-10 text-primary group-hover:translate-x-1 transition-transform" size={14} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </button>
      </div>
    </div>
  )
}

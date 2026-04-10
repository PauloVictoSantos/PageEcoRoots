'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users } from 'lucide-react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function LiveVisitors() {
  const [count, setCount] = useState<number>(0)
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    // ID único por aba/sessão
    const userId = crypto.randomUUID()

    const channel = supabase.channel('site-presence', {
      config: { presence: { key: userId } },
    })

    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState()
        setCount(Object.keys(state).length)
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({ online_at: new Date().toISOString() })
          setConnected(true)
        }
      })

    return () => {
      channel.unsubscribe()
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-background/40 backdrop-blur-sm"
      aria-label={`${count} ${count === 1 ? 'pessoa acessando' : 'pessoas acessando'} agora`}
    >
      <div className="relative flex items-center justify-center">
        <span
          className={`w-2 h-2 rounded-full ${connected ? 'bg-primary' : 'bg-muted-foreground'}`}
          aria-hidden="true"
        />
        {connected && (
          <span
            className="absolute w-2 h-2 rounded-full bg-primary animate-ping opacity-75"
            aria-hidden="true"
          />
        )}
      </div>

      <Users className="w-4 h-4 text-primary" aria-hidden="true" />

      <span className="text-sm font-medium text-foreground tabular-nums">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={count}
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            {count}
          </motion.span>
        </AnimatePresence>
        {' '}
        <span className="text-foreground/70">
          {count === 1 ? 'pessoa online' : 'pessoas online'}
        </span>
      </span>
    </motion.div>
  )
}
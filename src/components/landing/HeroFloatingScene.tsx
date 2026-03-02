import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import type { HeroContent } from '../../types/landing';

/* --------------------------------------------------------
 * ANIMATION STORYBOARD
 *
 * Read top-to-bottom. Each `at` value is ms after mount.
 *
 *   120ms   badge enters
 *   320ms   title line enters
 *   620ms   muted title line enters
 *   860ms   description fades up
 *  1080ms   CTA row appears
 *  1260ms   proof pills appear (staggered 70ms)
 *  1400ms   floating utility cards settle in
 * -------------------------------------------------------- */
const TIMING = {
  badge: 120,
  title: 320,
  mutedTitle: 620,
  description: 860,
  actions: 1080,
  proofPills: 1260,
  floatingCards: 1400,
} as const;

const TEXT_BLOCK = {
  offsetY: 20,
  spring: { type: 'spring' as const, stiffness: 320, damping: 28 },
};

const ACTION_ROW = {
  offsetY: 14,
  spring: { type: 'spring' as const, stiffness: 340, damping: 30 },
};

const PILL_MOTION = {
  stagger: 0.07,
  offsetY: 10,
  spring: { type: 'spring' as const, stiffness: 360, damping: 26 },
};

const CARD_MOTION = {
  offsetY: 22,
  hoverLift: 5,
  spring: { type: 'spring' as const, stiffness: 300, damping: 30 },
  idleDuration: 6,
};

const CARD_LAYOUT = [
  { top: '5%', left: '8%', rotate: '-5deg' },
  { top: '34%', left: '18%', rotate: '3deg' },
  { top: '58%', left: '36%', rotate: '-4deg' },
  { top: '20%', left: '48%', rotate: '6deg' },
] as const;

const CHIP_LAYOUT = [
  { top: '2%', left: '65%', label: 'T20' },
  { top: '48%', left: '72%', label: 'CLK' },
  { top: '70%', left: '10%', label: 'LOG' },
] as const;

interface Props {
  hero: HeroContent;
}

export default function HeroFloatingScene({ hero }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setStage(7);
      return undefined;
    }

    setStage(0);
    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setStage(1), TIMING.badge));
    timers.push(setTimeout(() => setStage(2), TIMING.title));
    timers.push(setTimeout(() => setStage(3), TIMING.mutedTitle));
    timers.push(setTimeout(() => setStage(4), TIMING.description));
    timers.push(setTimeout(() => setStage(5), TIMING.actions));
    timers.push(setTimeout(() => setStage(6), TIMING.proofPills));
    timers.push(setTimeout(() => setStage(7), TIMING.floatingCards));

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [prefersReducedMotion]);

  const shouldFloat = stage >= 7 && !prefersReducedMotion;

  const cardsWithLayout = useMemo(
    () => hero.floatingCards.map((card, index) => ({ ...card, ...CARD_LAYOUT[index % CARD_LAYOUT.length], id: `${card.label}-${index}` })),
    [hero.floatingCards],
  );

  return (
    <div className="hero-inner dot-pattern">
      <div className="hero-content">
        <motion.p
          className="hero-badge"
          initial={{ opacity: 0, y: TEXT_BLOCK.offsetY }}
          animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : TEXT_BLOCK.offsetY }}
          transition={TEXT_BLOCK.spring}
        >
          {hero.badge.label}
        </motion.p>

        <h1 className="hero-title">
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ opacity: 0, y: TEXT_BLOCK.offsetY }}
            animate={{ opacity: stage >= 2 ? 1 : 0, y: stage >= 2 ? 0 : TEXT_BLOCK.offsetY }}
            transition={TEXT_BLOCK.spring}
          >
            {hero.title}
          </motion.span>
          <motion.span
            className="hero-title-muted"
            initial={{ opacity: 0, y: TEXT_BLOCK.offsetY }}
            animate={{ opacity: stage >= 3 ? 1 : 0, y: stage >= 3 ? 0 : TEXT_BLOCK.offsetY }}
            transition={TEXT_BLOCK.spring}
          >
            {hero.highlight}
          </motion.span>
        </h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: TEXT_BLOCK.offsetY }}
          animate={{ opacity: stage >= 4 ? 1 : 0, y: stage >= 4 ? 0 : TEXT_BLOCK.offsetY }}
          transition={TEXT_BLOCK.spring}
        >
          {hero.description}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: ACTION_ROW.offsetY }}
          animate={{ opacity: stage >= 5 ? 1 : 0, y: stage >= 5 ? 0 : ACTION_ROW.offsetY }}
          transition={ACTION_ROW.spring}
        >
          {hero.actions.map((action) => {
            const actionIsExternal = action.href.startsWith('http');
            return (
              <a
                key={action.href}
                className={`btn ${action.variant === 'primary' ? 'primary' : 'secondary'}`}
                href={action.href}
                target={actionIsExternal ? '_blank' : undefined}
                rel={actionIsExternal ? 'noreferrer' : undefined}
              >
                {action.label}
              </a>
            );
          })}
        </motion.div>

        <div className="hero-proof" aria-label="Momentum highlights">
          {hero.proofPoints.map((point, index) => (
            <motion.span
              key={point}
              initial={{ opacity: 0, y: PILL_MOTION.offsetY }}
              animate={{ opacity: stage >= 6 ? 1 : 0, y: stage >= 6 ? 0 : PILL_MOTION.offsetY }}
              transition={{ ...PILL_MOTION.spring, delay: index * PILL_MOTION.stagger }}
            >
              {point}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="hero-floats" aria-hidden="true">
        {cardsWithLayout.map((card, index) => (
          <motion.article
            key={card.id}
            className="float-card"
            data-tone={card.tone}
            style={{ top: card.top, left: card.left, rotate: card.rotate }}
            initial={{ opacity: 0, y: CARD_MOTION.offsetY, scale: 0.95 }}
            animate={
              stage >= 7
                ? {
                    opacity: 1,
                    y: shouldFloat ? [0, -CARD_MOTION.hoverLift, 0] : 0,
                    scale: 1,
                  }
                : { opacity: 0, y: CARD_MOTION.offsetY, scale: 0.95 }
            }
            transition={
              shouldFloat
                ? {
                    y: {
                      duration: CARD_MOTION.idleDuration + index,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.35,
                    },
                    scale: CARD_MOTION.spring,
                    opacity: CARD_MOTION.spring,
                  }
                : CARD_MOTION.spring
            }
          >
            <h4>{card.label}</h4>
            <p>{card.detail}</p>
          </motion.article>
        ))}

        {CHIP_LAYOUT.map((chip, index) => (
          <motion.div
            key={chip.label}
            className="float-chip"
            style={{ top: chip.top, left: chip.left }}
            initial={{ opacity: 0, y: CARD_MOTION.offsetY }}
            animate={
              stage >= 7
                ? {
                    opacity: 1,
                    y: shouldFloat ? [0, -3, 0] : 0,
                  }
                : { opacity: 0, y: CARD_MOTION.offsetY }
            }
            transition={
              shouldFloat
                ? {
                    opacity: CARD_MOTION.spring,
                    y: {
                      duration: CARD_MOTION.idleDuration + index,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.2 + index * 0.28,
                    },
                  }
                : CARD_MOTION.spring
            }
          >
            {chip.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export const hSlideIn = (transition) => ({
  initial: { opacity: 0, x: "-100vw" },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      duration: transition?.duration || 2,
      ease: transition?.ease || "backInOut",
      delay: transition?.delay || 0,
    },
  },
});

export const hSlideInLeft = (transition) => ({
  initial: { opacity: 0, x: "-2rem" },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      duration: transition?.duration || 2,
      ease: transition?.ease || "backInOut",
      delay: transition?.delay || 0,
    },
  },
});

export const hSlideInRight = (transition) => ({
  initial: { opacity: 0, x: "2rem" },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      duration: transition?.duration || 2,
      ease: transition?.ease || "backInOut",
      delay: transition?.delay || 0,
    },
  },
});

export const vSlideIn = (transition) => ({
  initial: { opacity: 0, y: "-1rem" },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: transition?.duration || 2,
      ease: transition?.ease || "easeOut",
      delay: transition?.delay || 0,
    },
  },
});

export const vSlideInBottom = (transition) => ({
  initial: { opacity: 0, y: "2rem" },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: transition?.duration || 2,
      ease: transition?.ease || "easeOut",
      delay: transition?.delay || 0,
    },
  },
});

export const reveal = (transition) => ({
  initial: { opacity: 0 },
  final: {
    opacity: 1,
    transition: {
      duration: transition?.duration || 2,
      ease: transition?.ease || "easeIn",
      delay: transition?.delay || 0,
    },
  },
});

export const spreadOut = (transition) => ({
  initial: { width: 0 },
  final: {
    width: "100%",
    transition: {
      duration: transition?.duration || 0.5,
      ease: transition?.ease || "easeOut",
      delay: transition?.delay || 0,
    },
  },
});

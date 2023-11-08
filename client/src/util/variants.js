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

export const hSlideIn = (transition, hoverVariant) => ({
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
  mouseOver: hoverVariant?.final,
  mouseOut: hoverVariant?.initial,
});

export const hSlideInLeft = (transition, hoverVariant) => ({
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
  mouseOver: hoverVariant?.final,
  mouseOut: hoverVariant?.initial,
});

export const hSlideInRight = (transition, hoverVariant) => ({
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
  mouseOver: hoverVariant?.final,
  mouseOut: hoverVariant?.initial,
});

export const vSlideIn = (transition, hoverVariant) => ({
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
  mouseOver: hoverVariant?.final,
  mouseOut: hoverVariant?.initial,
});

export const vSlideInBottom = (transition, hoverVariant) => ({
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
  mouseOver: hoverVariant?.final,
  mouseOut: hoverVariant?.initial,
});

export const reveal = (transition, hoverVariant) => ({
  initial: { opacity: 0 },
  final: {
    opacity: 1,
    transition: {
      duration: transition?.duration || 2,
      ease: transition?.ease || "easeIn",
      delay: transition?.delay || 0,
    },
  },
  mouseOver: hoverVariant?.final,
  mouseOut: hoverVariant?.initial,
});

export const spreadOut = (transition, hoverVariant) => ({
  initial: { width: 0 },
  final: {
    width: "100%",
    transition: {
      duration: transition?.duration || 0.5,
      ease: transition?.ease || "easeOut",
      delay: transition?.delay || 0,
    },
  },
  mouseOver: hoverVariant?.final,
  mouseOut: hoverVariant?.initial,
});

// event animation
export const shadowOut = {
  initial: {
    boxShadow: "0 0",
    transition: { duration: 0.3, ease: "easeIn" },
  },
  final: {
    boxShadow: "var(--light-text-box-shadow)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const fontSizeIncrease = {
  initial: {
    opacity: 1,
    fontSize: "100%",
    transition: { duration: 0.2, ease: "easeIn" },
  },
  final: {
    opacity: 0.9,
    fontSize: "110%",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

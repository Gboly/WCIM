import { useAnimation, useInView } from "framer-motion";
import { forwardRef, useEffect } from "react";

const AnimatedWithRef = (
  {
    element: Element,
    className,
    children,
    variants,
    whileHover,
    whileTap,
    onClick,
    onMouseOver,
    setElementRef,
  },
  ref
) => {
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    isInView && control.start("final");
  }, [isInView, control]);

  return (
    <>
      <Element
        className={className}
        variants={variants}
        initial="initial"
        animate={control}
        whileHover={whileHover}
        whiletap={whileTap}
        onClick={onClick}
        onMouseOver={onMouseOver}
        ref={setElementRef}
      >
        {children}
      </Element>
    </>
  );
};

const Animated = forwardRef(AnimatedWithRef);
export default Animated;

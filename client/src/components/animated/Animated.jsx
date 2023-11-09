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
    onMouseOut,
    useVariantHover,
    setElementRef,
  },
  ref
) => {
  const isInView = useInView(ref, { once: true });
  const control = useAnimation();

  useEffect(() => {
    isInView && control.start("final");
  }, [isInView, control]);

  const customMouseOver = () => control.start("mouseOver");
  const customMouseOut = () => control.start("mouseOut");

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
        onMouseOver={useVariantHover ? customMouseOver : onMouseOver}
        onMouseOut={useVariantHover ? customMouseOut : onMouseOut}
        ref={setElementRef}
      >
        {children}
      </Element>
    </>
  );
};

const Animated = forwardRef(AnimatedWithRef);
export default Animated;

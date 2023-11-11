import { useAnimation, useInView } from "framer-motion";
import { forwardRef, useEffect } from "react";

const AnimatedWithRef = (
  {
    element: Element,
    id,
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
    animateExit,
  },
  ref
) => {
  const isInView = useInView(ref, { once: true });
  const control = useAnimation();

  useEffect(() => {
    isInView && control.start("final");
  }, [isInView, control]);

  // Felt the need to these customs because for some reason animating with whileHover just wouldn't return component back to initial form.
  const customMouseOver = () => control.start("mouseOver");
  const customMouseOut = () => control.start("mouseOut");

  return (
    <>
      <Element
        id={id}
        className={className}
        variants={variants}
        initial="initial"
        animate={control}
        exit={animateExit && "initial"}
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

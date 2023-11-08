import { useAnimation, useInView } from "framer-motion";
import { forwardRef, useEffect } from "react";

const AnimatedWithRef = (
  { element: Element, className, children, variants },
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
      >
        {children}
      </Element>
    </>
  );
};

const Animated = forwardRef(AnimatedWithRef);
export default Animated;

import React, { PropsWithChildren, useState } from "react";
import cn from "classnames";
import { useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";

import { useAccordionStyles } from "./useAccordionStyles";
import { ReactComponent as Arrow } from "./arrow-accordion.svg";

export interface AccordionProps {
    title: string;
    hideArrow?: boolean;
}

export const Accordion = (props: PropsWithChildren<AccordionProps>) => {
    const { title, children, hideArrow } = props;
    const [isOpened, setIsOpened] = useState(true);
    const classes = useAccordionStyles();
    const [ref, { height }] = useMeasure();

    const onToggleClick = () => setIsOpened((prev) => !prev);

    const animProps = useSpring({
        maxHeight: isOpened ? height : 0,
        opacity: isOpened ? 1 : 0,
    });

    const renderArrow = () => {
        if (hideArrow) {
            return null;
        }

        const arrowClass = cn({
            [classes.arrow]: true,
            open: isOpened,
        });

        return <Arrow className={arrowClass} />;
    };

    return (
        <div className={classes.wrapper}>
            <button className={classes.toggle} onClick={onToggleClick}>
                <div className={classes.title}>{title}</div>
                {renderArrow()}
            </button>

            <animated.div style={animProps} className={classes.content}>
                <div ref={ref}>{children}</div>
            </animated.div>
        </div>
    );
};

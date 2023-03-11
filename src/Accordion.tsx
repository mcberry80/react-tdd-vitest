import React, { PropsWithChildren, useState }  from "react";

type AccordionProps = {
    title: string;
  }


const Accordion: React.FC<AccordionProps> = (props: PropsWithChildren<AccordionProps>) => {
    const [showContent, setShowContent] = useState(false)

    const showContentHandler = () => {
        setShowContent(!showContent);
    }

    return(
        <div className="accordion">
            <div className="accordion-title">
                <h3>{props.title}</h3>
            </div>
            <div className="accordion-content">
                {showContent && props.children}
            </div>
            <button onClick={showContentHandler}>{!showContent ? 'Show' : 'Hide'}</button>
        </div>
    )
}

export default Accordion;
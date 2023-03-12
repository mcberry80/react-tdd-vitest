import React, { PropsWithChildren, useState }  from "react";

type AccordionProps = {
    title: string;
  }


const Accordion = (props: PropsWithChildren<AccordionProps>) => {
    const [showContent, setShowContent] = useState(false)
    const [buttonResponse, setButtonResponse] = useState('Bruh')

    const showContentHandler = async () => {
        setShowContent(!showContent);
        await fetch("http://movies.com/1234")
        .then((response) => response.json())
        .then((data) => setButtonResponse(data.first));
    }

    return(
        <div className="accordion">
            <div className="accordion-title">
                <h3>{props.title}</h3>
            </div>
            <div className="accordion-content">
                {showContent && props.children}
            </div>
            <button onClick={showContentHandler}>Toggle</button>
            {buttonResponse}
        </div>
    )
}

export default Accordion;
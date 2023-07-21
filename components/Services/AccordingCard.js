import React, { useState } from "react";
import { GeneralSmText } from "../../styles/GlobalCss";

const AccordingCard = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title">
                {
                (() => {
                    if(title){
                        if (title.split(' ').length > 70){
                            return (
                                <>
                                <GeneralSmText
                                    fontSize="16px"
                                    fontWeight="400"
                                    lineHeight="24px"
                                    textTransform="unset"
                                    margin="1rem 0"
                                    color="#2b2d42"

                                    dangerouslySetInnerHTML={{
                                        __html: title.split(' ').slice(0, 65).join(' ')
                                    }} />
                                </>
                            )}
                        else return (
                            <GeneralSmText
                                fontSize="16px"
                                fontWeight="400"
                                lineHeight="24px"
                                textTransform="unset"
                                margin="1rem 0"
                                color="#2b2d42" 
                                dangerouslySetInnerHTML={{ __html: title }}/>
                        )
                    }
            
                    })()  
                }  
                {
                (() => {
                    if (title.split(' ').length > 70){
                        return (
                        <>
                            <GeneralSmText
                                fontSize="17px"
                                fontWeight="700"
                                lineHeight="24px"
                                textTransform="unset"
                                margin="1rem 0"
                                color="#E50A0A" 
                                onClick={() => setIsActive(!isActive)}
                            >
                                {isActive ? 'Hide' : 'Read more'}
                            </GeneralSmText>
                        </>
                        )}
                    })()
                }  
            </div>
            {isActive && 
            <GeneralSmText
                fontSize="16px"
                fontWeight="400"
                lineHeight="24px"
                textTransform="unset"
                margin="1rem 0"
                color="#2b2d42" 
                
                dangerouslySetInnerHTML={{ __html: content.split(' ').slice(-74).join(' ') }} />
            }

        </div>
    );
};

export default AccordingCard;
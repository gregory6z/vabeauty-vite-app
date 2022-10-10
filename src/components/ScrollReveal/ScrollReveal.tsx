import  { useRef, useEffect, FC,  ReactElement } from "react";
import scrollReveal from "scrollreveal";
import styled from "styled-components";
//import "./ScrollReveal.css";

interface ScrollRevealProps {
  style?: object;
  children: ReactElement;
  origin: string;
  distance?: string;
  delay?:number;
}

export const Reveal: FC<ScrollRevealProps> = ({ children, style,origin,distance,delay}) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
   
    if(!distance){
      distance = "30px"
    }
    if(!delay){
      delay = 0
    }
    

    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        origin,
        distance,
        duration: 1200,
        delay,
        mobile:false,
      
       //  desktop:true,

       
      });
  }, []);

  return (
    <Scroll
      ref={sectionRef}
      style={style}
      className="container scroll-section"
      data-testid="section"
    >
      {children}
    </Scroll>
  );
};

const Scroll = styled.section``;
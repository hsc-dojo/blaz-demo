import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function Equation({ number }) {
    return (
        <div>
           {number === 1 && (<MathJaxContext>
      <h2>Basic MathJax example with Latex</h2>
       <h1> <MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax></h1> 
    </MathJaxContext>)}
        </div>
    
    
  );
}


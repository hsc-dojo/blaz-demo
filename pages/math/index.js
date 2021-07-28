import React from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Equation from "equation/math/Equation";

export default function MathPage() {
  return (
      <div>
          <Layout physics={true}>
              <Equation number={1}/>
          </Layout>
      
    </div>
  );
}

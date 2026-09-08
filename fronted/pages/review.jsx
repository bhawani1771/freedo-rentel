import React from "react";
import { Review } from "../src/component/review";
import { HeroBanner } from "../src/component/banner";
import { StatsSection } from "../src/component/statesection";


function Revieww(){
    return(
        <>
        <HeroBanner/>
        <Review/>
        <StatsSection/>
        </>
    );
}

export {Revieww};
import React from "react";
import { Title, Link, Style} from "react-head";

import faroutSmallImg from "../images/faroutSmall.jpg";
import faroutBigImg from "../images/faroutBig.jpg";

const Head = () => {
    return (
        <>
            <Title>Jenessa & Zach</Title>
            <Link rel="preload" as="image" href={faroutSmallImg} />
            <Link rel="preload" as="image" href={faroutBigImg} />
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Albert+Sans&family=Birthstone+Bounce&display=swap');
            </style>
      </>
    )
}

export default Head;
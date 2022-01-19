import React from "react";
import WhatWeDoCard from "./WhatWeDo/WhatWeDo-Card.component";
import ReactJsIcon from "../img/reactjs-icon.svg";
import NodeJsIcon from "../img/nodejs-icon.svg";
import FigmaIcon from "../img/figma-icon.svg";
import HtmlIcon from "../img/html-icon.svg";
import ScssIcon from "../img/scss-icon.svg";
import ExpressIcon from "../img/express-icon.svg";
import MongoDbIcon from "../img/mongodb-icon.svg";
import ReactNativeIcon from "../img/react-native-icon.svg";
import LibraryIcon from "../img/library-solid-icon.svg";
const WhatWeUse = () => {
  return (
    <>
      <div className="whatWeDoContainer whatWeUseContainer">
        <div className="whatWeDoCardContainer">
          <WhatWeDoCard
            img={ReactJsIcon}
            title="React Js"
            desc="React is a free and open-source front-end JavaScript library for building user interfaces or UI components."
          />
          <WhatWeDoCard
            img={NodeJsIcon}
            title="Node Js"
            desc="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
          />
          <WhatWeDoCard
            img={FigmaIcon}
            title="Figma"
            desc="Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows."
          />
          <WhatWeDoCard
            img={HtmlIcon}
            title="HTML 5"
            desc="HTML5 is a markup language used for structuring and presenting content on the World Wide Web."
          />
          <WhatWeDoCard
            img={ScssIcon}
            title="CSS3 / SASS / SCSS"
            desc="CSS3 is the latest version of the CSS specification. Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets."
          />
          <WhatWeDoCard
            img={ExpressIcon}
            title="Express Js"
            desc="Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License."
          />
          <WhatWeDoCard
            img={MongoDbIcon}
            title="Mongo DB"
            desc="MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas."
          />
          <WhatWeDoCard
            img={ReactNativeIcon}
            title="React Native"
            desc="React Native is an open-source UI software framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities."
          />
          <WhatWeDoCard
            img={LibraryIcon}
            title="Other Libraries / Modules"
            desc="These are other modules that you want us to add to your beautiful site."
          />
        </div>
      </div>
    </>
  );
};

export default WhatWeUse;

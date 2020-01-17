import React from "react";
import { storiesOf } from "@storybook/react";
import AddonPhotoCard from "./AddonPhotoCard";

import "./AddonPhotoCard.scss";

import { addons } from './images';

storiesOf("AddonPhotoCard", module).add("default", () => (
    <div className="container">
        <AddonPhotoCard imageSrc={addons[0].src} title={addons[0].title} />
    </div>
));

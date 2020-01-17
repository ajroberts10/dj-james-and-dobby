import React from "react";
import { storiesOf } from "@storybook/react";
import AddonCarousel from "./AddonCarousel";

import "./AddonCarousel.scss";

storiesOf("AddonCarousel", module).add("default", () => (
    <div className="container">
        <AddonCarousel>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </AddonCarousel>
    </div>
));

import React from "react";
import { Tooltip } from "@mui/material";

export function FooterLinks() {

    const linkItems = [
        { "name": "ReactTS", "url_link": "https://reactjs.org/", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" },
        { "name": "Typescript", "url_link": "https://www.typescriptlang.org/", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" },
        { "name": "HTML5", "url_link": "", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" },
        { "name": "CSS", "url_link": "", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/256px-CSS3_logo_and_wordmark.svg.png" },
        { "name": "Git Repo", "url_link": "https://github.com/srinathv31/portfolio-website", "image_url": "https://i.imgur.com/GpQ1IHV.png" }
    ];

    return (
        <div>
            <ul>
                <li style={{ paddingRight: 0 }}>
                    {"Website Powered By:"}
                </li>
                {linkItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Tooltip title={item.name}>
                                {item.url_link === "" ?
                                    <img src={item.image_url}></img> :
                                    <a href={item.url_link} target="_blank" rel="noreferrer"><img src={item.image_url}></img></a>
                                }
                            </Tooltip>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
  

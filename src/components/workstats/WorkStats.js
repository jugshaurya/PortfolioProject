import React, { useEffect, useState } from "react";
import renderHTML from "react-render-html";

import "./WorkStats.scss";
const WorkStats = () => {
  const [svgHtml, setSvgHtml] = useState("");

  useEffect(() => {
    async function fetchSvg() {
      const SERVER_URL = "https://productive-weekday-server.jugshaurya.now.sh";
      const response = await fetch(`${SERVER_URL}/user/jugshaurya?requireSvg=true`);
      const result = await response.text();
      setSvgHtml(result);
    }
    fetchSvg();
  }, []);

  return (
    <div className="workstats-section" id="workstats">
      <section>
        <h4>WorkStats</h4>
      </section>
      <div className="container">
        <figure>
          <embed src="https://wakatime.com/share/@jugshaurya/9ca5accf-4aa5-41ca-917e-5a143e9552ee.svg"></embed>
        </figure>

        <figure>
          <embed src="https://wakatime.com/share/@jugshaurya/a750f08f-2404-4f77-8df8-849d0a8f4109.svg"></embed>
        </figure>
        <div className="contrib-svg">
          <h6 className="github-heading">Github Contrib</h6>
          <div className="scroller">{renderHTML(svgHtml)}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkStats;

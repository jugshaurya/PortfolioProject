import React, { useEffect, useState } from "react";
import renderHTML from "react-render-html";

import "./WorkStats.scss";
const WorkStats = () => {
  const [svgHtml, setSvgHtml] = useState("");

  useEffect(() => {
    async function fetchSvg() {
      const SERVER_URL = "https://productive-weekday-server.jugshaurya.now.sh";
      const response = await fetch(`${SERVER_URL}/user/jugshaurya`);
      const result = await response.json();
      setSvgHtml(JSON.parse(result.svghtml));
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
          <embed src="https://wakatime.com/share/@jugshaurya/d2bef6d8-2a0f-4d13-9d51-034ce2f08d8f.svg"></embed>
        </figure>
        <figure>
          <embed src="https://wakatime.com/share/@jugshaurya/f4c4855e-40ed-46ec-83be-b06c18f6a37b.svg"></embed>
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

import { useRef } from 'react';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';

import { HexMap, HexMapMarker } from './HexMap'
import { markerData } from '../../Assets/Data/MapData/markerData';


const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };
const BIN_SIZE = 8;

type MapProps = {
  width: number;
  height: number;
  data: { lon: number; lat: number, population?: number }[];
};


export const Map = ({ width, height, data }: MapProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Scales
  const yScale = d3.scaleLinear().domain([25, 65]).range([boundsHeight, 0]);
  const xScale = d3.scaleLinear().domain([-20, 60]).range([0, boundsWidth]);

  const hexbinGenerator = hexbin()
    .radius(BIN_SIZE)
    .extent([
      [0, 0],
      [boundsWidth, boundsHeight],
    ]);


  const mapHexbin = hexbinGenerator(
    data.map((item) => [xScale(item.lon), yScale(item.lat)])
  );
  const markerHexbin = hexbinGenerator(
    markerData.map((item) => [xScale(item.coordinates[1]), yScale(item.coordinates[0])])
  );

  return (
    <div>
      <svg ref={svgRef} width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}

        //Todo: need to investigate and fix the box shadow

        // style={{
        //   filter: `
        //     drop-shadow(0px 2.767256498336792px 2.2138051986694336px rgba(108, 73, 172, 0.05))
        //     drop-shadow(0px 6.650102138519287px 5.32008171081543px rgba(108, 73, 172, 0.07))
        //     drop-shadow(0px 12.521552085876465px 10.017241477966309px rgba(108, 73, 172, 0.09))
        //     drop-shadow(0px 22.3363094329834px 17.869047164916992px rgba(108, 73, 172, 0.11))
        //     drop-shadow(0px 41.777610778808594px 33.422088623046875px rgba(108, 73, 172, 0.13))
        //     drop-shadow(0px 100px 80px rgba(108, 73, 172, 0.18))
        //   `,
        // }}
        >
          <HexMap data={mapHexbin} hexbinGenerator={hexbinGenerator} />
          <HexMapMarker data={markerHexbin} hexbinGenerator={hexbinGenerator} markerData={markerData} />
        </g>
      </svg>
    </div>
  );
};


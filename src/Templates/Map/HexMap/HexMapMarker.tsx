import { useState } from "react";
import { Hexbin, HexbinBin } from "d3-hexbin"

import { Tooltip, WidgetContainer } from "../../../Molecule";
import { numberWithCommas } from "../../../Assets/utils/utils";
import { Marker } from "../../../Assets/Data/MapData/markerData";


type Props = {
  data: HexbinBin<[number, number]>[];
  hexbinGenerator: Hexbin<[number, number]>;
  markerData: Marker[];
}

export const HexMapMarker = (props: Props) => {
  const { data, hexbinGenerator, markerData } = props;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseOver = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const markers = data.map((d, i) => {
    const isHovered = hoveredIndex === i;
    let fillColor = '#ffffff'; // Default white color

    // Change color based on population count using switch statement
    switch (true) {
      case markerData[i].population! > 1000:
        fillColor = '#FF2D2E';
        break;
      case markerData[i].population! > 500:
        fillColor = '#8676FF';
        break;
      case markerData[i].population! > 100:
        fillColor = '#D45AFF';
        break;
      default:
        break;
    }
    const strokeColor = isHovered ? '#8676FF' : '#EEF0FA';

    return (
      <Tooltip
        key={i}
        title={
          <WidgetContainer
            amount={numberWithCommas(markerData[i].population)}
            iconBgColor={markerData[i].color || '#66C8FF'}
            iconText={markerData[i].icon || 'Office'}
            title={markerData[i].name}
            size='small' />
        }
        placement='top'
        sx={{ zIndex: 3 }}
        arrow
        open={markerData[i].population! > 1000}>
        <path
          key={i}
          d={hexbinGenerator.hexagon()}
          transform={'translate(' + d.x + ',' + d.y + ')'}
          opacity={1}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={isHovered ? 3 : 2}
          onMouseOver={() => handleMouseOver(i)}
          onMouseOut={handleMouseOut}
        />
      </Tooltip>
    );
  });

  return (
    <>{markers}</>
  )
}

import { Hexbin, HexbinBin } from "d3-hexbin"

type Props = {
  data: HexbinBin<[number, number]>[];
  hexbinGenerator: Hexbin<[number, number]>;
}

export const HexMap = ({ data, hexbinGenerator }: Props) => {
  const hexMap = data.map((d, i) => {

    return (
      <path
        key={i}
        d={hexbinGenerator.hexagon()}
        transform={'translate(' + d.x + ',' + d.y + ')'}
        opacity={1}
        fill='#ffffff'
        stroke="#EEF0FA"
        strokeWidth={2}
      />
    );
  });
  return (
    <>{hexMap}</>
  )
}

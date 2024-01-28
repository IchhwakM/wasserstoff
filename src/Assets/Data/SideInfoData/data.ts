export type SideInfo = {
  id: number;
  name: string;
  color: string;
  icon: string;
  amounts: string;
}

export const sideInfo: SideInfo[] = [
  {
    "id": 1,
    "name": "Total earning",
    "color": "#8676FF",
    "icon": "Activity",
    "amounts": "540,549"
  },
  {
    "id": 2,
    "name": "Sales",
    "color": "#66C8FF",
    "icon": "Crown",
    "amounts": "1,205,677"
  },
  {
    "id": 3,
    "name": "Purchase",
    "color": "#FF9066",
    "icon": "Chart",
    "amounts": "48,430,039"
  }
]

import Activity from "../Assets/images/Activity.svg"
import Chart from "../Assets/images/Chart.svg"
import Crown from "../Assets/images/Crown.svg"
import Office from "../Assets/images/Office.svg"
import Australia from "../Assets/images/Australia.svg"
import China from "../Assets/images/China.svg"
import France from "../Assets/images/France.svg"

export const useGetIcons = (iconText: string) => {
  switch (iconText) {
    case "Activity":
      return Activity
    case "Chart":
      return Chart
    case "Crown":
      return Crown
    case "Office":
      return Office
    case "Australia":
      return Australia
    case "China":
      return China
    case "France":
      return France
    default:
      break;
  }
}
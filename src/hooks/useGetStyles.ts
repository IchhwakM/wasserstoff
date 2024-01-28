export const useGetStyles = (value: string) => {
  const medium = {
    iconStyles: {
      height: "70px",
      width: "70px",
      iconHeight: "32px",
      iconWidth: "32px",
      borderRadius: "20px"
    },
    titleStyles: {
      fontSize: "20px",
      fontWeight: 400
    },
    amountStyles: {
      fontSizeAmt: "20px",
      fontWeightAmt: 600
    },
    spacing: "36px"

  };

  const small = {
    iconStyles: {
      height: "40px",
      width: "40px",
      iconHeight: "24px",
      iconWidth: "24px",
      borderRadius: "12px"
    },
    titleStyles: {
      fontSize: "16px",
      fontWeight: 300
    },
    amountStyles: {
      fontSizeAmt: "20px",
      fontWeightAmt: 600
    },
    spacing: "12px"
  }

  return value === 'small' ? small : medium;
}
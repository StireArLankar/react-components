import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const raisedShadow =
  "4px 2px 16px rgba(136, 165, 191, 0.8), -4px -2px 16px #FFFFFF";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: theme.spacing(0.5),
      width: 200,
      height: 200,
      borderRadius: 16,
      position: "relative",
      zIndex: 1,
      "&::after, &::before": {
        content: '""',
        zIndex: -1,
        position: "absolute",
        left: 0,
        top: 0,
        borderRadius: 16,
        width: "100%",
        height: "100%",
        transition: "opacity 0.5s ease"
      },
      "&::before": {
        background: "linear-gradient(0deg, #E3EDF7, #E3EDF7)",
        boxShadow: raisedShadow,
        opacity: 1
      },
      "&.active::before": {
        opacity: 0
      },
      "&::after": {
        background: "#E3EDF7",
        boxShadow:
          "inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #FFFFFF",

        opacity: 0
      },
      "&.active::after": {
        opacity: 1
      }
    },
    nestedContainer: {
      width: 311,
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(2),

      background: "#E3EDF7",
      boxShadow: raisedShadow,
      borderRadius: 16
    },
    nestedItem: {
      width: 36,
      height: 36,

      background: "#E3EDF7",
      boxShadow: raisedShadow,
      borderRadius: "50%"
    }
  })
);

export default useStyles;

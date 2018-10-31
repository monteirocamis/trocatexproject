import React from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  withStyles,
  Avatar
} from "@material-ui/core";
import classNames from "classnames";
import Profiles from "./container/profiles";
import Face from "./images/logo-v.1.png";

const styles = theme => ({
  content: {
    flexGrow: 1,
    width: "100vw",
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    margin: "auto"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: 0,
    paddingBottom: 0,
    padding: theme.spacing.unit * 4
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
});

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative" color="primary">
          <Toolbar>
            <Typography variant="title" color="textPrimary">
              TrocaTex
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <Profiles />
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Troque tecidos online
          </Typography>
          <Grid container>
            <Grid item>
              <Avatar
                className={classNames(classes.avatar, classes.bigAvatar)}
                src={Face}
              />
            </Grid>
          </Grid>
          <div />
        </footer>
      </React.Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(App);

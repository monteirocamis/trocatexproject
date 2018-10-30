import React from "react";
import Profile from "./Profile";
import { Grid, withStyles } from "@material-ui/core";

const styles = theme => ({
  gridItem: {
    margin: theme.spacing.unit * 2
  }
});
class Profiles extends React.Component {
  render() {
    const profiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const { classes } = this.props;
    return (
      <Grid
        container
        spacing={Number(28)}
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {profiles.map(profile => (
          <Grid
            key={`profile-${profile}`}
            item
            xs={Number(12)}
            md={Number(2)}
            className={classes.gridItem}
          >
            <Profile key={profile} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(Profiles);

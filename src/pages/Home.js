import React from "react";
import { Grid, Typography } from "@material-ui/core";
import foodBackground from "../assets/food.jpg";
import foodChef from "../assets/chef.png";
import { makeStyles } from "@material-ui/core/styles";
import { Restaurant, Fastfood, LocalDining } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  section1: {
    height: "100vh",
    backgroundImage: `url(${foodBackground})`,
    backgroundSize: "cover",
  },
  padding: {
    padding: "1rem",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justifyContent="flex-start">
      <Grid item xs={12}>
        <Grid
          container
          className={classes.section1}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid item xs={7} className={classes.padding}>
            <Typography variant="h2" color="secondary">
              We believe good food offer greate smile
            </Typography>
            <br />
            <Typography variant="h6" color="secondary">
              {" "}
              Ut enium ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi t aliquip ex ea commodo consequat is aute irure
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: "100vh" }}
        >
          <Grid item lg={5} md={4} xs={10} style={{ maxHeight: "100vh" }}>
            <Typography variant="h3">
              We Provide Good Food For Your Family
            </Typography>
            <br />

            <Typography variant="h6">
              {" "}
              Ut enium ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi t aliquip ex ea commodo consequat is aute irure
            </Typography>
            <br />

            <Grid container>
              <Grid item lg={6} xs={12} className={classes.padding}>
                <Grid container justifyContent="center">
                  <Grid item xs={2} md={4}>
                    <Restaurant fontSize="large" />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography>
                      {" "}
                      Ut enim ad minim veniam, quis nostrud exer
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item lg={6} xs={12} className={classes.padding}>
                <Grid container justifyContent="center">
                  <Grid item xs={2} md={4}>
                    <Fastfood fontSize="large" />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography>
                      {" "}
                      Ut enim ad minim veniam, quis nostrud exer
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item lg={6} xs={12} className={classes.padding}>
                <Grid container justifyContent="center">
                  <Grid item xs={2} md={4}>
                    <LocalDining fontSize="large" />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography>
                      {" "}
                      Ut enim ad minim veniam, quis nostrud exer
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item lg={6} xs={12} className={classes.padding}>
                <Grid container justifyContent="center">
                  <Grid item xs={2} md={4}>
                    <Restaurant fontSize="large" />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography>
                      {" "}
                      Ut enim ad minim veniam, quis nostrud exer
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={4}
            md={5}
            xs={10}
            style={{
              height: "700px",
              maxHeight: "700px",
              backgroundColor: "green",
              backgroundImage: `url(${foodChef})`,
              backgroundSize: "cover",
            }}
          ></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

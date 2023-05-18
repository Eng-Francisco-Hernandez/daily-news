"use client";

import * as React from "react";
import DrawerLayout from "@/components/layout/DrawerLayout";
import { Grid, Link, Typography } from "@mui/material";
import { newsCategories } from "@/data/constants";

export default function Home() {
  return (
    <DrawerLayout>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2" component="h2" color="primary">
            Daily news
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {newsCategories.map((category, index) => {
            return (
              <Link
                href="#"
                className="mr-10 title-case"
                style={{
                  textDecoration: "none",
                }}
              >
                {category}
              </Link>
            );
          })}
        </Grid>
      </Grid>
    </DrawerLayout>
  );
}

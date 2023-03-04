import { LogoSign, NavButton } from 'src/assets/index';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './styles';

//TODO: Finish PostCard component

type PostCardProps = {
  title: string;
  shortText: string;
  description: React.ReactNode;
  logo: React.ReactNode;
};

const PostCard = (props: PostCardProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.logoContainer}>{props.logo}</Box>
      <Typography className={classes.titleText}>{props.title}</Typography>
      <Typography className={classes.shortText}>{props.shortText}</Typography>
      <Typography className={classes.descriptionText}>
        {props.description}
      </Typography>
    </Box>
  );
};

export default PostCard;

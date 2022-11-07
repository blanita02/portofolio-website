import { LogoSign, NavButton } from 'src/assets/index';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './styles';

//TODO: Finish PostCard component

type PostCardProps = {
  title: string;
  description: string;
  logo: React.ReactNode;
};

const PostCard = (props: PostCardProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.cardContainer}>
      <Typography>{props.title}</Typography>
    </Box>
  );
};

export default PostCard;

import React from 'react';
import { useStyles } from './styles';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';

type ImageCardProps = {
  id: number;
  img: string;
  title: string;
  author: string;
  web_url: string;
};

const ImageCard = (props: ImageCardProps) => {
  const { id, img, title, author, web_url } = props;
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Card>
        <CardActionArea>
          <CardMedia image={img} title={title} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              By {author}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActionArea>
          <Link href={web_url} target='_blank' rel='noopener'>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                Read more
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ImageCard;

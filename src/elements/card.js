import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard(props) {
  return (
    <Card sx={{ width: 488 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.blog.title}
        </Typography>
        <Typography variant="h5" component="div">
          {props.blog.description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <div dangerouslySetInnerHTML={{ __html: props.blog.content }} />
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

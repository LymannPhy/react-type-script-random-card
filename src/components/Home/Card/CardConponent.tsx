'use client';

import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import { Products } from '../HomeComponent';

export const CardConponent = ({title, description, image}: Products) => {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img className="object-cover" src={image}/>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">
          <Link href="#multiple-actions" overlay underline="none">
            {title}
          </Link>
        </Typography>
        <Typography level="body-sm">
          <Link href="#multiple-actions">{description}</Link>
        </Typography>
      </CardContent>
      <CardOverflow variant="soft">
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs">6.3k views</Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs">1 hour ago</Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  )
}

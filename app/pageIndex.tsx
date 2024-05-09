'use client';
import dynamic from 'next/dynamic';
import { Box, Grid } from '@mui/material';

// Dynamic import components
const HelloBlock = dynamic(() => import('../components/widgets/HelloBlock/HelloBlock'), { ssr: false });
const OmexBuild = dynamic(() => import('../components/widgets/OmexBuild/omexWidget'), { ssr: false });
const QtWidget = dynamic(() => import('../components/widgets/Qtalents/QtWidget'), { ssr: false });
const TelegramChannel = dynamic(() => import('../components/widgets/TelegramChannel/telegramChannel'), { ssr: false });
const BookCollection = dynamic(() => import('../components/widgets/BookCollection/BookCollection'), { ssr: false });
const ToDo = dynamic(() => import('../components/widgets/ToDo/TaskView'), { ssr: false });
const WoltFee = dynamic(() => import('../components/widgets/WoltFee/WoltView'), { ssr: false });
const Avatars = dynamic(() => import('../components/widgets/Avatars/index'), { ssr: false });
const ScreenShareIdentification = dynamic(() => import('../components/widgets/ScreenShareIdentification/ScreenShareIdentification'), { ssr: false });
const TechStack = dynamic(() => import('../components/widgets/TechStack/index'), { ssr: false });
const Education = dynamic(() => import('../components/widgets/Education/index'), { ssr: false });
const Footer = dynamic(() => import('../components/widgets/Footer/index'), { ssr: false });

export default function Page() {
  return (
    <>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <Box maxWidth="lg" padding={2} sx={{ overflowX: 'hidden', overflowY: 'hidden' }}>
          <HelloBlock />

          <Grid container spacing={3} alignItems="stretch" padding={1}>
            <Grid item xs={12} sm={12} md={6}>
              
              <QtWidget />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
            <OmexBuild />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <TelegramChannel />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <BookCollection />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ToDo />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WoltFee />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Avatars />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <ScreenShareIdentification />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TechStack />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Education />
            </Grid>
          </Grid>
          <Footer />
        </Box>
      </div>
    </>
  );
}

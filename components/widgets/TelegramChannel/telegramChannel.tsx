import React from 'react';
import Image from 'next/image';
import { Avatar, Box, Card, Chip, Paper, Typography, } from '@mui/material';
import Link from 'next/link';

import logo from './logo.png';

const imageData = [{ id: 0, src: logo }];

const TelegramWidget = () => {
  return (
    <>
      <Box maxWidth="xs" paddingTop={0} justifyContent="space-around" textAlign="left">
        <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 0 }}>
          <Card elevation={4} sx={{ backgroundColor: 'transparent' }}>
            <Box textAlign="left" minHeight={380}>
              <Box p={1} justifyContent={'space-between'}>
                <Typography variant="body1">Python News Bot [oct 23 - nov 23]</Typography>
              </Box>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
                <Avatar alt="ext - route" sx={{ width: 96, height: 96, padding: '8' }}>
                  <Image src={imageData[0].src} alt="aueb logo" width={96} height={96} />
                </Avatar>
              </div>

              <Typography variant="body1" fontSize={24} sx={{ textAlign: 'center' }}>
                ola kala 🇬🇷
              </Typography>
              <Typography variant="subtitle1" fontSize={16} sx={{ textAlign: 'center', color: 'gray' }}>
                129 subscribers
              </Typography>

              <Box pr={4} pl={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="body1" fontSize={16} sx={{ textAlign: 'center' }}>
                  Το κανάλι αυτό είναι αφιερωμένο σε όλη την Ελλάδα και στα παιδιά που είναι στη πατρίδα και στο εξωτερικό.
                </Typography>
              </Box>

              {/* <Box padding={0} pt={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Link href="tg://resolve?domain=ola_kala">
									<Chip
										color='info'
										label="VIEW IN TELEGRAM"
										variant="outlined"
										clickable
									/>
								</Link>
							</Box> */}

              <Box padding={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href="https://t.me/s/ola_kala">
                  <Chip color="info" label="PREVIEW CHANNEL" variant="outlined" clickable />
                </Link>
              </Box>
            </Box>
          </Card>
        </Paper>
      </Box>
    </>
  );
};

export default TelegramWidget;

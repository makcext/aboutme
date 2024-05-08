'use client'
import React, { useEffect, ChangeEvent } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Alert, Box, Card, CardMedia, Paper, TextField, Typography, IconButton, Grid, Link } from '@mui/material'
import SyncAltIcon from '@mui/icons-material/SyncAlt'

// const imageData = [
// 	{
// 		id: 0,
// 		src: '/omex/01.png',
// 		alt: 'Omex Build',
// 	},
// 	{
// 		id: 1,
// 		src: '/omex/02.png',
// 		alt: 'Omex Build',
// 	},
// 	{
// 		id: 2,
// 		src: '/omex/03.png',
// 		alt: 'Omex Build',
// 	},
// 	{
// 		id: 3,
// 		src: '/omex/04.png',
// 		alt: 'Omex Build',
// 	},
// 	{
// 		id: 4,
// 		src: '/omex/05.png',
// 		alt: 'Omex Build',
// 	},
// ];

const projects = [
  {
    id: 0,
    images: ['01', '02', '03', '04', '05', '06'],
    title: 'ath Gr - ',
    by: 1,
    street: 'Qtalents',
    description: 'This is a description',
  },
]

const QtWidget = () => {
  const [currentImage, setCurrentImage] = useState(Array(projects.length).fill(0))

  const handleScroll = (index: any) => (event: any) => {
    const element = event.target
    const visibleImageIndex = Math.ceil(element.scrollLeft / element.clientWidth)
    setCurrentImage((prev) => prev.map((item, i) => (i === index ? visibleImageIndex : item)))
  }

  return (
    <>
      <Box maxWidth="xs" paddingTop={0} justifyContent="space-around" textAlign="left">
        {/* <Paper elevation={3} > */}
        <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 0 }}>
          <Box textAlign="left">
            <Box>
              <Grid container spacing={0} alignItems="center" justifyContent="space-between">
                <Typography variant="body1" color="info.main">
                  Experience [Jan 2023 - Nov 2023]
                </Typography>
                <IconButton>
                  <SyncAltIcon color="success" />
                </IconButton>
              </Grid>

              <Card elevation={4} sx={{ backgroundColor: 'transparent', maxHeight: 560 }}>
                <Box p={1} justifyContent={'space-between'} sx={{ height: '100%' }}>
                  <Typography variant="h5">Software Developer</Typography>

                  <Link href="https://code.qtalents.co" underline="hover" color="text.primary">
                    <Typography variant="body2" gutterBottom={true}>
                      in: code.qtalents.co
                    </Typography>
                  </Link>

                  <Typography variant="body1" gutterBottom={true} color={'primary.main'}>
                    Designed and developed new features to meet user requirements and needs. Researched modern technologies and innovative solutions to optimize development processes.
                  </Typography>

                  <Typography variant="subtitle1">Code Refactoring:</Typography>
                  <Typography variant="body2" gutterBottom={true} color={'primary.main'}>
                    Refactored existing code to improve readability, scalability, and maintainability.
                  </Typography>

                  <Typography variant="subtitle1">Debugging and Error Correction:</Typography>
                  <Typography variant="body2" gutterBottom={true} color={'primary.main'}>
                    Identified, analyzed, and resolved code errors to ensure system stability and smooth operation.
                  </Typography>

                  <Typography variant="subtitle1">Implementation of New UI Components:</Typography>
                  <Typography variant="body2" gutterBottom={true} color={'primary.main'}>
                    Developed and integrated a new UI component that significantly enhanced user experience. Conducted testing and optimization of the new UI component.
                  </Typography>
                  <Typography variant="subtitle1">Technical Skills:</Typography>
                  <Typography variant="body2" gutterBottom={true} color={'primary.main'}>
                    Programming languages: JavaScript Frameworks: Next.js Libraries: React Tools: Git
                  </Typography>
                </Box>
              </Card>
              <Card>
                {projects.map((project, index) => (
                  <Grid xs={12} md={12} item key={project.id}>
                    <Box
                      component="article"
                      sx={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        p: 0,
                      }}>
                      <Card elevation={4} sx={{ backgroundColor: 'transparent' }}>
                        <Box p={1} justifyContent={'space-between'}>
                          <Typography variant="body1">Apr 15, 2024 Finished Omex Build Project: [ feb 2024 - apr 2024 ]</Typography>
                          <Typography variant="body2">Functional Requirements: contact form, customer review, scanning qr code notification to mail </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            overflowY: 'auto',
                            scrollSnapType: 'x mandatory',
                            scrollbarWidth: '-moz-initial',
                            '&::-webkit-scrollbar': { display: 'none' },
                          }}
                          onScroll={handleScroll(index)}>
                          {project.images.map((image, imageIndex) => (
                            <CardMedia
                              key={imageIndex}
                              component="img"
                              height="420px"
                              image={`aboutme/omex/${image}.webp`}
                              alt={project.title}
                              sx={{
                                flex: 'none',
                                scrollSnapAlign: 'start',
                                objectFit: 'contain',
                              }}
                            />
                          ))}
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mt: 0,
                          }}>
                          {project.images.map((_, dotIndex) => (
                            <Box
                              key={dotIndex}
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                backgroundColor: dotIndex === currentImage[index] ? 'primary.main' : 'grey.500',
                                mx: 0.5,
                              }}
                            />
                          ))}
                        </Box>
                        <Box p={1} display={'flex'} justifyContent={'space-between'}>
                          <Typography component="h3" variant="body2" style={{ fontSize: '0.8rem' }} fontWeight={300} alignContent="center">
                            {project.title} {project.street}
                          </Typography>
                        </Box>
                      </Card>
                    </Box>
                  </Grid>
                ))}
              </Card>
            </Box>

            {/* {projects.map((project, index) => (
							<Grid xs={12} md={12} item key={project.id}>
								<Box component='article' sx={{ width: '100%', height: '100%', position: 'relative', p: 0 }}>

									<Card elevation={4} sx={{ backgroundColor: 'transparent' }}>
										<Box p={1} justifyContent={'space-between'}>
											<Typography variant="body1">Apr 15, 2024 Finished Omex Build Project: [ feb 2024 - apr 2024 ]</Typography>
											<Typography variant="body2">Functional Requirements: contact form, customer review, scanning qr code notification to mail </Typography>
										</Box>

										<Box sx={{ display: 'flex', overflowY: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: '-moz-initial', '&::-webkit-scrollbar': { display: 'none' } }} onScroll={handleScroll(index)}>
											{project.images.map((image, imageIndex) => (
												<CardMedia key={imageIndex} component="img" height="420px" image={`aboutme/omex/${image}.webp`} alt={project.title} sx={{ flex: 'none', scrollSnapAlign: 'start', objectFit: 'contain' }} />
											))}
										</Box>

										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 0 }}>
											{project.images.map((_, dotIndex) => (
												<Box key={dotIndex} sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: dotIndex === currentImage[index] ? 'primary.main' : 'grey.500', mx: 0.5 }} />
											))}

										</Box>
										<Box p={1} display={'flex'} justifyContent={'space-between'}>
											<Typography component='h3' variant='body2' style={{ fontSize: '0.8rem' }} fontWeight={300} alignContent='center'>
												{project.title} {project.street}
											</Typography>
										</Box>
									</Card>
								</Box>
							</Grid>
						))}  */}
          </Box>
        </Paper>
        {/* </Paper> */}
      </Box>
    </>
  )
}

export default QtWidget

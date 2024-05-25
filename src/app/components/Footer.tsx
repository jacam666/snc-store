import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Link from 'next/link';
//import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <Link href='https://www.facebook.com/uksnc' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </Link>
                    <Link href='https://twitter.com/SNC52678131' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </Link>
                    <Link href='https://www.instagram.com/snc_supplements_/' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </Link>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-2" />
                                UKSNC Supplements
                            </h6>
                            <p>
                                SNC SUPPLEMENTS has been established since 2017 The products we produce are designed and used by experienced Bodybuilders. We aim at producing the highest quality products.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                            <p>
                                <Link href='/ProteinCataloguePage' className='text-reset'>Protein</Link>  
                            </p>
                            <p>
                            <Link href='/PreWorkoutCataloguePage' className='text-reset'>Pre-Workouts</Link>
                            </p>
                            <p>
                            <Link href='/FatLossCataloguePage' className='text-reset'>Fat Loss</Link>
                            </p>
                            <p>
                            <Link href='/WellBeingCataloguePage' className='text-reset'>General Wellbeing</Link>
                            </p>
                            <p>
                            <Link href='/TrainingAndDietPage' className='text-reset'>Training and Diet Plans</Link>
                            </p>
                            <p>
                            <Link href='/TheStudioPage' className='text-reset'>The Studio</Link>
                            </p>
                        </MDBCol>
                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Moorings, Watling Street, Hockliffe, Leighton Buzzard LU7 9NB
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                hello@uksnc.co.uk
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> 01525 211127
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright:
                <p className='text-reset fw-bold' >
                    CAMDesigns.com
                </p>
            </div>
        </MDBFooter>
    );
}
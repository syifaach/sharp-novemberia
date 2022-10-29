import React, { useState } from 'react';
import { Formik } from 'formik';
import { Button, Grid, InputLabel, OutlinedInput, Stack, FormHelperText } from '@mui/material';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const FormHadiah = () => {
    const router = useNavigate();
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <button className="btn btn-primary" style={{ float: 'right' }} onClick={() => router('/jenis-hadiah')}>
                    Kembali
                </button>
                <Formik
                    initialValues={{
                        hadiah: ''
                    }}
                    validationSchema={Yup.object().shape({
                        hadiah: Yup.string().max(255).required('Hadiah Tidak boleh kosong')
                    })}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        try {
                            setStatus({ success: false });
                            setSubmitting(false);
                        } catch (err) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="email-login">Hadiah</InputLabel>
                                        <OutlinedInput
                                            id="email-login"
                                            type="email"
                                            value={values.hadiah}
                                            name="hadiah"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Masukan Jenis Hadiah"
                                            fullWidth
                                            error={Boolean(touched.hadiah && errors.hadiah)}
                                        />
                                        {touched.hadiah && errors.hadiah && (
                                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                                {errors.hadiah}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                {errors.submit && (
                                    <Grid item xs={12}>
                                        <FormHelperText error>{errors.submit}</FormHelperText>
                                    </Grid>
                                )}
                                <Grid item xs={2}>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </Grid>
        </Grid>
    );
};

export default FormHadiah;

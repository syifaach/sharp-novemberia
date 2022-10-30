import React, { useState } from 'react';
import { Formik } from 'formik';
import { Button, Grid, InputLabel, OutlinedInput, Stack, FormHelperText } from '@mui/material';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const MenuRoot = () => {
    const router = useNavigate();
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Formik
                    initialValues={{
                        name: '',
                        alamat: '',
                        hp: '',
                        ktp: '',
                        dealer: '',
                        kategoriDealer: '',
                        tipeProduk: '',
                        harga: '',
                        jumlah: '',
                        total: '',
                        file: ''
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().max(255).required('Nama Tidak boleh kosong'),
                        alamat: Yup.string().max(255).required('Alamat Tidak boleh kosong'),
                        ktp: Yup.string().max(255).required('No KTP Tidak boleh kosong'),
                        hp: Yup.string().max(255).required('No HP Tidak boleh kosong'),
                        dealer: Yup.string().max(255).required('Dealer Tidak boleh kosong'),
                        kategoriDealer: Yup.string().max(255).required('Kategori Dealer Tidak boleh kosong'),
                        tipeProduk: Yup.string().max(255).required('Tipe Produk Tidak boleh kosong'),
                        harga: Yup.string().max(255).required('Harga Tidak boleh kosong'),
                        jumlah: Yup.string().max(255).required('field Tidak boleh kosong'),
                        file: Yup.string().max(255).required('Bukti Invoice Tidak boleh kosong')
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
                            <Grid container spacing={3} padding={10}>
                                <Grid item xs={12}>
                                    <h5>Data Pengguna</h5>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="name-login">Nama Sesuai KTP</InputLabel>
                                        <OutlinedInput
                                            id="name-login"
                                            type="text"
                                            value={values.name}
                                            name="name"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Masukan Nama"
                                            fullWidth
                                            error={Boolean(touched.name && errors.name)}
                                        />
                                        {touched.name && errors.name && (
                                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                                {errors.name}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="alamat-login">Alamat</InputLabel>
                                        <OutlinedInput
                                            id="alamat-login"
                                            type="text"
                                            value={values.alamat}
                                            name="alamat"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Masukan Alamat"
                                            fullWidth
                                            error={Boolean(touched.alamat && errors.alamat)}
                                        />
                                        {touched.alamat && errors.alamat && (
                                            <FormHelperText error id="standard-weight-helper-text-alamat-login">
                                                {errors.alamat}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="ktp-login">Nomor KTP</InputLabel>
                                        <OutlinedInput
                                            id="ktp-login"
                                            type="number"
                                            value={values.ktp}
                                            name="ktp"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Masukan Nomor KTP"
                                            fullWidth
                                            error={Boolean(touched.ktp && errors.ktp)}
                                        />
                                        {touched.ktp && errors.ktp && (
                                            <FormHelperText error id="standard-weight-helper-text-ktp-login">
                                                {errors.ktp}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="hp-login">Nomor HP</InputLabel>
                                        <OutlinedInput
                                            id="hp-login"
                                            type="number"
                                            value={values.hp}
                                            name="hp"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Masukan Nomor HP"
                                            fullWidth
                                            error={Boolean(touched.hp && errors.hp)}
                                        />
                                        {touched.hp && errors.hp && (
                                            <FormHelperText error id="standard-weight-helper-text-hp-login">
                                                {errors.hp}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>

                                <Grid item xs={12}>
                                    <h5>Data Penjualan Produk</h5>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="dealer-login">Nama Dealer</InputLabel>
                                        <OutlinedInput
                                            id="dealer-login"
                                            type="text"
                                            value={values.dealer}
                                            name="dealer"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Masukan Nama"
                                            fullWidth
                                            error={Boolean(touched.dealer && errors.dealer)}
                                        />
                                        {touched.dealer && errors.dealer && (
                                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                                {errors.dealer}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                    <Stack spacing={1}>
                                        <InputLabel id="demo-simple-select-label">Kategori Dealer</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.kategoriDealer}
                                            label="Kategori Deale"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                        {touched.kategoriDealer && errors.kategoriDealer && (
                                            <FormHelperText error id="standard-weight-helper-text-kategoriDealer-login">
                                                {errors.kategoriDealer}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                    <Stack spacing={1}>
                                        <InputLabel id="demo-simple-select-label">Tipe Produk</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.tipeProduk}
                                            name="tipeProduk"
                                            label="Tipe Produk"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                        {touched.tipeProduk && errors.tipeProduk && (
                                            <FormHelperText error id="standard-weight-helper-text-tipeProduk-login">
                                                {errors.tipeProduk}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="ktp-login">Harga Produk</InputLabel>
                                        <OutlinedInput
                                            id="ktp-login"
                                            type="number"
                                            value={values.harga}
                                            name="harga"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Masukan Nomor KTP"
                                            fullWidth
                                            error={Boolean(touched.harga && errors.harga)}
                                        />
                                        {touched.harga && errors.harga && (
                                            <FormHelperText error id="standard-weight-helper-text-harga-login">
                                                {errors.harga}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="jumlah-login">Jumlah Pembelian Produk</InputLabel>
                                        <OutlinedInput
                                            id="jumlah-login"
                                            type="number"
                                            value={values.jumlah}
                                            name="jumlah"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Masukan jumlah Pembelian"
                                            fullWidth
                                            error={Boolean(touched.jumlah && errors.jumlah)}
                                        />
                                        {touched.jumlah && errors.jumlah && (
                                            <FormHelperText error id="standard-weight-helper-text-jumlah-login">
                                                {errors.jumlah}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="total-login">Total Harga Pembelian Produk</InputLabel>
                                        <OutlinedInput
                                            id="total-login"
                                            type="number"
                                            value={values.total}
                                            name="total"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Total Harga Pembelian Produk"
                                            disabled={true}
                                            fullWidth
                                            error={Boolean(touched.total && errors.total)}
                                        />
                                        {touched.total && errors.total && (
                                            <FormHelperText error id="standard-weight-helper-text-total-login">
                                                {errors.total}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="ktp-login">Bukti Foto Invoice ukuran (max 5mb)</InputLabel>
                                        <OutlinedInput
                                            id="ktp-login"
                                            type="file"
                                            value={values.file}
                                            name="file"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Bukti Foto Invoice"
                                            fullWidth
                                            error={Boolean(touched.file && errors.file)}
                                        />
                                        {touched.file && errors.file && (
                                            <FormHelperText error id="standard-weight-helper-text-file-login">
                                                {errors.file}
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
                                        onClick={() => router('/spin-whelee')}
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

export default MenuRoot;

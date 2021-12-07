import crypto from 'crypto'
import request from 'supertest'
import Clinics from '../../src/database/models/Clinics'

const app = require('../../src/app')


const strRandon = () => {
    return crypto.randomBytes(30).toString("hex")
}

const getNewClinic = (empty: boolean = false) => {
    return {
        ds_name: empty ? null : strRandon(),
        ds_cnpj: empty ? null : strRandon(),
        ds_logradouro: empty ? null : strRandon(),
        ds_numero: empty ? null : strRandon(),
        ds_complemento: empty ? null : strRandon(),
        ds_bairro: empty ? null : strRandon(),
        ds_cidade: empty ? null : strRandon(),
        ds_estado: empty ? null : strRandon(),
        ds_pais: empty ? null : strRandon(),
        ds_latitude: empty ? null : strRandon(),
        ds_longitude: empty ? null : strRandon(),
    }
}


describe('Clinics Integration Tests', () => {

    it('Should post Clinic with valid values', async () => {

        const newClinic = getNewClinic()
        const response = await request(app).post('/clinics').send(newClinic)

        expect(response.status).toBe(200)

    })

    it('Should post Clinic with empty values', async () => {

        const newClinic = getNewClinic(true)
        const response = await request(app).post('/clinics').send(newClinic)

        expect(response.status).toBe(400)
        expect(response.body.success).toBe(false)

    })


    it('Should put Clinic with exists', async () => {

        const newClinic = getNewClinic()
        const resCreate = await request(app).post('/clinics').send(newClinic)

        expect(resCreate.body.success).toBe(true)

        let savedClinic = resCreate.body.data
        savedClinic.ds_name = 'UPDATE ' + savedClinic.ds_name;
        const resUpdate = await request(app).put('/clinics').send(savedClinic)

        expect(resUpdate.status).toBe(200)
        expect(resUpdate.body.success).toBe(true)
    })

    /*
    it('Should put Clinic with not exists', async () => {

        let newClinic = getNewClinic()
        newClinic.id = 1234;
        const response = await request(app).put('/clinics').send(newClinic)

        expect(response.status).toBe(404)
    })
    */

    it('Should put Clinic with empty values', async () => {

        const newClinic = getNewClinic(true)
        const response = await request(app).put('/clinics').send(newClinic)

        expect(response.status).toBe(400)
    })


});


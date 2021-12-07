import crypto from 'crypto'
import ClinicsDao from "../../src/dao/ClinicsDao"

const strRandon = () => {
    return crypto.randomBytes(30).toString("hex")
}

const getNewClinic = () => {
    return {
        ds_name: strRandon(),
        ds_cnpj: strRandon(),
        ds_logradouro: strRandon(),
        ds_numero: strRandon(),
        ds_complemento: strRandon(),
        ds_bairro: strRandon(),
        ds_cidade: strRandon(),
        ds_estado: strRandon(),
        ds_pais: strRandon(),
        ds_latitude: strRandon(),
        ds_longitude: strRandon(),
    }
}



describe('Clinics Unit Tests', () => {

    it('Should save Clinic', async () => {

        const newClinic = getNewClinic()
        const savedClinic = await ClinicsDao.create(newClinic)

        expect(savedClinic).not.toBeNull()
        expect(savedClinic.id).not.toBeNull()
        expect(savedClinic.ds_name).toBe(newClinic.ds_name)
    })

    it('Should update Clinic', async () => {

        const newClinic = getNewClinic()
        let createdClinic = await ClinicsDao.create(newClinic)

        createdClinic.ds_name = "Teste - " + createdClinic.ds_name
        const updatedClinic = await createdClinic.save();

        expect(updatedClinic).not.toBeNull()
        expect(updatedClinic.id).not.toBeNull()
        expect(updatedClinic.ds_name).toBe(createdClinic.ds_name)
    })

    /*
    it('Should find Clinic by ID', async () => {

        const newClinic = getNewClinic()
        const createdClinic = await ClinicsDao.create(newClinic)

        const findClinic = await ClinicsDao.findById(createdClinic.id);

        expect(findClinic).not.toBeNull()
    })

    
    it('Should find Clinic by ID if empty params', async () => {

        const param: any = undefined
        await expect(ClinicsDao.findById(param)).rejects.toThrow()
    })
    */
    it('Should save Clinic with CNPJ exists', async () => {

        const newClinic = getNewClinic()
        const createdClinic = await ClinicsDao.create(newClinic)

        let newClinic2 = getNewClinic()
        newClinic2.ds_cnpj = newClinic.ds_cnpj

        await expect(ClinicsDao.create(newClinic2)).rejects.toThrow()
    })

    it('Should save empty Clinic', async () => {

        const newClinic: any = {}
        await expect(ClinicsDao.create(newClinic)).rejects.toThrow()

    })

    it('Should list saved Clinic by id', async () => {

        const newClinic = getNewClinic()
        const createdClinic = await ClinicsDao.create(newClinic)

        const { id } = createdClinic
        const listedClinic = await ClinicsDao.findById(id)

        expect(listedClinic).not.toBeNull()
    })

    it('Should list not saved Clinic by id', async () => {

        const id = 1234
        const listedClinic = await ClinicsDao.findById(id)

        expect(listedClinic).toBeNull()
    })
    /*
    it('Should list saved Clinic by address', async () => {

        const newClinic = getNewClinic()
        const createdClinic = await ClinicsDao.create(newClinic)

        const listedClinic = await ClinicsDao.findByAddress(createdClinic)

        expect(listedClinic).not.toBeNull()
        expect(listedClinic.length).toBeGreaterThanOrEqual(1)
    })
    */
})

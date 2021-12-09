import { Op, Sequelize } from "sequelize/dist"
import Clinics, { ClinicsAttributes } from "../database/models/Clinics"

class ClinicsDao {

    private offset: number = 0
    private limit: number = 10

    async create(clinic: ClinicsAttributes) {
        return await Clinics.create(clinic)
    }

    async update(clinic: ClinicsAttributes) {

        if (!clinic || clinic.id) {
            throw '"id" is required'
        }

        const savedClinic = await Clinics.findOne({
            where: { 'id': clinic.id }
        })

        if (!savedClinic) {
            return -1
        }

        return await savedClinic.update(clinic)
    }

    async find(params: any) {
        const limit = params.limit || this.limit
        const offset = params.offset || this.offset

        return await Clinics.findAll({ offset, limit })
    }

    async findById(id: number) {

        if (!id) {
            throw '"id" is required'
        }

        return await Clinics.findOne({
            where: { id }
        })
    }

    async findByAddress(params: any) {
        let { address } = params
        const limit = params.limit || this.limit
        const offset = params.offset || this.offset

        const endereco = '%' + address + '%'

        return await Clinics.findAll({
            where: {
                [Op.or]: [
                    { ds_logradouro: { [Op.iLike]: endereco } },
                    { ds_bairro: { [Op.iLike]: endereco } },
                    { ds_cidade: { [Op.iLike]: endereco } },
                    { ds_estado: { [Op.iLike]: endereco } }
                ],
            }
        })
    }

    async deleteById(id: number) {

        if (!id) {
            throw '"id" is required'
        }

        const savedClinic = await Clinics.findOne({
            where: { 'id': id }
        })

        if (!savedClinic) {
            return -1
        }

        return await savedClinic.destroy()
    }
}

export default new ClinicsDao()
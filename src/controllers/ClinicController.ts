import { Request, Response } from "express"
import ClinicsDao from "../dao/ClinicsDao"
import crypto from "crypto"

class ClinicController {

    async find(req: Request, res: Response) {
        try {
            const limit = req.body.limit || 10
            const offset = req.body.offset || 0

            const clinics = await ClinicsDao.find({ offset, limit })

            console.log('find: ', req.body);

            return res.status(200).json({
                success: true,
                data: clinics
            })
        }
        catch (e) {
            return res.status(400).json({
                success: false,
                msg: e.messages || "Invalid values"
            })
        }
    }

    async findByAddress(req: Request, res: Response) {
        try {
            const clinics = await ClinicsDao.findByAddress(req.body)
            return res.status(200).json({
                success: true,
                data: clinics
            })
        }
        catch (e) {
            return res.status(400).json({
                success: false,
                msg: e.messages || "Invalid values"
            })
        }
    }

    async createTeste(req: Request, res: Response) {
        try {
            console.log("-----> Aqui 1");

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

            const newClinic = await ClinicsDao.findById(1)

            return res.status(200).json({
                success: true,
                data: newClinic
            })
        }
        catch (e) {
            console.log(e)
            return res.status(400).json({
                success: false,
                msg: e.messages || "Invalid values"
            })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const newClinic = await ClinicsDao.create(req.body)
            return res.status(200).json({
                success: true,
                data: newClinic
            })
        }
        catch (e) {
            return res.status(400).json({
                success: false,
                msg: e.messages || "Invalid values"
            })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const upClinic = await ClinicsDao.update(req.body)
            return res.status(200).send({
                success: true,
                data: upClinic
            })
        }
        catch (e) {
            return res.status(400).json({
                success: false,
                msg: e.messages || "Invalid values"
            })
        }
    }

    async delete(req: Request, res: Response) {
        return res.status(200).send({ teste: true })
    }

}

export default new ClinicController()
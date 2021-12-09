import { Request, Response } from "express"
import ClinicsDao from "../dao/ClinicsDao"
import crypto from "crypto"

const checkRequiredFields = (data: any) => {
    const required = [
        'ds_name',
        'ds_cnpj'
    ]
    const erros = required.filter(v => !data[v])

    if (erros.length > 0) return `Campos são obrigatórios: ${erros.join(', ')}`

    return null;
}


class ClinicController {

    async find(req: Request, res: Response) {
        try {
            const limit = req.body.limit || 10
            const offset = req.body.offset || 0

            const clinics = await ClinicsDao.find({ offset, limit })

            return res.status(200).json({
                success: true,
                data: clinics
            })
        }
        catch (e) {
            return res.status(400).json({
                success: false,
                msg: "Invalid values"
            })
        }
    }

    async findByAddress(req: Request, res: Response) {
        try {
            const clinics = await ClinicsDao.findByAddress(req.params)
            return res.status(200).json({
                success: true,
                data: clinics
            })
        }
        catch (e) {
            return res.status(400).json({
                success: false,
                msg: "Invalid values"
            })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const requiredFields = checkRequiredFields(req.body)
            if (requiredFields && requiredFields != "") {
                return res.status(400).json({
                    success: false,
                    msg: requiredFields
                })
            }

            const newClinic = await ClinicsDao.create(req.body)
            return res.status(200).json({
                success: true,
                data: [newClinic]
            })
        }
        catch (e) {
            console.log("ClinicController - create - Error: ", req.body, e)
            return res.status(400).json({
                success: false,
                msg: "Invalid values"
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
                msg: "Invalid values"
            })
        }
    }

    async delete(req: Request, res: Response) {
        return res.status(200).send({ teste: true })
    }

}

export default new ClinicController()
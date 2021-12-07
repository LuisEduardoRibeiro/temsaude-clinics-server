import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config/sequelizeConnection'

export interface ClinicsAttributes {
    id?: number,
    ds_name: string,
    ds_cnpj: string,
    ds_logradouro?: string,
    ds_numero?: string,
    ds_complemento?: string,
    ds_bairro?: string,
    ds_cidade?: string,
    ds_estado?: string,
    ds_pais?: string,
    ds_latitude?: string,
    ds_longitude?: string
}
export interface ClinicInput extends Optional<ClinicsAttributes, 'id'> { }
export interface ClinicOuput extends Required<ClinicsAttributes> { }

class Clinics extends Model<ClinicsAttributes, ClinicInput> implements ClinicsAttributes {
    public id!: number
    public ds_name!: string
    public ds_cnpj!: string
    public ds_logradouro!: string
    public ds_numero!: string
    public ds_complemento!: string
    public ds_bairro!: string
    public ds_cidade!: string
    public ds_estado!: string
    public ds_pais!: string
    public ds_latitude!: string
    public ds_longitude!: string

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

Clinics.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ds_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ds_cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    ds_logradouro: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ds_numero: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ds_complemento: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ds_bairro: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ds_cidade: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ds_estado: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ds_pais: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ds_latitude: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ds_longitude: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: "clinics",
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default Clinics

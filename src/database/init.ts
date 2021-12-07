import Clinics from './models/Clinics'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
    Clinics.sync({ alter: isDev })
}

export default dbInit
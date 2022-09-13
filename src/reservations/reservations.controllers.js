const uuid = require('uuid')
const Reservation = require('../models/reservations.model')

const getAllReservations = async () => {

}

const createReservation = async (data, userId, accommodationId) => {
    const { isFinished, isCanceled, ...restOfData } = data
    const newReservation = await Reservation.create({
        ...restOfData,
        id: uuid.v4(),
        userId: userId,
        accommodationId: accommodationId,
    })
    return newReservation
}


module.exports = {
    createReservation
}
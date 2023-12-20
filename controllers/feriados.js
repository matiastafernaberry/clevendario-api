import Holiday from '../models/holidays.js'


// Crear feriado
export const createHoliday = async (req, res) => {
    const { nombre, fecha } = req.body;

    try {
        const newHoliday = await Holiday.create({
            nombre,
            fecha,
        });

        res.status(201).json(newHoliday);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el feriado' });
    }
}


// Ver feriados
export const getAllHolidays = async (req, res) => {
    try {
        const holidays = await Holiday.find();
        res.json(holidays);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los feriados' });
    }
}



// editar feriado por ID
export const editHolidayById = async (req, res) => {
    const holidayId = req.params.id;

    try {
        const updatedHoliday = await Holiday.findByIdAndUpdate(
            holidayId,
            { $set: req.body },
            { new: true }
        );

        if (!updatedHoliday) {
            return res.status(404).send(`Feriado con ID ${holidayId} no encontrado`);
        }

        res.json(updatedHoliday);
    } catch (error) {
        res.status(500).json({ error: 'Error al editar el feriado' });
    }
}

// borrar feriado por ID
export const deleteHolidayById = async (req, res) => {
    const holidayId = req.params.id;

    try {
        const deletedHoliday = await Holiday.findByIdAndDelete(holidayId);

        if (!deletedHoliday) {
            return res.status(404).send(`Feriado con ID ${holidayId} no encontrado`);
        }

        res.send(`Feriado con ID ${holidayId} eliminado correctamente`);
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el feriado' });
    }
}

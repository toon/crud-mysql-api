const create = (Model) => async (req, res) => {
    try {
        const item = await Model.create(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAll = (Model) => async (req, res) => {
    try {
        const items = await Model.findAll();
        res.status(200).json(items);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const update = (Model) => async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await Model.update(req.body, { where: { id } });
        if (updated) {
            const updatedItem = await Model.findOne({ where: { id } });
            res.status(200).json(updatedItem);
        } else {
            res.status(404).send('Item not found');
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const remove = (Model) => async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Model.destroy({ where: { id } });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send('Item not found');
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    create,
    getAll,
    update,
    remove
};

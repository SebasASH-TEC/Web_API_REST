const linkedList = require('../models/linkedList');

exports.getAllNodes = (req, res) => {
    res.json(linkedList.getAll());
};

exports.addNode = (req, res) => {
    const { value } = req.body;
    if (!value) {
        return res.status(400).json({ error: 'Missing value field' });
    }
    const id = linkedList.add(value);
    res.status(201).json({ id });
};

exports.deleteNode = (req, res) => {
    const id = req.params.id;
    const success = linkedList.deleteById(id);
    if (success) {
        res.status(200).json({ message: 'Node deleted' });
    } else {
        res.status(404).json({ error: 'Node not found' });
    }
};

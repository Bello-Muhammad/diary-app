const getAllEntries = "SELECT * FROM entry";
const getEntry = "SELECT * FROM entry WHERE id = $1";
const checkEntryExist = "SELECT e FROM entry e WHERE e.title = $1";
const addEntry = "INSERT INTO entry (title, description, owner) VALUES ($1, $2, $3)";
const deleteEntry = "DELETE FROM entry WHERE id = $1";
const editEntry = "UPDATE entry SET description = $1 WHERE id = $2";

module.exports = {
    getAllEntries,
    getEntry,
    checkEntryExist,
    addEntry,
    editEntry,
    deleteEntry
};